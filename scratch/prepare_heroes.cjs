const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\91818\\.gemini\\antigravity\\brain\\dac84c9a-66f7-4501-a1dc-e2aec6cc5d96';
const outDir = path.resolve('public/images/specialties/hero');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sources = [
  { slug: 'cardiology', file: path.join(brainDir, 'cardiology_hero_1794995013719.jpg'), crop: false },
  { slug: 'oncology', file: path.join(brainDir, 'oncology_hero_1794995034752.jpg'), crop: false },
  { slug: 'neurology', file: path.join(brainDir, 'neurology_hero_1794995060206.jpg'), crop: false },
  { slug: 'orthopedics', file: path.join(brainDir, 'orthopedics_hero_1794995076990.jpg'), crop: false },
  { slug: 'spine-surgery', file: path.join(brainDir, 'spine_surgery_hero_1794995093862.jpg'), crop: false },
  { slug: 'hair-transplantation', file: path.join(brainDir, 'hair_transplantation_hero_1794995030367.jpg'), crop: false },
  { slug: 'weight-loss-surgery', file: 'scratch/stomach_raw.jpg', crop: true },
  { slug: 'ivf', file: 'scratch/embryo_raw.jpg', crop: true },
  { slug: 'bone-marrow-transplant', file: 'scratch/bone_marrow_raw.jpg', crop: true },
  { slug: 'kidney-transplant', file: 'scratch/kidney_raw.jpg', crop: true },
  { slug: 'liver-transplant', file: 'scratch/liver_raw.jpg', crop: true },
  { slug: 'dental-care', file: 'scratch/dental_raw.jpg', crop: true },
  { slug: 'ayush-wellness', file: 'scratch/ayush_raw.jpg', crop: true },
  { slug: 'general-surgery', file: 'scratch/surgery_raw.jpg', crop: true },
  { slug: 'cosmetic-surgery', file: 'scratch/skin_raw.jpg', crop: true }
];

async function processAll() {
  for (const item of sources) {
    const dest = path.join(outDir, `${item.slug}-hero.jpg`);
    console.log(`Processing ${item.slug} from ${item.file}...`);
    try {
      if (!fs.existsSync(item.file)) {
        console.error(`File missing: ${item.file}`);
        continue;
      }
      
      const img = sharp(item.file);
      const meta = await img.metadata();
      console.log(`  Source dimensions: ${meta.width}x${meta.height}`);

      await sharp(item.file)
        .resize(1000, 650, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 90 })
        .toFile(dest);
        
      const stat = fs.statSync(dest);
      console.log(`  Created ${dest} (${Math.round(stat.size / 1024)} KB)`);
    } catch (e) {
      console.error(`Error on ${item.slug}:`, e.message);
    }
  }
  console.log('Done processing all 15 hero images!');
}

processAll();

