const fs = require('fs');
const path = require('path');

const specialties = [
  'cardiology', 'oncology', 'neurology', 'orthopedics', 'spine-surgery',
  'hair-transplantation', 'weight-loss-surgery', 'ivf', 'bone-marrow-transplant',
  'kidney-transplant', 'liver-transplant', 'dental-care', 'ayush-wellness',
  'general-surgery', 'cosmetic-surgery'
];

let allPassed = true;

console.log('=== VERIFYING ALL 15 SPECIALTY LANDING PAGES ===');
specialties.forEach((slug, idx) => {
  const filePath = path.join('dist', 'en', 'knowledge-centre', slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error('FAIL: Missing ' + filePath);
    allPassed = false;
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Check Popular heading
  const hasPop = html.includes('Popular in ');
  // Check Latest heading
  const hasLatest = html.includes('Latest');
  
  // Count items under pop-latest-card-box
  const popLatestBoxMatches = html.match(/class="pop-latest-card-box"/g);
  const rowMatches = html.match(/class="pop-latest-item-row"/g);
  
  const ranks01 = (html.match(/class="item-rank"[^>]*>01<\/span>/g) || []).length;
  const ranks05 = (html.match(/class="item-rank"[^>]*>05<\/span>/g) || []).length;
  
  const popBoxCount = popLatestBoxMatches ? popLatestBoxMatches.length : 0;
  const rowCount = rowMatches ? rowMatches.length : 0;
  
  const ok = hasPop && hasLatest && popBoxCount === 2 && rowCount === 10 && ranks01 >= 2 && ranks05 >= 2;
  if (!ok) allPassed = false;
  console.log(`${idx + 1}. ${slug}: ${ok ? 'PASS' : 'FAIL'} (Pop+Latest boxes: ${popBoxCount}, Rows: ${rowCount}, 01 ranks: ${ranks01}, 05 ranks: ${ranks05})`);
});

console.log('\n=== VERIFYING IVF PAGE CONTENT ===');
const ivfHtml = fs.readFileSync('dist/en/knowledge-centre/ivf/index.html', 'utf8');
console.log('IVF Has "Popular in IVF":', ivfHtml.includes('Popular in IVF'));
console.log('IVF Has "What Is IVF and How Does It Work?":', ivfHtml.includes('What Is IVF and How Does It Work?'));
console.log('IVF Has "Emotional and Physical Preparation for IVF":', ivfHtml.includes('Emotional and Physical Preparation for IVF'));
console.log('IVF Has "All IVF articles":', ivfHtml.includes('All IVF articles'));

console.log('\n=== VERIFYING CARDIOLOGY PAGE CONTENT ===');
const cardHtml = fs.readFileSync('dist/en/knowledge-centre/cardiology/index.html', 'utf8');
console.log('Cardiology Has "Popular in Cardiology":', cardHtml.includes('Popular in Cardiology'));
console.log('Cardiology Has "Heart Attack: Early Warning Signs You Should Never Ignore":', cardHtml.includes('Heart Attack: Early Warning Signs You Should Never Ignore'));
console.log('Cardiology Has "Life After Heart Surgery: Recovery and Precautions":', cardHtml.includes('Life After Heart Surgery: Recovery and Precautions'));

console.log('\n=== VERIFYING BONE MARROW TRANSPLANT PAGE CONTENT ===');
const bmtHtml = fs.readFileSync('dist/en/knowledge-centre/bone-marrow-transplant/index.html', 'utf8');
console.log('BMT Has "Popular in Bone Marrow Transplant":', bmtHtml.includes('Popular in Bone Marrow Transplant'));
console.log('BMT Has "What Is a Bone Marrow Transplant?":', bmtHtml.includes('What Is a Bone Marrow Transplant?'));
console.log('BMT Has "What Happens During Transplantation?":', bmtHtml.includes('What Happens During Transplantation?'));

console.log('\n=== VERIFYING KNOWLEDGE CENTRE BROWSE GRID ORDER (1-15) ===');
const kcHomeHtml = fs.readFileSync('dist/en/knowledge-centre/index.html', 'utf8');
const kcSpecOrder = [...kcHomeHtml.matchAll(/href="\/en\/knowledge-centre\/([^\/]+)\/" class="kc-spec-card"/g)].map(m => m[1]);
console.log('KC Home Specialties count:', kcSpecOrder.length);
console.log('KC Home 1-15 exact order match:', JSON.stringify(kcSpecOrder) === JSON.stringify(specialties));
if (JSON.stringify(kcSpecOrder) !== JSON.stringify(specialties)) {
  console.log('KC Home order:', kcSpecOrder);
}

console.log('\n=== VERIFYING HOMEPAGE SPECIALTIES GRID ORDER (1-15) ===');
const homeHtml = fs.readFileSync('dist/en/index.html', 'utf8');
const homeGridMatches = [...homeHtml.matchAll(/class="specialty-nav-card" aria-label="([^"]+)"/g)].map(m => m[1]);
console.log('Homepage specialty grid cards count:', homeGridMatches.length);
console.log('Homepage specialty cards:', homeGridMatches);

console.log('\n=== VERIFYING HEADER SPECIALTIES DROPDOWN ===');
const headerMatch = homeHtml.match(/class="specialties-grid-list"[\s\S]*?<\/ul>/);
const headerImgs = headerMatch ? [...headerMatch[0].matchAll(/src="\/images\/specialties\/([^"]+)\.jpg"/g)].map(m => m[1]) : [];
console.log('Header desktop specialty images count:', headerImgs.length);
console.log('Header desktop exact 1-15 order match:', JSON.stringify(headerImgs) === JSON.stringify(specialties));

console.log('\n======================================================');
console.log('ALL SPECIALTIES POPULAR + LATEST 30 SECTIONS RESULT:', allPassed ? 'ALL PASSED 100%' : 'SOME FAILED');
console.log('======================================================');
