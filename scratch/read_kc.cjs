const fs = require('fs');
const kc = JSON.parse(fs.readFileSync('scratch/kc_data.json', 'utf8'));
console.log('KC specialties:', kc.specialties.map(s => s.id));
console.log('Total articles:', kc.articles.length);
console.log('Popular slugs:', kc.popular);

// Check cardiology articles in KC
const cardArts = kc.articles.filter(a => a.sp === 'cardiology');
console.log('Cardiology articles in KC:', cardArts.length);
cardArts.forEach((a, i) => console.log((i+1) + '. ' + a.title + ' (' + a.slug + ')'));

