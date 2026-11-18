const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\91818\\.gemini\\antigravity\\brain\\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96';

function findFiles(dir, depth = 0) {
  if (depth > 2) return [];
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      if (file.startsWith('.system_generated')) continue;
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          results = results.concat(findFiles(fullPath, depth + 1));
        } else if (/\.(jpg|jpeg|png|webp|svg)$/i.test(file)) {
          results.push({ name: file, size: stat.size, path: fullPath });
        }
      } catch (e) {}
    }
  } catch (e) {}
  return results;
}

const images = findFiles(brainDir);
console.log(`Found ${images.length} images:`);
for (const img of images) {
  console.log(`- ${img.name} (${Math.round(img.size / 1024)} KB) -> ${img.path}`);
}

