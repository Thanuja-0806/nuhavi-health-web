const fs = require('fs');

const code = fs.readFileSync('src/components/common/SpecialtyIcon.astro', 'utf8');

const expected = [
  'cardiology',
  'oncology',
  'neurology',
  'orthopedics',
  'spine-surgery',
  'hair-transplantation',
  'weight-loss-surgery',
  'ivf',
  'bone-marrow-transplant',
  'kidney-transplant',
  'liver-transplant',
  'dental-care',
  'ayush-wellness',
  'general-surgery',
  'cosmetic-surgery'
];

expected.forEach((spec, idx) => {
  const hasBranch = code.includes(`icon === '${spec}'`);
  console.log(`${idx + 1}. ${spec}: ${hasBranch ? 'YES' : 'MISSING'}`);
});

