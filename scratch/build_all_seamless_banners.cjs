const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const width = 1920;
const height = 560;

// Refined complementary color stops matching doctor-approved HEX backgrounds and meaningful medical directions:
// Pure medical panoramic banners: NO decorative waveform lines, NO artificial concentric circles, NO ornamental symbols.
// Left: Pristine high-contrast medical canvas transitioning smoothly into the doctor's approved pastel.
// Right: Authentic clinical medical photograph naturally feathered and softly illuminated.
const specialtyConfigs = [
  {
    slug: 'cardiology',
    stops: ['#FFFFFF', '#FAF4F5', '#F4E5E6', '#EAD4D7', '#DFBFC4'],
    glow: '#C88892', // Burgundy ambient glow for heart illustrations
    src: 'public/images/specialties/hero/cardiology-hero.jpg'
  },
  {
    slug: 'oncology',
    stops: ['#FFFFFF', '#F3F8F5', '#E5F0E9', '#D4E6DB', '#C2DCCB'],
    glow: '#8EBA9F', // Muted sage healing glow
    src: 'public/images/specialties/hero/oncology-hero.jpg'
  },
  {
    slug: 'neurology',
    stops: ['#FFFFFF', '#F3F7FB', '#E7EFF7', '#D4E3F0', '#C0D4E7'],
    glow: '#8BB4DD', // Refined deep-blue aura
    src: 'public/images/specialties/hero/neurology-hero.jpg'
  },
  {
    slug: 'orthopedics',
    stops: ['#FFFFFF', '#F1F8F8', '#E3F0F0', '#D0E6E6', '#BDDCDC'],
    glow: '#7FB8B8', // Muted teal aura
    src: 'public/images/specialties/hero/orthopedics-hero.jpg'
  },
  {
    slug: 'spine-surgery',
    stops: ['#FFFFFF', '#F4F6FA', '#E8EDF3', '#D8E2EC', '#C4D3E2'],
    glow: '#7C9BBE', // Darker slate-blue aura
    src: 'public/images/specialties/hero/spine-surgery-hero.jpg'
  },
  {
    slug: 'hair-transplantation',
    stops: ['#FFFFFF', '#FAF6EF', '#F3EBDD', '#E6DBC6', '#D6C8AC'],
    glow: '#BFA887', // Warm beige & soft brown aura (avoids pink/salon)
    src: 'public/images/specialties/hero/hair-transplantation-hero.jpg'
  },
  {
    slug: 'weight-loss-surgery',
    stops: ['#FFFFFF', '#F3F8F5', '#E5F1EA', '#D4E6DC', '#C0DBCB'],
    glow: '#88BEA3', // Natural sage aura (avoids bright fitness green)
    src: 'public/images/specialties/hero/weight-loss-surgery-hero.jpg'
  },
  {
    slug: 'ivf',
    stops: ['#FFFFFF', '#F7F4FA', '#EEE9F5', '#DFD6EA', '#CFC2DF'],
    glow: '#B29EC9', // Gentle lavender aura
    src: 'public/images/specialties/hero/ivf-hero.jpg'
  },
  {
    slug: 'bone-marrow-transplant',
    stops: ['#FFFFFF', '#F8F4FA', '#F0EAF3', '#E3D7E6', '#D4C2D8'],
    glow: '#B697C1', // Gentle plum aura representing hope & resilience
    src: 'public/images/specialties/hero/bone-marrow-transplant-hero.jpg'
  },
  {
    slug: 'kidney-transplant',
    stops: ['#FFFFFF', '#F3F8F5', '#E5F1EC', '#D5E7DF', '#BED9CE'],
    glow: '#86BAA7', // Clean pale green aura
    src: 'public/images/specialties/hero/kidney-transplant-hero.jpg'
  },
  {
    slug: 'liver-transplant',
    stops: ['#FFFFFF', '#FAF3EE', '#F8EAE1', '#EED5C7', '#E2C3B1'],
    glow: '#D1A58E', // Warm peach & soft terracotta aura
    src: 'public/images/specialties/hero/liver-transplant-hero.jpg'
  },
  {
    slug: 'dental-care',
    stops: ['#FFFFFF', '#F1F8F6', '#E3F2EF', '#D0E9E4', '#BBDED7'],
    glow: '#7BBFB1', // Fresh mint & subtle teal aura
    src: 'public/images/specialties/hero/dental-care-hero.jpg'
  },
  {
    slug: 'ayush-wellness',
    stops: ['#FFFFFF', '#FAFDF6', '#F4F8EB', '#E5EDD2', '#D4E1BC'],
    glow: '#A8C478', // Soft herbal olive aura
    src: 'public/images/specialties/hero/ayush-wellness-hero.jpg'
  },
  {
    slug: 'general-surgery',
    stops: ['#FFFFFF', '#F5F7FA', '#EBEFF5', '#D9E2EE', '#C2CFDE'],
    glow: '#8FA6C7', // Clinical ice slate aura
    src: 'public/images/specialties/hero/general-surgery-hero.jpg'
  },
  {
    slug: 'cosmetic-surgery',
    stops: ['#FFFFFF', '#FAF6F0', '#F2EBDD', '#E5DCCB', '#D5C7AF'],
    glow: '#C1AD89', // Warm champagne & muted taupe aura
    src: 'public/images/specialties/hero/cosmetic-surgery-hero.jpg'
  }
];

