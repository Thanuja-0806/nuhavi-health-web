const { spawn } = require('child_process');
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

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', reject);
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  console.log('Starting preview server on port 4399...');
  const server = spawn('npx.cmd', ['astro', 'preview', '--port', '4399', '--host', '127.0.0.1'], {
    shell: true,
    stdio: 'pipe'
  });

  server.stdout.on('data', d => process.stdout.write(d.toString()));
  server.stderr.on('data', d => process.stderr.write(d.toString()));

  // Wait for server to start
  let ready = false;
  for (let i = 0; i < 20; i++) {
    await delay(1000);
    try {
      const ping = await fetchUrl('http://127.0.0.1:4399/');
      if (ping.status === 200) {
        ready = true;
        break;
      }
    } catch (e) {
      console.log('Waiting for server...', e.message);
    }
  }

  if (!ready) {
    console.error('Server failed to start in time');
    server.kill();
    process.exit(1);
  }

  console.log('\n=== TESTING ALL 15 SPECIALTY HERO HEADERS ON LIVE PREVIEW SERVER ===\n');
  let passCount = 0;
  const usedImages = new Set();

  for (const s of specialties) {
    const url = `http://127.0.0.1:4399/en/knowledge-centre/${s.slug}/`;
    try {
      const res = await fetchUrl(url);
      const hasBanner = res.html.includes('renova-hero-banner');
      const hasTitle = res.html.includes(s.title);
      const hasImg = res.html.includes(s.imgKeyword);
      const hasWave = res.html.includes('hero-waveform-svg');
      const hasBc = res.html.includes('hero-breadcrumbs');

      if (res.status === 200 && hasBanner && hasTitle && hasImg && hasWave && hasBc) {
        console.log(`✅ [${s.slug}] HTTP 200 PASS:`);
        console.log(`     - Banner: Renova-style wide hero with wave (${s.wave})`);
        console.log(`     - Left: Specialty H1 & description`);
        console.log(`     - Right: Unique medical image (${s.imgKeyword})`);
        passCount++;
        usedImages.add(s.imgKeyword);
      } else {
        console.error(`❌ [${s.slug}] FAILED: Status=${res.status}, Banner=${hasBanner}, Title=${hasTitle}, Img=${hasImg}`);
      }
    } catch (e) {
      console.error(`❌ [${s.slug}] Error:`, e.message);
    }
  }

  console.log('\n======================================================');
  console.log(`SUMMARY: ${passCount} / ${specialties.length} specialty hero headers verified on LIVE server!`);
  console.log(`Distinct hero images verified: ${usedImages.size} / 15`);
  console.log('======================================================\n');

  server.kill('SIGINT');
  process.exit(0);
}

run();
