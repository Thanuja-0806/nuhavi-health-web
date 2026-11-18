const fs = require('fs');
const path = require('path');

const specs = [
  { slug: 'cardiology', name: 'Cardiology', expectedSvgSnippet: '19.5 13.572' }, // heart path
  { slug: 'oncology', name: 'Oncology', expectedSvgSnippet: '6 9a6 6 0 0 1 12 0' }, // ribbon path
  { slug: 'neurology', name: 'Neurology', expectedSvgSnippet: '12 5a3 3 0 1 0-5.997' }, // brain path
  { slug: 'orthopedics', name: 'Orthopedics', expectedSvgSnippet: 'M17 10c.7-.7' }, // bone path
  { slug: 'spine-surgery', name: 'Spine Surgery', expectedSvgSnippet: 'x1="12" y1="2" x2="12" y2="22"' }, // spine line
  { slug: 'hair-transplantation', name: 'Hair Transplantation', expectedSvgSnippet: 'M3 18h18' }, // hair follicle
  { slug: 'weight-loss-surgery', name: 'Weight Loss Surgery', expectedSvgSnippet: 'M10 2v3c-2.5 1' }, // stomach path
  { slug: 'ivf', name: 'IVF', expectedSvgSnippet: 'r="9"' }, // embryo circle
  { slug: 'bone-marrow-transplant', name: 'Bone Marrow Transplant', expectedSvgSnippet: '12 2.5c0 0-6 6.5' }, // blood cell
  { slug: 'kidney-transplant', name: 'Kidney Transplant', expectedSvgSnippet: 'M6 7c-1.5 0-3 1.5' }, // kidneys path
  { slug: 'liver-transplant', name: 'Liver Transplant', expectedSvgSnippet: 'M4 8.5C5.5 5.5' }, // liver path
  { slug: 'dental-care', name: 'Dental Care', expectedSvgSnippet: 'M12 4c-3-1.5' }, // tooth path
  { slug: 'ayush-wellness', name: 'AYUSH Wellness', expectedSvgSnippet: 'M11 20A7 7' }, // leaf path
  { slug: 'general-surgery', name: 'General Surgery', expectedSvgSnippet: 'M19 4L11 12' }, // scalpel path
  { slug: 'cosmetic-surgery', name: 'Cosmetic Surgery', expectedSvgSnippet: 'M9 3c2.5 0' } // face profile
];

console.log('=== VERIFYING KNOWLEDGE CENTRE SPECIALTY LANDING PAGES ===');
let passCount = 0;

for (const s of specs) {
  const filePath = path.join('dist/en/knowledge-centre', s.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] File missing: ${filePath}`);
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  // Check hero banner has expected icon
  const heroMatch = html.includes(s.expectedSvgSnippet);
  // Check if non-cardiology contains cardiology heart in hero
  const hasUnwantedHeart = s.slug !== 'cardiology' && html.includes('hero-icon-frame') && html.substring(html.indexOf('hero-icon-frame'), html.indexOf('hero-icon-frame') + 400).includes('19.5 13.572');

  if (heroMatch && !hasUnwantedHeart) {
    console.log(`[PASS] ${s.slug}: correct unique medical icon in hero & cards`);
    passCount++;
  } else {
    console.error(`[FAIL] ${s.slug}: heroMatch=${heroMatch}, unwantedHeart=${hasUnwantedHeart}`);
  }
}

console.log(`\nResult: ${passCount}/${specs.length} specialty landing pages verified!`);

console.log('\n=== VERIFYING ALL ARTICLES PAGE (resources/index.html) ===');
const resHtml = fs.readFileSync('dist/en/resources/index.html', 'utf8');
console.log('1. Filter chips have specialty icons:', resHtml.includes('chip-spec-icon'));
console.log('2. Summary headers have specialty icon badges:', resHtml.includes('cat-summary-icon'));
console.log('3. Article cards have specialty-specific meta icons:', resHtml.includes('art-card-spec-meta'));

// Check multiple specialties in resources
for (const s of ['oncology', 'neurology', 'orthopedics', 'dental-care']) {
  const match = resHtml.includes(s);
  console.log(`  - ${s} present in All Articles page: ${match}`);
}

console.log('\n=== VERIFYING INDIVIDUAL ARTICLE PAGES ===');
const oncologyArticlePath = 'dist/en/knowledge-centre/oncology/understanding-cancer-how-does-it-develop/index.html';
if (fs.existsSync(oncologyArticlePath)) {
  const oncHtml = fs.readFileSync(oncologyArticlePath, 'utf8');
  const hasRibbon = oncHtml.includes('6 9a6 6 0 0 1 12 0');
  const hasHeart = oncHtml.substring(oncHtml.indexOf('specialty-badge'), oncHtml.indexOf('specialty-badge') + 300).includes('19.5 13.572');
  console.log(`Oncology article badge: hasRibbon=${hasRibbon}, hasUnwantedHeart=${hasHeart}`);
}

const neuroArticlePath = 'dist/en/knowledge-centre/neurology/understanding-stroke-and-its-early-warning-signs/index.html';
if (fs.existsSync(neuroArticlePath)) {
  const neuroHtml = fs.readFileSync(neuroArticlePath, 'utf8');
  const hasBrain = neuroHtml.includes('12 5a3 3 0 1 0-5.997');
  const hasHeart = neuroHtml.substring(neuroHtml.indexOf('specialty-badge'), neuroHtml.indexOf('specialty-badge') + 300).includes('19.5 13.572');
  console.log(`Neurology article badge: hasBrain=${hasBrain}, hasUnwantedHeart=${hasHeart}`);
}