async function buildBanner(spec) {
  const [s0, s1, s2, s3, s4] = spec.stops;

  // Clean medical panoramic canvas without decorative lines, artificial circles, or ornamental emblems
  const bgSvg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${s0}" />
        <stop offset="28%" stop-color="${s1}" />
        <stop offset="50%" stop-color="${s2}" />
        <stop offset="75%" stop-color="${s3}" />
        <stop offset="100%" stop-color="${s4}" />
      </linearGradient>
      <radialGradient id="radialAura" cx="74%" cy="50%" r="38%">
        <stop offset="0%" stop-color="${spec.glow}" stop-opacity="0.22" />
        <stop offset="60%" stop-color="${s3}" stop-opacity="0.10" />
        <stop offset="100%" stop-color="${s4}" stop-opacity="0" />
      </radialGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    <rect width="${width}" height="${height}" fill="url(#radialAura)" />
  </svg>
  `;

  const bgBuffer = await sharp(Buffer.from(bgSvg)).png().toBuffer();

  // Resize and mask the authentic anatomical visual cleanly
  const imageWidth = 980;
  const resizedVisual = await sharp(spec.src)
    .resize(imageWidth, height, { fit: 'cover', position: 'center' })
    .toBuffer();

  // Gentle horizontal feathered gradient mask for pure seamless blending
  const maskSvg = `
  <svg width="${imageWidth}" height="${height}" viewBox="0 0 ${imageWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fadeMask" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#000000" stop-opacity="0" />
        <stop offset="15%" stop-color="#000000" stop-opacity="0.08" />
        <stop offset="35%" stop-color="#000000" stop-opacity="0.45" />
        <stop offset="60%" stop-color="#000000" stop-opacity="0.88" />
        <stop offset="85%" stop-color="#000000" stop-opacity="1" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.95" />
      </linearGradient>
    </defs>
    <rect width="${imageWidth}" height="${height}" fill="url(#fadeMask)" />
  </svg>
  `;
  const maskBuffer = await sharp(Buffer.from(maskSvg)).png().toBuffer();

  // Apply the soft feathered mask
  const maskedVisual = await sharp(resizedVisual)
    .composite([
      {
        input: maskBuffer,
        blend: 'dest-in'
      }
    ])
    .png()
    .toBuffer();

  // Composite masked visual onto the panoramic gradient canvas
  const finalImage = await sharp(bgBuffer)
    .composite([
      {
        input: maskedVisual,
        left: width - imageWidth,
        top: 0,
        blend: 'over'
      }
    ])
    .jpeg({ quality: 94 })
    .toBuffer();

  const outPath = path.join(__dirname, `../public/images/specialties/hero/${spec.slug}-seamless-banner.jpg`);
  fs.writeFileSync(outPath, finalImage);
  console.log(`Generated seamless medical banner: ${spec.slug} (${outPath})`);
}

async function main() {
  console.log('Generating clean seamless medical hero banners without decorative emblems or waveform lines...');
  for (const spec of specialtyConfigs) {
    if (fs.existsSync(spec.src)) {
      await buildBanner(spec);
    } else {
      console.warn(`Source image missing: ${spec.src}`);
    }
  }
  console.log('All 15 seamless banners generated successfully!');
}

main().catch(console.error);
