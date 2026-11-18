const fs = require('fs');
const path = require('path');

const tenSpecialties = [
  'cardiology', 'oncology', 'neurology', 'orthopedics', 'spine-surgery',
  'hair-transplantation', 'weight-loss-surgery', 'ivf', 'bone-marrow-transplant',
  'kidney-transplant'
];

const fiveExcludedSpecialties = [
  'liver-transplant', 'dental-care', 'ayush-wellness', 'general-surgery', 'cosmetic-surgery'
];

const allFifteen = [...tenSpecialties, ...fiveExcludedSpecialties];

let allPassed = true;

console.log('=== TEST 1: POPULAR & LATEST SECTIONS ON 10 CORE SPECIALTIES (MUST BE PRESENT) ===');
tenSpecialties.forEach((slug, idx) => {
  const filePath = path.join('dist', 'en', 'knowledge-centre', slug, 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  
  const hasPopHeading = html.includes('pop-latest-heading');
  const popLatestBoxCount = (html.match(/class="pop-latest-card-box"/g) || []).length;
  const rowCount = (html.match(/class="pop-latest-item-row"/g) || []).length;
  const specImgInRow = (html.match(new RegExp(`/images/specialties/${slug}\\.jpg`, 'g')) || []).length;
  
  const ok = hasPopHeading && popLatestBoxCount === 2 && rowCount === 10;
  if (!ok) allPassed = false;
  console.log(`${idx + 1}. ${slug}: ${ok ? 'PASS' : 'FAIL'} (Pop+Latest boxes: ${popLatestBoxCount}, Rows: ${rowCount}, Spec img occurrences in page: ${specImgInRow})`);
});

console.log('\n=== TEST 2: POPULAR & LATEST SECTIONS ON 5 EXCLUDED SPECIALTIES (MUST BE REMOVED) ===');
fiveExcludedSpecialties.forEach((slug, idx) => {
  const filePath = path.join('dist', 'en', 'knowledge-centre', slug, 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  
  const hasPopSection = html.includes('pop-latest-section');
  const hasPopHeading = html.includes('pop-latest-heading');
  const popLatestBoxCount = (html.match(/class="pop-latest-card-box"/g) || []).length;
  const rowCount = (html.match(/class="pop-latest-item-row"/g) || []).length;
  
  const ok = !hasPopSection && !hasPopHeading && popLatestBoxCount === 0 && rowCount === 0;
  if (!ok) allPassed = false;
  console.log(`${idx + 1}. ${slug}: ${ok ? 'PASS (REMOVED)' : 'FAIL (STILL PRESENT)'} (Pop+Latest boxes: ${popLatestBoxCount}, Rows: ${rowCount})`);
});

console.log('\n=== TEST 3: ARTICLE CARDS DISPLAYING SPECIALTY IMAGE ON SPECIALTY PAGES ===');
tenSpecialties.forEach((slug, idx) => {
  const filePath = path.join('dist', 'en', 'knowledge-centre', slug, 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Look for <img> tags that contain both card-spec-photo-thumb and the specialty image src
  const imgTags = html.match(/<img[^>]+>/g) || [];
  const cardThumbs = imgTags.filter(tag => tag.includes('card-spec-photo-thumb') && tag.includes(`/images/specialties/${slug}.jpg`)).length;
  const metaThumbs = imgTags.filter(tag => tag.includes('meta-inline-photo') && tag.includes(`/images/specialties/${slug}.jpg`)).length;
  const rowThumbs = imgTags.filter(tag => tag.includes('row-spec-photo') && tag.includes(`/images/specialties/${slug}.jpg`)).length;
  
  const ok = cardThumbs > 0 && metaThumbs > 0 && rowThumbs === 10;
  if (!ok) allPassed = false;
  console.log(`${idx + 1}. ${slug}: ${ok ? 'PASS' : 'FAIL'} (Card top photos: ${cardThumbs}, Meta inline photos: ${metaThumbs}, Pop/Latest row photos: ${rowThumbs})`);
});

console.log('\n=== TEST 4: KNOWLEDGE CENTRE HOME FEATURED GUIDES & MOST READ/LATEST LOGOS ===');
const kcHomeHtml = fs.readFileSync('dist/en/knowledge-centre/index.html', 'utf8');
const kcHomeImgTags = kcHomeHtml.match(/<img[^>]+>/g) || [];

// Check Featured Guides (CAR-T: oncology, Stroke: neurology, Knee: orthopedics)
const featImages = kcHomeImgTags
  .filter(tag => tag.includes('kc-feat-spec-img'))
  .map(tag => {
    const m = tag.match(/src="([^"]+)"/);
    return m ? m[1] : '';
  });
console.log('Featured Guides Card Logos:', featImages);
const featExpected = [
  '/images/specialties/oncology.jpg',
  '/images/specialties/neurology.jpg',
  '/images/specialties/orthopedics.jpg'
];
const featOk = JSON.stringify(featImages) === JSON.stringify(featExpected);
if (!featOk) allPassed = false;
console.log('Featured Guides Logos Match Expected:', featOk ? 'PASS' : 'FAIL');

// Check Most Read & Latest Rows in KC Home
const rowPhotosInKcHome = kcHomeImgTags
  .filter(tag => tag.includes('row-spec-photo'))
  .map(tag => {
    const m = tag.match(/src="([^"]+)"/);
    return m ? m[1] : '';
  });
console.log('Most Read & Latest Rows Specialty Photos Count:', rowPhotosInKcHome.length);
const rowsAllJpg = rowPhotosInKcHome.length > 0 && rowPhotosInKcHome.every(src => src.startsWith('/images/specialties/') && src.endsWith('.jpg'));
if (!rowsAllJpg) allPassed = false;
console.log('All Most Read & Latest Rows Use Specialty JPG Logos:', rowsAllJpg ? 'PASS' : 'FAIL');

console.log('\n=== TEST 5: RESOURCES ALL ARTICLES DIRECTORY SPECIALTY LOGOS ===');
const resourcesHtml = fs.readFileSync('dist/en/resources/index.html', 'utf8');
const resImgTags = resourcesHtml.match(/<img[^>]+>/g) || [];
const resArticlePhotos = resImgTags
  .filter(tag => tag.includes('art-card-inline-photo'))
  .map(tag => {
    const m = tag.match(/src="([^"]+)"/);
    return m ? m[1] : '';
  });
