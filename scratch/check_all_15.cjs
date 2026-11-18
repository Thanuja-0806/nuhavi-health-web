const fs = require('fs');

const kc = JSON.parse(fs.readFileSync('scratch/kc_data.json', 'utf8'));
console.log('--- SPECIALTIES IN KC_DATA.JSON ---');
kc.specialties.forEach(s => {
  const arts = kc.articles.filter(a => a.sp === s.id);
  console.log(`${s.id}: ${arts.length} articles`);
});

// Check if liver, dental, ayush, surgery, cosmetic are in kc_data.json
console.log('\nChecking all 15 specialties in kc:');
const targetSlugs = [
  'cardiology', 'oncology', 'neurology', 'orthopedics', 'spine-surgery',
  'hair-transplantation', 'weight-loss-surgery', 'ivf', 'bone-marrow-transplant',
  'kidney-transplant', 'liver-transplant', 'dental-care', 'ayush-wellness',
  'general-surgery', 'cosmetic-surgery'
];
targetSlugs.forEach(slug => {
  const arts = kc.articles.filter(a => a.sp === slug || a.sp === slug.replace('-surgery', '') || a.sp === slug.replace('-care', '') || a.sp === slug.replace('-transplantation', '-transplant') || a.sp === slug.replace('-wellness', ''));
  console.log(`${slug}: found in kc = ${arts.length}`);
});

