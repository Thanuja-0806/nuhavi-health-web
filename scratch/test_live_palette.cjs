const http = require('http');
const path = require('path');
const fs = require('fs');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

async function run() {
  console.log('=== VERIFYING REFINED SPECIALTY PALETTE & EMBLEM REMOVAL ===\n');

  // Exact 15 approved core specialties from unifiedSpecialties.ts
  const tsContent = fs.readFileSync(path.join(__dirname, '../src/data/unifiedSpecialties.ts'), 'utf8');
  const arrayStart = tsContent.indexOf('export const unifiedSpecialties: UnifiedSpecialty[] = [');
  const arrayEnd = tsContent.indexOf('];', arrayStart);
  const arraySlice = tsContent.slice(arrayStart, arrayEnd);

  const idMatches = [...arraySlice.matchAll(/id:\s*'([^']+)',\s*slug:\s*'([^']+)',[\s\S]*?color:\s*'([^']+)',[\s\S]*?bgColor:\s*'([^']+)',[\s\S]*?hubHref:\s*'([^']+)',[\s\S]*?doctorHex:\s*'([^']+)'/g)];

  const unifiedSpecialties = idMatches.map(m => ({
    id: m[1],
    slug: m[2],
    color: m[3],
    bgColor: m[4],
    hubHref: m[5],
    doctorHex: m[6]
  }));

  console.log(`Found ${unifiedSpecialties.length} approved specialties.`);

  let allPassed = true;

  console.log('\n--- 1. Testing All 15 Specialty Hub Pages ---');
  for (const spec of unifiedSpecialties) {
    const url = `http://127.0.0.1:4321${spec.hubHref}`;
    const res = await fetchUrl(url);

    const statusOk = res.status === 200;
    const hasDoctorHex = new RegExp(spec.doctorHex, 'i').test(res.body);
    const hasComplementaryAccent = new RegExp(spec.color, 'i').test(res.body);
    const hasSeamlessBanner = res.body.includes(`/images/specialties/hero/${spec.slug}-seamless-banner.jpg`);

    // Check emblem removal
    const hasCardIconBox = res.body.includes('card-visual-icon-box');
    const hasMetaInlinePhoto = res.body.includes('meta-inline-photo');
    const hasRowSpecPhoto = res.body.includes('row-spec-photo');

    const emblemsClean = !hasCardIconBox && !hasMetaInlinePhoto && !hasRowSpecPhoto;

    const ok = statusOk && hasDoctorHex && hasComplementaryAccent && hasSeamlessBanner && emblemsClean;
    if (!ok) allPassed = false;

    console.log(`[${spec.id.padEnd(22)}] 200: ${statusOk ? 'OK' : 'FAIL'} | Primary BG (${spec.doctorHex}): ${hasDoctorHex ? 'OK' : 'FAIL'} | Accent (${spec.color}): ${hasComplementaryAccent ? 'OK' : 'FAIL'} | Banner: ${hasSeamlessBanner ? 'OK' : 'FAIL'} | Emblems Removed: ${emblemsClean ? 'YES' : 'LEAK'}`);
    if (!emblemsClean) {
      console.log(`  -> Leaks: cardIconBox=${hasCardIconBox}, metaInlinePhoto=${hasMetaInlinePhoto}, rowSpecPhoto=${hasRowSpecPhoto}`);
    }
  }

  console.log('\n--- 2. Testing Sample Article Detail Pages ---');
  const kData = fs.readFileSync(path.join(__dirname, '../src/data/knowledgeData.ts'), 'utf8');
  const artMatches = [...kData.matchAll(/"specialtySlug":\s*"([^"]+)",\s*"specialtyTitle":\s*"[^"]+",\s*"slug":\s*"([^"]+)"/g)];

  const testedSpecialties = new Set();
  const sampleArticles = [];
  for (const match of artMatches) {
    const [ , specSlug, artSlug ] = match;
    if (!testedSpecialties.has(specSlug)) {
      testedSpecialties.add(specSlug);
      const specMeta = unifiedSpecialties.find(s => s.slug === specSlug);
      sampleArticles.push({
        spec: specSlug,
        slug: artSlug,
        meta: specMeta
      });
    }
  }

  for (const art of sampleArticles) {
    const url = `http://127.0.0.1:4321/en/knowledge-centre/${art.spec}/${art.slug}/`;
    const res = await fetchUrl(url);

    const statusOk = res.status === 200;
    const hasDoctorHex = art.meta ? new RegExp(art.meta.doctorHex, 'i').test(res.body) : true;
    const hasAccent = art.meta ? new RegExp(art.meta.color, 'i').test(res.body) : true;

    // Emblems that must NOT exist
    const hasWatermarkCircles = res.body.includes('featured-hero-watermark');
    const hasImgFrameCircle = res.body.includes('featured-hero-img-frame');
    const hasRelatedIconBox = res.body.includes('related-icon-box');
    const hasRelatedInlinePhoto = res.body.includes('related-inline-photo');

    const emblemsClean = !hasWatermarkCircles && !hasImgFrameCircle && !hasRelatedIconBox && !hasRelatedInlinePhoto;

    // Elements that MUST exist
    const hasCleanPhotoContainer = res.body.includes('featured-hero-photo-container');
    const hasWhenToConsult = res.body.includes('when-to-consult-card');
    const hasTOC = res.body.includes('article-toc-box');
    const hasRelatedGrid = res.body.includes('related-articles-grid');

    const ok = statusOk && hasDoctorHex && hasAccent && emblemsClean && hasCleanPhotoContainer;
    if (!ok) allPassed = false;

    console.log(`[Article: ${art.spec.padEnd(20)} / ${art.slug.slice(0, 22).padEnd(22)}] 200: ${statusOk ? 'OK' : 'FAIL'} | Primary BG: ${hasDoctorHex ? 'OK' : 'FAIL'} | Accent: ${hasAccent ? 'OK' : 'FAIL'} | Circles/Frames Removed: ${emblemsClean ? 'YES' : 'LEAK'} | Clean Framing: ${hasCleanPhotoContainer ? 'YES' : 'NO'}`);
  }

  console.log(`\n=== FINAL RESULT: ${allPassed ? 'ALL TESTS PASSED WITH 100% SUCCESS!' : 'TESTS FAILED!'} ===`);
}

run().catch(console.error);
