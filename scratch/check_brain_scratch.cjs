const fs = require('fs');

const dir = 'C:/Users/91818/.gemini/antigravity/brain/dac84c9a-66f7-4501-a1dc-e2aec6cc5d96/scratch/';
if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir);
  console.log('Files in brain scratch:', files);
  files.forEach(f => {
    if (f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.json') || f.endsWith('.py')) {
      const p = dir + f;
      const content = fs.readFileSync(p, 'utf8');
      if (content.includes('liver-transplant') || content.includes('dental-care')) {
        console.log(`Found mention in ${f}`);
      }
    }
  });
}

