/**
 * src/data/unifiedSpecialties.ts
 * Nuhavi Health — Unified 15 Specialties Configuration
 *
 * Single Source of Truth for:
 * 1. Global Header "Specialties ▼" Mega-Dropdown
 * 2. Knowledge Centre Two-Panel Browsing Interface
 * 3. Specialty landing page hero banners & article cards
 * 4. All Articles page filter chips and cards
 *
 * Ensures 100% visual and clinical consistency across:
 * - Specialty names and ordering
 * - Medical icons and SVG definitions
 * - Color palette (Navy, Gold, Lavender)
 * - Navigation links and routes
 */

export interface UnifiedSpecialty {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  articleCount: number;
  color: string;
  bgColor: string;
  borderColor: string;
  gradient: string;
  hubHref: string;
  icon: string;
  image: string;
  doctorHex?: string;
}

export const unifiedSpecialties: UnifiedSpecialty[] = [
  {
    id: 'cardiology',
    slug: 'cardiology',
    name: 'Cardiology',
    shortDesc: 'Heart conditions, coronary artery disease, bypass surgery, valve disease, and cardiac rehabilitation.',
    articleCount: 10,
    color: '#7D1D2D', // Doctor-directed rich burgundy accent for heart illustrations
    bgColor: '#F4E5E6', // Approved doctor HEX: Soft blush pink
    borderColor: '#E4CED1',
    gradient: 'linear-gradient(135deg, #FAF4F5 0%, #F4E5E6 50%, #EBD5D8 100%)',
    hubHref: '/en/knowledge-centre/cardiology/',
    icon: 'cardiology',
    image: '/images/specialties/cardiology.jpg',
    doctorHex: '#F4E5E6'
  },
  {
    id: 'oncology',
    slug: 'oncology',
    name: 'Oncology',
    shortDesc: 'Cancer staging, chemotherapy, radiation therapy, immunotherapy, CyberKnife, and CAR-T cell therapy.',
    articleCount: 15,
    color: '#1E5438', // Doctor-directed healing-inspired deep sage accent
    bgColor: '#E5F0E9', // Approved doctor HEX: Muted sage green
    borderColor: '#CCE0D3',
    gradient: 'linear-gradient(135deg, #F3F8F5 0%, #E5F0E9 50%, #D4E6DB 100%)',
    hubHref: '/en/knowledge-centre/oncology/',
    icon: 'oncology',
    image: '/images/specialties/oncology.jpg',
    doctorHex: '#E5F0E9'
  },
  {
    id: 'neurology',
    slug: 'neurology',
    name: 'Neurology',
    shortDesc: 'Brain and nervous system conditions, stroke warning signs, DBS, epilepsy, and neurological recovery.',
    articleCount: 10,
    color: '#164069', // Doctor-directed refined deep-blue accent
    bgColor: '#E7EFF7', // Approved doctor HEX: Light blue
    borderColor: '#CCDEED',
    gradient: 'linear-gradient(135deg, #F3F7FB 0%, #E7EFF7 50%, #D4E3F0 100%)',
    hubHref: '/en/knowledge-centre/neurology/',
    icon: 'neurology',
    image: '/images/specialties/neurology.jpg',
    doctorHex: '#E7EFF7'
  },
  {
    id: 'orthopedics',
    slug: 'orthopedics',
    name: 'Orthopedics',
    shortDesc: 'Joint and bone conditions, knee and hip replacement, robotic surgery, ACL repair, and physiotherapy.',
    articleCount: 10,
    color: '#155658', // Doctor-directed muted teal accent
    bgColor: '#E3F0F0', // Approved doctor HEX: Light aqua
    borderColor: '#C6E2E2',
    gradient: 'linear-gradient(135deg, #F1F8F8 0%, #E3F0F0 50%, #D0E6E6 100%)',
    hubHref: '/en/knowledge-centre/orthopedics/',
    icon: 'orthopedics',
    image: '/images/specialties/orthopedics.jpg',
    doctorHex: '#E3F0F0'
  },
  {
    id: 'spine-surgery',
    slug: 'spine-surgery',
    name: 'Spine Surgery',
    shortDesc: 'Slipped discs, sciatica, scoliosis, disc replacement, and minimally invasive spinal decompression.',
    articleCount: 10,
    color: '#1F3A56', // Doctor-directed darker slate-blue accent for spine illustrations
    bgColor: '#E8EDF3', // Approved doctor HEX: Light slate
    borderColor: '#CFDAE6',
    gradient: 'linear-gradient(135deg, #F4F6FA 0%, #E8EDF3 50%, #D8E2EC 100%)',
    hubHref: '/en/knowledge-centre/spine-surgery/',
    icon: 'spine-surgery',
    image: '/images/specialties/spine-surgery.jpg',
    doctorHex: '#E8EDF3'
  },
  {
    id: 'hair-transplantation',
    slug: 'hair-transplantation',
    name: 'Hair Transplantation',
    shortDesc: 'Hair loss diagnosis, FUE vs FUT harvesting techniques, graft estimation, and surgical recovery.',
    articleCount: 10,
    color: '#68482A', // Doctor-directed soft clinical brown accent (avoids pink/salon)
    bgColor: '#F3EBDD', // Approved doctor HEX: Warm beige
    borderColor: '#E5D8C1',
    gradient: 'linear-gradient(135deg, #FAF6EF 0%, #F3EBDD 50%, #E6DBC6 100%)',
    hubHref: '/en/knowledge-centre/hair-transplantation/',
    icon: 'hair-transplantation',
    image: '/images/specialties/hair-transplantation.jpg',
    doctorHex: '#F3EBDD'
  },
  {
    id: 'weight-loss-surgery',
    slug: 'weight-loss-surgery',
    name: 'Weight Loss Surgery',
    shortDesc: 'Bariatric surgery, gastric sleeve and bypass procedures, pre-surgery evaluation, and dietary protocols.',
    articleCount: 10,
    color: '#23573C', // Doctor-directed natural sage accent (avoids bright fitness green)
    bgColor: '#E5F1EA', // Approved doctor HEX: Muted green
    borderColor: '#CCE3D5',
    gradient: 'linear-gradient(135deg, #F3F8F5 0%, #E5F1EA 50%, #D4E6DC 100%)',
    hubHref: '/en/knowledge-centre/weight-loss-surgery/',
    icon: 'weight-loss-surgery',
    image: '/images/specialties/weight-loss-surgery.jpg',
    doctorHex: '#E5F1EA'
  },
  {
    id: 'ivf',
    slug: 'ivf',
    name: 'IVF & Reproductive Medicine',
    shortDesc: 'Infertility evaluations, IVF vs IUI, egg retrieval, embryo transfer, freezing, and emotional support.',
    articleCount: 10,
    color: '#543578', // Doctor-directed gentle lavender complementary accent
    bgColor: '#EEE9F5', // Approved doctor HEX: Gentle lavender
    borderColor: '#DCD2E8',
    gradient: 'linear-gradient(135deg, #F7F4FA 0%, #EEE9F5 50%, #DFD6EA 100%)',
    hubHref: '/en/knowledge-centre/ivf/',
    icon: 'ivf',
    image: '/images/specialties/ivf.jpg',
    doctorHex: '#EEE9F5'
  },
  {
    id: 'bone-marrow-transplant',
    slug: 'bone-marrow-transplant',
    name: 'Bone Marrow Transplant',
    shortDesc: 'Stem cell transplants, autologous vs allogeneic procedures, HLA donor matching, and GVHD recovery.',
    articleCount: 10,
    color: '#582E60', // Doctor-directed gentle plum accent representing hope & resilience
    bgColor: '#F0EAF3', // Approved doctor HEX: Soft lavender/lilac
    borderColor: '#DFD1E4',
    gradient: 'linear-gradient(135deg, #F8F4FA 0%, #F0EAF3 50%, #E3D7E6 100%)',
    hubHref: '/en/knowledge-centre/bone-marrow-transplant/',
    icon: 'bone-marrow-transplant',
    image: '/images/specialties/bone-marrow-transplant.jpg',
    doctorHex: '#F0EAF3'
  },
  {
    id: 'kidney-transplant',
    slug: 'kidney-transplant',
    name: 'Kidney Transplant',
    shortDesc: 'Chronic kidney disease, living vs deceased donor compatibility, surgery day, and immunosuppression.',
    articleCount: 10,
    color: '#1E5641', // Doctor-directed clean muted green accent (Urology & Renal Sciences)
    bgColor: '#E5F1EC', // Approved doctor HEX: Clean pale green
    borderColor: '#CCE3D8',
    gradient: 'linear-gradient(135deg, #F3F8F5 0%, #E5F1EC 50%, #D5E7DF 100%)',
    hubHref: '/en/knowledge-centre/kidney-transplant/',
    icon: 'kidney-transplant',
    image: '/images/specialties/kidney-transplant.jpg',
    doctorHex: '#E5F1EC'
  },
  {
    id: 'liver-transplant',
    slug: 'liver-transplant',
    name: 'Liver Transplant',
    shortDesc: 'Living-donor and deceased-donor liver transplantation, donor evaluation protocols, and critical care.',
    articleCount: 0,
    color: '#873B20', // Doctor-directed soft terracotta accent (Gastroenterology & GI Surgery)
    bgColor: '#F8EAE1', // Approved doctor HEX: Warm peach
    borderColor: '#EED4C4',
    gradient: 'linear-gradient(135deg, #FAF3EE 0%, #F8EAE1 50%, #EED5C7 100%)',
    hubHref: '/en/knowledge-centre/liver-transplant/',
    icon: 'liver-transplant',
    image: '/images/specialties/liver-transplant.jpg',
    doctorHex: '#F8EAE1'
  },
  {
    id: 'dental-care',
    slug: 'dental-care',
    name: 'Dental Care',
    shortDesc: 'Dental implants, full-mouth reconstruction, orthognathic surgery, and maxillofacial procedures.',
    articleCount: 0,
    color: '#155E54', // Doctor-directed subtle teal accent (Dental & Maxillofacial)
    bgColor: '#E3F2EF', // Approved doctor HEX: Fresh mint
    borderColor: '#C6E6DF',
    gradient: 'linear-gradient(135deg, #F1F8F6 0%, #E3F2EF 50%, #D0E9E4 100%)',
    hubHref: '/en/knowledge-centre/dental-care/',
    icon: 'dental-care',
    image: '/images/specialties/dental-care.jpg',
    doctorHex: '#E3F2EF'
  },
  {
    id: 'ayush-wellness',
    slug: 'ayush-wellness',
    name: 'AYUSH Wellness',
    shortDesc: 'Integrative holistic medicine, traditional Ayurveda, authentic Panchakarma rejuvenation, and yoga care.',
    articleCount: 0,
    color: '#3B5B24', // Deep herbal botanical olive accent
    bgColor: '#F4F8EB', // Soft clinical herbal sage
    borderColor: '#DCE7CB',
    gradient: 'linear-gradient(135deg, #FAFDF6 0%, #F4F8EB 50%, #E5EDD2 100%)',
    hubHref: '/en/knowledge-centre/ayush-wellness/',
    icon: 'ayush-wellness',
    image: '/images/specialties/ayush-wellness.jpg',
    doctorHex: '#F4F8EB'
  },
  {
    id: 'general-surgery',
    slug: 'general-surgery',
    name: 'General Surgery',
    shortDesc: 'Minimally invasive laparoscopic abdominal surgery, hernia repair, gallbladder, and emergency surgical care.',
    articleCount: 0,
    color: '#224063', // Deep clinical navy slate accent
    bgColor: '#EBEFF5', // Clean clinical ice slate
    borderColor: '#D2DEEC',
    gradient: 'linear-gradient(135deg, #F5F7FA 0%, #EBEFF5 50%, #D9E2EE 100%)',
    hubHref: '/en/knowledge-centre/general-surgery/',
    icon: 'general-surgery',
    image: '/images/specialties/general-surgery.jpg',
    doctorHex: '#EBEFF5'
  },
  {
    id: 'cosmetic-surgery',
    slug: 'cosmetic-surgery',
    name: 'Cosmetic & Plastic Surgery',
    shortDesc: 'Aesthetic and reconstructive plastic surgery, post-bariatric body contouring, and facial aesthetics.',
    articleCount: 0,
    color: '#634F3A', // Doctor-directed muted taupe and elegant champagne accent (Plastic & Reconstructive)
    bgColor: '#F2EBDD', // Approved doctor HEX: Warm beige
    borderColor: '#E3D8C2',
    gradient: 'linear-gradient(135deg, #FAF6F0 0%, #F2EBDD 50%, #E5DCCB 100%)',
    hubHref: '/en/knowledge-centre/cosmetic-surgery/',
    icon: 'cosmetic-surgery',
    image: '/images/specialties/cosmetic-surgery.jpg',
    doctorHex: '#F2EBDD'
  }
];

