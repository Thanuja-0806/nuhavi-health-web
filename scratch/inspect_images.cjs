const fs = require('fs');

const dir = 'public/images/specialties/';
const files = fs.readdirSync(dir);

files.forEach(f => {
  const p = dir + f;
  const stat = fs.statSync(p);
  const buf = fs.readFileSync(p);
  // Check header
  const isJpg = buf[0] === 0xFF && buf[1] === 0xD8;
  const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
  console.log(`${f} - size: ${stat.size} bytes, isJpg: ${isJpg}, isPng: ${isPng}`);
});

