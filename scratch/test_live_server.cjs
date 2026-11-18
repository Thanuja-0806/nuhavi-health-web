const http = require('http');

const queries = [
  { q: 'Cancer', expectSpec: 'Oncology', expectUrl: '/en/knowledge-centre/oncology/' },
  { q: 'Knee replacement', expectSpec: 'Orthopedics', expectUrl: '/en/knowledge-centre/orthopedics/' },
  { q: 'Kidney transplant', expectSpec: 'Kidney Transplant', expectUrl: '/en/knowledge-centre/kidney-transplant/' },
  { q: 'Heart attack', expectSpec: 'Cardiology', expectUrl: '/en/knowledge-centre/cardiology/' },
  { q: 'Bone marrow transplant', expectSpec: 'Bone Marrow Transplant', expectUrl: '/en/knowledge-centre/bone-marrow-transplant/' }
];

async function checkUrl(url) {
  const res = await fetch(url);
  return { status: res.status, text: await res.text() };
}

async function run() {
  console.log('=== TESTING LIVE HTTP SERVER (localhost:4321) ===\n');

  // 1. Check Homepage
  const home = await checkUrl('http://localhost:4321/en/');
  console.log('Homepage status:', home.status);
  console.log('Homepage has search form action /en/knowledge-centre/search/:', home.text.includes('action="/en/knowledge-centre/search/"'));
  console.log('Homepage NO dropdown results panel:', !home.text.includes('id="hero-search-results-panel"'));

  // 2. Check each search URL
  for (const item of queries) {
    const searchUrl = `http://localhost:4321/en/knowledge-centre/search/?q=${encodeURIComponent(item.q)}`;
    const res = await checkUrl(searchUrl);
    console.log(`\nSearch URL: "${searchUrl}" -> HTTP ${res.status}`);
    console.log('  Page has search breadcrumbs:', res.text.includes('class="kc-breadcrumbs"'));
    console.log('  Page has search input:', res.text.includes('id="kc-search-query-input"'));
    console.log('  Page has embedded search data:', res.text.includes('id="kc-search-index-json"'));
    console.log('  Page has specialties results container:', res.text.includes('id="specialties-results-group"'));
    console.log('  Page has articles results container:', res.text.includes('id="articles-results-group"'));

    // Check that target specialty exists on server
    const specRes = await checkUrl(`http://localhost:4321${item.expectUrl}`);
    console.log(`  Target specialty URL: "${item.expectUrl}" -> HTTP ${specRes.status} (OK)`);
  }
}

run().catch(console.error);

