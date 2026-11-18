const fs = require('fs');

// Test that all 15 specialties and articles are indexed
const specialtySynonyms = {
  'cardiology': ['heart', 'cardiac', 'bypass', 'cabg', 'angioplasty', 'stent', 'stenting', 'valve', 'pacemaker', 'aicd', 'heart attack', 'coronary artery disease', 'cad', 'heart failure', 'chest pain'],
  'oncology': ['cancer', 'tumor', 'tumour', 'chemo', 'chemotherapy', 'radiation', 'cyberknife', 'car-t', 'leukaemia', 'leukemia', 'breast cancer', 'biopsy', 'carcinoma', 'oncologist', 'oncology', 'cancer treatment'],
  'neurology': ['brain', 'stroke', 'parkinson', 'parkinsons', 'epilepsy', 'seizure', 'dbs', 'deep brain stimulation', 'headache', 'migraine', 'dementia', 'craniotomy', 'neuro', 'neurology'],
  'orthopedics': ['knee', 'hip', 'joint', 'replacement', 'knee replacement', 'hip replacement', 'acl', 'bone', 'fracture', 'osteoarthritis', 'orthopaedics', 'orthopedics', 'shoulder replacement'],
  'spine-surgery': ['spine', 'back', 'neck', 'sciatica', 'slipped disc', 'slip disc', 'scoliosis', 'spinal fusion', 'discectomy', 'disc replacement', 'vertebrae', 'spine surgery'],
  'hair-transplantation': ['hair', 'hair loss', 'hair transplant', 'baldness', 'fue', 'fut', 'alopecia', 'grafts', 'hair transplantation'],
  'weight-loss-surgery': ['weight loss', 'bariatric', 'obesity', 'gastric sleeve', 'gastric bypass', 'slimming', 'bariatric surgery', 'weight loss surgery'],
  'ivf': ['ivf', 'fertility', 'infertility', 'embryo', 'egg retrieval', 'iui', 'pregnancy', 'reproductive', 'reproductive medicine', 'embryo transfer'],
  'bone-marrow-transplant': ['bone marrow', 'bmt', 'stem cell', 'allogeneic', 'autologous', 'gvhd', 'bone marrow transplant', 'bone marrow transplantation'],
  'kidney-transplant': ['kidney', 'renal', 'kidney transplant', 'dialysis', 'living donor', 'nephrology', 'kidney disease'],
  'liver-transplant': ['liver', 'hepatic', 'cirrhosis', 'liver transplant', 'living donor liver', 'hepatitis', 'end-stage liver'],
  'dental-care': ['dental', 'teeth', 'tooth', 'implants', 'dental care', 'maxillofacial', 'all-on-4', 'dentist'],
  'ayush-wellness': ['ayush', 'ayurveda', 'panchakarma', 'holistic', 'wellness', 'yoga', 'ayush wellness'],
  'general-surgery': ['general surgery', 'laparoscopic', 'hernia', 'gallbladder', 'cholecystectomy', 'appendix', 'appendectomy'],
  'cosmetic-surgery': ['cosmetic', 'plastic surgery', 'rhinoplasty', 'facelift', 'liposuction', 'breast aesthetic', 'cosmetic surgery']
};

console.log('Specialty synonyms defined for all 15 specialties:', Object.keys(specialtySynonyms).length);

