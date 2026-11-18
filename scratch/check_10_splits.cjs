const fs = require('fs');
const kc = JSON.parse(fs.readFileSync('scratch/kc_data.json', 'utf8'));

const A = Object.fromEntries(kc.articles.map((a) => [a.slug, a]));

function getSpec(id) {
  const arts = kc.articles.filter((a) => a.sp === id);
  const pop = kc.popular.filter((p) => A[p] && A[p].sp === id).map((p) => A[p]);
  const popular = (pop.length ? pop : []).concat(arts.filter((a) => !pop.includes(a))).slice(0, 5);
  // for latest, take remaining or reverse
  const popularSlugs = new Set(popular.map(a => a.slug));
  const remaining = arts.filter(a => !popularSlugs.has(a.slug));
  const latest = remaining.slice(0, 5);
  return { popular, latest, total: arts.length };
}

['cardiology', 'oncology', 'neurology', 'orthopedics', 'spine', 'hair-transplant', 'weight-loss-surgery', 'ivf', 'bone-marrow-transplant', 'kidney-transplant'].forEach(sp => {
  const { popular, latest, total } = getSpec(sp);
  console.log(`\n=================== ${sp} (Total: ${total}) ===================`);
  console.log('POPULAR (5):');
  popular.forEach((a, i) => console.log(`  0${i+1} ${a.title} (${a.read} min)`));
  console.log('LATEST (5):');
  latest.forEach((a, i) => console.log(`  0${i+1} ${a.title} (${a.read} min)`));
});

