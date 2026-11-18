const fs = require('fs');
// Let's import knowledgeArticles from src/data/knowledgeData.ts or inspect using dynamic import
async function run() {
  const mod = await import('../src/data/knowledgeData.js');
}
// since it's ts, let's parse knowledgeArticles
const content = fs.readFileSync('src/data/knowledgeData.ts', 'utf8');
const cardArticles = [];
// Find id: "art-..."
const blocks = content.split(/\{\s*"id":\s*"art-/);
console.log('Total art blocks:', blocks.length - 1);
blocks.slice(1).forEach(b => {
  const specMatch = b.match(/"specialtySlug":\s*"([^"]+)"/);
  const titleMatch = b.match(/"title":\s*"([^"]+)"/);
  const slugMatch = b.match(/"slug":\s*"([^"]+)"/);
  if (specMatch && titleMatch && slugMatch) {
    if (specMatch[1] === 'cardiology') {
      cardArticles.push({ title: titleMatch[1], slug: slugMatch[1] });
    }
  }
});
console.log('Cardiology articles:', cardArticles.length);
cardArticles.forEach((a, i) => console.log(`${i+1}. ${a.title} (${a.slug})`));
