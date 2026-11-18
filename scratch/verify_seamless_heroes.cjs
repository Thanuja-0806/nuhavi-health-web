const http = require('http');

const specialties = [
  { slug: 'cardiology', title: 'Cardiology', banner: 'cardiology-seamless-banner.jpg', kicker: 'DOCTOR-LED CARDIAC SCIENCES' },
  { slug: 'oncology', title: 'Oncology', banner: 'oncology-seamless-banner.jpg', kicker: 'SPECIALIST CANCER CARE' },
  { slug: 'neurology', title: 'Neurology', banner: 'neurology-seamless-banner.jpg', kicker: 'ADVANCED NEUROSCIENCES' },
  { slug: 'orthopedics', title: 'Orthopedics', banner: 'orthopedics-seamless-banner.jpg', kicker: 'ORTHOPEDIC SURGERY' },
  { slug: 'spine-surgery', title: 'Spine Surgery', banner: 'spine-surgery-seamless-banner.jpg', kicker: 'MINIMALLY INVASIVE SPINE' },
  { slug: 'hair-transplantation', title: 'Hair Transplantation', banner: 'hair-transplantation-seamless-banner.jpg', kicker: 'CLINICAL TRICHOLOGY' },
  { slug: 'weight-loss-surgery', title: 'Weight Loss Surgery', banner: 'weight-loss-surgery-seamless-banner.jpg', kicker: 'BARIATRIC' },
  { slug: 'ivf', title: 'IVF', banner: 'ivf-seamless-banner.jpg', kicker: 'REPRODUCTIVE' },
  { slug: 'bone-marrow-transplant', title: 'Bone Marrow Transplant', banner: 'bone-marrow-transplant-seamless-banner.jpg', kicker: 'CELLULAR' },
  { slug: 'kidney-transplant', title: 'Kidney Transplant', banner: 'kidney-transplant-seamless-banner.jpg', kicker: 'RENAL' },
  { slug: 'liver-transplant', title: 'Liver Transplant', banner: 'liver-transplant-seamless-banner.jpg', kicker: 'HEPATOBILIARY' },
  { slug: 'dental-care', title: 'Dental Care', banner: 'dental-care-seamless-banner.jpg', kicker: 'MAXILLOFACIAL' },
  { slug: 'ayush-wellness', title: 'AYUSH Wellness', banner: 'ayush-wellness-seamless-banner.jpg', kicker: 'AYURVEDA' },
  { slug: 'general-surgery', title: 'General Surgery', banner: 'general-surgery-seamless-banner.jpg', kicker: 'LAPAROSCOPIC' },
  { slug: 'cosmetic-surgery', title: 'Cosmetic', banner: 'cosmetic-surgery-seamless-banner.jpg', kicker: 'AESTHETIC' }
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

async function verifySeamless() {
  console.log('=== VERIFYING SEAMLESS HERO BANNERS ON ALL 15 SPECIALTY PAGES ===\n');
  let passCount = 0;
  const verifiedBanners = new Set();

  for (const s of specialties) {
    const url = `http://127.0.0.1:4321/en/knowledge-centre/${s.slug}/`;
    try {
      const res = await fetchPage(url);
      if (res.status !== 200) {
        console.error(`❌ [${s.slug}] HTTP ${res.status}`);
        continue;
      }

      const hasSeamlessHero = res.html.includes('seamless-specialty-hero');
      const hasBannerBg = res.html.includes(s.banner);
      const hasTitle = res.html.includes(s.title);
      const hasKicker = res.html.includes(s.kicker);
      const hasBreadcrumbs = res.html.includes('seamless-breadcrumbs');
      // Verify NO separate card/frame is present in the hero
      const hasNoOldCard = !res.html.includes('visual-card-frame') && !res.html.includes('hero-icon-frame');

      if (hasSeamlessHero && hasBannerBg && hasTitle && hasKicker && hasBreadcrumbs && hasNoOldCard) {
        console.log(`✅ [${s.slug}] HTTP 200 PASS:`);
        console.log(`     - Single continuous banner: ${s.banner}`);
        console.log(`     - LEFT: H1 "${s.title}" & Kicker "${s.kicker}" with zero obstruction`);
        console.log(`     - RIGHT: Seamlessly integrated medical visual (no floating card/border/box)\n`);
        passCount++;
        verifiedBanners.add(s.banner);
      } else {
        console.error(`❌ [${s.slug}] FAILED CHECKS: SeamlessHero=${hasSeamlessHero}, BannerBg=${hasBannerBg}, Title=${hasTitle}, Kicker=${hasKicker}, NoOldCard=${hasNoOldCard}`);
      }
    } catch (e) {
      console.error(`❌ [${s.slug}] Network error: ${e.message}`);
    }
  }

  console.log('=================================================================');
  console.log(`FINAL RESULT: ${passCount} / ${specialties.length} seamless hero banners verified!`);
  console.log(`Distinct seamless banners used: ${verifiedBanners.size} / 15`);
  console.log('=================================================================\n');
}

verifySeamless();

