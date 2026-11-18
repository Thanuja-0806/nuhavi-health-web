const fs = require('fs');
const path = require('path');

const enHtml = fs.readFileSync(path.join(__dirname, '../dist/en/index.html'), 'utf-8');

console.log('=== VERIFYING HOMEPAGE SEARCH IMPLEMENTATION ===');

// Check 1: Form action
const formActionMatch = enHtml.match(/<form[^>]*id="hero-kc-search-form"[^>]*action="([^"]+)"/);
console.log('1. Form action:', formActionMatch ? formActionMatch[1] : 'NOT FOUND');
if (formActionMatch && formActionMatch[1] === '/en/knowledge-centre/') {
  console.log('   ✓ Form action correctly targets /en/knowledge-centre/');
} else {
  console.error('   ✗ FAILED: Form action is not /en/knowledge-centre/');
}

// Check 2: Results panel container
const hasPanel = enHtml.includes('id="hero-search-results-panel"');
console.log('2. Search results panel container:', hasPanel ? '✓ Present' : '✗ Missing');

// Check 3: Popular links
const popularLinks = [
  { name: 'Cancer treatment', expected: '/en/knowledge-centre/oncology/' },
  { name: 'Knee replacement', expected: '/en/knowledge-centre/orthopedics/' },
  { name: 'Kidney transplant', expected: '/en/knowledge-centre/kidney-transplant/' },
  { name: 'Second opinion', expected: '/en/request-opinion/' }
];

console.log('3. Popular shortcuts links:');
popularLinks.forEach(p => {
  const hasLink = enHtml.includes(`href="${p.expected}"`);
  console.log(`   ${hasLink ? '✓' : '✗'} ${p.name} -> ${p.expected} (${hasLink ? 'OK' : 'FAIL'})`);
});

// Check 4: No treatments link in hero popular tags
const hasOldTreatmentsLinkInHero = enHtml.includes('/en/treatments/oncology/') ||
  enHtml.includes('/en/treatments/orthopaedics/') ||
  enHtml.includes('/en/treatments/nephrology-urology/');
console.log('4. Old treatments links removed from hero:', !hasOldTreatmentsLinkInHero ? '✓ All removed' : '✗ Still present');

// Check 5: Embedded search index
const indexMatch = enHtml.match(/<script type="application\/json" id="kc-search-index-json">([\s\S]*?)<\/script>/);
if (!indexMatch) {
  console.error('5. Embedded search index: ✗ NOT FOUND');
} else {
  const index = JSON.parse(indexMatch[1]);
  console.log(`5. Embedded search index: ✓ Found with ${index.specialties.length} specialties and ${index.articles.length} articles`);

  // Verify all 15 specialties are in index
  const specNames = index.specialties.map(s => s.name);
  console.log('   Specialties in index (15):', specNames.length);

  // Test search simulation
  const STOP_WORDS = new Set(['in', 'of', 'and', 'the', 'to', 'for', 'a', 'an', 'is', 'on', 'at', 'by', 'care', 'what', 'how', 'does', 'or']);

  function executeSearch(rawQuery) {
    const q = rawQuery.trim().toLowerCase();
    if (!q) return { specialties: [], articles: [], totalCount: 0 };

    const tokens = q.split(/\s+/).filter(t => t.length > 0);
    const significantTokens = tokens.filter(t => !STOP_WORDS.has(t));
    const activeTokens = significantTokens.length > 0 ? significantTokens : tokens;

    function scoreItem(item) {
      const isSpec = item.type === 'specialty';
      const title = (isSpec ? item.name : item.title).toLowerCase();
      const desc = (isSpec ? item.desc : item.overview).toLowerCase();
      const keywords = item.keywords || [];

      let score = 0;

      if (title === q) score += 200;
      else if (title.startsWith(q)) score += 120;
      else if (title.includes(q)) score += 80;

      if (keywords.includes(q)) score += 100;
      else if (keywords.some(k => k === q)) score += 90;
      else if (keywords.some(k => k.includes(q))) score += 60;
      else if (keywords.some(k => q.includes(k) && k.length > 3)) score += 50;

      if (desc.includes(q)) score += 30;

      let matchedSigCount = 0;
      for (const token of activeTokens) {
        if (token.length < 2) continue;
        if (title.includes(token)) {
          score += 30;
          matchedSigCount++;
        } else if (keywords.some(k => k.includes(token))) {
          score += 20;
          matchedSigCount++;
        } else if (desc.includes(token)) {
          score += 8;
          matchedSigCount++;
        }
      }

      if (activeTokens.length > 1 && matchedSigCount === activeTokens.length) {
        score += 40;
      }

      return score;
    }

    const scoredSpecs = index.specialties
      .map(s => ({ item: s, score: scoreItem(s) }))
      .filter(res => res.score >= 20)
      .sort((a, b) => b.score - a.score);

    const topSpecSlug = scoredSpecs.length > 0 ? scoredSpecs[0].item.slug : null;

    const scoredArts = index.articles
      .map(a => {
        let score = scoreItem(a);
        if (score >= 20 && topSpecSlug && a.specialtySlug === topSpecSlug) {
          score += 25;
        }
        return { item: a, score };
      })
      .filter(res => res.score >= 25)
      .sort((a, b) => b.score - a.score);

    return {
      topSpec: scoredSpecs[0]?.item || null,
      topArticle: scoredArts[0]?.item || null,
      totalCount: scoredSpecs.length + scoredArts.length
    };
  }

  const queriesToTest = [
    { query: 'Cancer treatment', expectSpec: 'Oncology' },
    { query: 'breast cancer', expectSpec: 'Oncology' },
    { query: 'Knee replacement', expectSpec: 'Orthopedics' },
    { query: 'Kidney transplant', expectSpec: 'Kidney Transplant' },
    { query: 'Heart attack', expectSpec: 'Cardiology', expectArt: 'Heart Attack: Early Warning Signs You Should Never Ignore' },
    { query: 'coronary artery disease', expectSpec: 'Cardiology', expectArt: 'What Is Coronary Artery Disease?' },
    { query: 'Bone marrow transplant', expectSpec: 'Bone Marrow Transplant' },
    { query: 'IVF', expectSpec: 'IVF & Reproductive Medicine' },
    { query: 'fertility', expectSpec: 'IVF & Reproductive Medicine' },
    { query: 'Hair transplant', expectSpec: 'Hair Transplantation' },
    { query: 'Dental care', expectSpec: 'Dental Care' }
  ];

  console.log('\n6. Testing required search query matches:');
  queriesToTest.forEach(t => {
    const res = executeSearch(t.query);
    const specOk = res.topSpec && res.topSpec.name === t.expectSpec;
    const artOk = !t.expectArt || (res.topArticle && res.topArticle.title === t.expectArt);
    const pass = specOk && artOk;
    console.log(`   ${pass ? '✓' : '✗'} "${t.query}" -> Spec: ${res.topSpec?.name} (expected ${t.expectSpec}), Top Art: ${res.topArticle?.title || 'None'}`);
  });
}