const specialtyAliasMap: Record<string, string> = {
  'cardiology': 'cardiology',
  'cardiac-sciences': 'cardiology',
  'cardiac': 'cardiology',
  'heart': 'cardiology',
  'oncology': 'oncology',
  'cancer-care': 'oncology',
  'cancer': 'oncology',
  'neurology': 'neurology',
  'neurosciences': 'neurology',
  'neuro': 'neurology',
  'orthopedics': 'orthopedics',
  'orthopaedics': 'orthopedics',
  'bone': 'orthopedics',
  'joint': 'orthopedics',
  'spine-surgery': 'spine-surgery',
  'spine': 'spine-surgery',
  'hair-transplantation': 'hair-transplantation',
  'hair': 'hair-transplantation',
  'weight-loss-surgery': 'weight-loss-surgery',
  'bariatric': 'weight-loss-surgery',
  'bariatric-surgery': 'weight-loss-surgery',
  'weight-loss': 'weight-loss-surgery',
  'ivf': 'ivf',
  'fertility': 'ivf',
  'reproductive': 'ivf',
  'bone-marrow-transplant': 'bone-marrow-transplant',
  'bmt': 'bone-marrow-transplant',
  'organ-transplants': 'bone-marrow-transplant',
  'kidney-transplant': 'kidney-transplant',
  'nephrology-urology': 'kidney-transplant',
  'nephrology': 'kidney-transplant',
  'urology': 'kidney-transplant',
  'kidney': 'kidney-transplant',
  'liver-transplant': 'liver-transplant',
  'gastroenterology': 'liver-transplant',
  'gastro': 'liver-transplant',
  'liver': 'liver-transplant',
  'dental-care': 'dental-care',
  'dental': 'dental-care',
  'ayush-wellness': 'ayush-wellness',
  'ayush': 'ayush-wellness',
  'general-surgery': 'general-surgery',
  'surgery': 'general-surgery',
  'cosmetic-surgery': 'cosmetic-surgery',
  'cosmetic': 'cosmetic-surgery',
  'plastic-surgery': 'cosmetic-surgery',
  'pulmonology': 'pulmonology',
  'respiratory': 'pulmonology',
  'vascular-surgery': 'vascular-surgery',
  'vascular': 'vascular-surgery',
};

