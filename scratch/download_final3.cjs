const { execSync } = require('child_process');
const fs = require('fs');

const items = [
  {
    name: 'kidney',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/2612_Blood_Flow_in_the_Kidneys.jpg'
  },
  {
    name: 'surgery',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Surgeons_in_the_operating_room.jpg'
  },
  {
    name: 'ayush',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Withania_somnifera_NP.JPG'
  }
];

for (const item of items) {
  const target = `scratch/${item.name}_raw.jpg`;
  try {
    execSync(`curl.exe -s -L -A "NuhaviHealth/1.0 (info@nuhavihealth.com)" "${item.url}" -o "${target}"`);
    const stat = fs.statSync(target);
    console.log(`${item.name}: ${stat.size} bytes`);
  } catch (e) {
    console.error(`Failed ${item.name}:`, e.message);
  }
}

