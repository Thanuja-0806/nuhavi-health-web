const fs = require('fs');

// Read knowledgeArticles from src/data/knowledgeData.ts
const code = fs.readFileSync('src/data/knowledgeData.ts', 'utf8');

const articles = [];
const blocks = code.split(/\{\s*"id":\s*"art-/);
blocks.slice(1).forEach(b => {
  const specMatch = b.match(/"specialtySlug":\s*"([^"]+)"/);
  const titleMatch = b.match(/"title":\s*"([^"]+)"/);
  const slugMatch = b.match(/"slug":\s*"([^"]+)"/);
  const readMatch = b.match(/"readingTime":\s*"([^"]+)"/);
  const overMatch = b.match(/"overview":\s*"([^"]+)"/);
  if (specMatch && titleMatch && slugMatch) {
    articles.push({
      specialtySlug: specMatch[1],
      title: titleMatch[1],
      slug: slugMatch[1],
      readingTime: readMatch ? readMatch[1] : '2 min read',
      overview: overMatch ? overMatch[1] : ''
    });
  }
});

// Cardiology exact ordering specified by user reference:
// Popular (5):
// 1. Heart Attack: Early Warning Signs You Should Never Ignore
// 2. What Is Coronary Artery Disease?
// 3. Heart Bypass Surgery (CABG): How Does It Work?
// 4. Angioplasty and Stenting Explained
// 5. When Does a Patient Need Heart Valve Replacement?
// Latest (5):
// 1. Life After Heart Surgery: Recovery and Precautions
// 2. Heart Failure: Symptoms, Diagnosis and Treatment
// 3. Symptoms of Heart Valve Disease
// 4. Understanding AICD Implantation
// 5. What Is a Pacemaker and Who Needs One?

const cardPopularSlugs = [
  'heart-attack-early-warning-signs-you-should-never-ignore',
  'what-is-coronary-artery-disease',
  'heart-bypass-surgery-cabg-how-does-it-work',
  'angioplasty-and-stenting-explained',
  'when-does-a-patient-need-heart-valve-replacement'
];

const cardLatestSlugs = [
  'life-after-heart-surgery-recovery-and-precautions',
  'heart-failure-symptoms-diagnosis-and-treatment',
  'symptoms-of-heart-valve-disease',
  'understanding-aicd-implantation',
  'what-is-a-pacemaker-and-who-needs-one'
];

function splitArticlesForSpecialty(specSlug, allArts) {
  const specArticles = allArts.filter(a => a.specialtySlug === specSlug);
  if (specSlug === 'cardiology' || specSlug === 'cardiac-sciences') {
    const pop = cardPopularSlugs.map(slug => specArticles.find(a => a.slug === slug)).filter(Boolean);
    const lat = cardLatestSlugs.map(slug => specArticles.find(a => a.slug === slug)).filter(Boolean);
    // Any remaining
    const usedSlugs = new Set([...cardPopularSlugs, ...cardLatestSlugs]);
    const rem = specArticles.filter(a => !usedSlugs.has(a.slug));
    return {
      popular: pop,
      latest: [...lat, ...rem]
    };
  }

  // For any other specialty:
  // Split articles evenly so all are displayed, none duplicated
  const mid = Math.ceil(specArticles.length / 2);
  return {
    popular: specArticles.slice(0, mid),
    latest: specArticles.slice(mid)
  };
}

console.log('Testing split for all 10 specialties with articles:');
const slugs = ['cardiology', 'oncology', 'neurology', 'orthopedics', 'spine-surgery', 'hair-transplantation', 'weight-loss-surgery', 'ivf', 'bone-marrow-transplant', 'kidney-transplant'];

slugs.forEach(s => {
  const { popular, latest } = splitArticlesForSpecialty(s, articles);
  const total = popular.length + latest.length;
  console.log(`\n=== ${s}: Total ${total} (Popular: ${popular.length}, Latest: ${latest.length}) ===`);
  console.log('Popular:', popular.map(a => a.title));
  console.log('Latest:', latest.map(a => a.title));
});

