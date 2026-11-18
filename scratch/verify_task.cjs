const fs = require('fs');
const path = require('path');

const specialties = [
  { slug: 'cardiology', name: 'Cardiology', file: 'cardiology.jpg' },
  { slug: 'oncology', name: 'Oncology', file: 'oncology.jpg' },
  { slug: 'neurology', name: 'Neurology', file: 'neurology.jpg' },
  { slug: 'orthopedics', name: 'Orthopedics', file: 'orthopedics.jpg' },
  { slug: 'spine-surgery', name: 'Spine Surgery', file: 'spine-surgery.jpg' },
  { slug: 'hair-transplantation', name: 'Hair Transplantation', file: 'hair-transplantation.jpg' },
  { slug: 'weight-loss-surgery', name: 'Weight Loss Surgery', file: 'weight-loss-surgery.jpg' },
  { slug: 'ivf', name: 'IVF & Reproductive Medicine', file: 'ivf.jpg' },
  { slug: 'bone-marrow-transplant', name: 'Bone Marrow Transplant', file: 'bone-marrow-transplant.jpg' },
  { slug: 'kidney-transplant', name: 'Kidney Transplant', file: 'kidney-transplant.jpg' },
  { slug: 'liver-transplant', name: 'Liver Transplant', file: 'liver-transplant.jpg' },
  { slug: 'dental-care', name: 'Dental Care', file: 'dental-care.jpg' },
  { slug: 'ayush-wellness', name: 'AYUSH Wellness', file: 'ayush-wellness.jpg' },
  { slug: 'general-surgery', name: 'General Surgery', file: 'general-surgery.jpg' },
  { slug: 'cosmetic-surgery', name: 'Cosmetic & Plastic Surgery', file: 'cosmetic-surgery.jpg' }
];

let allPassed = true;

console.log('================================================================');
console.log('TEST 1: ALL 15 INDIVIDUAL SPECIALTY PAGES RIGHT-SIDE HERO IMAGE');
console.log('================================================================');

specialties.forEach((spec, i) => {
  const filePath = path.join('dist', 'en', 'knowledge-centre', spec.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: ${spec.slug} page does not exist!`);
    allPassed = false;
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  // Must have hero-specialty-banner-photo
  const hasPhotoClass = html.includes('hero-specialty-banner-photo');
  const expectedImgSrc = `/images/specialties/${spec.file}`;
  
  // Find img inside hero-icon-frame
  const frameMatch = html.match(/class="hero-icon-frame"[^>]*>([\s\S]*?)<\/div>/);
  let frameImgSrc = null;
  if (frameMatch) {
    const srcMatch = frameMatch[1].match(/src="([^"]+)"/);
    if (srcMatch) frameImgSrc = srcMatch[1];
  }

  const ok = hasPhotoClass && frameImgSrc === expectedImgSrc;
  if (!ok) allPassed = false;
  console.log(`${i + 1}. ${spec.name} (${spec.slug}): ${ok ? 'PASS' : 'FAIL'} -> right-side image: ${frameImgSrc}`);
});

console.log('\n================================================================');
console.log('TEST 2: ARTICLES ACROSS ALL SPECIALTIES (BADGE & FEATURED HERO)');
console.log('================================================================');

const sampleArticles = [
  { spec: 'cardiology', slug: 'what-is-coronary-artery-disease', file: 'cardiology.jpg' },
  { spec: 'cardiology', slug: 'heart-attack-early-warning-signs-you-should-never-ignore', file: 'cardiology.jpg' },
  { spec: 'oncology', slug: 'understanding-cancer-how-does-it-develop', file: 'oncology.jpg' },
  { spec: 'neurology', slug: 'understanding-stroke-and-its-early-warning-signs', file: 'neurology.jpg' },
  { spec: 'orthopedics', slug: 'when-do-you-need-a-knee-replacement', file: 'orthopedics.jpg' },
  { spec: 'spine-surgery', slug: 'understanding-slip-disc-and-its-symptoms', file: 'spine-surgery.jpg' },
  { spec: 'hair-transplantation', slug: 'what-causes-hair-loss', file: 'hair-transplantation.jpg' },
  { spec: 'weight-loss-surgery', slug: 'understanding-obesity-and-its-health-risks', file: 'weight-loss-surgery.jpg' },
  { spec: 'ivf', slug: 'what-is-ivf-and-how-does-it-work', file: 'ivf.jpg' },
  { spec: 'bone-marrow-transplant', slug: 'what-is-a-bone-marrow-transplant', file: 'bone-marrow-transplant.jpg' },
  { spec: 'kidney-transplant', slug: 'living-donor-versus-deceased-donor-transplantation', file: 'kidney-transplant.jpg' }
];

sampleArticles.forEach((art, idx) => {
  const filePath = path.join('dist', 'en', 'knowledge-centre', art.spec, art.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: Article ${art.slug} does not exist at ${filePath}`);
    allPassed = false;
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');

  // Check 1: Specialty badge photo
  const badgeMatch = html.match(/class="badge-spec-photo"[^>]*src="([^"]+)"/) || html.match(/src="([^"]+)"[^>]*class="badge-spec-photo"/);
  const badgeSrc = badgeMatch ? badgeMatch[1] : null;

  // Check 2: Article featured hero box
  const hasHeroBox = html.includes('article-featured-hero-box');
  const heroImgMatch = html.match(/class="featured-hero-main-img"[^>]*src="([^"]+)"/) || html.match(/src="([^"]+)"[^>]*class="featured-hero-main-img"/);
  const heroImgSrc = heroImgMatch ? heroImgMatch[1] : null;

  // Check 3: Brief caption
  const hasBriefCaption = html.includes('featured-image-brief-caption');

  const expectedSrc = `/images/specialties/${art.file}`;
  const ok = badgeSrc === expectedSrc && hasHeroBox && heroImgSrc === expectedSrc && hasBriefCaption;
  if (!ok) allPassed = false;
  console.log(`${idx + 1}. [${art.spec}] ${art.slug}: ${ok ? 'PASS' : 'FAIL'} (Badge: ${badgeSrc}, Featured Hero: ${heroImgSrc})`);
});

console.log('\n================================================================');
console.log('TEST 3: VERIFY NO OLD SVG OUTLINE ICONS IN SPECIALTY BANNER HEROES');
console.log('================================================================');

let oldIconCount = 0;
specialties.forEach(spec => {
  const filePath = path.join('dist', 'en', 'knowledge-centre', spec.slug, 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  const frameMatch = html.match(/class="hero-icon-frame"[^>]*>([\s\S]*?)<\/div>/);
  if (frameMatch && frameMatch[1].includes('<svg')) {
    console.log(`WARNING: Found SVG inside hero-icon-frame for ${spec.slug}`);
    oldIconCount++;
    allPassed = false;
  }
});
console.log(`Hero banner old SVG icons found: ${oldIconCount} (Must be 0: ${oldIconCount === 0 ? 'PASS' : 'FAIL'})`);

console.log('\n================================================================');
console.log('OVERALL STATUS:', allPassed ? '100% ALL TESTS PASSED' : 'SOME TESTS FAILED');
console.log('================================================================');
