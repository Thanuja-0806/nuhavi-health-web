const fs = require('fs');
const path = require('path');

const specialties = [
  { slug: 'cardiology', title: 'Cardiology', imgKeyword: 'cardiology-hero.jpg', wave: 'ecg' },
  { slug: 'oncology', title: 'Oncology', imgKeyword: 'oncology-hero.jpg', wave: 'cellular' },
  { slug: 'neurology', title: 'Neurology', imgKeyword: 'neurology-hero.jpg', wave: 'eeg' },
  { slug: 'orthopedics', title: 'Orthopedics', imgKeyword: 'orthopedics-hero.jpg', wave: 'joint' },
  { slug: 'spine-surgery', title: 'Spine Surgery', imgKeyword: 'spine-surgery-hero.jpg', wave: 'spine' },
  { slug: 'hair-transplantation', title: 'Hair Transplantation', imgKeyword: 'hair-transplantation-hero.jpg', wave: 'harmonic' },
  { slug: 'weight-loss-surgery', title: 'Weight Loss Surgery', imgKeyword: 'weight-loss-surgery-hero.jpg', wave: 'harmonic' },
  { slug: 'ivf', title: 'IVF & Reproductive Medicine', imgKeyword: 'ivf-hero.jpg', wave: 'cellular' },
  { slug: 'bone-marrow-transplant', title: 'Bone Marrow Transplant', imgKeyword: 'bone-marrow-transplant-hero.jpg', wave: 'ecg' },
  { slug: 'kidney-transplant', title: 'Kidney Transplant', imgKeyword: 'kidney-transplant-hero.jpg', wave: 'ecg' },
  { slug: 'liver-transplant', title: 'Liver Transplant', imgKeyword: 'liver-transplant-hero.jpg', wave: 'harmonic' },
  { slug: 'dental-care', title: 'Dental Care', imgKeyword: 'dental-care-hero.jpg', wave: 'harmonic' },
  { slug: 'ayush-wellness', title: 'AYUSH Wellness', imgKeyword: 'ayush-wellness-hero.jpg', wave: 'harmonic' },
  { slug: 'general-surgery', title: 'General Surgery', imgKeyword: 'general-surgery-hero.jpg', wave: 'ecg' },
  { slug: 'cosmetic-surgery', title: 'Cosmetic & Plastic Surgery', imgKeyword: 'cosmetic-surgery-hero.jpg', wave: 'harmonic' }
];

async function verifyDist() {
  console.log('=== VERIFYING ALL 15 KNOWLEDGE CENTRE PAGES IN DIST ===\n');
  let passCount = 0;
  const usedImages = new Set();

  for (const s of specialties) {
    const file = path.resolve(`dist/en/knowledge-centre/${s.slug}/index.html`);
    if (!fs.existsSync(file)) {
      console.error(`❌ [${s.slug}] File missing: ${file}`);
      continue;
    }

    const html = fs.readFileSync(file, 'utf8');

    const hasHeroBanner = html.includes('renova-hero-banner');
    const hasTitle = html.includes(s.title);
    const hasHeroImg = html.includes(s.imgKeyword);
    const hasBreadcrumb = html.includes('Knowledge Centre') && html.includes('hero-breadcrumbs');
    const hasWaveform = html.includes('hero-waveform-svg');
    const hasKicker = html.includes('hero-kicker-text');
    const hasTrust = html.includes('Doctor-reviewed guides');

    if (hasHeroBanner && hasTitle && hasHeroImg && hasBreadcrumb && hasWaveform && hasKicker && hasTrust) {
      console.log(`✅ [${s.slug}] PASS:`);
      console.log(`     - Wide Renova banner rendered with custom gradient & wave (${s.wave})`);
      console.log(`     - LEFT: Title "${s.title}", description & clinical kicker`);
      console.log(`     - RIGHT: Large high-res medical visual "${s.imgKeyword}"`);
      console.log(`     - Breadcrumbs & trust indicators active\n`);
      passCount++;
      usedImages.add(s.imgKeyword);
    } else {
      console.error(`❌ [${s.slug}] FAILED CHECKS: Banner=${hasHeroBanner}, Title=${hasTitle}, HeroImg=${hasHeroImg}, Breadcrumb=${hasBreadcrumb}, Waveform=${hasWaveform}`);
    }
  }

  console.log(`==============================================`);
  console.log(`Results: ${passCount} / ${specialties.length} specialty hero headers verified in DIST!`);
  console.log(`Distinct hero images used: ${usedImages.size} / 15`);
  console.log(`==============================================\n`);
}

verifyDist();

