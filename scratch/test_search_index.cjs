const { knowledgeArticles } = require('../src/data/knowledgeData.ts');
const { unifiedSpecialties, getSpecialtyImage } = require('../src/data/unifiedSpecialties.ts');

const specialtySynonyms = {
  'cardiology': ['heart', 'heart attack', 'cardiac', 'coronary artery disease', 'cad', 'angioplasty', 'stenting', 'bypass', 'cabg', 'valve replacement', 'pacemaker', 'aicd', 'heart failure', 'chest pain', 'arrhythmia'],
  'oncology': ['cancer', 'cancer treatment', 'breast cancer', 'lung cancer', 'blood cancer', 'leukemia', 'leukaemia', 'tumor', 'tumour', 'chemotherapy', 'radiation therapy', 'immunotherapy', 'car-t', 'car t', 'cyberknife', 'oncologist', 'biopsy'],
  'neurology': ['brain', 'stroke', 'stroke warning signs', 'nervous system', 'parkinson', 'dbs', 'deep brain stimulation', 'epilepsy', 'seizure', 'neuro', 'headache', 'aneurysm'],
  'orthopedics': ['knee', 'knee replacement', 'joint replacement', 'hip replacement', 'bone', 'joint', 'ortho', 'acl', 'acl injury', 'shoulder replacement', 'osteoarthritis', 'arthritis', 'robotic knee replacement', 'physiotherapy'],
  'spine-surgery': ['spine', 'slip disc', 'slipped disc', 'back pain', 'sciatica', 'scoliosis', 'disc replacement', 'spinal decompression', 'neck pain', 'vertebra'],
  'hair-transplantation': ['hair', 'hair loss', 'hair transplant', 'fue', 'fut', 'hair grafts', 'alopecia', 'baldness', 'hair restoration', 'follicle'],
  'weight-loss-surgery': ['weight loss', 'bariatric', 'bariatric surgery', 'obesity', 'gastric sleeve', 'gastric bypass', 'stomach', 'metabolic surgery', 'weight loss surgery'],
  'ivf': ['ivf', 'fertility', 'infertility', 'reproductive', 'egg retrieval', 'embryo transfer', 'embryo freezing', 'iui', 'pregnancy', 'ivf treatment', 'test tube baby'],
  'bone-marrow-transplant': ['bone marrow', 'bone marrow transplant', 'bmt', 'stem cell', 'stem cell transplant', 'autologous', 'allogeneic', 'gvhd', 'graft versus host', 'donor matching', 'hla matching'],
  'kidney-transplant': ['kidney', 'kidney transplant', 'renal', 'renal transplant', 'ckd', 'chronic kidney disease', 'dialysis', 'living donor', 'deceased donor', 'immunosuppression', 'nephrology'],
  'liver-transplant': ['liver', 'liver transplant', 'cirrhosis', 'hepatobiliary', 'living donor liver', 'hepatitis', 'gastroenterology'],
  'dental-care': ['dental', 'dental care', 'teeth', 'dental implants', 'dentist', 'oral surgery', 'full mouth rehabilitation', 'orthognathic', 'maxillofacial'],
  'ayush-wellness': ['ayush', 'ayush wellness', 'ayurveda', 'panchakarma', 'holistic', 'yoga', 'ayush visa', 'wellness therapy'],
  'general-surgery': ['general surgery', 'surgery', 'laparoscopic', 'hernia', 'hernia repair', 'gallbladder', 'gallstones', 'appendix', 'minimally invasive surgery'],
  'cosmetic-surgery': ['cosmetic', 'cosmetic surgery', 'plastic surgery', 'rhinoplasty', 'liposuction', 'body contouring', 'facelift', 'botox', 'scar revision', 'aesthetic surgery']
};

const prefix = '/en';

const searchSpecialties = unifiedSpecialties.map(spec => ({
  type: 'specialty',
  name: spec.name,
  slug: spec.slug,
  url: `${prefix}/knowledge-centre/${spec.slug}/`,
  desc: spec.shortDesc,
  image: spec.image,
  count: spec.articleCount,
  keywords: (specialtySynonyms[spec.slug] || []).concat([spec.name.toLowerCase(), spec.slug])
}));

