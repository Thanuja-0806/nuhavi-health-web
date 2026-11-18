const fs = require('fs');

// Read knowledgeArticles from src/data/knowledgeData.ts
const code = fs.readFileSync('src/data/knowledgeData.ts', 'utf8');

// Parse articles
const articles = [];
const blocks = code.split(/\{\s*"id":\s*"art-/);
blocks.slice(1).forEach(b => {
  const specMatch = b.match(/"specialtySlug":\s*"([^"]+)"/);
  const titleMatch = b.match(/"title":\s*"([^"]+)"/);
  const slugMatch = b.match(/"slug":\s*"([^"]+)"/);
  const readMatch = b.match(/"readingTime":\s*"([^"]+)"/);
  const overMatch = b.match(/"overview":\s*"([^"]+)"/);
  if (specMatch && titleMatch && slugMatch) {
    articles.push({
      specialtySlug: specMatch[1],
      title: titleMatch[1],
      slug: slugMatch[1],
      readingTime: readMatch ? readMatch[1] : '2 min read',
      overview: overMatch ? overMatch[1] : ''
    });
  }
});

console.log('Total articles parsed from knowledgeData.ts:', articles.length);

// Group by specialtySlug
const bySpec = {};
articles.forEach(a => {
  bySpec[a.specialtySlug] = bySpec[a.specialtySlug] || [];
  bySpec[a.specialtySlug].push(a);
});

for (const [slug, arts] of Object.entries(bySpec)) {
  console.log(`${slug}: ${arts.length} articles`);
}