console.log('Resources Article Cards Photo Logos Count:', resArticlePhotos.length);
const resAllJpg = resArticlePhotos.length > 0 && resArticlePhotos.every(src => src.startsWith('/images/specialties/') && src.endsWith('.jpg'));
if (!resAllJpg) allPassed = false;
console.log('All 105 Articles Use Specialty Photo Logos:', resAllJpg ? 'PASS' : 'FAIL');

console.log('\n=== TEST 6: HEADER MEGA-DROPDOWN 15 SPECIALTIES (UNTOUCHED & PRESERVED) ===');
const headerMatch = kcHomeHtml.match(/class="specialties-grid-list"[\s\S]*?<\/ul>/);
const headerImgs = [];
if (headerMatch) {
  const hImgs = headerMatch[0].match(/<img[^>]+>/g) || [];
  hImgs.forEach(tag => {
    const m = tag.match(/src="\/images\/specialties\/([^"]+)\.jpg"/);
    if (m) headerImgs.push(m[1]);
  });
}
console.log('Header Dropdown 15 items count:', headerImgs.length);
console.log('Header items found:', headerImgs);
const headerOk = headerImgs.length === 15 && JSON.stringify(headerImgs) === JSON.stringify(allFifteen);
if (!headerOk) allPassed = false;
console.log('Header Dropdown Exactly Matches 1-15 Specialities:', headerOk ? 'PASS' : 'FAIL');

console.log('\n======================================================');
console.log('OVERALL VERIFICATION RESULT:', allPassed ? '100% ALL TESTS PASSED' : 'SOME TESTS FAILED');
console.log('======================================================');
