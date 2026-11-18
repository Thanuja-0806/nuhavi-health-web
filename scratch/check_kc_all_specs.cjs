const fs = require('fs');
const kc = JSON.parse(fs.readFileSync('scratch/kc_data.json', 'utf8'));

const SP = Object.fromEntries(kc.specialties.map((s) => [s.id, s]));
const A = Object.fromEntries(kc.articles.map((a) => [a.slug, a]));

console.log('--- ALL SPECIALTIES IN KC ---');
kc.specialties.forEach(s => {
  const arts = kc.articles.filter(a => a.sp === s.id);
  console.log(`\n=== ${s.name} (${s.id}) - Total: ${arts.length} ===`);
  arts.forEach((a, i) => console.log(`  ${i+1}. [${a.slug}] ${a.title}`));
});

