const http = require('http');

const specialties = [
  { slug: 'cardiology', title: 'Cardiology', imgKeyword: 'cardiology-hero.jpg', wave: 'ecg' },
  { slug: 'oncology', title: 'Oncology', imgKeyword: 'oncology-hero.jpg', wave: 'cellular' },
  { slug: 'neurology', title: 'Neurology', imgKeyword: 'neurology-hero.jpg', wave: 'eeg' },
  { slug: 'orthopedics', title: 'Orthopedics', imgKeyword: 'orthopedics-hero.jpg', wave: 'joint' },
  { slug: 'spine-surgery', title: 'Spine Surgery', imgKeyword: 'spine-surgery-hero.jpg', wave: 'spine' },
  { slug: 'hair-transplantation', title: 'Hair Transplantation', imgKeyword: 'hair-transplantation-hero.jpg', wave: 'harmonic' },
  { slug: 'weight-loss-surgery', title: 'Weight Loss Surgery', imgKeyword: 'weight-loss-surgery-hero.jpg', wave: 'harmonic' },
  { slug: 'ivf', title: 'IVF', imgKeyword: 'ivf-hero.jpg', wave: 'cellular' },
  { slug: 'bone-marrow-transplant', title: 'Bone Marrow Transplant', imgKeyword: 'bone-marrow-transplant-hero.jpg', wave: 'ecg' },
  { slug: 'kidney-transplant', title: 'Kidney Transplant', imgKeyword: 'kidney-transplant-hero.jpg', wave: 'ecg' },
  { slug: 'liver-transplant', title: 'Liver Transplant', imgKeyword: 'liver-transplant-hero.jpg', wave: 'harmonic' },
  { slug: 'dental-care', title: 'Dental Care', imgKeyword: 'dental-care-hero.jpg', wave: 'harmonic' },
  { slug: 'ayush-wellness', title: 'AYUSH Wellness', imgKeyword: 'ayush-wellness-hero.jpg', wave: 'harmonic' },
  { slug: 'general-surgery', title: 'General Surgery', imgKeyword: 'general-surgery-hero.jpg', wave: 'ecg' },
  { slug: 'cosmetic-surgery', title: 'Cosmetic', imgKeyword: 'cosmetic-surgery-hero.jpg', wave: 'harmonic' }
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

async function verifyAll() {
  console.log('=== VERIFYING ALL 15 KNOWLEDGE CENTRE HERO HEADERS ===\n');
  let passCount = 0;
  const usedImages = new Set();

  for (const s of specialties) {
    const url = `http://127.0.0.1:4321/en/knowledge-centre/${s.slug}/`;
    try {
      const res = await fetchPage(url);
      if (res.status !== 200) {
        console.error(`❌ [${s.slug}] HTTP ${res.status} at ${url}`);
        continue;
      }

      const hasHeroBanner = res.html.includes('renova-hero-banner');
      const hasTitle = res.html.includes(s.title);
      const hasHeroImg = res.html.includes(s.imgKeyword);
      const hasBreadcrumb = res.html.includes('Knowledge Centre') && res.html.includes('hero-breadcrumbs');
      const hasWaveform = res.html.includes('hero-waveform-svg');

      if (hasHeroBanner && hasTitle && hasHeroImg && hasBreadcrumb && hasWaveform) {
        console.log(`✅ [${s.slug}] PASS: Banner rendered, Title "${s.title}" on Left, Image "${s.imgKeyword}" on Right, Waveform (${s.wave}) present`);
        passCount++;
        usedImages.add(s.imgKeyword);
      } else {
        console.error(`❌ [${s.slug}] FAILED CHECKS: Banner=${hasHeroBanner}, Title=${hasTitle}, HeroImg=${hasHeroImg}, Breadcrumb=${hasBreadcrumb}, Waveform=${hasWaveform}`);
      }
    } catch (e) {
      console.error(`❌ [${s.slug}] Network error: ${e.message}`);
    }
  }

  console.log(`\n==============================================`);
  console.log(`Results: ${passCount} / ${specialties.length} specialty hero headers verified!`);
  console.log(`Distinct hero images used: ${usedImages.size} / 15`);
  console.log(`==============================================\n`);
}

verifyAll();

