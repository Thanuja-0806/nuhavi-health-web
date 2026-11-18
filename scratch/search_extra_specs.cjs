const fs = require('fs');

// Check transcript for any mention of dental articles or liver articles
const transcript = fs.readFileSync('C:/Users/91818/.gemini/antigravity/brain/dac84c9a-66f7-4501-a1dc-e2aec6cc5d96/.system_generated/logs/transcript.jsonl', 'utf8');

const queries = ['Popular in Dental', 'Popular in Liver', 'Popular in AYUSH', 'Popular in General Surgery', 'Popular in Cosmetic'];
queries.forEach(q => {
  const has = transcript.includes(q);
  console.log(`${q}: ${has}`);
});

// Also search for "Dental Care" articles or titles
const lines = transcript.split('\n');
lines.forEach((l, i) => {
  if (l.includes('Dental Care') && (l.includes('Popular') || l.includes('Latest') || l.includes('article'))) {
    console.log(`Line ${i}: ${l.slice(0, 300)}`);
  }
});

