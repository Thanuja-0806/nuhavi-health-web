const fs = require('fs');
const kc = JSON.parse(fs.readFileSync('scratch/kc_data.json', 'utf8'));

const SP = Object.fromEntries(kc.specialties.map((s) => [s.id, s]));
const A = Object.fromEntries(kc.articles.map((a) => [a.slug, a]));

function getForSpecialty(id) {
  const arts = kc.articles.filter((a) => a.sp === id);
  const pop = kc.popular.filter((p) => A[p] && A[p].sp === id).map((p) => A[p]);
  const popular = (pop.length ? pop : []).concat(arts.filter((a) => !pop.includes(a))).slice(0, 5);
  const latest = [...arts].reverse().slice(0, 5);
  return { arts, popular, latest };
}

console.log('CARDIOLOGY:');
const card = getForSpecialty('cardiology');
console.log('Popular (5):', card.popular.map(a => a.title));
console.log('Latest (5):', card.latest.map(a => a.title));

