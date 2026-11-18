const fs = require('fs');
const sharp = require('sharp');

async function testCardiologyBanner() {
  const width = 1920;
  const height = 560;

  // 1. Create a wide background SVG with gradient from light clinical cyan to deep medical navy
  const bgSvg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#F0F9FF" />
        <stop offset="35%" stop-color="#E0F2FE" />
        <stop offset="55%" stop-color="#BAE6FD" />
        <stop offset="75%" stop-color="#0284C7" />
        <stop offset="100%" stop-color="#075985" />
      </linearGradient>
      <radialGradient id="heartGlow" cx="72%" cy="50%" r="35%">
        <stop offset="0%" stop-color="#38BDF8" stop-opacity="0.6" />
        <stop offset="50%" stop-color="#0284C7" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#075985" stop-opacity="0" />
      </radialGradient>
      <!-- Horizontal ECG Pulse line only on the right side (from x=950 to 1920) -->
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    <rect width="${width}" height="${height}" fill="url(#heartGlow)" />
    
    <!-- ECG Waveform starting at x=900 and running across the right half through the heart -->
    <path d="M 850 280 L 1100 280 L 1120 280 L 1135 230 L 1150 340 L 1165 250 L 1180 300 L 1195 280 L 1350 280 L 1370 280 L 1385 200 L 1400 370 L 1415 220 L 1430 320 L 1445 280 L 1650 280 L 1670 280 L 1685 240 L 1700 330 L 1715 260 L 1730 280 L 1920 280"
          stroke="#E0F2FE" stroke-width="3" fill="none" opacity="0.9" filter="url(#glow)" />
    <path d="M 850 280 L 1100 280 L 1120 280 L 1135 230 L 1150 340 L 1165 250 L 1180 300 L 1195 280 L 1350 280 L 1370 280 L 1385 200 L 1400 370 L 1415 220 L 1430 320 L 1445 280 L 1650 280 L 1670 280 L 1685 240 L 1700 330 L 1715 260 L 1730 280 L 1920 280"
          stroke="#38BDF8" stroke-width="2" fill="none" opacity="0.95" />
  </svg>
  `;

  const bgBuffer = await sharp(Buffer.from(bgSvg)).png().toBuffer();

  // 2. Prepare the heart image: extract/resize, create a smooth horizontal alpha mask so it feathers seamlessly
  const heartImg = sharp('public/images/specialties/hero/cardiology-hero.jpg');
  const heartMeta = await heartImg.metadata();
  
  // Resize heart to fit right side (width ~850px, height 560px)
  const resizedHeart = await sharp('public/images/specialties/hero/cardiology-hero.jpg')
    .resize(950, height, { fit: 'cover', position: 'right' })
    .toBuffer();

  // Feather mask for the heart: fully transparent on left, fading to fully opaque on right
  const maskSvg = `
  <svg width="950" height="${height}">
    <defs>
      <linearGradient id="feather" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#000000" stop-opacity="0" />
        <stop offset="35%" stop-color="#000000" stop-opacity="0.3" />
        <stop offset="70%" stop-color="#000000" stop-opacity="0.85" />
        <stop offset="100%" stop-color="#000000" stop-opacity="1" />
      </linearGradient>
    </defs>
    <rect width="950" height="${height}" fill="url(#feather)" />
  </svg>
  `;
  const maskBuffer = await sharp(Buffer.from(maskSvg)).png().toBuffer();

  // Apply mask to heart using composite with dest-in
  const maskedHeart = await sharp(resizedHeart)
    .ensureAlpha()
    .composite([{ input: maskBuffer, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Composite masked heart onto background at right (x = 1920 - 950 = 970)
  await sharp(bgBuffer)
    .composite([
      { input: maskedHeart, left: 970, top: 0, blend: 'over' }
    ])
    .jpeg({ quality: 92 })
    .toFile('scratch/test_cardiology_seamless.jpg');

  console.log('Created scratch/test_cardiology_seamless.jpg');
}

testCardiologyBanner();