const searchArticles = knowledgeArticles.map(art => ({
  type: 'article',
  title: art.title,
  slug: art.slug,
  specialtySlug: art.specialtySlug,
  specialtyTitle: art.specialtyTitle,
  url: `${prefix}/knowledge-centre/${art.specialtySlug}/${art.slug}/`,
  readingTime: art.readingTime,
  overview: art.overview,
  image: getSpecialtyImage(art.specialtySlug),
  keywords: [
    art.title.toLowerCase(),
    art.specialtyTitle.toLowerCase(),
    ...(specialtySynonyms[art.specialtySlug] || [])
  ]
}));

const STOP_WORDS = new Set(['in', 'of', 'and', 'the', 'to', 'for', 'a', 'an', 'is', 'on', 'at', 'by', 'care', 'what', 'how', 'does', 'or']);

function search(rawQuery) {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return { specialties: [], articles: [], totalCount: 0 };

  const tokens = q.split(/\s+/).filter(t => t.length > 0);
  const significantTokens = tokens.filter(t => !STOP_WORDS.has(t));
  const activeTokens = significantTokens.length > 0 ? significantTokens : tokens;

  function scoreItem(item) {
    const isSpec = item.type === 'specialty';
    const title = (isSpec ? item.name : item.title).toLowerCase();
    const desc = (isSpec ? item.desc : item.overview).toLowerCase();
    const keywords = item.keywords || [];

    let score = 0;

    // Exact title/name match
    if (title === q) score += 200;
    else if (title.startsWith(q)) score += 120;
    else if (title.includes(q)) score += 80;

    // Keyword exact / inclusion
    if (keywords.includes(q)) score += 100;
    else if (keywords.some(k => k === q)) score += 90;
    else if (keywords.some(k => k.includes(q))) score += 60;
    else if (keywords.some(k => q.includes(k) && k.length > 3)) score += 50;

    // Description match
    if (desc.includes(q)) score += 30;

    // Significant token matches
    let matchedSigCount = 0;
    for (const token of activeTokens) {
      if (token.length < 2) continue;
      if (title.includes(token)) {
        score += 30;
        matchedSigCount++;
      } else if (keywords.some(k => k.includes(token))) {
        score += 20;
        matchedSigCount++;
      } else if (desc.includes(token)) {
        score += 8;
        matchedSigCount++;
      }
    }

    if (activeTokens.length > 1 && matchedSigCount === activeTokens.length) {
      score += 40; // All significant tokens matched
    }

    return score;
  }

  // 1. Find specialties
  const scoredSpecs = searchSpecialties
    .map(s => ({ item: s, score: scoreItem(s) }))
    .filter(res => res.score >= 20)
    .sort((a, b) => b.score - a.score);

  const topSpecSlug = scoredSpecs.length > 0 ? scoredSpecs[0].item.slug : null;

  // 2. Find articles (boost articles belonging to top matched specialty)
  const scoredArts = searchArticles
    .map(a => {
      let score = scoreItem(a);
      if (score >= 20 && topSpecSlug && a.specialtySlug === topSpecSlug) {
        score += 25; // boost article belonging to the top matched specialty
      }
      return { item: a, score };
    })
    .filter(res => res.score >= 25)
    .sort((a, b) => b.score - a.score);

  const topSpecs = scoredSpecs.map(r => r.item).slice(0, 3);
  const topArts = scoredArts.map(r => r.item).slice(0, 8);

  return {
    specialties: topSpecs,
    articles: topArts,
    totalCount: scoredSpecs.length + scoredArts.length
  };
}

const testQueries = [
  'Cancer treatment',
  'breast cancer',
  'Knee replacement',
  'Kidney transplant',
  'Heart attack',
  'coronary artery disease',
  'Bone marrow transplant',
  'IVF',
  'fertility',
  'Hair transplant',
  'Dental care'
];

console.log('=== RUNNING REFINED TEST QUERIES ===');
testQueries.forEach(query => {
  const res = search(query);
  console.log(`\nQuery: "${query}" -> Total: ${res.totalCount}`);
  if (res.specialties.length > 0) {
    console.log(`  Specialties (${res.specialties.length}):`, res.specialties.map(s => `${s.name} (${s.url})`));
  }
  if (res.articles.length > 0) {
    console.log(`  Articles (${res.articles.length}):`, res.articles.slice(0, 3).map(a => `${a.title} [${a.specialtyTitle}]`));
  } else {
    console.log(`  Articles: None (Specialty-only page)`);
  }
});
