const fs = require('fs');

const homeHtml = fs.readFileSync('dist/en/index.html', 'utf8');
const vidHtml = fs.readFileSync('dist/en/videos/index.html', 'utf8');

console.log('=== HEADER CHECKS ===');
console.log('1. Treatments menu button in header:', homeHtml.includes('id="treatments-menu-btn"'));
console.log('2. Treatments nav item in header:', homeHtml.includes('id="treatments-nav-item"'));
console.log('3. Videos link in nav:', homeHtml.includes('/en/videos/'));

// Find navigation links in homeHtml
const navMatch = homeHtml.match(/<nav class="desktop-nav"[\s\S]*?<\/nav>/);
if (navMatch) {
  console.log('\nDesktop Navigation Links:');
  const links = [...navMatch[0].matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)];
  links.forEach(l => console.log('  -', l[2].replace(/<[^>]+>/g, '').trim(), '->', l[1]));
}

console.log('\n=== VIDEOS PAGE CHECKS ===');
console.log('1. Page Title in HTML:', vidHtml.includes('Explainer Videos | Nuhavi Health') || vidHtml.includes('Clinical Explainer Videos'));
console.log('2. Video cards count:', (vidHtml.match(/class="video-card"/g) || []).length);
console.log('3. Storyboards count:', (vidHtml.match(/class="storyboard-item"/g) || []).length);

const topics = [
  'How Heart Bypass Surgery (CABG) Works',
  'How Angioplasty and Stenting Are Performed',
  'How CAR-T Cell Therapy Works',
  'How Chemotherapy and Radiation Therapy Work',
  'How Deep Brain Stimulation Works',
  'How Knee and Hip Replacement Surgeries Are Performed',
  'How Minimally Invasive Spine Surgery Works',
  'How IVF and Embryo Transfer Work',
  'How Bone Marrow Transplantation Works',
  'How Kidney Transplantation Is Performed'
];

console.log('\nAll 10 explainer topics present in videos page:');
topics.forEach(t => {
  console.log('  -', t, ':', vidHtml.includes(t) ? 'YES' : 'MISSING');
});

console.log('\nSubtitles feature mentioned:', vidHtml.includes('Subtitles planned'));
console.log('Script ready / Coming soon status mentioned:', vidHtml.includes('Script ready, to be produced'));

