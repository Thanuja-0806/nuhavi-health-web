const fs = require('fs');
const path = require('path');

const enHtml = fs.readFileSync(path.join(__dirname, '../dist/en/index.html'), 'utf-8');

const heroStart = enHtml.indexOf('class="hero-section"');
const heroEnd = enHtml.indexOf('</section>', heroStart);
const heroHtml = enHtml.substring(heroStart, heroEnd);

console.log('=== VERIFYING HERO SECTION ONLY ===');
const hasTreatmentsInHero = heroHtml.includes('/treatments/');
console.log('Any /treatments/ links inside hero section:', hasTreatmentsInHero ? 'FAIL: Still found' : 'PASS: Zero found');

const matches = heroHtml.match(/href="\/en\/[^"]*"/g) || [];
console.log('All links inside hero section:');
matches.forEach(m => console.log('  ', m));

