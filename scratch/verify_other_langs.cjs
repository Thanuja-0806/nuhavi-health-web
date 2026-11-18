const fs = require('fs');
const path = require('path');

['ar', 'ru'].forEach(lang => {
  const html = fs.readFileSync(path.join(__dirname, `../dist/${lang}/index.html`), 'utf-8');
  const heroStart = html.indexOf('class="hero-section"');
  const heroEnd = html.indexOf('</section>', heroStart);
  const heroHtml = html.substring(heroStart, heroEnd);

  console.log(`=== VERIFYING ${lang.toUpperCase()} HERO SECTION ===`);
  const hasTreatments = heroHtml.includes('/treatments/');
  console.log(`Any /treatments/ links in ${lang} hero:`, hasTreatments ? 'FAIL' : 'PASS: Zero found');
  const matches = heroHtml.match(/href="\/[^"]*"/g) || [];
  matches.forEach(m => console.log('  ', m));
});