// Supplementary palette for doctor reference (Pulmonology & Vascular Surgery)
export const supplementaryDoctorSpecialties: Record<string, UnifiedSpecialty> = {
  'pulmonology': {
    id: 'pulmonology',
    slug: 'pulmonology',
    name: 'Pulmonology & Respiratory Medicine',
    shortDesc: 'Advanced pulmonary medicine, asthma, COPD, interstitial lung disease, and bronchoscopy.',
    articleCount: 0,
    color: '#1E4E75', // Airy light blue with soft blue accents
    bgColor: '#E8F2F8', // Approved doctor HEX: Airy light blue
    borderColor: '#CFE2EE',
    gradient: 'linear-gradient(135deg, #F3F8FB 0%, #E8F2F8 50%, #D6E6F2 100%)',
    hubHref: '/en/knowledge-centre/pulmonology/',
    icon: 'pulmonology',
    image: '/images/specialties/cardiology.jpg',
    doctorHex: '#E8F2F8'
  },
  'vascular-surgery': {
    id: 'vascular-surgery',
    slug: 'vascular-surgery',
    name: 'Vascular Surgery',
    shortDesc: 'Peripheral arterial disease, endovascular stenting, aortic aneurysm repair, and venous disorders.',
    articleCount: 0,
    color: '#5A2C58', // Sophisticated pale lavender with muted plum accents
    bgColor: '#F0EAF1', // Approved doctor HEX: Sophisticated pale lavender
    borderColor: '#DDCEE0',
    gradient: 'linear-gradient(135deg, #F7F4F8 0%, #F0EAF1 50%, #E3D6E5 100%)',
    hubHref: '/en/knowledge-centre/vascular-surgery/',
    icon: 'vascular-surgery',
    image: '/images/specialties/cardiology.jpg',
    doctorHex: '#F0EAF1'
  }
};

export function getSpecialtyMeta(slugOrName: string): UnifiedSpecialty {
  const normalized = (slugOrName || '').toLowerCase().trim().replace(/\s+/g, '-');
  const canonicalSlug = specialtyAliasMap[normalized] || normalized;
  const found = unifiedSpecialties.find((s) => s.slug === canonicalSlug || s.id === canonicalSlug);
  if (found) return found;
  if (supplementaryDoctorSpecialties[canonicalSlug]) return supplementaryDoctorSpecialties[canonicalSlug];
  return unifiedSpecialties[0];
}

export function getSpecialtyImage(slugOrName: string): string {
  const meta = getSpecialtyMeta(slugOrName);
  return meta ? meta.image : '/images/specialties/cardiology.jpg';
}
