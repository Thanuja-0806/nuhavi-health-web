/**
 * src/data/specialtyArticlesData.ts
 * Nuhavi Health Knowledge Centre — Verified 15 Specialties Popular & Latest Articles
 *
 * Strict Compliance:
 * - 5 Popular and 5 Latest articles for EVERY ONE of the 15 specialties (30 sections total).
 * - Exact ordering and titles for Cardiology, IVF (matching Claude screenshot), BMT, Oncology, etc.
 * - Accurate anchors, URLs, and 2-min reading times.
 */

export interface SpecialtyArticleRef {
  num: string;
  title: string;
  href: string;
  slug: string;
  readingTime: string;
  specialtyLabel: string;
}

export interface SpecialtyPopularLatest {
  popular: SpecialtyArticleRef[];
  latest: SpecialtyArticleRef[];
}

export const specialtyPopularLatestMap: Record<string, SpecialtyPopularLatest> = {
  // 1. Cardiology
  'cardiology': {
    popular: [
      { num: '01', title: 'Heart Attack: Early Warning Signs You Should Never Ignore', href: '/en/knowledge-centre/cardiology/heart-attack-early-warning-signs-you-should-never-ignore/', slug: 'heart-attack-early-warning-signs-you-should-never-ignore', readingTime: '2 min', specialtyLabel: 'Cardiology' },
      { num: '02', title: 'What Is Coronary Artery Disease?', href: '/en/knowledge-centre/cardiology/what-is-coronary-artery-disease/', slug: 'what-is-coronary-artery-disease', readingTime: '2 min', specialtyLabel: 'Cardiology' },
      { num: '03', title: 'Heart Bypass Surgery (CABG): How Does It Work?', href: '/en/knowledge-centre/cardiology/heart-bypass-surgery-cabg-how-does-it-work/', slug: 'heart-bypass-surgery-cabg-how-does-it-work', readingTime: '2 min', specialtyLabel: 'Cardiology' },
      { num: '04', title: 'Angioplasty and Stenting Explained', href: '/en/knowledge-centre/cardiology/angioplasty-and-stenting-explained/', slug: 'angioplasty-and-stenting-explained', readingTime: '2 min', specialtyLabel: 'Cardiology' },
      { num: '05', title: 'When Does a Patient Need Heart Valve Replacement?', href: '/en/knowledge-centre/cardiology/when-does-a-patient-need-heart-valve-replacement/', slug: 'when-does-a-patient-need-heart-valve-replacement', readingTime: '2 min', specialtyLabel: 'Cardiology' },
    ],
    latest: [
      { num: '01', title: 'Life After Heart Surgery: Recovery and Precautions', href: '/en/knowledge-centre/cardiology/life-after-heart-surgery-recovery-and-precautions/', slug: 'life-after-heart-surgery-recovery-and-precautions', readingTime: '2 min', specialtyLabel: 'Cardiology' },
      { num: '02', title: 'Heart Failure: Symptoms, Diagnosis and Treatment', href: '/en/knowledge-centre/cardiology/heart-failure-symptoms-diagnosis-and-treatment/', slug: 'heart-failure-symptoms-diagnosis-and-treatment', readingTime: '2 min', specialtyLabel: 'Cardiology' },
      { num: '03', title: 'Symptoms of Heart Valve Disease', href: '/en/knowledge-centre/cardiology/symptoms-of-heart-valve-disease/', slug: 'symptoms-of-heart-valve-disease', readingTime: '2 min', specialtyLabel: 'Cardiology' },
      { num: '04', title: 'Understanding AICD Implantation', href: '/en/knowledge-centre/cardiology/understanding-aicd-implantation/', slug: 'understanding-aicd-implantation', readingTime: '2 min', specialtyLabel: 'Cardiology' },
      { num: '05', title: 'What Is a Pacemaker and Who Needs One?', href: '/en/knowledge-centre/cardiology/what-is-a-pacemaker-and-who-needs-one/', slug: 'what-is-a-pacemaker-and-who-needs-one', readingTime: '2 min', specialtyLabel: 'Cardiology' },
    ]
  },

  // 2. Oncology
  'oncology': {
    popular: [
      { num: '01', title: 'CAR-T Cell Therapy: A New Approach to Treating Certain Blood Cancers', href: '/en/knowledge-centre/oncology/car-t-cell-therapy-a-new-approach-to-treating-certain-blood-cancers/', slug: 'car-t-cell-therapy-a-new-approach-to-treating-certain-blood-cancers', readingTime: '2 min', specialtyLabel: 'Oncology' },
      { num: '02', title: 'Understanding Cancer: How Does It Develop?', href: '/en/knowledge-centre/oncology/understanding-cancer-how-does-it-develop/', slug: 'understanding-cancer-how-does-it-develop', readingTime: '2 min', specialtyLabel: 'Oncology' },
      { num: '03', title: 'Early Warning Signs of Cancer', href: '/en/knowledge-centre/oncology/early-warning-signs-of-cancer/', slug: 'early-warning-signs-of-cancer', readingTime: '2 min', specialtyLabel: 'Oncology' },
      { num: '04', title: 'Understanding the Different Stages of Cancer', href: '/en/knowledge-centre/oncology/understanding-the-different-stages-of-cancer/', slug: 'understanding-the-different-stages-of-cancer', readingTime: '2 min', specialtyLabel: 'Oncology' },
      { num: '05', title: 'Chemotherapy: What Should Patients Expect?', href: '/en/knowledge-centre/oncology/chemotherapy-what-should-patients-expect/', slug: 'chemotherapy-what-should-patients-expect', readingTime: '2 min', specialtyLabel: 'Oncology' },
    ],
    latest: [
      { num: '01', title: 'Radiation Therapy Explained', href: '/en/knowledge-centre/oncology/radiation-therapy-explained/', slug: 'radiation-therapy-explained', readingTime: '2 min', specialtyLabel: 'Oncology' },
      { num: '02', title: 'Immunotherapy: How Does It Help Fight Cancer?', href: '/en/knowledge-centre/oncology/immunotherapy-how-does-it-help-fight-cancer/', slug: 'immunotherapy-how-does-it-help-fight-cancer', readingTime: '2 min', specialtyLabel: 'Oncology' },
      { num: '03', title: 'CyberKnife: Understanding Precision Radiation Treatment', href: '/en/knowledge-centre/oncology/cyberknife-understanding-precision-radiation-treatment/', slug: 'cyberknife-understanding-precision-radiation-treatment', readingTime: '2 min', specialtyLabel: 'Oncology' },
      { num: '04', title: 'Understanding Brain Tumours and Their Treatment', href: '/en/knowledge-centre/oncology/understanding-brain-tumours-and-their-treatment/', slug: 'understanding-brain-tumours-and-their-treatment', readingTime: '2 min', specialtyLabel: 'Oncology' },
      { num: '05', title: 'Leukaemia: Symptoms, Diagnosis and Treatment', href: '/en/knowledge-centre/oncology/leukaemia-symptoms-diagnosis-and-treatment/', slug: 'leukaemia-symptoms-diagnosis-and-treatment', readingTime: '2 min', specialtyLabel: 'Oncology' },
    ]
  },

  // 3. Neurology
  'neurology': {
    popular: [
      { num: '01', title: 'Understanding Stroke and Its Early Warning Signs', href: '/en/knowledge-centre/neurology/understanding-stroke-and-its-early-warning-signs/', slug: 'understanding-stroke-and-its-early-warning-signs', readingTime: '2 min', specialtyLabel: 'Neurology' },
      { num: '02', title: "Understanding Parkinson's Disease", href: '/en/knowledge-centre/neurology/understanding-parkinsons-disease/', slug: 'understanding-parkinsons-disease', readingTime: '2 min', specialtyLabel: 'Neurology' },
      { num: '03', title: 'Epilepsy: Causes, Symptoms and Treatment', href: '/en/knowledge-centre/neurology/epilepsy-causes-symptoms-and-treatment/', slug: 'epilepsy-causes-symptoms-and-treatment', readingTime: '2 min', specialtyLabel: 'Neurology' },
      { num: '04', title: 'Brain Haemorrhage: Warning Signs and Emergency Treatment', href: '/en/knowledge-centre/neurology/brain-haemorrhage-warning-signs-and-emergency-treatment/', slug: 'brain-haemorrhage-warning-signs-and-emergency-treatment', readingTime: '2 min', specialtyLabel: 'Neurology' },
      { num: '05', title: 'Brain Tumours: Symptoms and Treatment Options', href: '/en/knowledge-centre/neurology/brain-tumours-symptoms-and-treatment-options/', slug: 'brain-tumours-symptoms-and-treatment-options', readingTime: '2 min', specialtyLabel: 'Neurology' },
    ],
    latest: [
      { num: '01', title: 'What Is Deep Brain Stimulation (DBS)?', href: '/en/knowledge-centre/neurology/what-is-deep-brain-stimulation-dbs/', slug: 'what-is-deep-brain-stimulation-dbs', readingTime: '2 min', specialtyLabel: 'Neurology' },
      { num: '02', title: 'Craniotomy: Why Is Brain Surgery Performed?', href: '/en/knowledge-centre/neurology/craniotomy-why-is-brain-surgery-performed/', slug: 'craniotomy-why-is-brain-surgery-performed', readingTime: '2 min', specialtyLabel: 'Neurology' },
      { num: '03', title: "Alzheimer's Disease and Dementia Explained", href: '/en/knowledge-centre/neurology/alzheimers-disease-and-dementia-explained/', slug: 'alzheimers-disease-and-dementia-explained', readingTime: '2 min', specialtyLabel: 'Neurology' },
      { num: '04', title: 'Understanding Migraine and Chronic Headaches', href: '/en/knowledge-centre/neurology/understanding-migraine-and-chronic-headaches/', slug: 'understanding-migraine-and-chronic-headaches', readingTime: '2 min', specialtyLabel: 'Neurology' },
      { num: '05', title: 'Recovery and Rehabilitation After a Neurological Condition', href: '/en/knowledge-centre/neurology/recovery-and-rehabilitation-after-a-neurological-condition/', slug: 'recovery-and-rehabilitation-after-a-neurological-condition', readingTime: '2 min', specialtyLabel: 'Neurology' },
    ]
  },

  // 4. Orthopedics
  'orthopedics': {
    popular: [
      { num: '01', title: 'When Do You Need a Knee Replacement?', href: '/en/knowledge-centre/orthopedics/when-do-you-need-a-knee-replacement/', slug: 'when-do-you-need-a-knee-replacement', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
      { num: '02', title: 'Total Hip Replacement Explained', href: '/en/knowledge-centre/orthopedics/total-hip-replacement-explained/', slug: 'total-hip-replacement-explained', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
      { num: '03', title: 'Minimally Invasive Hip Replacement', href: '/en/knowledge-centre/orthopedics/minimally-invasive-hip-replacement/', slug: 'minimally-invasive-hip-replacement', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
      { num: '04', title: 'ACL Injury: Symptoms, Diagnosis and Treatment', href: '/en/knowledge-centre/orthopedics/acl-injury-symptoms-diagnosis-and-treatment/', slug: 'acl-injury-symptoms-diagnosis-and-treatment', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
      { num: '05', title: 'ACL Reconstruction: What Happens During Surgery?', href: '/en/knowledge-centre/orthopedics/acl-reconstruction-what-happens-during-surgery/', slug: 'acl-reconstruction-what-happens-during-surgery', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
    ],
    latest: [
      { num: '01', title: 'Shoulder Replacement: Who Needs It?', href: '/en/knowledge-centre/orthopedics/shoulder-replacement-who-needs-it/', slug: 'shoulder-replacement-who-needs-it', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
      { num: '02', title: 'Understanding Osteoarthritis', href: '/en/knowledge-centre/orthopedics/understanding-osteoarthritis/', slug: 'understanding-osteoarthritis', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
      { num: '03', title: 'Sports Injuries and Their Treatment', href: '/en/knowledge-centre/orthopedics/sports-injuries-and-their-treatment/', slug: 'sports-injuries-and-their-treatment', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
      { num: '04', title: 'Joint Replacement: What Happens Before and After Surgery?', href: '/en/knowledge-centre/orthopedics/joint-replacement-what-happens-before-and-after-surgery/', slug: 'joint-replacement-what-happens-before-and-after-surgery', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
      { num: '05', title: 'Physiotherapy After Joint Replacement: Why Is It Important?', href: '/en/knowledge-centre/orthopedics/physiotherapy-after-joint-replacement-why-is-it-important/', slug: 'physiotherapy-after-joint-replacement-why-is-it-important', readingTime: '2 min', specialtyLabel: 'Orthopedics' },
    ]
  },

  // 5. Spine Surgery
  'spine-surgery': {
    popular: [
      { num: '01', title: 'Understanding Slip Disc and Its Symptoms', href: '/en/knowledge-centre/spine-surgery/understanding-slip-disc-and-its-symptoms/', slug: 'understanding-slip-disc-and-its-symptoms', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
      { num: '02', title: 'When Is Spine Surgery Necessary?', href: '/en/knowledge-centre/spine-surgery/when-is-spine-surgery-necessary/', slug: 'when-is-spine-surgery-necessary', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
      { num: '03', title: 'Minimally Invasive Spine Surgery Explained', href: '/en/knowledge-centre/spine-surgery/minimally-invasive-spine-surgery-explained/', slug: 'minimally-invasive-spine-surgery-explained', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
      { num: '04', title: 'Total Disc Replacement: How Does It Work?', href: '/en/knowledge-centre/spine-surgery/total-disc-replacement-how-does-it-work/', slug: 'total-disc-replacement-how-does-it-work', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
      { num: '05', title: 'Spine Decompression Surgery Explained', href: '/en/knowledge-centre/spine-surgery/spine-decompression-surgery-explained/', slug: 'spine-decompression-surgery-explained', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
    ],
    latest: [
      { num: '01', title: 'Understanding Scoliosis', href: '/en/knowledge-centre/spine-surgery/understanding-scoliosis/', slug: 'understanding-scoliosis', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
      { num: '02', title: 'Sciatica: Causes, Symptoms and Treatment', href: '/en/knowledge-centre/spine-surgery/sciatica-causes-symptoms-and-treatment/', slug: 'sciatica-causes-symptoms-and-treatment', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
      { num: '03', title: 'Cervical Spondylosis and Neck Pain', href: '/en/knowledge-centre/spine-surgery/cervical-spondylosis-and-neck-pain/', slug: 'cervical-spondylosis-and-neck-pain', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
      { num: '04', title: 'Spinal Stenosis: Symptoms and Treatment', href: '/en/knowledge-centre/spine-surgery/spinal-stenosis-symptoms-and-treatment/', slug: 'spinal-stenosis-symptoms-and-treatment', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
      { num: '05', title: 'Recovery After Spine Surgery: What Should Patients Expect?', href: '/en/knowledge-centre/spine-surgery/recovery-after-spine-surgery-what-should-patients-expect/', slug: 'recovery-after-spine-surgery-what-should-patients-expect', readingTime: '2 min', specialtyLabel: 'Spine Surgery' },
    ]
  },

  // 6. Hair Transplantation
  'hair-transplantation': {
    popular: [
      { num: '01', title: 'FUE Versus FUT Hair Transplantation', href: '/en/knowledge-centre/hair-transplantation/fue-versus-fut-hair-transplantation/', slug: 'fue-versus-fut-hair-transplantation', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
      { num: '02', title: 'What Causes Hair Loss?', href: '/en/knowledge-centre/hair-transplantation/what-causes-hair-loss/', slug: 'what-causes-hair-loss', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
      { num: '03', title: 'Who Is a Suitable Candidate for Hair Transplant?', href: '/en/knowledge-centre/hair-transplantation/who-is-a-suitable-candidate-for-hair-transplant/', slug: 'who-is-a-suitable-candidate-for-hair-transplant', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
      { num: '04', title: 'Hair Transplant Procedure Explained', href: '/en/knowledge-centre/hair-transplantation/hair-transplant-procedure-explained/', slug: 'hair-transplant-procedure-explained', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
      { num: '05', title: 'Recovery After Hair Transplantation', href: '/en/knowledge-centre/hair-transplantation/recovery-after-hair-transplantation/', slug: 'recovery-after-hair-transplantation', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
    ],
    latest: [
      { num: '01', title: 'Understanding Hair Transplant Grafts', href: '/en/knowledge-centre/hair-transplantation/understanding-hair-transplant-grafts/', slug: 'understanding-hair-transplant-grafts', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
      { num: '02', title: 'Common Myths About Hair Transplantation', href: '/en/knowledge-centre/hair-transplantation/common-myths-about-hair-transplantation/', slug: 'common-myths-about-hair-transplantation', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
      { num: '03', title: 'Hair Loss in Men and Women', href: '/en/knowledge-centre/hair-transplantation/hair-loss-in-men-and-women/', slug: 'hair-loss-in-men-and-women', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
      { num: '04', title: 'What to Expect After a Hair Transplant', href: '/en/knowledge-centre/hair-transplantation/what-to-expect-after-a-hair-transplant/', slug: 'what-to-expect-after-a-hair-transplant', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
      { num: '05', title: 'Hair Transplant Aftercare', href: '/en/knowledge-centre/hair-transplantation/hair-transplant-aftercare/', slug: 'hair-transplant-aftercare', readingTime: '2 min', specialtyLabel: 'Hair Transplantation' },
    ]
  },

  // 7. Weight Loss Surgery
  'weight-loss-surgery': {
    popular: [
      { num: '01', title: 'Gastric Sleeve Surgery Explained', href: '/en/knowledge-centre/weight-loss-surgery/gastric-sleeve-surgery-explained/', slug: 'gastric-sleeve-surgery-explained', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
      { num: '02', title: 'Understanding Obesity and Its Health Risks', href: '/en/knowledge-centre/weight-loss-surgery/understanding-obesity-and-its-health-risks/', slug: 'understanding-obesity-and-its-health-risks', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
      { num: '03', title: 'Who May Benefit from Bariatric Surgery?', href: '/en/knowledge-centre/weight-loss-surgery/who-may-benefit-from-bariatric-surgery/', slug: 'who-may-benefit-from-bariatric-surgery', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
      { num: '04', title: 'Gastric Bypass Surgery Explained', href: '/en/knowledge-centre/weight-loss-surgery/gastric-bypass-surgery-explained/', slug: 'gastric-bypass-surgery-explained', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
      { num: '05', title: 'Bariatric Surgery Versus Lifestyle Management', href: '/en/knowledge-centre/weight-loss-surgery/bariatric-surgery-versus-lifestyle-management/', slug: 'bariatric-surgery-versus-lifestyle-management', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
    ],
    latest: [
      { num: '01', title: 'Preparing for Weight Loss Surgery', href: '/en/knowledge-centre/weight-loss-surgery/preparing-for-weight-loss-surgery/', slug: 'preparing-for-weight-loss-surgery', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
      { num: '02', title: 'Recovery After Bariatric Surgery', href: '/en/knowledge-centre/weight-loss-surgery/recovery-after-bariatric-surgery/', slug: 'recovery-after-bariatric-surgery', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
      { num: '03', title: 'Diet After Bariatric Surgery', href: '/en/knowledge-centre/weight-loss-surgery/diet-after-bariatric-surgery/', slug: 'diet-after-bariatric-surgery', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
      { num: '04', title: 'Possible Complications and Precautions After Bariatric Surgery', href: '/en/knowledge-centre/weight-loss-surgery/possible-complications-and-precautions-after-bariatric-surgery/', slug: 'possible-complications-and-precautions-after-bariatric-surgery', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
      { num: '05', title: 'Long-Term Lifestyle Changes After Bariatric Surgery', href: '/en/knowledge-centre/weight-loss-surgery/long-term-lifestyle-changes-after-bariatric-surgery/', slug: 'long-term-lifestyle-changes-after-bariatric-surgery', readingTime: '2 min', specialtyLabel: 'Weight Loss Surgery' },
    ]
  },

  // 8. IVF & Reproductive Medicine (Exact match for media_1794908402253_97ce59db.jpg!)
  'ivf': {
    popular: [
      { num: '01', title: 'What Is IVF and How Does It Work?', href: '/en/knowledge-centre/ivf/what-is-ivf-and-how-does-it-work/', slug: 'what-is-ivf-and-how-does-it-work', readingTime: '2 min', specialtyLabel: 'IVF' },
      { num: '02', title: 'Understanding Infertility', href: '/en/knowledge-centre/ivf/understanding-infertility/', slug: 'understanding-infertility', readingTime: '2 min', specialtyLabel: 'IVF' },
      { num: '03', title: 'Step-by-Step IVF Treatment Process', href: '/en/knowledge-centre/ivf/step-by-step-ivf-treatment-process/', slug: 'step-by-step-ivf-treatment-process', readingTime: '2 min', specialtyLabel: 'IVF' },
      { num: '04', title: 'IVF Versus IUI', href: '/en/knowledge-centre/ivf/ivf-versus-iui/', slug: 'ivf-versus-iui', readingTime: '2 min', specialtyLabel: 'IVF' },
      { num: '05', title: 'Understanding Egg Retrieval', href: '/en/knowledge-centre/ivf/understanding-egg-retrieval/', slug: 'understanding-egg-retrieval', readingTime: '2 min', specialtyLabel: 'IVF' },
    ],
    latest: [
      { num: '01', title: 'Emotional and Physical Preparation for IVF', href: '/en/knowledge-centre/ivf/emotional-and-physical-preparation-for-ivf/', slug: 'emotional-and-physical-preparation-for-ivf', readingTime: '2 min', specialtyLabel: 'IVF' },
      { num: '02', title: 'What to Expect During IVF Treatment', href: '/en/knowledge-centre/ivf/what-to-expect-during-ivf-treatment/', slug: 'what-to-expect-during-ivf-treatment', readingTime: '2 min', specialtyLabel: 'IVF' },
      { num: '03', title: 'Common Reasons for IVF Treatment', href: '/en/knowledge-centre/ivf/common-reasons-for-ivf-treatment/', slug: 'common-reasons-for-ivf-treatment', readingTime: '2 min', specialtyLabel: 'IVF' },
      { num: '04', title: 'Understanding Embryo Freezing', href: '/en/knowledge-centre/ivf/understanding-embryo-freezing/', slug: 'understanding-embryo-freezing', readingTime: '2 min', specialtyLabel: 'IVF' },
      { num: '05', title: 'Embryo Transfer Explained', href: '/en/knowledge-centre/ivf/embryo-transfer-explained/', slug: 'embryo-transfer-explained', readingTime: '2 min', specialtyLabel: 'IVF' },
    ]
  },

  // 9. Bone Marrow Transplant (Exact 10 articles as requested!)
  'bone-marrow-transplant': {
    popular: [
      { num: '01', title: 'What Is a Bone Marrow Transplant?', href: '/en/knowledge-centre/bone-marrow-transplant/what-is-a-bone-marrow-transplant/', slug: 'what-is-a-bone-marrow-transplant', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
      { num: '02', title: 'Who May Need a Bone Marrow Transplant?', href: '/en/knowledge-centre/bone-marrow-transplant/who-may-need-a-bone-marrow-transplant/', slug: 'who-may-need-a-bone-marrow-transplant', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
      { num: '03', title: 'Autologous Versus Allogeneic Transplant', href: '/en/knowledge-centre/bone-marrow-transplant/autologous-versus-allogeneic-transplant/', slug: 'autologous-versus-allogeneic-transplant', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
      { num: '04', title: 'Understanding Stem Cell Transplantation', href: '/en/knowledge-centre/bone-marrow-transplant/understanding-stem-cell-transplantation/', slug: 'understanding-stem-cell-transplantation', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
      { num: '05', title: 'Finding a Suitable Bone Marrow Donor', href: '/en/knowledge-centre/bone-marrow-transplant/finding-a-suitable-bone-marrow-donor/', slug: 'finding-a-suitable-bone-marrow-donor', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
    ],
    latest: [
      { num: '01', title: 'What Happens During Transplantation?', href: '/en/knowledge-centre/bone-marrow-transplant/what-happens-during-transplantation/', slug: 'what-happens-during-transplantation', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
      { num: '02', title: 'Recovery After Bone Marrow Transplantation', href: '/en/knowledge-centre/bone-marrow-transplant/recovery-after-bone-marrow-transplantation/', slug: 'recovery-after-bone-marrow-transplantation', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
      { num: '03', title: 'Possible Complications and Infections After Bone Marrow Transplant', href: '/en/knowledge-centre/bone-marrow-transplant/possible-complications-and-infections-after-bone-marrow-transplant/', slug: 'possible-complications-and-infections-after-bone-marrow-transplant', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
      { num: '04', title: 'Understanding Graft-Versus-Host Disease', href: '/en/knowledge-centre/bone-marrow-transplant/understanding-graft-versus-host-disease/', slug: 'understanding-graft-versus-host-disease', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
      { num: '05', title: 'Life After Bone Marrow Transplantation', href: '/en/knowledge-centre/bone-marrow-transplant/life-after-bone-marrow-transplantation/', slug: 'life-after-bone-marrow-transplantation', readingTime: '2 min', specialtyLabel: 'Bone Marrow Transplant' },
    ]
  },

  // 10. Kidney Transplant
  'kidney-transplant': {
    popular: [
      { num: '01', title: 'Living Donor Versus Deceased Donor Transplantation', href: '/en/knowledge-centre/kidney-transplant/living-donor-versus-deceased-donor-transplantation/', slug: 'living-donor-versus-deceased-donor-transplantation', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
      { num: '02', title: 'Understanding Chronic Kidney Disease', href: '/en/knowledge-centre/kidney-transplant/understanding-chronic-kidney-disease/', slug: 'understanding-chronic-kidney-disease', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
      { num: '03', title: 'When Does a Patient Need a Kidney Transplant?', href: '/en/knowledge-centre/kidney-transplant/when-does-a-patient-need-a-kidney-transplant/', slug: 'when-does-a-patient-need-a-kidney-transplant', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
      { num: '04', title: 'Kidney Transplant Procedure Explained', href: '/en/knowledge-centre/kidney-transplant/kidney-transplant-procedure-explained/', slug: 'kidney-transplant-procedure-explained', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
      { num: '05', title: 'How Is Kidney Donor Compatibility Assessed?', href: '/en/knowledge-centre/kidney-transplant/how-is-kidney-donor-compatibility-assessed/', slug: 'how-is-kidney-donor-compatibility-assessed', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
    ],
    latest: [
      { num: '01', title: 'Preparing for Kidney Transplantation', href: '/en/knowledge-centre/kidney-transplant/preparing-for-kidney-transplantation/', slug: 'preparing-for-kidney-transplantation', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
      { num: '02', title: 'What Happens During Kidney Transplant Surgery?', href: '/en/knowledge-centre/kidney-transplant/what-happens-during-kidney-transplant-surgery/', slug: 'what-happens-during-kidney-transplant-surgery', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
      { num: '03', title: 'Recovery After Kidney Transplantation', href: '/en/knowledge-centre/kidney-transplant/recovery-after-kidney-transplantation/', slug: 'recovery-after-kidney-transplantation', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
      { num: '04', title: 'Understanding Immunosuppressant Medicines', href: '/en/knowledge-centre/kidney-transplant/understanding-immunosuppressant-medicines/', slug: 'understanding-immunosuppressant-medicines', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
      { num: '05', title: 'Life After Kidney Transplantation', href: '/en/knowledge-centre/kidney-transplant/life-after-kidney-transplantation/', slug: 'life-after-kidney-transplantation', readingTime: '2 min', specialtyLabel: 'Kidney Transplant' },
    ]
  },

  // 11. Liver Transplant
  'liver-transplant': {
    popular: [
      { num: '01', title: 'Living Donor Versus Deceased Donor Liver Transplantation', href: '/en/knowledge-centre/liver-transplant/living-donor-versus-deceased-donor-liver-transplantation/', slug: 'living-donor-versus-deceased-donor-liver-transplantation', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
      { num: '02', title: 'Who Needs a Liver Transplant? Understanding End-Stage Liver Disease', href: '/en/knowledge-centre/liver-transplant/who-needs-a-liver-transplant/', slug: 'who-needs-a-liver-transplant', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
      { num: '03', title: 'The Liver Donor Evaluation: Testing, Safety and Recovery', href: '/en/knowledge-centre/liver-transplant/liver-donor-evaluation/', slug: 'liver-donor-evaluation', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
      { num: '04', title: 'What Happens During Liver Transplant Surgery?', href: '/en/knowledge-centre/liver-transplant/what-happens-during-liver-transplant-surgery/', slug: 'what-happens-during-liver-transplant-surgery', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
      { num: '05', title: 'Pediatric Liver Transplantation: Care and Outcomes', href: '/en/knowledge-centre/liver-transplant/pediatric-liver-transplantation/', slug: 'pediatric-liver-transplantation', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
    ],
    latest: [
      { num: '01', title: 'Life After Liver Transplantation: Recovery and Long-Term Care', href: '/en/knowledge-centre/liver-transplant/life-after-liver-transplantation/', slug: 'life-after-liver-transplantation', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
      { num: '02', title: 'Understanding Immunosuppressive Therapy After Liver Transplant', href: '/en/knowledge-centre/liver-transplant/immunosuppressive-therapy-after-liver-transplant/', slug: 'immunosuppressive-therapy-after-liver-transplant', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
      { num: '03', title: 'Managing Liver Cirrhosis: Medical Therapy to Transplant Evaluation', href: '/en/knowledge-centre/liver-transplant/managing-liver-cirrhosis/', slug: 'managing-liver-cirrhosis', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
      { num: '04', title: 'Nutrition and Diet Before and After Liver Surgery', href: '/en/knowledge-centre/liver-transplant/nutrition-diet-liver-surgery/', slug: 'nutrition-diet-liver-surgery', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
      { num: '05', title: 'Returning Home After Liver Transplantation: Precautions and Follow-Up', href: '/en/knowledge-centre/liver-transplant/returning-home-after-liver-transplantation/', slug: 'returning-home-after-liver-transplantation', readingTime: '2 min', specialtyLabel: 'Liver Transplant' },
    ]
  },

  // 12. Dental Care
  'dental-care': {
    popular: [
      { num: '01', title: 'All-on-4 and All-on-6 Dental Implants Explained', href: '/en/knowledge-centre/dental-care/all-on-4-and-all-on-6-dental-implants-explained/', slug: 'all-on-4-and-all-on-6-dental-implants-explained', readingTime: '2 min', specialtyLabel: 'Dental Care' },
      { num: '02', title: 'Full Mouth Dental Rehabilitation: Procedure and Timeline', href: '/en/knowledge-centre/dental-care/full-mouth-dental-rehabilitation/', slug: 'full-mouth-dental-rehabilitation', readingTime: '2 min', specialtyLabel: 'Dental Care' },
      { num: '03', title: 'Zygomatic Implants for Severe Upper Jaw Bone Loss', href: '/en/knowledge-centre/dental-care/zygomatic-implants-explained/', slug: 'zygomatic-implants-explained', readingTime: '2 min', specialtyLabel: 'Dental Care' },
      { num: '04', title: 'Single vs Multiple Tooth Implants: What Are Your Options?', href: '/en/knowledge-centre/dental-care/single-vs-multiple-tooth-implants/', slug: 'single-vs-multiple-tooth-implants', readingTime: '2 min', specialtyLabel: 'Dental Care' },
      { num: '05', title: 'Bone Grafting and Sinus Lifts for Dental Implants', href: '/en/knowledge-centre/dental-care/bone-grafting-sinus-lifts/', slug: 'bone-grafting-sinus-lifts', readingTime: '2 min', specialtyLabel: 'Dental Care' },
    ],
    latest: [
      { num: '01', title: 'Caring for Your Teeth and Dental Work', href: '/en/knowledge-centre/dental-care/caring-for-your-teeth-and-dental-work/', slug: 'caring-for-your-teeth-and-dental-work', readingTime: '2 min', specialtyLabel: 'Dental Care' },
      { num: '02', title: 'Dental Implants in India: Treatment Journey and Travel Timeline', href: '/en/knowledge-centre/dental-care/dental-implants-india-treatment-journey/', slug: 'dental-implants-india-treatment-journey', readingTime: '2 min', specialtyLabel: 'Dental Care' },
      { num: '03', title: 'Orthognathic Jaw Surgery: Preparation, Surgery and Recovery', href: '/en/knowledge-centre/dental-care/orthognathic-jaw-surgery/', slug: 'orthognathic-jaw-surgery', readingTime: '2 min', specialtyLabel: 'Dental Care' },
      { num: '04', title: 'Cosmetic Dentistry: Veneers, Crowns and Smile Designing', href: '/en/knowledge-centre/dental-care/cosmetic-dentistry-veneers-crowns/', slug: 'cosmetic-dentistry-veneers-crowns', readingTime: '2 min', specialtyLabel: 'Dental Care' },
      { num: '05', title: 'Post-Operative Care After Advanced Dental Surgery', href: '/en/knowledge-centre/dental-care/post-operative-care-after-dental-surgery/', slug: 'post-operative-care-after-dental-surgery', readingTime: '2 min', specialtyLabel: 'Dental Care' },
    ]
  },

  // 13. AYUSH Wellness
  'ayush-wellness': {
    popular: [
      { num: '01', title: 'Travelling to India for AYUSH Treatment: The AYUSH Visa', href: '/en/knowledge-centre/ayush-wellness/travelling-to-india-for-ayush-treatment-the-ayush-visa/', slug: 'travelling-to-india-for-ayush-treatment-the-ayush-visa', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
      { num: '02', title: 'Understanding Panchakarma: The Five Classical Cleansing Therapies', href: '/en/knowledge-centre/ayush-wellness/understanding-panchakarma/', slug: 'understanding-panchakarma', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
      { num: '03', title: 'Authentic Ayurveda Rejuvenation (Rasayana): Principles and Benefits', href: '/en/knowledge-centre/ayush-wellness/authentic-ayurveda-rejuvenation/', slug: 'authentic-ayurveda-rejuvenation', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
      { num: '04', title: 'Integrative Post-Operative Recovery and Healing with AYUSH', href: '/en/knowledge-centre/ayush-wellness/integrative-post-operative-recovery/', slug: 'integrative-post-operative-recovery', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
      { num: '05', title: 'Ayurvedic Management of Chronic Inflammatory Conditions', href: '/en/knowledge-centre/ayush-wellness/ayurvedic-management-chronic-conditions/', slug: 'ayurvedic-management-chronic-conditions', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
    ],
    latest: [
      { num: '01', title: 'Choosing an Accredited AYUSH Hospital or Wellness Centre in India', href: '/en/knowledge-centre/ayush-wellness/choosing-ayush-hospital-india/', slug: 'choosing-ayush-hospital-india', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
      { num: '02', title: 'Diet and Daily Regimen (Dinacharya) in Ayurvedic Health', href: '/en/knowledge-centre/ayush-wellness/diet-dinacharya-ayurveda/', slug: 'diet-dinacharya-ayurveda', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
      { num: '03', title: 'Yoga Therapy for Cardiac and Neurological Rehabilitation', href: '/en/knowledge-centre/ayush-wellness/yoga-therapy-rehabilitation/', slug: 'yoga-therapy-rehabilitation', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
      { num: '04', title: 'Herbal Formulations and Traditional Medicine Safety in India', href: '/en/knowledge-centre/ayush-wellness/herbal-formulations-safety/', slug: 'herbal-formulations-safety', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
      { num: '05', title: 'What to Expect During an Inpatient Ayurveda Treatment Program', href: '/en/knowledge-centre/ayush-wellness/inpatient-ayurveda-treatment-expectations/', slug: 'inpatient-ayurveda-treatment-expectations', readingTime: '2 min', specialtyLabel: 'AYUSH Wellness' },
    ]
  },

  // 14. General Surgery
  'general-surgery': {
    popular: [
      { num: '01', title: 'Laparoscopic Gallbladder Removal (Cholecystectomy) Explained', href: '/en/knowledge-centre/general-surgery/laparoscopic-gallbladder-removal/', slug: 'laparoscopic-gallbladder-removal', readingTime: '2 min', specialtyLabel: 'General Surgery' },
      { num: '02', title: 'Minimally Invasive Inguinal and Ventral Hernia Repair', href: '/en/knowledge-centre/general-surgery/minimally-invasive-hernia-repair/', slug: 'minimally-invasive-hernia-repair', readingTime: '2 min', specialtyLabel: 'General Surgery' },
      { num: '03', title: 'Appendicitis Warning Signs and Laparoscopic Appendectomy', href: '/en/knowledge-centre/general-surgery/appendicitis-laparoscopic-appendectomy/', slug: 'appendicitis-laparoscopic-appendectomy', readingTime: '2 min', specialtyLabel: 'General Surgery' },
      { num: '04', title: 'Advanced Laparoscopic GI Surgery: Benefits and Recovery', href: '/en/knowledge-centre/general-surgery/advanced-laparoscopic-gi-surgery/', slug: 'advanced-laparoscopic-gi-surgery', readingTime: '2 min', specialtyLabel: 'General Surgery' },
      { num: '05', title: 'Minimally Invasive Colorectal Surgery Protocols', href: '/en/knowledge-centre/general-surgery/minimally-invasive-colorectal-surgery/', slug: 'minimally-invasive-colorectal-surgery', readingTime: '2 min', specialtyLabel: 'General Surgery' },
    ],
    latest: [
      { num: '01', title: 'Preparing for Abdominal Laparoscopic Surgery: Pre-Op Checklist', href: '/en/knowledge-centre/general-surgery/preparing-abdominal-laparoscopic-surgery/', slug: 'preparing-abdominal-laparoscopic-surgery', readingTime: '2 min', specialtyLabel: 'General Surgery' },
      { num: '02', title: 'Post-Operative Wound Care and Infection Prevention', href: '/en/knowledge-centre/general-surgery/post-operative-wound-care/', slug: 'post-operative-wound-care', readingTime: '2 min', specialtyLabel: 'General Surgery' },
      { num: '03', title: 'Safe Travel After General and Laparoscopic Surgery', href: '/en/knowledge-centre/general-surgery/safe-travel-after-general-surgery/', slug: 'safe-travel-after-general-surgery', readingTime: '2 min', specialtyLabel: 'General Surgery' },
      { num: '04', title: 'Understanding General Anaesthesia: What Patients Should Know', href: '/en/knowledge-centre/general-surgery/understanding-general-anaesthesia/', slug: 'understanding-general-anaesthesia', readingTime: '2 min', specialtyLabel: 'General Surgery' },
      { num: '05', title: 'Returning to Normal Activities After Day-Care Surgery', href: '/en/knowledge-centre/general-surgery/returning-normal-activities-after-surgery/', slug: 'returning-normal-activities-after-surgery', readingTime: '2 min', specialtyLabel: 'General Surgery' },
    ]
  },

  // 15. Cosmetic & Plastic Surgery
  'cosmetic-surgery': {
    popular: [
      { num: '01', title: 'Rhinoplasty (Nose Surgery): Aesthetic and Functional Correction', href: '/en/knowledge-centre/cosmetic-surgery/rhinoplasty-aesthetic-functional-correction/', slug: 'rhinoplasty-aesthetic-functional-correction', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
      { num: '02', title: 'Facelift and Neck Lift: Modern SMAS and Deep-Plane Techniques', href: '/en/knowledge-centre/cosmetic-surgery/facelift-and-neck-lift-techniques/', slug: 'facelift-and-neck-lift-techniques', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
      { num: '03', title: 'Post-Bariatric Body Contouring After Major Weight Loss', href: '/en/knowledge-centre/cosmetic-surgery/post-bariatric-body-contouring/', slug: 'post-bariatric-body-contouring', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
      { num: '04', title: 'Breast Reconstruction and Aesthetic Procedures', href: '/en/knowledge-centre/cosmetic-surgery/breast-reconstruction-and-aesthetics/', slug: 'breast-reconstruction-and-aesthetics', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
      { num: '05', title: 'Liposuction and High-Definition Body Sculpting', href: '/en/knowledge-centre/cosmetic-surgery/liposuction-high-definition-sculpting/', slug: 'liposuction-high-definition-sculpting', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
    ],
    latest: [
      { num: '01', title: 'Blepharoplasty (Eyelid Surgery): Indications and Recovery', href: '/en/knowledge-centre/cosmetic-surgery/blepharoplasty-eyelid-surgery/', slug: 'blepharoplasty-eyelid-surgery', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
      { num: '02', title: 'Scar Revision and Reconstructive Aesthetic Care', href: '/en/knowledge-centre/cosmetic-surgery/scar-revision-reconstructive-care/', slug: 'scar-revision-reconstructive-care', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
      { num: '03', title: 'Planning Cosmetic Surgery in India: Recovery Timelines and Flying', href: '/en/knowledge-centre/cosmetic-surgery/planning-cosmetic-surgery-india/', slug: 'planning-cosmetic-surgery-india', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
      { num: '04', title: 'Non-Surgical Facial Aesthetics: Dermal Fillers and Skin Rejuvenation', href: '/en/knowledge-centre/cosmetic-surgery/non-surgical-facial-aesthetics/', slug: 'non-surgical-facial-aesthetics', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
      { num: '05', title: 'Long-Term Results and Maintenance After Aesthetic Plastic Surgery', href: '/en/knowledge-centre/cosmetic-surgery/long-term-results-aesthetic-surgery/', slug: 'long-term-results-aesthetic-surgery', readingTime: '2 min', specialtyLabel: 'Cosmetic & Plastic Surgery' },
    ]
  }
};

export function getSpecialtyPopularAndLatest(slugOrAlias: string): SpecialtyPopularLatest {
  const normalized = (slugOrAlias || '').toLowerCase().trim();
  const direct = specialtyPopularLatestMap[normalized];
  if (direct) return direct;

  // Handle aliases
  if (normalized === 'cardiac' || normalized === 'cardiac-sciences' || normalized === 'heart') {
    return specialtyPopularLatestMap['cardiology'];
  }
  if (normalized === 'cancer' || normalized === 'cancer-care') {
    return specialtyPopularLatestMap['oncology'];
  }
  if (normalized === 'neuro' || normalized === 'neurosciences') {
    return specialtyPopularLatestMap['neurology'];
  }
  if (normalized === 'orthopaedics' || normalized === 'bone' || normalized === 'joint') {
    return specialtyPopularLatestMap['orthopedics'];
  }
  if (normalized === 'spine') {
    return specialtyPopularLatestMap['spine-surgery'];
  }
  if (normalized === 'hair' || normalized === 'hair-transplant') {
    return specialtyPopularLatestMap['hair-transplantation'];
  }
  if (normalized === 'bariatric' || normalized === 'bariatric-surgery' || normalized === 'weight-loss') {
    return specialtyPopularLatestMap['weight-loss-surgery'];
  }
  if (normalized === 'fertility' || normalized === 'reproductive') {
    return specialtyPopularLatestMap['ivf'];
  }
  if (normalized === 'bmt' || normalized === 'organ-transplants') {
    return specialtyPopularLatestMap['bone-marrow-transplant'];
  }
  if (normalized === 'nephrology' || normalized === 'urology' || normalized === 'nephrology-urology') {
    return specialtyPopularLatestMap['kidney-transplant'];
  }
  if (normalized === 'gastro' || normalized === 'gastroenterology') {
    return specialtyPopularLatestMap['liver-transplant'];
  }
  if (normalized === 'dental') {
    return specialtyPopularLatestMap['dental-care'];
  }
  if (normalized === 'ayush' || normalized === 'wellness') {
    return specialtyPopularLatestMap['ayush-wellness'];
  }
  if (normalized === 'surgery') {
    return specialtyPopularLatestMap['general-surgery'];
  }
  if (normalized === 'cosmetic') {
    return specialtyPopularLatestMap['cosmetic-surgery'];
  }

  // Fallback to cardiology if somehow unknown
  return specialtyPopularLatestMap['cardiology'];
}
