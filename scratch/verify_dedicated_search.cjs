const fs = require('fs');
const path = require('path');

console.log('=== VERIFYING DEDICATED SEARCH FLOW ===');

// 1. Homepage checks
const homeHtml = fs.readFileSync(path.join(__dirname, '../dist/en/index.html'), 'utf-8');

const heroStart = homeHtml.indexOf('class="hero-section"');
const heroEnd = homeHtml.indexOf('</section>', heroStart);
const heroHtml = homeHtml.substring(heroStart, heroEnd);

const formMatch = heroHtml.match(/<form[^>]*id="hero-kc-search-form"[^>]*action="([^"]+)"/);
console.log('1. Homepage search form action:', formMatch ? formMatch[1] : 'NOT FOUND');
if (formMatch && formMatch[1] === '/en/knowledge-centre/search/') {
  console.log('   ✓ Form action correctly navigates to /en/knowledge-centre/search/');
} else {
  console.error('   ✗ FAILED: Form action is not /en/knowledge-centre/search/');
}

const hasDropdownInHome = homeHtml.includes('id="hero-search-results-panel"');
console.log('2. Dropdown panel removed from homepage:', !hasDropdownInHome ? '✓ Successfully removed' : '✗ Still present');

// 2. Search Results Page checks
const searchHtml = fs.readFileSync(path.join(__dirname, '../dist/en/knowledge-centre/search/index.html'), 'utf-8');

const hasBreadcrumbs = searchHtml.includes('class="kc-breadcrumbs"') && searchHtml.includes('href="/en/knowledge-centre/"');
console.log('3. Back to Knowledge Centre breadcrumbs:', hasBreadcrumbs ? '✓ Present' : '✗ Missing');

const hasRefineInput = searchHtml.includes('id="kc-search-query-input"');
console.log('4. Refine query search input on search page:', hasRefineInput ? '✓ Present' : '✗ Missing');

const hasSpecGroup = searchHtml.includes('id="specialties-results-group"');
const hasArtGroup = searchHtml.includes('id="articles-results-group"');
console.log('5. Specialties & Articles result containers:', hasSpecGroup && hasArtGroup ? '✓ Present' : '✗ Missing');

const indexMatch = searchHtml.match(/<script type="application\/json" id="kc-search-index-json">([\s\S]*?)<\/script>/);
if (!indexMatch) {
  console.error('6. Embedded search index: ✗ NOT FOUND');
} else {
  const index = JSON.parse(indexMatch[1]);
  console.log(`6. Embedded search index: ✓ Found with ${index.specialties.length} specialties and ${index.articles.length} articles`);

  // Test the 5 required search cases
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
      specialties: scoredSpecs.map(r => r.item),
      articles: scoredArts.map(r => r.item),
      totalCount: scoredSpecs.length + scoredArts.length
    };
  }

  const testCases = [
    { query: 'Cancer', expectSpec: 'Oncology', minArticles: 5 },
    { query: 'Knee replacement', expectSpec: 'Orthopedics', minArticles: 3 },
    { query: 'Kidney transplant', expectSpec: 'Kidney Transplant', minArticles: 5 },
    { query: 'Heart attack', expectSpec: 'Cardiology', expectArt: 'Heart Attack: Early Warning Signs You Should Never Ignore' },
    { query: 'Bone marrow transplant', expectSpec: 'Bone Marrow Transplant', minArticles: 5 }
  ];

  console.log('\n7. Testing the 5 specified queries:');
  testCases.forEach(tc => {
    const res = executeSearch(tc.query);
    const hasSpec = res.specialties.some(s => s.name === tc.expectSpec);
    const hasMinArticles = !tc.minArticles || res.articles.length >= tc.minArticles;
    const hasArt = !tc.expectArt || res.articles.some(a => a.title === tc.expectArt);
    const pass = hasSpec && hasMinArticles && hasArt;

    console.log(`   ${pass ? '✓' : '✗'} "${tc.query}":`);
    console.log(`     - Specialty: ${res.specialties[0]?.name} (${res.specialties[0]?.url})`);
    console.log(`     - Matched Articles count: ${res.articles.length}`);
    console.log(`     - Sample article: ${res.articles[0]?.title} (${res.articles[0]?.url})`);
  });
}

