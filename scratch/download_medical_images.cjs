const { execSync } = require('child_process');
const fs = require('fs');

const urls = {
  kidney: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/2612_Blood_Flow_in_the_Kidneys.jpg',
  liver: 'https://upload.wikimedia.org/wikipedia/commons/d/de/2425_Gallbladder.jpg',
  dental: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/2409_Tooth.jpg',
  stomach: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/2414_Stomach.jpg',
  skin: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/501_Structure_of_the_skin.jpg',
  embryo: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Embryo_implantation.jpg',
  surgery: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Surgeons_in_the_operating_room.jpg',
  ayush: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Withania_somnifera_NP.JPG'
};

for (const [key, url] of Object.entries(urls)) {
  const target = `scratch/${key}_raw.jpg`;
  try {
    execSync(`curl.exe -s -L -A "NuhaviHealth/1.0 (info@nuhavihealth.com)" "${url}" -o "${target}"`);
    const stat = fs.statSync(target);
    console.log(`${key}: ${stat.size} bytes`);
  } catch (err) {
    console.error(`Failed ${key}:`, err.message);
  }
}

