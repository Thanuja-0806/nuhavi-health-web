const fs = require('fs');
const path = require('path');

function searchFiles(dir, exts) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist') {
        results = results.concat(searchFiles(fullPath, exts));
      }
    } else if (exts.some(ext => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

const allFiles = searchFiles('.', ['.ts', '.json', '.astro', '.md', '.txt']);
console.log('Total files searched:', allFiles.length);

const keywords = ['Dental', 'Liver', 'AYUSH', 'General Surgery', 'Cosmetic'];
keywords.forEach(kw => {
  const matches = [];
  for (const f of allFiles) {
    const content = fs.readFileSync(f, 'utf8');
    if (content.includes(kw)) {
      matches.push(f);
    }
  }
  console.log(`\nMatches for "${kw}":`, matches);
});

