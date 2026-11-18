/**
 * src/data/knowledgeData.ts
 * Nuhavi Health — Patient Knowledge Centre
 * 105 Comprehensive Patient Education Articles Across 10 Core Specialties.
 * Extracted directly from Nuhavi-Knowledge-Centre-All-Articles.pdf (230 pages).
 *
 * Clinical Governance & Compliance:
 * - All articles are marked as: DRAFT — For Specialist Review (awaiting clinical sign-off).
 * - Exact clinical meaning, diagrams, FAQs, tables, steps, callouts, and medical disclaimers preserved.
 * - Non-clinical coordination notice maintained.
 */

export interface DiagramStep {
  number: string;
  title: string;
  description: string;
}

export interface ArticleDiagram {
  title: string;
  steps: DiagramStep[];
}

export interface ArticleBullet {
  label?: string;
  text: string;
}

export interface ArticleStep {
  number: number;
  text: string;
}

export interface ArticleTable {
  headers: string[];
  rows: string[][];
}

export interface ArticleSection {
  heading: string;
  content: string;
  paragraphs: string[];
  bullets: ArticleBullet[];
  callouts: string[];
  steps?: ArticleStep[];
  table?: ArticleTable;
}

export interface ArticleFAQ {
  q: string;
  a: string;
}

export interface KnowledgeArticle {
  id: string;
  specialtySlug: string;
  specialtyTitle: string;
  slug: string;
  title: string;
  readingTime: string;
  draftStatus: string;
  reviewer: string;
  reviewDate: string;
  overview: string;
  diagram?: ArticleDiagram | null;
  sections: ArticleSection[];
  whenToConsult: string;
  faqs: ArticleFAQ[];
  disclaimer: string;
  illustrationPlaceholder: string;
  assessmentIncludes: string;
  recordsToSend: string;
  commonOptions: string;
  hospitalFacilities: string;
  timeInIndia: string;
  recoveryAndFollowUp: string;
  costRange: string;
  questionsToAsk: string[];
}

export interface SpecialtyCategory {
  slug: string;
  title: string;
  articleCount: number;
  description: string;
  aliases?: string[];
}


export const specialtyCategories: SpecialtyCategory[] = [
  {
    slug: 'cardiology',
    title: 'Cardiology',
    articleCount: 10,
    description: 'Clear explanations of heart conditions and treatments, from blocked arteries and heart attacks to bypass surgery, valve replacement, and cardiac recovery.',
    aliases: ['cardiac-sciences']
  },
  {
    slug: 'oncology',
    title: 'Oncology',
    articleCount: 15,
    description: 'Understand how cancer develops, how it is staged, and how modern treatments work, including chemotherapy, radiation, immunotherapy, CyberKnife, and CAR-T cell therapy.',
    aliases: ['cancer-care']
  },
  {
    slug: 'neurology',
    title: 'Neurology',
    articleCount: 10,
    description: 'Learn about conditions affecting the brain and nervous system, including Parkinson\'s, epilepsy, stroke, brain tumours, deep brain stimulation (DBS), and rehabilitation.',
    aliases: ['neurosciences']
  },
  {
    slug: 'orthopedics',
    title: 'Orthopedics',
    articleCount: 10,
    description: 'Understand joint and bone conditions, knee and hip replacement surgery, minimally invasive techniques, ACL reconstruction, sports injuries, and physiotherapy.',
    aliases: ['orthopaedics']
  },
  {
    slug: 'spine-surgery',
    title: 'Spine Surgery',
    articleCount: 10,
    description: 'Clear guides to back and neck conditions, slipped discs, sciatica, scoliosis, minimally invasive spine surgery, disc replacement, and post-surgery recovery.',
    aliases: ['spine']
  },
  {
    slug: 'hair-transplantation',
    title: 'Hair Transplantation',
    articleCount: 10,
    description: 'Evidence-based guides on hair loss causes, FUE vs FUT harvesting techniques, graft counts, surgical procedure steps, recovery milestones, and long-term aftercare.',
    aliases: ['hair']
  },
  {
    slug: 'weight-loss-surgery',
    title: 'Weight Loss Surgery',
    articleCount: 10,
    description: 'Understand obesity health risks, who benefits from bariatric surgery, gastric sleeve and bypass procedures, pre-surgery preparation, and dietary progressions.',
    aliases: ['bariatric', 'bariatric-surgery']
  },
  {
    slug: 'ivf',
    title: 'IVF & Reproductive Medicine',
    articleCount: 10,
    description: 'A compassionate guide to infertility, IVF vs IUI, egg retrieval, embryo transfer, embryo freezing, what to expect during a cycle, and emotional preparation.',
    aliases: ['fertility']
  },
  {
    slug: 'bone-marrow-transplant',
    title: 'Bone Marrow Transplant',
    articleCount: 10,
    description: 'Plain-language explanations of bone marrow and stem cell transplants, autologous vs allogeneic, finding a matched donor, hospital stay, GVHD, and life after transplant.',
    aliases: ['bmt', 'organ-transplants']
  },
  {
    slug: 'kidney-transplant',
    title: 'Kidney Transplant',
    articleCount: 10,
    description: 'Learn about chronic kidney disease, when a transplant is needed, living vs deceased donor options, compatibility testing, surgery day, and immunosuppression.',
    aliases: ['nephrology-urology']
  },
  {
    slug: 'liver-transplant',
    title: 'Liver Transplant',
    articleCount: 0,
    description: 'Living-donor and deceased-donor liver transplantation, donor evaluation protocols, and advanced hepatobiliary critical care in India.',
    aliases: ['gastroenterology']
  },
  {
    slug: 'dental-care',
    title: 'Dental Care',
    articleCount: 0,
    description: 'Advanced dental implants, full-mouth rehabilitation, orthognathic surgery, and reconstructive maxillofacial dental procedures.',
    aliases: ['dental']
  },
  {
    slug: 'ayush-wellness',
    title: 'AYUSH Wellness',
    articleCount: 0,
    description: 'Integrative holistic medicine, traditional Ayurveda, authentic Panchakarma rejuvenation therapy, and yoga-based post-operative recovery.',
    aliases: ['ayush']
  },
  {
    slug: 'general-surgery',
    title: 'General Surgery',
    articleCount: 0,
    description: 'Minimally invasive laparoscopic abdominal surgery, hernia repair, gallbladder removal, and emergency surgical care.',
    aliases: ['surgery']
  },
  {
    slug: 'cosmetic-surgery',
    title: 'Cosmetic & Plastic Surgery',
    articleCount: 0,
    description: 'Aesthetic and reconstructive plastic surgery, post-bariatric body contouring, facial reconstruction, and burn scar revision.',
    aliases: ['cosmetic']
  }
];

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    "id": "art-001",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "what-is-coronary-artery-disease",
    "title": "What Is Coronary Artery Disease?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Your heart is a muscle that needs a constant supply of oxygen-rich blood. That blood reaches it through small vessels called coronary arteries . Coronary artery disease (CAD) happens when these arteries become narrow or blocked, and it is the most common form of heart disease worldwide.",
    "diagram": {
      "title": "How a coronary artery narrows",
      "steps": [
        {
          "number": "1",
          "title": "Healthy artery",
          "description": "Smooth inner wall, free blood flow"
        },
        {
          "number": "2",
          "title": "Plaque builds up",
          "description": "Cholesterol and fat collect in the wall"
        },
        {
          "number": "3",
          "title": "Artery narrows",
          "description": "Less blood reaches the heart muscle"
        },
        {
          "number": "4",
          "title": "Plaque ruptures",
          "description": "A clot can block the artery completely"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "Over many years, a fatty material called plaque builds up inside the artery walls. This process is called atherosclerosis. As plaque grows, the artery narrows and the heart muscle receives less blood, especially during exercise or stress.",
        "paragraphs": [
          "Over many years, a fatty material called plaque builds up inside the artery walls. This process is called atherosclerosis. As plaque grows, the artery narrows and the heart muscle receives less blood, especially during exercise or stress."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Symptoms",
        "content": "Many people have no symptoms in the early stages. When symptoms appear, they may include: People with diabetes, women and older adults may have milder or unusual symptoms. Chest pain, pressure or tightness (angina), often on exertion and easing with rest Breathlessness while walking or climbing stairs Unusual tiredness Pain spreading to the arm, neck, jaw or back",
        "paragraphs": [
          "Many people have no symptoms in the early stages. When symptoms appear, they may include:",
          "People with diabetes, women and older adults may have milder or unusual symptoms."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Chest pain, pressure or tightness (angina), often on exertion and easing with rest"
          },
          {
            "label": "",
            "text": "Breathlessness while walking or climbing stairs"
          },
          {
            "label": "",
            "text": "Unusual tiredness"
          },
          {
            "label": "",
            "text": "Pain spreading to the arm, neck, jaw or back"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Risk factors",
        "content": "Smoking or chewing tobacco Diabetes, high blood pressure and high cholesterol Being overweight and physically inactive Family history of early heart disease Age (men over 45, women over 55) People of South Asian origin tend to develop CAD at a younger age, so early screening matters.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Smoking or chewing tobacco"
          },
          {
            "label": "",
            "text": "Diabetes, high blood pressure and high cholesterol"
          },
          {
            "label": "",
            "text": "Being overweight and physically inactive"
          },
          {
            "label": "",
            "text": "Family history of early heart disease"
          },
          {
            "label": "",
            "text": "Age (men over 45, women over 55)"
          }
        ],
        "callouts": [
          "People of South Asian origin tend to develop CAD at a younger age, so early screening matters."
        ]
      },
      {
        "heading": "Diagnosis",
        "content": "Doctors usually start with an ECG, blood tests and an echocardiogram (heart ultrasound). Further tests may include a treadmill stress test, CT coronary angiography or a coronary angiogram , in which dye is injected into the arteries to show exactly where they are blocked.",
        "paragraphs": [
          "Doctors usually start with an ECG, blood tests and an echocardiogram (heart ultrasound). Further tests may include a treadmill stress test, CT coronary angiography or a coronary angiogram , in which dye is injected into the arteries to show exactly where they are blocked."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Lifestyle changes: stopping tobacco, a heart-healthy diet, regular activity and weight control Medicines: to lower cholesterol, control blood pressure, prevent clots and relieve angina Angioplasty and stenting: a balloon opens the artery and a small mesh tube keeps it open Bypass surgery (CABG): a new route is created around blocked arteries, usually when several arteries are affected",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Lifestyle changes:",
            "text": "stopping tobacco, a heart-healthy diet, regular activity and weight control"
          },
          {
            "label": "Medicines:",
            "text": "to lower cholesterol, control blood pressure, prevent clots and relieve angina"
          },
          {
            "label": "Angioplasty and stenting:",
            "text": "a balloon opens the artery and a small mesh tube keeps it open"
          },
          {
            "label": "Bypass surgery (CABG):",
            "text": "a new route is created around blocked arteries, usually when several arteries are affected"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a cardiologist if you have chest discomfort on exertion, breathlessness that is new or worsening, or several risk factors. Sudden, severe chest pain is an emergency.",
    "faqs": [
      {
        "q": "Can coronary artery disease be reversed?",
        "a": "Plaque rarely disappears completely, but medicines and lifestyle changes can slow or stop its growth and greatly lower the risk of a heart attack."
      },
      {
        "q": "Is a normal ECG enough to rule out CAD?",
        "a": "No. An ECG at rest can be normal even when arteries are narrowed. Your doctor may advise a stress test or imaging."
      },
      {
        "q": "Do all blockages need a stent?",
        "a": "No. Many blockages are best treated with medicines. The decision depends on symptoms, the size and location of the blockage, and test results."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Is Coronary Artery Disease? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Is Coronary Artery Disease? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-002",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "heart-attack-early-warning-signs-you-should-never-ignore",
    "title": "Heart Attack: Early Warning Signs You Should Never Ignore",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A heart attack happens when blood flow to part of the heart muscle is suddenly blocked, usually by a clot. The longer the blockage lasts, the more heart muscle is damaged. Recognising the signs early and getting to hospital fast can save a life.",
    "diagram": {
      "title": "What to do in a suspected heart attack",
      "steps": [
        {
          "number": "1",
          "title": "Stop and rest",
          "description": "Sit down, do not exert yourself"
        },
        {
          "number": "2",
          "title": "Call for help",
          "description": "Dial 108 or 112, or your local emergency number"
        },
        {
          "number": "3",
          "title": "Do not drive yourself",
          "description": "Wait for an ambulance or be driven"
        },
        {
          "number": "4",
          "title": "Reach a cath-lab hospital",
          "description": "Fast treatment saves heart muscle"
        }
      ]
    },
    "sections": [
      {
        "heading": "Classic warning signs",
        "content": "Chest pain, pressure, squeezing or heaviness lasting more than a few minutes, or that goes away and comes back Pain spreading to one or both arms, the neck, jaw, back or upper stomach Breathlessness, with or without chest pain Cold sweat Nausea, vomiting or light-headedness",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Chest pain, pressure, squeezing or heaviness lasting more than a few minutes, or that goes away and comes back"
          },
          {
            "label": "",
            "text": "Pain spreading to one or both arms, the neck, jaw, back or upper stomach"
          },
          {
            "label": "",
            "text": "Breathlessness, with or without chest pain"
          },
          {
            "label": "",
            "text": "Cold sweat"
          },
          {
            "label": "",
            "text": "Nausea, vomiting or light-headedness"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Signs that are easy to miss",
        "content": "Not every heart attack feels like the dramatic chest pain seen in films. Women, older adults and people with diabetes are more likely to have: If symptoms are new and unexplained, do not dismiss them as \"gas\". Unexplained tiredness or weakness Discomfort mistaken for acidity or indigestion Breathlessness without obvious chest pain Back or jaw pain alone",
        "paragraphs": [
          "Not every heart attack feels like the dramatic chest pain seen in films. Women, older adults and people with diabetes are more likely to have:",
          "If symptoms are new and unexplained, do not dismiss them as \"gas\"."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Unexplained tiredness or weakness"
          },
          {
            "label": "",
            "text": "Discomfort mistaken for acidity or indigestion"
          },
          {
            "label": "",
            "text": "Breathlessness without obvious chest pain"
          },
          {
            "label": "",
            "text": "Back or jaw pain alone"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Early warnings in the days before",
        "content": "Some people notice chest discomfort on exertion, unusual fatigue or breathlessness days or weeks earlier. These warning signs deserve an urgent medical check.",
        "paragraphs": [
          "Some people notice chest discomfort on exertion, unusual fatigue or breathlessness days or weeks earlier. These warning signs deserve an urgent medical check."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What to do immediately",
        "content": "1. Stop what you are doing and sit down. 2. Call emergency services (108 or 112 in India). 3. Do not drive yourself to hospital. 4. The emergency team may advise chewing an aspirin if you are not allergic. Follow their instructions. 5. If the person collapses and is not breathing normally, start CPR if trained.",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Stop what you are doing and sit down."
          },
          {
            "number": 2,
            "text": "Call emergency services (108 or 112 in India)."
          },
          {
            "number": 3,
            "text": "Do not drive yourself to hospital."
          },
          {
            "number": 4,
            "text": "The emergency team may advise chewing an aspirin if you are not allergic. Follow their instructions."
          },
          {
            "number": 5,
            "text": "If the person collapses and is not breathing normally, start CPR if trained."
          }
        ]
      },
      {
        "heading": "How hospitals treat a heart attack",
        "content": "Doctors confirm the diagnosis with an ECG and a blood test called troponin. The blocked artery is usually opened quickly with primary angioplasty in a cardiac catheterisation lab. Clot-dissolving medicines may be used when a cath lab is not quickly available.",
        "paragraphs": [
          "Doctors confirm the diagnosis with an ECG and a blood test called troponin. The blocked artery is usually opened quickly with primary angioplasty in a cardiac catheterisation lab. Clot-dissolving medicines may be used when a cath lab is not quickly available."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Anyone who has had chest pain, even if it settled, should be evaluated by a cardiologist. After a heart attack, regular follow-up and cardiac rehabilitation help prevent another one.",
    "faqs": [
      {
        "q": "Can a heart attack happen without chest pain?",
        "a": "Yes. These \"silent\" or atypical heart attacks are more common in people with diabetes, women and the elderly."
      },
      {
        "q": "Is a heart attack the same as cardiac arrest?",
        "a": "No. A heart attack is a blocked artery. Cardiac arrest is when the heart suddenly stops pumping effectively. A heart attack can lead to cardiac arrest."
      },
      {
        "q": "How quickly should treatment start?",
        "a": "As soon as possible. Opening the artery within the first few hours gives the best chance of limiting damage."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Heart Attack: Early Warning Signs You Should Never Ignore (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Heart Attack: Early Warning Signs You Should Never Ignore adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-003",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "heart-bypass-surgery-cabg-how-does-it-work",
    "title": "Heart Bypass Surgery (CABG): How Does It Work?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Coronary artery bypass grafting, or CABG (pronounced \"cabbage\"), is an operation that creates a new path for blood to reach the heart muscle when the coronary arteries are badly blocked. It is one of the most commonly performed and well-studied heart operations in the world.",
    "diagram": {
      "title": "How a bypass graft works",
      "steps": [
        {
          "number": "1",
          "title": "Blocked artery",
          "description": "Plaque stops blood reaching part of the heart"
        },
        {
          "number": "2",
          "title": "Graft harvested",
          "description": "A vessel is taken from the chest, leg or arm"
        },
        {
          "number": "3",
          "title": "Graft attached",
          "description": "One end above the blockage, one end below"
        },
        {
          "number": "4",
          "title": "Blood rerouted",
          "description": "Heart muscle receives blood again"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "Just as a road bypass lets traffic go around a blocked section, a surgical bypass lets blood flow around a narrowed artery. The surgeon uses a healthy blood vessel, called a graft , taken from elsewhere in your body. Common graft sources: Internal mammary artery from inside the chest wall Saphenous vein from the leg Radial artery from the forearm",
        "paragraphs": [
          "Just as a road bypass lets traffic go around a blocked section, a surgical bypass lets blood flow around a narrowed artery. The surgeon uses a healthy blood vessel, called a graft , taken from elsewhere in your body.",
          "Common graft sources:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Internal mammary artery from inside the chest wall"
          },
          {
            "label": "",
            "text": "Saphenous vein from the leg"
          },
          {
            "label": "",
            "text": "Radial artery from the forearm"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who needs it?",
        "content": "Your heart team may recommend CABG if you have: The choice between CABG and angioplasty is made by a cardiologist and cardiac surgeon together, based on your angiogram and overall health. Blockages in several coronary arteries A major blockage in the left main coronary artery Diabetes with multi-vessel disease Blockages that are unsuitable for stenting Reduced heart pumping function along with blocked arteries",
        "paragraphs": [
          "Your heart team may recommend CABG if you have:",
          "The choice between CABG and angioplasty is made by a cardiologist and cardiac surgeon together, based on your angiogram and overall health."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Blockages in several coronary arteries"
          },
          {
            "label": "",
            "text": "A major blockage in the left main coronary artery"
          },
          {
            "label": "",
            "text": "Diabetes with multi-vessel disease"
          },
          {
            "label": "",
            "text": "Blockages that are unsuitable for stenting"
          },
          {
            "label": "",
            "text": "Reduced heart pumping function along with blocked arteries"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What happens during surgery?",
        "content": "The operation usually takes 3 to 6 hours. 1. You are given general anaesthesia. 2. The surgeon opens the chest through the breastbone. 3. The heart may be stopped briefly while a heart-lung machine takes over (\"on-pump\"), or the surgeon operates on the beating heart (\"off-pump\"). 4. Grafts are attached above and below each blockage. 5. The breastbone is wired together and the skin closed.",
        "paragraphs": [
          "The operation usually takes 3 to 6 hours."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "You are given general anaesthesia."
          },
          {
            "number": 2,
            "text": "The surgeon opens the chest through the breastbone."
          },
          {
            "number": 3,
            "text": "The heart may be stopped briefly while a heart-lung machine takes over (\"on-pump\"), or the surgeon operates on the beating heart (\"off-pump\")."
          },
          {
            "number": 4,
            "text": "Grafts are attached above and below each blockage."
          },
          {
            "number": 5,
            "text": "The breastbone is wired together and the skin closed."
          }
        ]
      },
      {
        "heading": "What should you expect afterwards?",
        "content": "Cardiac rehabilitation, medicines and lifestyle change are essential to keep the grafts open. 1 to 2 days in the cardiac ICU, then a ward stay of several days Walking begins within a day or two The breastbone takes about 6 to 8 weeks to heal Most people return to light activity within 4 to 6 weeks and to full routine in about 3 months",
        "paragraphs": [
          "Cardiac rehabilitation, medicines and lifestyle change are essential to keep the grafts open."
        ],
        "bullets": [
          {
            "label": "",
            "text": "1 to 2 days in the cardiac ICU, then a ward stay of several days"
          },
          {
            "label": "",
            "text": "Walking begins within a day or two"
          },
          {
            "label": "",
            "text": "The breastbone takes about 6 to 8 weeks to heal"
          },
          {
            "label": "",
            "text": "Most people return to light activity within 4 to 6 weeks and to full routine in about 3 months"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "If an angiogram has shown multiple blockages, discuss with a heart team whether CABG, angioplasty or medicines are best for you.",
    "faqs": [
      {
        "q": "Is bypass surgery a permanent cure?",
        "a": "It relieves symptoms and improves blood flow, but the underlying disease continues. Medicines and healthy habits help grafts last many years."
      },
      {
        "q": "Is CABG better than stenting?",
        "a": "Neither is better for everyone. CABG is often preferred for complex, multi-vessel disease, especially in people with diabetes."
      },
      {
        "q": "Will I have a large scar?",
        "a": "Traditional CABG leaves a scar down the centre of the chest. Minimally invasive options exist for selected patients."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Heart Bypass Surgery (CABG): How Does It Work? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Heart Bypass Surgery (CABG): How Does It Work? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-004",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "angioplasty-and-stenting-explained",
    "title": "Angioplasty and Stenting Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Angioplasty is a minimally invasive procedure that opens a narrowed or blocked coronary artery without open surgery. In most cases a small mesh tube called a stent is placed to keep the artery open.",
    "diagram": {
      "title": "Angioplasty in four steps",
      "steps": [
        {
          "number": "1",
          "title": "Access",
          "description": "A thin tube enters through the wrist or groin"
        },
        {
          "number": "2",
          "title": "Guide wire",
          "description": "A fine wire crosses the blockage"
        },
        {
          "number": "3",
          "title": "Balloon",
          "description": "A balloon is inflated to push plaque aside"
        },
        {
          "number": "4",
          "title": "Stent",
          "description": "A mesh tube stays to keep the artery open"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "The medical name is percutaneous coronary intervention (PCI). \"Percutaneous\" means through the skin. Instead of opening the chest, the cardiologist reaches the heart through a blood vessel in the wrist or groin. Most stents used today are drug-eluting stents , coated with medicine that slowly releases to reduce the chance of the artery narrowing again.",
        "paragraphs": [
          "The medical name is percutaneous coronary intervention (PCI). \"Percutaneous\" means through the skin. Instead of opening the chest, the cardiologist reaches the heart through a blood vessel in the wrist or groin.",
          "Most stents used today are drug-eluting stents , coated with medicine that slowly releases to reduce the chance of the artery narrowing again."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "When is it recommended?",
        "content": "For people with many complex blockages, bypass surgery may be a better option. During a heart attack, to open the blocked artery quickly For angina that is not controlled with medicines When tests show a significant blockage limiting blood flow",
        "paragraphs": [
          "For people with many complex blockages, bypass surgery may be a better option."
        ],
        "bullets": [
          {
            "label": "",
            "text": "During a heart attack, to open the blocked artery quickly"
          },
          {
            "label": "",
            "text": "For angina that is not controlled with medicines"
          },
          {
            "label": "",
            "text": "When tests show a significant blockage limiting blood flow"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What happens during the procedure?",
        "content": "The procedure usually takes 30 to 90 minutes. You may feel brief chest discomfort while the balloon is inflated. 1. You stay awake but relaxed. The wrist or groin is numbed. 2. A thin tube (catheter) is guided to the heart using X-ray imaging. 3. Dye is injected to show the blockage (angiogram). 4. A tiny balloon is inflated at the blockage to widen the artery. 5. The stent is expanded and left in place permanently.",
        "paragraphs": [
          "The procedure usually takes 30 to 90 minutes. You may feel brief chest discomfort while the balloon is inflated."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "You stay awake but relaxed. The wrist or groin is numbed."
          },
          {
            "number": 2,
            "text": "A thin tube (catheter) is guided to the heart using X-ray imaging."
          },
          {
            "number": 3,
            "text": "Dye is injected to show the blockage (angiogram)."
          },
          {
            "number": 4,
            "text": "A tiny balloon is inflated at the blockage to widen the artery."
          },
          {
            "number": 5,
            "text": "The stent is expanded and left in place permanently."
          }
        ]
      },
      {
        "heading": "Recovery",
        "content": "Most planned patients go home within 1 to 2 days The wrist or groin site may be sore or bruised for a few days Avoid heavy lifting for about a week Most people return to desk work within a week",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Most planned patients go home within 1 to 2 days"
          },
          {
            "label": "",
            "text": "The wrist or groin site may be sore or bruised for a few days"
          },
          {
            "label": "",
            "text": "Avoid heavy lifting for about a week"
          },
          {
            "label": "",
            "text": "Most people return to desk work within a week"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Medicines after a stent",
        "content": "You will be prescribed blood thinners , usually two antiplatelet medicines for a period decided by your cardiologist. Stopping them early without advice can cause a dangerous clot inside the stent.",
        "paragraphs": [
          "You will be prescribed blood thinners , usually two antiplatelet medicines for a period decided by your cardiologist. Stopping them early without advice can cause a dangerous clot inside the stent."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Talk to a cardiologist if you have chest pain on exertion or abnormal stress test results. Always tell any doctor or dentist that you have a stent before a procedure.",
    "faqs": [
      {
        "q": "Is angioplasty a surgery?",
        "a": "It is a procedure rather than open surgery. There is no large cut and no general anaesthesia in most cases."
      },
      {
        "q": "Can a stented artery block again?",
        "a": "It can, but modern drug-eluting stents have lowered this risk considerably. Medicines and lifestyle change also help."
      },
      {
        "q": "Can I go through airport security with a stent?",
        "a": "Yes. Coronary stents do not set off metal detectors and are safe with MRI scans in most cases."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Angioplasty and Stenting Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Angioplasty and Stenting Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-005",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "when-does-a-patient-need-heart-valve-replacement",
    "title": "When Does a Patient Need Heart Valve Replacement?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Your heart has four valves that open and close with every heartbeat to keep blood flowing in one direction. When a valve becomes too narrow or too leaky, the heart has to work harder. Over time, severe valve disease may need repair or replacement.",
    "diagram": {
      "title": "Choosing a valve treatment",
      "steps": [
        {
          "number": "1",
          "title": "Assess severity",
          "description": "Echo shows how badly the valve is affected"
        },
        {
          "number": "2",
          "title": "Monitor",
          "description": "Mild disease is watched with regular scans"
        },
        {
          "number": "3",
          "title": "Repair if possible",
          "description": "Often preferred for the mitral valve"
        },
        {
          "number": "4",
          "title": "Replace",
          "description": "Surgery or TAVI when damage is severe"
        }
      ]
    },
    "sections": [
      {
        "heading": "Why do valves fail?",
        "content": "Stenosis: the valve becomes stiff and narrow, blocking blood flow (common in the aortic valve with age) Regurgitation: the valve does not close properly and blood leaks backwards Rheumatic heart disease: damage after rheumatic fever in childhood, still common in India and Africa Birth defects, infection or wear and tear",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Stenosis:",
            "text": "the valve becomes stiff and narrow, blocking blood flow (common in the aortic valve with age)"
          },
          {
            "label": "Regurgitation:",
            "text": "the valve does not close properly and blood leaks backwards"
          },
          {
            "label": "Rheumatic heart disease:",
            "text": "damage after rheumatic fever in childhood, still common in India and Africa"
          },
          {
            "label": "",
            "text": "Birth defects, infection or wear and tear"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When is replacement recommended?",
        "content": "Valve replacement is usually considered when: Mild or moderate disease is usually monitored with regular check-ups and scans. The valve disease is severe on echocardiography, and You have symptoms such as breathlessness, chest pain, fainting or tiredness, or Tests show the heart is starting to enlarge or weaken, even without symptoms",
        "paragraphs": [
          "Valve replacement is usually considered when:",
          "Mild or moderate disease is usually monitored with regular check-ups and scans."
        ],
        "bullets": [
          {
            "label": "",
            "text": "The valve disease is severe on echocardiography, and"
          },
          {
            "label": "",
            "text": "You have symptoms such as breathlessness, chest pain, fainting or tiredness, or"
          },
          {
            "label": "",
            "text": "Tests show the heart is starting to enlarge or weaken, even without symptoms"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Repair or replace?",
        "content": "Surgeons often prefer to repair the mitral valve when possible, because your own valve generally works better long term. The aortic valve is more often replaced.",
        "paragraphs": [
          "Surgeons often prefer to repair the mitral valve when possible, because your own valve generally works better long term. The aortic valve is more often replaced."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Types of replacement valve",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "Mechanical valve",
            "Tissue (biological) valve"
          ],
          "rows": [
            [
              "Made from",
              "Durable carbon or metal",
              "Animal tissue"
            ],
            [
              "How long it lasts",
              "Usually lifelong",
              "Often 10 to 20 years"
            ],
            [
              "Blood thinners",
              "Needed lifelong",
              "Usually short term only"
            ],
            [
              "Often chosen for",
              "Younger patients",
              "Older patients or those who cannot take long-term blood thinners"
            ]
          ]
        }
      },
      {
        "heading": "Surgical and catheter options",
        "content": "Open valve surgery: the traditional approach through the chest Minimally invasive surgery: smaller incisions in selected patients TAVI (transcatheter aortic valve implantation): a new valve is placed through a catheter, usually from the groin, without opening the chest. It is mainly used for aortic stenosis in older or higher-risk patients.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Open valve surgery:",
            "text": "the traditional approach through the chest"
          },
          {
            "label": "Minimally invasive surgery:",
            "text": "smaller incisions in selected patients"
          },
          {
            "label": "TAVI (transcatheter aortic valve implantation):",
            "text": "a new valve is placed through a catheter, usually from the groin, without opening the chest. It is mainly used for aortic stenosis in older or higher-risk patients."
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "If you have been told you have a heart murmur or valve disease, see a cardiologist for regular echocardiograms. New breathlessness, fainting or chest pain needs prompt review.",
    "faqs": [
      {
        "q": "Can valve disease be treated with medicines alone?",
        "a": "Medicines can ease symptoms, but they cannot fix a severely damaged valve."
      },
      {
        "q": "Who is suitable for TAVI?",
        "a": "Your heart team decides based on age, valve anatomy, other health conditions and surgical risk."
      },
      {
        "q": "Will I need blood thinners after valve replacement?",
        "a": "Lifelong with a mechanical valve; usually only for a short time with a tissue valve."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for When Does a Patient Need Heart Valve Replacement? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for When Does a Patient Need Heart Valve Replacement? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-006",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "what-is-a-pacemaker-and-who-needs-one",
    "title": "What Is a Pacemaker and Who Needs One?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A pacemaker is a small battery-powered device that helps your heart beat at a steady rate when its natural electrical system becomes too slow or unreliable. Pacemakers are among the most common heart devices and are usually implanted in a short procedure.",
    "diagram": {
      "title": "How a pacemaker works",
      "steps": [
        {
          "number": "1",
          "title": "Senses",
          "description": "Leads monitor every heartbeat"
        },
        {
          "number": "2",
          "title": "Detects a pause",
          "description": "Heart rate falls too low"
        },
        {
          "number": "3",
          "title": "Sends a pulse",
          "description": "A tiny electrical signal triggers a beat"
        },
        {
          "number": "4",
          "title": "Records data",
          "description": "Checked at follow-up visits"
        }
      ]
    },
    "sections": [
      {
        "heading": "How does the heartbeat work?",
        "content": "Your heart has its own natural pacemaker that sends electrical signals to make it contract. If these signals slow down or are blocked on their way through the heart, your heart rate can drop too low.",
        "paragraphs": [
          "Your heart has its own natural pacemaker that sends electrical signals to make it contract. If these signals slow down or are blocked on their way through the heart, your heart rate can drop too low."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who needs a pacemaker?",
        "content": "Common reasons include: Bradycardia: a heart rate that is too slow and causes symptoms Heart block: electrical signals are delayed or blocked between the upper and lower chambers Sick sinus syndrome: the natural pacemaker works erratically Certain types of heart failure, using a special device called CRT (cardiac resynchronisation therapy)",
        "paragraphs": [
          "Common reasons include:"
        ],
        "bullets": [
          {
            "label": "Bradycardia:",
            "text": "a heart rate that is too slow and causes symptoms"
          },
          {
            "label": "Heart block:",
            "text": "electrical signals are delayed or blocked between the upper and lower chambers"
          },
          {
            "label": "Sick sinus syndrome:",
            "text": "the natural pacemaker works erratically"
          },
          {
            "label": "",
            "text": "Certain types of heart failure, using a special device called CRT (cardiac resynchronisation therapy)"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Symptoms that may point to a slow heart",
        "content": "An ECG or a 24-hour Holter monitor can confirm whether a slow rhythm is the cause. Dizziness or light-headedness Fainting or near-fainting Unusual tiredness Breathlessness on mild exertion Confusion, especially in older adults",
        "paragraphs": [
          "An ECG or a 24-hour Holter monitor can confirm whether a slow rhythm is the cause."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Dizziness or light-headedness"
          },
          {
            "label": "",
            "text": "Fainting or near-fainting"
          },
          {
            "label": "",
            "text": "Unusual tiredness"
          },
          {
            "label": "",
            "text": "Breathlessness on mild exertion"
          },
          {
            "label": "",
            "text": "Confusion, especially in older adults"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The procedure",
        "content": "It usually takes about an hour. Leadless pacemakers , which sit directly inside the heart, are suitable for some patients. 1. Local anaesthesia is given below the collarbone, usually with mild sedation. 2. One or more thin wires (leads) are passed through a vein into the heart. 3. The pacemaker is placed in a small pocket under the skin. 4. The device is tested and the wound closed.",
        "paragraphs": [
          "It usually takes about an hour. Leadless pacemakers , which sit directly inside the heart, are suitable for some patients."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Local anaesthesia is given below the collarbone, usually with mild sedation."
          },
          {
            "number": 2,
            "text": "One or more thin wires (leads) are passed through a vein into the heart."
          },
          {
            "number": 3,
            "text": "The pacemaker is placed in a small pocket under the skin."
          },
          {
            "number": 4,
            "text": "The device is tested and the wound closed."
          }
        ]
      },
      {
        "heading": "Life with a pacemaker",
        "content": "Avoid lifting the arm above shoulder level on the implant side for a few weeks Regular device checks, often possible remotely Batteries typically last several years and are replaced in a minor procedure Keep mobile phones about 15 cm from the device and carry your device ID card",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Avoid lifting the arm above shoulder level on the implant side for a few weeks"
          },
          {
            "label": "",
            "text": "Regular device checks, often possible remotely"
          },
          {
            "label": "",
            "text": "Batteries typically last several years and are replaced in a minor procedure"
          },
          {
            "label": "",
            "text": "Keep mobile phones about 15 cm from the device and carry your device ID card"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a cardiologist if you have fainting spells, frequent dizziness or a slow pulse. Fainting while driving or at work needs urgent assessment.",
    "faqs": [
      {
        "q": "Will I feel the pacemaker working?",
        "a": "Most people do not feel it at all."
      },
      {
        "q": "Can I have an MRI scan?",
        "a": "Many modern pacemakers are MRI-conditional, but the scan must be planned with your cardiology team."
      },
      {
        "q": "Can I travel by air?",
        "a": "Yes. Show your device card at security."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Is a Pacemaker and Who Needs One? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Is a Pacemaker and Who Needs One? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-007",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "understanding-aicd-implantation",
    "title": "Understanding AICD Implantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "An AICD (automatic implantable cardioverter defibrillator), often called an ICD, is a small device placed under the skin that watches your heart rhythm around the clock. If it detects a dangerously fast rhythm that could cause sudden cardiac arrest, it corrects it within seconds.",
    "diagram": {
      "title": "How an AICD responds",
      "steps": [
        {
          "number": "1",
          "title": "Monitors",
          "description": "Watches the heart rhythm continuously"
        },
        {
          "number": "2",
          "title": "Detects danger",
          "description": "Spots a life-threatening fast rhythm"
        },
        {
          "number": "3",
          "title": "Pacing first",
          "description": "Rapid pacing may stop it painlessly"
        },
        {
          "number": "4",
          "title": "Shock if needed",
          "description": "Delivers a shock to restore normal rhythm"
        }
      ]
    },
    "sections": [
      {
        "heading": "How is it different from a pacemaker?",
        "content": "A pacemaker treats a heart that beats too slowly . An AICD mainly protects against a heart that beats dangerously fast , such as ventricular tachycardia or ventricular fibrillation. Most AICDs can also act as a pacemaker when needed.",
        "paragraphs": [
          "A pacemaker treats a heart that beats too slowly . An AICD mainly protects against a heart that beats dangerously fast , such as ventricular tachycardia or ventricular fibrillation. Most AICDs can also act as a pacemaker when needed."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who may need an AICD?",
        "content": "Doctors use the ejection fraction (how much blood the heart pumps with each beat) along with other tests to decide. People who have survived a cardiac arrest People with very weak heart pumping function, often after a heart attack or due to cardiomyopathy Inherited heart rhythm conditions with a high risk of sudden death Episodes of dangerous ventricular rhythms",
        "paragraphs": [
          "Doctors use the ejection fraction (how much blood the heart pumps with each beat) along with other tests to decide."
        ],
        "bullets": [
          {
            "label": "",
            "text": "People who have survived a cardiac arrest"
          },
          {
            "label": "",
            "text": "People with very weak heart pumping function, often after a heart attack or due to cardiomyopathy"
          },
          {
            "label": "",
            "text": "Inherited heart rhythm conditions with a high risk of sudden death"
          },
          {
            "label": "",
            "text": "Episodes of dangerous ventricular rhythms"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The procedure",
        "content": "The implantation is similar to a pacemaker: A subcutaneous ICD , with the lead under the skin rather than inside the heart, is an option for some patients. 1. Local anaesthesia and sedation 2. A lead is passed through a vein into the heart 3. The device is placed under the skin below the collarbone 4. The device is programmed and tested",
        "paragraphs": [
          "The implantation is similar to a pacemaker:",
          "A subcutaneous ICD , with the lead under the skin rather than inside the heart, is an option for some patients."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Local anaesthesia and sedation"
          },
          {
            "number": 2,
            "text": "A lead is passed through a vein into the heart"
          },
          {
            "number": 3,
            "text": "The device is placed under the skin below the collarbone"
          },
          {
            "number": 4,
            "text": "The device is programmed and tested"
          }
        ]
      },
      {
        "heading": "What does a shock feel like?",
        "content": "Many people describe it as a sudden thump or kick in the chest that lasts a second. It can be startling, but it means the device has done its job. What to do after a shock: One shock and you feel well: inform your cardiology team the same day More than one shock, or you feel unwell: seek emergency care",
        "paragraphs": [
          "Many people describe it as a sudden thump or kick in the chest that lasts a second. It can be startling, but it means the device has done its job.",
          "What to do after a shock:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "One shock and you feel well: inform your cardiology team the same day"
          },
          {
            "label": "",
            "text": "More than one shock, or you feel unwell: seek emergency care"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Living with an AICD",
        "content": "Regular device checks, often remotely Driving rules apply after implantation or a shock; your doctor will advise Keep magnets and strong electrical equipment away from the device Carry your device card",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Regular device checks, often remotely"
          },
          {
            "label": "",
            "text": "Driving rules apply after implantation or a shock; your doctor will advise"
          },
          {
            "label": "",
            "text": "Keep magnets and strong electrical equipment away from the device"
          },
          {
            "label": "",
            "text": "Carry your device card"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "If you have weak heart function, a family history of sudden death or unexplained fainting, ask a cardiologist whether you need a rhythm assessment.",
    "faqs": [
      {
        "q": "Does an AICD treat heart failure?",
        "a": "It protects against sudden death but does not strengthen the heart. Some devices (CRT-D) also improve heart pumping coordination."
      },
      {
        "q": "Will the device shock me often?",
        "a": "Most people receive few or no shocks. Programming is adjusted to reduce unnecessary shocks."
      },
      {
        "q": "How long does the battery last?",
        "a": "Usually several years. Replacement is a minor procedure."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding AICD Implantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding AICD Implantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-008",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "symptoms-of-heart-valve-disease",
    "title": "Symptoms of Heart Valve Disease",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Heart valve disease often develops slowly, and many people get used to symptoms without realising their heart is involved. Knowing the signs helps you get checked early, before the heart muscle is damaged.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "Valve disease means one or more of the heart's four valves is not opening fully ( stenosis ) or not closing tightly ( regurgitation ). Either way, the heart has to pump harder to move blood around the body.",
        "paragraphs": [
          "Valve disease means one or more of the heart's four valves is not opening fully ( stenosis ) or not closing tightly ( regurgitation ). Either way, the heart has to pump harder to move blood around the body."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Common symptoms",
        "content": "Symptoms may not match how severe the disease is. Some people with significant valve disease feel well, which is why regular scans matter. Breathlessness , first on exertion and later even at rest or when lying flat Tiredness and reduced ability to do daily tasks Chest pain or tightness , especially with aortic stenosis Dizziness or fainting , particularly during activity Palpitations , a fluttering or racing heartbeat Swelling of the feet, ankles or abdomen Waking up at night breathless",
        "paragraphs": [
          "Symptoms may not match how severe the disease is. Some people with significant valve disease feel well, which is why regular scans matter."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Breathlessness , first on exertion and later even at rest or when lying flat"
          },
          {
            "label": "",
            "text": "Tiredness and reduced ability to do daily tasks"
          },
          {
            "label": "",
            "text": "Chest pain or tightness , especially with aortic stenosis"
          },
          {
            "label": "",
            "text": "Dizziness or fainting , particularly during activity"
          },
          {
            "label": "",
            "text": "Palpitations , a fluttering or racing heartbeat"
          },
          {
            "label": "",
            "text": "Swelling of the feet, ankles or abdomen"
          },
          {
            "label": "",
            "text": "Waking up at night breathless"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The heart murmur",
        "content": "Often the first clue is a murmur , an extra sound your doctor hears with a stethoscope. Not every murmur means disease, but a new murmur should be checked with an echocardiogram.",
        "paragraphs": [
          "Often the first clue is a murmur , an extra sound your doctor hears with a stethoscope. Not every murmur means disease, but a new murmur should be checked with an echocardiogram."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Causes and risk factors",
        "content": "Age-related calcium build-up on the aortic valve Rheumatic fever in childhood, after untreated throat infections Infection of the heart valves (endocarditis) Valve problems present from birth, such as a bicuspid aortic valve Previous heart attack or heart enlargement",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Age-related calcium build-up on the aortic valve"
          },
          {
            "label": "",
            "text": "Rheumatic fever in childhood, after untreated throat infections"
          },
          {
            "label": "",
            "text": "Infection of the heart valves (endocarditis)"
          },
          {
            "label": "",
            "text": "Valve problems present from birth, such as a bicuspid aortic valve"
          },
          {
            "label": "",
            "text": "Previous heart attack or heart enlargement"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How is it diagnosed?",
        "content": "Echocardiogram: the key test, showing valve structure and how well blood flows ECG and chest X-ray: check rhythm and heart size Transoesophageal echo: a closer look through a probe in the food pipe Stress test or cardiac CT/MRI: in selected cases",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Echocardiogram:",
            "text": "the key test, showing valve structure and how well blood flows"
          },
          {
            "label": "ECG and chest X-ray:",
            "text": "check rhythm and heart size"
          },
          {
            "label": "Transoesophageal echo:",
            "text": "a closer look through a probe in the food pipe"
          },
          {
            "label": "Stress test or cardiac CT/MRI:",
            "text": "in selected cases"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who should be checked?",
        "content": "Anyone with unexplained breathlessness or fainting People with a known murmur Adults with a history of rheumatic fever Pregnant women with known valve problems, before or early in pregnancy",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Anyone with unexplained breathlessness or fainting"
          },
          {
            "label": "",
            "text": "People with a known murmur"
          },
          {
            "label": "",
            "text": "Adults with a history of rheumatic fever"
          },
          {
            "label": "",
            "text": "Pregnant women with known valve problems, before or early in pregnancy"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a cardiologist promptly if breathlessness, chest pain or fainting is new or getting worse. Fainting during exertion is a warning sign that needs urgent assessment.",
    "faqs": [
      {
        "q": "Is every heart murmur dangerous?",
        "a": "No. Some murmurs are harmless. An echocardiogram tells the difference."
      },
      {
        "q": "Can valve disease cause heart failure?",
        "a": "Yes. Untreated severe valve disease can weaken the heart over time."
      },
      {
        "q": "How often should valve disease be monitored?",
        "a": "Depending on severity, from every few years to every 6 to 12 months."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Symptoms of Heart Valve Disease (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Symptoms of Heart Valve Disease adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-009",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "heart-failure-symptoms-diagnosis-and-treatment",
    "title": "Heart Failure: Symptoms, Diagnosis and Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Heart failure means the heart is not pumping blood as well as the body needs. It does not mean the heart has stopped. With the right treatment, many people with heart failure live active lives for many years.",
    "diagram": {
      "title": "Daily heart failure self-care",
      "steps": [
        {
          "number": "1",
          "title": "Weigh yourself",
          "description": "Same time every morning"
        },
        {
          "number": "2",
          "title": "Check swelling",
          "description": "Feet, ankles and abdomen"
        },
        {
          "number": "3",
          "title": "Take medicines",
          "description": "Exactly as prescribed"
        },
        {
          "number": "4",
          "title": "Limit salt and fluid",
          "description": "As advised by your doctor"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "Heart failure happens when the heart muscle becomes weak or stiff. Blood and fluid then back up into the lungs and body, causing breathlessness and swelling. Doctors often describe it by the ejection fraction (EF) , the percentage of blood pumped out with each beat. A normal EF is roughly 55 to 70 percent.",
        "paragraphs": [
          "Heart failure happens when the heart muscle becomes weak or stiff. Blood and fluid then back up into the lungs and body, causing breathlessness and swelling.",
          "Doctors often describe it by the ejection fraction (EF) , the percentage of blood pumped out with each beat. A normal EF is roughly 55 to 70 percent."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Symptoms",
        "content": "Breathlessness on activity, when lying flat or waking at night Swelling in the feet, ankles, legs or abdomen Rapid weight gain over a few days (fluid build-up) Tiredness and weakness Persistent cough or wheezing Reduced appetite",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Breathlessness on activity, when lying flat or waking at night"
          },
          {
            "label": "",
            "text": "Swelling in the feet, ankles, legs or abdomen"
          },
          {
            "label": "",
            "text": "Rapid weight gain over a few days (fluid build-up)"
          },
          {
            "label": "",
            "text": "Tiredness and weakness"
          },
          {
            "label": "",
            "text": "Persistent cough or wheezing"
          },
          {
            "label": "",
            "text": "Reduced appetite"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common causes",
        "content": "Previous heart attack and coronary artery disease Long-standing high blood pressure Heart valve disease Cardiomyopathy (disease of the heart muscle) Irregular heart rhythms Diabetes, alcohol misuse and some cancer treatments",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Previous heart attack and coronary artery disease"
          },
          {
            "label": "",
            "text": "Long-standing high blood pressure"
          },
          {
            "label": "",
            "text": "Heart valve disease"
          },
          {
            "label": "",
            "text": "Cardiomyopathy (disease of the heart muscle)"
          },
          {
            "label": "",
            "text": "Irregular heart rhythms"
          },
          {
            "label": "",
            "text": "Diabetes, alcohol misuse and some cancer treatments"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Echocardiogram: measures EF and checks valves Blood tests: including NT-proBNP, a marker of heart strain ECG and chest X-ray Further tests to find the cause, such as an angiogram or cardiac MRI",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Echocardiogram:",
            "text": "measures EF and checks valves"
          },
          {
            "label": "Blood tests:",
            "text": "including NT-proBNP, a marker of heart strain"
          },
          {
            "label": "",
            "text": "ECG and chest X-ray"
          },
          {
            "label": "",
            "text": "Further tests to find the cause, such as an angiogram or cardiac MRI"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Medicines: several drug groups work together to reduce symptoms, protect the heart and help people live longer. Diuretics (\"water tablets\") remove extra fluid. Treating the cause: opening blocked arteries or fixing a faulty valve Devices: CRT pacemakers to coordinate heart pumping, AICDs to prevent sudden death Advanced therapies: LVAD (mechanical heart pump) or heart transplant for selected severe cases Cardiac rehabilitation: supervised exercise and education",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Medicines:",
            "text": "several drug groups work together to reduce symptoms, protect the heart and help people live longer. Diuretics (\"water tablets\") remove extra fluid."
          },
          {
            "label": "Treating the cause:",
            "text": "opening blocked arteries or fixing a faulty valve"
          },
          {
            "label": "Devices:",
            "text": "CRT pacemakers to coordinate heart pumping, AICDs to prevent sudden death"
          },
          {
            "label": "Advanced therapies:",
            "text": "LVAD (mechanical heart pump) or heart transplant for selected severe cases"
          },
          {
            "label": "Cardiac rehabilitation:",
            "text": "supervised exercise and education"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Living with heart failure",
        "content": "Self-care makes a real difference. Weigh yourself daily, take medicines regularly, limit salt and keep follow-up appointments.",
        "paragraphs": [
          "Self-care makes a real difference. Weigh yourself daily, take medicines regularly, limit salt and keep follow-up appointments."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Contact your heart team if your weight rises by 2 kg in 2 to 3 days, swelling increases or breathlessness worsens. Severe breathlessness at rest or chest pain needs emergency care.",
    "faqs": [
      {
        "q": "Is heart failure curable?",
        "a": "It depends on the cause. Some forms improve greatly with treatment; others are long-term conditions that can be well controlled."
      },
      {
        "q": "Should I drink less water?",
        "a": "Some patients are advised to limit fluids. Follow your doctor's specific advice."
      },
      {
        "q": "Can I exercise?",
        "a": "Yes, usually. Supervised cardiac rehabilitation is safe and improves strength and wellbeing."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Heart Failure: Symptoms, Diagnosis and Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Heart Failure: Symptoms, Diagnosis and Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-010",
    "specialtySlug": "cardiology",
    "specialtyTitle": "Cardiology",
    "slug": "life-after-heart-surgery-recovery-and-precautions",
    "title": "Life After Heart Surgery: Recovery and Precautions",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Recovering from heart surgery is a gradual process. Most people feel stronger week by week, but the first two to three months need care and patience. This guide covers what to expect after open-heart surgery such as bypass or valve surgery.",
    "diagram": {
      "title": "Typical recovery timeline",
      "steps": [
        {
          "number": "1",
          "title": "Days 1 to 7",
          "description": "ICU, then ward; walking starts"
        },
        {
          "number": "2",
          "title": "Weeks 1 to 6",
          "description": "Home recovery; short daily walks"
        },
        {
          "number": "3",
          "title": "Weeks 6 to 12",
          "description": "Breastbone heals; cardiac rehab"
        },
        {
          "number": "4",
          "title": "After 3 months",
          "description": "Most people resume full routine"
        }
      ]
    },
    "sections": [
      {
        "heading": "The first weeks at home",
        "content": "It is normal to feel: These usually improve over 4 to 6 weeks. Tell your doctor if low mood persists. Tired and low on energy Some chest wall discomfort or soreness around the wound Poor appetite and disturbed sleep Mood changes, including feeling low or anxious",
        "paragraphs": [
          "It is normal to feel:",
          "These usually improve over 4 to 6 weeks. Tell your doctor if low mood persists."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Tired and low on energy"
          },
          {
            "label": "",
            "text": "Some chest wall discomfort or soreness around the wound"
          },
          {
            "label": "",
            "text": "Poor appetite and disturbed sleep"
          },
          {
            "label": "",
            "text": "Mood changes, including feeling low or anxious"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Protecting your breastbone",
        "content": "Your breastbone needs about 6 to 8 weeks to heal. Until your surgeon says otherwise: Do not lift more than about 2 to 3 kg Avoid pushing or pulling with your arms, such as pushing yourself up from a chair Hug a pillow against your chest when you cough or sneeze Do not drive for the period your surgeon advises",
        "paragraphs": [
          "Your breastbone needs about 6 to 8 weeks to heal. Until your surgeon says otherwise:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Do not lift more than about 2 to 3 kg"
          },
          {
            "label": "",
            "text": "Avoid pushing or pulling with your arms, such as pushing yourself up from a chair"
          },
          {
            "label": "",
            "text": "Hug a pillow against your chest when you cough or sneeze"
          },
          {
            "label": "",
            "text": "Do not drive for the period your surgeon advises"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Wound care",
        "content": "Keep the wound clean and dry; shower as advised Do not apply creams or powders unless prescribed Check daily for redness, swelling, discharge or the wound opening",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Keep the wound clean and dry; shower as advised"
          },
          {
            "label": "",
            "text": "Do not apply creams or powders unless prescribed"
          },
          {
            "label": "",
            "text": "Check daily for redness, swelling, discharge or the wound opening"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Activity",
        "content": "Walk every day, starting with 5 to 10 minutes and building up gradually Rest between activities Climb stairs slowly Join a cardiac rehabilitation programme , which offers supervised exercise and guidance",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Walk every day, starting with 5 to 10 minutes and building up gradually"
          },
          {
            "label": "",
            "text": "Rest between activities"
          },
          {
            "label": "",
            "text": "Climb stairs slowly"
          },
          {
            "label": "",
            "text": "Join a cardiac rehabilitation programme , which offers supervised exercise and guidance"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Food and medicines",
        "content": "Choose a heart-healthy diet: vegetables, fruit, whole grains, pulses, fish and less salt, fried food and sweets Take every medicine exactly as prescribed, especially blood thinners and cholesterol medicines Keep blood sugar and blood pressure under control Stop all tobacco, permanently",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Choose a heart-healthy diet: vegetables, fruit, whole grains, pulses, fish and less salt, fried food and sweets"
          },
          {
            "label": "",
            "text": "Take every medicine exactly as prescribed, especially blood thinners and cholesterol medicines"
          },
          {
            "label": "",
            "text": "Keep blood sugar and blood pressure under control"
          },
          {
            "label": "",
            "text": "Stop all tobacco, permanently"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Returning to normal life",
        "content": "Desk work: often after 6 to 8 weeks Physical work: usually later, as advised Sexual activity: usually when you can climb two flights of stairs comfortably, typically after a few weeks Air travel: discuss timing with your surgeon",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Desk work: often after 6 to 8 weeks"
          },
          {
            "label": "",
            "text": "Physical work: usually later, as advised"
          },
          {
            "label": "",
            "text": "Sexual activity: usually when you can climb two flights of stairs comfortably, typically after a few weeks"
          },
          {
            "label": "",
            "text": "Air travel: discuss timing with your surgeon"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Warning signs: contact your team urgently",
        "content": "Fever, chills or wound discharge Chest pain different from wound soreness Increasing breathlessness or swelling of the legs Rapid or irregular heartbeat Fainting",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Fever, chills or wound discharge"
          },
          {
            "label": "",
            "text": "Chest pain different from wound soreness"
          },
          {
            "label": "",
            "text": "Increasing breathlessness or swelling of the legs"
          },
          {
            "label": "",
            "text": "Rapid or irregular heartbeat"
          },
          {
            "label": "",
            "text": "Fainting"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "How long does full recovery take?",
        "a": "Most people feel close to normal by about 3 months, though tiredness can last longer."
      },
      {
        "q": "Why do I feel emotional after surgery?",
        "a": "Mood changes are common after major surgery. They usually ease, but tell your doctor if they persist."
      },
      {
        "q": "Is cardiac rehab really necessary?",
        "a": "Yes. It improves recovery, confidence and long-term heart health."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Life After Heart Surgery: Recovery and Precautions (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Life After Heart Surgery: Recovery and Precautions adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-011",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "understanding-cancer-how-does-it-develop",
    "title": "Understanding Cancer: How Does It Develop?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Cancer is not one disease but a group of more than 100 diseases. What they share is that some of the body's cells start growing out of control. Understanding how this happens can make a diagnosis less frightening and treatment easier to follow.",
    "diagram": {
      "title": "From normal cell to cancer",
      "steps": [
        {
          "number": "1",
          "title": "Normal cell",
          "description": "Grows and divides in a controlled way"
        },
        {
          "number": "2",
          "title": "DNA damage",
          "description": "Changes in genes that control growth"
        },
        {
          "number": "3",
          "title": "Uncontrolled growth",
          "description": "Damaged cells keep dividing"
        },
        {
          "number": "4",
          "title": "Tumour and spread",
          "description": "Cells may invade nearby tissue and travel elsewhere"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "Your body is made of trillions of cells. Normally they grow, divide and die in an orderly way, guided by instructions in their genes . Cancer begins when changes (mutations) in these genes cause cells to: Over time, these abnormal cells can form a lump called a tumour . Keep dividing when they should stop Ignore signals to die Avoid detection by the immune system",
        "paragraphs": [
          "Your body is made of trillions of cells. Normally they grow, divide and die in an orderly way, guided by instructions in their genes . Cancer begins when changes (mutations) in these genes cause cells to:",
          "Over time, these abnormal cells can form a lump called a tumour ."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Keep dividing when they should stop"
          },
          {
            "label": "",
            "text": "Ignore signals to die"
          },
          {
            "label": "",
            "text": "Avoid detection by the immune system"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Benign vs malignant",
        "content": "Blood cancers such as leukaemia usually do not form solid lumps. Instead, abnormal cells build up in the blood and bone marrow. Benign tumours grow but do not invade nearby tissue or spread. They are not cancer, though some still need treatment. Malignant tumours are cancerous. They can invade surrounding tissue and spread through the blood or lymph system to other parts of the body. This spread is called metastasis .",
        "paragraphs": [
          "Blood cancers such as leukaemia usually do not form solid lumps. Instead, abnormal cells build up in the blood and bone marrow."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Benign tumours grow but do not invade nearby tissue or spread. They are not cancer, though some still need treatment."
          },
          {
            "label": "",
            "text": "Malignant tumours are cancerous. They can invade surrounding tissue and spread through the blood or lymph system to other parts of the body. This spread is called metastasis ."
          }
        ],
        "callouts": []
      },
      {
        "heading": "Why do gene changes happen?",
        "content": "Most cancers develop from a combination of factors over many years: Only about 5 to 10 percent of cancers are strongly inherited. Ageing: cells accumulate changes with time Tobacco: smoking and chewing tobacco cause many cancers of the mouth, throat, lung and more Alcohol Infections: such as HPV (cervical cancer), hepatitis B and C (liver cancer) and H. pylori (stomach cancer) Obesity and inactivity Radiation and certain chemicals Inherited gene changes: for example BRCA genes, which raise breast and ovarian cancer risk",
        "paragraphs": [
          "Most cancers develop from a combination of factors over many years:",
          "Only about 5 to 10 percent of cancers are strongly inherited."
        ],
        "bullets": [
          {
            "label": "Ageing:",
            "text": "cells accumulate changes with time"
          },
          {
            "label": "Tobacco:",
            "text": "smoking and chewing tobacco cause many cancers of the mouth, throat, lung and more"
          },
          {
            "label": "",
            "text": "Alcohol"
          },
          {
            "label": "Infections:",
            "text": "such as HPV (cervical cancer), hepatitis B and C (liver cancer) and H. pylori (stomach cancer)"
          },
          {
            "label": "",
            "text": "Obesity and inactivity"
          },
          {
            "label": "",
            "text": "Radiation and certain chemicals"
          },
          {
            "label": "Inherited gene changes:",
            "text": "for example BRCA genes, which raise breast and ovarian cancer risk"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Can cancer be prevented?",
        "content": "Not all cancers can be prevented, but you can lower your risk by: Avoiding all tobacco and limiting alcohol Staying active and keeping a healthy weight Getting vaccinated against HPV and hepatitis B Attending recommended screening tests",
        "paragraphs": [
          "Not all cancers can be prevented, but you can lower your risk by:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Avoiding all tobacco and limiting alcohol"
          },
          {
            "label": "",
            "text": "Staying active and keeping a healthy weight"
          },
          {
            "label": "",
            "text": "Getting vaccinated against HPV and hepatitis B"
          },
          {
            "label": "",
            "text": "Attending recommended screening tests"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Consult a doctor about unexplained symptoms that last more than a few weeks, or if several close relatives have had cancer, especially at a young age.",
    "faqs": [
      {
        "q": "Is cancer contagious?",
        "a": "No. Cancer cannot spread from person to person, though some infections that raise cancer risk can."
      },
      {
        "q": "If my parent had cancer, will I get it?",
        "a": "Not necessarily. Most cancers are not inherited, but a strong family history may justify genetic counselling."
      },
      {
        "q": "Does a lump always mean cancer?",
        "a": "No. Most lumps are benign, but any new or growing lump should be checked."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Cancer: How Does It Develop? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Cancer: How Does It Develop? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-012",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "early-warning-signs-of-cancer",
    "title": "Early Warning Signs of Cancer",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Cancer is most treatable when it is found early. Many early symptoms are caused by less serious conditions, but symptoms that are new, unexplained and lasting should always be checked.",
    "diagram": null,
    "sections": [
      {
        "heading": "General warning signs",
        "content": "Unexplained weight loss of 5 kg or more without trying Persistent tiredness that rest does not relieve Fever or night sweats without an obvious infection Pain that is new, persistent and unexplained",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Unexplained weight loss of 5 kg or more without trying"
          },
          {
            "label": "",
            "text": "Persistent tiredness that rest does not relieve"
          },
          {
            "label": "",
            "text": "Fever or night sweats without an obvious infection"
          },
          {
            "label": "",
            "text": "Pain that is new, persistent and unexplained"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Signs linked to specific areas",
        "content": "A lump or swelling in the breast, neck, armpit, groin or testicle A sore that does not heal , especially in the mouth, or white or red patches inside the mouth A change in bowel habits lasting more than a few weeks, or blood in the stool Blood in urine Unusual bleeding , such as bleeding after menopause or between periods A persistent cough or hoarse voice lasting more than three weeks, or coughing up blood Difficulty swallowing or persistent indigestion A mole that changes in size, shape or colour Frequent infections, easy bruising or bleeding gums , which can point to blood cancers",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "A lump or swelling in the breast, neck, armpit, groin or testicle"
          },
          {
            "label": "",
            "text": "A sore that does not heal , especially in the mouth, or white or red patches inside the mouth"
          },
          {
            "label": "",
            "text": "A change in bowel habits lasting more than a few weeks, or blood in the stool"
          },
          {
            "label": "",
            "text": "Blood in urine"
          },
          {
            "label": "",
            "text": "Unusual bleeding , such as bleeding after menopause or between periods"
          },
          {
            "label": "",
            "text": "A persistent cough or hoarse voice lasting more than three weeks, or coughing up blood"
          },
          {
            "label": "",
            "text": "Difficulty swallowing or persistent indigestion"
          },
          {
            "label": "",
            "text": "A mole that changes in size, shape or colour"
          },
          {
            "label": "",
            "text": "Frequent infections, easy bruising or bleeding gums , which can point to blood cancers"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The three-week rule",
        "content": "A useful guide: if a symptom is new, unexplained and has lasted three weeks or more , see a doctor. Do not wait for it to become painful. Many cancers cause no pain in early stages.",
        "paragraphs": [
          "A useful guide: if a symptom is new, unexplained and has lasted three weeks or more , see a doctor. Do not wait for it to become painful. Many cancers cause no pain in early stages."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Screening: finding cancer before symptoms",
        "content": "Screening tests can detect some cancers before any symptoms appear: Your doctor will advise which tests suit your age, sex and risk.",
        "paragraphs": [
          "Screening tests can detect some cancers before any symptoms appear:",
          "Your doctor will advise which tests suit your age, sex and risk."
        ],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Cancer",
            "Common screening test"
          ],
          "rows": [
            [
              "Breast",
              "Mammogram"
            ],
            [
              "Cervical",
              "Pap smear or HPV test"
            ],
            [
              "Colorectal",
              "Stool test or colonoscopy"
            ],
            [
              "Oral",
              "Visual mouth examination, especially for tobacco users"
            ],
            [
              "Lung",
              "Low-dose CT for selected heavy smokers"
            ]
          ]
        }
      },
      {
        "heading": "Who is at higher risk?",
        "content": "Tobacco and heavy alcohol users People over 50 Those with a strong family history of cancer People with long-term infections such as hepatitis B or C",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Tobacco and heavy alcohol users"
          },
          {
            "label": "",
            "text": "People over 50"
          },
          {
            "label": "",
            "text": "Those with a strong family history of cancer"
          },
          {
            "label": "",
            "text": "People with long-term infections such as hepatitis B or C"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See your doctor promptly for any of the signs above. If tests suggest cancer, an oncologist will plan further evaluation.",
    "faqs": [
      {
        "q": "Does having a symptom mean I have cancer?",
        "a": "Usually not. Most of these symptoms have other causes, but checking early is always worthwhile."
      },
      {
        "q": "Is cancer always painful?",
        "a": "No. Early cancer is often painless, which is why painless lumps should still be checked."
      },
      {
        "q": "At what age should screening start?",
        "a": "It depends on the cancer and your risk. Ask your doctor for a personalised plan."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Early Warning Signs of Cancer (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Early Warning Signs of Cancer adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-013",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "understanding-the-different-stages-of-cancer",
    "title": "Understanding the Different Stages of Cancer",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "After a cancer diagnosis, one of the first things your doctor works out is the stage . Staging describes how large the cancer is and whether it has spread. It helps doctors choose the best treatment and estimate the outlook.",
    "diagram": {
      "title": "How cancer is staged",
      "steps": [
        {
          "number": "1",
          "title": "T: Tumour",
          "description": "Size and how far it has grown locally"
        },
        {
          "number": "2",
          "title": "N: Nodes",
          "description": "Whether lymph nodes are involved"
        },
        {
          "number": "3",
          "title": "M: Metastasis",
          "description": "Whether it has spread to distant organs"
        },
        {
          "number": "4",
          "title": "Overall stage",
          "description": "Combined into stage 0 to IV"
        }
      ]
    },
    "sections": [
      {
        "heading": "Why staging matters",
        "content": "It guides the treatment plan It helps predict the likely outcome It allows doctors worldwide to compare results and use the same treatment guidelines It decides eligibility for some clinical trials",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "It guides the treatment plan"
          },
          {
            "label": "",
            "text": "It helps predict the likely outcome"
          },
          {
            "label": "",
            "text": "It allows doctors worldwide to compare results and use the same treatment guidelines"
          },
          {
            "label": "",
            "text": "It decides eligibility for some clinical trials"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The TNM system",
        "content": "Most solid cancers are staged using the TNM system: T (Tumour): the size of the main tumour and how far it has grown into nearby tissue N (Nodes): whether cancer has reached nearby lymph nodes M (Metastasis): whether cancer has spread to distant organs, such as the liver, lungs, bones or brain",
        "paragraphs": [
          "Most solid cancers are staged using the TNM system:"
        ],
        "bullets": [
          {
            "label": "T (Tumour):",
            "text": "the size of the main tumour and how far it has grown into nearby tissue"
          },
          {
            "label": "N (Nodes):",
            "text": "whether cancer has reached nearby lymph nodes"
          },
          {
            "label": "M (Metastasis):",
            "text": "whether cancer has spread to distant organs, such as the liver, lungs, bones or brain"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Stages 0 to IV",
        "content": "Each cancer type has its own detailed staging rules, so \"stage II breast cancer\" and \"stage II lung cancer\" mean different things.",
        "paragraphs": [
          "Each cancer type has its own detailed staging rules, so \"stage II breast cancer\" and \"stage II lung cancer\" mean different things."
        ],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Stage",
            "What it generally means"
          ],
          "rows": [
            [
              "Stage 0",
              "Abnormal cells present but not invading (carcinoma in situ)"
            ],
            [
              "Stage I",
              "Small cancer, limited to where it started"
            ],
            [
              "Stage II",
              "Larger, or with limited spread nearby"
            ],
            [
              "Stage III",
              "Spread to nearby tissue or lymph nodes"
            ],
            [
              "Stage IV",
              "Spread to distant organs (metastatic cancer)"
            ]
          ]
        }
      },
      {
        "heading": "Stage is not the same as grade",
        "content": "Grade describes how abnormal the cancer cells look under a microscope. High-grade cancers tend to grow faster. Both stage and grade, along with biomarkers (special markers on the cancer cells), shape treatment.",
        "paragraphs": [
          "Grade describes how abnormal the cancer cells look under a microscope. High-grade cancers tend to grow faster. Both stage and grade, along with biomarkers (special markers on the cancer cells), shape treatment."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How is staging done?",
        "content": "Blood cancers such as leukaemia and lymphoma use different staging systems. Physical examination Imaging: CT, MRI, PET-CT, ultrasound or bone scan Biopsy: a sample of tissue examined in the lab Sometimes surgery, where removed lymph nodes are tested",
        "paragraphs": [
          "Blood cancers such as leukaemia and lymphoma use different staging systems."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Physical examination"
          },
          {
            "label": "",
            "text": "Imaging: CT, MRI, PET-CT, ultrasound or bone scan"
          },
          {
            "label": "",
            "text": "Biopsy: a sample of tissue examined in the lab"
          },
          {
            "label": "",
            "text": "Sometimes surgery, where removed lymph nodes are tested"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Does stage IV mean nothing can be done?",
        "content": "No. Many stage IV cancers can be controlled for long periods with modern treatments such as targeted therapy and immunotherapy. Treatment can also relieve symptoms and improve quality of life.",
        "paragraphs": [
          "No. Many stage IV cancers can be controlled for long periods with modern treatments such as targeted therapy and immunotherapy. Treatment can also relieve symptoms and improve quality of life."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Ask your oncologist to explain your stage, grade and biomarkers, and what they mean for your treatment.",
    "faqs": [
      {
        "q": "Can the stage change over time?",
        "a": "The original stage stays the same for records, but doctors describe any later growth or spread separately."
      },
      {
        "q": "Is a higher stage always worse?",
        "a": "Generally yes, but outlook also depends on cancer type, biomarkers and response to treatment."
      },
      {
        "q": "Why do I need a PET-CT?",
        "a": "It helps detect spread throughout the body and supports accurate staging for many cancers."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding the Different Stages of Cancer (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding the Different Stages of Cancer adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-014",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "chemotherapy-what-should-patients-expect",
    "title": "Chemotherapy: What Should Patients Expect?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Chemotherapy, often called chemo, uses medicines to destroy cancer cells or stop them from growing. For many patients it is a key part of treatment. Knowing what to expect can make it feel much more manageable.",
    "diagram": {
      "title": "A typical chemotherapy cycle",
      "steps": [
        {
          "number": "1",
          "title": "Check-up",
          "description": "Blood tests and doctor review"
        },
        {
          "number": "2",
          "title": "Treatment day",
          "description": "Drugs given by drip or tablets"
        },
        {
          "number": "3",
          "title": "Rest period",
          "description": "Body recovers for 1 to 3 weeks"
        },
        {
          "number": "4",
          "title": "Next cycle",
          "description": "Repeated as planned"
        }
      ]
    },
    "sections": [
      {
        "heading": "How does it work?",
        "content": "Chemotherapy drugs target cells that divide quickly, which is a feature of cancer cells. Because some healthy cells also divide quickly, such as those in hair roots, the mouth lining and bone marrow, chemo can cause side effects.",
        "paragraphs": [
          "Chemotherapy drugs target cells that divide quickly, which is a feature of cancer cells. Because some healthy cells also divide quickly, such as those in hair roots, the mouth lining and bone marrow, chemo can cause side effects."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Why is chemo given?",
        "content": "To cure the cancer, alone or with other treatments Before surgery (neoadjuvant) to shrink a tumour After surgery (adjuvant) to destroy remaining cancer cells To control advanced cancer and relieve symptoms",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "To cure the cancer, alone or with other treatments"
          },
          {
            "label": "",
            "text": "Before surgery (neoadjuvant) to shrink a tumour"
          },
          {
            "label": "",
            "text": "After surgery (adjuvant) to destroy remaining cancer cells"
          },
          {
            "label": "",
            "text": "To control advanced cancer and relieve symptoms"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How is it given?",
        "content": "Chemo is given in cycles : a treatment period followed by a rest period. A full course may last a few months. Through a drip into a vein (IV), usually in a day-care unit As tablets taken at home Through a port or PICC line, a small device that protects your veins during long treatment",
        "paragraphs": [
          "Chemo is given in cycles : a treatment period followed by a rest period. A full course may last a few months."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Through a drip into a vein (IV), usually in a day-care unit"
          },
          {
            "label": "",
            "text": "As tablets taken at home"
          },
          {
            "label": "",
            "text": "Through a port or PICC line, a small device that protects your veins during long treatment"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common side effects",
        "content": "Side effects vary by drug and person, and most are temporary: Tiredness Nausea and vomiting, now well controlled with modern medicines Hair loss with some drugs; hair usually grows back Mouth sores and taste changes Low blood counts , raising the risk of infection, anaemia and bleeding Numbness or tingling in hands and feet with certain drugs",
        "paragraphs": [
          "Side effects vary by drug and person, and most are temporary:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Tiredness"
          },
          {
            "label": "",
            "text": "Nausea and vomiting, now well controlled with modern medicines"
          },
          {
            "label": "",
            "text": "Hair loss with some drugs; hair usually grows back"
          },
          {
            "label": "",
            "text": "Mouth sores and taste changes"
          },
          {
            "label": "",
            "text": "Low blood counts , raising the risk of infection, anaemia and bleeding"
          },
          {
            "label": "",
            "text": "Numbness or tingling in hands and feet with certain drugs"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Tips for treatment days",
        "content": "Eat a light meal beforehand Bring water, a snack and something to read Wear comfortable clothes with easy arm access Arrange for someone to take you home after early sessions",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Eat a light meal beforehand"
          },
          {
            "label": "",
            "text": "Bring water, a snack and something to read"
          },
          {
            "label": "",
            "text": "Wear comfortable clothes with easy arm access"
          },
          {
            "label": "",
            "text": "Arrange for someone to take you home after early sessions"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Looking after yourself",
        "content": "Wash hands often and avoid crowds when counts are low Eat small, frequent, protein-rich meals Keep your mouth clean with a soft brush Stay as active as you comfortably can",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Wash hands often and avoid crowds when counts are low"
          },
          {
            "label": "",
            "text": "Eat small, frequent, protein-rich meals"
          },
          {
            "label": "",
            "text": "Keep your mouth clean with a soft brush"
          },
          {
            "label": "",
            "text": "Stay as active as you comfortably can"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Fever of 38°C (100.4°F) or above. This can be a medical emergency during chemo. Chills, breathlessness or chest pain Vomiting that stops you keeping fluids down Unusual bleeding or bruising",
    "faqs": [
      {
        "q": "Will I definitely lose my hair?",
        "a": "Not always. It depends on the drugs. Your team can tell you what to expect."
      },
      {
        "q": "Can I work during chemotherapy?",
        "a": "Many people continue working with adjustments, depending on how they feel."
      },
      {
        "q": "Is chemo painful?",
        "a": "The infusion itself is usually painless, apart from the needle or port access."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Chemotherapy: What Should Patients Expect? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Chemotherapy: What Should Patients Expect? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-015",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "radiation-therapy-explained",
    "title": "Radiation Therapy Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Radiation therapy, or radiotherapy, uses carefully targeted high-energy rays to destroy cancer cells. About half of all cancer patients receive radiation at some point. It is painless while it is being given, much like having an X-ray.",
    "diagram": {
      "title": "Your radiation therapy journey",
      "steps": [
        {
          "number": "1",
          "title": "Consultation",
          "description": "Radiation oncologist plans the approach"
        },
        {
          "number": "2",
          "title": "Simulation",
          "description": "CT scan in treatment position; marks made"
        },
        {
          "number": "3",
          "title": "Planning",
          "description": "Team designs precise beams"
        },
        {
          "number": "4",
          "title": "Treatment",
          "description": "Daily sessions of a few minutes"
        }
      ]
    },
    "sections": [
      {
        "heading": "How does it work?",
        "content": "Radiation damages the DNA inside cancer cells so they can no longer grow and divide. Healthy cells are also affected but are better able to repair themselves. Modern machines shape the beam precisely to protect nearby organs.",
        "paragraphs": [
          "Radiation damages the DNA inside cancer cells so they can no longer grow and divide. Healthy cells are also affected but are better able to repair themselves. Modern machines shape the beam precisely to protect nearby organs."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Why is it used?",
        "content": "To cure cancer, alone or with surgery or chemotherapy Before surgery to shrink a tumour After surgery to destroy any remaining cancer cells To relieve symptoms such as pain from cancer in the bones",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "To cure cancer, alone or with surgery or chemotherapy"
          },
          {
            "label": "",
            "text": "Before surgery to shrink a tumour"
          },
          {
            "label": "",
            "text": "After surgery to destroy any remaining cancer cells"
          },
          {
            "label": "",
            "text": "To relieve symptoms such as pain from cancer in the bones"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Main types",
        "content": "External beam radiation: delivered by a machine called a linear accelerator. Advanced techniques include IMRT , IGRT and VMAT , which shape and guide the beam very accurately. Stereotactic radiation (SRS/SBRT): very high doses delivered in a few sessions to small targets. CyberKnife is one such system. Brachytherapy: a radioactive source is placed inside or next to the tumour, commonly used for cervical and prostate cancer.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "External beam radiation:",
            "text": "delivered by a machine called a linear accelerator. Advanced techniques include"
          },
          {
            "label": "",
            "text": "IMRT , IGRT and VMAT , which shape and guide the beam very accurately."
          },
          {
            "label": "Stereotactic radiation (SRS/SBRT):",
            "text": "very high doses delivered in a few sessions to small targets. CyberKnife is one such system."
          },
          {
            "label": "Brachytherapy:",
            "text": "a radioactive source is placed inside or next to the tumour, commonly used for cervical and prostate cancer."
          }
        ],
        "callouts": []
      },
      {
        "heading": "What happens during treatment?",
        "content": "You will not feel the radiation, and external beam treatment does not make you radioactive. 1. Planning scan (simulation): you lie in the treatment position while a CT scan is taken. Small skin marks or a mask may be used to keep you in exactly the same position each day. 2. Planning: physicists and doctors design the beams, which can take several days. 3. Treatment sessions: usually daily on weekdays for one to seven weeks. Each session takes 10 to 20 minutes, mostly for positioning.",
        "paragraphs": [
          "You will not feel the radiation, and external beam treatment does not make you radioactive."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Planning scan (simulation): you lie in the treatment position while a CT scan is taken. Small skin marks or a mask may be used to keep you in exactly the same position each day."
          },
          {
            "number": 2,
            "text": "Planning: physicists and doctors design the beams, which can take several days."
          },
          {
            "number": 3,
            "text": "Treatment sessions: usually daily on weekdays for one to seven weeks. Each session takes 10 to 20 minutes, mostly for positioning."
          }
        ]
      },
      {
        "heading": "Side effects",
        "content": "Side effects mostly affect the area being treated and build up gradually: Most settle within a few weeks after treatment ends. Tiredness Skin redness or dryness in the treated area Mouth soreness and difficulty swallowing (head and neck) Loose stools or bladder irritation (abdomen and pelvis)",
        "paragraphs": [
          "Side effects mostly affect the area being treated and build up gradually:",
          "Most settle within a few weeks after treatment ends."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Tiredness"
          },
          {
            "label": "",
            "text": "Skin redness or dryness in the treated area"
          },
          {
            "label": "",
            "text": "Mouth soreness and difficulty swallowing (head and neck)"
          },
          {
            "label": "",
            "text": "Loose stools or bladder irritation (abdomen and pelvis)"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Caring for your skin",
        "content": "Wash gently with mild soap and lukewarm water Avoid scrubbing, perfumes and tight clothing over the area Use only creams recommended by your team",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Wash gently with mild soap and lukewarm water"
          },
          {
            "label": "",
            "text": "Avoid scrubbing, perfumes and tight clothing over the area"
          },
          {
            "label": "",
            "text": "Use only creams recommended by your team"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "A radiation oncologist will advise whether radiation is right for your cancer and which technique suits you best.",
    "faqs": [
      {
        "q": "Is radiation therapy painful?",
        "a": "No. You will not feel the beam during treatment."
      },
      {
        "q": "Can I be around children after treatment?",
        "a": "Yes, after external beam radiation. Some types of internal radiation need temporary precautions, which your team will explain."
      },
      {
        "q": "Will I lose my hair?",
        "a": "Only if the head is being treated."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Radiation Therapy Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Radiation Therapy Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-016",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "immunotherapy-how-does-it-help-fight-cancer",
    "title": "Immunotherapy: How Does It Help Fight Cancer?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Your immune system protects you by finding and destroying harmful cells. Cancer cells, however, often find ways to hide from it. Immunotherapy is a group of treatments that help your own immune system recognise and attack cancer.",
    "diagram": {
      "title": "How checkpoint inhibitors work",
      "steps": [
        {
          "number": "1",
          "title": "Cancer hides",
          "description": "Cancer cells use \"brakes\" to switch off immune cells"
        },
        {
          "number": "2",
          "title": "Drug given",
          "description": "Checkpoint inhibitor blocks those brakes"
        },
        {
          "number": "3",
          "title": "Immune cells wake up",
          "description": "T-cells recognise the cancer again"
        },
        {
          "number": "4",
          "title": "Attack",
          "description": "Immune system destroys cancer cells"
        }
      ]
    },
    "sections": [
      {
        "heading": "How does it work?",
        "content": "Immune cells called T-cells have built-in \"brakes\", known as checkpoints, that stop them from attacking healthy tissue. Some cancers press these brakes to switch T-cells off. Checkpoint inhibitors , the most widely used immunotherapy drugs, release the brakes so T-cells can attack the cancer again.",
        "paragraphs": [
          "Immune cells called T-cells have built-in \"brakes\", known as checkpoints, that stop them from attacking healthy tissue. Some cancers press these brakes to switch T-cells off. Checkpoint inhibitors , the most widely used immunotherapy drugs, release the brakes so T-cells can attack the cancer again."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Types of immunotherapy",
        "content": "Checkpoint inhibitors: given as an infusion every few weeks CAR-T cell therapy: a patient's own T-cells are modified in a lab to target certain blood cancers Cancer vaccines: such as BCG for early bladder cancer Other immune-based treatments: including some monoclonal antibodies",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Checkpoint inhibitors:",
            "text": "given as an infusion every few weeks"
          },
          {
            "label": "CAR-T cell therapy:",
            "text": "a patient's own T-cells are modified in a lab to target certain blood cancers"
          },
          {
            "label": "Cancer vaccines:",
            "text": "such as BCG for early bladder cancer"
          },
          {
            "label": "Other immune-based treatments:",
            "text": "including some monoclonal antibodies"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Which cancers is it used for?",
        "content": "Immunotherapy has become part of standard treatment for several cancers, including some types of: It does not work for every patient or every cancer. Doctors may test the tumour for biomarkers such as PD-L1, MSI or tumour mutational burden to judge whether it is likely to help. Melanoma Lung cancer Kidney and bladder cancer Head and neck cancer Some stomach, liver, cervical and colorectal cancers Hodgkin lymphoma",
        "paragraphs": [
          "Immunotherapy has become part of standard treatment for several cancers, including some types of:",
          "It does not work for every patient or every cancer. Doctors may test the tumour for biomarkers such as PD-L1, MSI or tumour mutational burden to judge whether it is likely to help."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Melanoma"
          },
          {
            "label": "",
            "text": "Lung cancer"
          },
          {
            "label": "",
            "text": "Kidney and bladder cancer"
          },
          {
            "label": "",
            "text": "Head and neck cancer"
          },
          {
            "label": "",
            "text": "Some stomach, liver, cervical and colorectal cancers"
          },
          {
            "label": "",
            "text": "Hodgkin lymphoma"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How is it different from chemotherapy?",
        "content": "Chemotherapy attacks dividing cells directly. Immunotherapy works through your immune system, so its effects can take longer to appear and may last longer in people who respond.",
        "paragraphs": [
          "Chemotherapy attacks dividing cells directly. Immunotherapy works through your immune system, so its effects can take longer to appear and may last longer in people who respond."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Side effects",
        "content": "Because immunotherapy activates the immune system, it can sometimes attack healthy organs. Possible side effects include: Most are mild and manageable, but some can be serious if not treated early. Side effects can appear even months after treatment. Tiredness Skin rash and itching Diarrhoea (colitis) Cough or breathlessness (lung inflammation) Thyroid or other hormone problems Liver inflammation",
        "paragraphs": [
          "Because immunotherapy activates the immune system, it can sometimes attack healthy organs. Possible side effects include:",
          "Most are mild and manageable, but some can be serious if not treated early. Side effects can appear even months after treatment."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Tiredness"
          },
          {
            "label": "",
            "text": "Skin rash and itching"
          },
          {
            "label": "",
            "text": "Diarrhoea (colitis)"
          },
          {
            "label": "",
            "text": "Cough or breathlessness (lung inflammation)"
          },
          {
            "label": "",
            "text": "Thyroid or other hormone problems"
          },
          {
            "label": "",
            "text": "Liver inflammation"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When should you call your team?",
        "content": "Report any new diarrhoea, breathlessness, cough, severe tiredness, rash or yellowing of the eyes promptly. Tell any doctor treating you that you have received immunotherapy.",
        "paragraphs": [
          "Report any new diarrhoea, breathlessness, cough, severe tiredness, rash or yellowing of the eyes promptly. Tell any doctor treating you that you have received immunotherapy."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Does immunotherapy work for everyone?",
        "a": "No. Responses vary widely. Your oncologist will explain your likely benefit."
      },
      {
        "q": "Is immunotherapy given alone?",
        "a": "Sometimes. It is also often combined with chemotherapy or other treatments."
      },
      {
        "q": "How long is treatment?",
        "a": "Often up to one or two years, depending on the cancer and response."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Immunotherapy: How Does It Help Fight Cancer? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Immunotherapy: How Does It Help Fight Cancer? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-017",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "cyberknife-understanding-precision-radiation-treatment",
    "title": "CyberKnife: Understanding Precision Radiation Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Despite its name, CyberKnife does not use a knife and involves no cuts. It is a robotic radiation system that delivers highly focused, high-dose radiation to tumours with great accuracy, usually in just one to five sessions.",
    "diagram": {
      "title": "CyberKnife treatment steps",
      "steps": [
        {
          "number": "1",
          "title": "Imaging",
          "description": "CT and MRI map the tumour"
        },
        {
          "number": "2",
          "title": "Planning",
          "description": "Hundreds of beam angles calculated"
        },
        {
          "number": "3",
          "title": "Treatment",
          "description": "Robot delivers beams; tracks movement"
        },
        {
          "number": "4",
          "title": "Follow-up",
          "description": "Scans check response over months"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "CyberKnife is a form of stereotactic radiation therapy : A linear accelerator mounted on a robotic arm moves around you, sending many narrow beams from different angles. The beams meet at the tumour, delivering a strong dose there while sparing nearby healthy tissue. SRS (stereotactic radiosurgery) when used in the brain SBRT (stereotactic body radiation therapy) when used elsewhere",
        "paragraphs": [
          "CyberKnife is a form of stereotactic radiation therapy :",
          "A linear accelerator mounted on a robotic arm moves around you, sending many narrow beams from different angles. The beams meet at the tumour, delivering a strong dose there while sparing nearby healthy tissue."
        ],
        "bullets": [
          {
            "label": "",
            "text": "SRS (stereotactic radiosurgery) when used in the brain"
          },
          {
            "label": "",
            "text": "SBRT (stereotactic body radiation therapy) when used elsewhere"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What makes it different?",
        "content": "Real-time tracking: the system adjusts for small movements, including breathing No rigid head frame for brain treatment; a soft mesh mask is used instead Fewer sessions than conventional radiation Usually done as an outpatient , with no anaesthesia",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Real-time tracking:",
            "text": "the system adjusts for small movements, including breathing"
          },
          {
            "label": "",
            "text": "No rigid head frame for brain treatment; a soft mesh mask is used instead"
          },
          {
            "label": "",
            "text": "Fewer sessions than conventional radiation"
          },
          {
            "label": "",
            "text": "Usually done as an outpatient , with no anaesthesia"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What can it treat?",
        "content": "CyberKnife may be considered for selected: It is generally suited to tumours that are small and well defined . It is not suitable for every cancer, and your team will compare it with surgery and other forms of radiation. Brain tumours and brain metastases Spine and spinal cord tumours Early-stage lung cancer, especially when surgery is unsuitable Prostate cancer Liver, pancreas and kidney tumours Some benign conditions, such as acoustic neuroma and trigeminal neuralgia",
        "paragraphs": [
          "CyberKnife may be considered for selected:",
          "It is generally suited to tumours that are small and well defined . It is not suitable for every cancer, and your team will compare it with surgery and other forms of radiation."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Brain tumours and brain metastases"
          },
          {
            "label": "",
            "text": "Spine and spinal cord tumours"
          },
          {
            "label": "",
            "text": "Early-stage lung cancer, especially when surgery is unsuitable"
          },
          {
            "label": "",
            "text": "Prostate cancer"
          },
          {
            "label": "",
            "text": "Liver, pancreas and kidney tumours"
          },
          {
            "label": "",
            "text": "Some benign conditions, such as acoustic neuroma and trigeminal neuralgia"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What should you expect?",
        "content": "1. Imaging: CT and often MRI scans are used for planning. Small markers may be placed near some body tumours to help tracking. 2. Planning: the team calculates the beam pattern over a few days. 3. Treatment: you lie still on a couch while the robot moves around you. Each session typically lasts 30 to 90 minutes. 4. Going home: most people return home the same day.",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Imaging: CT and often MRI scans are used for planning. Small markers may be placed near some body tumours to help tracking."
          },
          {
            "number": 2,
            "text": "Planning: the team calculates the beam pattern over a few days."
          },
          {
            "number": 3,
            "text": "Treatment: you lie still on a couch while the robot moves around you. Each session typically lasts 30 to 90 minutes."
          },
          {
            "number": 4,
            "text": "Going home: most people return home the same day."
          }
        ]
      },
      {
        "heading": "Side effects",
        "content": "Side effects depend on the area treated and are often mild, such as tiredness, temporary swelling or local irritation. Your team will explain specific risks for your treatment site.",
        "paragraphs": [
          "Side effects depend on the area treated and are often mild, such as tiredness, temporary swelling or local irritation. Your team will explain specific risks for your treatment site."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Ask your radiation oncologist whether stereotactic treatment is an option, particularly if surgery is risky or the tumour is in a hard-to-reach location.",
    "faqs": [
      {
        "q": "Is CyberKnife surgery?",
        "a": "No. It is a type of radiation therapy. \"Radiosurgery\" refers to its precision, not an operation."
      },
      {
        "q": "Does it hurt?",
        "a": "No. The treatment itself is painless."
      },
      {
        "q": "Will the tumour disappear immediately?",
        "a": "No. Tumours respond over weeks to months, which is monitored with follow-up scans."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for CyberKnife: Understanding Precision Radiation Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for CyberKnife: Understanding Precision Radiation Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-018",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "understanding-brain-tumours-and-their-treatment",
    "title": "Understanding Brain Tumours and Their Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A brain tumour is a growth of abnormal cells in or around the brain. Some are benign and slow growing; others are cancerous. Treatment depends on the tumour type, its grade, its location and your overall health. This article focuses on types and how cancer treatments are combined.",
    "diagram": null,
    "sections": [
      {
        "heading": "Primary and secondary tumours",
        "content": "Primary brain tumours start in the brain or its coverings. Secondary tumours (brain metastases) start elsewhere, such as the lung, breast or skin, and spread to the brain. In adults, these are more common than primary tumours.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Primary brain tumours start in the brain or its coverings."
          },
          {
            "label": "",
            "text": "Secondary tumours (brain metastases) start elsewhere, such as the lung, breast or skin, and spread to the brain. In adults, these are more common than primary tumours."
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common types",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Type",
            "What to know"
          ],
          "rows": [
            [
              "Meningioma",
              "Grows from the brain's covering; usually benign"
            ],
            [
              "Glioma",
              "Grows from the brain's support cells; ranges from low to high grade"
            ],
            [
              "Glioblastoma",
              "The most aggressive glioma"
            ],
            [
              "Pituitary tumour",
              "Usually benign; may affect hormones and vision"
            ],
            [
              "Acoustic neuroma",
              "Benign tumour on the hearing nerve"
            ],
            [
              "Medulloblastoma",
              "A tumour seen more often in children"
            ]
          ]
        }
      },
      {
        "heading": "Tumour grade",
        "content": "The World Health Organization grades brain tumours from 1 to 4 . Grade 1 and 2 tumours grow slowly; grade 3 and 4 tumours grow faster and are more likely to come back. Molecular tests on the tumour, such as IDH and MGMT status, now play a major role in diagnosis and treatment planning.",
        "paragraphs": [
          "The World Health Organization grades brain tumours from 1 to 4 . Grade 1 and 2 tumours grow slowly; grade 3 and 4 tumours grow faster and are more likely to come back. Molecular tests on the tumour, such as IDH and MGMT status, now play a major role in diagnosis and treatment planning."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How treatment is planned",
        "content": "Brain tumour care works best with a multidisciplinary team : neurosurgeon, radiation oncologist, medical oncologist, neuroradiologist and pathologist.",
        "paragraphs": [
          "Brain tumour care works best with a multidisciplinary team : neurosurgeon, radiation oncologist, medical oncologist, neuroradiologist and pathologist."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Benign tumours that are small and not causing symptoms may simply be monitored with regular MRI scans. Surgery: to remove as much tumour as safely possible and confirm the diagnosis Radiation therapy: conventional radiation or precise stereotactic treatment such as CyberKnife or Gamma Knife, especially for small tumours and metastases Chemotherapy: for example temozolomide tablets for some gliomas Targeted therapy: for tumours with specific gene changes Supportive medicines: steroids to reduce swelling and medicines to prevent seizures",
        "paragraphs": [
          "Benign tumours that are small and not causing symptoms may simply be monitored with regular MRI scans."
        ],
        "bullets": [
          {
            "label": "Surgery:",
            "text": "to remove as much tumour as safely possible and confirm the diagnosis"
          },
          {
            "label": "Radiation therapy:",
            "text": "conventional radiation or precise stereotactic treatment such as CyberKnife or Gamma"
          },
          {
            "label": "",
            "text": "Knife, especially for small tumours and metastases"
          },
          {
            "label": "Chemotherapy:",
            "text": "for example temozolomide tablets for some gliomas"
          },
          {
            "label": "Targeted therapy:",
            "text": "for tumours with specific gene changes"
          },
          {
            "label": "Supportive medicines:",
            "text": "steroids to reduce swelling and medicines to prevent seizures"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Life during and after treatment",
        "content": "Many patients benefit from rehabilitation, including physiotherapy, speech therapy and help with memory or concentration. Regular follow-up MRI scans check for any regrowth.",
        "paragraphs": [
          "Many patients benefit from rehabilitation, including physiotherapy, speech therapy and help with memory or concentration. Regular follow-up MRI scans check for any regrowth."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "If an MRI shows a brain tumour, ask to be seen by a neuro-oncology team that can review the scans, biopsy results and molecular tests together.",
    "faqs": [
      {
        "q": "Are all brain tumours cancerous?",
        "a": "No. Many, such as most meningiomas, are benign, though they may still need treatment."
      },
      {
        "q": "Can brain tumours be treated without surgery?",
        "a": "Some can be treated with radiation alone or monitored. It depends on type, size and location."
      },
      {
        "q": "Why are molecular tests important?",
        "a": "They help classify the tumour accurately and guide treatment choices."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Brain Tumours and Their Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Brain Tumours and Their Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-019",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "leukaemia-symptoms-diagnosis-and-treatment",
    "title": "Leukaemia: Symptoms, Diagnosis and Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Leukaemia is a cancer of the blood-forming cells in the bone marrow. Instead of making healthy blood cells, the marrow produces large numbers of abnormal white blood cells that crowd out normal ones.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "Bone marrow is the soft tissue inside bones that makes red cells (carry oxygen), white cells (fight infection) and platelets (stop bleeding). In leukaemia, abnormal white cells multiply out of control and do not work properly.",
        "paragraphs": [
          "Bone marrow is the soft tissue inside bones that makes red cells (carry oxygen), white cells (fight infection) and platelets (stop bleeding). In leukaemia, abnormal white cells multiply out of control and do not work properly."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Main types",
        "content": "sometimes need only monitoring at first.",
        "paragraphs": [
          "sometimes need only monitoring at first."
        ],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Type",
            "Speed",
            "Who it usually affects"
          ],
          "rows": [
            [
              "Acute lymphoblastic leukaemia (ALL)",
              "Fast",
              "Most common in children; also adults"
            ],
            [
              "Acute myeloid leukaemia (AML)",
              "Fast",
              "Mostly adults"
            ],
            [
              "Chronic lymphocytic leukaemia (CLL)",
              "Slow",
              "Older adults"
            ],
            [
              "Chronic myeloid leukaemia (CML)",
              "Slow",
              "Adults"
            ],
            [
              "Acute",
              "leukaemias develop quickly and need urgent treatment.",
              "Chronic",
              "leukaemias develop slowly and"
            ]
          ]
        }
      },
      {
        "heading": "Symptoms",
        "content": "Chronic leukaemia is sometimes found by chance on a routine blood test. Frequent or repeated infections and fevers Tiredness, weakness and paleness (anaemia) Easy bruising, bleeding gums, nosebleeds or tiny red spots on the skin Bone or joint pain Swollen lymph nodes, or a swollen tummy from an enlarged spleen or liver Unexplained weight loss and night sweats",
        "paragraphs": [
          "Chronic leukaemia is sometimes found by chance on a routine blood test."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Frequent or repeated infections and fevers"
          },
          {
            "label": "",
            "text": "Tiredness, weakness and paleness (anaemia)"
          },
          {
            "label": "",
            "text": "Easy bruising, bleeding gums, nosebleeds or tiny red spots on the skin"
          },
          {
            "label": "",
            "text": "Bone or joint pain"
          },
          {
            "label": "",
            "text": "Swollen lymph nodes, or a swollen tummy from an enlarged spleen or liver"
          },
          {
            "label": "",
            "text": "Unexplained weight loss and night sweats"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Complete blood count (CBC): often the first clue Peripheral smear: blood cells examined under a microscope Bone marrow biopsy: a sample taken from the hip bone under local anaesthesia Flow cytometry, cytogenetics and molecular tests: identify the exact type and gene changes, which guide treatment",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Complete blood count (CBC):",
            "text": "often the first clue"
          },
          {
            "label": "Peripheral smear:",
            "text": "blood cells examined under a microscope"
          },
          {
            "label": "Bone marrow biopsy:",
            "text": "a sample taken from the hip bone under local anaesthesia"
          },
          {
            "label": "Flow cytometry, cytogenetics and molecular tests:",
            "text": "identify the exact type and gene changes, which guide treatment"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Outcomes have improved greatly, especially for children with ALL and adults with CML. Chemotherapy: the main treatment for acute leukaemias Targeted therapy: for example tablets that transformed the treatment of CML Immunotherapy: including antibody treatments and CAR-T cell therapy for some relapsed B-cell ALL Bone marrow (stem cell) transplant: for higher-risk or relapsed cases Supportive care: blood transfusions, antibiotics and infection prevention",
        "paragraphs": [
          "Outcomes have improved greatly, especially for children with ALL and adults with CML."
        ],
        "bullets": [
          {
            "label": "Chemotherapy:",
            "text": "the main treatment for acute leukaemias"
          },
          {
            "label": "Targeted therapy:",
            "text": "for example tablets that transformed the treatment of CML"
          },
          {
            "label": "Immunotherapy:",
            "text": "including antibody treatments and CAR-T cell therapy for some relapsed B-cell ALL"
          },
          {
            "label": "Bone marrow (stem cell) transplant:",
            "text": "for higher-risk or relapsed cases"
          },
          {
            "label": "Supportive care:",
            "text": "blood transfusions, antibiotics and infection prevention"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a doctor if you have repeated infections, unexplained bruising or bleeding, or persistent fatigue. Abnormal blood counts should be reviewed by a haematologist.",
    "faqs": [
      {
        "q": "Is leukaemia curable?",
        "a": "Many types can be cured or controlled long term, depending on the type, gene changes and response to treatment."
      },
      {
        "q": "Is a bone marrow biopsy painful?",
        "a": "Local anaesthesia is used. Most people feel pressure and brief discomfort."
      },
      {
        "q": "Do all patients need a transplant?",
        "a": "No. Transplant is recommended only for selected patients."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Leukaemia: Symptoms, Diagnosis and Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Leukaemia: Symptoms, Diagnosis and Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-020",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "car-t-cell-therapy-a-new-approach-to-treating-certain-blood-cancers",
    "title": "CAR-T Cell Therapy: A New Approach to Treating Certain Blood Cancers",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "CAR-T cell therapy is a personalised treatment that uses a patient's own immune cells, modified in a laboratory, to find and destroy certain blood cancers. It has given new options to some patients whose cancer returned or did not respond to standard treatment.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "CAR stands for chimeric antigen receptor . T-cells, a type of white blood cell, are collected from the patient and given a new receptor that helps them recognise a specific marker on cancer cells. These \"re-armed\" cells are then returned to the patient as a single infusion. Because it uses living cells, CAR-T is sometimes called a \"living drug\".",
        "paragraphs": [
          "CAR stands for chimeric antigen receptor . T-cells, a type of white blood cell, are collected from the patient and given a new receptor that helps them recognise a specific marker on cancer cells. These \"re-armed\" cells are then returned to the patient as a single infusion.",
          "Because it uses living cells, CAR-T is sometimes called a \"living drug\"."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Which cancers is it approved for?",
        "content": "CAR-T is currently approved only for certain blood cancers , mostly when the cancer has come back (relapsed) or has not responded (refractory) to earlier treatments. Internationally , approved CAR-T products are used for selected cases of: In India , two locally made CAR-T products are approved by the national drug regulator (CDSCO). Both target a marker called CD19: As of 2026, CAR-T for multiple myeloma is not approved in India. Approvals can change, so the current position should always be confirmed with a licensed cell-therapy centre. B-cell acute lymphoblastic leukaemia (B-ALL) Several types of B-cell lymphoma Multiple myeloma Chronic lymphocytic leukaemia (CLL)",
        "paragraphs": [
          "CAR-T is currently approved only for certain blood cancers , mostly when the cancer has come back (relapsed) or has not responded (refractory) to earlier treatments.",
          "Internationally , approved CAR-T products are used for selected cases of:",
          "In India , two locally made CAR-T products are approved by the national drug regulator (CDSCO). Both target a marker called CD19:",
          "As of 2026, CAR-T for multiple myeloma is not approved in India. Approvals can change, so the current position should always be confirmed with a licensed cell-therapy centre."
        ],
        "bullets": [
          {
            "label": "",
            "text": "B-cell acute lymphoblastic leukaemia (B-ALL)"
          },
          {
            "label": "",
            "text": "Several types of B-cell lymphoma"
          },
          {
            "label": "",
            "text": "Multiple myeloma"
          },
          {
            "label": "",
            "text": "Chronic lymphocytic leukaemia (CLL)"
          }
        ],
        "callouts": [],
        "table": {
          "headers": [
            "Product",
            "Approved in India for"
          ],
          "rows": [
            [
              "NexCAR19 (approved 2023)",
              "Relapsed or refractory B-cell non-Hodgkin lymphoma and B-ALL, age 15 and above"
            ],
            [
              "Qartemi (approved 2025)",
              "Relapsed or refractory B-cell non-Hodgkin lymphoma in adults"
            ]
          ]
        }
      },
      {
        "heading": "What CAR-T is not",
        "content": "It is not approved for solid cancers such as breast, lung, colon or brain tumours. Research is ongoing, but these uses are investigational. It is not usually a first treatment. It is not suitable for every patient, even with an approved cancer type.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "It is not approved for solid cancers such as breast, lung, colon or brain tumours. Research is ongoing, but these uses are investigational."
          },
          {
            "label": "",
            "text": "It is not usually a first treatment."
          },
          {
            "label": "",
            "text": "It is not suitable for every patient, even with an approved cancer type."
          }
        ],
        "callouts": []
      },
      {
        "heading": "Why is it a specialised treatment?",
        "content": "CAR-T can cause serious side effects that need close monitoring. It must be given at an authorised centre with a cell-therapy team, facilities to collect cells, and an intensive care unit on site.",
        "paragraphs": [
          "CAR-T can cause serious side effects that need close monitoring. It must be given at an authorised centre with a cell-therapy team, facilities to collect cells, and an intensive care unit on site."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "If you or a family member has a B-cell lymphoma or leukaemia that has relapsed or not responded to treatment, ask your haematologist whether a CAR-T assessment is appropriate.",
    "faqs": [
      {
        "q": "Is CAR-T a cure?",
        "a": "Some patients achieve long-lasting remission, but not all respond, and the cancer can return. Your specialist will explain realistic expectations."
      },
      {
        "q": "Is CAR-T given more than once?",
        "a": "It is usually given as a single infusion."
      },
      {
        "q": "Can CAR-T treat solid tumours?",
        "a": "Not as an approved treatment. Solid-tumour CAR-T is only available in clinical trials."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for CAR-T Cell Therapy: A New Approach to Treating Certain Blood Cancers (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for CAR-T Cell Therapy: A New Approach to Treating Certain Blood Cancers adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-021",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "car-t-cell-therapy-how-does-the-treatment-work",
    "title": "CAR-T Cell Therapy: How Does the Treatment Work?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "CAR-T therapy works by teaching a patient's own immune cells to recognise cancer they previously could not see. This article explains the science in simple terms.",
    "diagram": {
      "title": "How CAR-T cells are made and work",
      "steps": [
        {
          "number": "1",
          "title": "Collect",
          "description": "T-cells removed from blood (apheresis)"
        },
        {
          "number": "2",
          "title": "Engineer",
          "description": "New CAR receptor added in a lab"
        },
        {
          "number": "3",
          "title": "Multiply",
          "description": "Millions of CAR-T cells grown"
        },
        {
          "number": "4",
          "title": "Infuse",
          "description": "Cells return and attack cancer"
        }
      ]
    },
    "sections": [
      {
        "heading": "The problem: cancer hides",
        "content": "T-cells are the immune system's \"soldiers\". They patrol the body and destroy infected or abnormal cells. But many cancer cells look too much like normal cells, so T-cells pass them by.",
        "paragraphs": [
          "T-cells are the immune system's \"soldiers\". They patrol the body and destroy infected or abnormal cells. But many cancer cells look too much like normal cells, so T-cells pass them by."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "The solution: a new receptor",
        "content": "Scientists add a gene to the T-cells that makes them produce a chimeric antigen receptor (CAR) on their surface. \"Chimeric\" means it is built from parts of different proteins. The CAR works like a guided lock that fits a specific marker, called an antigen , on the cancer cell. Most current CAR-T products target CD19 , a marker found on B-cells, including cancerous B-cells in many lymphomas and B-ALL. Others target BCMA , a marker found on myeloma cells.",
        "paragraphs": [
          "Scientists add a gene to the T-cells that makes them produce a chimeric antigen receptor (CAR) on their surface.",
          "\"Chimeric\" means it is built from parts of different proteins. The CAR works like a guided lock that fits a specific marker, called an antigen , on the cancer cell."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Most current CAR-T products target CD19 , a marker found on B-cells, including cancerous B-cells in many lymphomas and B-ALL."
          },
          {
            "label": "",
            "text": "Others target BCMA , a marker found on myeloma cells."
          }
        ],
        "callouts": []
      },
      {
        "heading": "How CAR-T cells attack",
        "content": "1. Recognise: the CAR binds to the target marker on a cancer cell. 2. Activate: binding switches the T-cell on. 3. Destroy: the T-cell releases substances that kill the cancer cell. 4. Multiply: activated CAR-T cells divide inside the body, building a larger army. 5. Persist: in some patients, CAR-T cells remain in the body for months or longer, continuing to watch for cancer.",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Recognise: the CAR binds to the target marker on a cancer cell."
          },
          {
            "number": 2,
            "text": "Activate: binding switches the T-cell on."
          },
          {
            "number": 3,
            "text": "Destroy: the T-cell releases substances that kill the cancer cell."
          },
          {
            "number": 4,
            "text": "Multiply: activated CAR-T cells divide inside the body, building a larger army."
          },
          {
            "number": 5,
            "text": "Persist: in some patients, CAR-T cells remain in the body for months or longer, continuing to watch for cancer."
          }
        ]
      },
      {
        "heading": "Why does it affect healthy cells too?",
        "content": "CD19 is also present on healthy B-cells , which make antibodies. CAR-T cells destroy these as well. This is called B-cell aplasia, and it can raise the risk of infections. Some patients need regular antibody (immunoglobulin) replacement.",
        "paragraphs": [
          "CD19 is also present on healthy B-cells , which make antibodies. CAR-T cells destroy these as well. This is called B-cell aplasia, and it can raise the risk of infections. Some patients need regular antibody (immunoglobulin) replacement."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Why can it cause strong reactions?",
        "content": "When CAR-T cells attack cancer, the immune system releases large amounts of chemical messengers called cytokines . This can cause fever and other symptoms, known as cytokine release syndrome. Specialist teams are trained to recognise and treat this quickly.",
        "paragraphs": [
          "When CAR-T cells attack cancer, the immune system releases large amounts of chemical messengers called cytokines . This can cause fever and other symptoms, known as cytokine release syndrome. Specialist teams are trained to recognise and treat this quickly."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How is it different from other treatments?",
        "content": "Chemotherapy CAR-T Made from Chemical drugs Patient's own cells Given Repeated cycles Usually a single infusion How it works Kills dividing cells Immune cells target a specific marker",
        "paragraphs": [
          "Chemotherapy CAR-T Made from Chemical drugs Patient's own cells Given Repeated cycles Usually a single infusion How it works Kills dividing cells Immune cells target a specific marker"
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "A haematologist at an authorised cell-therapy centre can explain whether your cancer carries a marker that CAR- T can target.",
    "faqs": [
      {
        "q": "Are the cells from a donor?",
        "a": "Approved CAR-T therapies use the patient's own cells. Donor-based (\"off-the-shelf\") CAR-T is still being studied."
      },
      {
        "q": "How long do CAR-T cells last?",
        "a": "It varies from weeks to years between patients."
      },
      {
        "q": "Can cancer escape CAR-T?",
        "a": "Yes. Sometimes cancer cells lose the target marker, allowing relapse."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for CAR-T Cell Therapy: How Does the Treatment Work? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for CAR-T Cell Therapy: How Does the Treatment Work? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-022",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "who-may-be-eligible-for-car-t-therapy",
    "title": "Who May Be Eligible for CAR-T Therapy?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "CAR-T therapy can be powerful, but it is suitable only for carefully selected patients. A specialist team reviews each person in detail before recommending it. This article explains the main factors they consider.",
    "diagram": null,
    "sections": [
      {
        "heading": "1. The type of cancer",
        "content": "Eligibility starts with an approved indication . Currently this means certain B-cell blood cancers, such as specific types of lymphoma and B-cell ALL, and, outside India, multiple myeloma and CLL. The cancer cells usually need to carry the target marker, such as CD19. People with solid tumours are not eligible for approved CAR-T. They may ask about clinical trials.",
        "paragraphs": [
          "Eligibility starts with an approved indication . Currently this means certain B-cell blood cancers, such as specific types of lymphoma and B-cell ALL, and, outside India, multiple myeloma and CLL. The cancer cells usually need to carry the target marker, such as CD19.",
          "People with solid tumours are not eligible for approved CAR-T. They may ask about clinical trials."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "2. Previous treatment",
        "content": "CAR-T is generally offered when cancer has: The number of earlier treatment lines required depends on the product and its approval. Relapsed (come back) after earlier treatment, or Been refractory (not responded) to standard treatment",
        "paragraphs": [
          "CAR-T is generally offered when cancer has:",
          "The number of earlier treatment lines required depends on the product and its approval."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Relapsed (come back) after earlier treatment, or"
          },
          {
            "label": "",
            "text": "Been refractory (not responded) to standard treatment"
          }
        ],
        "callouts": []
      },
      {
        "heading": "3. Age",
        "content": "Approvals specify age groups. For example, in India NexCAR19 is approved from age 15, while Qartemi is approved for adults. Children may have other options, which a paediatric haemato-oncologist can discuss.",
        "paragraphs": [
          "Approvals specify age groups. For example, in India NexCAR19 is approved from age 15, while Qartemi is approved for adults. Children may have other options, which a paediatric haemato-oncologist can discuss."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "4. General fitness",
        "content": "Patients need to be well enough to cope with possible side effects. Doctors assess: Daily activity level (performance status) Heart function (echocardiogram) Lung, kidney and liver function Blood counts",
        "paragraphs": [
          "Patients need to be well enough to cope with possible side effects. Doctors assess:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Daily activity level (performance status)"
          },
          {
            "label": "",
            "text": "Heart function (echocardiogram)"
          },
          {
            "label": "",
            "text": "Lung, kidney and liver function"
          },
          {
            "label": "",
            "text": "Blood counts"
          }
        ],
        "callouts": []
      },
      {
        "heading": "5. Infections and other conditions",
        "content": "Active, uncontrolled infections must be treated first Hepatitis B, hepatitis C and HIV status are checked Active brain involvement by cancer, recent stroke or seizures need special evaluation Serious autoimmune disease or recent transplant medicines may affect suitability",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Active, uncontrolled infections must be treated first"
          },
          {
            "label": "",
            "text": "Hepatitis B, hepatitis C and HIV status are checked"
          },
          {
            "label": "",
            "text": "Active brain involvement by cancer, recent stroke or seizures need special evaluation"
          },
          {
            "label": "",
            "text": "Serious autoimmune disease or recent transplant medicines may affect suitability"
          }
        ],
        "callouts": []
      },
      {
        "heading": "6. Disease control and timing",
        "content": "Cancer that is growing very fast may need bridging therapy to control it while the CAR-T cells are being made. Timing matters, so early referral is important.",
        "paragraphs": [
          "Cancer that is growing very fast may need bridging therapy to control it while the CAR-T cells are being made.",
          "Timing matters, so early referral is important."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "7. Practical requirements",
        "content": "Ability to stay near the treatment centre for about four weeks after infusion A caregiver available around the clock during that period Not driving for a period after treatment, usually about eight weeks",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Ability to stay near the treatment centre for about four weeks after infusion"
          },
          {
            "label": "",
            "text": "A caregiver available around the clock during that period"
          },
          {
            "label": "",
            "text": "Not driving for a period after treatment, usually about eight weeks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What does the assessment involve?",
        "content": "Expect detailed blood tests, scans such as PET-CT, a heart scan, and sometimes a bone marrow or tissue biopsy to confirm the diagnosis and target marker.",
        "paragraphs": [
          "Expect detailed blood tests, scans such as PET-CT, a heart scan, and sometimes a bone marrow or tissue biopsy to confirm the diagnosis and target marker."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Ask for a referral soon after a relapse is diagnosed. Being assessed early keeps more treatment options open.",
    "faqs": [
      {
        "q": "Can older patients receive CAR-T?",
        "a": "Age alone does not rule it out. Overall fitness matters more than the number."
      },
      {
        "q": "I have had a stem cell transplant. Can I still get CAR-T?",
        "a": "Often yes. Many CAR-T recipients have had a previous transplant."
      },
      {
        "q": "Can I get CAR-T for stage IV breast or lung cancer?",
        "a": "Not as an approved treatment. Ask about clinical trials."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Who May Be Eligible for CAR-T Therapy? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Who May Be Eligible for CAR-T Therapy? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-023",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "what-happens-during-car-t-cell-treatment",
    "title": "What Happens During CAR-T Cell Treatment?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "CAR-T treatment is a journey of several weeks rather than a single day. Knowing each step helps patients and families plan travel, time off work and caregiving.",
    "diagram": {
      "title": "The CAR-T journey",
      "steps": [
        {
          "number": "1",
          "title": "Evaluation",
          "description": "Tests confirm suitability Apheresis T-cells collected over a few hours"
        },
        {
          "number": "2",
          "title": "Manufacturing",
          "description": "Cells engineered in about 2 to 4 weeks"
        },
        {
          "number": "3",
          "title": "Conditioning",
          "description": "Short chemotherapy prepares the body 5 Infusion Cells returned through a drip"
        },
        {
          "number": "4",
          "title": "6",
          "description": "Monitoring Close watch for about 4 weeks"
        }
      ]
    },
    "sections": [
      {
        "heading": "Step 1: Evaluation",
        "content": "The cell-therapy team confirms the diagnosis and checks that you are fit for treatment with blood tests, scans, a heart assessment and infection screening. You and your family will discuss benefits, risks and consent.",
        "paragraphs": [
          "The cell-therapy team confirms the diagnosis and checks that you are fit for treatment with blood tests, scans, a heart assessment and infection screening. You and your family will discuss benefits, risks and consent."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 2: Collecting your T-cells (apheresis)",
        "content": "Blood is drawn from a vein, passed through a machine that collects white cells, and returned to you. It takes about 3 to 6 hours and is similar to donating platelets. A temporary catheter may be placed if your arm veins are not suitable.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Blood is drawn from a vein, passed through a machine that collects white cells, and returned to you."
          },
          {
            "label": "",
            "text": "It takes about 3 to 6 hours and is similar to donating platelets."
          },
          {
            "label": "",
            "text": "A temporary catheter may be placed if your arm veins are not suitable."
          }
        ],
        "callouts": []
      },
      {
        "heading": "Step 3: Manufacturing the cells",
        "content": "Your cells are sent to a specialised laboratory where they are modified and multiplied. This typically takes about two to four weeks , depending on the product. Locally manufactured products in India report shorter turnaround times.",
        "paragraphs": [
          "Your cells are sent to a specialised laboratory where they are modified and multiplied. This typically takes about two to four weeks , depending on the product. Locally manufactured products in India report shorter turnaround times."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 4: Bridging therapy (if needed)",
        "content": "If the cancer is growing while you wait, your doctor may give chemotherapy, radiation or other treatment to keep it under control.",
        "paragraphs": [
          "If the cancer is growing while you wait, your doctor may give chemotherapy, radiation or other treatment to keep it under control."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 5: Lymphodepletion",
        "content": "A few days before infusion, you receive low-dose chemotherapy , usually over 3 days. This reduces your existing immune cells to make room for the CAR-T cells to expand.",
        "paragraphs": [
          "A few days before infusion, you receive low-dose chemotherapy , usually over 3 days. This reduces your existing immune cells to make room for the CAR-T cells to expand."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 6: CAR-T infusion (Day 0)",
        "content": "The cells are given through a drip, much like a blood transfusion. It usually takes less than an hour. Many people feel nothing unusual on the day.",
        "paragraphs": [
          "The cells are given through a drip, much like a blood transfusion. It usually takes less than an hour. Many people feel nothing unusual on the day."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 7: Close monitoring",
        "content": "The first weeks are the most important: You may stay in hospital for 1 to 2 weeks, or be monitored closely as an outpatient Doctors check daily for fever, blood pressure changes and neurological symptoms Blood counts and infection risk are monitored",
        "paragraphs": [
          "The first weeks are the most important:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "You may stay in hospital for 1 to 2 weeks, or be monitored closely as an outpatient"
          },
          {
            "label": "",
            "text": "Doctors check daily for fever, blood pressure changes and neurological symptoms"
          },
          {
            "label": "",
            "text": "Blood counts and infection risk are monitored"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Step 8: Staying near the centre",
        "content": "Most programmes ask patients to stay within easy reach of the treatment centre for about four weeks after infusion , with a caregiver present at all times.",
        "paragraphs": [
          "Most programmes ask patients to stay within easy reach of the treatment centre for about four weeks after infusion , with a caregiver present at all times."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 9: Checking the response",
        "content": "A PET-CT or bone marrow test is usually done around one to three months after infusion to see how the cancer has responded. Long-term follow-up continues for years.",
        "paragraphs": [
          "A PET-CT or bone marrow test is usually done around one to three months after infusion to see how the cancer has responded. Long-term follow-up continues for years."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Will I be awake during infusion?",
        "a": "Yes. It is a simple drip, usually without sedation."
      },
      {
        "q": "What if manufacturing fails?",
        "a": "Occasionally cells do not grow well enough. Your team will discuss repeat collection or other options."
      },
      {
        "q": "Can I go home immediately after infusion?",
        "a": "Usually not. Close monitoring is needed for several weeks."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Happens During CAR-T Cell Treatment? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Happens During CAR-T Cell Treatment? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-024",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "possible-side-effects-and-monitoring-after-car-t-therapy",
    "title": "Possible Side Effects and Monitoring After CAR-T Therapy",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "CAR-T therapy can cause side effects that are different from chemotherapy. Most are manageable when caught early, which is why patients are monitored closely and caregivers are trained to spot warning signs.",
    "diagram": null,
    "sections": [
      {
        "heading": "1. Cytokine release syndrome (CRS)",
        "content": "The most common side effect. As CAR-T cells attack cancer, they release chemical messengers that cause a strong body-wide reaction. Signs: fever (often the first sign), chills, fatigue, fast heartbeat, low blood pressure and breathlessness. Timing: usually within the first one to two weeks. Treatment: ranges from fluids and fever medicines to a targeted drug called tocilizumab, steroids and, in severe cases, intensive care support.",
        "paragraphs": [
          "The most common side effect. As CAR-T cells attack cancer, they release chemical messengers that cause a strong body-wide reaction.",
          "Signs: fever (often the first sign), chills, fatigue, fast heartbeat, low blood pressure and breathlessness.",
          "Timing: usually within the first one to two weeks.",
          "Treatment: ranges from fluids and fever medicines to a targeted drug called tocilizumab, steroids and, in severe cases, intensive care support."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "2. Neurological effects (ICANS)",
        "content": "Some patients develop temporary effects on the brain and nervous system. Signs: confusion, difficulty finding words, trouble writing, drowsiness, tremor and, rarely, seizures. Monitoring: nurses ask simple questions and may ask you to write a sentence daily to detect early changes. Treatment: usually steroids and supportive care. Most effects are reversible.",
        "paragraphs": [
          "Some patients develop temporary effects on the brain and nervous system.",
          "Signs: confusion, difficulty finding words, trouble writing, drowsiness, tremor and, rarely, seizures.",
          "Monitoring: nurses ask simple questions and may ask you to write a sentence daily to detect early changes.",
          "Treatment: usually steroids and supportive care. Most effects are reversible."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "3. Low blood counts",
        "content": "Blood counts can stay low for weeks or longer. This may require transfusions or medicines to boost white cells.",
        "paragraphs": [
          "Blood counts can stay low for weeks or longer. This may require transfusions or medicines to boost white cells."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "4. Infections",
        "content": "The combination of chemotherapy, low counts and loss of healthy B-cells raises infection risk. Preventive antibiotics, antivirals and sometimes immunoglobulin replacement are used.",
        "paragraphs": [
          "The combination of chemotherapy, low counts and loss of healthy B-cells raises infection risk. Preventive antibiotics, antivirals and sometimes immunoglobulin replacement are used."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "5. Longer-term effects",
        "content": "Low antibody levels (B-cell aplasia), which can last a long time Need for re-vaccination later Regulators have asked for long-term follow-up for rare secondary blood cancers, which doctors monitor for",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Low antibody levels (B-cell aplasia), which can last a long time"
          },
          {
            "label": "",
            "text": "Need for re-vaccination later"
          },
          {
            "label": "",
            "text": "Regulators have asked for long-term follow-up for rare secondary blood cancers, which doctors monitor for"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Caregiver warning signs: call the team immediately",
        "content": "Temperature of 38°C (100.4°F) or above Confusion, unusual sleepiness, difficulty speaking or writing Shaking or seizures Dizziness, fainting or breathlessness A very fast heartbeat",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Temperature of 38°C (100.4°F) or above"
          },
          {
            "label": "",
            "text": "Confusion, unusual sleepiness, difficulty speaking or writing"
          },
          {
            "label": "",
            "text": "Shaking or seizures"
          },
          {
            "label": "",
            "text": "Dizziness, fainting or breathlessness"
          },
          {
            "label": "",
            "text": "A very fast heartbeat"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Practical precautions",
        "content": "Stay near the treatment centre for about four weeks Have a caregiver with you around the clock Do not drive or operate heavy machinery for about eight weeks Carry your CAR-T wallet card at all times",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Stay near the treatment centre for about four weeks"
          },
          {
            "label": "",
            "text": "Have a caregiver with you around the clock"
          },
          {
            "label": "",
            "text": "Do not drive or operate heavy machinery for about eight weeks"
          },
          {
            "label": "",
            "text": "Carry your CAR-T wallet card at all times"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Any new symptom in the weeks after CAR-T should be reported straight away. Tell any other doctor or emergency team that you have had CAR-T therapy.",
    "faqs": [
      {
        "q": "Does everyone get CRS?",
        "a": "Many patients get some degree of CRS, but most cases are mild to moderate."
      },
      {
        "q": "Are neurological effects permanent?",
        "a": "In most patients, they are temporary and resolve with treatment."
      },
      {
        "q": "Why can't I drive?",
        "a": "Neurological effects can occur suddenly in the first weeks, affecting concentration and alertness."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Possible Side Effects and Monitoring After CAR-T Therapy (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Possible Side Effects and Monitoring After CAR-T Therapy adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-025",
    "specialtySlug": "oncology",
    "specialtyTitle": "Oncology",
    "slug": "bone-marrow-transplantation-versus-car-t-therapy",
    "title": "Bone Marrow Transplantation Versus CAR-T Therapy",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Patients with blood cancers sometimes hear about both bone marrow transplant (BMT) and CAR-T therapy. They are different treatments that work in different ways, and some patients may receive both at different stages.",
    "diagram": null,
    "sections": [
      {
        "heading": "The basic difference",
        "content": "Bone marrow transplant replaces diseased or damaged bone marrow with healthy blood-forming stem cells, either your own or a donor's, after high-dose treatment. CAR-T therapy modifies your own T-cells so they can directly recognise and attack cancer cells.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Bone marrow transplant replaces diseased or damaged bone marrow with healthy blood-forming stem cells, either your own or a donor's, after high-dose treatment."
          },
          {
            "label": "",
            "text": "CAR-T therapy modifies your own T-cells so they can directly recognise and attack cancer cells."
          }
        ],
        "callouts": []
      },
      {
        "heading": "Side-by-side comparison",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "BMT",
            "CAR-T"
          ],
          "rows": [
            [
              "Cells used",
              "Your own (autologous) or a donor's (allogeneic) stem cells",
              "Your own modified T-cells"
            ],
            [
              "Donor needed",
              "Only for allogeneic",
              "No"
            ],
            [
              "Preparation",
              "High-dose chemotherapy, sometimes radiation",
              "Low-dose chemotherapy"
            ],
            [
              "Main risks",
              "Infection, organ toxicity, graft-versus-host disease (donor transplants)",
              "Cytokine release syndrome, neurological effects, infection"
            ],
            [
              "Conditions",
              "Many blood cancers and some non-cancer disorders",
              "Selected relapsed or refractory B-cell cancers and myeloma"
            ],
            [
              "Experience",
              "Decades of use",
              "Newer; first approved in 2017"
            ]
          ]
        }
      },
      {
        "heading": "How do doctors choose?",
        "content": "The choice depends on: Cancer type and stage of treatment: for example, an autologous transplant may be preferred for some lymphomas that respond to further chemotherapy, while CAR-T may be preferred when the lymphoma relapses early or does not respond Donor availability for allogeneic transplants Age, fitness and organ function Previous treatments, including previous transplants Approval and availability of CAR-T products for that specific cancer Guidelines in this area are evolving as new research is published.",
        "paragraphs": [
          "The choice depends on:"
        ],
        "bullets": [
          {
            "label": "Cancer type and stage of treatment:",
            "text": "for example, an autologous transplant may be preferred for some lymphomas that respond to further chemotherapy, while CAR-T may be preferred when the lymphoma relapses early or does not respond"
          },
          {
            "label": "",
            "text": "Donor availability for allogeneic transplants"
          },
          {
            "label": "",
            "text": "Age, fitness and organ function"
          },
          {
            "label": "",
            "text": "Previous treatments, including previous transplants"
          },
          {
            "label": "",
            "text": "Approval and availability of CAR-T products for that specific cancer"
          }
        ],
        "callouts": [
          "Guidelines in this area are evolving as new research is published."
        ]
      },
      {
        "heading": "Can patients have both?",
        "content": "Yes. Some patients receive CAR-T after a transplant has failed. Others may go on to a donor transplant after CAR- T, particularly in some types of leukaemia.",
        "paragraphs": [
          "Yes. Some patients receive CAR-T after a transplant has failed. Others may go on to a donor transplant after CAR- T, particularly in some types of leukaemia."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Recovery",
        "content": "Both require close monitoring, staying near the treatment centre and a dedicated caregiver. Donor transplants usually involve the longest recovery because of the need for immune-suppressing medicines and the risk of graft-versus-host disease.",
        "paragraphs": [
          "Both require close monitoring, staying near the treatment centre and a dedicated caregiver. Donor transplants usually involve the longest recovery because of the need for immune-suppressing medicines and the risk of graft-versus-host disease."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "If your cancer has relapsed, ask for a review by a team experienced in both transplant and cellular therapy, so all options are considered together.",
    "faqs": [
      {
        "q": "Is CAR-T replacing bone marrow transplant?",
        "a": "No. Both remain important. For some situations CAR-T is now preferred; for others transplant remains standard."
      },
      {
        "q": "Which is safer?",
        "a": "Each has different risks. Safety depends on the patient, cancer and centre experience."
      },
      {
        "q": "Do I need a donor for CAR-T?",
        "a": "No. Approved CAR-T therapies use your own cells."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Bone Marrow Transplantation Versus CAR-T Therapy (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Bone Marrow Transplantation Versus CAR-T Therapy adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-026",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "understanding-parkinsons-disease",
    "title": "Understanding Parkinson's Disease",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Parkinson's disease is a long-term condition of the brain that mainly affects movement. It develops slowly, often over years. While there is no cure yet, treatment can control symptoms well and help people stay active and independent.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "Parkinson's happens when nerve cells in a part of the brain that produces dopamine gradually stop working. Dopamine is a chemical messenger that helps control smooth, coordinated movement. As levels fall, movement becomes slower and less controlled.",
        "paragraphs": [
          "Parkinson's happens when nerve cells in a part of the brain that produces dopamine gradually stop working.",
          "Dopamine is a chemical messenger that helps control smooth, coordinated movement. As levels fall, movement becomes slower and less controlled."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Main symptoms",
        "content": "Movement symptoms: Non-movement symptoms , which can appear years earlier: Tremor: shaking, often starting in one hand at rest Stiffness of the arms, legs or neck Slowness of movement (bradykinesia), such as difficulty buttoning clothes Balance problems and a shuffling walk, usually later Loss of sense of smell Constipation Acting out dreams during sleep Low mood, anxiety or sleep problems Smaller handwriting and a softer voice",
        "paragraphs": [
          "Movement symptoms:",
          "Non-movement symptoms , which can appear years earlier:"
        ],
        "bullets": [
          {
            "label": "Tremor:",
            "text": "shaking, often starting in one hand at rest"
          },
          {
            "label": "",
            "text": "Stiffness of the arms, legs or neck"
          },
          {
            "label": "",
            "text": "Slowness of movement (bradykinesia), such as difficulty buttoning clothes"
          },
          {
            "label": "",
            "text": "Balance problems and a shuffling walk, usually later"
          },
          {
            "label": "",
            "text": "Loss of sense of smell"
          },
          {
            "label": "",
            "text": "Constipation"
          },
          {
            "label": "",
            "text": "Acting out dreams during sleep"
          },
          {
            "label": "",
            "text": "Low mood, anxiety or sleep problems"
          },
          {
            "label": "",
            "text": "Smaller handwriting and a softer voice"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who gets it?",
        "content": "Parkinson's usually begins after 60, though some people develop it earlier. The exact cause is unknown. A mix of ageing, genes and environmental factors is thought to play a role.",
        "paragraphs": [
          "Parkinson's usually begins after 60, though some people develop it earlier. The exact cause is unknown. A mix of ageing, genes and environmental factors is thought to play a role."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "There is no single test. A neurologist makes the diagnosis based on your symptoms and a careful examination. MRI and other scans may be done to rule out other conditions. Improvement with Parkinson's medicine also supports the diagnosis.",
        "paragraphs": [
          "There is no single test. A neurologist makes the diagnosis based on your symptoms and a careful examination.",
          "MRI and other scans may be done to rule out other conditions. Improvement with Parkinson's medicine also supports the diagnosis."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Medicines: levodopa and other drugs replace or mimic dopamine. Doses are adjusted over time. Physiotherapy and exercise: walking, stretching, balance training and activities like dancing or tai chi help mobility Speech and occupational therapy: for voice, swallowing and daily tasks Deep Brain Stimulation (DBS): surgery for selected patients whose symptoms are no longer well controlled by medicines",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Medicines:",
            "text": "levodopa and other drugs replace or mimic dopamine. Doses are adjusted over time."
          },
          {
            "label": "Physiotherapy and exercise:",
            "text": "walking, stretching, balance training and activities like dancing or tai chi help mobility"
          },
          {
            "label": "Speech and occupational therapy:",
            "text": "for voice, swallowing and daily tasks"
          },
          {
            "label": "Deep Brain Stimulation (DBS):",
            "text": "surgery for selected patients whose symptoms are no longer well controlled by medicines"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Living well with Parkinson's",
        "content": "Take medicines on time, every time Stay physically active every day Make the home safer to prevent falls Seek support for mood and sleep problems",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Take medicines on time, every time"
          },
          {
            "label": "",
            "text": "Stay physically active every day"
          },
          {
            "label": "",
            "text": "Make the home safer to prevent falls"
          },
          {
            "label": "",
            "text": "Seek support for mood and sleep problems"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a neurologist if you notice a persistent tremor, slowness, stiffness or changes in walking or handwriting.",
    "faqs": [
      {
        "q": "Is every tremor Parkinson's?",
        "a": "No. Essential tremor, anxiety, thyroid problems and some medicines can also cause tremor."
      },
      {
        "q": "Is Parkinson's inherited?",
        "a": "Most cases are not. A small number are linked to specific genes."
      },
      {
        "q": "Does Parkinson's shorten life?",
        "a": "Many people live for decades with good treatment and care."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Parkinson's Disease (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Parkinson's Disease adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-027",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "epilepsy-causes-symptoms-and-treatment",
    "title": "Epilepsy: Causes, Symptoms and Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Epilepsy is a condition in which a person has repeated seizures. A seizure is a sudden burst of abnormal electrical activity in the brain. About 70 percent of people with epilepsy can become seizure- free with the right treatment.",
    "diagram": {
      "title": "Seizure first aid",
      "steps": [
        {
          "number": "1",
          "title": "Stay calm",
          "description": "Note the time"
        },
        {
          "number": "2",
          "title": "Protect",
          "description": "Move hard objects away; cushion the head"
        },
        {
          "number": "3",
          "title": "Turn on side",
          "description": "Once jerking stops, place in recovery position"
        },
        {
          "number": "4",
          "title": "Call for help",
          "description": "If it lasts over 5 minutes or repeats"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is a seizure?",
        "content": "Seizures can look very different depending on which part of the brain is involved: A single seizure is not always epilepsy. Epilepsy is usually diagnosed after two or more unprovoked seizures, or one seizure with a high risk of more. Generalised tonic-clonic seizure: loss of consciousness, stiffening and jerking of the body Absence seizure: brief blank staring, common in children Focal seizure: affects one part of the brain; may cause jerking of one limb, strange sensations, or confusion and unusual behaviour",
        "paragraphs": [
          "Seizures can look very different depending on which part of the brain is involved:",
          "A single seizure is not always epilepsy. Epilepsy is usually diagnosed after two or more unprovoked seizures, or one seizure with a high risk of more."
        ],
        "bullets": [
          {
            "label": "Generalised tonic-clonic seizure:",
            "text": "loss of consciousness, stiffening and jerking of the body"
          },
          {
            "label": "Absence seizure:",
            "text": "brief blank staring, common in children"
          },
          {
            "label": "Focal seizure:",
            "text": "affects one part of the brain; may cause jerking of one limb, strange sensations, or confusion and unusual behaviour"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Causes",
        "content": "In many people, no cause is found. Brain injury or head trauma Stroke, especially in older adults Brain infections such as meningitis or neurocysticercosis (a tapeworm infection that is a common cause in India) Brain tumours Birth injury or developmental conditions Genetic factors",
        "paragraphs": [
          "In many people, no cause is found."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Brain injury or head trauma"
          },
          {
            "label": "",
            "text": "Stroke, especially in older adults"
          },
          {
            "label": "",
            "text": "Brain infections such as meningitis or neurocysticercosis (a tapeworm infection that is a common cause in"
          },
          {
            "label": "",
            "text": "India)"
          },
          {
            "label": "",
            "text": "Brain tumours"
          },
          {
            "label": "",
            "text": "Birth injury or developmental conditions"
          },
          {
            "label": "",
            "text": "Genetic factors"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common triggers",
        "content": "Missed medicines Lack of sleep Alcohol Fever or illness Flashing lights in a small number of people",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Missed medicines"
          },
          {
            "label": "",
            "text": "Lack of sleep"
          },
          {
            "label": "",
            "text": "Alcohol"
          },
          {
            "label": "",
            "text": "Fever or illness"
          },
          {
            "label": "",
            "text": "Flashing lights in a small number of people"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Detailed history: a video of the event taken by a family member is very helpful EEG: records the brain's electrical activity MRI: looks for structural causes Blood tests",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Detailed history:",
            "text": "a video of the event taken by a family member is very helpful"
          },
          {
            "label": "EEG:",
            "text": "records the brain's electrical activity"
          },
          {
            "label": "MRI:",
            "text": "looks for structural causes"
          },
          {
            "label": "",
            "text": "Blood tests"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Anti-seizure medicines: the main treatment; most people need them for several years Epilepsy surgery: for selected people whose seizures continue despite medicines, when a specific brain area is responsible Nerve stimulation devices: such as vagus nerve stimulation Special diets: like the ketogenic diet, mainly for children",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Anti-seizure medicines:",
            "text": "the main treatment; most people need them for several years"
          },
          {
            "label": "Epilepsy surgery:",
            "text": "for selected people whose seizures continue despite medicines, when a specific brain area is responsible"
          },
          {
            "label": "Nerve stimulation devices:",
            "text": "such as vagus nerve stimulation"
          },
          {
            "label": "Special diets:",
            "text": "like the ketogenic diet, mainly for children"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Living with epilepsy",
        "content": "Never stop medicines suddenly Keep regular sleep habits Avoid swimming alone or working at heights until seizures are controlled Driving rules apply; ask your doctor",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Never stop medicines suddenly"
          },
          {
            "label": "",
            "text": "Keep regular sleep habits"
          },
          {
            "label": "",
            "text": "Avoid swimming alone or working at heights until seizures are controlled"
          },
          {
            "label": "",
            "text": "Driving rules apply; ask your doctor"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Anyone who has had a seizure should see a neurologist. Call emergency services if a seizure lasts longer than 5 minutes, repeats without recovery, or happens in water.",
    "faqs": [
      {
        "q": "Should I put something in the person's mouth during a seizure?",
        "a": "No. Never put anything in their mouth. They cannot swallow their tongue."
      },
      {
        "q": "Can women with epilepsy have children?",
        "a": "Yes. Pregnancy should be planned with the neurologist, as some medicines need adjusting."
      },
      {
        "q": "Can epilepsy go away?",
        "a": "Some childhood epilepsies resolve. Others are well controlled long term."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Epilepsy: Causes, Symptoms and Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Epilepsy: Causes, Symptoms and Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-028",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "brain-haemorrhage-warning-signs-and-emergency-treatment",
    "title": "Brain Haemorrhage: Warning Signs and Emergency Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A brain haemorrhage is bleeding in or around the brain. It is a medical emergency. Fast treatment can save life and reduce long-term disability.",
    "diagram": null,
    "sections": [
      {
        "heading": "Types of brain bleed",
        "content": "Intracerebral haemorrhage: bleeding inside the brain tissue, often linked to high blood pressure Subarachnoid haemorrhage: bleeding in the space around the brain, often from a burst aneurysm (a weak, ballooned area of an artery) Subdural and extradural haematoma: bleeding between the brain and skull, usually after a head injury",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Intracerebral haemorrhage:",
            "text": "bleeding inside the brain tissue, often linked to high blood pressure"
          },
          {
            "label": "Subarachnoid haemorrhage:",
            "text": "bleeding in the space around the brain, often from a burst aneurysm (a weak, ballooned area of an artery)"
          },
          {
            "label": "Subdural and extradural haematoma:",
            "text": "bleeding between the brain and skull, usually after a head injury"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Warning signs",
        "content": "After a head injury, symptoms may develop hours or even days later, especially in older people taking blood thinners. Sudden, severe headache , often described as \"the worst headache of my life\" Vomiting Stiff neck and sensitivity to light Weakness or numbness of the face, arm or leg Difficulty speaking or understanding Blurred or double vision Confusion, drowsiness or loss of consciousness Seizure",
        "paragraphs": [
          "After a head injury, symptoms may develop hours or even days later, especially in older people taking blood thinners."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Sudden, severe headache , often described as \"the worst headache of my life\""
          },
          {
            "label": "",
            "text": "Vomiting"
          },
          {
            "label": "",
            "text": "Stiff neck and sensitivity to light"
          },
          {
            "label": "",
            "text": "Weakness or numbness of the face, arm or leg"
          },
          {
            "label": "",
            "text": "Difficulty speaking or understanding"
          },
          {
            "label": "",
            "text": "Blurred or double vision"
          },
          {
            "label": "",
            "text": "Confusion, drowsiness or loss of consciousness"
          },
          {
            "label": "",
            "text": "Seizure"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Causes and risk factors",
        "content": "Uncontrolled high blood pressure: the most common cause Ruptured aneurysm or abnormal blood vessels (AVM) Head injury Blood-thinning medicines Heavy alcohol use, smoking and drug use",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Uncontrolled high blood pressure:",
            "text": "the most common cause"
          },
          {
            "label": "",
            "text": "Ruptured aneurysm or abnormal blood vessels (AVM)"
          },
          {
            "label": "",
            "text": "Head injury"
          },
          {
            "label": "",
            "text": "Blood-thinning medicines"
          },
          {
            "label": "",
            "text": "Heavy alcohol use, smoking and drug use"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What to do",
        "content": "Call emergency services (108 or 112 in India) immediately. Do not give food, drink or medicines. Note the time symptoms started.",
        "paragraphs": [
          "Call emergency services (108 or 112 in India) immediately. Do not give food, drink or medicines. Note the time symptoms started."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Emergency diagnosis",
        "content": "CT scan of the brain: quickly shows bleeding CT or catheter angiography: looks for aneurysms or abnormal vessels",
        "paragraphs": [],
        "bullets": [
          {
            "label": "CT scan of the brain:",
            "text": "quickly shows bleeding"
          },
          {
            "label": "CT or catheter angiography:",
            "text": "looks for aneurysms or abnormal vessels"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Emergency treatment",
        "content": "Stabilisation: breathing support and careful blood pressure control in the ICU Reversing blood thinners if relevant Aneurysm treatment: either coiling (closing the aneurysm from inside through a catheter) or clipping (open surgery) Surgery: a craniotomy may be needed to remove a large clot or relieve pressure Drain: to remove excess fluid from the brain",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Stabilisation:",
            "text": "breathing support and careful blood pressure control in the ICU"
          },
          {
            "label": "",
            "text": "Reversing blood thinners if relevant"
          },
          {
            "label": "Aneurysm treatment:",
            "text": "either coiling (closing the aneurysm from inside through a catheter) or clipping (open surgery)"
          },
          {
            "label": "Surgery:",
            "text": "a craniotomy may be needed to remove a large clot or relieve pressure"
          },
          {
            "label": "Drain:",
            "text": "to remove excess fluid from the brain"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Recovery",
        "content": "Recovery depends on the size and location of the bleed. Many patients need rehabilitation, including physiotherapy, speech therapy and help with daily activities.",
        "paragraphs": [
          "Recovery depends on the size and location of the bleed. Many patients need rehabilitation, including physiotherapy, speech therapy and help with daily activities."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Prevention",
        "content": "Check and control blood pressure regularly Avoid tobacco and limit alcohol Wear helmets and seat belts Take blood thinners exactly as prescribed",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Check and control blood pressure regularly"
          },
          {
            "label": "",
            "text": "Avoid tobacco and limit alcohol"
          },
          {
            "label": "",
            "text": "Wear helmets and seat belts"
          },
          {
            "label": "",
            "text": "Take blood thinners exactly as prescribed"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Is a brain haemorrhage a type of stroke?",
        "a": "Yes. It is called a haemorrhagic stroke, and it needs different treatment from a clot-related stroke."
      },
      {
        "q": "Can a brain aneurysm be found before it bursts?",
        "a": "Sometimes, on scans done for other reasons. A specialist will advise whether treatment is needed."
      },
      {
        "q": "Is every severe headache a brain bleed?",
        "a": "No, but a sudden, explosive headache unlike any before needs emergency assessment."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Brain Haemorrhage: Warning Signs and Emergency Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Brain Haemorrhage: Warning Signs and Emergency Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-029",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "brain-tumours-symptoms-and-treatment-options",
    "title": "Brain Tumours: Symptoms and Treatment Options",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Brain tumours can cause a wide range of symptoms, depending on their size and where they are in the brain. Many symptoms are also caused by common, less serious conditions, so recognising the pattern matters. For tumour types and grades, see our oncology guide.",
    "diagram": null,
    "sections": [
      {
        "heading": "Common symptoms",
        "content": "Headaches that are new, persistent, worse in the morning or when lying down, and getting more frequent Nausea or vomiting , especially in the morning Seizures in someone who has never had one before Vision changes: blurring, double vision or loss of side vision Weakness or numbness on one side of the body Speech difficulty Personality or behaviour changes , confusion or memory problems Balance problems and clumsiness Hearing loss on one side (with tumours near the hearing nerve) Hormone problems (with pituitary tumours)",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Headaches that are new, persistent, worse in the morning or when lying down, and getting more frequent"
          },
          {
            "label": "",
            "text": "Nausea or vomiting , especially in the morning"
          },
          {
            "label": "",
            "text": "Seizures in someone who has never had one before"
          },
          {
            "label": "Vision changes:",
            "text": "blurring, double vision or loss of side vision"
          },
          {
            "label": "",
            "text": "Weakness or numbness on one side of the body"
          },
          {
            "label": "",
            "text": "Speech difficulty"
          },
          {
            "label": "",
            "text": "Personality or behaviour changes , confusion or memory problems"
          },
          {
            "label": "",
            "text": "Balance problems and clumsiness"
          },
          {
            "label": "",
            "text": "Hearing loss on one side (with tumours near the hearing nerve)"
          },
          {
            "label": "",
            "text": "Hormone problems (with pituitary tumours)"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Why location matters",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Area of the brain",
            "Possible symptoms"
          ],
          "rows": [
            [
              "Frontal lobe",
              "Personality change, weakness, poor judgement"
            ],
            [
              "Temporal lobe",
              "Memory and speech problems, seizures"
            ],
            [
              "Parietal lobe",
              "Numbness, difficulty with spatial tasks"
            ],
            [
              "Occipital lobe",
              "Vision loss"
            ],
            [
              "Cerebellum",
              "Poor balance and coordination"
            ]
          ]
        }
      },
      {
        "heading": "Diagnosis",
        "content": "Neurological examination: checks strength, reflexes, vision and coordination MRI with contrast: the main test to see the tumour Advanced imaging: functional MRI and tractography to map important brain areas before surgery Biopsy: a tissue sample to confirm the type",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Neurological examination:",
            "text": "checks strength, reflexes, vision and coordination"
          },
          {
            "label": "MRI with contrast:",
            "text": "the main test to see the tumour"
          },
          {
            "label": "Advanced imaging:",
            "text": "functional MRI and tractography to map important brain areas before surgery"
          },
          {
            "label": "Biopsy:",
            "text": "a tissue sample to confirm the type"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Neurosurgical treatment options",
        "content": "After surgery, further treatment such as radiation or chemotherapy may be planned by the oncology team. Craniotomy and tumour removal: the surgeon removes as much tumour as safely possible Image-guided surgery (neuronavigation): works like a GPS for the brain Awake brain surgery: used for tumours near speech or movement areas, so these functions can be tested during surgery Endoscopic surgery: through the nose for many pituitary tumours Stereotactic biopsy: a needle biopsy for deep tumours Radiosurgery: focused radiation for small tumours, without an incision",
        "paragraphs": [
          "After surgery, further treatment such as radiation or chemotherapy may be planned by the oncology team."
        ],
        "bullets": [
          {
            "label": "Craniotomy and tumour removal:",
            "text": "the surgeon removes as much tumour as safely possible"
          },
          {
            "label": "Image-guided surgery (neuronavigation):",
            "text": "works like a GPS for the brain"
          },
          {
            "label": "Awake brain surgery:",
            "text": "used for tumours near speech or movement areas, so these functions can be tested during surgery"
          },
          {
            "label": "Endoscopic surgery:",
            "text": "through the nose for many pituitary tumours"
          },
          {
            "label": "Stereotactic biopsy:",
            "text": "a needle biopsy for deep tumours"
          },
          {
            "label": "Radiosurgery:",
            "text": "focused radiation for small tumours, without an incision"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a doctor if headaches are new and worsening, or occur with vomiting, vision changes or weakness. A first seizure or sudden weakness needs urgent attention.",
    "faqs": [
      {
        "q": "Do most headaches mean a brain tumour?",
        "a": "No. The vast majority of headaches are not caused by tumours."
      },
      {
        "q": "Is brain surgery very risky?",
        "a": "All brain surgery has risks, but modern techniques have made it much safer. Your surgeon will explain risks specific to you."
      },
      {
        "q": "Will I need to shave my head?",
        "a": "Usually only a small area is shaved."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Brain Tumours: Symptoms and Treatment Options (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Brain Tumours: Symptoms and Treatment Options adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-030",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "what-is-deep-brain-stimulation-dbs",
    "title": "What Is Deep Brain Stimulation (DBS)?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Deep Brain Stimulation (DBS) is a surgical treatment that uses mild electrical signals to calm abnormal brain activity that causes certain movement disorders. It is often described as a \"pacemaker for the brain\".",
    "diagram": {
      "title": "How DBS works",
      "steps": [
        {
          "number": "1",
          "title": "Electrodes",
          "description": "Thin wires placed in a precise brain target"
        },
        {
          "number": "2",
          "title": "Extension wire",
          "description": "Runs under the skin of the neck"
        },
        {
          "number": "3",
          "title": "Stimulator",
          "description": "Battery device under the collarbone"
        },
        {
          "number": "4",
          "title": "Programming",
          "description": "Settings adjusted to control symptoms"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "In DBS, very thin electrodes are placed in specific areas deep inside the brain. They are connected to a small battery-powered device, similar to a heart pacemaker, placed under the skin of the chest. The device sends continuous, adjustable signals that help control symptoms. DBS does not destroy brain tissue, and the settings can be changed or switched off.",
        "paragraphs": [
          "In DBS, very thin electrodes are placed in specific areas deep inside the brain. They are connected to a small battery-powered device, similar to a heart pacemaker, placed under the skin of the chest. The device sends continuous, adjustable signals that help control symptoms.",
          "DBS does not destroy brain tissue, and the settings can be changed or switched off."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who may benefit?",
        "content": "DBS is an established treatment for: It is also used in selected cases of epilepsy and is being studied for other conditions. Parkinson's disease: when medicines no longer control symptoms smoothly, causing \"on-off\" fluctuations or troublesome involuntary movements Essential tremor: severe tremor that interferes with daily life despite medicines Dystonia: conditions causing involuntary muscle contractions",
        "paragraphs": [
          "DBS is an established treatment for:",
          "It is also used in selected cases of epilepsy and is being studied for other conditions."
        ],
        "bullets": [
          {
            "label": "Parkinson's disease:",
            "text": "when medicines no longer control symptoms smoothly, causing \"on-off\" fluctuations or troublesome involuntary movements"
          },
          {
            "label": "Essential tremor:",
            "text": "severe tremor that interferes with daily life despite medicines"
          },
          {
            "label": "Dystonia:",
            "text": "conditions causing involuntary muscle contractions"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who is a good candidate?",
        "content": "A detailed evaluation, including brain imaging and memory assessment, is done first. A confirmed diagnosis by a movement disorder specialist Symptoms that respond to levodopa (for Parkinson's) Reasonable general health No significant memory problems or uncontrolled psychiatric illness",
        "paragraphs": [
          "A detailed evaluation, including brain imaging and memory assessment, is done first."
        ],
        "bullets": [
          {
            "label": "",
            "text": "A confirmed diagnosis by a movement disorder specialist"
          },
          {
            "label": "",
            "text": "Symptoms that respond to levodopa (for Parkinson's)"
          },
          {
            "label": "",
            "text": "Reasonable general health"
          },
          {
            "label": "",
            "text": "No significant memory problems or uncontrolled psychiatric illness"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What happens during surgery?",
        "content": "1. A frame or frameless system and MRI images are used to plan the exact target. 2. Electrodes are placed through small openings in the skull. Some centres keep the patient awake for part of the procedure to test the effect. 3. The battery is placed under the collarbone, usually in the same or a second session.",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "A frame or frameless system and MRI images are used to plan the exact target."
          },
          {
            "number": 2,
            "text": "Electrodes are placed through small openings in the skull. Some centres keep the patient awake for part of the procedure to test the effect."
          },
          {
            "number": 3,
            "text": "The battery is placed under the collarbone, usually in the same or a second session."
          }
        ]
      },
      {
        "heading": "After surgery",
        "content": "Hospital stay of a few days The device is switched on and programmed over several visits Medicines are often reduced gradually Rechargeable batteries may last many years; non-rechargeable ones need replacing every few years",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Hospital stay of a few days"
          },
          {
            "label": "",
            "text": "The device is switched on and programmed over several visits"
          },
          {
            "label": "",
            "text": "Medicines are often reduced gradually"
          },
          {
            "label": "",
            "text": "Rechargeable batteries may last many years; non-rechargeable ones need replacing every few years"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What results can you expect?",
        "content": "DBS can significantly reduce tremor, stiffness and slowness, and smooth out fluctuations. It does not cure Parkinson's and does not usually help balance, speech or memory problems.",
        "paragraphs": [
          "DBS can significantly reduce tremor, stiffness and slowness, and smooth out fluctuations. It does not cure Parkinson's and does not usually help balance, speech or memory problems."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "If Parkinson's or tremor is affecting your daily life despite medicines, ask a neurologist whether a DBS evaluation is appropriate.",
    "faqs": [
      {
        "q": "Is DBS a new treatment?",
        "a": "No. DBS has been used for decades worldwide."
      },
      {
        "q": "Can I have an MRI after DBS?",
        "a": "Only under specific conditions. Always check with your DBS team first."
      },
      {
        "q": "Will I feel the stimulation?",
        "a": "Most people do not feel it once settings are adjusted."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Is Deep Brain Stimulation (DBS)? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Is Deep Brain Stimulation (DBS)? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-031",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "craniotomy-why-is-brain-surgery-performed",
    "title": "Craniotomy: Why Is Brain Surgery Performed?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A craniotomy is an operation in which a surgeon temporarily removes a small section of the skull to reach the brain. After the procedure, the bone is usually put back in place. It is one of the most common neurosurgical operations.",
    "diagram": {
      "title": "Craniotomy step by step",
      "steps": [
        {
          "number": "1",
          "title": "Planning",
          "description": "MRI/CT and navigation set-up"
        },
        {
          "number": "2",
          "title": "Opening",
          "description": "A small window of skull bone removed"
        },
        {
          "number": "3",
          "title": "Surgery",
          "description": "Tumour, clot or aneurysm treated"
        },
        {
          "number": "4",
          "title": "Closure",
          "description": "Bone replaced and fixed with small plates"
        }
      ]
    },
    "sections": [
      {
        "heading": "Why is it performed?",
        "content": "Removing brain tumours Removing blood clots after a brain haemorrhage or head injury Treating aneurysms (clipping) or abnormal blood vessels (AVMs) Relieving pressure on the brain from swelling Epilepsy surgery to remove the area causing seizures Treating brain abscesses or infections",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Removing brain tumours"
          },
          {
            "label": "",
            "text": "Removing blood clots after a brain haemorrhage or head injury"
          },
          {
            "label": "",
            "text": "Treating aneurysms (clipping) or abnormal blood vessels (AVMs)"
          },
          {
            "label": "",
            "text": "Relieving pressure on the brain from swelling"
          },
          {
            "label": "",
            "text": "Epilepsy surgery to remove the area causing seizures"
          },
          {
            "label": "",
            "text": "Treating brain abscesses or infections"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Types of craniotomy",
        "content": "Standard craniotomy: opening sized to reach the problem area Keyhole (minimally invasive) craniotomy: a smaller opening for selected cases Awake craniotomy: the patient is woken during part of the surgery to test speech or movement Endoscopic surgery: through small openings or the nose, for some tumours Decompressive craniectomy: the bone is left out temporarily to allow severe swelling to settle",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Standard craniotomy:",
            "text": "opening sized to reach the problem area"
          },
          {
            "label": "Keyhole (minimally invasive) craniotomy:",
            "text": "a smaller opening for selected cases"
          },
          {
            "label": "Awake craniotomy:",
            "text": "the patient is woken during part of the surgery to test speech or movement"
          },
          {
            "label": "Endoscopic surgery:",
            "text": "through small openings or the nose, for some tumours"
          },
          {
            "label": "Decompressive craniectomy:",
            "text": "the bone is left out temporarily to allow severe swelling to settle"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Before surgery",
        "content": "Scans such as MRI or CT Blood tests, ECG and anaesthesia review You may be asked to stop blood thinners several days beforehand Fasting for several hours before the operation",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Scans such as MRI or CT"
          },
          {
            "label": "",
            "text": "Blood tests, ECG and anaesthesia review"
          },
          {
            "label": "",
            "text": "You may be asked to stop blood thinners several days beforehand"
          },
          {
            "label": "",
            "text": "Fasting for several hours before the operation"
          }
        ],
        "callouts": []
      },
      {
        "heading": "During surgery",
        "content": "Surgery may take from 2 to 6 hours or more. 1. General anaesthesia (except during the awake part of awake surgery) 2. A small area of hair is shaved and the scalp opened 3. A bone flap is removed using special tools 4. The surgeon operates using a microscope and navigation system 5. The bone is replaced and fixed with small plates and screws 6. The scalp is closed",
        "paragraphs": [
          "Surgery may take from 2 to 6 hours or more."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "General anaesthesia (except during the awake part of awake surgery)"
          },
          {
            "number": 2,
            "text": "A small area of hair is shaved and the scalp opened"
          },
          {
            "number": 3,
            "text": "A bone flap is removed using special tools"
          },
          {
            "number": 4,
            "text": "The surgeon operates using a microscope and navigation system"
          },
          {
            "number": 5,
            "text": "The bone is replaced and fixed with small plates and screws"
          },
          {
            "number": 6,
            "text": "The scalp is closed"
          }
        ]
      },
      {
        "heading": "Recovery",
        "content": "Some patients need physiotherapy, speech therapy or occupational therapy. Usually 1 to 2 days in the neuro ICU Total hospital stay of about 3 to 7 days for planned surgery Headache, swelling around the eyes and tiredness are common Stitches or staples removed in 10 to 14 days Return to normal activities over 4 to 8 weeks",
        "paragraphs": [
          "Some patients need physiotherapy, speech therapy or occupational therapy."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Usually 1 to 2 days in the neuro ICU"
          },
          {
            "label": "",
            "text": "Total hospital stay of about 3 to 7 days for planned surgery"
          },
          {
            "label": "",
            "text": "Headache, swelling around the eyes and tiredness are common"
          },
          {
            "label": "",
            "text": "Stitches or staples removed in 10 to 14 days"
          },
          {
            "label": "",
            "text": "Return to normal activities over 4 to 8 weeks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Possible risks",
        "content": "Infection, bleeding, swelling of the brain, seizures, and temporary or permanent changes in function. Your surgeon will explain risks specific to your condition.",
        "paragraphs": [
          "Infection, bleeding, swelling of the brain, seizures, and temporary or permanent changes in function. Your surgeon will explain risks specific to your condition."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Warning signs after discharge",
        "content": "Seek urgent help for worsening headache, fever, wound discharge, new weakness, confusion, seizures or clear fluid leaking from the wound or nose.",
        "paragraphs": [
          "Seek urgent help for worsening headache, fever, wound discharge, new weakness, confusion, seizures or clear fluid leaking from the wound or nose."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Is a craniotomy painful?",
        "a": "Pain after surgery is usually moderate and well controlled with medicines."
      },
      {
        "q": "Will my hair grow back?",
        "a": "Yes. Hair usually covers the scar."
      },
      {
        "q": "When can I fly after a craniotomy?",
        "a": "Ask your surgeon. Timing depends on the type of surgery."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Craniotomy: Why Is Brain Surgery Performed? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Craniotomy: Why Is Brain Surgery Performed? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-032",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "understanding-stroke-and-its-early-warning-signs",
    "title": "Understanding Stroke and Its Early Warning Signs",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A stroke happens when blood supply to part of the brain is suddenly cut off. Brain cells begin to die within minutes. Stroke is a medical emergency, and the faster treatment begins, the better the chances of recovery.",
    "diagram": {
      "title": "Spot a stroke: BE FAST",
      "steps": [
        {
          "number": "1",
          "title": "B: Balance",
          "description": "Sudden loss of balance E: Eyes Sudden vision loss or blurring"
        },
        {
          "number": "2",
          "title": "F: Face",
          "description": "One side of the face droops"
        },
        {
          "number": "3",
          "title": "A: Arm",
          "description": "One arm weak or numb 5 S: Speech Slurred or strange speech"
        },
        {
          "number": "4",
          "title": "6",
          "description": "T: Time Call 108 or 112 now"
        }
      ]
    },
    "sections": [
      {
        "heading": "Types of stroke",
        "content": "Ischaemic stroke: a clot blocks a brain artery. About 80 to 85 percent of strokes are this type. Haemorrhagic stroke: a blood vessel bursts and bleeds into the brain. TIA (\"mini-stroke\"): stroke symptoms that go away within minutes to hours. It is a serious warning sign of a future stroke.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Ischaemic stroke:",
            "text": "a clot blocks a brain artery. About 80 to 85 percent of strokes are this type."
          },
          {
            "label": "Haemorrhagic stroke:",
            "text": "a blood vessel bursts and bleeds into the brain."
          },
          {
            "label": "TIA (\"mini-stroke\"):",
            "text": "stroke symptoms that go away within minutes to hours. It is a serious warning sign of a future stroke."
          }
        ],
        "callouts": []
      },
      {
        "heading": "Warning signs: BE FAST",
        "content": "B – Balance: sudden loss of balance or coordination E – Eyes: sudden loss of vision in one or both eyes F – Face: one side of the face droops A – Arm: weakness or numbness in one arm or leg S – Speech: slurred speech or difficulty understanding T – Time: call emergency services immediately and note the time symptoms began",
        "paragraphs": [],
        "bullets": [
          {
            "label": "B – Balance:",
            "text": "sudden loss of balance or coordination"
          },
          {
            "label": "E – Eyes:",
            "text": "sudden loss of vision in one or both eyes"
          },
          {
            "label": "F – Face:",
            "text": "one side of the face droops"
          },
          {
            "label": "A – Arm:",
            "text": "weakness or numbness in one arm or leg"
          },
          {
            "label": "S – Speech:",
            "text": "slurred speech or difficulty understanding"
          },
          {
            "label": "T – Time:",
            "text": "call emergency services immediately and note the time symptoms began"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Why time matters",
        "content": "Treatments for clot-related stroke work best when given early: A CT or MRI scan is done first to confirm whether the stroke is caused by a clot or bleeding, because treatments are very different. Thrombolysis (clot-busting medicine): usually within 4.5 hours of symptom onset, for suitable patients Mechanical thrombectomy: a catheter is passed to the brain to pull out a large clot. It can help selected patients up to 24 hours after onset, based on scans.",
        "paragraphs": [
          "Treatments for clot-related stroke work best when given early:",
          "A CT or MRI scan is done first to confirm whether the stroke is caused by a clot or bleeding, because treatments are very different."
        ],
        "bullets": [
          {
            "label": "Thrombolysis (clot-busting medicine):",
            "text": "usually within 4.5 hours of symptom onset, for suitable patients"
          },
          {
            "label": "Mechanical thrombectomy:",
            "text": "a catheter is passed to the brain to pull out a large clot. It can help selected patients up to 24 hours after onset, based on scans."
          }
        ],
        "callouts": []
      },
      {
        "heading": "What to do",
        "content": "1. Call 108 or 112 immediately. 2. Note the time symptoms started, or when the person was last seen well. 3. Do not give food, water or medicines. 4. Go to a hospital equipped to treat stroke, ideally with a CT scanner and thrombectomy facilities.",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Call 108 or 112 immediately."
          },
          {
            "number": 2,
            "text": "Note the time symptoms started, or when the person was last seen well."
          },
          {
            "number": 3,
            "text": "Do not give food, water or medicines."
          },
          {
            "number": 4,
            "text": "Go to a hospital equipped to treat stroke, ideally with a CT scanner and thrombectomy facilities."
          }
        ]
      },
      {
        "heading": "Risk factors",
        "content": "High blood pressure, the biggest risk factor Diabetes and high cholesterol Smoking and tobacco Irregular heartbeat (atrial fibrillation) Obesity, inactivity and heavy alcohol use Previous stroke or TIA",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "High blood pressure, the biggest risk factor"
          },
          {
            "label": "",
            "text": "Diabetes and high cholesterol"
          },
          {
            "label": "",
            "text": "Smoking and tobacco"
          },
          {
            "label": "",
            "text": "Irregular heartbeat (atrial fibrillation)"
          },
          {
            "label": "",
            "text": "Obesity, inactivity and heavy alcohol use"
          },
          {
            "label": "",
            "text": "Previous stroke or TIA"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Recovery",
        "content": "Many patients recover significant function with early rehabilitation. Medicines to prevent another stroke, such as blood thinners and cholesterol-lowering drugs, are usually needed long term.",
        "paragraphs": [
          "Many patients recover significant function with early rehabilitation. Medicines to prevent another stroke, such as blood thinners and cholesterol-lowering drugs, are usually needed long term."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Can young people have strokes?",
        "a": "Yes. Stroke can occur at any age, though risk rises after 55."
      },
      {
        "q": "If symptoms go away, do I still need to go to hospital?",
        "a": "Yes. A TIA needs urgent assessment because the risk of a full stroke is high in the following days."
      },
      {
        "q": "Can stroke be prevented?",
        "a": "Up to 80 percent of strokes may be preventable by controlling risk factors."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Stroke and Its Early Warning Signs (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Stroke and Its Early Warning Signs adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-033",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "alzheimers-disease-and-dementia-explained",
    "title": "Alzheimer's Disease and Dementia Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Dementia is not a normal part of ageing. It is a group of conditions that affect memory, thinking and the ability to manage daily life. Alzheimer's disease is the most common cause of dementia.",
    "diagram": null,
    "sections": [
      {
        "heading": "Dementia vs Alzheimer's",
        "content": "Other causes include vascular dementia (after strokes or poor blood flow), Lewy body dementia and frontotemporal dementia. Dementia is an umbrella term for symptoms such as memory loss, confusion and difficulty with daily tasks. Alzheimer's disease is a specific brain disease and the most common cause of dementia.",
        "paragraphs": [
          "Other causes include vascular dementia (after strokes or poor blood flow), Lewy body dementia and frontotemporal dementia."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Dementia is an umbrella term for symptoms such as memory loss, confusion and difficulty with daily tasks."
          },
          {
            "label": "",
            "text": "Alzheimer's disease is a specific brain disease and the most common cause of dementia."
          }
        ],
        "callouts": []
      },
      {
        "heading": "Normal forgetfulness or dementia?",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Normal ageing",
            "Possible dementia"
          ],
          "rows": [
            [
              "Occasionally forgetting a name, then remembering later",
              "Frequently forgetting recent events or conversations"
            ],
            [
              "Misplacing keys now and then",
              "Putting things in unusual places and being unable to retrace steps"
            ],
            [
              "Sometimes searching for a word",
              "Struggling to follow or join a conversation"
            ],
            [
              "Making an occasional poor decision",
              "Repeated poor judgement, such as with money"
            ]
          ]
        }
      },
      {
        "heading": "Early warning signs",
        "content": "Memory loss that affects daily life Repeating the same questions Getting lost in familiar places Difficulty planning or managing finances Changes in mood, personality or withdrawal from social activities Confusion about time or place",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Memory loss that affects daily life"
          },
          {
            "label": "",
            "text": "Repeating the same questions"
          },
          {
            "label": "",
            "text": "Getting lost in familiar places"
          },
          {
            "label": "",
            "text": "Difficulty planning or managing finances"
          },
          {
            "label": "",
            "text": "Changes in mood, personality or withdrawal from social activities"
          },
          {
            "label": "",
            "text": "Confusion about time or place"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "There is no single test. Doctors use: Some causes of memory problems, such as depression or vitamin deficiency, can be treated, so evaluation is important. Detailed history from the patient and family Memory and thinking tests Blood tests to rule out treatable causes such as thyroid problems and vitamin B12 deficiency MRI or CT brain scans Sometimes specialised scans or spinal fluid tests",
        "paragraphs": [
          "There is no single test. Doctors use:",
          "Some causes of memory problems, such as depression or vitamin deficiency, can be treated, so evaluation is important."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Detailed history from the patient and family"
          },
          {
            "label": "",
            "text": "Memory and thinking tests"
          },
          {
            "label": "",
            "text": "Blood tests to rule out treatable causes such as thyroid problems and vitamin B12 deficiency"
          },
          {
            "label": "",
            "text": "MRI or CT brain scans"
          },
          {
            "label": "",
            "text": "Sometimes specialised scans or spinal fluid tests"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment",
        "content": "Medicines can help with symptoms for some people Newer treatments that target amyloid protein in the brain are approved in some countries for early Alzheimer's in carefully selected patients Managing risk factors: blood pressure, diabetes, hearing loss and cholesterol Staying active: physical exercise, social engagement and mental stimulation",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Medicines can help with symptoms for some people"
          },
          {
            "label": "",
            "text": "Newer treatments that target amyloid protein in the brain are approved in some countries for early"
          },
          {
            "label": "",
            "text": "Alzheimer's in carefully selected patients"
          },
          {
            "label": "Managing risk factors:",
            "text": "blood pressure, diabetes, hearing loss and cholesterol"
          },
          {
            "label": "Staying active:",
            "text": "physical exercise, social engagement and mental stimulation"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Support for caregivers",
        "content": "Keep a simple, predictable daily routine Use calendars, notes and labels Make the home safe to prevent falls and wandering Plan legal and financial matters early Look after your own health and seek support",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Keep a simple, predictable daily routine"
          },
          {
            "label": "",
            "text": "Use calendars, notes and labels"
          },
          {
            "label": "",
            "text": "Make the home safe to prevent falls and wandering"
          },
          {
            "label": "",
            "text": "Plan legal and financial matters early"
          },
          {
            "label": "",
            "text": "Look after your own health and seek support"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a neurologist if memory problems are affecting daily life or are getting worse.",
    "faqs": [
      {
        "q": "Is memory loss always dementia?",
        "a": "No. Stress, depression, sleep problems, medicines and vitamin deficiency can affect memory."
      },
      {
        "q": "Is Alzheimer's hereditary?",
        "a": "Most cases are not directly inherited, though family history slightly raises risk."
      },
      {
        "q": "Can dementia be prevented?",
        "a": "Not entirely, but healthy habits and controlling risk factors may lower the risk."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Alzheimer's Disease and Dementia Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Alzheimer's Disease and Dementia Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-034",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "understanding-migraine-and-chronic-headaches",
    "title": "Understanding Migraine and Chronic Headaches",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Headaches are one of the most common health complaints. Most are not dangerous, but frequent or severe headaches can seriously affect work, study and family life. Migraine is a common cause and can be treated effectively.",
    "diagram": null,
    "sections": [
      {
        "heading": "Common types of headache",
        "content": "Migraine: moderate to severe throbbing pain, often on one side, with nausea and sensitivity to light and sound. Attacks last 4 to 72 hours. Tension-type headache: a band-like pressure on both sides of the head; usually milder Cluster headache: intense pain around one eye, occurring in clusters over weeks Medication-overuse headache: caused by taking painkillers too often",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Migraine:",
            "text": "moderate to severe throbbing pain, often on one side, with nausea and sensitivity to light and sound."
          },
          {
            "label": "",
            "text": "Attacks last 4 to 72 hours."
          },
          {
            "label": "Tension-type headache:",
            "text": "a band-like pressure on both sides of the head; usually milder"
          },
          {
            "label": "Cluster headache:",
            "text": "intense pain around one eye, occurring in clusters over weeks"
          },
          {
            "label": "Medication-overuse headache:",
            "text": "caused by taking painkillers too often"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What is migraine?",
        "content": "Migraine is a brain condition, not \"just a headache\". Some people experience an aura before the pain, such as flashing lights, zigzag lines or tingling. Migraine is about three times more common in women and often runs in families.",
        "paragraphs": [
          "Migraine is a brain condition, not \"just a headache\". Some people experience an aura before the pain, such as flashing lights, zigzag lines or tingling.",
          "Migraine is about three times more common in women and often runs in families."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Common triggers",
        "content": "Lack of sleep or oversleeping Skipped meals or dehydration Stress Hormonal changes around periods Bright lights, strong smells or loud noise Certain foods and alcohol Weather changes",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Lack of sleep or oversleeping"
          },
          {
            "label": "",
            "text": "Skipped meals or dehydration"
          },
          {
            "label": "",
            "text": "Stress"
          },
          {
            "label": "",
            "text": "Hormonal changes around periods"
          },
          {
            "label": "",
            "text": "Bright lights, strong smells or loud noise"
          },
          {
            "label": "",
            "text": "Certain foods and alcohol"
          },
          {
            "label": "",
            "text": "Weather changes"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Chronic headache",
        "content": "Headaches on 15 or more days a month for over three months are called chronic. Overusing painkillers is a common reason headaches become chronic.",
        "paragraphs": [
          "Headaches on 15 or more days a month for over three months are called chronic. Overusing painkillers is a common reason headaches become chronic."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Most headaches are diagnosed from a careful history and examination. Scans are needed only when there are warning signs. A headache diary helps your doctor identify patterns and triggers.",
        "paragraphs": [
          "Most headaches are diagnosed from a careful history and examination. Scans are needed only when there are warning signs. A headache diary helps your doctor identify patterns and triggers."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "For attacks: For prevention , if attacks are frequent: Lifestyle measures: regular sleep, meals and exercise, staying hydrated and managing stress. Simple pain relievers taken early Migraine-specific medicines such as triptans Anti-sickness medicines Daily preventive medicines Newer injectable treatments that target migraine pathways Botox injections for chronic migraine",
        "paragraphs": [
          "For attacks:",
          "For prevention , if attacks are frequent:",
          "Lifestyle measures: regular sleep, meals and exercise, staying hydrated and managing stress."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Simple pain relievers taken early"
          },
          {
            "label": "",
            "text": "Migraine-specific medicines such as triptans"
          },
          {
            "label": "",
            "text": "Anti-sickness medicines"
          },
          {
            "label": "",
            "text": "Daily preventive medicines"
          },
          {
            "label": "",
            "text": "Newer injectable treatments that target migraine pathways"
          },
          {
            "label": "",
            "text": "Botox injections for chronic migraine"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Warning signs that need urgent care",
        "content": "Sudden, severe \"thunderclap\" headache Headache with fever and stiff neck Headache with weakness, confusion, vision loss or difficulty speaking New headache after age 50 Headache after a head injury Headache that steadily worsens over days or weeks",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Sudden, severe \"thunderclap\" headache"
          },
          {
            "label": "",
            "text": "Headache with fever and stiff neck"
          },
          {
            "label": "",
            "text": "Headache with weakness, confusion, vision loss or difficulty speaking"
          },
          {
            "label": "",
            "text": "New headache after age 50"
          },
          {
            "label": "",
            "text": "Headache after a head injury"
          },
          {
            "label": "",
            "text": "Headache that steadily worsens over days or weeks"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a neurologist if headaches are frequent, affect daily life, change pattern, or need painkillers more than two or three days a week.",
    "faqs": [
      {
        "q": "Can migraine be cured?",
        "a": "There is no permanent cure, but most people can greatly reduce attacks with treatment."
      },
      {
        "q": "Do I need a brain scan for migraine?",
        "a": "Usually not, unless there are warning signs."
      },
      {
        "q": "Can taking painkillers daily make headaches worse?",
        "a": "Yes. Frequent use can cause medication-overuse headache."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Migraine and Chronic Headaches (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Migraine and Chronic Headaches adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-035",
    "specialtySlug": "neurology",
    "specialtyTitle": "Neurology",
    "slug": "recovery-and-rehabilitation-after-a-neurological-condition",
    "title": "Recovery and Rehabilitation After a Neurological Condition",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "After a stroke, brain surgery, brain injury or a progressive neurological condition, many people need help regaining abilities they have lost. Neuro-rehabilitation is a structured programme that helps the brain and body recover as much function and independence as possible.",
    "diagram": {
      "title": "The rehabilitation pathway",
      "steps": [
        {
          "number": "1",
          "title": "In hospital",
          "description": "Early, gentle therapy within days"
        },
        {
          "number": "2",
          "title": "Inpatient rehab",
          "description": "Intensive daily therapy"
        },
        {
          "number": "3",
          "title": "Outpatient",
          "description": "Regular sessions after discharge"
        },
        {
          "number": "4",
          "title": "Home programme",
          "description": "Ongoing exercises and community activity"
        }
      ]
    },
    "sections": [
      {
        "heading": "How does recovery happen?",
        "content": "The brain can reorganise itself and form new connections, a process called neuroplasticity . Repeated, focused practice helps healthy parts of the brain take over some lost functions. The fastest recovery usually happens in the first three to six months, but improvement can continue much longer.",
        "paragraphs": [
          "The brain can reorganise itself and form new connections, a process called neuroplasticity . Repeated, focused practice helps healthy parts of the brain take over some lost functions. The fastest recovery usually happens in the first three to six months, but improvement can continue much longer."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who is in the rehab team?",
        "content": "Neurologist or rehabilitation physician: leads the plan Physiotherapist: strength, balance and walking Occupational therapist: daily activities such as dressing, bathing and eating Speech and language therapist: speech, understanding and swallowing Psychologist: memory, mood and adjustment Nurses, dietitians and social workers",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Neurologist or rehabilitation physician:",
            "text": "leads the plan"
          },
          {
            "label": "Physiotherapist:",
            "text": "strength, balance and walking"
          },
          {
            "label": "Occupational therapist:",
            "text": "daily activities such as dressing, bathing and eating"
          },
          {
            "label": "Speech and language therapist:",
            "text": "speech, understanding and swallowing"
          },
          {
            "label": "Psychologist:",
            "text": "memory, mood and adjustment"
          },
          {
            "label": "",
            "text": "Nurses, dietitians and social workers"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common therapies",
        "content": "Movement training: exercises to improve strength, balance and walking Task-specific practice: repeating everyday activities Speech therapy: for difficulty speaking (aphasia) or slurred speech Swallowing therapy: to eat and drink safely Cognitive rehabilitation: for memory, attention and problem solving Assistive devices: walkers, braces and adapted utensils Technology-assisted therapy: in some centres, robotic or computer-based training",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Movement training:",
            "text": "exercises to improve strength, balance and walking"
          },
          {
            "label": "Task-specific practice:",
            "text": "repeating everyday activities"
          },
          {
            "label": "Speech therapy:",
            "text": "for difficulty speaking (aphasia) or slurred speech"
          },
          {
            "label": "Swallowing therapy:",
            "text": "to eat and drink safely"
          },
          {
            "label": "Cognitive rehabilitation:",
            "text": "for memory, attention and problem solving"
          },
          {
            "label": "Assistive devices:",
            "text": "walkers, braces and adapted utensils"
          },
          {
            "label": "Technology-assisted therapy:",
            "text": "in some centres, robotic or computer-based training"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When does rehabilitation start?",
        "content": "As soon as the patient is medically stable, often within a few days in hospital. Early mobilisation helps prevent complications such as bed sores, stiff joints and chest infections.",
        "paragraphs": [
          "As soon as the patient is medically stable, often within a few days in hospital. Early mobilisation helps prevent complications such as bed sores, stiff joints and chest infections."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How families can help",
        "content": "Attend therapy sessions to learn exercises Encourage independence rather than doing everything for the patient Keep a regular daily routine Make the home safe: handrails, good lighting and no loose rugs Watch for low mood, which is common and treatable",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Attend therapy sessions to learn exercises"
          },
          {
            "label": "",
            "text": "Encourage independence rather than doing everything for the patient"
          },
          {
            "label": "",
            "text": "Keep a regular daily routine"
          },
          {
            "label": "",
            "text": "Make the home safe: handrails, good lighting and no loose rugs"
          },
          {
            "label": "",
            "text": "Watch for low mood, which is common and treatable"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Setting realistic goals",
        "content": "Recovery varies widely. Small, measurable goals, such as walking to the bathroom or feeding oneself, help track progress and keep motivation high.",
        "paragraphs": [
          "Recovery varies widely. Small, measurable goals, such as walking to the bathroom or feeding oneself, help track progress and keep motivation high."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Ask your neurologist for a rehabilitation referral after any stroke, brain surgery or serious neurological event, and whenever function is declining in a long-term condition.",
    "faqs": [
      {
        "q": "How long does rehabilitation take?",
        "a": "It depends on the condition and severity, from a few weeks to many months."
      },
      {
        "q": "Can recovery continue after six months?",
        "a": "Yes. Progress often slows but can continue for a long time with practice."
      },
      {
        "q": "Can rehab be done at home?",
        "a": "Yes. Home programmes are an important part of recovery once inpatient therapy ends."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Recovery and Rehabilitation After a Neurological Condition (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Recovery and Rehabilitation After a Neurological Condition adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-036",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "when-do-you-need-a-knee-replacement",
    "title": "When Do You Need a Knee Replacement?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Knee replacement is one of the most successful operations in modern medicine. But surgery is not the first step for knee pain. The right time depends on how much the knee affects your life, not just on what the X-ray shows.",
    "diagram": {
      "title": "Steps before deciding on surgery",
      "steps": [
        {
          "number": "1",
          "title": "Diagnosis",
          "description": "X-ray confirms arthritis severity"
        },
        {
          "number": "2",
          "title": "Conservative care",
          "description": "Weight control, exercise, medicines"
        },
        {
          "number": "3",
          "title": "Injections",
          "description": "May give temporary relief"
        },
        {
          "number": "4",
          "title": "Surgery",
          "description": "Considered when pain limits daily life"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "In a knee replacement, the damaged surfaces of the knee joint are removed and replaced with smooth metal and medical-grade plastic parts. This allows the joint to move without bone rubbing on bone. Total knee replacement (TKR): all joint surfaces are replaced Partial (unicompartmental) knee replacement: only the damaged part is replaced, when arthritis is limited to one area Robotic-assisted surgery: a robotic system helps the surgeon plan and position implants precisely",
        "paragraphs": [
          "In a knee replacement, the damaged surfaces of the knee joint are removed and replaced with smooth metal and medical-grade plastic parts. This allows the joint to move without bone rubbing on bone."
        ],
        "bullets": [
          {
            "label": "Total knee replacement (TKR):",
            "text": "all joint surfaces are replaced"
          },
          {
            "label": "Partial (unicompartmental) knee replacement:",
            "text": "only the damaged part is replaced, when arthritis is limited to one area"
          },
          {
            "label": "Robotic-assisted surgery:",
            "text": "a robotic system helps the surgeon plan and position implants precisely"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Signs it may be time",
        "content": "Knee pain that limits walking, climbing stairs or getting up from a chair Pain at rest or pain that disturbs your sleep Stiffness or swelling that does not improve A knee that is bending outwards or inwards (bow legs or knock knees) Little or no relief from medicines, physiotherapy or injections Pain stopping you from working or enjoying daily life",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Knee pain that limits walking, climbing stairs or getting up from a chair"
          },
          {
            "label": "",
            "text": "Pain at rest or pain that disturbs your sleep"
          },
          {
            "label": "",
            "text": "Stiffness or swelling that does not improve"
          },
          {
            "label": "",
            "text": "A knee that is bending outwards or inwards (bow legs or knock knees)"
          },
          {
            "label": "",
            "text": "Little or no relief from medicines, physiotherapy or injections"
          },
          {
            "label": "",
            "text": "Pain stopping you from working or enjoying daily life"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common causes",
        "content": "Osteoarthritis: wear-and-tear of the cartilage, the most common reason Rheumatoid arthritis and other inflammatory conditions Arthritis after an old injury",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Osteoarthritis:",
            "text": "wear-and-tear of the cartilage, the most common reason"
          },
          {
            "label": "",
            "text": "Rheumatoid arthritis and other inflammatory conditions"
          },
          {
            "label": "",
            "text": "Arthritis after an old injury"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Try these first",
        "content": "Weight loss, which significantly reduces load on the knees Strengthening exercises and physiotherapy Pain relief medicines, used as advised Walking aids or knee braces Joint injections, which may give temporary relief",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Weight loss, which significantly reduces load on the knees"
          },
          {
            "label": "",
            "text": "Strengthening exercises and physiotherapy"
          },
          {
            "label": "",
            "text": "Pain relief medicines, used as advised"
          },
          {
            "label": "",
            "text": "Walking aids or knee braces"
          },
          {
            "label": "",
            "text": "Joint injections, which may give temporary relief"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How surgeons decide",
        "content": "Your surgeon considers your symptoms, examination, X-rays, age, activity level and general health. There is no \"right age\". The decision is about quality of life and whether conservative treatment has stopped working.",
        "paragraphs": [
          "Your surgeon considers your symptoms, examination, X-rays, age, activity level and general health. There is no \"right age\". The decision is about quality of life and whether conservative treatment has stopped working."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "See an orthopaedic surgeon if knee pain has lasted more than a few months, is getting worse, or is limiting your independence.",
    "faqs": [
      {
        "q": "Am I too young or too old for a knee replacement?",
        "a": "Age alone is not the deciding factor. Your symptoms, health and activity level matter more."
      },
      {
        "q": "How long does a knee replacement last?",
        "a": "Most modern knee replacements last 15 to 20 years or more."
      },
      {
        "q": "Should I wait until I can barely walk?",
        "a": "No. Waiting too long can weaken muscles and make recovery harder."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for When Do You Need a Knee Replacement? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for When Do You Need a Knee Replacement? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-037",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "total-hip-replacement-explained",
    "title": "Total Hip Replacement Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "The hip is a ball-and-socket joint that carries your body weight with every step. When it is badly damaged, walking and even sleeping can become painful. A total hip replacement replaces the damaged joint with an artificial one to relieve pain and restore movement.",
    "diagram": {
      "title": "Parts of a hip replacement",
      "steps": [
        {
          "number": "1",
          "title": "Socket (cup)",
          "description": "Metal shell fitted into the pelvis"
        },
        {
          "number": "2",
          "title": "Liner",
          "description": "Smooth plastic or ceramic surface"
        },
        {
          "number": "3",
          "title": "Ball (head)",
          "description": "Metal or ceramic ball"
        },
        {
          "number": "4",
          "title": "Stem",
          "description": "Fits inside the thigh bone"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "During the surgery, the damaged ball at the top of the thigh bone and the worn socket in the pelvis are replaced with implants. These are made from metal, ceramic and highly durable plastic.",
        "paragraphs": [
          "During the surgery, the damaged ball at the top of the thigh bone and the worn socket in the pelvis are replaced with implants. These are made from metal, ceramic and highly durable plastic."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who may need it?",
        "content": "Osteoarthritis of the hip Avascular necrosis (AVN): loss of blood supply to the ball of the hip, which can affect younger adults, often linked to steroid use or alcohol Rheumatoid arthritis and ankylosing spondylitis Hip fractures in older adults Childhood hip problems that lead to early arthritis",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Osteoarthritis of the hip"
          },
          {
            "label": "Avascular necrosis (AVN):",
            "text": "loss of blood supply to the ball of the hip, which can affect younger adults, often linked to steroid use or alcohol"
          },
          {
            "label": "",
            "text": "Rheumatoid arthritis and ankylosing spondylitis"
          },
          {
            "label": "",
            "text": "Hip fractures in older adults"
          },
          {
            "label": "",
            "text": "Childhood hip problems that lead to early arthritis"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Symptoms that suggest hip damage",
        "content": "Pain in the groin, thigh or buttock Limping Difficulty putting on socks and shoes Stiffness after sitting Pain that disturbs sleep",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Pain in the groin, thigh or buttock"
          },
          {
            "label": "",
            "text": "Limping"
          },
          {
            "label": "",
            "text": "Difficulty putting on socks and shoes"
          },
          {
            "label": "",
            "text": "Stiffness after sitting"
          },
          {
            "label": "",
            "text": "Pain that disturbs sleep"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "An X-ray usually shows the condition of the joint. MRI may be needed to detect early AVN.",
        "paragraphs": [
          "An X-ray usually shows the condition of the joint. MRI may be needed to detect early AVN."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What happens during surgery?",
        "content": "The operation usually takes 1 to 2 hours. 1. Spinal or general anaesthesia is given. 2. The surgeon reaches the hip through an incision at the side, back or front of the hip. 3. The damaged bone is removed and implants are fixed, with or without bone cement. 4. The wound is closed.",
        "paragraphs": [
          "The operation usually takes 1 to 2 hours."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Spinal or general anaesthesia is given."
          },
          {
            "number": 2,
            "text": "The surgeon reaches the hip through an incision at the side, back or front of the hip."
          },
          {
            "number": 3,
            "text": "The damaged bone is removed and implants are fixed, with or without bone cement."
          },
          {
            "number": 4,
            "text": "The wound is closed."
          }
        ]
      },
      {
        "heading": "Recovery milestones",
        "content": "Day 1: standing and walking with a walker Days 3 to 5: discharge home in most cases 2 to 6 weeks: walking with a stick, then independently 6 to 12 weeks: return to most daily activities, including driving when cleared",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Day 1:",
            "text": "standing and walking with a walker"
          },
          {
            "label": "Days 3 to 5:",
            "text": "discharge home in most cases"
          },
          {
            "label": "2 to 6 weeks:",
            "text": "walking with a stick, then independently"
          },
          {
            "label": "6 to 12 weeks:",
            "text": "return to most daily activities, including driving when cleared"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Precautions",
        "content": "Depending on the surgical approach, your surgeon may advise avoiding: Follow your surgeon's specific instructions, as precautions vary. Bending the hip beyond 90 degrees Crossing your legs Twisting the operated leg inwards",
        "paragraphs": [
          "Depending on the surgical approach, your surgeon may advise avoiding:",
          "Follow your surgeon's specific instructions, as precautions vary."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Bending the hip beyond 90 degrees"
          },
          {
            "label": "",
            "text": "Crossing your legs"
          },
          {
            "label": "",
            "text": "Twisting the operated leg inwards"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See an orthopaedic surgeon if hip or groin pain is persistent, affects walking or sleep, or does not improve with treatment.",
    "faqs": [
      {
        "q": "Can young people have hip replacements?",
        "a": "Yes, particularly for conditions such as AVN, when the joint is severely damaged."
      },
      {
        "q": "Will I be able to sit cross-legged or on the floor?",
        "a": "Discuss this with your surgeon. Some positions may be restricted, depending on the implant and approach."
      },
      {
        "q": "What is a dislocation?",
        "a": "The ball slipping out of the socket. It is uncommon, and precautions reduce the risk."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Total Hip Replacement Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Total Hip Replacement Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-038",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "minimally-invasive-hip-replacement",
    "title": "Minimally Invasive Hip Replacement",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Minimally invasive hip replacement uses smaller incisions and techniques that disturb less muscle than traditional surgery. The joint replacement itself is the same; what changes is how the surgeon reaches the hip.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "In traditional hip replacement, the incision may be 15 to 25 cm long, and some muscles are cut and repaired. Minimally invasive techniques often use an incision of about 8 to 12 cm and work between muscles rather than through them. Common approaches include: Direct anterior approach: from the front of the hip Mini-posterior approach: a shorter incision at the back of the hip Other muscle-sparing approaches",
        "paragraphs": [
          "In traditional hip replacement, the incision may be 15 to 25 cm long, and some muscles are cut and repaired.",
          "Minimally invasive techniques often use an incision of about 8 to 12 cm and work between muscles rather than through them.",
          "Common approaches include:"
        ],
        "bullets": [
          {
            "label": "Direct anterior approach:",
            "text": "from the front of the hip"
          },
          {
            "label": "Mini-posterior approach:",
            "text": "a shorter incision at the back of the hip"
          },
          {
            "label": "",
            "text": "Other muscle-sparing approaches"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Possible benefits",
        "content": "Research shows that the main advantages are in the first few weeks . Long-term results are similar to traditional surgery when performed by experienced surgeons. Less muscle damage Smaller scar Less pain in the early days Faster early recovery, such as walking sooner Shorter hospital stay for some patients Fewer movement restrictions with some approaches",
        "paragraphs": [
          "Research shows that the main advantages are in the first few weeks . Long-term results are similar to traditional surgery when performed by experienced surgeons."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Less muscle damage"
          },
          {
            "label": "",
            "text": "Smaller scar"
          },
          {
            "label": "",
            "text": "Less pain in the early days"
          },
          {
            "label": "",
            "text": "Faster early recovery, such as walking sooner"
          },
          {
            "label": "",
            "text": "Shorter hospital stay for some patients"
          },
          {
            "label": "",
            "text": "Fewer movement restrictions with some approaches"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who is suitable?",
        "content": "Minimally invasive surgery may suit patients who: It may not be suitable for people with severe deformity, very high body weight, complex revision surgery or significant bone loss. Are within a healthy weight range or have moderate body weight Have normal hip anatomy Have not had previous hip surgery Have good bone quality",
        "paragraphs": [
          "Minimally invasive surgery may suit patients who:",
          "It may not be suitable for people with severe deformity, very high body weight, complex revision surgery or significant bone loss."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Are within a healthy weight range or have moderate body weight"
          },
          {
            "label": "",
            "text": "Have normal hip anatomy"
          },
          {
            "label": "",
            "text": "Have not had previous hip surgery"
          },
          {
            "label": "",
            "text": "Have good bone quality"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Limitations and risks",
        "content": "It requires specialised training and equipment The surgeon has a smaller view of the joint Some approaches carry a risk of temporary numbness on the front of the thigh All hip replacement risks still apply, including infection, blood clots and dislocation",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "It requires specialised training and equipment"
          },
          {
            "label": "",
            "text": "The surgeon has a smaller view of the joint"
          },
          {
            "label": "",
            "text": "Some approaches carry a risk of temporary numbness on the front of the thigh"
          },
          {
            "label": "",
            "text": "All hip replacement risks still apply, including infection, blood clots and dislocation"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Choosing the right approach",
        "content": "The best approach is the one your surgeon performs regularly and that fits your anatomy. A well-performed traditional operation is better than a poorly suited minimally invasive one.",
        "paragraphs": [
          "The best approach is the one your surgeon performs regularly and that fits your anatomy. A well-performed traditional operation is better than a poorly suited minimally invasive one."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Recovery",
        "content": "Many patients walk on the same or next day and go home within a few days. Physiotherapy remains essential to restore strength and walking pattern.",
        "paragraphs": [
          "Many patients walk on the same or next day and go home within a few days. Physiotherapy remains essential to restore strength and walking pattern."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "If you are considering hip replacement, ask your surgeon which approach they recommend for you and why.",
    "faqs": [
      {
        "q": "Is minimally invasive surgery better in the long run?",
        "a": "Long-term outcomes are generally similar. The main benefit is a quicker early recovery."
      },
      {
        "q": "Is robotic surgery the same as minimally invasive?",
        "a": "Not exactly. Robotics helps implant positioning; minimally invasive refers to the surgical approach. They can be combined."
      },
      {
        "q": "Will I need physiotherapy?",
        "a": "Yes. It is important regardless of the approach."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Minimally Invasive Hip Replacement (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Minimally Invasive Hip Replacement adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-039",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "acl-injury-symptoms-diagnosis-and-treatment",
    "title": "ACL Injury: Symptoms, Diagnosis and Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "The anterior cruciate ligament (ACL) is one of the main ligaments that keeps your knee stable. ACL tears are among the most common sports injuries, especially in football, kabaddi, basketball and badminton.",
    "diagram": {
      "title": "Immediate care for a knee injury",
      "steps": [
        {
          "number": "1",
          "title": "Protect",
          "description": "Stop playing; avoid weight if painful"
        },
        {
          "number": "2",
          "title": "Rest and ice",
          "description": "15 to 20 minutes every few hours"
        },
        {
          "number": "3",
          "title": "Compress and elevate",
          "description": "Reduce swelling"
        },
        {
          "number": "4",
          "title": "See a specialist",
          "description": "Especially if you heard a pop or the knee gives way"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is the ACL?",
        "content": "The ACL is a strong band inside the knee that connects the thigh bone to the shin bone. It stops the shin bone from sliding forward and helps control twisting movements.",
        "paragraphs": [
          "The ACL is a strong band inside the knee that connects the thigh bone to the shin bone. It stops the shin bone from sliding forward and helps control twisting movements."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How does it get injured?",
        "content": "Women athletes have a higher risk of ACL injury than men. Sudden stopping or changing direction Landing awkwardly from a jump Twisting the knee with the foot planted A direct blow to the knee",
        "paragraphs": [
          "Women athletes have a higher risk of ACL injury than men."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Sudden stopping or changing direction"
          },
          {
            "label": "",
            "text": "Landing awkwardly from a jump"
          },
          {
            "label": "",
            "text": "Twisting the knee with the foot planted"
          },
          {
            "label": "",
            "text": "A direct blow to the knee"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Symptoms",
        "content": "ACL tears often occur with other injuries, such as meniscus (cartilage cushion) tears. A \"pop\" felt or heard at the time of injury Rapid swelling within a few hours Pain and difficulty putting weight on the leg The knee feeling unstable or giving way , especially when turning Loss of full movement",
        "paragraphs": [
          "ACL tears often occur with other injuries, such as meniscus (cartilage cushion) tears."
        ],
        "bullets": [
          {
            "label": "",
            "text": "A \"pop\" felt or heard at the time of injury"
          },
          {
            "label": "",
            "text": "Rapid swelling within a few hours"
          },
          {
            "label": "",
            "text": "Pain and difficulty putting weight on the leg"
          },
          {
            "label": "",
            "text": "The knee feeling unstable or giving way , especially when turning"
          },
          {
            "label": "",
            "text": "Loss of full movement"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Physical examination: special tests such as the Lachman test check knee stability X-ray: to rule out fractures MRI: confirms the ACL tear and shows other damage",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Physical examination:",
            "text": "special tests such as the Lachman test check knee stability"
          },
          {
            "label": "X-ray:",
            "text": "to rule out fractures"
          },
          {
            "label": "MRI:",
            "text": "confirms the ACL tear and shows other damage"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Non-surgical treatment may suit people who: This involves structured physiotherapy to strengthen the muscles around the knee and sometimes a brace. Surgery (ACL reconstruction) is usually recommended for: Are less active or do not play pivoting sports Have a partial tear with a stable knee Are willing to adjust activities Young, active people and athletes People whose knee keeps giving way Those with other injuries such as meniscus tears",
        "paragraphs": [
          "Non-surgical treatment may suit people who:",
          "This involves structured physiotherapy to strengthen the muscles around the knee and sometimes a brace.",
          "Surgery (ACL reconstruction) is usually recommended for:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Are less active or do not play pivoting sports"
          },
          {
            "label": "",
            "text": "Have a partial tear with a stable knee"
          },
          {
            "label": "",
            "text": "Are willing to adjust activities"
          },
          {
            "label": "",
            "text": "Young, active people and athletes"
          },
          {
            "label": "",
            "text": "People whose knee keeps giving way"
          },
          {
            "label": "",
            "text": "Those with other injuries such as meniscus tears"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Why treatment matters",
        "content": "Repeated episodes of the knee giving way can damage the meniscus and cartilage, raising the risk of early arthritis.",
        "paragraphs": [
          "Repeated episodes of the knee giving way can damage the meniscus and cartilage, raising the risk of early arthritis."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "See a sports medicine or orthopaedic specialist after any knee injury with a pop, significant swelling or instability.",
    "faqs": [
      {
        "q": "Can a torn ACL heal on its own?",
        "a": "A completely torn ACL usually does not heal back together, though some people manage well with rehabilitation."
      },
      {
        "q": "Can I walk with a torn ACL?",
        "a": "Often yes, once swelling settles, but the knee may give way during twisting activities."
      },
      {
        "q": "Should I have surgery immediately?",
        "a": "Surgery is often done after swelling settles and movement returns, typically a few weeks after injury."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for ACL Injury: Symptoms, Diagnosis and Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for ACL Injury: Symptoms, Diagnosis and Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-040",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "acl-reconstruction-what-happens-during-surgery",
    "title": "ACL Reconstruction: What Happens During Surgery?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "ACL reconstruction is a keyhole operation that replaces a torn anterior cruciate ligament with a new ligament, called a graft. It restores stability to the knee so you can return to active life and sports.",
    "diagram": {
      "title": "ACL rehabilitation timeline",
      "steps": [
        {
          "number": "1",
          "title": "Weeks 0 to 2",
          "description": "Control swelling; regain straightening"
        },
        {
          "number": "2",
          "title": "Weeks 2 to 6",
          "description": "Walk normally; bend the knee"
        },
        {
          "number": "3",
          "title": "Months 2 to 4",
          "description": "Strength and balance training Months 4 to 6 Running and agility drills"
        },
        {
          "number": "4",
          "title": "5",
          "description": "Months 9 to 12 Gradual return to sport"
        }
      ]
    },
    "sections": [
      {
        "heading": "Why reconstruction rather than repair?",
        "content": "A torn ACL rarely heals well when stitched. Instead, surgeons use a graft that acts as a framework for a new ligament to grow into.",
        "paragraphs": [
          "A torn ACL rarely heals well when stitched. Instead, surgeons use a graft that acts as a framework for a new ligament to grow into."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Graft options",
        "content": "Your surgeon will recommend the best option based on your age, activity and knee condition.",
        "paragraphs": [
          "Your surgeon will recommend the best option based on your age, activity and knee condition."
        ],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Graft",
            "Taken from"
          ],
          "rows": [
            [
              "Hamstring tendon",
              "Tendons at the back of your thigh"
            ],
            [
              "Patellar tendon",
              "The middle third of the tendon below the kneecap"
            ],
            [
              "Quadriceps tendon",
              "The tendon above the kneecap"
            ],
            [
              "Allograft",
              "Donor tissue"
            ]
          ]
        }
      },
      {
        "heading": "What happens during surgery?",
        "content": "Surgery usually takes 1 to 2 hours. Many patients go home the same day or the next day. 1. Spinal or general anaesthesia is given. 2. The surgeon makes two or three small cuts and inserts a camera ( arthroscope ) into the knee. 3. The torn ACL is cleared and any meniscus injury is treated. 4. The graft is harvested and prepared. 5. Small tunnels are drilled in the thigh and shin bones. 6. The graft is passed through and fixed with screws or buttons.",
        "paragraphs": [
          "Surgery usually takes 1 to 2 hours. Many patients go home the same day or the next day."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Spinal or general anaesthesia is given."
          },
          {
            "number": 2,
            "text": "The surgeon makes two or three small cuts and inserts a camera ( arthroscope ) into the knee."
          },
          {
            "number": 3,
            "text": "The torn ACL is cleared and any meniscus injury is treated."
          },
          {
            "number": 4,
            "text": "The graft is harvested and prepared."
          },
          {
            "number": 5,
            "text": "Small tunnels are drilled in the thigh and shin bones."
          },
          {
            "number": 6,
            "text": "The graft is passed through and fixed with screws or buttons."
          }
        ]
      },
      {
        "heading": "Recovery and rehabilitation",
        "content": "Rehabilitation is just as important as surgery. It follows a staged plan: Return to pivoting sports usually takes 9 to 12 months . Returning too early increases the risk of a second injury. Walking with crutches for the first few weeks Physiotherapy starting within days Gradually increasing strength, balance and control Sport-specific training after several months",
        "paragraphs": [
          "Rehabilitation is just as important as surgery. It follows a staged plan:",
          "Return to pivoting sports usually takes 9 to 12 months . Returning too early increases the risk of a second injury."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Walking with crutches for the first few weeks"
          },
          {
            "label": "",
            "text": "Physiotherapy starting within days"
          },
          {
            "label": "",
            "text": "Gradually increasing strength, balance and control"
          },
          {
            "label": "",
            "text": "Sport-specific training after several months"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Possible risks",
        "content": "Knee stiffness Infection or blood clots (uncommon) Graft failure or re-injury Pain at the graft site",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Knee stiffness"
          },
          {
            "label": "",
            "text": "Infection or blood clots (uncommon)"
          },
          {
            "label": "",
            "text": "Graft failure or re-injury"
          },
          {
            "label": "",
            "text": "Pain at the graft site"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Talk to a sports orthopaedic surgeon if your knee gives way after an ACL injury or you want to return to sports.",
    "faqs": [
      {
        "q": "Is ACL surgery painful?",
        "a": "There is some pain for the first few days, which is managed with medicines and ice."
      },
      {
        "q": "When can I drive?",
        "a": "Usually after a few weeks, once you have good control of the leg. Ask your surgeon."
      },
      {
        "q": "Will my knee be as good as before?",
        "a": "Most people regain a stable knee and return to activity, though results depend on rehabilitation and other knee damage."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for ACL Reconstruction: What Happens During Surgery? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for ACL Reconstruction: What Happens During Surgery? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-041",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "shoulder-replacement-who-needs-it",
    "title": "Shoulder Replacement: Who Needs It?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "The shoulder is the most mobile joint in the body. When it is badly damaged by arthritis or injury, simple tasks like combing hair or reaching a shelf can become painful. Shoulder replacement can relieve pain and improve movement when other treatments no longer work.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "Like the hip, the shoulder is a ball-and-socket joint. In shoulder replacement, the damaged ball and socket are replaced with artificial parts.",
        "paragraphs": [
          "Like the hip, the shoulder is a ball-and-socket joint. In shoulder replacement, the damaged ball and socket are replaced with artificial parts."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Types of shoulder replacement",
        "content": "Anatomical total shoulder replacement: the new ball and socket mimic your natural shoulder. It needs healthy rotator cuff muscles. Reverse shoulder replacement: the ball and socket positions are swapped. This allows the larger deltoid muscle to lift the arm, and is used when the rotator cuff is badly torn or not working. Partial replacement (hemiarthroplasty): only the ball is replaced, used in selected cases such as some fractures.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Anatomical total shoulder replacement:",
            "text": "the new ball and socket mimic your natural shoulder. It needs healthy rotator cuff muscles."
          },
          {
            "label": "Reverse shoulder replacement:",
            "text": "the ball and socket positions are swapped. This allows the larger deltoid muscle to lift the arm, and is used when the rotator cuff is badly torn or not working."
          },
          {
            "label": "Partial replacement (hemiarthroplasty):",
            "text": "only the ball is replaced, used in selected cases such as some fractures."
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who may need it?",
        "content": "Osteoarthritis of the shoulder Rheumatoid arthritis Rotator cuff tear arthropathy: arthritis after a large, long-standing rotator cuff tear Complex shoulder fractures in older adults Avascular necrosis of the shoulder",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Osteoarthritis of the shoulder"
          },
          {
            "label": "",
            "text": "Rheumatoid arthritis"
          },
          {
            "label": "Rotator cuff tear arthropathy:",
            "text": "arthritis after a large, long-standing rotator cuff tear"
          },
          {
            "label": "",
            "text": "Complex shoulder fractures in older adults"
          },
          {
            "label": "",
            "text": "Avascular necrosis of the shoulder"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Symptoms",
        "content": "Persistent shoulder pain, often worse at night Difficulty lifting the arm or reaching behind the back Stiffness and a grinding sensation Weakness Little relief from medicines, injections or physiotherapy",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Persistent shoulder pain, often worse at night"
          },
          {
            "label": "",
            "text": "Difficulty lifting the arm or reaching behind the back"
          },
          {
            "label": "",
            "text": "Stiffness and a grinding sensation"
          },
          {
            "label": "",
            "text": "Weakness"
          },
          {
            "label": "",
            "text": "Little relief from medicines, injections or physiotherapy"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Physical examination of movement and strength X-rays to assess joint damage CT or MRI to check bone shape and rotator cuff condition",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Physical examination of movement and strength"
          },
          {
            "label": "",
            "text": "X-rays to assess joint damage"
          },
          {
            "label": "",
            "text": "CT or MRI to check bone shape and rotator cuff condition"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What to expect from surgery",
        "content": "Performed under general anaesthesia, often with a nerve block for pain relief Takes about 1.5 to 2 hours Hospital stay of 1 to 3 days Arm in a sling for around 4 to 6 weeks",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Performed under general anaesthesia, often with a nerve block for pain relief"
          },
          {
            "label": "",
            "text": "Takes about 1.5 to 2 hours"
          },
          {
            "label": "",
            "text": "Hospital stay of 1 to 3 days"
          },
          {
            "label": "",
            "text": "Arm in a sling for around 4 to 6 weeks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Recovery",
        "content": "Gentle exercises begin early, guided by a physiotherapist Active movement and strengthening follow in stages Most daily activities are possible by around 3 months Full recovery may take 6 to 12 months",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Gentle exercises begin early, guided by a physiotherapist"
          },
          {
            "label": "",
            "text": "Active movement and strengthening follow in stages"
          },
          {
            "label": "",
            "text": "Most daily activities are possible by around 3 months"
          },
          {
            "label": "",
            "text": "Full recovery may take 6 to 12 months"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See an orthopaedic shoulder specialist if shoulder pain affects sleep or daily activities and has not improved with treatment.",
    "faqs": [
      {
        "q": "How long does a shoulder replacement last?",
        "a": "Most last 15 years or more."
      },
      {
        "q": "Will I be able to lift my arm above my head?",
        "a": "Most patients gain useful overhead movement, though the final range varies."
      },
      {
        "q": "Can I sleep on the operated side?",
        "a": "Usually not for the first few weeks. Your surgeon will advise."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Shoulder Replacement: Who Needs It? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Shoulder Replacement: Who Needs It? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-042",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "understanding-osteoarthritis",
    "title": "Understanding Osteoarthritis",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Osteoarthritis is the most common type of arthritis. It affects millions of people, especially after the age of 50. Although it cannot be reversed, there is a lot you can do to reduce pain and stay active.",
    "diagram": {
      "title": "Stages of osteoarthritis care",
      "steps": [
        {
          "number": "1",
          "title": "Early",
          "description": "Exercise, weight control, education"
        },
        {
          "number": "2",
          "title": "Moderate",
          "description": "Physiotherapy, medicines, supports"
        },
        {
          "number": "3",
          "title": "Advanced",
          "description": "Injections for symptom relief"
        },
        {
          "number": "4",
          "title": "Severe",
          "description": "Joint replacement considered"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "The ends of bones in a joint are covered with smooth cartilage , which allows them to glide over each other. In osteoarthritis, this cartilage gradually wears down. The bone underneath changes, small bony growths called bone spurs form, and the joint can become painful, stiff and swollen.",
        "paragraphs": [
          "The ends of bones in a joint are covered with smooth cartilage , which allows them to glide over each other. In osteoarthritis, this cartilage gradually wears down. The bone underneath changes, small bony growths called bone spurs form, and the joint can become painful, stiff and swollen."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Joints commonly affected",
        "content": "Knees (very common in India) Hips Hands and fingers Neck and lower back",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Knees (very common in India)"
          },
          {
            "label": "",
            "text": "Hips"
          },
          {
            "label": "",
            "text": "Hands and fingers"
          },
          {
            "label": "",
            "text": "Neck and lower back"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Symptoms",
        "content": "Pain that worsens with activity and improves with rest Morning stiffness lasting less than about 30 minutes Stiffness after sitting for a long time Swelling A grinding or crackling feeling Reduced movement In the knees, gradual bowing of the legs",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Pain that worsens with activity and improves with rest"
          },
          {
            "label": "",
            "text": "Morning stiffness lasting less than about 30 minutes"
          },
          {
            "label": "",
            "text": "Stiffness after sitting for a long time"
          },
          {
            "label": "",
            "text": "Swelling"
          },
          {
            "label": "",
            "text": "A grinding or crackling feeling"
          },
          {
            "label": "",
            "text": "Reduced movement"
          },
          {
            "label": "",
            "text": "In the knees, gradual bowing of the legs"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Risk factors",
        "content": "Increasing age Excess body weight, which multiplies the load on the knees Previous joint injury Family history Being female Jobs involving repeated kneeling, squatting or heavy lifting",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Increasing age"
          },
          {
            "label": "",
            "text": "Excess body weight, which multiplies the load on the knees"
          },
          {
            "label": "",
            "text": "Previous joint injury"
          },
          {
            "label": "",
            "text": "Family history"
          },
          {
            "label": "",
            "text": "Being female"
          },
          {
            "label": "",
            "text": "Jobs involving repeated kneeling, squatting or heavy lifting"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Doctors diagnose osteoarthritis from your symptoms, an examination and X-rays . Blood tests may be done to rule out other types of arthritis, such as rheumatoid arthritis.",
        "paragraphs": [
          "Doctors diagnose osteoarthritis from your symptoms, an examination and X-rays . Blood tests may be done to rule out other types of arthritis, such as rheumatoid arthritis."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Self-care and lifestyle: Medical treatment: Surgery: Regular exercise, especially strengthening the thigh muscles for knee arthritis Weight loss: even 5 to 10 percent can noticeably reduce knee pain Low-impact activities such as walking, swimming and cycling Supportive footwear and walking aids if needed Pain-relief medicines and gels, used as advised Physiotherapy Joint injections for temporary relief in some cases Joint replacement when pain and disability are severe despite other treatments",
        "paragraphs": [
          "Self-care and lifestyle:",
          "Medical treatment:",
          "Surgery:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Regular exercise, especially strengthening the thigh muscles for knee arthritis"
          },
          {
            "label": "",
            "text": "Weight loss: even 5 to 10 percent can noticeably reduce knee pain"
          },
          {
            "label": "",
            "text": "Low-impact activities such as walking, swimming and cycling"
          },
          {
            "label": "",
            "text": "Supportive footwear and walking aids if needed"
          },
          {
            "label": "",
            "text": "Pain-relief medicines and gels, used as advised"
          },
          {
            "label": "",
            "text": "Physiotherapy"
          },
          {
            "label": "",
            "text": "Joint injections for temporary relief in some cases"
          },
          {
            "label": "",
            "text": "Joint replacement when pain and disability are severe despite other treatments"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Myths",
        "content": "Rest is best: in fact, appropriate exercise improves pain and function Arthritis is just ageing: it is a medical condition that can be managed",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Rest is best: in fact, appropriate exercise improves pain and function"
          },
          {
            "label": "",
            "text": "Arthritis is just ageing: it is a medical condition that can be managed"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See an orthopaedic specialist if joint pain lasts more than a few weeks, limits activity or keeps getting worse.",
    "faqs": [
      {
        "q": "Can osteoarthritis be cured?",
        "a": "It cannot be reversed, but symptoms can usually be well managed."
      },
      {
        "q": "Should I stop exercising if my joints hurt?",
        "a": "No. The right type of exercise helps. A physiotherapist can guide you."
      },
      {
        "q": "Do supplements help?",
        "a": "Evidence is mixed. Discuss with your doctor before spending on supplements."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Osteoarthritis (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Osteoarthritis adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-043",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "sports-injuries-and-their-treatment",
    "title": "Sports Injuries and Their Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Sports injuries can happen to anyone, from professional athletes to weekend players and gym-goers. Most heal well with prompt care, but some need specialist treatment to prevent long-term problems.",
    "diagram": null,
    "sections": [
      {
        "heading": "Common sports injuries",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Injury",
            "What happens"
          ],
          "rows": [
            [
              "Ankle sprain",
              "Ligaments stretched or torn when the ankle rolls"
            ],
            [
              "Meniscus tear",
              "The knee's cartilage cushion torn by twisting"
            ],
            [
              "ACL tear",
              "A major knee ligament torn"
            ],
            [
              "Rotator cuff injury",
              "Shoulder tendons strained or torn"
            ],
            [
              "Shoulder dislocation",
              "The ball slips out of the socket"
            ],
            [
              "Tennis or golfer's elbow",
              "Overuse of forearm tendons"
            ],
            [
              "Hamstring strain",
              "Back of thigh muscle pulled"
            ],
            [
              "Achilles tendon injury",
              "Inflammation or tear above the heel"
            ],
            [
              "Stress fracture",
              "Small crack in bone from repeated impact"
            ]
          ]
        }
      },
      {
        "heading": "Acute vs overuse injuries",
        "content": "Acute injuries happen suddenly, such as a fall, twist or collision. Overuse injuries develop gradually from repeated stress without enough rest.",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Acute injuries happen suddenly, such as a fall, twist or collision."
          },
          {
            "label": "",
            "text": "Overuse injuries develop gradually from repeated stress without enough rest."
          }
        ],
        "callouts": []
      },
      {
        "heading": "First aid",
        "content": "For most minor injuries in the first 48 to 72 hours: Gentle movement should begin as pain allows. Protect the injured area Rest and avoid painful activity Ice for 15 to 20 minutes every few hours Compression with an elastic bandage Elevation above heart level",
        "paragraphs": [
          "For most minor injuries in the first 48 to 72 hours:",
          "Gentle movement should begin as pain allows."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Protect the injured area"
          },
          {
            "label": "",
            "text": "Rest and avoid painful activity"
          },
          {
            "label": "",
            "text": "Ice for 15 to 20 minutes every few hours"
          },
          {
            "label": "",
            "text": "Compression with an elastic bandage"
          },
          {
            "label": "",
            "text": "Elevation above heart level"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Examination by a sports medicine or orthopaedic specialist X-ray for suspected fractures MRI or ultrasound for ligament, tendon and cartilage injuries",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Examination by a sports medicine or orthopaedic specialist"
          },
          {
            "label": "",
            "text": "X-ray for suspected fractures"
          },
          {
            "label": "",
            "text": "MRI or ultrasound for ligament, tendon and cartilage injuries"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Physiotherapy: the cornerstone of recovery Bracing or taping for support Medicines for pain and swelling, as advised Injections in selected cases Arthroscopic (keyhole) surgery: to repair meniscus tears, reconstruct ligaments or stabilise a shoulder",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Physiotherapy:",
            "text": "the cornerstone of recovery"
          },
          {
            "label": "",
            "text": "Bracing or taping for support"
          },
          {
            "label": "",
            "text": "Medicines for pain and swelling, as advised"
          },
          {
            "label": "",
            "text": "Injections in selected cases"
          },
          {
            "label": "Arthroscopic (keyhole) surgery:",
            "text": "to repair meniscus tears, reconstruct ligaments or stabilise a shoulder"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Returning to sport",
        "content": "Return gradually once you have full movement, good strength and no pain. Returning too early is a major cause of re-injury.",
        "paragraphs": [
          "Return gradually once you have full movement, good strength and no pain. Returning too early is a major cause of re-injury."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Prevention",
        "content": "Warm up before and cool down after exercise Build strength, balance and flexibility Increase training intensity gradually Use correct technique and proper footwear Allow rest days for recovery",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Warm up before and cool down after exercise"
          },
          {
            "label": "",
            "text": "Build strength, balance and flexibility"
          },
          {
            "label": "",
            "text": "Increase training intensity gradually"
          },
          {
            "label": "",
            "text": "Use correct technique and proper footwear"
          },
          {
            "label": "",
            "text": "Allow rest days for recovery"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a specialist if you cannot bear weight, the joint is unstable or deformed, swelling is severe, or pain does not improve within a week or two.",
    "faqs": [
      {
        "q": "Should I use heat or ice?",
        "a": "Ice is generally better for new injuries. Heat may help muscle stiffness later."
      },
      {
        "q": "Can I play through pain?",
        "a": "No. Pain is a warning sign and continuing can worsen the injury."
      },
      {
        "q": "Do all sports injuries need an MRI?",
        "a": "No. Your doctor will decide based on the examination."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Sports Injuries and Their Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Sports Injuries and Their Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-044",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "joint-replacement-what-happens-before-and-after-surgery",
    "title": "Joint Replacement: What Happens Before and After Surgery?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Good preparation and a clear plan for recovery make a real difference to how quickly you get back on your feet after knee or hip replacement. This guide covers what usually happens before and after surgery.",
    "diagram": {
      "title": "Your joint replacement journey",
      "steps": [
        {
          "number": "1",
          "title": "2 to 4 weeks before",
          "description": "Tests, medicine review, home preparation"
        },
        {
          "number": "2",
          "title": "Surgery day",
          "description": "Anaesthesia, 1 to 2 hour operation"
        },
        {
          "number": "3",
          "title": "Days 1 to 4",
          "description": "Walking with physio; discharge"
        },
        {
          "number": "4",
          "title": "Weeks 2 to 12",
          "description": "Home exercises and follow-up visits"
        }
      ]
    },
    "sections": [
      {
        "heading": "Before surgery",
        "content": "Medical assessment Getting your body ready Getting your home ready Blood tests, ECG and chest X-ray Heart or lung evaluation if needed Review of all medicines; some, such as blood thinners, may need to be stopped Dental check to treat any infection, which could spread to the new joint Good control of diabetes and blood pressure Stop smoking, which slows healing Do pre-surgery exercises to strengthen your muscles Eat well and stay active Remove loose rugs and clutter Arrange a firm chair with armrests Consider a raised toilet seat or commode chair Keep essentials within easy reach Arrange help from family for the first few weeks",
        "paragraphs": [
          "Medical assessment Getting your body ready Getting your home ready"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Blood tests, ECG and chest X-ray"
          },
          {
            "label": "",
            "text": "Heart or lung evaluation if needed"
          },
          {
            "label": "",
            "text": "Review of all medicines; some, such as blood thinners, may need to be stopped"
          },
          {
            "label": "",
            "text": "Dental check to treat any infection, which could spread to the new joint"
          },
          {
            "label": "",
            "text": "Good control of diabetes and blood pressure"
          },
          {
            "label": "",
            "text": "Stop smoking, which slows healing"
          },
          {
            "label": "",
            "text": "Do pre-surgery exercises to strengthen your muscles"
          },
          {
            "label": "",
            "text": "Eat well and stay active"
          },
          {
            "label": "",
            "text": "Remove loose rugs and clutter"
          },
          {
            "label": "",
            "text": "Arrange a firm chair with armrests"
          },
          {
            "label": "",
            "text": "Consider a raised toilet seat or commode chair"
          },
          {
            "label": "",
            "text": "Keep essentials within easy reach"
          },
          {
            "label": "",
            "text": "Arrange help from family for the first few weeks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The day of surgery",
        "content": "Fast for the time advised by your anaesthetist Spinal anaesthesia is commonly used, sometimes with sedation The operation usually takes 1 to 2 hours You will wake up in the recovery area with pain relief in place",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Fast for the time advised by your anaesthetist"
          },
          {
            "label": "",
            "text": "Spinal anaesthesia is commonly used, sometimes with sedation"
          },
          {
            "label": "",
            "text": "The operation usually takes 1 to 2 hours"
          },
          {
            "label": "",
            "text": "You will wake up in the recovery area with pain relief in place"
          }
        ],
        "callouts": []
      },
      {
        "heading": "In hospital",
        "content": "Walking with a walker often begins on the same or next day Physiotherapy teaches exercises, walking and stair climbing Blood clot prevention with medicines, stockings or foot pumps Most patients go home in 2 to 5 days",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Walking with a walker often begins on the same or next day"
          },
          {
            "label": "",
            "text": "Physiotherapy teaches exercises, walking and stair climbing"
          },
          {
            "label": "",
            "text": "Blood clot prevention with medicines, stockings or foot pumps"
          },
          {
            "label": "",
            "text": "Most patients go home in 2 to 5 days"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The first weeks at home",
        "content": "Continue your exercises several times a day Use ice and keep the leg raised to reduce swelling Take pain relief as prescribed so you can exercise Keep the wound clean and dry Use your walker or stick until your physiotherapist advises otherwise",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Continue your exercises several times a day"
          },
          {
            "label": "",
            "text": "Use ice and keep the leg raised to reduce swelling"
          },
          {
            "label": "",
            "text": "Take pain relief as prescribed so you can exercise"
          },
          {
            "label": "",
            "text": "Keep the wound clean and dry"
          },
          {
            "label": "",
            "text": "Use your walker or stick until your physiotherapist advises otherwise"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Warning signs: contact your surgeon",
        "content": "Fever, redness, warmth or discharge from the wound Increasing pain or swelling Calf pain or swelling, which may suggest a blood clot Sudden breathlessness or chest pain, which is an emergency",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Fever, redness, warmth or discharge from the wound"
          },
          {
            "label": "",
            "text": "Increasing pain or swelling"
          },
          {
            "label": "",
            "text": "Calf pain or swelling, which may suggest a blood clot"
          },
          {
            "label": "",
            "text": "Sudden breathlessness or chest pain, which is an emergency"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Follow-up",
        "content": "Expect review visits at around 2 weeks, 6 weeks and 3 months, then periodically to check the implant.",
        "paragraphs": [
          "Expect review visits at around 2 weeks, 6 weeks and 3 months, then periodically to check the implant."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "How soon can I walk after surgery?",
        "a": "Often on the same day or the next day, with support."
      },
      {
        "q": "When can I climb stairs?",
        "a": "You will practise stairs with a physiotherapist before going home."
      },
      {
        "q": "Do I need antibiotics before dental work later?",
        "a": "Ask your surgeon. Recommendations vary."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Joint Replacement: What Happens Before and After Surgery? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Joint Replacement: What Happens Before and After Surgery? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-045",
    "specialtySlug": "orthopedics",
    "specialtyTitle": "Orthopedics",
    "slug": "physiotherapy-after-joint-replacement-why-is-it-important",
    "title": "Physiotherapy After Joint Replacement: Why Is It Important?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A new joint is only part of the solution. Physiotherapy is what turns a successful operation into a successful recovery. The effort you put into exercises in the first three months largely decides how well your new joint works.",
    "diagram": {
      "title": "Physiotherapy stages",
      "steps": [
        {
          "number": "1",
          "title": "Stage 1: Hospital",
          "description": "Walking, ankle pumps, safe transfers"
        },
        {
          "number": "2",
          "title": "Stage 2: Weeks 1 to 6",
          "description": "Range of motion, gentle strengthening"
        },
        {
          "number": "3",
          "title": "Stage 3: Weeks 6 to 12",
          "description": "Strength, balance, walking without aids"
        },
        {
          "number": "4",
          "title": "Stage 4: 3 months+",
          "description": "Return to activities and fitness"
        }
      ]
    },
    "sections": [
      {
        "heading": "Why is physiotherapy so important?",
        "content": "Skipping exercises can lead to a stiff joint that may need further treatment. Restores movement , especially knee bending and straightening Rebuilds muscle strength lost before and after surgery Improves balance and reduces fall risk Reduces stiffness and swelling Helps prevent blood clots through movement Builds confidence for daily activities",
        "paragraphs": [
          "Skipping exercises can lead to a stiff joint that may need further treatment."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Restores movement , especially knee bending and straightening"
          },
          {
            "label": "",
            "text": "Rebuilds muscle strength lost before and after surgery"
          },
          {
            "label": "",
            "text": "Improves balance and reduces fall risk"
          },
          {
            "label": "",
            "text": "Reduces stiffness and swelling"
          },
          {
            "label": "",
            "text": "Helps prevent blood clots through movement"
          },
          {
            "label": "",
            "text": "Builds confidence for daily activities"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common early exercises",
        "content": "Your physiotherapist will tailor a programme for you. Typical early exercises include: Perform them several times daily as advised. Ankle pumps: moving the foot up and down to improve circulation Quadriceps sets: tightening the thigh muscle while the leg is straight Heel slides: sliding the heel towards you to bend the knee Straight leg raises: lifting the leg with the knee straight Hip abduction: sliding the leg out to the side (after hip replacement)",
        "paragraphs": [
          "Your physiotherapist will tailor a programme for you. Typical early exercises include:",
          "Perform them several times daily as advised."
        ],
        "bullets": [
          {
            "label": "Ankle pumps:",
            "text": "moving the foot up and down to improve circulation"
          },
          {
            "label": "Quadriceps sets:",
            "text": "tightening the thigh muscle while the leg is straight"
          },
          {
            "label": "Heel slides:",
            "text": "sliding the heel towards you to bend the knee"
          },
          {
            "label": "Straight leg raises:",
            "text": "lifting the leg with the knee straight"
          },
          {
            "label": "Hip abduction:",
            "text": "sliding the leg out to the side (after hip replacement)"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Typical goals after knee replacement",
        "content": "Full straightening of the knee Bending to about 90 degrees by around 4 to 6 weeks Further improvement over the following months",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Full straightening of the knee"
          },
          {
            "label": "",
            "text": "Bending to about 90 degrees by around 4 to 6 weeks"
          },
          {
            "label": "",
            "text": "Further improvement over the following months"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Managing pain during exercise",
        "content": "Take prescribed pain relief about 30 to 45 minutes before exercises Use ice after sessions Expect some discomfort; sharp or worsening pain should be reported",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Take prescribed pain relief about 30 to 45 minutes before exercises"
          },
          {
            "label": "",
            "text": "Use ice after sessions"
          },
          {
            "label": "",
            "text": "Expect some discomfort; sharp or worsening pain should be reported"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Home vs clinic physiotherapy",
        "content": "Both can work well. Many patients start with home visits and move to clinic sessions. A clear home exercise plan is essential either way.",
        "paragraphs": [
          "Both can work well. Many patients start with home visits and move to clinic sessions. A clear home exercise plan is essential either way."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Tips to stay on track",
        "content": "Set a fixed daily routine for exercises Track your progress, such as how far you can bend the knee Walk a little more each day Involve a family member for encouragement Celebrate small milestones",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Set a fixed daily routine for exercises"
          },
          {
            "label": "",
            "text": "Track your progress, such as how far you can bend the knee"
          },
          {
            "label": "",
            "text": "Walk a little more each day"
          },
          {
            "label": "",
            "text": "Involve a family member for encouragement"
          },
          {
            "label": "",
            "text": "Celebrate small milestones"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Returning to activities",
        "content": "Walking without aids: often by 4 to 8 weeks Driving: usually after 4 to 6 weeks, when cleared Swimming and cycling: often after wounds heal and with your surgeon's approval High-impact sports such as running or jumping: usually discouraged",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Walking without aids: often by 4 to 8 weeks"
          },
          {
            "label": "",
            "text": "Driving: usually after 4 to 6 weeks, when cleared"
          },
          {
            "label": "",
            "text": "Swimming and cycling: often after wounds heal and with your surgeon's approval"
          },
          {
            "label": "",
            "text": "High-impact sports such as running or jumping: usually discouraged"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Contact your surgeon or physiotherapist if progress stalls, the joint stays very stiff, or pain is increasing rather than decreasing.",
    "faqs": [
      {
        "q": "How long will I need physiotherapy?",
        "a": "Usually 6 to 12 weeks of structured therapy, then continued home exercises."
      },
      {
        "q": "Is it normal for the knee to be swollen for weeks?",
        "a": "Yes, mild swelling can last for a few months."
      },
      {
        "q": "Can I do too much?",
        "a": "Yes. Follow your physiotherapist's guidance and increase activity gradually."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Physiotherapy After Joint Replacement: Why Is It Important? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Physiotherapy After Joint Replacement: Why Is It Important? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-046",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "understanding-slip-disc-and-its-symptoms",
    "title": "Understanding Slip Disc and Its Symptoms",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "\"Slip disc\" is a common term, but the disc does not actually slip out of place. The term describes a disc that has bulged or burst, pressing on nearby nerves. The good news is that most people improve without surgery.",
    "diagram": {
      "title": "What happens in a slip disc",
      "steps": [
        {
          "number": "1",
          "title": "Healthy disc",
          "description": "Soft centre held by a tough outer ring"
        },
        {
          "number": "2",
          "title": "Wear or strain",
          "description": "Outer ring weakens or tears"
        },
        {
          "number": "3",
          "title": "Bulge or herniation",
          "description": "Soft centre pushes out"
        },
        {
          "number": "4",
          "title": "Nerve pressure",
          "description": "Pain, numbness or weakness in the limb"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "Between each bone of your spine (vertebrae) sits a disc that acts as a shock absorber. Each disc has a soft, jelly- like centre and a tough outer ring. When the outer ring weakens or tears, the soft centre can push out. This is called a herniated or prolapsed disc. It most often affects the lower back (lumbar spine) and the neck (cervical spine) .",
        "paragraphs": [
          "Between each bone of your spine (vertebrae) sits a disc that acts as a shock absorber. Each disc has a soft, jelly- like centre and a tough outer ring. When the outer ring weakens or tears, the soft centre can push out. This is called a herniated or prolapsed disc.",
          "It most often affects the lower back (lumbar spine) and the neck (cervical spine) ."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Symptoms",
        "content": "Lower back disc: Neck disc: Pain often worsens with sitting, bending, coughing or sneezing. Lower back pain Pain shooting down one leg, often below the knee (sciatica) Numbness or tingling in the leg or foot Weakness in the leg or foot Neck pain Pain radiating into the shoulder and arm Numbness or tingling in the hand Weak grip",
        "paragraphs": [
          "Lower back disc:",
          "Neck disc:",
          "Pain often worsens with sitting, bending, coughing or sneezing."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Lower back pain"
          },
          {
            "label": "",
            "text": "Pain shooting down one leg, often below the knee (sciatica)"
          },
          {
            "label": "",
            "text": "Numbness or tingling in the leg or foot"
          },
          {
            "label": "",
            "text": "Weakness in the leg or foot"
          },
          {
            "label": "",
            "text": "Neck pain"
          },
          {
            "label": "",
            "text": "Pain radiating into the shoulder and arm"
          },
          {
            "label": "",
            "text": "Numbness or tingling in the hand"
          },
          {
            "label": "",
            "text": "Weak grip"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Causes and risk factors",
        "content": "Age-related wear of the discs Lifting heavy objects with poor technique Sudden twisting movements Long hours of sitting or driving Excess body weight Smoking Physically demanding work",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Age-related wear of the discs"
          },
          {
            "label": "",
            "text": "Lifting heavy objects with poor technique"
          },
          {
            "label": "",
            "text": "Sudden twisting movements"
          },
          {
            "label": "",
            "text": "Long hours of sitting or driving"
          },
          {
            "label": "",
            "text": "Excess body weight"
          },
          {
            "label": "",
            "text": "Smoking"
          },
          {
            "label": "",
            "text": "Physically demanding work"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Examination: checking reflexes, strength, sensation and nerve stretch tests MRI: the best test to see the disc and nerves X-rays do not show discs but may be used to check alignment",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Examination:",
            "text": "checking reflexes, strength, sensation and nerve stretch tests"
          },
          {
            "label": "MRI:",
            "text": "the best test to see the disc and nerves"
          },
          {
            "label": "",
            "text": "X-rays do not show discs but may be used to check alignment"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Most people improve within 6 to 12 weeks with: Surgery may be considered if pain persists despite treatment, or if there is significant nerve weakness. Staying gently active rather than full bed rest Pain relief medicines, as advised Physiotherapy and core-strengthening exercises Epidural or nerve root injections for severe leg pain",
        "paragraphs": [
          "Most people improve within 6 to 12 weeks with:",
          "Surgery may be considered if pain persists despite treatment, or if there is significant nerve weakness."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Staying gently active rather than full bed rest"
          },
          {
            "label": "",
            "text": "Pain relief medicines, as advised"
          },
          {
            "label": "",
            "text": "Physiotherapy and core-strengthening exercises"
          },
          {
            "label": "",
            "text": "Epidural or nerve root injections for severe leg pain"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Red flag symptoms: seek emergency care",
        "content": "These can indicate cauda equina syndrome , which needs urgent surgery. Numbness around the genitals or buttocks (saddle area) Loss of bladder or bowel control Rapidly worsening weakness in the legs",
        "paragraphs": [
          "These can indicate cauda equina syndrome , which needs urgent surgery."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Numbness around the genitals or buttocks (saddle area)"
          },
          {
            "label": "",
            "text": "Loss of bladder or bowel control"
          },
          {
            "label": "",
            "text": "Rapidly worsening weakness in the legs"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Can a slip disc heal on its own?",
        "a": "Yes. In many people, the herniated part shrinks over time and symptoms improve."
      },
      {
        "q": "Should I take complete bed rest?",
        "a": "No. Gentle activity is better than prolonged bed rest."
      },
      {
        "q": "Does every disc bulge on MRI need treatment?",
        "a": "No. Disc bulges are common even in people without pain. Treatment depends on symptoms."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Slip Disc and Its Symptoms (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Slip Disc and Its Symptoms adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-047",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "when-is-spine-surgery-necessary",
    "title": "When Is Spine Surgery Necessary?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Back and neck pain are extremely common, and the vast majority of cases improve without surgery. Spine surgery is recommended only in specific situations, when the potential benefit clearly outweighs the risks.",
    "diagram": null,
    "sections": [
      {
        "heading": "Most back pain does not need surgery",
        "content": "Around 9 out of 10 people with back pain improve within a few weeks to months with: Staying active Physiotherapy and exercise Medicines for pain and inflammation Injections in some cases Posture and lifestyle changes",
        "paragraphs": [
          "Around 9 out of 10 people with back pain improve within a few weeks to months with:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Staying active"
          },
          {
            "label": "",
            "text": "Physiotherapy and exercise"
          },
          {
            "label": "",
            "text": "Medicines for pain and inflammation"
          },
          {
            "label": "",
            "text": "Injections in some cases"
          },
          {
            "label": "",
            "text": "Posture and lifestyle changes"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When surgery may be recommended",
        "content": "Urgent or emergency surgery: Planned (elective) surgery may be considered when: Cauda equina syndrome: loss of bladder or bowel control, or numbness in the saddle area Rapidly worsening weakness in the arms or legs Spinal cord compression causing problems with walking, balance or hand function Spinal fractures that are unstable Spinal infections or tumours pressing on nerves Leg or arm pain from a pinched nerve continues for more than 6 to 12 weeks despite good treatment Pain seriously affects daily life, work or sleep Spinal stenosis limits walking distance significantly There is instability , such as one vertebra slipping forward on another (spondylolisthesis) There is a progressive spinal deformity such as severe scoliosis",
        "paragraphs": [
          "Urgent or emergency surgery:",
          "Planned (elective) surgery may be considered when:"
        ],
        "bullets": [
          {
            "label": "Cauda equina syndrome:",
            "text": "loss of bladder or bowel control, or numbness in the saddle area"
          },
          {
            "label": "",
            "text": "Rapidly worsening weakness in the arms or legs"
          },
          {
            "label": "",
            "text": "Spinal cord compression causing problems with walking, balance or hand function"
          },
          {
            "label": "",
            "text": "Spinal fractures that are unstable"
          },
          {
            "label": "",
            "text": "Spinal infections or tumours pressing on nerves"
          },
          {
            "label": "",
            "text": "Leg or arm pain from a pinched nerve continues for more than 6 to 12 weeks despite good treatment"
          },
          {
            "label": "",
            "text": "Pain seriously affects daily life, work or sleep"
          },
          {
            "label": "",
            "text": "Spinal stenosis limits walking distance significantly"
          },
          {
            "label": "",
            "text": "There is instability , such as one vertebra slipping forward on another (spondylolisthesis)"
          },
          {
            "label": "",
            "text": "There is a progressive spinal deformity such as severe scoliosis"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When surgery is less likely to help",
        "content": "Back pain alone, without nerve symptoms or a clear structural cause MRI findings that do not match symptoms Widespread pain affecting many areas of the body",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Back pain alone, without nerve symptoms or a clear structural cause"
          },
          {
            "label": "",
            "text": "MRI findings that do not match symptoms"
          },
          {
            "label": "",
            "text": "Widespread pain affecting many areas of the body"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Questions to ask your surgeon",
        "content": "Seeking a second opinion before major spine surgery is reasonable and common. What exactly is causing my symptoms? What happens if I wait or continue non-surgical treatment? What type of surgery do you recommend, and why? What are the risks and expected recovery time? What improvement can I realistically expect?",
        "paragraphs": [
          "Seeking a second opinion before major spine surgery is reasonable and common."
        ],
        "bullets": [
          {
            "label": "",
            "text": "What exactly is causing my symptoms?"
          },
          {
            "label": "",
            "text": "What happens if I wait or continue non-surgical treatment?"
          },
          {
            "label": "",
            "text": "What type of surgery do you recommend, and why?"
          },
          {
            "label": "",
            "text": "What are the risks and expected recovery time?"
          },
          {
            "label": "",
            "text": "What improvement can I realistically expect?"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Types of spine surgery",
        "content": "Discectomy: removing a herniated part of a disc Decompression (laminectomy): creating more space for nerves Spinal fusion: joining vertebrae to stabilise the spine Disc replacement: replacing a damaged disc with an artificial one Minimally invasive surgery: smaller incisions for many of these procedures",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Discectomy:",
            "text": "removing a herniated part of a disc"
          },
          {
            "label": "Decompression (laminectomy):",
            "text": "creating more space for nerves"
          },
          {
            "label": "Spinal fusion:",
            "text": "joining vertebrae to stabilise the spine"
          },
          {
            "label": "Disc replacement:",
            "text": "replacing a damaged disc with an artificial one"
          },
          {
            "label": "Minimally invasive surgery:",
            "text": "smaller incisions for many of these procedures"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a spine specialist if pain spreads into an arm or leg, causes numbness or weakness, or has not improved after several weeks of treatment. Seek emergency care for red flag symptoms.",
    "faqs": [
      {
        "q": "Is spine surgery dangerous?",
        "a": "All surgery has risks, but serious complications are uncommon when surgery is appropriately chosen and performed by experienced surgeons."
      },
      {
        "q": "Will surgery cure my back pain completely?",
        "a": "Surgery is most effective for leg or arm pain caused by nerve compression. Back pain alone may improve less predictably."
      },
      {
        "q": "Can I avoid surgery with physiotherapy?",
        "a": "Many people can. It depends on the cause and severity."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for When Is Spine Surgery Necessary? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for When Is Spine Surgery Necessary? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-048",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "minimally-invasive-spine-surgery-explained",
    "title": "Minimally Invasive Spine Surgery Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Minimally invasive spine surgery (MISS) treats spinal problems through small incisions, using special instruments and high-magnification cameras. The goal is to fix the problem while causing less damage to surrounding muscles.",
    "diagram": {
      "title": "How keyhole spine surgery works",
      "steps": [
        {
          "number": "1",
          "title": "Small incision",
          "description": "Often under 2.5 cm"
        },
        {
          "number": "2",
          "title": "Tubular retractor",
          "description": "Gently separates muscles"
        },
        {
          "number": "3",
          "title": "Camera or microscope",
          "description": "Magnified view of nerves"
        },
        {
          "number": "4",
          "title": "Targeted repair",
          "description": "Disc or bone removed; nerves freed"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "In traditional open spine surgery, muscles are pulled away from the spine through a larger incision. In minimally invasive surgery, the surgeon: Makes one or more small incisions Uses tubular retractors to gently separate rather than cut muscles Works with a microscope or endoscope (a tiny camera) Uses live X-ray guidance and sometimes navigation or robotics",
        "paragraphs": [
          "In traditional open spine surgery, muscles are pulled away from the spine through a larger incision. In minimally invasive surgery, the surgeon:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Makes one or more small incisions"
          },
          {
            "label": "",
            "text": "Uses tubular retractors to gently separate rather than cut muscles"
          },
          {
            "label": "",
            "text": "Works with a microscope or endoscope (a tiny camera)"
          },
          {
            "label": "",
            "text": "Uses live X-ray guidance and sometimes navigation or robotics"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common minimally invasive procedures",
        "content": "Microdiscectomy / endoscopic discectomy: removal of a herniated disc fragment pressing on a nerve Minimally invasive decompression: creating space for nerves in spinal stenosis MIS fusion (such as MIS TLIF): stabilising the spine with screws and a spacer through small incisions Kyphoplasty / vertebroplasty: injecting bone cement to treat certain painful spinal fractures",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Microdiscectomy / endoscopic discectomy:",
            "text": "removal of a herniated disc fragment pressing on a nerve"
          },
          {
            "label": "Minimally invasive decompression:",
            "text": "creating space for nerves in spinal stenosis"
          },
          {
            "label": "MIS fusion (such as MIS TLIF):",
            "text": "stabilising the spine with screws and a spacer through small incisions"
          },
          {
            "label": "Kyphoplasty / vertebroplasty:",
            "text": "injecting bone cement to treat certain painful spinal fractures"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Possible benefits",
        "content": "Less muscle injury Smaller scars Less pain after surgery Less blood loss Shorter hospital stay, sometimes same-day discharge Faster return to daily activities",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Less muscle injury"
          },
          {
            "label": "",
            "text": "Smaller scars"
          },
          {
            "label": "",
            "text": "Less pain after surgery"
          },
          {
            "label": "",
            "text": "Less blood loss"
          },
          {
            "label": "",
            "text": "Shorter hospital stay, sometimes same-day discharge"
          },
          {
            "label": "",
            "text": "Faster return to daily activities"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Limitations",
        "content": "Not suitable for every spinal condition, such as some complex deformities, large tumours or severe instability Requires specialised training and equipment Long-term results for many conditions are similar to open surgery; the main advantage is early recovery Risks still exist, including infection, nerve injury, dural tear (leak of spinal fluid) and the need for further surgery",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Not suitable for every spinal condition, such as some complex deformities, large tumours or severe instability"
          },
          {
            "label": "",
            "text": "Requires specialised training and equipment"
          },
          {
            "label": "",
            "text": "Long-term results for many conditions are similar to open surgery; the main advantage is early recovery"
          },
          {
            "label": "",
            "text": "Risks still exist, including infection, nerve injury, dural tear (leak of spinal fluid) and the need for further surgery"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who is suitable?",
        "content": "Your surgeon will consider: The exact diagnosis and its location The number of spinal levels involved Your bone quality and overall health Previous spine surgery",
        "paragraphs": [
          "Your surgeon will consider:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "The exact diagnosis and its location"
          },
          {
            "label": "",
            "text": "The number of spinal levels involved"
          },
          {
            "label": "",
            "text": "Your bone quality and overall health"
          },
          {
            "label": "",
            "text": "Previous spine surgery"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Recovery",
        "content": "Fusion surgery takes longer to recover from than discectomy or decompression. Walking often begins on the same day Hospital stay of 0 to 3 days for most procedures Return to desk work in 1 to 4 weeks Physiotherapy to strengthen the back and core",
        "paragraphs": [
          "Fusion surgery takes longer to recover from than discectomy or decompression."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Walking often begins on the same day"
          },
          {
            "label": "",
            "text": "Hospital stay of 0 to 3 days for most procedures"
          },
          {
            "label": "",
            "text": "Return to desk work in 1 to 4 weeks"
          },
          {
            "label": "",
            "text": "Physiotherapy to strengthen the back and core"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "If you have been advised spine surgery, ask whether a minimally invasive approach is suitable for your condition, and what the surgeon's experience is with it.",
    "faqs": [
      {
        "q": "Is keyhole spine surgery done under general anaesthesia?",
        "a": "Usually yes, though some endoscopic procedures can be done under local or regional anaesthesia."
      },
      {
        "q": "Is minimally invasive surgery always better?",
        "a": "Not always. The right procedure depends on your condition."
      },
      {
        "q": "Can laser surgery fix a slip disc?",
        "a": "\"Laser spine surgery\" is often a marketing term. Ask exactly what procedure is planned and what evidence supports it."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Minimally Invasive Spine Surgery Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Minimally Invasive Spine Surgery Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-049",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "total-disc-replacement-how-does-it-work",
    "title": "Total Disc Replacement: How Does It Work?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Total disc replacement removes a damaged spinal disc and replaces it with an artificial one. Unlike spinal fusion, which joins two vertebrae permanently, a disc replacement is designed to keep movement in that part of the spine.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "An artificial disc is usually made of metal plates with a plastic or metal core. It sits between two vertebrae and allows them to bend and rotate, similar to a natural disc. It is performed in: The neck (cervical disc replacement): the more common use The lower back (lumbar disc replacement): for carefully selected patients",
        "paragraphs": [
          "An artificial disc is usually made of metal plates with a plastic or metal core. It sits between two vertebrae and allows them to bend and rotate, similar to a natural disc.",
          "It is performed in:"
        ],
        "bullets": [
          {
            "label": "The neck (cervical disc replacement):",
            "text": "the more common use"
          },
          {
            "label": "The lower back (lumbar disc replacement):",
            "text": "for carefully selected patients"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who may benefit?",
        "content": "Cervical disc replacement may be considered for: Lumbar disc replacement may be considered for: A herniated disc or bone spur in the neck pressing on a nerve or the spinal cord Arm pain, numbness or weakness that has not improved with treatment Usually one or two affected levels Severe low back pain caused by a damaged disc at one level When non-surgical treatment has failed for an extended period",
        "paragraphs": [
          "Cervical disc replacement may be considered for:",
          "Lumbar disc replacement may be considered for:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "A herniated disc or bone spur in the neck pressing on a nerve or the spinal cord"
          },
          {
            "label": "",
            "text": "Arm pain, numbness or weakness that has not improved with treatment"
          },
          {
            "label": "",
            "text": "Usually one or two affected levels"
          },
          {
            "label": "",
            "text": "Severe low back pain caused by a damaged disc at one level"
          },
          {
            "label": "",
            "text": "When non-surgical treatment has failed for an extended period"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who is not suitable?",
        "content": "Significant arthritis of the spinal facet joints Osteoporosis (weak bones) Spinal instability or significant deformity Active infection Previous surgery at that level in some cases",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Significant arthritis of the spinal facet joints"
          },
          {
            "label": "",
            "text": "Osteoporosis (weak bones)"
          },
          {
            "label": "",
            "text": "Spinal instability or significant deformity"
          },
          {
            "label": "",
            "text": "Active infection"
          },
          {
            "label": "",
            "text": "Previous surgery at that level in some cases"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Disc replacement vs fusion",
        "content": "Disc replacement Fusion Movement at treated level Preserved Permanently stopped Stress on neighbouring discs May be lower May be higher over time Suitable for Selected patients with good bone and joints A wider range of conditions Recovery Often quicker Bone takes months to fuse",
        "paragraphs": [
          "Disc replacement Fusion Movement at treated level Preserved Permanently stopped Stress on neighbouring discs May be lower May be higher over time Suitable for Selected patients with good bone and joints A wider range of conditions Recovery Often quicker Bone takes months to fuse"
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What happens during surgery?",
        "content": "For the neck, the surgeon makes a small incision at the front, moves soft tissues aside, removes the damaged disc and any bone spurs, and inserts the implant. Surgery usually takes 1 to 2 hours, with a hospital stay of 1 to 2 days. Lumbar disc replacement is approached through the abdomen and is a larger operation.",
        "paragraphs": [
          "For the neck, the surgeon makes a small incision at the front, moves soft tissues aside, removes the damaged disc and any bone spurs, and inserts the implant. Surgery usually takes 1 to 2 hours, with a hospital stay of 1 to 2 days.",
          "Lumbar disc replacement is approached through the abdomen and is a larger operation."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Recovery",
        "content": "Walking on the day of or day after surgery Return to light activities in 1 to 2 weeks Most normal activities within 6 to 12 weeks Physiotherapy as advised",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Walking on the day of or day after surgery"
          },
          {
            "label": "",
            "text": "Return to light activities in 1 to 2 weeks"
          },
          {
            "label": "",
            "text": "Most normal activities within 6 to 12 weeks"
          },
          {
            "label": "",
            "text": "Physiotherapy as advised"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "If you have been offered spinal fusion, ask whether disc replacement is an option for your condition.",
    "faqs": [
      {
        "q": "How long does an artificial disc last?",
        "a": "Long-term studies show good durability for many years."
      },
      {
        "q": "Will I set off airport metal detectors?",
        "a": "Possibly. Carry your implant card."
      },
      {
        "q": "Is disc replacement suitable for older patients?",
        "a": "It depends on bone strength and joint health more than age."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Total Disc Replacement: How Does It Work? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Total Disc Replacement: How Does It Work? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-050",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "spine-decompression-surgery-explained",
    "title": "Spine Decompression Surgery Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Spine decompression surgery relieves pressure on the spinal cord or nerves. When nerves are squeezed, they cause pain, numbness or weakness in the arms or legs. Creating more space allows them to recover.",
    "diagram": {
      "title": "Decompression in four steps",
      "steps": [
        {
          "number": "1",
          "title": "Identify",
          "description": "MRI pinpoints the compressed nerve"
        },
        {
          "number": "2",
          "title": "Access",
          "description": "Open or keyhole approach"
        },
        {
          "number": "3",
          "title": "Remove pressure",
          "description": "Bone, ligament or disc trimmed"
        },
        {
          "number": "4",
          "title": "Protect stability",
          "description": "Fusion added only if needed"
        }
      ]
    },
    "sections": [
      {
        "heading": "What causes nerve compression?",
        "content": "Herniated discs pushing on a nerve Spinal stenosis: narrowing of the spinal canal from thickened ligaments and bone spurs Bone spurs from arthritis Spondylolisthesis: a vertebra slipping forward Less commonly, tumours or injuries",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Herniated discs pushing on a nerve"
          },
          {
            "label": "Spinal stenosis:",
            "text": "narrowing of the spinal canal from thickened ligaments and bone spurs"
          },
          {
            "label": "",
            "text": "Bone spurs from arthritis"
          },
          {
            "label": "Spondylolisthesis:",
            "text": "a vertebra slipping forward"
          },
          {
            "label": "",
            "text": "Less commonly, tumours or injuries"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Types of decompression surgery",
        "content": "These can be done through open surgery or minimally invasive techniques.",
        "paragraphs": [
          "These can be done through open surgery or minimally invasive techniques."
        ],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Procedure",
            "What is removed"
          ],
          "rows": [
            [
              "Discectomy / microdiscectomy",
              "The part of a disc pressing on a nerve"
            ],
            [
              "Laminectomy",
              "The back part of the vertebra (lamina) to widen the canal"
            ],
            [
              "Laminotomy",
              "A smaller part of the lamina"
            ],
            [
              "Foraminotomy",
              "Bone or tissue narrowing the nerve exit opening"
            ]
          ]
        }
      },
      {
        "heading": "When is fusion added?",
        "content": "If removing bone may make the spine unstable, or if instability already exists, the surgeon may also perform a spinal fusion to join vertebrae together with screws and rods.",
        "paragraphs": [
          "If removing bone may make the spine unstable, or if instability already exists, the surgeon may also perform a spinal fusion to join vertebrae together with screws and rods."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who may benefit?",
        "content": "Leg or arm pain, numbness or weakness from nerve compression that does not improve with treatment Difficulty walking because of leg pain or heaviness (spinal stenosis) Progressive weakness Signs of spinal cord compression, such as clumsiness of hands or unsteady walking",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Leg or arm pain, numbness or weakness from nerve compression that does not improve with treatment"
          },
          {
            "label": "",
            "text": "Difficulty walking because of leg pain or heaviness (spinal stenosis)"
          },
          {
            "label": "",
            "text": "Progressive weakness"
          },
          {
            "label": "",
            "text": "Signs of spinal cord compression, such as clumsiness of hands or unsteady walking"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What happens during surgery?",
        "content": "Surgery takes about 1 to 3 hours, depending on the number of levels. 1. General anaesthesia is given, and you lie face down. 2. The surgeon reaches the spine through an incision in the back (or the front for some neck surgeries). 3. Bone, ligament or disc material compressing the nerves is carefully removed. 4. Fusion is added if needed. 5. The wound is closed.",
        "paragraphs": [
          "Surgery takes about 1 to 3 hours, depending on the number of levels."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "General anaesthesia is given, and you lie face down."
          },
          {
            "number": 2,
            "text": "The surgeon reaches the spine through an incision in the back (or the front for some neck surgeries)."
          },
          {
            "number": 3,
            "text": "Bone, ligament or disc material compressing the nerves is carefully removed."
          },
          {
            "number": 4,
            "text": "Fusion is added if needed."
          },
          {
            "number": 5,
            "text": "The wound is closed."
          }
        ]
      },
      {
        "heading": "Results",
        "content": "Decompression is usually most effective for leg or arm pain . Numbness and weakness may improve more slowly, sometimes over months. Back pain may improve less predictably.",
        "paragraphs": [
          "Decompression is usually most effective for leg or arm pain . Numbness and weakness may improve more slowly, sometimes over months. Back pain may improve less predictably."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Risks",
        "content": "Infection, bleeding, dural tear (leak of spinal fluid), nerve injury, persistent symptoms and, occasionally, need for further surgery.",
        "paragraphs": [
          "Infection, bleeding, dural tear (leak of spinal fluid), nerve injury, persistent symptoms and, occasionally, need for further surgery."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "See a spine surgeon if leg or arm symptoms limit walking or daily activities despite treatment, or if weakness is getting worse.",
    "faqs": [
      {
        "q": "How long is the hospital stay?",
        "a": "From the same day to a few days, depending on the procedure."
      },
      {
        "q": "Will I need a brace?",
        "a": "Usually not after simple decompression. Your surgeon will advise."
      },
      {
        "q": "Can the problem come back?",
        "a": "Sometimes, especially as the spine continues to age, but many people have long-lasting relief."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Spine Decompression Surgery Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Spine Decompression Surgery Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-051",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "understanding-scoliosis",
    "title": "Understanding Scoliosis",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Scoliosis is a sideways curve of the spine. Seen from behind, a normal spine looks straight, while a spine with scoliosis looks like a \"C\" or \"S\". Most cases are mild and need only monitoring, but some need treatment to stop the curve getting worse.",
    "diagram": null,
    "sections": [
      {
        "heading": "Types of scoliosis",
        "content": "Idiopathic scoliosis: the most common type; the cause is unknown. It usually appears in adolescents between 10 and 18, more often in girls. Congenital scoliosis: caused by spinal bones that formed abnormally before birth Neuromuscular scoliosis: linked to conditions such as cerebral palsy or muscular dystrophy Degenerative (adult) scoliosis: develops in older adults due to wear of discs and joints",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Idiopathic scoliosis:",
            "text": "the most common type; the cause is unknown. It usually appears in adolescents between"
          },
          {
            "label": "",
            "text": "10 and 18, more often in girls."
          },
          {
            "label": "Congenital scoliosis:",
            "text": "caused by spinal bones that formed abnormally before birth"
          },
          {
            "label": "Neuromuscular scoliosis:",
            "text": "linked to conditions such as cerebral palsy or muscular dystrophy"
          },
          {
            "label": "Degenerative (adult) scoliosis:",
            "text": "develops in older adults due to wear of discs and joints"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Signs to look for",
        "content": "In adults, scoliosis may cause back pain, leg pain from nerve compression, or loss of height. Mild scoliosis is often painless and may be noticed first by parents, teachers or tailors. Uneven shoulders One shoulder blade sticking out more than the other Uneven waist or hips The body leaning to one side A rib hump when bending forward Clothes hanging unevenly",
        "paragraphs": [
          "In adults, scoliosis may cause back pain, leg pain from nerve compression, or loss of height.",
          "Mild scoliosis is often painless and may be noticed first by parents, teachers or tailors."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Uneven shoulders"
          },
          {
            "label": "",
            "text": "One shoulder blade sticking out more than the other"
          },
          {
            "label": "",
            "text": "Uneven waist or hips"
          },
          {
            "label": "",
            "text": "The body leaning to one side"
          },
          {
            "label": "",
            "text": "A rib hump when bending forward"
          },
          {
            "label": "",
            "text": "Clothes hanging unevenly"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "A curve of 10 degrees or more is considered scoliosis. Forward bend test: the doctor looks for a rib hump Full-spine X-ray: the curve is measured in degrees, called the Cobb angle MRI or CT in some cases",
        "paragraphs": [
          "A curve of 10 degrees or more is considered scoliosis."
        ],
        "bullets": [
          {
            "label": "Forward bend test:",
            "text": "the doctor looks for a rib hump"
          },
          {
            "label": "Full-spine X-ray:",
            "text": "the curve is measured in degrees, called the Cobb angle"
          },
          {
            "label": "",
            "text": "MRI or CT in some cases"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Treatment depends on the curve size, the person's age and how much growing is left: Physiotherapy and scoliosis-specific exercises can help with posture, strength and pain.",
        "paragraphs": [
          "Treatment depends on the curve size, the person's age and how much growing is left:"
        ],
        "bullets": [],
        "callouts": [
          "Physiotherapy and scoliosis-specific exercises can help with posture, strength and pain."
        ],
        "table": {
          "headers": [
            "Curve size (approximate)",
            "Usual approach"
          ],
          "rows": [
            [
              "Under 20–25 degrees",
              "Observation with regular X-rays"
            ],
            [
              "25–45 degrees in a growing child",
              "Brace, worn many hours a day"
            ],
            [
              "Over 45–50 degrees",
              "Surgery may be considered"
            ]
          ]
        }
      },
      {
        "heading": "Surgery",
        "content": "The most common operation is spinal fusion , where screws and rods are used to straighten and stabilise the spine. Newer growth-friendly techniques are used for some young children.",
        "paragraphs": [
          "The most common operation is spinal fusion , where screws and rods are used to straighten and stabilise the spine. Newer growth-friendly techniques are used for some young children."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Living with scoliosis",
        "content": "Most people with scoliosis lead full, active lives, including sports, careers and pregnancy.",
        "paragraphs": [
          "Most people with scoliosis lead full, active lives, including sports, careers and pregnancy."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "See a spine specialist if you notice uneven shoulders, hips or a rib hump in a child, especially during growth spurts. Early detection gives more treatment options.",
    "faqs": [
      {
        "q": "Is scoliosis caused by bad posture or heavy school bags?",
        "a": "No. These do not cause scoliosis."
      },
      {
        "q": "Will a brace straighten the spine?",
        "a": "A brace aims to stop the curve getting worse during growth, not to correct it fully."
      },
      {
        "q": "Does scoliosis stop progressing after growth?",
        "a": "Mild curves often stop; larger curves may continue to progress slowly in adulthood."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Scoliosis (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Scoliosis adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-052",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "sciatica-causes-symptoms-and-treatment",
    "title": "Sciatica: Causes, Symptoms and Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Sciatica is pain that travels along the path of the sciatic nerve, from the lower back through the buttock and down the leg. It is a symptom rather than a disease, and it usually improves within weeks.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "The sciatic nerve is the longest nerve in the body. It is formed by nerve roots from the lower back that join together and run down each leg. When one of these roots is irritated or squeezed, pain can shoot down the leg.",
        "paragraphs": [
          "The sciatic nerve is the longest nerve in the body. It is formed by nerve roots from the lower back that join together and run down each leg. When one of these roots is irritated or squeezed, pain can shoot down the leg."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Symptoms",
        "content": "Usually only one leg is affected. Pain spreading from the lower back or buttock down the back of one leg, often below the knee Burning, sharp or electric-shock-like pain Numbness or tingling in the leg or foot Weakness in the leg or foot Pain worse when sitting, coughing or sneezing",
        "paragraphs": [
          "Usually only one leg is affected."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Pain spreading from the lower back or buttock down the back of one leg, often below the knee"
          },
          {
            "label": "",
            "text": "Burning, sharp or electric-shock-like pain"
          },
          {
            "label": "",
            "text": "Numbness or tingling in the leg or foot"
          },
          {
            "label": "",
            "text": "Weakness in the leg or foot"
          },
          {
            "label": "",
            "text": "Pain worse when sitting, coughing or sneezing"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common causes",
        "content": "Herniated (slip) disc: the most common cause, especially in people aged 30 to 50 Lumbar spinal stenosis: narrowing of the spinal canal, more common in older adults Spondylolisthesis: one vertebra slipping forward Piriformis syndrome: a buttock muscle irritating the nerve Rarely, infection, tumour or injury",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Herniated (slip) disc:",
            "text": "the most common cause, especially in people aged 30 to 50"
          },
          {
            "label": "Lumbar spinal stenosis:",
            "text": "narrowing of the spinal canal, more common in older adults"
          },
          {
            "label": "Spondylolisthesis:",
            "text": "one vertebra slipping forward"
          },
          {
            "label": "Piriformis syndrome:",
            "text": "a buttock muscle irritating the nerve"
          },
          {
            "label": "",
            "text": "Rarely, infection, tumour or injury"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Risk factors",
        "content": "Prolonged sitting or driving Heavy lifting and twisting Excess body weight Diabetes, which can increase nerve sensitivity Ageing",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Prolonged sitting or driving"
          },
          {
            "label": "",
            "text": "Heavy lifting and twisting"
          },
          {
            "label": "",
            "text": "Excess body weight"
          },
          {
            "label": "",
            "text": "Diabetes, which can increase nerve sensitivity"
          },
          {
            "label": "",
            "text": "Ageing"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Your doctor will examine your strength, reflexes and sensation, and may do a straight leg raise test . An MRI is usually needed only if symptoms are severe, persist beyond 6 weeks, or there are red flags.",
        "paragraphs": [
          "Your doctor will examine your strength, reflexes and sensation, and may do a straight leg raise test . An MRI is usually needed only if symptoms are severe, persist beyond 6 weeks, or there are red flags."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Self-care: Medical treatment: Surgery is considered when pain is severe and persistent, or there is progressive weakness. Stay active with gentle walking Avoid prolonged sitting; take breaks Use heat or cold packs Gentle stretches as advised Pain-relief and nerve-pain medicines Physiotherapy to strengthen the core and improve flexibility Epidural steroid injection for severe pain",
        "paragraphs": [
          "Self-care:",
          "Medical treatment:",
          "Surgery is considered when pain is severe and persistent, or there is progressive weakness."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Stay active with gentle walking"
          },
          {
            "label": "",
            "text": "Avoid prolonged sitting; take breaks"
          },
          {
            "label": "",
            "text": "Use heat or cold packs"
          },
          {
            "label": "",
            "text": "Gentle stretches as advised"
          },
          {
            "label": "",
            "text": "Pain-relief and nerve-pain medicines"
          },
          {
            "label": "",
            "text": "Physiotherapy to strengthen the core and improve flexibility"
          },
          {
            "label": "",
            "text": "Epidural steroid injection for severe pain"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Red flags: seek urgent care",
        "content": "Pain in both legs Numbness around the genitals or buttocks Loss of bladder or bowel control Rapidly worsening leg weakness",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Pain in both legs"
          },
          {
            "label": "",
            "text": "Numbness around the genitals or buttocks"
          },
          {
            "label": "",
            "text": "Loss of bladder or bowel control"
          },
          {
            "label": "",
            "text": "Rapidly worsening leg weakness"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a doctor if sciatica lasts more than a few weeks, is severe, or is accompanied by numbness or weakness.",
    "faqs": [
      {
        "q": "How long does sciatica last?",
        "a": "Most episodes improve within 4 to 6 weeks."
      },
      {
        "q": "Is walking good for sciatica?",
        "a": "Yes. Gentle walking is usually helpful."
      },
      {
        "q": "Can sciatica come back?",
        "a": "Yes. Regular exercise, good posture and weight control reduce the risk."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Sciatica: Causes, Symptoms and Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Sciatica: Causes, Symptoms and Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-053",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "cervical-spondylosis-and-neck-pain",
    "title": "Cervical Spondylosis and Neck Pain",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Cervical spondylosis is the general term for age-related wear and tear of the discs and joints in the neck. It is very common, especially after 40, and in most people causes only occasional neck stiffness or pain.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "Over time, the discs in the neck lose water and height, and the joints develop bone spurs . These changes are part of normal ageing and appear on many X-rays even in people without symptoms.",
        "paragraphs": [
          "Over time, the discs in the neck lose water and height, and the joints develop bone spurs . These changes are part of normal ageing and appear on many X-rays even in people without symptoms."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Symptoms",
        "content": "Neck symptoms: Nerve root compression (cervical radiculopathy): Spinal cord compression (cervical myelopathy): less common but more serious Neck pain and stiffness Pain spreading to the shoulders or between the shoulder blades Headaches starting at the back of the head Pain shooting down the arm Numbness or tingling in the hand or fingers Weakness in the arm or grip Clumsiness of the hands, such as difficulty buttoning or writing Unsteady walking or poor balance Numbness in the hands or legs Bladder problems in advanced cases",
        "paragraphs": [
          "Neck symptoms:",
          "Nerve root compression (cervical radiculopathy):",
          "Spinal cord compression (cervical myelopathy): less common but more serious"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Neck pain and stiffness"
          },
          {
            "label": "",
            "text": "Pain spreading to the shoulders or between the shoulder blades"
          },
          {
            "label": "",
            "text": "Headaches starting at the back of the head"
          },
          {
            "label": "",
            "text": "Pain shooting down the arm"
          },
          {
            "label": "",
            "text": "Numbness or tingling in the hand or fingers"
          },
          {
            "label": "",
            "text": "Weakness in the arm or grip"
          },
          {
            "label": "",
            "text": "Clumsiness of the hands, such as difficulty buttoning or writing"
          },
          {
            "label": "",
            "text": "Unsteady walking or poor balance"
          },
          {
            "label": "",
            "text": "Numbness in the hands or legs"
          },
          {
            "label": "",
            "text": "Bladder problems in advanced cases"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Risk factors",
        "content": "Age Long hours looking down at phones or laptops Jobs involving repeated neck movement or heavy loads on the head Previous neck injury Smoking",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Age"
          },
          {
            "label": "",
            "text": "Long hours looking down at phones or laptops"
          },
          {
            "label": "",
            "text": "Jobs involving repeated neck movement or heavy loads on the head"
          },
          {
            "label": "",
            "text": "Previous neck injury"
          },
          {
            "label": "",
            "text": "Smoking"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Examination of neck movement, strength, reflexes and walking X-ray to see bone changes MRI if there are nerve or spinal cord symptoms",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Examination of neck movement, strength, reflexes and walking"
          },
          {
            "label": "",
            "text": "X-ray to see bone changes"
          },
          {
            "label": "",
            "text": "MRI if there are nerve or spinal cord symptoms"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Most people improve with: Surgery may be advised for: Options include anterior cervical discectomy and fusion (ACDF), cervical disc replacement, or posterior decompression. Posture correction and regular breaks from screens Neck stretching and strengthening exercises Physiotherapy Pain-relief medicines, used as advised A soft collar only for short periods during severe pain Spinal cord compression (myelopathy) Persistent arm pain or weakness despite treatment",
        "paragraphs": [
          "Most people improve with:",
          "Surgery may be advised for:",
          "Options include anterior cervical discectomy and fusion (ACDF), cervical disc replacement, or posterior decompression."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Posture correction and regular breaks from screens"
          },
          {
            "label": "",
            "text": "Neck stretching and strengthening exercises"
          },
          {
            "label": "",
            "text": "Physiotherapy"
          },
          {
            "label": "",
            "text": "Pain-relief medicines, used as advised"
          },
          {
            "label": "",
            "text": "A soft collar only for short periods during severe pain"
          },
          {
            "label": "",
            "text": "Spinal cord compression (myelopathy)"
          },
          {
            "label": "",
            "text": "Persistent arm pain or weakness despite treatment"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Everyday tips",
        "content": "Keep screens at eye level Hold your phone up rather than bending your neck down Use a supportive pillow that keeps your neck in line with your spine Take a break every 30 to 45 minutes",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Keep screens at eye level"
          },
          {
            "label": "",
            "text": "Hold your phone up rather than bending your neck down"
          },
          {
            "label": "",
            "text": "Use a supportive pillow that keeps your neck in line with your spine"
          },
          {
            "label": "",
            "text": "Take a break every 30 to 45 minutes"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a spine specialist if neck pain spreads into the arm, or if you notice clumsy hands or unsteady walking. These symptoms need prompt evaluation.",
    "faqs": [
      {
        "q": "Is cervical spondylosis the same as arthritis?",
        "a": "It is a form of age-related arthritis of the neck."
      },
      {
        "q": "Should I wear a neck collar all the time?",
        "a": "No. Long-term use weakens neck muscles."
      },
      {
        "q": "Can neck pain cause dizziness?",
        "a": "It can be associated, but dizziness has many causes and should be evaluated."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Cervical Spondylosis and Neck Pain (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Cervical Spondylosis and Neck Pain adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-054",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "spinal-stenosis-symptoms-and-treatment",
    "title": "Spinal Stenosis: Symptoms and Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Spinal stenosis is a narrowing of the spaces inside the spine that puts pressure on the nerves. It most commonly affects the lower back in people over 50, and it typically causes leg pain or heaviness when walking.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is it?",
        "content": "With age, discs lose height, ligaments thicken and bone spurs form. Together, these changes narrow the spinal canal or the openings where nerves leave the spine. The nerves then have less room, especially when standing upright. Stenosis can occur in: The lower back (lumbar stenosis): the most common The neck (cervical stenosis): can compress the spinal cord",
        "paragraphs": [
          "With age, discs lose height, ligaments thicken and bone spurs form. Together, these changes narrow the spinal canal or the openings where nerves leave the spine. The nerves then have less room, especially when standing upright.",
          "Stenosis can occur in:"
        ],
        "bullets": [
          {
            "label": "The lower back (lumbar stenosis):",
            "text": "the most common"
          },
          {
            "label": "The neck (cervical stenosis):",
            "text": "can compress the spinal cord"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Symptoms of lumbar stenosis",
        "content": "Many people find they can walk further when leaning on a shopping trolley, because bending forward opens up the spinal canal. Pain, cramping, heaviness or numbness in the buttocks and legs when standing or walking Symptoms that ease when sitting or bending forward Reduced walking distance over time Lower back pain Weakness in the legs in advanced cases",
        "paragraphs": [
          "Many people find they can walk further when leaning on a shopping trolley, because bending forward opens up the spinal canal."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Pain, cramping, heaviness or numbness in the buttocks and legs when standing or walking"
          },
          {
            "label": "",
            "text": "Symptoms that ease when sitting or bending forward"
          },
          {
            "label": "",
            "text": "Reduced walking distance over time"
          },
          {
            "label": "",
            "text": "Lower back pain"
          },
          {
            "label": "",
            "text": "Weakness in the legs in advanced cases"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Stenosis or circulation problem?",
        "content": "Your doctor can tell the difference with an examination and tests.",
        "paragraphs": [],
        "bullets": [],
        "callouts": [
          "Your doctor can tell the difference with an examination and tests."
        ],
        "table": {
          "headers": [
            "Feature",
            "Spinal stenosis",
            "Poor leg circulation"
          ],
          "rows": [
            [
              "Relieved by",
              "Sitting or bending forward",
              "Simply standing still"
            ],
            [
              "Cycling",
              "Often comfortable",
              "Often painful"
            ],
            [
              "Pulses in feet",
              "Usually normal",
              "Often weak"
            ]
          ]
        }
      },
      {
        "heading": "Causes",
        "content": "Age-related wear (most common) Spondylolisthesis Previous spinal surgery or injury Being born with a narrow spinal canal",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Age-related wear (most common)"
          },
          {
            "label": "",
            "text": "Spondylolisthesis"
          },
          {
            "label": "",
            "text": "Previous spinal surgery or injury"
          },
          {
            "label": "",
            "text": "Being born with a narrow spinal canal"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "MRI: the main test CT scan if MRI is not possible Tests to rule out circulation problems if needed",
        "paragraphs": [],
        "bullets": [
          {
            "label": "MRI:",
            "text": "the main test"
          },
          {
            "label": "",
            "text": "CT scan if MRI is not possible"
          },
          {
            "label": "",
            "text": "Tests to rule out circulation problems if needed"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Non-surgical: Surgery is considered when walking distance and quality of life are significantly limited: Physiotherapy focusing on core strength and flexibility Exercises such as cycling or water exercise Pain and nerve-pain medicines Epidural steroid injections for symptom relief Weight loss Decompression (laminectomy): creates more space for the nerves Fusion: added if the spine is unstable Minimally invasive techniques are available for many patients",
        "paragraphs": [
          "Non-surgical:",
          "Surgery is considered when walking distance and quality of life are significantly limited:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Physiotherapy focusing on core strength and flexibility"
          },
          {
            "label": "",
            "text": "Exercises such as cycling or water exercise"
          },
          {
            "label": "",
            "text": "Pain and nerve-pain medicines"
          },
          {
            "label": "",
            "text": "Epidural steroid injections for symptom relief"
          },
          {
            "label": "",
            "text": "Weight loss"
          },
          {
            "label": "Decompression (laminectomy):",
            "text": "creates more space for the nerves"
          },
          {
            "label": "Fusion:",
            "text": "added if the spine is unstable"
          },
          {
            "label": "",
            "text": "Minimally invasive techniques are available for many patients"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a spine specialist if leg pain limits how far you can walk, or if you notice weakness. Loss of bladder or bowel control needs emergency care.",
    "faqs": [
      {
        "q": "Does spinal stenosis get worse over time?",
        "a": "It often progresses slowly, but many people remain stable for years."
      },
      {
        "q": "Can exercise help?",
        "a": "Yes. Targeted exercise often improves walking ability."
      },
      {
        "q": "Is surgery successful for stenosis?",
        "a": "Decompression often improves leg symptoms and walking distance in suitable patients."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Spinal Stenosis: Symptoms and Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Spinal Stenosis: Symptoms and Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-055",
    "specialtySlug": "spine-surgery",
    "specialtyTitle": "Spine Surgery",
    "slug": "recovery-after-spine-surgery-what-should-patients-expect",
    "title": "Recovery After Spine Surgery: What Should Patients Expect?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Recovery after spine surgery depends on the procedure. A simple discectomy may have you back at a desk job in a couple of weeks, while a spinal fusion can take several months to fully heal. Knowing what to expect helps you recover safely and confidently.",
    "diagram": {
      "title": "Typical recovery after spine surgery",
      "steps": [
        {
          "number": "1",
          "title": "Day 0 to 2",
          "description": "Walking begins; pain control"
        },
        {
          "number": "2",
          "title": "Weeks 1 to 2",
          "description": "Short walks; wound heals"
        },
        {
          "number": "3",
          "title": "Weeks 2 to 6",
          "description": "Gradual activity; desk work for many"
        },
        {
          "number": "4",
          "title": "Months 3 to 6",
          "description": "Full activity; fusion matures"
        }
      ]
    },
    "sections": [
      {
        "heading": "In hospital",
        "content": "Walking begins early, often on the same day or the next day Pain is managed with medicines; let the team know if pain is not controlled A physiotherapist teaches you how to get in and out of bed safely using the log-roll method Hospital stay ranges from same-day discharge to about 5 days, depending on the surgery",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Walking begins early, often on the same day or the next day"
          },
          {
            "label": "",
            "text": "Pain is managed with medicines; let the team know if pain is not controlled"
          },
          {
            "label": "",
            "text": "A physiotherapist teaches you how to get in and out of bed safely using the log-roll method"
          },
          {
            "label": "",
            "text": "Hospital stay ranges from same-day discharge to about 5 days, depending on the surgery"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Typical recovery by procedure",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Procedure",
            "Return to light activity",
            "Fuller recovery"
          ],
          "rows": [
            [
              "Microdiscectomy",
              "1 to 2 weeks",
              "6 weeks"
            ],
            [
              "Decompression",
              "2 to 4 weeks",
              "6 to 12 weeks"
            ],
            [
              "Disc replacement",
              "1 to 2 weeks",
              "6 to 12 weeks"
            ],
            [
              "Spinal fusion",
              "4 to 6 weeks",
              "6 to 12 months"
            ]
          ]
        }
      },
      {
        "heading": "Do's",
        "content": "Walk several times a day, increasing distance gradually Change position often; avoid sitting for long periods Keep the wound clean and dry Take medicines as prescribed Eat a balanced diet with enough protein Begin physiotherapy when advised",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Walk several times a day, increasing distance gradually"
          },
          {
            "label": "",
            "text": "Change position often; avoid sitting for long periods"
          },
          {
            "label": "",
            "text": "Keep the wound clean and dry"
          },
          {
            "label": "",
            "text": "Take medicines as prescribed"
          },
          {
            "label": "",
            "text": "Eat a balanced diet with enough protein"
          },
          {
            "label": "",
            "text": "Begin physiotherapy when advised"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Don'ts (for the period your surgeon advises)",
        "content": "Do not bend, lift or twist excessively Do not lift heavy objects, often nothing more than 2 to 5 kg initially Do not drive until you can sit comfortably and are off strong painkillers Do not smoke: it slows healing and greatly reduces the success of fusion",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Do not bend, lift or twist excessively"
          },
          {
            "label": "",
            "text": "Do not lift heavy objects, often nothing more than 2 to 5 kg initially"
          },
          {
            "label": "",
            "text": "Do not drive until you can sit comfortably and are off strong painkillers"
          },
          {
            "label": "Do not smoke:",
            "text": "it slows healing and greatly reduces the success of fusion"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What is normal?",
        "content": "Some pain and stiffness around the incision Leg pain often improves quickly; numbness and tingling may take weeks to months Tiredness for a few weeks Good and bad days during recovery",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Some pain and stiffness around the incision"
          },
          {
            "label": "",
            "text": "Leg pain often improves quickly; numbness and tingling may take weeks to months"
          },
          {
            "label": "",
            "text": "Tiredness for a few weeks"
          },
          {
            "label": "",
            "text": "Good and bad days during recovery"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Returning to work",
        "content": "Desk work: often after 2 to 6 weeks Physical or manual work: often after 6 to 12 weeks or longer, especially after fusion",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Desk work: often after 2 to 6 weeks"
          },
          {
            "label": "",
            "text": "Physical or manual work: often after 6 to 12 weeks or longer, especially after fusion"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Warning signs: contact your surgeon urgently",
        "content": "Fever, redness, swelling or discharge from the wound Clear fluid leaking from the wound Severe headache when sitting or standing New or worsening leg weakness or numbness Loss of bladder or bowel control (emergency) Calf pain or breathlessness",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Fever, redness, swelling or discharge from the wound"
          },
          {
            "label": "",
            "text": "Clear fluid leaking from the wound"
          },
          {
            "label": "",
            "text": "Severe headache when sitting or standing"
          },
          {
            "label": "",
            "text": "New or worsening leg weakness or numbness"
          },
          {
            "label": "",
            "text": "Loss of bladder or bowel control (emergency)"
          },
          {
            "label": "",
            "text": "Calf pain or breathlessness"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Long-term spine health",
        "content": "Continue core-strengthening exercises Maintain a healthy weight Use good posture and lifting technique Stay active",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Continue core-strengthening exercises"
          },
          {
            "label": "",
            "text": "Maintain a healthy weight"
          },
          {
            "label": "",
            "text": "Use good posture and lifting technique"
          },
          {
            "label": "",
            "text": "Stay active"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "When can I sleep in my normal position?",
        "a": "Most people can sleep in a comfortable position soon after surgery."
      },
      {
        "q": "Will I need to wear a brace?",
        "a": "Only after certain surgeries. Your surgeon will advise."
      },
      {
        "q": "Can I travel by air after spine surgery?",
        "a": "Usually yes after a short period. Discuss timing with your surgeon and walk regularly during the flight."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Recovery After Spine Surgery: What Should Patients Expect? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Recovery After Spine Surgery: What Should Patients Expect? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-056",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "what-causes-hair-loss",
    "title": "What Causes Hair Loss?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Losing 50 to 100 hairs a day is normal. Hair loss becomes a concern when you notice thinning, a receding hairline, bald patches or much more shedding than usual. Finding the cause is the first step to the right treatment.",
    "diagram": null,
    "sections": [
      {
        "heading": "How hair grows",
        "content": "Each hair goes through a cycle: a long growth phase lasting several years, a short transition phase, and a resting phase after which the hair falls out and a new one grows. Hair loss happens when this cycle is disrupted.",
        "paragraphs": [
          "Each hair goes through a cycle: a long growth phase lasting several years, a short transition phase, and a resting phase after which the hair falls out and a new one grows. Hair loss happens when this cycle is disrupted."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Common causes",
        "content": "linked to hormones. Hair follicles gradually shrink and produce thinner, shorter hairs. Hair usually regrows within 6 to 12 months once the trigger passes. High fever, dengue, typhoid or COVID-19 Surgery or major illness Childbirth Severe stress Crash dieting Thyroid disorders Iron deficiency and anaemia Polycystic ovary syndrome (PCOS) Vitamin D or B12 deficiency 1. Pattern hair loss (androgenetic alopecia) The most common cause in both men and women. It is inherited and 2. Telogen effluvium (temporary shedding) Heavy shedding 2 to 3 months after a trigger, such as: 3. Medical conditions 4. Alopecia areata An autoimmune condition causing round, smooth bald patches. 5. Medicines and treatments Chemotherapy, some blood pressure medicines, and others. 6. Hair care practices Tight hairstyles (traction alopecia), harsh chemical treatments and excessive heat styling. 7. Scarring alopecias Rare conditions that permanently destroy hair follicles.",
        "paragraphs": [
          "linked to hormones. Hair follicles gradually shrink and produce thinner, shorter hairs.",
          "Hair usually regrows within 6 to 12 months once the trigger passes."
        ],
        "bullets": [
          {
            "label": "",
            "text": "High fever, dengue, typhoid or COVID-19"
          },
          {
            "label": "",
            "text": "Surgery or major illness"
          },
          {
            "label": "",
            "text": "Childbirth"
          },
          {
            "label": "",
            "text": "Severe stress"
          },
          {
            "label": "",
            "text": "Crash dieting"
          },
          {
            "label": "",
            "text": "Thyroid disorders"
          },
          {
            "label": "",
            "text": "Iron deficiency and anaemia"
          },
          {
            "label": "",
            "text": "Polycystic ovary syndrome (PCOS)"
          },
          {
            "label": "",
            "text": "Vitamin D or B12 deficiency"
          }
        ],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Pattern hair loss (androgenetic alopecia) The most common cause in both men and women. It is inherited and"
          },
          {
            "number": 2,
            "text": "Telogen effluvium (temporary shedding) Heavy shedding 2 to 3 months after a trigger, such as:"
          },
          {
            "number": 3,
            "text": "Medical conditions"
          },
          {
            "number": 4,
            "text": "Alopecia areata An autoimmune condition causing round, smooth bald patches."
          },
          {
            "number": 5,
            "text": "Medicines and treatments Chemotherapy, some blood pressure medicines, and others."
          },
          {
            "number": 6,
            "text": "Hair care practices Tight hairstyles (traction alopecia), harsh chemical treatments and excessive heat styling."
          },
          {
            "number": 7,
            "text": "Scarring alopecias Rare conditions that permanently destroy hair follicles."
          }
        ]
      },
      {
        "heading": "Diagnosis",
        "content": "A dermatologist or hair specialist will: Ask about your history, diet, medicines and family history Examine your scalp, sometimes with a magnifying device ( trichoscopy ) Perform a pull test to check shedding Order blood tests such as thyroid function, iron levels, vitamin D and B12, and hormone tests in women Occasionally take a small scalp biopsy",
        "paragraphs": [
          "A dermatologist or hair specialist will:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Ask about your history, diet, medicines and family history"
          },
          {
            "label": "",
            "text": "Examine your scalp, sometimes with a magnifying device ( trichoscopy )"
          },
          {
            "label": "",
            "text": "Perform a pull test to check shedding"
          },
          {
            "label": "",
            "text": "Order blood tests such as thyroid function, iron levels, vitamin D and B12, and hormone tests in women"
          },
          {
            "label": "",
            "text": "Occasionally take a small scalp biopsy"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment depends on the cause",
        "content": "Correcting deficiencies or treating thyroid problems Medicines approved for pattern hair loss Treatments for autoimmune hair loss Hair transplantation for stable, permanent pattern hair loss",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Correcting deficiencies or treating thyroid problems"
          },
          {
            "label": "",
            "text": "Medicines approved for pattern hair loss"
          },
          {
            "label": "",
            "text": "Treatments for autoimmune hair loss"
          },
          {
            "label": "",
            "text": "Hair transplantation for stable, permanent pattern hair loss"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a dermatologist if hair loss is sudden, patchy, accompanied by scalp pain or itching, or getting steadily worse.",
    "faqs": [
      {
        "q": "Does frequent shampooing cause hair loss?",
        "a": "No. Hair seen during washing was already due to fall."
      },
      {
        "q": "Can stress cause hair loss?",
        "a": "Yes. Severe stress can trigger temporary shedding."
      },
      {
        "q": "Is hair loss always permanent?",
        "a": "No. Many causes, such as temporary shedding and deficiencies, are reversible."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Causes Hair Loss? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Causes Hair Loss? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-057",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "fue-versus-fut-hair-transplantation",
    "title": "FUE Versus FUT Hair Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "FUE and FUT are the two main techniques used in modern hair transplantation. Both move hair follicles from the back and sides of the scalp, where hair is usually permanent, to thinning areas. The difference is how the follicles are removed.",
    "diagram": {
      "title": "Two ways to harvest grafts",
      "steps": [
        {
          "number": "1",
          "title": "FUE",
          "description": "Individual follicles punched out one by one"
        },
        {
          "number": "2",
          "title": "FUT",
          "description": "A thin strip of scalp removed and divided"
        },
        {
          "number": "3",
          "title": "Both",
          "description": "Grafts placed in tiny slits in thinning areas"
        },
        {
          "number": "4",
          "title": "Result",
          "description": "Natural growth over 9 to 12 months"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is FUE?",
        "content": "Follicular Unit Extraction (FUE) removes individual follicular units, natural groups of 1 to 4 hairs, one at a time using a tiny circular punch, usually under 1 mm. The donor area heals with very small dot-like scars that are hard to see once hair grows back.",
        "paragraphs": [
          "Follicular Unit Extraction (FUE) removes individual follicular units, natural groups of 1 to 4 hairs, one at a time using a tiny circular punch, usually under 1 mm. The donor area heals with very small dot-like scars that are hard to see once hair grows back."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What is FUT?",
        "content": "Follicular Unit Transplantation (FUT) , also called the strip method, removes a thin strip of skin from the back of the scalp. The strip is divided into individual grafts under a microscope. The wound is stitched, leaving a fine linear scar usually hidden by surrounding hair.",
        "paragraphs": [
          "Follicular Unit Transplantation (FUT) , also called the strip method, removes a thin strip of skin from the back of the scalp. The strip is divided into individual grafts under a microscope. The wound is stitched, leaving a fine linear scar usually hidden by surrounding hair."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Side-by-side comparison",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "FUE",
            "FUT"
          ],
          "rows": [
            [
              "Harvesting",
              "Individual follicles",
              "A strip of scalp"
            ],
            [
              "Donor scar",
              "Tiny dots",
              "A thin line"
            ],
            [
              "Stitches",
              "None in donor area",
              "Yes, removed after about 10 days"
            ],
            [
              "Short hairstyles",
              "Generally possible",
              "Scar may show with very short hair"
            ],
            [
              "Donor recovery",
              "Usually quicker",
              "A little more tightness and discomfort"
            ],
            [
              "Shaving",
              "Donor area usually shaved",
              "Usually not required"
            ],
            [
              "Graft survival",
              "Good with experienced teams",
              "Good with experienced teams"
            ]
          ]
        }
      },
      {
        "heading": "Which technique is right for you?",
        "content": "FUE may suit people who: FUT may suit people who: Some surgeons combine both methods to maximise grafts in advanced baldness. Prefer to wear their hair short Want to avoid a linear scar Need a small to moderate number of grafts Have a tight scalp Need a large number of grafts in one session Prefer not to shave the donor area Wear their hair longer",
        "paragraphs": [
          "FUE may suit people who:",
          "FUT may suit people who:",
          "Some surgeons combine both methods to maximise grafts in advanced baldness."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Prefer to wear their hair short"
          },
          {
            "label": "",
            "text": "Want to avoid a linear scar"
          },
          {
            "label": "",
            "text": "Need a small to moderate number of grafts"
          },
          {
            "label": "",
            "text": "Have a tight scalp"
          },
          {
            "label": "",
            "text": "Need a large number of grafts in one session"
          },
          {
            "label": "",
            "text": "Prefer not to shave the donor area"
          },
          {
            "label": "",
            "text": "Wear their hair longer"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What matters most",
        "content": "The skill and experience of the surgical team matter more than the technique name. Ask about: Who performs each step of the procedure How grafts are handled and stored How the donor area is protected from over-harvesting",
        "paragraphs": [
          "The skill and experience of the surgical team matter more than the technique name. Ask about:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Who performs each step of the procedure"
          },
          {
            "label": "",
            "text": "How grafts are handled and stored"
          },
          {
            "label": "",
            "text": "How the donor area is protected from over-harvesting"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Consult a qualified, registered hair transplant surgeon who can assess your donor area and recommend the most suitable technique.",
    "faqs": [
      {
        "q": "Is FUE scarless?",
        "a": "No. FUE leaves tiny dot scars, but they are usually barely visible."
      },
      {
        "q": "Is one method more natural looking?",
        "a": "Both can look natural. Results depend on graft placement and design."
      },
      {
        "q": "Is \"DHI\" a different procedure?",
        "a": "DHI is a variation of FUE that uses an implanter pen for placing grafts."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for FUE Versus FUT Hair Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for FUE Versus FUT Hair Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-058",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "who-is-a-suitable-candidate-for-hair-transplant",
    "title": "Who Is a Suitable Candidate for Hair Transplant?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Hair transplantation can give natural, permanent results, but it is not suitable for everyone. A careful assessment of your hair loss and donor hair decides whether a transplant will help.",
    "diagram": null,
    "sections": [
      {
        "heading": "The key requirement: good donor hair",
        "content": "Hair at the back and sides of the scalp is usually resistant to pattern hair loss. This is the donor area . A good candidate has enough healthy, dense hair there to cover the thinning areas. Beard and body hair may be used as extra donor sources in selected cases.",
        "paragraphs": [
          "Hair at the back and sides of the scalp is usually resistant to pattern hair loss. This is the donor area . A good candidate has enough healthy, dense hair there to cover the thinning areas. Beard and body hair may be used as extra donor sources in selected cases."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who may be a good candidate?",
        "content": "Men with pattern baldness that has stabilised Women with pattern hair loss that is limited to certain areas and with a stable donor area People with hair loss from old scars, burns or previous surgery People wanting to restore eyebrows or beards Those who have realistic expectations about results",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Men with pattern baldness that has stabilised"
          },
          {
            "label": "",
            "text": "Women with pattern hair loss that is limited to certain areas and with a stable donor area"
          },
          {
            "label": "",
            "text": "People with hair loss from old scars, burns or previous surgery"
          },
          {
            "label": "",
            "text": "People wanting to restore eyebrows or beards"
          },
          {
            "label": "",
            "text": "Those who have realistic expectations about results"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Factors the surgeon considers",
        "content": "Age: Very young men may continue to lose hair, so the pattern of future loss must be considered. Many surgeons prefer to wait until hair loss has become more predictable, often after the mid-20s. Stage of hair loss: Hair loss is graded on scales such as the Norwood scale for men and the Ludwig scale for women. Very advanced baldness with limited donor hair may allow only partial coverage. Hair characteristics: Thick, curly or wavy hair and a small contrast between hair and skin colour can give the appearance of more coverage. General health: Conditions such as uncontrolled diabetes, bleeding disorders or heart disease need to be evaluated before surgery.",
        "paragraphs": [
          "Age: Very young men may continue to lose hair, so the pattern of future loss must be considered. Many surgeons prefer to wait until hair loss has become more predictable, often after the mid-20s.",
          "Stage of hair loss: Hair loss is graded on scales such as the Norwood scale for men and the Ludwig scale for women. Very advanced baldness with limited donor hair may allow only partial coverage.",
          "Hair characteristics: Thick, curly or wavy hair and a small contrast between hair and skin colour can give the appearance of more coverage.",
          "General health: Conditions such as uncontrolled diabetes, bleeding disorders or heart disease need to be evaluated before surgery."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who may not be suitable?",
        "content": "People with diffuse thinning across the whole scalp, including the donor area Hair loss from causes that may be reversible, such as thyroid disease or deficiencies, which should be treated first Active alopecia areata or certain scarring scalp conditions People expecting the density they had as teenagers",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "People with diffuse thinning across the whole scalp, including the donor area"
          },
          {
            "label": "",
            "text": "Hair loss from causes that may be reversible, such as thyroid disease or deficiencies, which should be treated first"
          },
          {
            "label": "",
            "text": "Active alopecia areata or certain scarring scalp conditions"
          },
          {
            "label": "",
            "text": "People expecting the density they had as teenagers"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Medicines alongside transplant",
        "content": "Transplanted hair is usually long-lasting, but native hair around it may continue to thin. Your doctor may recommend medicines to protect existing hair.",
        "paragraphs": [
          "Transplanted hair is usually long-lasting, but native hair around it may continue to thin. Your doctor may recommend medicines to protect existing hair."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "The consultation",
        "content": "Expect a scalp examination, assessment of donor density, a discussion of your goals and a plan for the hairline. A good surgeon will tell you honestly if transplant is not right for you.",
        "paragraphs": [
          "Expect a scalp examination, assessment of donor density, a discussion of your goals and a plan for the hairline. A good surgeon will tell you honestly if transplant is not right for you."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Can women have hair transplants?",
        "a": "Yes, if hair loss is localised and the donor area is stable."
      },
      {
        "q": "Can I use someone else's hair?",
        "a": "No. Transplants use your own hair to avoid rejection."
      },
      {
        "q": "How many sessions will I need?",
        "a": "Many people need one session; advanced hair loss may need two."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Who Is a Suitable Candidate for Hair Transplant? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Who Is a Suitable Candidate for Hair Transplant? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-059",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "hair-transplant-procedure-explained",
    "title": "Hair Transplant Procedure Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A hair transplant is a day-care procedure performed under local anaesthesia. You stay awake and can usually go home the same evening. Here is what typically happens.",
    "diagram": {
      "title": "Hair transplant day",
      "steps": [
        {
          "number": "1",
          "title": "Planning",
          "description": "Hairline designed and marked"
        },
        {
          "number": "2",
          "title": "Anaesthesia",
          "description": "Local anaesthesia numbs the scalp"
        },
        {
          "number": "3",
          "title": "Harvesting",
          "description": "Grafts removed from the donor area"
        },
        {
          "number": "4",
          "title": "Implantation",
          "description": "Grafts placed into tiny slits"
        }
      ]
    },
    "sections": [
      {
        "heading": "Before the procedure",
        "content": "Consultation and planning: your surgeon examines your scalp and agrees a plan with you Blood tests: to check general health and rule out infections or bleeding problems Medicines: you may be asked to stop blood thinners, certain supplements, alcohol and smoking for some days beforehand On the day: wash your hair, eat a light breakfast and wear a button-up shirt",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Consultation and planning:",
            "text": "your surgeon examines your scalp and agrees a plan with you"
          },
          {
            "label": "Blood tests:",
            "text": "to check general health and rule out infections or bleeding problems"
          },
          {
            "label": "Medicines:",
            "text": "you may be asked to stop blood thinners, certain supplements, alcohol and smoking for some days beforehand"
          },
          {
            "label": "On the day:",
            "text": "wash your hair, eat a light breakfast and wear a button-up shirt"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Step 1: Hairline design",
        "content": "The surgeon draws the new hairline and marks the areas to be covered. A natural hairline is irregular and matches your age and face shape. You should agree on the design before starting.",
        "paragraphs": [
          "The surgeon draws the new hairline and marks the areas to be covered. A natural hairline is irregular and matches your age and face shape. You should agree on the design before starting."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 2: Preparing the donor area",
        "content": "The donor area is trimmed or shaved, depending on the technique.",
        "paragraphs": [
          "The donor area is trimmed or shaved, depending on the technique."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 3: Local anaesthesia",
        "content": "The donor and recipient areas are numbed with injections. The first injections may sting briefly. After that, most people feel only pressure.",
        "paragraphs": [
          "The donor and recipient areas are numbed with injections. The first injections may sting briefly. After that, most people feel only pressure."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 4: Harvesting grafts",
        "content": "FUE: individual follicles are removed with a tiny punch FUT: a thin strip is removed, then divided under a microscope",
        "paragraphs": [],
        "bullets": [
          {
            "label": "FUE:",
            "text": "individual follicles are removed with a tiny punch"
          },
          {
            "label": "FUT:",
            "text": "a thin strip is removed, then divided under a microscope"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Step 5: Preparing grafts",
        "content": "Grafts are sorted by the number of hairs and kept in a cooled solution to protect them.",
        "paragraphs": [
          "Grafts are sorted by the number of hairs and kept in a cooled solution to protect them."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 6: Creating recipient sites",
        "content": "Tiny slits are made in the thinning areas. Their angle, direction and density are crucial for a natural look.",
        "paragraphs": [
          "Tiny slits are made in the thinning areas. Their angle, direction and density are crucial for a natural look."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 7: Implantation",
        "content": "Grafts are placed into the slits. Single-hair grafts are used at the front of the hairline for a soft, natural edge.",
        "paragraphs": [
          "Grafts are placed into the slits. Single-hair grafts are used at the front of the hairline for a soft, natural edge."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How long does it take?",
        "content": "Usually 6 to 9 hours , depending on the number of grafts. There are breaks for meals and rest. Many people watch films or listen to music.",
        "paragraphs": [
          "Usually 6 to 9 hours , depending on the number of grafts. There are breaks for meals and rest. Many people watch films or listen to music."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "After the procedure",
        "content": "The donor area may be bandaged You will receive instructions for sleeping, washing and medicines A follow-up visit is usually scheduled for the next day for the first wash",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "The donor area may be bandaged"
          },
          {
            "label": "",
            "text": "You will receive instructions for sleeping, washing and medicines"
          },
          {
            "label": "",
            "text": "A follow-up visit is usually scheduled for the next day for the first wash"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Choosing a clinic",
        "content": "Ensure the procedure is performed by a qualified, registered surgeon, with trained technicians, in a clean, properly equipped facility.",
        "paragraphs": [
          "Ensure the procedure is performed by a qualified, registered surgeon, with trained technicians, in a clean, properly equipped facility."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Is a hair transplant painful?",
        "a": "The anaesthetic injections may sting briefly; after that, the procedure is usually comfortable."
      },
      {
        "q": "Can I go home the same day?",
        "a": "Yes. Hair transplant is usually a day-care procedure."
      },
      {
        "q": "How many grafts will I need?",
        "a": "It depends on the area to be covered and your donor supply. Your surgeon will estimate this."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Hair Transplant Procedure Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Hair Transplant Procedure Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-060",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "recovery-after-hair-transplantation",
    "title": "Recovery After Hair Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "The first two weeks after a hair transplant are about healing the skin and protecting the new grafts. Most people find recovery straightforward with good care. This article covers short-term healing; for long-term growth, see our results timeline.",
    "diagram": {
      "title": "Healing in the first two weeks",
      "steps": [
        {
          "number": "1",
          "title": "Days 1 to 3",
          "description": "Mild discomfort; possible forehead swelling"
        },
        {
          "number": "2",
          "title": "Days 4 to 7",
          "description": "Small scabs; itching begins"
        },
        {
          "number": "3",
          "title": "Days 7 to 10",
          "description": "Scabs fall off with gentle washing"
        },
        {
          "number": "4",
          "title": "Days 10 to 14",
          "description": "Redness fades; donor area healed"
        }
      ]
    },
    "sections": [
      {
        "heading": "Day 1 to 3",
        "content": "Discomfort: mild soreness, mainly in the donor area, controlled with prescribed medicines Swelling: may appear on the forehead or around the eyes around days 2 to 4. It is temporary and usually settles within a week. Sleep with your head elevated at about 45 degrees to reduce swelling Avoid touching the grafts; they are delicate in the first days",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Discomfort:",
            "text": "mild soreness, mainly in the donor area, controlled with prescribed medicines"
          },
          {
            "label": "Swelling:",
            "text": "may appear on the forehead or around the eyes around days 2 to 4. It is temporary and usually settles within a week."
          },
          {
            "label": "",
            "text": "Sleep with your head elevated at about 45 degrees to reduce swelling"
          },
          {
            "label": "",
            "text": "Avoid touching the grafts; they are delicate in the first days"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Day 4 to 7",
        "content": "Tiny scabs form around each graft Itching is common as the skin heals; do not scratch Wash gently as instructed by your clinic Pinkness in the recipient area is normal",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Tiny scabs form around each graft"
          },
          {
            "label": "",
            "text": "Itching is common as the skin heals; do not scratch"
          },
          {
            "label": "",
            "text": "Wash gently as instructed by your clinic"
          },
          {
            "label": "",
            "text": "Pinkness in the recipient area is normal"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Day 7 to 10",
        "content": "Scabs soften and fall off with gentle washing Small hairs may come off with the scabs; this is normal Stitches are removed around day 10 if you had FUT",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Scabs soften and fall off with gentle washing"
          },
          {
            "label": "",
            "text": "Small hairs may come off with the scabs; this is normal"
          },
          {
            "label": "",
            "text": "Stitches are removed around day 10 if you had FUT"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Day 10 to 14",
        "content": "Most redness fades, though fair skin may stay pink longer The donor area is usually well healed You can usually resume most routine activities",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Most redness fades, though fair skin may stay pink longer"
          },
          {
            "label": "",
            "text": "The donor area is usually well healed"
          },
          {
            "label": "",
            "text": "You can usually resume most routine activities"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Returning to work and activities",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Activity",
            "Typical timing"
          ],
          "rows": [
            [
              "Desk work",
              "3 to 7 days, depending on comfort with appearance"
            ],
            [
              "Light walking",
              "From the next day"
            ],
            [
              "Gym and heavy exercise",
              "Usually after 2 to 4 weeks"
            ],
            [
              "Swimming",
              "Usually after 3 to 4 weeks"
            ],
            [
              "Wearing a loose cap",
              "After a few days, if permitted"
            ]
          ]
        }
      },
      {
        "heading": "Air travel",
        "content": "Many people fly home within a few days. Ask your surgeon about timing and how to protect the grafts during travel.",
        "paragraphs": [
          "Many people fly home within a few days. Ask your surgeon about timing and how to protect the grafts during travel."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What is normal and what is not",
        "content": "Normal: mild swelling, itching, tightness, small scabs, temporary numbness Contact your clinic if you notice: Increasing pain or redness after the first few days Pus, discharge or a bad smell Fever Bleeding that does not stop with gentle pressure",
        "paragraphs": [
          "Normal: mild swelling, itching, tightness, small scabs, temporary numbness Contact your clinic if you notice:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Increasing pain or redness after the first few days"
          },
          {
            "label": "",
            "text": "Pus, discharge or a bad smell"
          },
          {
            "label": "",
            "text": "Fever"
          },
          {
            "label": "",
            "text": "Bleeding that does not stop with gentle pressure"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "When can I wash my hair?",
        "a": "Usually from the day after surgery, following your clinic's gentle washing technique."
      },
      {
        "q": "Is swelling a sign that something is wrong?",
        "a": "No. Forehead swelling is common and usually settles within a week."
      },
      {
        "q": "Can I wear a helmet?",
        "a": "Usually not for the first couple of weeks. Ask your surgeon."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Recovery After Hair Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Recovery After Hair Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-061",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "understanding-hair-transplant-grafts",
    "title": "Understanding Hair Transplant Grafts",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "\"Grafts\" are the units used to plan and perform a hair transplant. Understanding what a graft is helps you make sense of your treatment plan and set realistic expectations.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is a graft?",
        "content": "Hair naturally grows in small groups called follicular units . Each unit usually contains 1 to 4 hairs . In a transplant, each of these units is moved as a single graft. On average, a graft contains about 2 to 2.5 hairs So 2,000 grafts may contain roughly 4,000 to 5,000 hairs",
        "paragraphs": [
          "Hair naturally grows in small groups called follicular units . Each unit usually contains 1 to 4 hairs . In a transplant, each of these units is moved as a single graft."
        ],
        "bullets": [
          {
            "label": "",
            "text": "On average, a graft contains about 2 to 2.5 hairs"
          },
          {
            "label": "",
            "text": "So 2,000 grafts may contain roughly 4,000 to 5,000 hairs"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How grafts are placed",
        "content": "Single-hair grafts are placed at the front of the hairline for a soft, natural edge Two- and three-hair grafts are placed behind to build density Grafts follow the natural angle and direction of hair growth",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Single-hair grafts are placed at the front of the hairline for a soft, natural edge"
          },
          {
            "label": "",
            "text": "Two- and three-hair grafts are placed behind to build density"
          },
          {
            "label": "",
            "text": "Grafts follow the natural angle and direction of hair growth"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How many grafts do you need?",
        "content": "It depends on: As a broad guide, restoring a receding hairline needs fewer grafts than covering the front and crown together. Your surgeon will give a personalised estimate. The size of the area to be covered The density you hope to achieve Your donor area's capacity Hair characteristics such as thickness and curl",
        "paragraphs": [
          "It depends on:",
          "As a broad guide, restoring a receding hairline needs fewer grafts than covering the front and crown together.",
          "Your surgeon will give a personalised estimate."
        ],
        "bullets": [
          {
            "label": "",
            "text": "The size of the area to be covered"
          },
          {
            "label": "",
            "text": "The density you hope to achieve"
          },
          {
            "label": "",
            "text": "Your donor area's capacity"
          },
          {
            "label": "",
            "text": "Hair characteristics such as thickness and curl"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The donor area is limited",
        "content": "Your donor supply is finite . Over-harvesting can leave the donor area visibly thin. A responsible surgeon: Harvests only from the safe donor zone , where hair is resistant to balding Spreads extraction evenly Plans for possible future hair loss and keeps reserves",
        "paragraphs": [
          "Your donor supply is finite . Over-harvesting can leave the donor area visibly thin. A responsible surgeon:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Harvests only from the safe donor zone , where hair is resistant to balding"
          },
          {
            "label": "",
            "text": "Spreads extraction evenly"
          },
          {
            "label": "",
            "text": "Plans for possible future hair loss and keeps reserves"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Why more grafts is not always better",
        "content": "Packing too many grafts too closely can reduce survival and use up donor hair needed later. Good design focuses on natural appearance and long-term planning , not just a high graft count.",
        "paragraphs": [
          "Packing too many grafts too closely can reduce survival and use up donor hair needed later. Good design focuses on natural appearance and long-term planning , not just a high graft count."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What affects graft survival?",
        "content": "Gentle handling and minimal time outside the body Correct storage solution and temperature Skilled placement Following aftercare instructions Avoiding smoking",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Gentle handling and minimal time outside the body"
          },
          {
            "label": "",
            "text": "Correct storage solution and temperature"
          },
          {
            "label": "",
            "text": "Skilled placement"
          },
          {
            "label": "",
            "text": "Following aftercare instructions"
          },
          {
            "label": "",
            "text": "Avoiding smoking"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Body and beard hair",
        "content": "Beard and body hair can supplement scalp donor hair in some patients, but they may differ in texture and growth.",
        "paragraphs": [
          "Beard and body hair can supplement scalp donor hair in some patients, but they may differ in texture and growth."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "A qualified hair transplant surgeon can examine your donor density and give you a realistic plan for coverage.",
    "faqs": [
      {
        "q": "Are all grafts the same?",
        "a": "No. They contain different numbers of hairs and are placed strategically."
      },
      {
        "q": "Does every graft grow?",
        "a": "Most do with good technique and care, but not all grafts survive."
      },
      {
        "q": "Can I have more grafts later?",
        "a": "Possibly, if your donor area still has enough hair."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Hair Transplant Grafts (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Hair Transplant Grafts adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-062",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "common-myths-about-hair-transplantation",
    "title": "Common Myths About Hair Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Hair transplantation attracts a lot of advertising and misinformation. Separating myth from fact helps you make a well-informed decision.",
    "diagram": null,
    "sections": [
      {
        "heading": "Myth 1: \"Hair transplants look fake.\"",
        "content": "Fact: Modern techniques, using individual follicular units placed at natural angles, can give results that look completely natural. Unnatural results usually come from poor planning or technique.",
        "paragraphs": [
          "Fact: Modern techniques, using individual follicular units placed at natural angles, can give results that look completely natural. Unnatural results usually come from poor planning or technique."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 2: \"The procedure is very painful.\"",
        "content": "Fact: It is done under local anaesthesia. Most people feel only the initial injections and mild soreness afterwards.",
        "paragraphs": [
          "Fact: It is done under local anaesthesia. Most people feel only the initial injections and mild soreness afterwards."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 3: \"Results are immediate.\"",
        "content": "Fact: Transplanted hairs usually shed in the first few weeks. New growth begins around 3 to 4 months, and full results take about 12 months or longer.",
        "paragraphs": [
          "Fact: Transplanted hairs usually shed in the first few weeks. New growth begins around 3 to 4 months, and full results take about 12 months or longer."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 4: \"Transplanted hair will fall out again.\"",
        "content": "Fact: Hair taken from the safe donor zone is generally resistant to pattern hair loss and tends to last long term. However, your existing native hair may continue to thin, which is why ongoing care is important.",
        "paragraphs": [
          "Fact: Hair taken from the safe donor zone is generally resistant to pattern hair loss and tends to last long term.",
          "However, your existing native hair may continue to thin, which is why ongoing care is important."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 5: \"You can use hair from another person.\"",
        "content": "Fact: Only your own hair can be used. Hair from another person would be rejected by the immune system.",
        "paragraphs": [
          "Fact: Only your own hair can be used. Hair from another person would be rejected by the immune system."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 6: \"Anyone can get a full head of hair.\"",
        "content": "Fact: Results depend on your donor supply. Very advanced baldness may allow only partial coverage.",
        "paragraphs": [
          "Fact: Results depend on your donor supply. Very advanced baldness may allow only partial coverage."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 7: \"Hair transplants are only for men.\"",
        "content": "Fact: Women with suitable patterns of hair loss and a stable donor area can benefit.",
        "paragraphs": [
          "Fact: Women with suitable patterns of hair loss and a stable donor area can benefit."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 8: \"Younger is always better.\"",
        "content": "Fact: Transplanting too early, before hair loss patterns are clear, can lead to an unnatural look as hair loss continues around the grafts.",
        "paragraphs": [
          "Fact: Transplanting too early, before hair loss patterns are clear, can lead to an unnatural look as hair loss continues around the grafts."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 9: \"More grafts in one day is always better.\"",
        "content": "Fact: Excessively large sessions can compromise graft survival and use up limited donor hair.",
        "paragraphs": [
          "Fact: Excessively large sessions can compromise graft survival and use up limited donor hair."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Myth 10: \"Results are guaranteed.\"",
        "content": "Fact: No reputable surgeon can guarantee a specific outcome. Growth varies between individuals. Be cautious of advertisements promising guaranteed results.",
        "paragraphs": [
          "Fact: No reputable surgeon can guarantee a specific outcome. Growth varies between individuals. Be cautious of advertisements promising guaranteed results."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Choosing safely",
        "content": "Choose a qualified, registered surgeon Ask who performs each part of the procedure Look for honest discussion of risks and realistic expectations",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Choose a qualified, registered surgeon"
          },
          {
            "label": "",
            "text": "Ask who performs each part of the procedure"
          },
          {
            "label": "",
            "text": "Look for honest discussion of risks and realistic expectations"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Is a hair transplant permanent?",
        "a": "Transplanted hair from the safe donor zone usually lasts long term, but native hair can continue to thin."
      },
      {
        "q": "Can a transplant cause cancer or brain damage?",
        "a": "No. These are myths. The procedure involves only the skin of the scalp."
      },
      {
        "q": "Will people know I had a transplant?",
        "a": "With good technique and after healing, results usually look natural."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Common Myths About Hair Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Common Myths About Hair Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-063",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "hair-loss-in-men-and-women",
    "title": "Hair Loss in Men and Women",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Hair loss affects both men and women, but it usually looks different and can have different causes. Understanding these differences helps guide the right treatment.",
    "diagram": null,
    "sections": [
      {
        "heading": "Hair loss in men",
        "content": "Male pattern baldness is the most common type. It typically starts with: It is caused by genetics and sensitivity of hair follicles to a hormone called DHT (dihydrotestosterone). It can begin as early as the late teens or twenties. A receding hairline at the temples Thinning at the crown Gradual progression, which may lead to baldness on top",
        "paragraphs": [
          "Male pattern baldness is the most common type. It typically starts with:",
          "It is caused by genetics and sensitivity of hair follicles to a hormone called DHT (dihydrotestosterone). It can begin as early as the late teens or twenties."
        ],
        "bullets": [
          {
            "label": "",
            "text": "A receding hairline at the temples"
          },
          {
            "label": "",
            "text": "Thinning at the crown"
          },
          {
            "label": "",
            "text": "Gradual progression, which may lead to baldness on top"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Hair loss in women",
        "content": "Female pattern hair loss usually looks different: Women are also more likely to have hair loss related to: A widening centre parting Diffuse thinning over the top of the scalp The front hairline is often preserved Complete baldness is rare Hormonal changes: pregnancy, after childbirth, menopause PCOS: may cause scalp thinning along with acne or excess facial hair Thyroid disorders Iron deficiency , especially with heavy periods Tight hairstyles (traction alopecia)",
        "paragraphs": [
          "Female pattern hair loss usually looks different:",
          "Women are also more likely to have hair loss related to:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "A widening centre parting"
          },
          {
            "label": "",
            "text": "Diffuse thinning over the top of the scalp"
          },
          {
            "label": "",
            "text": "The front hairline is often preserved"
          },
          {
            "label": "",
            "text": "Complete baldness is rare"
          },
          {
            "label": "Hormonal changes:",
            "text": "pregnancy, after childbirth, menopause"
          },
          {
            "label": "PCOS:",
            "text": "may cause scalp thinning along with acne or excess facial hair"
          },
          {
            "label": "",
            "text": "Thyroid disorders"
          },
          {
            "label": "",
            "text": "Iron deficiency , especially with heavy periods"
          },
          {
            "label": "",
            "text": "Tight hairstyles (traction alopecia)"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Comparison",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "Men",
            "Women"
          ],
          "rows": [
            [
              "Typical pattern",
              "Receding hairline, crown baldness",
              "Widening parting, diffuse thinning"
            ],
            [
              "Hairline",
              "Often recedes",
              "Usually preserved"
            ],
            [
              "Common contributing factors",
              "Genetics, DHT",
              "Genetics, hormones, deficiencies, thyroid, PCOS"
            ],
            [
              "Tests commonly needed",
              "Often minimal",
              "Blood tests, sometimes hormone profile"
            ]
          ]
        }
      },
      {
        "heading": "Diagnosis",
        "content": "Both men and women benefit from evaluation by a dermatologist. Women often need blood tests such as iron studies, thyroid function, vitamin levels and hormone tests to find contributing causes.",
        "paragraphs": [
          "Both men and women benefit from evaluation by a dermatologist. Women often need blood tests such as iron studies, thyroid function, vitamin levels and hormone tests to find contributing causes."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "For men: For women: For both: supportive procedures offered at some clinics, healthy diet and gentle hair care. Medicines approved for male pattern hair loss Hair transplantation for stable patterns with good donor hair Treating underlying causes, such as iron deficiency or thyroid disease Topical treatments Hormonal therapy in selected cases, prescribed by a doctor Hair transplantation is suitable for some women with localised thinning",
        "paragraphs": [
          "For men:",
          "For women:",
          "For both: supportive procedures offered at some clinics, healthy diet and gentle hair care."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Medicines approved for male pattern hair loss"
          },
          {
            "label": "",
            "text": "Hair transplantation for stable patterns with good donor hair"
          },
          {
            "label": "",
            "text": "Treating underlying causes, such as iron deficiency or thyroid disease"
          },
          {
            "label": "",
            "text": "Topical treatments"
          },
          {
            "label": "",
            "text": "Hormonal therapy in selected cases, prescribed by a doctor"
          },
          {
            "label": "",
            "text": "Hair transplantation is suitable for some women with localised thinning"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Emotional impact",
        "content": "Hair loss can affect confidence and wellbeing in both men and women. It is a valid reason to seek medical advice.",
        "paragraphs": [
          "Hair loss can affect confidence and wellbeing in both men and women. It is a valid reason to seek medical advice."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "See a dermatologist if hair loss is sudden, patchy, causing distress, or associated with other symptoms such as irregular periods or tiredness.",
    "faqs": [
      {
        "q": "Is female hair loss always hormonal?",
        "a": "Not always. Genetics, deficiencies and stress also play roles."
      },
      {
        "q": "Do hair loss medicines work for everyone?",
        "a": "No. Responses vary, and medicines need to be continued to maintain benefit."
      },
      {
        "q": "Can postpartum hair loss be permanent?",
        "a": "Usually not. It typically recovers within a year."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Hair Loss in Men and Women (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Hair Loss in Men and Women adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-064",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "what-to-expect-after-a-hair-transplant",
    "title": "What to Expect After a Hair Transplant",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Hair transplant results take patience. Understanding the normal growth timeline helps you avoid unnecessary worry. This article covers the long-term growth phase after the first two weeks of healing.",
    "diagram": {
      "title": "Month-by-month growth",
      "steps": [
        {
          "number": "1",
          "title": "Weeks 2 to 6",
          "description": "Transplanted hairs shed (normal)"
        },
        {
          "number": "2",
          "title": "Months 1 to 3",
          "description": "Quiet \"resting\" phase"
        },
        {
          "number": "3",
          "title": "Months 3 to 6",
          "description": "Fine new hairs appear Months 6 to 9 Hair thickens and lengthens"
        },
        {
          "number": "4",
          "title": "5",
          "description": "Months 12 to 18 Final results visible"
        }
      ]
    },
    "sections": [
      {
        "heading": "Weeks 2 to 6: shedding phase",
        "content": "Most transplanted hairs fall out . This is normal and expected. The hair shaft sheds, but the follicle stays in place under the skin, ready to grow new hair.",
        "paragraphs": [
          "Most transplanted hairs fall out . This is normal and expected. The hair shaft sheds, but the follicle stays in place under the skin, ready to grow new hair."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Months 1 to 3: the \"ugly duckling\" phase",
        "content": "The scalp may look much as it did before surgery. Some people also notice shock loss , temporary shedding of existing native hair around the transplanted area. It usually recovers within a few months.",
        "paragraphs": [
          "The scalp may look much as it did before surgery. Some people also notice shock loss , temporary shedding of existing native hair around the transplanted area. It usually recovers within a few months."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Months 3 to 4: early growth",
        "content": "Fine, thin new hairs begin to appear. They may be wavy or slightly different in texture at first. Some people notice small pimple-like bumps as hairs emerge, which usually settle on their own.",
        "paragraphs": [
          "Fine, thin new hairs begin to appear. They may be wavy or slightly different in texture at first. Some people notice small pimple-like bumps as hairs emerge, which usually settle on their own."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Months 5 to 8: visible improvement",
        "content": "Hair becomes thicker, longer and more noticeable. Most people see clear improvement during this period.",
        "paragraphs": [
          "Hair becomes thicker, longer and more noticeable. Most people see clear improvement during this period."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Months 9 to 12: maturing results",
        "content": "Hair continues to thicken and blend with surrounding hair. You can usually style it normally.",
        "paragraphs": [
          "Hair continues to thicken and blend with surrounding hair. You can usually style it normally."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Months 12 to 18: final results",
        "content": "Most results are visible by 12 months. The crown and some hair types may take up to 18 months to reach full density.",
        "paragraphs": [
          "Most results are visible by 12 months. The crown and some hair types may take up to 18 months to reach full density."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Factors that affect results",
        "content": "Quality and number of grafts Surgical skill and graft handling Your hair type, thickness and colour Following aftercare instructions General health and smoking habits Continued thinning of native hair",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Quality and number of grafts"
          },
          {
            "label": "",
            "text": "Surgical skill and graft handling"
          },
          {
            "label": "",
            "text": "Your hair type, thickness and colour"
          },
          {
            "label": "",
            "text": "Following aftercare instructions"
          },
          {
            "label": "",
            "text": "General health and smoking habits"
          },
          {
            "label": "",
            "text": "Continued thinning of native hair"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Tracking your progress",
        "content": "Take photos in the same lighting and position once a month. Changes are gradual and easier to see in photos than in the mirror.",
        "paragraphs": [
          "Take photos in the same lighting and position once a month. Changes are gradual and easier to see in photos than in the mirror."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Will I need a second procedure?",
        "content": "Some people choose a second session for more density or to cover areas affected by later hair loss. This is usually considered only after the first results have fully matured, around 12 months.",
        "paragraphs": [
          "Some people choose a second session for more density or to cover areas affected by later hair loss. This is usually considered only after the first results have fully matured, around 12 months."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "When should you contact your surgeon?",
        "content": "No visible growth by 6 to 8 months Persistent redness, pain or bumps Concerns about shock loss that is not improving",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "No visible growth by 6 to 8 months"
          },
          {
            "label": "",
            "text": "Persistent redness, pain or bumps"
          },
          {
            "label": "",
            "text": "Concerns about shock loss that is not improving"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Is it normal to lose hair after a transplant?",
        "a": "Yes. Shedding of transplanted hair in the first weeks is expected."
      },
      {
        "q": "When will I see the final result?",
        "a": "Usually by 12 months; sometimes up to 18 months."
      },
      {
        "q": "Will new hair be the same texture as before?",
        "a": "Early hairs may be finer or wavier but usually normalise over time."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What to Expect After a Hair Transplant (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What to Expect After a Hair Transplant adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-065",
    "specialtySlug": "hair-transplantation",
    "specialtyTitle": "Hair Transplantation",
    "slug": "hair-transplant-aftercare",
    "title": "Hair Transplant Aftercare",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Good aftercare protects your new grafts and helps them grow well. Always follow your own clinic's instructions; this checklist covers the general principles.",
    "diagram": null,
    "sections": [
      {
        "heading": "Washing your hair",
        "content": "Begin washing as instructed, often from the day after surgery Use the mild shampoo or lotion recommended by your clinic Pour water gently from a cup or mug; avoid direct shower pressure on grafts for the first week or so Pat , do not rub; let the recipient area air dry Gradually return to normal washing after about two weeks",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Begin washing as instructed, often from the day after surgery"
          },
          {
            "label": "",
            "text": "Use the mild shampoo or lotion recommended by your clinic"
          },
          {
            "label": "",
            "text": "Pour water gently from a cup or mug; avoid direct shower pressure on grafts for the first week or so"
          },
          {
            "label": "",
            "text": "Pat , do not rub; let the recipient area air dry"
          },
          {
            "label": "",
            "text": "Gradually return to normal washing after about two weeks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Sleeping",
        "content": "Sleep with your head elevated for the first several nights Use a travel pillow to avoid rubbing grafts on the pillow Use a clean pillow cover",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Sleep with your head elevated for the first several nights"
          },
          {
            "label": "",
            "text": "Use a travel pillow to avoid rubbing grafts on the pillow"
          },
          {
            "label": "",
            "text": "Use a clean pillow cover"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Protecting the grafts",
        "content": "Do not touch, scratch or pick at scabs Avoid bumping your head Wear only a loose cap if allowed, usually after a few days Avoid helmets and tight headwear for the time advised",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Do not touch, scratch or pick at scabs"
          },
          {
            "label": "",
            "text": "Avoid bumping your head"
          },
          {
            "label": "",
            "text": "Wear only a loose cap if allowed, usually after a few days"
          },
          {
            "label": "",
            "text": "Avoid helmets and tight headwear for the time advised"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Managing itching and discomfort",
        "content": "Itching is a sign of healing; do not scratch Use the sprays or medicines your clinic recommends Take pain relief as prescribed",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Itching is a sign of healing; do not scratch"
          },
          {
            "label": "",
            "text": "Use the sprays or medicines your clinic recommends"
          },
          {
            "label": "",
            "text": "Take pain relief as prescribed"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Sun, heat and water",
        "content": "Protect your scalp from direct sun for several weeks Avoid saunas, steam rooms and swimming pools for about 3 to 4 weeks Avoid heavy sweating in the first week or two",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Protect your scalp from direct sun for several weeks"
          },
          {
            "label": "",
            "text": "Avoid saunas, steam rooms and swimming pools for about 3 to 4 weeks"
          },
          {
            "label": "",
            "text": "Avoid heavy sweating in the first week or two"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Exercise",
        "content": "Light walking is usually fine immediately Avoid strenuous exercise, weight lifting and bending for about 2 weeks Return gradually as advised",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Light walking is usually fine immediately"
          },
          {
            "label": "",
            "text": "Avoid strenuous exercise, weight lifting and bending for about 2 weeks"
          },
          {
            "label": "",
            "text": "Return gradually as advised"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Hair styling and grooming",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Activity",
            "Usual guidance"
          ],
          "rows": [
            [
              "Combing over grafts",
              "Gently, after scabs have fallen off"
            ],
            [
              "Haircut with scissors",
              "After about 3 to 4 weeks"
            ],
            [
              "Hair colouring or chemical treatments",
              "Usually after 6 to 8 weeks"
            ],
            [
              "Hair dryer",
              "Cool setting only, after a couple of weeks"
            ]
          ]
        }
      },
      {
        "heading": "Lifestyle",
        "content": "Avoid smoking for at least two weeks before and after surgery; it reduces blood flow to grafts Limit alcohol in the first week Eat a balanced, protein-rich diet Continue any prescribed medicines to protect native hair",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Avoid smoking for at least two weeks before and after surgery; it reduces blood flow to grafts"
          },
          {
            "label": "",
            "text": "Limit alcohol in the first week"
          },
          {
            "label": "",
            "text": "Eat a balanced, protein-rich diet"
          },
          {
            "label": "",
            "text": "Continue any prescribed medicines to protect native hair"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When to contact your clinic",
        "content": "Signs of infection: increasing redness, pain, pus or fever Bleeding that will not stop A graft that appears dislodged in the first few days",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Signs of infection: increasing redness, pain, pus or fever"
          },
          {
            "label": "",
            "text": "Bleeding that will not stop"
          },
          {
            "label": "",
            "text": "A graft that appears dislodged in the first few days"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Can I wear a cap after a hair transplant?",
        "a": "Usually a loose cap after a few days. Ask your clinic."
      },
      {
        "q": "When can I go to the gym?",
        "a": "Usually after about two weeks for light exercise, longer for heavy lifting."
      },
      {
        "q": "Do I need to continue medicines afterwards?",
        "a": "Your doctor may recommend medicines to protect your existing hair."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Hair Transplant Aftercare (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Hair Transplant Aftercare adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-066",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "understanding-obesity-and-its-health-risks",
    "title": "Understanding Obesity and Its Health Risks",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Obesity is a long-term medical condition, not simply a matter of willpower. It is influenced by genetics, hormones, environment, sleep, stress and lifestyle. Recognising it as a disease helps people get proper medical support.",
    "diagram": null,
    "sections": [
      {
        "heading": "How is obesity measured?",
        "content": "Body Mass Index (BMI) is weight in kilograms divided by height in metres squared. cut-offs are used. above about 90 cm in men and 80 cm in women indicates increased risk. People of South Asian origin tend to develop diabetes and heart disease at lower BMI levels, which is why lower Waist circumference matters too. Fat around the abdomen is linked to higher health risk. For Asian adults, a waist",
        "paragraphs": [
          "Body Mass Index (BMI) is weight in kilograms divided by height in metres squared.",
          "cut-offs are used.",
          "above about 90 cm in men and 80 cm in women indicates increased risk."
        ],
        "bullets": [],
        "callouts": [
          "People of South Asian origin tend to develop diabetes and heart disease at lower BMI levels, which is why lower",
          "Waist circumference matters too. Fat around the abdomen is linked to higher health risk. For Asian adults, a waist"
        ],
        "table": {
          "headers": [
            "Category",
            "General BMI",
            "Asian guidance (often used in India)"
          ],
          "rows": [
            [
              "Healthy",
              "18.5–24.9",
              "18.5–22.9"
            ],
            [
              "Overweight",
              "25–29.9",
              "23–24.9"
            ],
            [
              "Obesity",
              "30 and above",
              "25 and above"
            ]
          ]
        }
      },
      {
        "heading": "Why does obesity happen?",
        "content": "Genetics and family history High-calorie diets and large portion sizes Low physical activity Poor sleep and chronic stress Hormonal conditions such as hypothyroidism and PCOS Certain medicines Changes in appetite-regulating hormones that make weight loss hard to sustain",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Genetics and family history"
          },
          {
            "label": "",
            "text": "High-calorie diets and large portion sizes"
          },
          {
            "label": "",
            "text": "Low physical activity"
          },
          {
            "label": "",
            "text": "Poor sleep and chronic stress"
          },
          {
            "label": "",
            "text": "Hormonal conditions such as hypothyroidism and PCOS"
          },
          {
            "label": "",
            "text": "Certain medicines"
          },
          {
            "label": "",
            "text": "Changes in appetite-regulating hormones that make weight loss hard to sustain"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Health risks of obesity",
        "content": "Type 2 diabetes High blood pressure and heart disease Stroke Obstructive sleep apnoea: loud snoring and pauses in breathing at night Fatty liver disease Joint pain and osteoarthritis, especially in the knees Infertility and PCOS Acid reflux Some cancers , including breast, colon and uterine cancer Depression and reduced quality of life",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Type 2 diabetes"
          },
          {
            "label": "",
            "text": "High blood pressure and heart disease"
          },
          {
            "label": "",
            "text": "Stroke"
          },
          {
            "label": "Obstructive sleep apnoea:",
            "text": "loud snoring and pauses in breathing at night"
          },
          {
            "label": "",
            "text": "Fatty liver disease"
          },
          {
            "label": "",
            "text": "Joint pain and osteoarthritis, especially in the knees"
          },
          {
            "label": "",
            "text": "Infertility and PCOS"
          },
          {
            "label": "",
            "text": "Acid reflux"
          },
          {
            "label": "",
            "text": "Some cancers , including breast, colon and uterine cancer"
          },
          {
            "label": "",
            "text": "Depression and reduced quality of life"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The good news",
        "content": "Losing even 5 to 10 percent of body weight can improve blood sugar, blood pressure, cholesterol and joint pain.",
        "paragraphs": [
          "Losing even 5 to 10 percent of body weight can improve blood sugar, blood pressure, cholesterol and joint pain."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Diet, physical activity and behaviour change Medicines for weight management, prescribed by a doctor Endoscopic procedures for selected patients Bariatric (metabolic) surgery for severe obesity or obesity with related conditions",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Diet, physical activity and behaviour change"
          },
          {
            "label": "",
            "text": "Medicines for weight management, prescribed by a doctor"
          },
          {
            "label": "",
            "text": "Endoscopic procedures for selected patients"
          },
          {
            "label": "",
            "text": "Bariatric (metabolic) surgery for severe obesity or obesity with related conditions"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a doctor if your BMI or waist size is above the healthy range, especially if you have diabetes, high blood pressure, sleep apnoea or joint pain.",
    "faqs": [
      {
        "q": "Is BMI accurate for everyone?",
        "a": "Not perfectly. Muscular people may have a high BMI without excess fat, so doctors also consider waist size and health conditions."
      },
      {
        "q": "Is obesity genetic?",
        "a": "Genes play a significant role, but environment and lifestyle also matter."
      },
      {
        "q": "Can obesity medicines replace surgery?",
        "a": "For some people, medicines help significantly. Doctors decide based on BMI, health conditions and goals."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Obesity and Its Health Risks (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Obesity and Its Health Risks adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-067",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "who-may-benefit-from-bariatric-surgery",
    "title": "Who May Benefit from Bariatric Surgery?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Bariatric surgery, also called weight loss or metabolic surgery, can lead to substantial, long-lasting weight loss and improve many obesity-related conditions. It is suitable for people who meet certain medical criteria after careful evaluation.",
    "diagram": null,
    "sections": [
      {
        "heading": "General eligibility criteria",
        "content": "International guidelines updated in 2022 generally recommend considering surgery for adults with: Because people of Asian origin develop obesity-related diseases at lower weights, lower BMI thresholds may apply. Doctors in India often consider surgery at lower BMI levels when serious conditions such as uncontrolled diabetes are present. BMI of 35 or more , with or without related health conditions BMI of 30 to 34.9 with metabolic disease, such as type 2 diabetes that is difficult to control",
        "paragraphs": [
          "International guidelines updated in 2022 generally recommend considering surgery for adults with:",
          "Because people of Asian origin develop obesity-related diseases at lower weights, lower BMI thresholds may apply. Doctors in India often consider surgery at lower BMI levels when serious conditions such as uncontrolled diabetes are present."
        ],
        "bullets": [
          {
            "label": "",
            "text": "BMI of 35 or more , with or without related health conditions"
          },
          {
            "label": "",
            "text": "BMI of 30 to 34.9 with metabolic disease, such as type 2 diabetes that is difficult to control"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Conditions that may improve after surgery",
        "content": "Type 2 diabetes High blood pressure Obstructive sleep apnoea Fatty liver disease High cholesterol Joint pain PCOS and fertility problems Acid reflux (particularly after gastric bypass)",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Type 2 diabetes"
          },
          {
            "label": "",
            "text": "High blood pressure"
          },
          {
            "label": "",
            "text": "Obstructive sleep apnoea"
          },
          {
            "label": "",
            "text": "Fatty liver disease"
          },
          {
            "label": "",
            "text": "High cholesterol"
          },
          {
            "label": "",
            "text": "Joint pain"
          },
          {
            "label": "",
            "text": "PCOS and fertility problems"
          },
          {
            "label": "",
            "text": "Acid reflux (particularly after gastric bypass)"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who is a good candidate?",
        "content": "Previous attempts at weight loss have not given lasting results Willingness to make lifelong changes in eating and activity Commitment to long-term follow-up and vitamin supplements Understanding of the risks and benefits",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Previous attempts at weight loss have not given lasting results"
          },
          {
            "label": "",
            "text": "Willingness to make lifelong changes in eating and activity"
          },
          {
            "label": "",
            "text": "Commitment to long-term follow-up and vitamin supplements"
          },
          {
            "label": "",
            "text": "Understanding of the risks and benefits"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The evaluation process",
        "content": "A multidisciplinary team assesses you before surgery: Bariatric surgeon: reviews history and suitable procedures Physician or endocrinologist: checks diabetes, thyroid and other conditions Dietitian: reviews eating patterns and prepares you for changes Psychologist or counsellor: assesses readiness and eating behaviours Anaesthetist: checks fitness for surgery Tests: blood tests, ultrasound, endoscopy, sleep study and heart and lung evaluation as needed",
        "paragraphs": [
          "A multidisciplinary team assesses you before surgery:"
        ],
        "bullets": [
          {
            "label": "Bariatric surgeon:",
            "text": "reviews history and suitable procedures"
          },
          {
            "label": "Physician or endocrinologist:",
            "text": "checks diabetes, thyroid and other conditions"
          },
          {
            "label": "Dietitian:",
            "text": "reviews eating patterns and prepares you for changes"
          },
          {
            "label": "Psychologist or counsellor:",
            "text": "assesses readiness and eating behaviours"
          },
          {
            "label": "Anaesthetist:",
            "text": "checks fitness for surgery"
          },
          {
            "label": "Tests:",
            "text": "blood tests, ultrasound, endoscopy, sleep study and heart and lung evaluation as needed"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When surgery may not be advised",
        "content": "Uncontrolled psychiatric conditions or active substance misuse Untreated eating disorders Inability to follow long-term care Very high surgical risk from other illnesses Pregnancy or planning pregnancy within the next 12 to 18 months",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Uncontrolled psychiatric conditions or active substance misuse"
          },
          {
            "label": "",
            "text": "Untreated eating disorders"
          },
          {
            "label": "",
            "text": "Inability to follow long-term care"
          },
          {
            "label": "",
            "text": "Very high surgical risk from other illnesses"
          },
          {
            "label": "",
            "text": "Pregnancy or planning pregnancy within the next 12 to 18 months"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Teenagers and older adults",
        "content": "Surgery may be considered for selected adolescents with severe obesity at specialised centres, and for older adults based on overall fitness rather than age alone.",
        "paragraphs": [
          "Surgery may be considered for selected adolescents with severe obesity at specialised centres, and for older adults based on overall fitness rather than age alone."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "If you have tried to lose weight without lasting success and have a high BMI or obesity-related conditions, ask for a bariatric assessment.",
    "faqs": [
      {
        "q": "Is bariatric surgery a cosmetic procedure?",
        "a": "No. It is a medical treatment for obesity and related diseases."
      },
      {
        "q": "Do I need to lose weight before surgery?",
        "a": "Often a modest pre-operative weight loss is advised to make surgery safer."
      },
      {
        "q": "Can it cure diabetes?",
        "a": "Many people see major improvement or remission, but results vary and require follow-up."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Who May Benefit from Bariatric Surgery? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Who May Benefit from Bariatric Surgery? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-068",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "gastric-sleeve-surgery-explained",
    "title": "Gastric Sleeve Surgery Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Gastric sleeve surgery, or sleeve gastrectomy, is the most commonly performed weight loss operation worldwide. It reduces the size of the stomach and changes hunger hormones, helping people eat less and feel full sooner.",
    "diagram": {
      "title": "How sleeve gastrectomy works",
      "steps": [
        {
          "number": "1",
          "title": "Keyhole access",
          "description": "4 to 6 small cuts in the abdomen"
        },
        {
          "number": "2",
          "title": "Stomach reshaped",
          "description": "About 75 to 80 percent removed"
        },
        {
          "number": "3",
          "title": "Tube-shaped stomach",
          "description": "Holds much less food"
        },
        {
          "number": "4",
          "title": "Hormone change",
          "description": "Less of the hunger hormone ghrelin"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "The surgeon removes about 75 to 80 percent of the stomach, leaving a narrow, tube-shaped \"sleeve\" about the size of a banana. The removed part cannot be put back, so the procedure is permanent.",
        "paragraphs": [
          "The surgeon removes about 75 to 80 percent of the stomach, leaving a narrow, tube-shaped \"sleeve\" about the size of a banana. The removed part cannot be put back, so the procedure is permanent."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How does it help weight loss?",
        "content": "Smaller stomach: you feel full with much smaller portions Less hunger: the removed section produces most of the hunger hormone ghrelin Metabolic changes: improve blood sugar control",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Smaller stomach:",
            "text": "you feel full with much smaller portions"
          },
          {
            "label": "Less hunger:",
            "text": "the removed section produces most of the hunger hormone ghrelin"
          },
          {
            "label": "Metabolic changes:",
            "text": "improve blood sugar control"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What happens during surgery?",
        "content": "The operation usually takes 1 to 2 hours . Most patients stay in hospital for 2 to 3 days . 1. General anaesthesia is given. 2. The surgery is done by laparoscopy (keyhole surgery) through 4 to 6 small cuts. 3. A tube is placed in the stomach to guide the sleeve size. 4. A stapling device divides and seals the stomach. 5. The removed portion is taken out through one of the small cuts.",
        "paragraphs": [
          "The operation usually takes 1 to 2 hours . Most patients stay in hospital for 2 to 3 days ."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "General anaesthesia is given."
          },
          {
            "number": 2,
            "text": "The surgery is done by laparoscopy (keyhole surgery) through 4 to 6 small cuts."
          },
          {
            "number": 3,
            "text": "A tube is placed in the stomach to guide the sleeve size."
          },
          {
            "number": 4,
            "text": "A stapling device divides and seals the stomach."
          },
          {
            "number": 5,
            "text": "The removed portion is taken out through one of the small cuts."
          }
        ]
      },
      {
        "heading": "Expected results",
        "content": "Many people lose a substantial proportion of their excess weight over 12 to 18 months Obesity-related conditions such as diabetes, high blood pressure and sleep apnoea often improve Results depend on long-term changes in eating and activity",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Many people lose a substantial proportion of their excess weight over 12 to 18 months"
          },
          {
            "label": "",
            "text": "Obesity-related conditions such as diabetes, high blood pressure and sleep apnoea often improve"
          },
          {
            "label": "",
            "text": "Results depend on long-term changes in eating and activity"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Advantages",
        "content": "Does not reroute the intestine Technically simpler than gastric bypass Fewer long-term vitamin absorption problems than bypass, though supplements are still needed Can be converted to a bypass later if needed",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Does not reroute the intestine"
          },
          {
            "label": "",
            "text": "Technically simpler than gastric bypass"
          },
          {
            "label": "",
            "text": "Fewer long-term vitamin absorption problems than bypass, though supplements are still needed"
          },
          {
            "label": "",
            "text": "Can be converted to a bypass later if needed"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Possible risks",
        "content": "Leak from the staple line (uncommon but serious) Bleeding Blood clots Acid reflux may start or worsen in some people Narrowing of the sleeve Vitamin and mineral deficiencies",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Leak from the staple line (uncommon but serious)"
          },
          {
            "label": "",
            "text": "Bleeding"
          },
          {
            "label": "",
            "text": "Blood clots"
          },
          {
            "label": "",
            "text": "Acid reflux may start or worsen in some people"
          },
          {
            "label": "",
            "text": "Narrowing of the sleeve"
          },
          {
            "label": "",
            "text": "Vitamin and mineral deficiencies"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who may it suit?",
        "content": "Sleeve gastrectomy is suitable for many people who meet bariatric criteria. It may be less ideal for people with severe acid reflux, for whom gastric bypass may be preferred.",
        "paragraphs": [
          "Sleeve gastrectomy is suitable for many people who meet bariatric criteria. It may be less ideal for people with severe acid reflux, for whom gastric bypass may be preferred."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "A bariatric surgeon will help you decide whether the sleeve or another procedure is best for your health and goals.",
    "faqs": [
      {
        "q": "Is the gastric sleeve reversible?",
        "a": "No. Part of the stomach is permanently removed."
      },
      {
        "q": "Will I feel hungry after surgery?",
        "a": "Most people feel significantly less hungry, especially in the first year."
      },
      {
        "q": "Can the stomach stretch back?",
        "a": "It can stretch somewhat over time if large portions are eaten regularly."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Gastric Sleeve Surgery Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Gastric Sleeve Surgery Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-069",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "gastric-bypass-surgery-explained",
    "title": "Gastric Bypass Surgery Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Gastric bypass is a well-established weight loss operation that both reduces stomach size and changes how food passes through the digestive system. It is especially effective for type 2 diabetes and acid reflux.",
    "diagram": {
      "title": "How Roux-en-Y gastric bypass works",
      "steps": [
        {
          "number": "1",
          "title": "Small pouch",
          "description": "Egg-sized stomach pouch created"
        },
        {
          "number": "2",
          "title": "Intestine rerouted",
          "description": "Small bowel connected to the pouch"
        },
        {
          "number": "3",
          "title": "Bypass",
          "description": "Food skips most of the stomach and first part of intestine"
        },
        {
          "number": "4",
          "title": "Effects",
          "description": "Less food, fewer calories absorbed, hormone changes"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is it?",
        "content": "The most common type is the Roux-en-Y gastric bypass : The remaining stomach is not removed; it stays in place and continues to make digestive juices. One-anastomosis (mini) gastric bypass is a variation with a single intestinal connection. 1. A small stomach pouch, about the size of an egg, is created at the top of the stomach. 2. The small intestine is divided and connected to this pouch. 3. Food passes from the pouch directly into the lower part of the small intestine, bypassing most of the stomach and the first part of the intestine.",
        "paragraphs": [
          "The most common type is the Roux-en-Y gastric bypass :",
          "The remaining stomach is not removed; it stays in place and continues to make digestive juices.",
          "One-anastomosis (mini) gastric bypass is a variation with a single intestinal connection."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "A small stomach pouch, about the size of an egg, is created at the top of the stomach."
          },
          {
            "number": 2,
            "text": "The small intestine is divided and connected to this pouch."
          },
          {
            "number": 3,
            "text": "Food passes from the pouch directly into the lower part of the small intestine, bypassing most of the stomach and the first part of the intestine."
          }
        ]
      },
      {
        "heading": "How does it help?",
        "content": "Smaller stomach pouch: smaller meals Less absorption: fewer calories are absorbed Hormone changes: improve fullness and blood sugar control, often quickly after surgery",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Smaller stomach pouch:",
            "text": "smaller meals"
          },
          {
            "label": "Less absorption:",
            "text": "fewer calories are absorbed"
          },
          {
            "label": "Hormone changes:",
            "text": "improve fullness and blood sugar control, often quickly after surgery"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Benefits",
        "content": "Substantial, long-lasting weight loss Strong effect on type 2 diabetes, often reducing or stopping diabetes medicines Improves or resolves acid reflux in many people Improves blood pressure, cholesterol and sleep apnoea",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Substantial, long-lasting weight loss"
          },
          {
            "label": "",
            "text": "Strong effect on type 2 diabetes, often reducing or stopping diabetes medicines"
          },
          {
            "label": "",
            "text": "Improves or resolves acid reflux in many people"
          },
          {
            "label": "",
            "text": "Improves blood pressure, cholesterol and sleep apnoea"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The surgery",
        "content": "Performed by laparoscopy (keyhole surgery) under general anaesthesia Usually takes 2 to 3 hours Hospital stay of 2 to 4 days",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Performed by laparoscopy (keyhole surgery) under general anaesthesia"
          },
          {
            "label": "",
            "text": "Usually takes 2 to 3 hours"
          },
          {
            "label": "",
            "text": "Hospital stay of 2 to 4 days"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Possible risks",
        "content": "Lifelong supplements and regular blood tests are essential. Leaks at the joins (uncommon) Bleeding and blood clots Dumping syndrome: nausea, cramps, sweating or diarrhoea after eating sugary or fatty foods Ulcers at the join, especially with smoking or painkillers such as NSAIDs Internal hernia or bowel obstruction Vitamin and mineral deficiencies: iron, vitamin B12, calcium, vitamin D and others",
        "paragraphs": [
          "Lifelong supplements and regular blood tests are essential."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Leaks at the joins (uncommon)"
          },
          {
            "label": "",
            "text": "Bleeding and blood clots"
          },
          {
            "label": "Dumping syndrome:",
            "text": "nausea, cramps, sweating or diarrhoea after eating sugary or fatty foods"
          },
          {
            "label": "",
            "text": "Ulcers at the join, especially with smoking or painkillers such as NSAIDs"
          },
          {
            "label": "",
            "text": "Internal hernia or bowel obstruction"
          },
          {
            "label": "Vitamin and mineral deficiencies:",
            "text": "iron, vitamin B12, calcium, vitamin D and others"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Sleeve vs bypass",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "Sleeve",
            "Bypass"
          ],
          "rows": [
            [
              "Stomach removed",
              "Yes, mostly",
              "No, bypassed"
            ],
            [
              "Intestine rerouted",
              "No",
              "Yes"
            ],
            [
              "Reflux",
              "May worsen",
              "Often improves"
            ],
            [
              "Diabetes improvement",
              "Good",
              "Often greater"
            ],
            [
              "Deficiency risk",
              "Lower",
              "Higher"
            ]
          ]
        }
      }
    ],
    "whenToConsult": "Ask a bariatric surgeon whether gastric bypass suits you, particularly if you have type 2 diabetes or acid reflux.",
    "faqs": [
      {
        "q": "Is gastric bypass reversible?",
        "a": "It is technically possible in some cases but is complex. It should be considered a permanent operation."
      },
      {
        "q": "What is dumping syndrome?",
        "a": "Unpleasant symptoms after sugary or fatty meals. Diet changes usually prevent it."
      },
      {
        "q": "Will I need vitamins forever?",
        "a": "Yes. Lifelong supplements are essential after gastric bypass."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Gastric Bypass Surgery Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Gastric Bypass Surgery Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-070",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "bariatric-surgery-versus-lifestyle-management",
    "title": "Bariatric Surgery Versus Lifestyle Management",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Choosing how to treat obesity is a personal and medical decision. Lifestyle changes, medicines and surgery all have a place. Understanding what each offers helps you have an informed conversation with your doctor.",
    "diagram": null,
    "sections": [
      {
        "heading": "Lifestyle management",
        "content": "This includes diet changes, physical activity, better sleep and behaviour change. Benefits: Limitations: No surgical risk Improves health even with modest weight loss Builds the habits needed for every treatment For people with severe obesity, diet and exercise alone often lead to modest weight loss The body adapts by increasing hunger and slowing metabolism, making weight regain common",
        "paragraphs": [
          "This includes diet changes, physical activity, better sleep and behaviour change.",
          "Benefits:",
          "Limitations:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "No surgical risk"
          },
          {
            "label": "",
            "text": "Improves health even with modest weight loss"
          },
          {
            "label": "",
            "text": "Builds the habits needed for every treatment"
          },
          {
            "label": "",
            "text": "For people with severe obesity, diet and exercise alone often lead to modest weight loss"
          },
          {
            "label": "",
            "text": "The body adapts by increasing hunger and slowing metabolism, making weight regain common"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Weight-loss medicines",
        "content": "Newer medicines can help many people lose a meaningful amount of weight. They are prescribed and monitored by doctors, and are usually needed long term because weight often returns when they are stopped. Availability, side effects and suitability vary.",
        "paragraphs": [
          "Newer medicines can help many people lose a meaningful amount of weight. They are prescribed and monitored by doctors, and are usually needed long term because weight often returns when they are stopped. Availability, side effects and suitability vary."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Bariatric surgery",
        "content": "Benefits: Limitations: The most effective long-term treatment for severe obesity Substantial and sustained weight loss for most patients Significant improvement in diabetes, blood pressure and sleep apnoea Studies show improved long-term health outcomes in suitable patients Surgical risks Permanent changes to the digestive system Lifelong supplements and follow-up Weight regain is possible without lasting lifestyle change",
        "paragraphs": [
          "Benefits:",
          "Limitations:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "The most effective long-term treatment for severe obesity"
          },
          {
            "label": "",
            "text": "Substantial and sustained weight loss for most patients"
          },
          {
            "label": "",
            "text": "Significant improvement in diabetes, blood pressure and sleep apnoea"
          },
          {
            "label": "",
            "text": "Studies show improved long-term health outcomes in suitable patients"
          },
          {
            "label": "",
            "text": "Surgical risks"
          },
          {
            "label": "",
            "text": "Permanent changes to the digestive system"
          },
          {
            "label": "",
            "text": "Lifelong supplements and follow-up"
          },
          {
            "label": "",
            "text": "Weight regain is possible without lasting lifestyle change"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Comparison",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "Lifestyle",
            "Medicines",
            "Surgery"
          ],
          "rows": [
            [
              "Typical weight loss",
              "Modest",
              "Moderate to substantial",
              "Substantial"
            ],
            [
              "Durability",
              "Often regained",
              "Usually requires continued use",
              "Generally long lasting"
            ],
            [
              "Invasiveness",
              "None",
              "Non-surgical",
              "Surgical"
            ],
            [
              "Effect on diabetes",
              "Helpful",
              "Helpful",
              "Often major improvement"
            ],
            [
              "Lifelong commitment",
              "Yes",
              "Yes",
              "Yes"
            ]
          ]
        }
      },
      {
        "heading": "It is not either-or",
        "content": "Surgery and medicines work best alongside healthy eating, activity, good sleep and emotional support. Every successful approach needs lifestyle change.",
        "paragraphs": [
          "Surgery and medicines work best alongside healthy eating, activity, good sleep and emotional support. Every successful approach needs lifestyle change."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How doctors decide",
        "content": "BMI and waist circumference Obesity-related conditions Previous weight-loss attempts Your preferences and readiness Surgical risk and general health",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "BMI and waist circumference"
          },
          {
            "label": "",
            "text": "Obesity-related conditions"
          },
          {
            "label": "",
            "text": "Previous weight-loss attempts"
          },
          {
            "label": "",
            "text": "Your preferences and readiness"
          },
          {
            "label": "",
            "text": "Surgical risk and general health"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "If your BMI is high or you have obesity-related conditions, a doctor or bariatric team can discuss all options with you, not only surgery.",
    "faqs": [
      {
        "q": "Is surgery \"the easy way out\"?",
        "a": "No. Surgery is a tool that still requires significant, lifelong effort."
      },
      {
        "q": "Can I try medicines before surgery?",
        "a": "Often yes. Your doctor will advise based on your situation."
      },
      {
        "q": "Will I regain weight after surgery?",
        "a": "Some regain is common, but most people maintain significant weight loss with good habits."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Bariatric Surgery Versus Lifestyle Management (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Bariatric Surgery Versus Lifestyle Management adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-071",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "preparing-for-weight-loss-surgery",
    "title": "Preparing for Weight Loss Surgery",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Good preparation makes bariatric surgery safer and helps you adapt more easily afterwards. Preparation usually begins several weeks before your operation.",
    "diagram": {
      "title": "Getting ready for surgery",
      "steps": [
        {
          "number": "1",
          "title": "Evaluation",
          "description": "Tests and team assessments"
        },
        {
          "number": "2",
          "title": "Habit change",
          "description": "Practise eating slowly; stop smoking"
        },
        {
          "number": "3",
          "title": "Pre-op diet",
          "description": "Low-calorie, often liquid diet"
        },
        {
          "number": "4",
          "title": "Surgery day",
          "description": "Fasting; admission; operation"
        }
      ]
    },
    "sections": [
      {
        "heading": "Medical preparation",
        "content": "Your team may arrange: Good control of diabetes and blood pressure before surgery reduces risk. Blood tests, including blood sugar, thyroid and vitamin levels ECG, chest X-ray and sometimes heart tests Upper GI endoscopy to check the stomach Abdominal ultrasound to check the liver and gallbladder Sleep study if sleep apnoea is suspected Review of all medicines",
        "paragraphs": [
          "Your team may arrange:",
          "Good control of diabetes and blood pressure before surgery reduces risk."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Blood tests, including blood sugar, thyroid and vitamin levels"
          },
          {
            "label": "",
            "text": "ECG, chest X-ray and sometimes heart tests"
          },
          {
            "label": "",
            "text": "Upper GI endoscopy to check the stomach"
          },
          {
            "label": "",
            "text": "Abdominal ultrasound to check the liver and gallbladder"
          },
          {
            "label": "",
            "text": "Sleep study if sleep apnoea is suspected"
          },
          {
            "label": "",
            "text": "Review of all medicines"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Stop smoking",
        "content": "Stop all forms of tobacco at least 4 to 6 weeks before surgery. Smoking increases the risk of leaks, ulcers, blood clots and poor healing.",
        "paragraphs": [
          "Stop all forms of tobacco at least 4 to 6 weeks before surgery. Smoking increases the risk of leaks, ulcers, blood clots and poor healing."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "The pre-operative diet",
        "content": "Most patients follow a special low-calorie, high-protein diet, often liquid-based, for 1 to 3 weeks before surgery. This shrinks the liver, which sits over the stomach, making keyhole surgery safer. Follow your dietitian's plan carefully.",
        "paragraphs": [
          "Most patients follow a special low-calorie, high-protein diet, often liquid-based, for 1 to 3 weeks before surgery.",
          "This shrinks the liver, which sits over the stomach, making keyhole surgery safer.",
          "Follow your dietitian's plan carefully."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Practise new habits early",
        "content": "Eat slowly and chew thoroughly Use smaller plates Stop drinking with meals; drink between meals instead Reduce sugary drinks, fried foods and sweets Start daily walking",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Eat slowly and chew thoroughly"
          },
          {
            "label": "",
            "text": "Use smaller plates"
          },
          {
            "label": "",
            "text": "Stop drinking with meals; drink between meals instead"
          },
          {
            "label": "",
            "text": "Reduce sugary drinks, fried foods and sweets"
          },
          {
            "label": "",
            "text": "Start daily walking"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Mental and emotional preparation",
        "content": "Understand that surgery changes your relationship with food Discuss emotional eating with a counsellor if needed Involve your family so they can support you Join a support group if available",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Understand that surgery changes your relationship with food"
          },
          {
            "label": "",
            "text": "Discuss emotional eating with a counsellor if needed"
          },
          {
            "label": "",
            "text": "Involve your family so they can support you"
          },
          {
            "label": "",
            "text": "Join a support group if available"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Practical preparation",
        "content": "Arrange time off work, usually 1 to 3 weeks Stock up on approved liquids, protein shakes and supplements Arrange support at home for the first week For international patients, plan to stay near the hospital for the time your team advises before flying",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Arrange time off work, usually 1 to 3 weeks"
          },
          {
            "label": "",
            "text": "Stock up on approved liquids, protein shakes and supplements"
          },
          {
            "label": "",
            "text": "Arrange support at home for the first week"
          },
          {
            "label": "",
            "text": "For international patients, plan to stay near the hospital for the time your team advises before flying"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What to pack for hospital",
        "content": "Loose, comfortable clothes Slip-on footwear Your medicines and medical reports A CPAP machine, if you use one for sleep apnoea Personal care items",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Loose, comfortable clothes"
          },
          {
            "label": "",
            "text": "Slip-on footwear"
          },
          {
            "label": "",
            "text": "Your medicines and medical reports"
          },
          {
            "label": "",
            "text": "A CPAP machine, if you use one for sleep apnoea"
          },
          {
            "label": "",
            "text": "Personal care items"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The day before and the day of surgery",
        "content": "Follow fasting instructions exactly Shower as advised Remove jewellery and nail polish",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Follow fasting instructions exactly"
          },
          {
            "label": "",
            "text": "Shower as advised"
          },
          {
            "label": "",
            "text": "Remove jewellery and nail polish"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Contact your team if you become unwell, develop a cough or fever, or find it hard to follow the pre-operative diet before surgery.",
    "faqs": [
      {
        "q": "Why do I need to lose weight before surgery?",
        "a": "A smaller liver and lower weight make surgery safer and easier."
      },
      {
        "q": "Can I take my usual medicines?",
        "a": "Some may need adjustment. Your team will tell you which to continue or stop."
      },
      {
        "q": "How long will I be off work?",
        "a": "Often 1 to 3 weeks, depending on your job and recovery."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Preparing for Weight Loss Surgery (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Preparing for Weight Loss Surgery adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-072",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "recovery-after-bariatric-surgery",
    "title": "Recovery After Bariatric Surgery",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Most people recover quickly after keyhole bariatric surgery. The first few weeks focus on healing, hydration and gradually adjusting to your new way of eating. This article covers physical recovery; see our separate guide on diet stages.",
    "diagram": {
      "title": "Recovery milestones",
      "steps": [
        {
          "number": "1",
          "title": "Day 0 to 1",
          "description": "Walking begins; sips of fluid"
        },
        {
          "number": "2",
          "title": "Days 2 to 4",
          "description": "Discharge home"
        },
        {
          "number": "3",
          "title": "Weeks 1 to 3",
          "description": "Return to light activity and desk work"
        },
        {
          "number": "4",
          "title": "Weeks 4 to 6",
          "description": "Most normal activities; exercise builds"
        }
      ]
    },
    "sections": [
      {
        "heading": "In hospital",
        "content": "Walking begins within hours or the next day, which helps prevent blood clots and chest infections Breathing exercises keep your lungs clear Sips of water usually begin within the first day after checks Pain is usually moderate and managed with medicines Blood clot prevention: injections, stockings or foot pumps Most people go home in 2 to 4 days",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Walking begins within hours or the next day, which helps prevent blood clots and chest infections"
          },
          {
            "label": "",
            "text": "Breathing exercises keep your lungs clear"
          },
          {
            "label": "",
            "text": "Sips of water usually begin within the first day after checks"
          },
          {
            "label": "",
            "text": "Pain is usually moderate and managed with medicines"
          },
          {
            "label": "Blood clot prevention:",
            "text": "injections, stockings or foot pumps"
          },
          {
            "label": "",
            "text": "Most people go home in 2 to 4 days"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The first weeks at home",
        "content": "Hydration is the top priority. Take small sips throughout the day, aiming for the fluid goal your team sets, often about 1.5 to 2 litres. Dehydration is a common reason for readmission. Other key points: Walk several times a day and increase gradually Take prescribed medicines, including acid-reducing tablets and supplements Avoid heavy lifting for about 4 weeks Keep wounds clean and dry Expect tiredness, which improves over a few weeks",
        "paragraphs": [
          "Hydration is the top priority. Take small sips throughout the day, aiming for the fluid goal your team sets, often about 1.5 to 2 litres. Dehydration is a common reason for readmission.",
          "Other key points:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Walk several times a day and increase gradually"
          },
          {
            "label": "",
            "text": "Take prescribed medicines, including acid-reducing tablets and supplements"
          },
          {
            "label": "",
            "text": "Avoid heavy lifting for about 4 weeks"
          },
          {
            "label": "",
            "text": "Keep wounds clean and dry"
          },
          {
            "label": "",
            "text": "Expect tiredness, which improves over a few weeks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What is normal?",
        "content": "Mild pain at wound sites and in the shoulders (from gas used during surgery) Feeling full quickly Low energy Mood swings as hormones and eating patterns change",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Mild pain at wound sites and in the shoulders (from gas used during surgery)"
          },
          {
            "label": "",
            "text": "Feeling full quickly"
          },
          {
            "label": "",
            "text": "Low energy"
          },
          {
            "label": "",
            "text": "Mood swings as hormones and eating patterns change"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Returning to normal life",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Activity",
            "Typical timing"
          ],
          "rows": [
            [
              "Desk work",
              "1 to 3 weeks"
            ],
            [
              "Driving",
              "When you can move comfortably and are off strong painkillers"
            ],
            [
              "Light exercise",
              "Walking from day one"
            ],
            [
              "More intense exercise",
              "Usually from about 4 to 6 weeks"
            ],
            [
              "Air travel",
              "As advised by your surgeon, with walking and hydration on the flight"
            ]
          ]
        }
      },
      {
        "heading": "Follow-up visits",
        "content": "Expect regular visits in the first year, typically at about 2 weeks, 1, 3, 6 and 12 months, then yearly. These monitor weight, nutrition, medicines and blood tests.",
        "paragraphs": [
          "Expect regular visits in the first year, typically at about 2 weeks, 1, 3, 6 and 12 months, then yearly. These monitor weight, nutrition, medicines and blood tests."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Warning signs: seek urgent care",
        "content": "A fast heart rate can be an early sign of a leak and should not be ignored. Fever, fast heartbeat or breathlessness Severe or increasing abdominal pain Persistent vomiting or inability to keep fluids down Pain or swelling in the calf Chest pain Vomiting blood or black stools",
        "paragraphs": [
          "A fast heart rate can be an early sign of a leak and should not be ignored."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Fever, fast heartbeat or breathlessness"
          },
          {
            "label": "",
            "text": "Severe or increasing abdominal pain"
          },
          {
            "label": "",
            "text": "Persistent vomiting or inability to keep fluids down"
          },
          {
            "label": "",
            "text": "Pain or swelling in the calf"
          },
          {
            "label": "",
            "text": "Chest pain"
          },
          {
            "label": "",
            "text": "Vomiting blood or black stools"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "How painful is recovery?",
        "a": "Most people find pain manageable with medicines and improving within days."
      },
      {
        "q": "Why is hydration so important?",
        "a": "Your small stomach makes it easy to fall behind on fluids, leading to dehydration."
      },
      {
        "q": "When can I start exercising?",
        "a": "Walking starts immediately; more vigorous exercise usually after a few weeks."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Recovery After Bariatric Surgery (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Recovery After Bariatric Surgery adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-073",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "diet-after-bariatric-surgery",
    "title": "Diet After Bariatric Surgery",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Your diet after bariatric surgery changes in stages to protect your stomach while it heals. Over time, you move towards a balanced, protein-rich diet in much smaller portions. Always follow your own team's timeline, as plans vary.",
    "diagram": {
      "title": "Diet stages after surgery",
      "steps": [
        {
          "number": "1",
          "title": "Stage 1: Clear liquids",
          "description": "First few days"
        },
        {
          "number": "2",
          "title": "Stage 2: Full liquids",
          "description": "About weeks 1 to 2"
        },
        {
          "number": "3",
          "title": "Stage 3: Purée",
          "description": "About weeks 3 to 4 Stage 4: Soft foods About weeks 5 to 6"
        },
        {
          "number": "4",
          "title": "5",
          "description": "Stage 5: Regular healthy diet From about week 6 to 8"
        }
      ]
    },
    "sections": [
      {
        "heading": "The diet stages",
        "content": "Stage 1: Clear liquids (first few days) Water, clear soups, diluted juices without sugar, coconut water in moderation. Stage 2: Full liquids (roughly weeks 1 to 2) Thin dal water, buttermilk, low-fat milk, protein shakes, thin soups. Stage 3: Purée (roughly weeks 3 to 4) Blended dal, mashed vegetables, smooth curd, puréed paneer or eggs. Stage 4: Soft foods (roughly weeks 5 to 6) Soft-cooked vegetables, scrambled eggs, soft paneer, well-cooked fish, soft khichdi in small amounts. Stage 5: Regular healthy diet (from about week 6 to 8) Balanced meals with protein, vegetables and controlled carbohydrates.",
        "paragraphs": [
          "Stage 1: Clear liquids (first few days) Water, clear soups, diluted juices without sugar, coconut water in moderation.",
          "Stage 2: Full liquids (roughly weeks 1 to 2) Thin dal water, buttermilk, low-fat milk, protein shakes, thin soups.",
          "Stage 3: Purée (roughly weeks 3 to 4) Blended dal, mashed vegetables, smooth curd, puréed paneer or eggs.",
          "Stage 4: Soft foods (roughly weeks 5 to 6) Soft-cooked vegetables, scrambled eggs, soft paneer, well-cooked fish, soft khichdi in small amounts.",
          "Stage 5: Regular healthy diet (from about week 6 to 8) Balanced meals with protein, vegetables and controlled carbohydrates."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Protein comes first",
        "content": "Protein helps healing and protects muscle during weight loss. Many programmes recommend around 60 to 80 grams a day , or as advised by your dietitian. Good protein sources: Eat protein first at each meal. Eggs, chicken, fish Paneer, curd, milk Dal, sprouts, soya and tofu Protein supplements when needed",
        "paragraphs": [
          "Protein helps healing and protects muscle during weight loss. Many programmes recommend around 60 to 80 grams a day , or as advised by your dietitian.",
          "Good protein sources:",
          "Eat protein first at each meal."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Eggs, chicken, fish"
          },
          {
            "label": "",
            "text": "Paneer, curd, milk"
          },
          {
            "label": "",
            "text": "Dal, sprouts, soya and tofu"
          },
          {
            "label": "",
            "text": "Protein supplements when needed"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Golden eating rules",
        "content": "Eat slowly; take 20 to 30 minutes for each meal Chew each bite thoroughly Stop as soon as you feel full Do not drink with meals; wait about 30 minutes before and after eating Have 3 small meals and 1 to 2 small snacks Sip water throughout the day",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Eat slowly; take 20 to 30 minutes for each meal"
          },
          {
            "label": "",
            "text": "Chew each bite thoroughly"
          },
          {
            "label": "",
            "text": "Stop as soon as you feel full"
          },
          {
            "label": "",
            "text": "Do not drink with meals; wait about 30 minutes before and after eating"
          },
          {
            "label": "",
            "text": "Have 3 small meals and 1 to 2 small snacks"
          },
          {
            "label": "",
            "text": "Sip water throughout the day"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Foods to avoid or limit",
        "content": "Sugary drinks, sweets and desserts Carbonated drinks Fried and very fatty foods Alcohol, which is absorbed faster after surgery Doughy breads and dry meats early on, which may get stuck",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Sugary drinks, sweets and desserts"
          },
          {
            "label": "",
            "text": "Carbonated drinks"
          },
          {
            "label": "",
            "text": "Fried and very fatty foods"
          },
          {
            "label": "",
            "text": "Alcohol, which is absorbed faster after surgery"
          },
          {
            "label": "",
            "text": "Doughy breads and dry meats early on, which may get stuck"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Lifelong supplements",
        "content": "Most patients need lifelong: Your team will check blood levels regularly. A multivitamin with minerals Vitamin B12 Calcium and vitamin D Iron, especially for women",
        "paragraphs": [
          "Most patients need lifelong:",
          "Your team will check blood levels regularly."
        ],
        "bullets": [
          {
            "label": "",
            "text": "A multivitamin with minerals"
          },
          {
            "label": "",
            "text": "Vitamin B12"
          },
          {
            "label": "",
            "text": "Calcium and vitamin D"
          },
          {
            "label": "",
            "text": "Iron, especially for women"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common problems",
        "content": "Food intolerance: reintroduce foods slowly Vomiting: often from eating too fast or too much Constipation: increase fluids and fibre gradually",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Food intolerance:",
            "text": "reintroduce foods slowly"
          },
          {
            "label": "Vomiting:",
            "text": "often from eating too fast or too much"
          },
          {
            "label": "Constipation:",
            "text": "increase fluids and fibre gradually"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "Contact your dietitian or surgeon if you cannot meet your fluid or protein goals, vomit frequently, or have difficulty swallowing.",
    "faqs": [
      {
        "q": "Can I eat Indian food after surgery?",
        "a": "Yes, with healthy cooking methods, small portions and protein first."
      },
      {
        "q": "Why can't I drink with meals?",
        "a": "It fills the small stomach and can push food through too quickly."
      },
      {
        "q": "Do I need protein shakes forever?",
        "a": "Usually only until you can meet protein needs from food."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Diet After Bariatric Surgery (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Diet After Bariatric Surgery adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-074",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "possible-complications-and-precautions-after-bariatric-surgery",
    "title": "Possible Complications and Precautions After Bariatric Surgery",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Bariatric surgery is considered safe when performed at experienced centres, with a risk profile similar to other common abdominal operations. Like all surgery, it has possible complications. Knowing them helps you recognise problems early and reduce your risk.",
    "diagram": null,
    "sections": [
      {
        "heading": "Early complications (first few weeks)",
        "content": "Leak: fluid leaking from a staple line or join. It is uncommon but serious. Warning signs include fever, fast heartbeat, worsening abdominal pain and breathlessness. Bleeding Blood clots in the legs or lungs Infection at wound sites or inside the abdomen Dehydration: from not drinking enough Nausea and vomiting",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Leak:",
            "text": "fluid leaking from a staple line or join. It is uncommon but serious. Warning signs include fever, fast heartbeat, worsening abdominal pain and breathlessness."
          },
          {
            "label": "",
            "text": "Bleeding"
          },
          {
            "label": "",
            "text": "Blood clots in the legs or lungs"
          },
          {
            "label": "",
            "text": "Infection at wound sites or inside the abdomen"
          },
          {
            "label": "Dehydration:",
            "text": "from not drinking enough"
          },
          {
            "label": "",
            "text": "Nausea and vomiting"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Longer-term complications",
        "content": "Nutritional deficiencies: iron, vitamin B12, folate, calcium, vitamin D and others, which can cause anaemia, bone weakness or nerve problems Acid reflux, particularly after sleeve gastrectomy Gallstones, due to rapid weight loss Narrowing (stricture) at the sleeve or join, causing difficulty swallowing Ulcers, especially after bypass, more likely with smoking or anti-inflammatory painkillers Dumping syndrome after bypass Internal hernia after bypass, causing intermittent or severe abdominal pain Excess skin after major weight loss Weight regain Alcohol sensitivity, with a higher risk of alcohol problems",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Nutritional deficiencies:",
            "text": "iron, vitamin B12, folate, calcium, vitamin D and others, which can cause anaemia, bone weakness or nerve problems"
          },
          {
            "label": "",
            "text": "Acid reflux, particularly after sleeve gastrectomy"
          },
          {
            "label": "",
            "text": "Gallstones, due to rapid weight loss"
          },
          {
            "label": "",
            "text": "Narrowing (stricture) at the sleeve or join, causing difficulty swallowing"
          },
          {
            "label": "",
            "text": "Ulcers, especially after bypass, more likely with smoking or anti-inflammatory painkillers"
          },
          {
            "label": "",
            "text": "Dumping syndrome after bypass"
          },
          {
            "label": "",
            "text": "Internal hernia after bypass, causing intermittent or severe abdominal pain"
          },
          {
            "label": "",
            "text": "Excess skin after major weight loss"
          },
          {
            "label": "",
            "text": "Weight regain"
          },
          {
            "label": "",
            "text": "Alcohol sensitivity, with a higher risk of alcohol problems"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How to reduce your risk",
        "content": "Choose an experienced bariatric team at a well-equipped hospital Stop smoking before and after surgery Walk early and often after surgery Follow the diet stages carefully Stay well hydrated Take lifelong supplements as prescribed Avoid NSAID painkillers unless your surgeon approves Attend all follow-up appointments and blood tests",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Choose an experienced bariatric team at a well-equipped hospital"
          },
          {
            "label": "",
            "text": "Stop smoking before and after surgery"
          },
          {
            "label": "",
            "text": "Walk early and often after surgery"
          },
          {
            "label": "",
            "text": "Follow the diet stages carefully"
          },
          {
            "label": "",
            "text": "Stay well hydrated"
          },
          {
            "label": "",
            "text": "Take lifelong supplements as prescribed"
          },
          {
            "label": "",
            "text": "Avoid NSAID painkillers unless your surgeon approves"
          },
          {
            "label": "",
            "text": "Attend all follow-up appointments and blood tests"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Pregnancy after surgery",
        "content": "Avoid pregnancy for 12 to 18 months after surgery, while weight is changing rapidly. Use reliable contraception and plan pregnancy with your bariatric team.",
        "paragraphs": [
          "Avoid pregnancy for 12 to 18 months after surgery, while weight is changing rapidly. Use reliable contraception and plan pregnancy with your bariatric team."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Warning signs: seek urgent care",
        "content": "Fever, fast heart rate or breathlessness Severe or persistent abdominal pain Persistent vomiting or inability to drink Black stools or vomiting blood Calf pain or swelling Difficulty swallowing that is getting worse",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Fever, fast heart rate or breathlessness"
          },
          {
            "label": "",
            "text": "Severe or persistent abdominal pain"
          },
          {
            "label": "",
            "text": "Persistent vomiting or inability to drink"
          },
          {
            "label": "",
            "text": "Black stools or vomiting blood"
          },
          {
            "label": "",
            "text": "Calf pain or swelling"
          },
          {
            "label": "",
            "text": "Difficulty swallowing that is getting worse"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Mental health",
        "content": "Big changes in body and eating can affect mood. Depression, anxiety or difficulties adjusting should be discussed with your team.",
        "paragraphs": [
          "Big changes in body and eating can affect mood. Depression, anxiety or difficulties adjusting should be discussed with your team."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "How common are serious complications?",
        "a": "Serious complications are uncommon at experienced centres, but no surgery is risk-free."
      },
      {
        "q": "Why do I need blood tests every year?",
        "a": "To detect and correct nutritional deficiencies early."
      },
      {
        "q": "Can excess skin be treated?",
        "a": "Body contouring surgery may be considered once weight has been stable for some time."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Possible Complications and Precautions After Bariatric Surgery (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Possible Complications and Precautions After Bariatric Surgery adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-075",
    "specialtySlug": "weight-loss-surgery",
    "specialtyTitle": "Weight Loss Surgery",
    "slug": "long-term-lifestyle-changes-after-bariatric-surgery",
    "title": "Long-Term Lifestyle Changes After Bariatric Surgery",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Bariatric surgery is a powerful tool, but long-term success depends on the habits you build. The first 12 to 18 months bring the most weight loss. What you do in the years after decides whether that weight stays off.",
    "diagram": null,
    "sections": [
      {
        "heading": "Eating habits for life",
        "content": "Eat 3 small meals and planned snacks Protein first, then vegetables, then carbohydrates Eat slowly and stop when full Keep drinks separate from meals Limit sugar, fried foods and sweetened drinks Avoid \"grazing\" (snacking continuously through the day) Plan meals ahead, especially when travelling or eating out",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Eat 3 small meals and planned snacks"
          },
          {
            "label": "",
            "text": "Protein first, then vegetables, then carbohydrates"
          },
          {
            "label": "",
            "text": "Eat slowly and stop when full"
          },
          {
            "label": "",
            "text": "Keep drinks separate from meals"
          },
          {
            "label": "",
            "text": "Limit sugar, fried foods and sweetened drinks"
          },
          {
            "label": "",
            "text": "Avoid \"grazing\" (snacking continuously through the day)"
          },
          {
            "label": "",
            "text": "Plan meals ahead, especially when travelling or eating out"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Physical activity",
        "content": "Regular activity helps maintain weight loss and protect muscle: Aim for at least 150 minutes of moderate activity a week, such as brisk walking Add strength exercises 2 to 3 times a week Build up gradually and choose activities you enjoy",
        "paragraphs": [
          "Regular activity helps maintain weight loss and protect muscle:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Aim for at least 150 minutes of moderate activity a week, such as brisk walking"
          },
          {
            "label": "",
            "text": "Add strength exercises 2 to 3 times a week"
          },
          {
            "label": "",
            "text": "Build up gradually and choose activities you enjoy"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Supplements and check-ups",
        "content": "Take vitamins and minerals every day, for life Have blood tests as advised, usually once or twice a year Attend follow-up visits with your bariatric team",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Take vitamins and minerals every day, for life"
          },
          {
            "label": "",
            "text": "Have blood tests as advised, usually once or twice a year"
          },
          {
            "label": "",
            "text": "Attend follow-up visits with your bariatric team"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Watching for weight regain",
        "content": "Some regain after the lowest weight is common. Warning signs include: If you notice regain, contact your team early. Dietitian support, behaviour therapy, medicines and sometimes revision surgery are options. Slowly increasing portion sizes Frequent snacking Return of sugary drinks Reduced activity",
        "paragraphs": [
          "Some regain after the lowest weight is common. Warning signs include:",
          "If you notice regain, contact your team early. Dietitian support, behaviour therapy, medicines and sometimes revision surgery are options."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Slowly increasing portion sizes"
          },
          {
            "label": "",
            "text": "Frequent snacking"
          },
          {
            "label": "",
            "text": "Return of sugary drinks"
          },
          {
            "label": "",
            "text": "Reduced activity"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Emotional health",
        "content": "Your relationship with food changes, which can be challenging Emotional eating may return in stressful times Body image may take time to adjust to rapid change Seek counselling or support groups if you are struggling",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Your relationship with food changes, which can be challenging"
          },
          {
            "label": "",
            "text": "Emotional eating may return in stressful times"
          },
          {
            "label": "",
            "text": "Body image may take time to adjust to rapid change"
          },
          {
            "label": "",
            "text": "Seek counselling or support groups if you are struggling"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Social life",
        "content": "Order smaller portions or share dishes at restaurants Explain your needs to family so meals can be planned together Be cautious with alcohol, which affects you faster after surgery",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Order smaller portions or share dishes at restaurants"
          },
          {
            "label": "",
            "text": "Explain your needs to family so meals can be planned together"
          },
          {
            "label": "",
            "text": "Be cautious with alcohol, which affects you faster after surgery"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Health improvements to track",
        "content": "Many people see: Medicines should only be adjusted by your doctor. Better blood sugar and fewer diabetes medicines Lower blood pressure Improved sleep and less snoring Easier movement and less joint pain Improved fertility",
        "paragraphs": [
          "Many people see:",
          "Medicines should only be adjusted by your doctor."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Better blood sugar and fewer diabetes medicines"
          },
          {
            "label": "",
            "text": "Lower blood pressure"
          },
          {
            "label": "",
            "text": "Improved sleep and less snoring"
          },
          {
            "label": "",
            "text": "Easier movement and less joint pain"
          },
          {
            "label": "",
            "text": "Improved fertility"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Pregnancy and family planning",
        "content": "Pregnancy is generally advised after weight has stabilised, usually 12 to 18 months after surgery, with close monitoring of nutrition.",
        "paragraphs": [
          "Pregnancy is generally advised after weight has stabilised, usually 12 to 18 months after surgery, with close monitoring of nutrition."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Contact your team if you notice weight regain, ongoing digestive problems, low mood or symptoms of deficiency such as fatigue, hair loss or tingling.",
    "faqs": [
      {
        "q": "Is follow-up really needed if I feel well?",
        "a": "Yes. Deficiencies can develop silently."
      },
      {
        "q": "Will I always eat small portions?",
        "a": "Portions remain smaller than before, though capacity increases somewhat after the first year."
      },
      {
        "q": "Can I have revision surgery if I regain weight?",
        "a": "In selected cases. Your team will first look at diet, activity and medical options."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Long-Term Lifestyle Changes After Bariatric Surgery (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Long-Term Lifestyle Changes After Bariatric Surgery adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-076",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "understanding-infertility",
    "title": "Understanding Infertility",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Infertility is more common than many people realise, affecting about 1 in 6 people worldwide at some point. It is a medical condition, not anyone's fault, and in many cases it can be treated.",
    "diagram": null,
    "sections": [
      {
        "heading": "What is infertility?",
        "content": "Infertility is usually defined as not becoming pregnant after 12 months of regular unprotected intercourse. For women aged 35 or older , evaluation is advised after 6 months .",
        "paragraphs": [
          "Infertility is usually defined as not becoming pregnant after 12 months of regular unprotected intercourse. For women aged 35 or older , evaluation is advised after 6 months ."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How common are the causes?",
        "content": "Infertility can involve the woman, the man, both partners or, sometimes, no cause is found. Roughly a third of cases relate to female factors, a third to male factors, and the rest to both partners or unexplained causes.",
        "paragraphs": [
          "Infertility can involve the woman, the man, both partners or, sometimes, no cause is found. Roughly a third of cases relate to female factors, a third to male factors, and the rest to both partners or unexplained causes."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Common causes in women",
        "content": "Ovulation problems: PCOS, thyroid disorders, high prolactin, being very underweight or overweight Blocked or damaged fallopian tubes: from infection, previous surgery or tuberculosis, which remains an important cause in India and Africa Endometriosis: tissue similar to the womb lining growing outside the uterus Uterine problems: fibroids, polyps, scarring Reduced egg reserve: egg numbers and quality decline with age, especially after 35",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Ovulation problems:",
            "text": "PCOS, thyroid disorders, high prolactin, being very underweight or overweight"
          },
          {
            "label": "Blocked or damaged fallopian tubes:",
            "text": "from infection, previous surgery or tuberculosis, which remains an important cause in India and Africa"
          },
          {
            "label": "Endometriosis:",
            "text": "tissue similar to the womb lining growing outside the uterus"
          },
          {
            "label": "Uterine problems:",
            "text": "fibroids, polyps, scarring"
          },
          {
            "label": "Reduced egg reserve:",
            "text": "egg numbers and quality decline with age, especially after 35"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common causes in men",
        "content": "Low sperm count or poor sperm movement or shape Varicocele (enlarged veins in the scrotum) Hormonal problems Blockages in the sperm ducts Infections, smoking, alcohol, heat exposure and certain medicines",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Low sperm count or poor sperm movement or shape"
          },
          {
            "label": "",
            "text": "Varicocele (enlarged veins in the scrotum)"
          },
          {
            "label": "",
            "text": "Hormonal problems"
          },
          {
            "label": "",
            "text": "Blockages in the sperm ducts"
          },
          {
            "label": "",
            "text": "Infections, smoking, alcohol, heat exposure and certain medicines"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Tests for women",
        "content": "Hormone blood tests, including AMH (an indicator of egg reserve) Pelvic ultrasound to check the uterus, ovaries and egg follicles HSG or saline scan to check whether the tubes are open Laparoscopy or hysteroscopy in some cases",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Hormone blood tests, including AMH (an indicator of egg reserve)"
          },
          {
            "label": "",
            "text": "Pelvic ultrasound to check the uterus, ovaries and egg follicles"
          },
          {
            "label": "",
            "text": "HSG or saline scan to check whether the tubes are open"
          },
          {
            "label": "",
            "text": "Laparoscopy or hysteroscopy in some cases"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Tests for men",
        "content": "Both partners should be evaluated together from the start. Semen analysis: the key test, checking count, movement and shape Hormone tests and scrotal ultrasound if needed",
        "paragraphs": [
          "Both partners should be evaluated together from the start."
        ],
        "bullets": [
          {
            "label": "Semen analysis:",
            "text": "the key test, checking count, movement and shape"
          },
          {
            "label": "",
            "text": "Hormone tests and scrotal ultrasound if needed"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Lifestyle changes and treating underlying conditions Ovulation-inducing medicines Surgery for fibroids, polyps, endometriosis or varicocele IUI (intrauterine insemination) IVF and ICSI",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Lifestyle changes and treating underlying conditions"
          },
          {
            "label": "",
            "text": "Ovulation-inducing medicines"
          },
          {
            "label": "",
            "text": "Surgery for fibroids, polyps, endometriosis or varicocele"
          },
          {
            "label": "",
            "text": "IUI (intrauterine insemination)"
          },
          {
            "label": "",
            "text": "IVF and ICSI"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a fertility specialist after 12 months of trying (6 months if the woman is 35 or older), or sooner if periods are irregular, there is known endometriosis or PCOS, or previous pelvic surgery or infection.",
    "faqs": [
      {
        "q": "Is infertility usually the woman's problem?",
        "a": "No. Male factors contribute in about half of all cases."
      },
      {
        "q": "Does stress cause infertility?",
        "a": "Stress alone is rarely the main cause, but managing it supports overall wellbeing."
      },
      {
        "q": "Does age affect male fertility?",
        "a": "Yes, though more gradually than in women."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Infertility (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Infertility adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-077",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "what-is-ivf-and-how-does-it-work",
    "title": "What Is IVF and How Does It Work?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "IVF, or in vitro fertilisation, is a fertility treatment in which eggs and sperm are joined in a laboratory to create embryos. An embryo is then placed in the uterus to try to achieve pregnancy. \"In vitro\" means \"in glass\", referring to the lab dish.",
    "diagram": {
      "title": "IVF in brief",
      "steps": [
        {
          "number": "1",
          "title": "Eggs grow",
          "description": "Medicines help several eggs mature"
        },
        {
          "number": "2",
          "title": "Eggs collected",
          "description": "Retrieved from the ovaries"
        },
        {
          "number": "3",
          "title": "Fertilised in lab",
          "description": "Combined with sperm"
        },
        {
          "number": "4",
          "title": "Embryo transferred",
          "description": "Placed in the uterus"
        }
      ]
    },
    "sections": [
      {
        "heading": "How does it work?",
        "content": "In natural conception, an egg released from the ovary meets sperm in the fallopian tube. IVF carries out this step in the laboratory: 1. Medicines stimulate the ovaries to produce several eggs. 2. Eggs are collected in a short procedure. 3. Eggs are fertilised with sperm in the lab. 4. Embryos grow for 3 to 5 days. 5. A selected embryo is transferred into the uterus.",
        "paragraphs": [
          "In natural conception, an egg released from the ovary meets sperm in the fallopian tube. IVF carries out this step in the laboratory:"
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Medicines stimulate the ovaries to produce several eggs."
          },
          {
            "number": 2,
            "text": "Eggs are collected in a short procedure."
          },
          {
            "number": 3,
            "text": "Eggs are fertilised with sperm in the lab."
          },
          {
            "number": 4,
            "text": "Embryos grow for 3 to 5 days."
          },
          {
            "number": 5,
            "text": "A selected embryo is transferred into the uterus."
          }
        ]
      },
      {
        "heading": "What is ICSI?",
        "content": "ICSI (intracytoplasmic sperm injection) is a technique in which a single sperm is injected directly into each egg. It is commonly used when sperm count or quality is low, or when fertilisation failed in a previous IVF cycle.",
        "paragraphs": [
          "ICSI (intracytoplasmic sperm injection) is a technique in which a single sperm is injected directly into each egg. It is commonly used when sperm count or quality is low, or when fertilisation failed in a previous IVF cycle."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who may need IVF?",
        "content": "Blocked or damaged fallopian tubes Significant male infertility Endometriosis Reduced egg reserve Unexplained infertility after other treatments Failed IUI cycles Couples needing genetic testing of embryos Fertility preservation before cancer treatment",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Blocked or damaged fallopian tubes"
          },
          {
            "label": "",
            "text": "Significant male infertility"
          },
          {
            "label": "",
            "text": "Endometriosis"
          },
          {
            "label": "",
            "text": "Reduced egg reserve"
          },
          {
            "label": "",
            "text": "Unexplained infertility after other treatments"
          },
          {
            "label": "",
            "text": "Failed IUI cycles"
          },
          {
            "label": "",
            "text": "Couples needing genetic testing of embryos"
          },
          {
            "label": "",
            "text": "Fertility preservation before cancer treatment"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What affects success?",
        "content": "No clinic can guarantee a pregnancy. Success rates should be discussed honestly for your individual situation. The woman's age: the most important factor. Success rates fall with age, particularly after 35 to 40. Egg reserve and quality Sperm quality Uterine health Lifestyle factors such as smoking and weight Laboratory quality and clinic experience",
        "paragraphs": [
          "No clinic can guarantee a pregnancy. Success rates should be discussed honestly for your individual situation."
        ],
        "bullets": [
          {
            "label": "The woman's age:",
            "text": "the most important factor. Success rates fall with age, particularly after 35 to 40."
          },
          {
            "label": "",
            "text": "Egg reserve and quality"
          },
          {
            "label": "",
            "text": "Sperm quality"
          },
          {
            "label": "",
            "text": "Uterine health"
          },
          {
            "label": "",
            "text": "Lifestyle factors such as smoking and weight"
          },
          {
            "label": "",
            "text": "Laboratory quality and clinic experience"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Legal eligibility in India",
        "content": "India's Assisted Reproductive Technology (Regulation) Act, 2021 regulates IVF clinics. Under the Act, ART services are generally available to women aged 21 to 50 and men aged 21 to 55. Clinics and banks must be registered. Your clinic will explain the current legal requirements, including documents needed for international patients.",
        "paragraphs": [
          "India's Assisted Reproductive Technology (Regulation) Act, 2021 regulates IVF clinics. Under the Act, ART services are generally available to women aged 21 to 50 and men aged 21 to 55. Clinics and banks must be registered. Your clinic will explain the current legal requirements, including documents needed for international patients."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Consult a fertility specialist to understand whether IVF, a simpler treatment, or treating an underlying cause is the right first step for you.",
    "faqs": [
      {
        "q": "Is IVF the same as a \"test tube baby\"?",
        "a": "Yes. \"Test tube baby\" is an older popular term for IVF."
      },
      {
        "q": "Are IVF babies healthy?",
        "a": "The vast majority of babies born after IVF are healthy."
      },
      {
        "q": "How many IVF cycles might I need?",
        "a": "Some people conceive in the first cycle; others need more. Your specialist will advise."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Is IVF and How Does It Work? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Is IVF and How Does It Work? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-078",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "step-by-step-ivf-treatment-process",
    "title": "Step-by-Step IVF Treatment Process",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "An IVF cycle follows a sequence of carefully timed steps. Knowing what happens at each stage helps you plan and feel more in control. A typical fresh cycle takes about four to six weeks from start to pregnancy test.",
    "diagram": {
      "title": "A typical IVF cycle",
      "steps": [
        {
          "number": "1",
          "title": "Day 1 to 2",
          "description": "Baseline scan and blood tests Days 2 to 12 Daily hormone injections; monitoring scans 7 About 2 weeks later Pregnancy blood test"
        },
        {
          "number": "2",
          "title": "Trigger",
          "description": "Final injection about 34 to 36 hours before retrieval"
        },
        {
          "number": "3",
          "title": "Retrieval",
          "description": "Eggs collected under sedation 5 Days 1 to 5 Embryos grow in the lab"
        },
        {
          "number": "4",
          "title": "6",
          "description": "Transfer Embryo placed in the uterus"
        }
      ]
    },
    "sections": [
      {
        "heading": "Step 1: Assessment and planning",
        "content": "Both partners have tests, including hormone levels, ultrasound and semen analysis. The specialist chooses a medicine plan (protocol) suited to you.",
        "paragraphs": [
          "Both partners have tests, including hormone levels, ultrasound and semen analysis. The specialist chooses a medicine plan (protocol) suited to you."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 2: Ovarian stimulation",
        "content": "Daily hormone injections for about 8 to 14 days encourage several eggs to mature Most injections are given under the skin, and many people learn to give them at home Additional medicines prevent eggs being released too early",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Daily hormone injections for about 8 to 14 days encourage several eggs to mature"
          },
          {
            "label": "",
            "text": "Most injections are given under the skin, and many people learn to give them at home"
          },
          {
            "label": "",
            "text": "Additional medicines prevent eggs being released too early"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Step 3: Monitoring",
        "content": "You will have regular ultrasound scans and blood tests to track how the follicles (fluid sacs containing eggs) are growing. Doses may be adjusted.",
        "paragraphs": [
          "You will have regular ultrasound scans and blood tests to track how the follicles (fluid sacs containing eggs) are growing. Doses may be adjusted."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 4: Trigger injection",
        "content": "When follicles reach the right size, a final injection matures the eggs. Egg collection is scheduled about 34 to 36 hours later. Timing is critical.",
        "paragraphs": [
          "When follicles reach the right size, a final injection matures the eggs. Egg collection is scheduled about 34 to 36 hours later. Timing is critical."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 5: Egg retrieval",
        "content": "Eggs are collected using a thin needle guided by ultrasound, under sedation. It takes about 15 to 30 minutes, and you usually go home the same day.",
        "paragraphs": [
          "Eggs are collected using a thin needle guided by ultrasound, under sedation. It takes about 15 to 30 minutes, and you usually go home the same day."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 6: Sperm preparation",
        "content": "On the same day, a semen sample is provided and prepared in the lab. Frozen or surgically retrieved sperm can also be used.",
        "paragraphs": [
          "On the same day, a semen sample is provided and prepared in the lab. Frozen or surgically retrieved sperm can also be used."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 7: Fertilisation",
        "content": "Eggs and sperm are combined by conventional IVF or ICSI . The next day, the embryologist checks how many eggs have fertilised.",
        "paragraphs": [
          "Eggs and sperm are combined by conventional IVF or ICSI . The next day, the embryologist checks how many eggs have fertilised."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 8: Embryo culture",
        "content": "Embryos grow in an incubator for 3 to 5 days . Many clinics transfer at the blastocyst stage (day 5).",
        "paragraphs": [
          "Embryos grow in an incubator for 3 to 5 days . Many clinics transfer at the blastocyst stage (day 5)."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 9: Embryo transfer",
        "content": "One embryo, or sometimes two, is gently placed in the uterus through a thin catheter. Remaining good-quality embryos may be frozen.",
        "paragraphs": [
          "One embryo, or sometimes two, is gently placed in the uterus through a thin catheter. Remaining good-quality embryos may be frozen."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Step 10: Waiting and the pregnancy test",
        "content": "Progesterone support is given to prepare the uterine lining. A blood pregnancy test (beta-hCG) is usually done about 10 to 14 days after transfer.",
        "paragraphs": [
          "Progesterone support is given to prepare the uterine lining. A blood pregnancy test (beta-hCG) is usually done about 10 to 14 days after transfer."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Frozen embryo transfer",
        "content": "Sometimes all embryos are frozen and transferred in a later cycle. This may be advised to reduce the risk of ovarian hyperstimulation or to allow genetic testing.",
        "paragraphs": [
          "Sometimes all embryos are frozen and transferred in a later cycle. This may be advised to reduce the risk of ovarian hyperstimulation or to allow genetic testing."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "How long does one IVF cycle take?",
        "a": "Usually about 4 to 6 weeks from starting medicines to the pregnancy test."
      },
      {
        "q": "Do I need to stay in hospital?",
        "a": "No. Most steps are outpatient, including egg retrieval and transfer."
      },
      {
        "q": "Can I travel during IVF?",
        "a": "Short travel may be possible, but frequent monitoring visits are needed during stimulation."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Step-by-Step IVF Treatment Process (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Step-by-Step IVF Treatment Process adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-079",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "ivf-versus-iui",
    "title": "IVF Versus IUI",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "IUI and IVF are two of the most common fertility treatments. They work very differently and suit different situations. Many couples start with simpler treatments before moving to IVF, but this depends on the cause of infertility.",
    "diagram": {
      "title": "How IUI works",
      "steps": [
        {
          "number": "1",
          "title": "Monitoring",
          "description": "Follicle growth tracked with scans"
        },
        {
          "number": "2",
          "title": "Trigger",
          "description": "Ovulation timed with an injection or test"
        },
        {
          "number": "3",
          "title": "Sperm washed",
          "description": "Best sperm concentrated in the lab"
        },
        {
          "number": "4",
          "title": "Insemination",
          "description": "Sperm placed in the uterus with a thin catheter"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is IUI?",
        "content": "Intrauterine insemination (IUI) places washed, concentrated sperm directly into the uterus around the time of ovulation. It gives sperm a head start, but fertilisation still happens naturally inside the body. IUI is often combined with tablets or injections to help ovulation.",
        "paragraphs": [
          "Intrauterine insemination (IUI) places washed, concentrated sperm directly into the uterus around the time of ovulation. It gives sperm a head start, but fertilisation still happens naturally inside the body.",
          "IUI is often combined with tablets or injections to help ovulation."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What is IVF?",
        "content": "In vitro fertilisation (IVF) involves collecting eggs, fertilising them in the lab, and transferring an embryo into the uterus.",
        "paragraphs": [
          "In vitro fertilisation (IVF) involves collecting eggs, fertilising them in the lab, and transferring an embryo into the uterus."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Comparison",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "IUI",
            "IVF"
          ],
          "rows": [
            [
              "Where fertilisation happens",
              "Inside the body",
              "In the laboratory"
            ],
            [
              "Medicines",
              "Mild or none",
              "Stronger hormone injections"
            ],
            [
              "Egg retrieval",
              "Not needed",
              "Needed, under sedation"
            ],
            [
              "Open fallopian tubes required",
              "Yes",
              "No"
            ],
            [
              "Procedure time",
              "A few minutes",
              "Several weeks of treatment"
            ],
            [
              "Success per cycle",
              "Lower",
              "Higher"
            ],
            [
              "Embryo freezing",
              "Not applicable",
              "Possible"
            ]
          ]
        }
      },
      {
        "heading": "Who may IUI suit?",
        "content": "At least one fallopian tube must be open, and sperm quality should be reasonable. Mild male factor infertility Ovulation problems such as PCOS, with medicines Unexplained infertility in younger women Use of donor sperm Difficulties with intercourse",
        "paragraphs": [
          "At least one fallopian tube must be open, and sperm quality should be reasonable."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Mild male factor infertility"
          },
          {
            "label": "",
            "text": "Ovulation problems such as PCOS, with medicines"
          },
          {
            "label": "",
            "text": "Unexplained infertility in younger women"
          },
          {
            "label": "",
            "text": "Use of donor sperm"
          },
          {
            "label": "",
            "text": "Difficulties with intercourse"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who may IVF suit?",
        "content": "Blocked or damaged tubes Moderate to severe male infertility Advanced age or reduced egg reserve Moderate to severe endometriosis Several failed IUI cycles Need for genetic testing of embryos",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Blocked or damaged tubes"
          },
          {
            "label": "",
            "text": "Moderate to severe male infertility"
          },
          {
            "label": "",
            "text": "Advanced age or reduced egg reserve"
          },
          {
            "label": "",
            "text": "Moderate to severe endometriosis"
          },
          {
            "label": "",
            "text": "Several failed IUI cycles"
          },
          {
            "label": "",
            "text": "Need for genetic testing of embryos"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How specialists decide",
        "content": "Factors include the woman's age, egg reserve, tubal health, sperm quality, duration of infertility and previous treatments. For women over 37 or with reduced egg reserve, specialists may recommend moving to IVF sooner to avoid losing time.",
        "paragraphs": [
          "Factors include the woman's age, egg reserve, tubal health, sperm quality, duration of infertility and previous treatments. For women over 37 or with reduced egg reserve, specialists may recommend moving to IVF sooner to avoid losing time."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How many IUI cycles should you try?",
        "content": "Often three or four cycles, depending on age and circumstances, before considering IVF.",
        "paragraphs": [
          "Often three or four cycles, depending on age and circumstances, before considering IVF."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "A fertility specialist can review both partners' test results and recommend the most suitable first step.",
    "faqs": [
      {
        "q": "Is IUI painful?",
        "a": "Most women feel only mild cramping, similar to a smear test."
      },
      {
        "q": "Can I go straight to IVF?",
        "a": "Yes, if your situation suggests IVF is more appropriate."
      },
      {
        "q": "Does IUI need sedation?",
        "a": "No."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for IVF Versus IUI (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for IVF Versus IUI adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-080",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "understanding-egg-retrieval",
    "title": "Understanding Egg Retrieval",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Egg retrieval, also called oocyte pick-up, is the step in IVF when mature eggs are collected from the ovaries. It is a short, minor procedure, usually done under sedation.",
    "diagram": {
      "title": "Egg retrieval day",
      "steps": [
        {
          "number": "1",
          "title": "Arrive fasting",
          "description": "About 34 to 36 hours after trigger"
        },
        {
          "number": "2",
          "title": "Sedation",
          "description": "Light anaesthesia for comfort"
        },
        {
          "number": "3",
          "title": "Retrieval",
          "description": "Needle guided by ultrasound"
        },
        {
          "number": "4",
          "title": "Recovery",
          "description": "Rest for 1 to 2 hours; go home"
        }
      ]
    },
    "sections": [
      {
        "heading": "Before the procedure",
        "content": "Your partner usually provides a semen sample on the same day, unless frozen sperm is being used. Retrieval is scheduled about 34 to 36 hours after your trigger injection; timing is critical You will be asked to fast for several hours beforehand Wear comfortable clothes and avoid make-up, nail polish and jewellery Arrange for someone to take you home",
        "paragraphs": [
          "Your partner usually provides a semen sample on the same day, unless frozen sperm is being used."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Retrieval is scheduled about 34 to 36 hours after your trigger injection; timing is critical"
          },
          {
            "label": "",
            "text": "You will be asked to fast for several hours beforehand"
          },
          {
            "label": "",
            "text": "Wear comfortable clothes and avoid make-up, nail polish and jewellery"
          },
          {
            "label": "",
            "text": "Arrange for someone to take you home"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What happens during retrieval?",
        "content": "There are no cuts or stitches. The procedure usually takes 15 to 30 minutes . 1. You are given light sedation or anaesthesia, so you are comfortable and usually asleep. 2. An ultrasound probe is placed in the vagina. 3. A thin needle attached to the probe passes through the vaginal wall into each ovary. 4. Fluid from each follicle is gently drawn out. 5. The embryologist examines the fluid under a microscope to identify eggs.",
        "paragraphs": [
          "There are no cuts or stitches. The procedure usually takes 15 to 30 minutes ."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "You are given light sedation or anaesthesia, so you are comfortable and usually asleep."
          },
          {
            "number": 2,
            "text": "An ultrasound probe is placed in the vagina."
          },
          {
            "number": 3,
            "text": "A thin needle attached to the probe passes through the vaginal wall into each ovary."
          },
          {
            "number": 4,
            "text": "Fluid from each follicle is gently drawn out."
          },
          {
            "number": 5,
            "text": "The embryologist examines the fluid under a microscope to identify eggs."
          }
        ]
      },
      {
        "heading": "How many eggs will be collected?",
        "content": "The number varies widely and depends on age, egg reserve and response to medicines. Not every follicle contains an egg, and not every egg will be mature. Quality matters as much as quantity.",
        "paragraphs": [
          "The number varies widely and depends on age, egg reserve and response to medicines. Not every follicle contains an egg, and not every egg will be mature. Quality matters as much as quantity."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Recovery",
        "content": "Rest for 1 to 2 hours at the clinic Mild cramping, bloating and light spotting are common for a day or two Most women return to normal activities the next day Avoid driving and heavy exercise on the day of retrieval",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Rest for 1 to 2 hours at the clinic"
          },
          {
            "label": "",
            "text": "Mild cramping, bloating and light spotting are common for a day or two"
          },
          {
            "label": "",
            "text": "Most women return to normal activities the next day"
          },
          {
            "label": "",
            "text": "Avoid driving and heavy exercise on the day of retrieval"
          }
        ],
        "callouts": []
      },
      {
        "heading": "OHSS: what to watch for",
        "content": "Ovarian hyperstimulation syndrome (OHSS) happens when ovaries over-respond to fertility medicines. Most cases are mild. Contact your clinic urgently if you have: Clinics reduce OHSS risk with careful dosing, special trigger injections and freezing all embryos when needed. Severe abdominal pain or bloating Rapid weight gain (over 1 kg in a day) Nausea or vomiting Reduced urine output Breathlessness",
        "paragraphs": [
          "Ovarian hyperstimulation syndrome (OHSS) happens when ovaries over-respond to fertility medicines. Most cases are mild. Contact your clinic urgently if you have:",
          "Clinics reduce OHSS risk with careful dosing, special trigger injections and freezing all embryos when needed."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Severe abdominal pain or bloating"
          },
          {
            "label": "",
            "text": "Rapid weight gain (over 1 kg in a day)"
          },
          {
            "label": "",
            "text": "Nausea or vomiting"
          },
          {
            "label": "",
            "text": "Reduced urine output"
          },
          {
            "label": "",
            "text": "Breathlessness"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Other risks",
        "content": "Uncommon risks include bleeding, infection and injury to nearby organs.",
        "paragraphs": [
          "Uncommon risks include bleeding, infection and injury to nearby organs."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What happens next?",
        "content": "The next day, your clinic will tell you how many eggs fertilised. Embryos will then be monitored for 3 to 5 days.",
        "paragraphs": [
          "The next day, your clinic will tell you how many eggs fertilised. Embryos will then be monitored for 3 to 5 days."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Is egg retrieval painful?",
        "a": "You are sedated during the procedure. Afterwards, mild cramping is common."
      },
      {
        "q": "Will egg retrieval reduce my egg reserve?",
        "a": "No. It collects eggs that would otherwise be lost in that cycle."
      },
      {
        "q": "Can I work the next day?",
        "a": "Most women can, if they feel well."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Egg Retrieval (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Egg Retrieval adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-081",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "embryo-transfer-explained",
    "title": "Embryo Transfer Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Embryo transfer is the step in IVF where an embryo is placed into the uterus. It is usually quick, simple and painless, much like a smear test.",
    "diagram": {
      "title": "Embryo transfer",
      "steps": [
        {
          "number": "1",
          "title": "Embryo chosen",
          "description": "Best embryo selected by the embryologist"
        },
        {
          "number": "2",
          "title": "Ultrasound guidance",
          "description": "Abdominal scan shows the uterus"
        },
        {
          "number": "3",
          "title": "Gentle placement",
          "description": "Thin catheter places the embryo"
        },
        {
          "number": "4",
          "title": "Rest briefly",
          "description": "Then resume normal light activity"
        }
      ]
    },
    "sections": [
      {
        "heading": "Fresh or frozen transfer?",
        "content": "Frozen transfer may be advised to reduce OHSS risk, allow genetic testing, or when the uterine lining is not ideal. Success rates with frozen transfer are now comparable to fresh transfer in many situations. Fresh transfer: the embryo is transferred a few days after egg retrieval, in the same cycle Frozen embryo transfer (FET): embryos are frozen and transferred in a later cycle after preparing the uterine lining",
        "paragraphs": [
          "Frozen transfer may be advised to reduce OHSS risk, allow genetic testing, or when the uterine lining is not ideal.",
          "Success rates with frozen transfer are now comparable to fresh transfer in many situations."
        ],
        "bullets": [
          {
            "label": "Fresh transfer:",
            "text": "the embryo is transferred a few days after egg retrieval, in the same cycle"
          },
          {
            "label": "Frozen embryo transfer (FET):",
            "text": "embryos are frozen and transferred in a later cycle after preparing the uterine lining"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How many embryos are transferred?",
        "content": "Many clinics now recommend single embryo transfer , especially for younger women with good-quality embryos. Transferring more than one embryo increases the chance of twins or triplets, which carry higher risks for mother and babies. In India, the ART Act limits the number of embryos that can be transferred.",
        "paragraphs": [
          "Many clinics now recommend single embryo transfer , especially for younger women with good-quality embryos.",
          "Transferring more than one embryo increases the chance of twins or triplets, which carry higher risks for mother and babies. In India, the ART Act limits the number of embryos that can be transferred."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "What happens during the procedure?",
        "content": "The procedure takes about 10 to 15 minutes . Sedation is usually not needed. 1. You may be asked to come with a comfortably full bladder, which helps the ultrasound view. 2. A speculum is inserted, as in a smear test. 3. Under ultrasound guidance, a soft, thin catheter carrying the embryo is passed through the cervix. 4. The embryo is gently placed in the uterus. 5. The embryologist checks that the catheter is empty.",
        "paragraphs": [
          "The procedure takes about 10 to 15 minutes . Sedation is usually not needed."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "You may be asked to come with a comfortably full bladder, which helps the ultrasound view."
          },
          {
            "number": 2,
            "text": "A speculum is inserted, as in a smear test."
          },
          {
            "number": 3,
            "text": "Under ultrasound guidance, a soft, thin catheter carrying the embryo is passed through the cervix."
          },
          {
            "number": 4,
            "text": "The embryo is gently placed in the uterus."
          },
          {
            "number": 5,
            "text": "The embryologist checks that the catheter is empty."
          }
        ]
      },
      {
        "heading": "After the transfer",
        "content": "You can usually go home shortly after Light daily activities are fine Strict bed rest is not needed and does not improve success Continue progesterone and other medicines exactly as prescribed Avoid heavy exercise and hot baths if advised by your clinic",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "You can usually go home shortly after"
          },
          {
            "label": "",
            "text": "Light daily activities are fine"
          },
          {
            "label": "",
            "text": "Strict bed rest is not needed and does not improve success"
          },
          {
            "label": "",
            "text": "Continue progesterone and other medicines exactly as prescribed"
          },
          {
            "label": "",
            "text": "Avoid heavy exercise and hot baths if advised by your clinic"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The two-week wait",
        "content": "The time between transfer and the pregnancy test can feel long. Mild cramping or spotting can occur and does not necessarily indicate success or failure. Avoid home pregnancy tests too early, as they may give misleading results. A blood test (beta-hCG) is usually done about 10 to 14 days after transfer.",
        "paragraphs": [
          "The time between transfer and the pregnancy test can feel long. Mild cramping or spotting can occur and does not necessarily indicate success or failure. Avoid home pregnancy tests too early, as they may give misleading results.",
          "A blood test (beta-hCG) is usually done about 10 to 14 days after transfer."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "If the test is negative",
        "content": "It is natural to feel disappointed. Your specialist will review the cycle and discuss next steps, which may include a frozen embryo transfer or changes to the plan.",
        "paragraphs": [
          "It is natural to feel disappointed. Your specialist will review the cycle and discuss next steps, which may include a frozen embryo transfer or changes to the plan."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Can the embryo fall out if I stand up?",
        "a": "No. The embryo is held safely within the uterine lining."
      },
      {
        "q": "Should I avoid all activity after transfer?",
        "a": "No. Normal light activity is recommended."
      },
      {
        "q": "What symptoms suggest pregnancy?",
        "a": "Symptoms are unreliable. The blood test is the only way to know."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Embryo Transfer Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Embryo Transfer Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-082",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "understanding-embryo-freezing",
    "title": "Understanding Embryo Freezing",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Embryo freezing, also called cryopreservation, allows good-quality embryos from an IVF cycle to be stored for future use. It has become a routine and important part of modern IVF.",
    "diagram": null,
    "sections": [
      {
        "heading": "How does it work?",
        "content": "Most clinics use a technique called vitrification , an ultra-rapid freezing method: When needed, embryos are warmed (thawed) and prepared for transfer. 1. Embryos are treated with special protective solutions. 2. They are frozen almost instantly in liquid nitrogen at about -196°C. 3. This prevents ice crystals forming, which could damage the cells. 4. Embryos are stored in secure, monitored tanks.",
        "paragraphs": [
          "Most clinics use a technique called vitrification , an ultra-rapid freezing method:",
          "When needed, embryos are warmed (thawed) and prepared for transfer."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Embryos are treated with special protective solutions."
          },
          {
            "number": 2,
            "text": "They are frozen almost instantly in liquid nitrogen at about -196°C."
          },
          {
            "number": 3,
            "text": "This prevents ice crystals forming, which could damage the cells."
          },
          {
            "number": 4,
            "text": "Embryos are stored in secure, monitored tanks."
          }
        ]
      },
      {
        "heading": "Why are embryos frozen?",
        "content": "Spare embryos: good-quality embryos not used in a fresh transfer can be saved for future attempts or siblings Reducing OHSS risk: freezing all embryos avoids pregnancy in a cycle with high OHSS risk Better uterine preparation: if the lining is not ideal during stimulation Genetic testing: embryos are frozen while test results are awaited Medical reasons: delaying transfer due to illness or other factors Fertility preservation: for example before cancer treatment, though egg freezing may be used for women without a partner",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Spare embryos:",
            "text": "good-quality embryos not used in a fresh transfer can be saved for future attempts or siblings"
          },
          {
            "label": "Reducing OHSS risk:",
            "text": "freezing all embryos avoids pregnancy in a cycle with high OHSS risk"
          },
          {
            "label": "Better uterine preparation:",
            "text": "if the lining is not ideal during stimulation"
          },
          {
            "label": "Genetic testing:",
            "text": "embryos are frozen while test results are awaited"
          },
          {
            "label": "Medical reasons:",
            "text": "delaying transfer due to illness or other factors"
          },
          {
            "label": "Fertility preservation:",
            "text": "for example before cancer treatment, though egg freezing may be used for women without a partner"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How well do embryos survive thawing?",
        "content": "With vitrification, survival rates are high, often well above 90 percent in experienced laboratories. Pregnancy rates with frozen transfers are comparable to fresh transfers in many situations.",
        "paragraphs": [
          "With vitrification, survival rates are high, often well above 90 percent in experienced laboratories. Pregnancy rates with frozen transfers are comparable to fresh transfers in many situations."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Is it safe for babies?",
        "content": "Studies of children born from frozen embryos have been reassuring. Research continues to monitor long-term outcomes.",
        "paragraphs": [
          "Studies of children born from frozen embryos have been reassuring. Research continues to monitor long-term outcomes."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How long can embryos be stored?",
        "content": "Embryos remain viable for many years when properly stored. In India, the ART Act sets rules for storage periods and consent; your clinic will explain the current limits and renewal process.",
        "paragraphs": [
          "Embryos remain viable for many years when properly stored. In India, the ART Act sets rules for storage periods and consent; your clinic will explain the current limits and renewal process."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Decisions to make",
        "content": "Before freezing, couples sign consent forms covering: How long to store embryos What happens to embryos if circumstances change Options for unused embryos, as permitted by law",
        "paragraphs": [
          "Before freezing, couples sign consent forms covering:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "How long to store embryos"
          },
          {
            "label": "",
            "text": "What happens to embryos if circumstances change"
          },
          {
            "label": "",
            "text": "Options for unused embryos, as permitted by law"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Frozen embryo transfer",
        "content": "The uterus is prepared with medicines or by tracking natural ovulation. The embryo is thawed on the day of transfer and placed in the uterus, as in a fresh transfer.",
        "paragraphs": [
          "The uterus is prepared with medicines or by tracking natural ovulation. The embryo is thawed on the day of transfer and placed in the uterus, as in a fresh transfer."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Discuss embryo freezing with your fertility specialist before starting IVF, so you understand the options and consent requirements.",
    "faqs": [
      {
        "q": "Does freezing harm embryos?",
        "a": "Modern vitrification has high survival rates. A small number of embryos may not survive thawing."
      },
      {
        "q": "Are frozen embryo transfers less successful?",
        "a": "Not necessarily. Results are comparable to fresh transfers in many cases."
      },
      {
        "q": "Can I freeze eggs instead of embryos?",
        "a": "Yes. Egg freezing is an option, particularly for women without a partner or for fertility preservation."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Embryo Freezing (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Embryo Freezing adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-083",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "common-reasons-for-ivf-treatment",
    "title": "Common Reasons for IVF Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "IVF is recommended for a range of fertility problems. Sometimes it is the first choice; other times it is used after simpler treatments have not worked. Here are the most common reasons.",
    "diagram": null,
    "sections": [
      {
        "heading": "1. Blocked or damaged fallopian tubes",
        "content": "Eggs and sperm normally meet in the fallopian tubes. If the tubes are blocked, damaged or removed, IVF bypasses them completely. Common causes include past pelvic infections, tuberculosis, ectopic pregnancy and previous surgery.",
        "paragraphs": [
          "Eggs and sperm normally meet in the fallopian tubes. If the tubes are blocked, damaged or removed, IVF bypasses them completely. Common causes include past pelvic infections, tuberculosis, ectopic pregnancy and previous surgery."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "2. Male factor infertility",
        "content": "Low sperm count, poor movement or abnormal shape can make natural conception difficult. IVF with ICSI , where a single sperm is injected into each egg, is highly effective. Sperm can even be retrieved surgically from the testes when none are found in semen.",
        "paragraphs": [
          "Low sperm count, poor movement or abnormal shape can make natural conception difficult. IVF with ICSI , where a single sperm is injected into each egg, is highly effective. Sperm can even be retrieved surgically from the testes when none are found in semen."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "3. Endometriosis",
        "content": "Endometriosis can affect egg quality, the tubes and the pelvic environment. IVF is often recommended for moderate to severe endometriosis or when other treatments have not worked.",
        "paragraphs": [
          "Endometriosis can affect egg quality, the tubes and the pelvic environment. IVF is often recommended for moderate to severe endometriosis or when other treatments have not worked."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "4. Ovulation disorders and PCOS",
        "content": "Many women with PCOS conceive with simpler ovulation-inducing medicines. IVF may be advised when these do not work. Women with PCOS need careful monitoring due to a higher risk of OHSS.",
        "paragraphs": [
          "Many women with PCOS conceive with simpler ovulation-inducing medicines. IVF may be advised when these do not work. Women with PCOS need careful monitoring due to a higher risk of OHSS."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "5. Reduced egg reserve and age",
        "content": "As women age, egg numbers and quality decline. IVF may make the best use of the available eggs. In some cases, donor eggs may be discussed.",
        "paragraphs": [
          "As women age, egg numbers and quality decline. IVF may make the best use of the available eggs. In some cases, donor eggs may be discussed."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "6. Unexplained infertility",
        "content": "When all tests are normal but pregnancy has not happened, IVF may be considered after a period of trying or after failed IUI cycles.",
        "paragraphs": [
          "When all tests are normal but pregnancy has not happened, IVF may be considered after a period of trying or after failed IUI cycles."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "7. Failed IUI cycles",
        "content": "If several IUI cycles have not succeeded, IVF offers higher chances per cycle.",
        "paragraphs": [
          "If several IUI cycles have not succeeded, IVF offers higher chances per cycle."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "8. Genetic conditions",
        "content": "Couples who carry a known genetic disorder, such as thalassaemia, may choose IVF with preimplantation genetic testing (PGT) , so that unaffected embryos can be selected. India's laws strictly prohibit sex selection.",
        "paragraphs": [
          "Couples who carry a known genetic disorder, such as thalassaemia, may choose IVF with preimplantation genetic testing (PGT) , so that unaffected embryos can be selected. India's laws strictly prohibit sex selection."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "9. Fertility preservation",
        "content": "People about to undergo cancer treatment, or wishing to delay parenthood, may freeze eggs or embryos for future use.",
        "paragraphs": [
          "People about to undergo cancer treatment, or wishing to delay parenthood, may freeze eggs or embryos for future use."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "10. Recurrent pregnancy loss",
        "content": "In selected cases, IVF with genetic testing may be considered as part of a wider evaluation.",
        "paragraphs": [
          "In selected cases, IVF with genetic testing may be considered as part of a wider evaluation."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treating the cause first",
        "content": "Before IVF, specialists often treat conditions such as thyroid disorders, fibroids or polyps, and advise on weight and lifestyle, which can improve results.",
        "paragraphs": [
          "Before IVF, specialists often treat conditions such as thyroid disorders, fibroids or polyps, and advise on weight and lifestyle, which can improve results."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "A fertility specialist can determine whether IVF is the best option for your situation after evaluating both partners.",
    "faqs": [
      {
        "q": "Is IVF only for older women?",
        "a": "No. IVF helps people of many ages with different causes of infertility."
      },
      {
        "q": "Can IVF help if my husband has no sperm in his semen?",
        "a": "Sometimes. Sperm may be retrieved surgically for ICSI, depending on the cause."
      },
      {
        "q": "Can IVF be used to choose the baby's sex?",
        "a": "No. Sex selection is illegal in India."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Common Reasons for IVF Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Common Reasons for IVF Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-084",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "what-to-expect-during-ivf-treatment",
    "title": "What to Expect During IVF Treatment",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Knowing what IVF actually feels like day to day can make treatment much less daunting. While every person's experience is different, here is what many people go through.",
    "diagram": null,
    "sections": [
      {
        "heading": "Injections",
        "content": "Most stimulation injections are given under the skin of the abdomen with fine needles Nurses teach you or your partner how to inject at home Injections are usually given at the same time each day Mild redness or bruising at injection sites is common",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Most stimulation injections are given under the skin of the abdomen with fine needles"
          },
          {
            "label": "",
            "text": "Nurses teach you or your partner how to inject at home"
          },
          {
            "label": "",
            "text": "Injections are usually given at the same time each day"
          },
          {
            "label": "",
            "text": "Mild redness or bruising at injection sites is common"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Common side effects during stimulation",
        "content": "These usually settle after egg retrieval or when the next period starts. Bloating and a feeling of fullness Mild pelvic discomfort as the ovaries enlarge Breast tenderness Mood swings, irritability or tearfulness Headaches Tiredness",
        "paragraphs": [
          "These usually settle after egg retrieval or when the next period starts."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Bloating and a feeling of fullness"
          },
          {
            "label": "",
            "text": "Mild pelvic discomfort as the ovaries enlarge"
          },
          {
            "label": "",
            "text": "Breast tenderness"
          },
          {
            "label": "",
            "text": "Mood swings, irritability or tearfulness"
          },
          {
            "label": "",
            "text": "Headaches"
          },
          {
            "label": "",
            "text": "Tiredness"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Clinic visits",
        "content": "During stimulation, expect 3 to 5 monitoring visits over about 10 to 14 days for ultrasound scans and blood tests. Visits are often in the morning and may be scheduled at short notice.",
        "paragraphs": [
          "During stimulation, expect 3 to 5 monitoring visits over about 10 to 14 days for ultrasound scans and blood tests.",
          "Visits are often in the morning and may be scheduled at short notice."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Work and daily life",
        "content": "Most people continue working during IVF Plan for time off on the day of egg retrieval and possibly the day after Light exercise such as walking is usually fine; avoid high-impact exercise as ovaries enlarge Avoid alcohol and smoking",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Most people continue working during IVF"
          },
          {
            "label": "",
            "text": "Plan for time off on the day of egg retrieval and possibly the day after"
          },
          {
            "label": "",
            "text": "Light exercise such as walking is usually fine; avoid high-impact exercise as ovaries enlarge"
          },
          {
            "label": "",
            "text": "Avoid alcohol and smoking"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Travelling for treatment",
        "content": "International patients usually need to stay near the clinic for most of the cycle, roughly 2 to 3 weeks for stimulation, retrieval and transfer. Some initial tests can be done in your home country. Discuss travel timing for after transfer with your specialist.",
        "paragraphs": [
          "International patients usually need to stay near the clinic for most of the cycle, roughly 2 to 3 weeks for stimulation, retrieval and transfer. Some initial tests can be done in your home country. Discuss travel timing for after transfer with your specialist."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "The emotional side",
        "content": "IVF can feel like an emotional rollercoaster, with hope, anxiety and waiting at each step. It is normal to feel: Talk openly with your partner, consider counselling, and limit online comparisons. Anxious about results at each stage Stressed by injections and appointments Tense during the two-week wait",
        "paragraphs": [
          "IVF can feel like an emotional rollercoaster, with hope, anxiety and waiting at each step. It is normal to feel:",
          "Talk openly with your partner, consider counselling, and limit online comparisons."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Anxious about results at each stage"
          },
          {
            "label": "",
            "text": "Stressed by injections and appointments"
          },
          {
            "label": "",
            "text": "Tense during the two-week wait"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Possible outcomes at each stage",
        "content": "Not every follicle contains an egg, not every egg fertilises, and not every embryo develops. Your clinic will update you at each step. It helps to expect some loss along the way.",
        "paragraphs": [
          "Not every follicle contains an egg, not every egg fertilises, and not every embryo develops. Your clinic will update you at each step. It helps to expect some loss along the way."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Warning signs: contact your clinic urgently",
        "content": "These may indicate OHSS or another complication. Severe abdominal pain or bloating Breathlessness Vomiting or inability to keep fluids down Reduced urine Heavy bleeding Fever",
        "paragraphs": [
          "These may indicate OHSS or another complication."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Severe abdominal pain or bloating"
          },
          {
            "label": "",
            "text": "Breathlessness"
          },
          {
            "label": "",
            "text": "Vomiting or inability to keep fluids down"
          },
          {
            "label": "",
            "text": "Reduced urine"
          },
          {
            "label": "",
            "text": "Heavy bleeding"
          },
          {
            "label": "",
            "text": "Fever"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Do IVF injections hurt?",
        "a": "Most people find them less painful than expected, with a brief sting."
      },
      {
        "q": "Will IVF medicines cause weight gain?",
        "a": "Bloating is common and temporary. Significant weight gain is unusual."
      },
      {
        "q": "Can I continue my normal diet?",
        "a": "Yes, a balanced diet is recommended. Your clinic may give specific advice."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What to Expect During IVF Treatment (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What to Expect During IVF Treatment adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-085",
    "specialtySlug": "ivf",
    "specialtyTitle": "IVF",
    "slug": "emotional-and-physical-preparation-for-ivf",
    "title": "Emotional and Physical Preparation for IVF",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Preparing for IVF is about giving yourself the best possible chance of success and feeling ready for the journey ahead. Preparation ideally begins about three months before treatment, as eggs and sperm take that long to mature.",
    "diagram": null,
    "sections": [
      {
        "heading": "Physical preparation for women",
        "content": "Folic acid: start a daily supplement, usually 400 micrograms or as advised, ideally three months before treatment Healthy weight: being significantly underweight or overweight can reduce success Stop smoking and avoid alcohol Limit caffeine to one or two cups of tea or coffee a day Stay active with moderate exercise Manage medical conditions: thyroid disorders, diabetes and blood pressure should be well controlled Check vaccinations, such as rubella, before pregnancy",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Folic acid:",
            "text": "start a daily supplement, usually 400 micrograms or as advised, ideally three months before treatment"
          },
          {
            "label": "Healthy weight:",
            "text": "being significantly underweight or overweight can reduce success"
          },
          {
            "label": "",
            "text": "Stop smoking and avoid alcohol"
          },
          {
            "label": "",
            "text": "Limit caffeine to one or two cups of tea or coffee a day"
          },
          {
            "label": "",
            "text": "Stay active with moderate exercise"
          },
          {
            "label": "Manage medical conditions:",
            "text": "thyroid disorders, diabetes and blood pressure should be well controlled"
          },
          {
            "label": "",
            "text": "Check vaccinations, such as rubella, before pregnancy"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Physical preparation for men",
        "content": "Sperm takes about three months to develop, so changes now affect the sperm used in IVF: Stop smoking and limit alcohol Avoid excessive heat: hot tubs, saunas and laptops on the lap Maintain a healthy weight and diet Discuss any medicines or supplements with the specialist",
        "paragraphs": [
          "Sperm takes about three months to develop, so changes now affect the sperm used in IVF:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Stop smoking and limit alcohol"
          },
          {
            "label": "",
            "text": "Avoid excessive heat: hot tubs, saunas and laptops on the lap"
          },
          {
            "label": "",
            "text": "Maintain a healthy weight and diet"
          },
          {
            "label": "",
            "text": "Discuss any medicines or supplements with the specialist"
          }
        ],
        "callouts": []
      },
      {
        "heading": "A balanced diet",
        "content": "Take supplements only if your doctor recommends them. Plenty of vegetables, fruit, whole grains and pulses Adequate protein from dal, eggs, fish, paneer or lean meat Healthy fats from nuts and seeds Limit processed foods and sugar",
        "paragraphs": [
          "Take supplements only if your doctor recommends them."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Plenty of vegetables, fruit, whole grains and pulses"
          },
          {
            "label": "",
            "text": "Adequate protein from dal, eggs, fish, paneer or lean meat"
          },
          {
            "label": "",
            "text": "Healthy fats from nuts and seeds"
          },
          {
            "label": "",
            "text": "Limit processed foods and sugar"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Emotional preparation",
        "content": "Understand the process and possible outcomes Discuss expectations, limits and plans as a couple Decide whom you want to tell, and how much Consider counselling, which many clinics offer Practise stress-relief: walking, yoga, breathing exercises, adequate sleep Connect with support groups",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Understand the process and possible outcomes"
          },
          {
            "label": "",
            "text": "Discuss expectations, limits and plans as a couple"
          },
          {
            "label": "",
            "text": "Decide whom you want to tell, and how much"
          },
          {
            "label": "",
            "text": "Consider counselling, which many clinics offer"
          },
          {
            "label": "",
            "text": "Practise stress-relief: walking, yoga, breathing exercises, adequate sleep"
          },
          {
            "label": "",
            "text": "Connect with support groups"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Practical preparation",
        "content": "Plan time off for appointments and egg retrieval Organise medicines and a schedule for injections Prepare documents required by law and by your clinic For international patients, plan accommodation near the clinic and the length of stay",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Plan time off for appointments and egg retrieval"
          },
          {
            "label": "",
            "text": "Organise medicines and a schedule for injections"
          },
          {
            "label": "",
            "text": "Prepare documents required by law and by your clinic"
          },
          {
            "label": "",
            "text": "For international patients, plan accommodation near the clinic and the length of stay"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Questions to ask your specialist",
        "content": "What treatment protocol do you recommend for me and why? What are my realistic chances based on my age and tests? How many embryos will be transferred? What happens to remaining embryos? What are the warning signs of complications?",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "What treatment protocol do you recommend for me and why?"
          },
          {
            "label": "",
            "text": "What are my realistic chances based on my age and tests?"
          },
          {
            "label": "",
            "text": "How many embryos will be transferred?"
          },
          {
            "label": "",
            "text": "What happens to remaining embryos?"
          },
          {
            "label": "",
            "text": "What are the warning signs of complications?"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Do supplements improve IVF success?",
        "a": "Folic acid is recommended for all women. Evidence for other supplements is limited; take only what your doctor advises."
      },
      {
        "q": "Should we stop having intercourse before IVF?",
        "a": "Your clinic may give specific advice about abstinence before providing a semen sample."
      },
      {
        "q": "Can stress cause IVF failure?",
        "a": "There is no clear evidence that stress alone causes IVF failure, but support improves wellbeing."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Emotional and Physical Preparation for IVF (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Emotional and Physical Preparation for IVF adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-086",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "what-is-a-bone-marrow-transplant",
    "title": "What Is a Bone Marrow Transplant?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A bone marrow transplant (BMT) replaces damaged or diseased bone marrow with healthy blood- forming stem cells. Despite its name, it is not surgery. The new cells are given through a drip, much like a blood transfusion.",
    "diagram": {
      "title": "The idea behind a transplant",
      "steps": [
        {
          "number": "1",
          "title": "Diseased marrow",
          "description": "Not making healthy blood cells"
        },
        {
          "number": "2",
          "title": "Conditioning",
          "description": "Chemotherapy clears the old marrow"
        },
        {
          "number": "3",
          "title": "New stem cells",
          "description": "Healthy cells given through a drip"
        },
        {
          "number": "4",
          "title": "Engraftment",
          "description": "New marrow starts making blood"
        }
      ]
    },
    "sections": [
      {
        "heading": "What does bone marrow do?",
        "content": "Bone marrow is the soft, spongy tissue inside larger bones such as the hips. It contains stem cells that produce: When bone marrow is affected by cancer, fails to work, or produces faulty cells, the body cannot make healthy blood. Red blood cells, which carry oxygen White blood cells, which fight infection Platelets, which help blood clot",
        "paragraphs": [
          "Bone marrow is the soft, spongy tissue inside larger bones such as the hips. It contains stem cells that produce:",
          "When bone marrow is affected by cancer, fails to work, or produces faulty cells, the body cannot make healthy blood."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Red blood cells, which carry oxygen"
          },
          {
            "label": "",
            "text": "White blood cells, which fight infection"
          },
          {
            "label": "",
            "text": "Platelets, which help blood clot"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How does a transplant work?",
        "content": "1. Conditioning: high-dose chemotherapy, sometimes with radiation, destroys diseased cells and makes room for new ones. 2. Infusion: healthy stem cells are given through a central line into a vein. 3. Homing: the stem cells travel to the bone marrow. 4. Engraftment: they settle in and begin producing new blood cells, usually within 2 to 4 weeks.",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Conditioning: high-dose chemotherapy, sometimes with radiation, destroys diseased cells and makes room for new ones."
          },
          {
            "number": 2,
            "text": "Infusion: healthy stem cells are given through a central line into a vein."
          },
          {
            "number": 3,
            "text": "Homing: the stem cells travel to the bone marrow."
          },
          {
            "number": 4,
            "text": "Engraftment: they settle in and begin producing new blood cells, usually within 2 to 4 weeks."
          }
        ]
      },
      {
        "heading": "BMT or stem cell transplant?",
        "content": "The terms are often used interchangeably. Today, most transplants use stem cells collected from the bloodstream rather than directly from the bone marrow, so many doctors call it a haematopoietic stem cell transplant (HSCT) .",
        "paragraphs": [
          "The terms are often used interchangeably. Today, most transplants use stem cells collected from the bloodstream rather than directly from the bone marrow, so many doctors call it a haematopoietic stem cell transplant (HSCT) ."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "The main types",
        "content": "Autologous: the patient's own stem cells are collected, stored and returned after high-dose treatment Allogeneic: stem cells come from a donor, such as a sibling, a parent, a child or an unrelated volunteer",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Autologous:",
            "text": "the patient's own stem cells are collected, stored and returned after high-dose treatment"
          },
          {
            "label": "Allogeneic:",
            "text": "stem cells come from a donor, such as a sibling, a parent, a child or an unrelated volunteer"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Why is it done?",
        "content": "A transplant can: Allow doctors to give much higher, more effective doses of chemotherapy Replace marrow that is not working In donor transplants, provide a new immune system that can attack remaining cancer cells, known as the graft-versus-tumour effect",
        "paragraphs": [
          "A transplant can:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Allow doctors to give much higher, more effective doses of chemotherapy"
          },
          {
            "label": "",
            "text": "Replace marrow that is not working"
          },
          {
            "label": "",
            "text": "In donor transplants, provide a new immune system that can attack remaining cancer cells, known as the graft-versus-tumour effect"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Is it a cure?",
        "content": "For many conditions, BMT offers the best chance of long-term cure or control. Outcomes depend on the disease, its stage, the type of transplant, donor match and the patient's overall health.",
        "paragraphs": [
          "For many conditions, BMT offers the best chance of long-term cure or control. Outcomes depend on the disease, its stage, the type of transplant, donor match and the patient's overall health."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "If you or a family member has a blood cancer or bone marrow disorder, ask your haematologist whether a transplant evaluation is appropriate and when the best time would be.",
    "faqs": [
      {
        "q": "Is a bone marrow transplant surgery?",
        "a": "No. The stem cells are given through a drip."
      },
      {
        "q": "Does the patient need to stay in hospital?",
        "a": "Yes, usually for several weeks, in a specialised transplant unit."
      },
      {
        "q": "Is a transplant painful?",
        "a": "The infusion itself is not painful. Side effects of conditioning treatment are managed with medicines."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Is a Bone Marrow Transplant? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Is a Bone Marrow Transplant? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-087",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "who-may-need-a-bone-marrow-transplant",
    "title": "Who May Need a Bone Marrow Transplant?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Bone marrow transplant is recommended for a range of blood cancers and non-cancerous blood disorders. The decision depends on the condition, how it responds to treatment, the patient's fitness and donor availability.",
    "diagram": null,
    "sections": [
      {
        "heading": "Blood cancers",
        "content": "Acute myeloid leukaemia (AML): for higher-risk disease or after relapse Acute lymphoblastic leukaemia (ALL): for high-risk or relapsed disease Multiple myeloma: autologous transplant is a standard part of treatment for many eligible patients Lymphoma: both Hodgkin and non-Hodgkin lymphoma, mainly after relapse Myelodysplastic syndromes (MDS): for higher-risk disease Chronic myeloid leukaemia (CML): now uncommon, only when medicines do not work",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Acute myeloid leukaemia (AML):",
            "text": "for higher-risk disease or after relapse"
          },
          {
            "label": "Acute lymphoblastic leukaemia (ALL):",
            "text": "for high-risk or relapsed disease"
          },
          {
            "label": "Multiple myeloma:",
            "text": "autologous transplant is a standard part of treatment for many eligible patients"
          },
          {
            "label": "Lymphoma:",
            "text": "both Hodgkin and non-Hodgkin lymphoma, mainly after relapse"
          },
          {
            "label": "Myelodysplastic syndromes (MDS):",
            "text": "for higher-risk disease"
          },
          {
            "label": "Chronic myeloid leukaemia (CML):",
            "text": "now uncommon, only when medicines do not work"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Non-cancerous conditions",
        "content": "Thalassaemia and sickle cell disease are particularly relevant in India and parts of Africa and the Middle East. Aplastic anaemia: the bone marrow stops making enough blood cells Thalassaemia major: an inherited condition requiring regular blood transfusions; transplant can offer a cure, ideally in childhood Sickle cell disease: for selected patients with severe disease Inherited immune deficiencies in children Some inherited metabolic disorders",
        "paragraphs": [
          "Thalassaemia and sickle cell disease are particularly relevant in India and parts of Africa and the Middle East."
        ],
        "bullets": [
          {
            "label": "Aplastic anaemia:",
            "text": "the bone marrow stops making enough blood cells"
          },
          {
            "label": "Thalassaemia major:",
            "text": "an inherited condition requiring regular blood transfusions; transplant can offer a cure, ideally in childhood"
          },
          {
            "label": "Sickle cell disease:",
            "text": "for selected patients with severe disease"
          },
          {
            "label": "",
            "text": "Inherited immune deficiencies in children"
          },
          {
            "label": "",
            "text": "Some inherited metabolic disorders"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who is a suitable candidate?",
        "content": "Doctors consider: Age alone does not exclude patients. Reduced-intensity conditioning makes transplant possible for many older adults. The disease and its stage: transplant works best when the disease is under control, ideally in remission Age and general fitness: heart, lung, kidney and liver function Donor availability for allogeneic transplants Previous treatments and responses Infections and other medical conditions Caregiver support: a dedicated caregiver is essential",
        "paragraphs": [
          "Doctors consider:",
          "Age alone does not exclude patients. Reduced-intensity conditioning makes transplant possible for many older adults."
        ],
        "bullets": [
          {
            "label": "The disease and its stage:",
            "text": "transplant works best when the disease is under control, ideally in remission"
          },
          {
            "label": "Age and general fitness:",
            "text": "heart, lung, kidney and liver function"
          },
          {
            "label": "",
            "text": "Donor availability for allogeneic transplants"
          },
          {
            "label": "",
            "text": "Previous treatments and responses"
          },
          {
            "label": "",
            "text": "Infections and other medical conditions"
          },
          {
            "label": "Caregiver support:",
            "text": "a dedicated caregiver is essential"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Timing matters",
        "content": "For some conditions, earlier referral improves outcomes. For thalassaemia, transplant in early childhood, before organ damage from iron overload, generally gives better results.",
        "paragraphs": [
          "For some conditions, earlier referral improves outcomes. For thalassaemia, transplant in early childhood, before organ damage from iron overload, generally gives better results."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "The evaluation",
        "content": "Before transplant, patients undergo: Blood tests and bone marrow tests Heart and lung assessments Infection screening Dental check-up HLA typing of the patient and potential donors Counselling for patient and family",
        "paragraphs": [
          "Before transplant, patients undergo:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Blood tests and bone marrow tests"
          },
          {
            "label": "",
            "text": "Heart and lung assessments"
          },
          {
            "label": "",
            "text": "Infection screening"
          },
          {
            "label": "",
            "text": "Dental check-up"
          },
          {
            "label": "",
            "text": "HLA typing of the patient and potential donors"
          },
          {
            "label": "",
            "text": "Counselling for patient and family"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "If you or your child has a condition listed above, ask for referral to a transplant centre for an early discussion, even if transplant may not be needed immediately.",
    "faqs": [
      {
        "q": "Can adults have a bone marrow transplant?",
        "a": "Yes. Adults of many ages undergo transplant, depending on fitness."
      },
      {
        "q": "Is transplant the only cure for thalassaemia?",
        "a": "It is currently the established curative option. Gene therapies are emerging in some countries."
      },
      {
        "q": "Is BMT used for solid tumours?",
        "a": "Rarely in adults. It is used for a few childhood tumours."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Who May Need a Bone Marrow Transplant? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Who May Need a Bone Marrow Transplant? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-088",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "autologous-versus-allogeneic-transplant",
    "title": "Autologous Versus Allogeneic Transplant",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "There are two main types of bone marrow transplant. The key difference is where the stem cells come from: your own body or a donor. Each has its own uses, benefits and risks.",
    "diagram": {
      "title": "Autologous transplant",
      "steps": [
        {
          "number": "1",
          "title": "Collect",
          "description": "Patient's own stem cells collected"
        },
        {
          "number": "2",
          "title": "Store",
          "description": "Frozen in the lab"
        },
        {
          "number": "3",
          "title": "High-dose therapy",
          "description": "Chemotherapy given"
        },
        {
          "number": "4",
          "title": "Return",
          "description": "Patient's cells infused to rebuild marrow"
        }
      ]
    },
    "sections": [
      {
        "heading": "Autologous transplant (\"auto\")",
        "content": "Your own stem cells are collected before treatment, frozen and returned after high-dose chemotherapy. Main purpose: to allow very high doses of chemotherapy that would otherwise permanently damage the marrow. Commonly used for: Advantages: Limitations: Multiple myeloma Relapsed lymphoma Some childhood solid tumours No donor needed No risk of graft-versus-host disease Lower risk of serious complications Shorter recovery No graft-versus-tumour effect Not suitable when the marrow itself is diseased or failing",
        "paragraphs": [
          "Your own stem cells are collected before treatment, frozen and returned after high-dose chemotherapy.",
          "Main purpose: to allow very high doses of chemotherapy that would otherwise permanently damage the marrow.",
          "Commonly used for:",
          "Advantages:",
          "Limitations:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Multiple myeloma"
          },
          {
            "label": "",
            "text": "Relapsed lymphoma"
          },
          {
            "label": "",
            "text": "Some childhood solid tumours"
          },
          {
            "label": "",
            "text": "No donor needed"
          },
          {
            "label": "",
            "text": "No risk of graft-versus-host disease"
          },
          {
            "label": "",
            "text": "Lower risk of serious complications"
          },
          {
            "label": "",
            "text": "Shorter recovery"
          },
          {
            "label": "",
            "text": "No graft-versus-tumour effect"
          },
          {
            "label": "",
            "text": "Not suitable when the marrow itself is diseased or failing"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Allogeneic transplant (\"allo\")",
        "content": "Stem cells come from a donor . Types of donors: Commonly used for: Advantages: Limitations: Matched sibling: a brother or sister with the same tissue type Matched unrelated donor: from a donor registry Haploidentical (half-matched): usually a parent, child or sibling, now widely used thanks to improved techniques Umbilical cord blood: stored stem cells from a newborn's cord Acute leukaemias Myelodysplastic syndromes Aplastic anaemia Thalassaemia and sickle cell disease Inherited immune disorders Replaces diseased marrow with healthy marrow The donor's immune cells can attack remaining cancer cells ( graft-versus-tumour effect ) Requires a suitable donor Risk of graft-versus-host disease (GVHD) Higher risk of infections and complications Longer recovery and need for immune-suppressing medicines",
        "paragraphs": [
          "Stem cells come from a donor .",
          "Types of donors:",
          "Commonly used for:",
          "Advantages:",
          "Limitations:"
        ],
        "bullets": [
          {
            "label": "Matched sibling:",
            "text": "a brother or sister with the same tissue type"
          },
          {
            "label": "Matched unrelated donor:",
            "text": "from a donor registry"
          },
          {
            "label": "Haploidentical (half-matched):",
            "text": "usually a parent, child or sibling, now widely used thanks to improved techniques"
          },
          {
            "label": "Umbilical cord blood:",
            "text": "stored stem cells from a newborn's cord"
          },
          {
            "label": "",
            "text": "Acute leukaemias"
          },
          {
            "label": "",
            "text": "Myelodysplastic syndromes"
          },
          {
            "label": "",
            "text": "Aplastic anaemia"
          },
          {
            "label": "",
            "text": "Thalassaemia and sickle cell disease"
          },
          {
            "label": "",
            "text": "Inherited immune disorders"
          },
          {
            "label": "",
            "text": "Replaces diseased marrow with healthy marrow"
          },
          {
            "label": "",
            "text": "The donor's immune cells can attack remaining cancer cells ( graft-versus-tumour effect )"
          },
          {
            "label": "",
            "text": "Requires a suitable donor"
          },
          {
            "label": "",
            "text": "Risk of graft-versus-host disease (GVHD)"
          },
          {
            "label": "",
            "text": "Higher risk of infections and complications"
          },
          {
            "label": "",
            "text": "Longer recovery and need for immune-suppressing medicines"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Comparison",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "Autologous",
            "Allogeneic"
          ],
          "rows": [
            [
              "Source of cells",
              "Patient",
              "Donor"
            ],
            [
              "Donor search",
              "Not needed",
              "Needed"
            ],
            [
              "GVHD risk",
              "None",
              "Present"
            ],
            [
              "Graft-versus-tumour effect",
              "No",
              "Yes"
            ],
            [
              "Immune suppression afterwards",
              "Not usually",
              "Usually several months"
            ],
            [
              "Recovery",
              "Shorter",
              "Longer"
            ]
          ]
        }
      },
      {
        "heading": "How is the type chosen?",
        "content": "Your transplant team considers your disease, whether it affects the marrow, your age and fitness, donor availability and the latest evidence for your condition.",
        "paragraphs": [
          "Your transplant team considers your disease, whether it affects the marrow, your age and fitness, donor availability and the latest evidence for your condition."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Ask your haematologist which type of transplant is recommended for you and why.",
    "faqs": [
      {
        "q": "Which type is better?",
        "a": "Neither is better overall. The right type depends on the condition."
      },
      {
        "q": "Can a parent be a donor?",
        "a": "Yes. Parents are often haploidentical (half-matched) donors."
      },
      {
        "q": "Can I have both types?",
        "a": "Some patients have an autologous transplant followed later by an allogeneic transplant, if needed."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Autologous Versus Allogeneic Transplant (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Autologous Versus Allogeneic Transplant adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-089",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "understanding-stem-cell-transplantation",
    "title": "Understanding Stem Cell Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Blood-forming stem cells are the \"seed\" cells from which all blood cells grow. In a transplant, these stem cells are collected, sometimes stored, and then given to the patient to rebuild their blood and immune system.",
    "diagram": {
      "title": "Peripheral blood stem cell collection",
      "steps": [
        {
          "number": "1",
          "title": "Mobilisation",
          "description": "Injections move stem cells into the blood"
        },
        {
          "number": "2",
          "title": "Apheresis",
          "description": "Blood passes through a collection machine"
        },
        {
          "number": "3",
          "title": "Collection",
          "description": "Stem cells separated; rest returned"
        },
        {
          "number": "4",
          "title": "Processing",
          "description": "Cells counted, stored or infused"
        }
      ]
    },
    "sections": [
      {
        "heading": "What are blood-forming stem cells?",
        "content": "These are special cells, called haematopoietic stem cells , that can: They are not the same as the \"stem cell therapies\" sometimes advertised for other conditions, many of which are unproven. Make copies of themselves Develop into red cells, white cells and platelets",
        "paragraphs": [
          "These are special cells, called haematopoietic stem cells , that can:",
          "They are not the same as the \"stem cell therapies\" sometimes advertised for other conditions, many of which are unproven."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Make copies of themselves"
          },
          {
            "label": "",
            "text": "Develop into red cells, white cells and platelets"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The three sources of stem cells",
        "content": "The donor or patient receives injections of a growth factor for about 4 to 5 days , which moves stem cells from Cells are collected by apheresis: blood is drawn from one arm, passed through a machine that separates stem It takes about 4 to 6 hours and may be repeated the next day Side effects of the injections can include bone aches and tiredness Stem cells are collected directly from the back of the hip bones with a needle Done under anaesthesia Donors may have soreness in the lower back for a few days Sometimes preferred in children and for certain conditions Collected from the umbilical cord and placenta after a baby's birth Stored frozen in cord blood banks Requires less strict matching Contains fewer cells, so it is used more in children or with special techniques in adults 1. Peripheral blood stem cells (PBSC) The most common source today, especially for adults. the marrow into the blood cells, and returned through the other arm 2. Bone marrow harvest 3. Umbilical cord blood",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "The donor or patient receives injections of a growth factor for about 4 to 5 days , which moves stem cells from"
          },
          {
            "label": "",
            "text": "Cells are collected by apheresis: blood is drawn from one arm, passed through a machine that separates stem"
          },
          {
            "label": "",
            "text": "It takes about 4 to 6 hours and may be repeated the next day"
          },
          {
            "label": "",
            "text": "Side effects of the injections can include bone aches and tiredness"
          },
          {
            "label": "",
            "text": "Stem cells are collected directly from the back of the hip bones with a needle"
          },
          {
            "label": "",
            "text": "Done under anaesthesia"
          },
          {
            "label": "",
            "text": "Donors may have soreness in the lower back for a few days"
          },
          {
            "label": "",
            "text": "Sometimes preferred in children and for certain conditions"
          },
          {
            "label": "",
            "text": "Collected from the umbilical cord and placenta after a baby's birth"
          },
          {
            "label": "",
            "text": "Stored frozen in cord blood banks"
          },
          {
            "label": "",
            "text": "Requires less strict matching"
          },
          {
            "label": "",
            "text": "Contains fewer cells, so it is used more in children or with special techniques in adults"
          }
        ],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Peripheral blood stem cells (PBSC) The most common source today, especially for adults. the marrow into the blood cells, and returned through the other arm"
          },
          {
            "number": 2,
            "text": "Bone marrow harvest"
          },
          {
            "number": 3,
            "text": "Umbilical cord blood"
          }
        ]
      },
      {
        "heading": "Comparison",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "Peripheral blood",
            "Bone marrow",
            "Cord blood"
          ],
          "rows": [
            [
              "Collection",
              "Apheresis",
              "Needle from hip bones",
              "At birth"
            ],
            [
              "Anaesthesia",
              "Not needed",
              "Needed",
              "Not needed"
            ],
            [
              "Speed of engraftment",
              "Fastest",
              "Moderate",
              "Slowest"
            ],
            [
              "Typical use",
              "Most adults",
              "Selected cases",
              "Mainly children"
            ]
          ]
        }
      },
      {
        "heading": "Is donating stem cells safe?",
        "content": "Yes. Donors are carefully screened. Their stem cells regenerate naturally within weeks. Serious complications are rare.",
        "paragraphs": [
          "Yes. Donors are carefully screened. Their stem cells regenerate naturally within weeks. Serious complications are rare."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Processing the cells",
        "content": "Collected cells are counted to ensure enough are available. For autologous transplants, they are frozen until needed. For donor transplants, they are often given fresh within a day or two.",
        "paragraphs": [
          "Collected cells are counted to ensure enough are available. For autologous transplants, they are frozen until needed. For donor transplants, they are often given fresh within a day or two."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Your transplant team will choose the most suitable stem cell source for your condition and donor situation.",
    "faqs": [
      {
        "q": "Does donating stem cells weaken the donor?",
        "a": "No. The body replaces donated stem cells within weeks."
      },
      {
        "q": "Should we store our baby's cord blood privately?",
        "a": "Discuss with your doctor; private storage is useful only in specific situations."
      },
      {
        "q": "Are advertised stem cell injections the same?",
        "a": "No. Many advertised \"stem cell therapies\" are unproven. Blood stem cell transplant is an established treatment."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Stem Cell Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Stem Cell Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-090",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "finding-a-suitable-bone-marrow-donor",
    "title": "Finding a Suitable Bone Marrow Donor",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "For an allogeneic transplant, finding the right donor is a crucial step. The donor's tissue type needs to match the patient's as closely as possible to reduce complications.",
    "diagram": {
      "title": "The donor search",
      "steps": [
        {
          "number": "1",
          "title": "HLA typing",
          "description": "Patient's tissue type tested"
        },
        {
          "number": "2",
          "title": "Siblings tested",
          "description": "About 1 in 4 chance of a full match"
        },
        {
          "number": "3",
          "title": "Family half-match",
          "description": "Parents, children or siblings considered"
        },
        {
          "number": "4",
          "title": "Registry search",
          "description": "Unrelated volunteers worldwide"
        }
      ]
    },
    "sections": [
      {
        "heading": "What is HLA matching?",
        "content": "HLA (human leukocyte antigens) are proteins on the surface of cells. The immune system uses them to tell \"self\" from \"non-self\". The closer the HLA match between donor and patient, the lower the risk of rejection and graft- versus-host disease. HLA typing is done with a blood test or cheek swab .",
        "paragraphs": [
          "HLA (human leukocyte antigens) are proteins on the surface of cells. The immune system uses them to tell \"self\" from \"non-self\". The closer the HLA match between donor and patient, the lower the risk of rejection and graft- versus-host disease.",
          "HLA typing is done with a blood test or cheek swab ."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Unlike blood groups",
        "content": "HLA matching is different from blood group matching. A donor can have a different blood group from the patient and still be a suitable stem cell donor.",
        "paragraphs": [
          "HLA matching is different from blood group matching. A donor can have a different blood group from the patient and still be a suitable stem cell donor."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Who can be a donor?",
        "content": "4 chance of being a perfect match. Siblings are usually tested first. With modern techniques, haploidentical transplants now achieve results comparable to matched donors in many conditions. This has greatly increased donor availability, especially in India. match is more likely when the donor shares the patient's ethnic background. Registries in India are growing but remain small compared with the population. 1. Siblings (brothers and sisters) We inherit half our HLA type from each parent. Each full sibling has about a 1 in 2. Haploidentical (half-matched) family donors Parents, children, and many siblings are at least half-matched. 3. Matched unrelated donors Volunteers registered with national and international donor registries . Finding a 4. Umbilical cord blood Stored cord blood units from public banks. Matching requirements are less strict.",
        "paragraphs": [
          "4 chance of being a perfect match. Siblings are usually tested first.",
          "With modern techniques, haploidentical transplants now achieve results comparable to matched donors in many conditions. This has greatly increased donor availability, especially in India.",
          "match is more likely when the donor shares the patient's ethnic background. Registries in India are growing but remain small compared with the population."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "Siblings (brothers and sisters) We inherit half our HLA type from each parent. Each full sibling has about a 1 in"
          },
          {
            "number": 2,
            "text": "Haploidentical (half-matched) family donors Parents, children, and many siblings are at least half-matched."
          },
          {
            "number": 3,
            "text": "Matched unrelated donors Volunteers registered with national and international donor registries . Finding a"
          },
          {
            "number": 4,
            "text": "Umbilical cord blood Stored cord blood units from public banks. Matching requirements are less strict."
          }
        ]
      },
      {
        "heading": "How long does the search take?",
        "content": "For urgent cases, a haploidentical family donor may allow transplant sooner. Family testing: usually a few weeks Unrelated donor search: can take weeks to months",
        "paragraphs": [
          "For urgent cases, a haploidentical family donor may allow transplant sooner."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Family testing: usually a few weeks"
          },
          {
            "label": "",
            "text": "Unrelated donor search: can take weeks to months"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Choosing between donors",
        "content": "When more than one donor is available, doctors also consider: Donor age and health (younger donors are often preferred) Blood group and virus status Antibodies in the patient against the donor",
        "paragraphs": [
          "When more than one donor is available, doctors also consider:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Donor age and health (younger donors are often preferred)"
          },
          {
            "label": "",
            "text": "Blood group and virus status"
          },
          {
            "label": "",
            "text": "Antibodies in the patient against the donor"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What is involved for the donor?",
        "content": "Health assessment and blood tests Usually peripheral blood stem cell donation by apheresis, after growth factor injections Occasionally bone marrow harvest under anaesthesia Most donors return to normal activities within days",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Health assessment and blood tests"
          },
          {
            "label": "",
            "text": "Usually peripheral blood stem cell donation by apheresis, after growth factor injections"
          },
          {
            "label": "",
            "text": "Occasionally bone marrow harvest under anaesthesia"
          },
          {
            "label": "",
            "text": "Most donors return to normal activities within days"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Legal and ethical points",
        "content": "Donation must be voluntary and unpaid. International patients and donors may need additional documents.",
        "paragraphs": [
          "Donation must be voluntary and unpaid. International patients and donors may need additional documents."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Start donor testing early once a transplant is being considered. Ask your transplant team which family members should be tested.",
    "faqs": [
      {
        "q": "Do parents always match?",
        "a": "Parents are usually half-matched, which may be suitable for a haploidentical transplant."
      },
      {
        "q": "Can a donor have a different blood group?",
        "a": "Yes. The patient's blood group will gradually change to the donor's."
      },
      {
        "q": "How can I register as a donor?",
        "a": "Contact a recognised stem cell donor registry; registration usually involves a cheek swab."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Finding a Suitable Bone Marrow Donor (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Finding a Suitable Bone Marrow Donor adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-091",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "what-happens-during-transplantation",
    "title": "What Happens During Transplantation?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A bone marrow transplant is a carefully planned journey that takes several weeks in hospital and several months of recovery. Transplant teams count days in relation to \"Day 0\", the day of stem cell infusion.",
    "diagram": {
      "title": "The transplant timeline",
      "steps": [
        {
          "number": "1",
          "title": "Pre-transplant",
          "description": "Tests, central line, donor collection Day -7 to -1 Conditioning chemotherapy"
        },
        {
          "number": "2",
          "title": "Day 0",
          "description": "Stem cell infusion"
        },
        {
          "number": "3",
          "title": "Days 1 to 21",
          "description": "Low counts; protective care 5 Engraftment Counts recover"
        },
        {
          "number": "4",
          "title": "6",
          "description": "Day +100 Key recovery milestone"
        }
      ]
    },
    "sections": [
      {
        "heading": "Before admission",
        "content": "Detailed evaluation: heart, lungs, kidneys, liver, infections and dental check Donor preparation or collection of your own stem cells Central venous line: a thin, soft tube is placed in a large vein in the chest or neck. It is used for medicines, blood tests, transfusions and the stem cell infusion, reducing needle pricks. Fertility preservation: egg or sperm banking can be discussed, as conditioning may affect fertility",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Detailed evaluation:",
            "text": "heart, lungs, kidneys, liver, infections and dental check"
          },
          {
            "label": "",
            "text": "Donor preparation or collection of your own stem cells"
          },
          {
            "label": "Central venous line:",
            "text": "a thin, soft tube is placed in a large vein in the chest or neck. It is used for medicines, blood tests, transfusions and the stem cell infusion, reducing needle pricks."
          },
          {
            "label": "Fertility preservation:",
            "text": "egg or sperm banking can be discussed, as conditioning may affect fertility"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Conditioning (around Day -7 to Day -1)",
        "content": "You receive high-dose chemotherapy , sometimes with total body irradiation, over several days. This: Side effects may include nausea, mouth sores, diarrhoea, hair loss and tiredness. These are managed with medicines. Reduced-intensity conditioning uses lower doses and is suitable for older or less fit patients. Destroys diseased cells Suppresses the immune system to prevent rejection (in donor transplants) Makes space in the marrow",
        "paragraphs": [
          "You receive high-dose chemotherapy , sometimes with total body irradiation, over several days. This:",
          "Side effects may include nausea, mouth sores, diarrhoea, hair loss and tiredness. These are managed with medicines.",
          "Reduced-intensity conditioning uses lower doses and is suitable for older or less fit patients."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Destroys diseased cells"
          },
          {
            "label": "",
            "text": "Suppresses the immune system to prevent rejection (in donor transplants)"
          },
          {
            "label": "",
            "text": "Makes space in the marrow"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Day 0: stem cell infusion",
        "content": "Stem cells are given through the central line, like a blood transfusion It usually takes 30 minutes to a few hours Frozen cells may cause a garlic-like taste or smell from the preservative You are awake throughout",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Stem cells are given through the central line, like a blood transfusion"
          },
          {
            "label": "",
            "text": "It usually takes 30 minutes to a few hours"
          },
          {
            "label": "",
            "text": "Frozen cells may cause a garlic-like taste or smell from the preservative"
          },
          {
            "label": "",
            "text": "You are awake throughout"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Waiting for engraftment (Day +1 to about Day +21)",
        "content": "This is often the most challenging period: Blood counts are very low Risk of infection and bleeding is high You stay in a protective room with filtered air You may need blood and platelet transfusions Antibiotics, antivirals and antifungal medicines are given to prevent or treat infections Mouth sores may make eating difficult; nutritional support may be given",
        "paragraphs": [
          "This is often the most challenging period:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Blood counts are very low"
          },
          {
            "label": "",
            "text": "Risk of infection and bleeding is high"
          },
          {
            "label": "",
            "text": "You stay in a protective room with filtered air"
          },
          {
            "label": "",
            "text": "You may need blood and platelet transfusions"
          },
          {
            "label": "",
            "text": "Antibiotics, antivirals and antifungal medicines are given to prevent or treat infections"
          },
          {
            "label": "",
            "text": "Mouth sores may make eating difficult; nutritional support may be given"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Engraftment",
        "content": "The new stem cells begin producing blood cells, usually within 2 to 4 weeks . Engraftment is confirmed when white cell and platelet counts rise and stay stable.",
        "paragraphs": [
          "The new stem cells begin producing blood cells, usually within 2 to 4 weeks . Engraftment is confirmed when white cell and platelet counts rise and stay stable."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Discharge",
        "content": "Most patients go home, or to accommodation near the hospital, once counts recover, infections are controlled and they can eat and drink. This is typically 3 to 6 weeks after admission.",
        "paragraphs": [
          "Most patients go home, or to accommodation near the hospital, once counts recover, infections are controlled and they can eat and drink. This is typically 3 to 6 weeks after admission."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "The first 100 days",
        "content": "Close follow-up continues with frequent clinic visits, often several times a week initially. Many centres advise staying near the hospital for about 100 days after a donor transplant.",
        "paragraphs": [
          "Close follow-up continues with frequent clinic visits, often several times a week initially. Many centres advise staying near the hospital for about 100 days after a donor transplant."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Will I be in isolation?",
        "a": "You will be in a protective room with restricted visitors to reduce infection risk."
      },
      {
        "q": "Can family stay with me?",
        "a": "Usually one healthy caregiver can stay, following strict hygiene rules."
      },
      {
        "q": "How long is the hospital stay?",
        "a": "Typically 3 to 6 weeks, depending on the transplant type and recovery."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Happens During Transplantation? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Happens During Transplantation? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-092",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "recovery-after-bone-marrow-transplantation",
    "title": "Recovery After Bone Marrow Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Recovery after a bone marrow transplant is gradual. While blood counts may recover within weeks, the immune system takes months to a year or more to rebuild fully . Careful precautions during this time help prevent complications.",
    "diagram": {
      "title": "Recovery milestones",
      "steps": [
        {
          "number": "1",
          "title": "Weeks 1 to 4 after discharge",
          "description": "Frequent clinic visits"
        },
        {
          "number": "2",
          "title": "Day +100",
          "description": "Key milestone; many restrictions eased"
        },
        {
          "number": "3",
          "title": "Months 3 to 12",
          "description": "Immune system rebuilds"
        },
        {
          "number": "4",
          "title": "After 1 year",
          "description": "Re-vaccination; return to routine"
        }
      ]
    },
    "sections": [
      {
        "heading": "The first 100 days",
        "content": "The first 100 days are the most critical, especially after a donor transplant. During this time: Many patients need to stay near the transplant centre for this period. Frequent clinic visits, often 2 to 3 times a week at first Regular blood tests to check counts, organ function and medicine levels Monitoring for infections and graft-versus-host disease Possible transfusions",
        "paragraphs": [
          "The first 100 days are the most critical, especially after a donor transplant. During this time:",
          "Many patients need to stay near the transplant centre for this period."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Frequent clinic visits, often 2 to 3 times a week at first"
          },
          {
            "label": "",
            "text": "Regular blood tests to check counts, organ function and medicine levels"
          },
          {
            "label": "",
            "text": "Monitoring for infections and graft-versus-host disease"
          },
          {
            "label": "",
            "text": "Possible transfusions"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Preventing infection",
        "content": "Wash hands frequently, and ask visitors to do the same Wear a mask in crowded places and hospitals Avoid people with colds, flu, chickenpox or other infections Avoid crowds, construction sites and dusty areas Keep pets away from your face, and avoid cleaning cages or litter boxes Keep your central line clean and dry as instructed Do not garden or handle soil until your team allows it",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Wash hands frequently, and ask visitors to do the same"
          },
          {
            "label": "",
            "text": "Wear a mask in crowded places and hospitals"
          },
          {
            "label": "",
            "text": "Avoid people with colds, flu, chickenpox or other infections"
          },
          {
            "label": "",
            "text": "Avoid crowds, construction sites and dusty areas"
          },
          {
            "label": "",
            "text": "Keep pets away from your face, and avoid cleaning cages or litter boxes"
          },
          {
            "label": "",
            "text": "Keep your central line clean and dry as instructed"
          },
          {
            "label": "",
            "text": "Do not garden or handle soil until your team allows it"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Food safety",
        "content": "Your team will give specific dietary guidelines. Eat freshly cooked, well-cooked food Avoid raw or undercooked eggs, meat and fish Avoid street food and unpasteurised milk and juices Wash fruits and vegetables thoroughly; peel when possible Drink safe, boiled or filtered water",
        "paragraphs": [
          "Your team will give specific dietary guidelines."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Eat freshly cooked, well-cooked food"
          },
          {
            "label": "",
            "text": "Avoid raw or undercooked eggs, meat and fish"
          },
          {
            "label": "",
            "text": "Avoid street food and unpasteurised milk and juices"
          },
          {
            "label": "",
            "text": "Wash fruits and vegetables thoroughly; peel when possible"
          },
          {
            "label": "",
            "text": "Drink safe, boiled or filtered water"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Energy and activity",
        "content": "Tiredness is very common and can last months. Gentle daily walking helps rebuild strength. Increase activity gradually and rest when needed.",
        "paragraphs": [
          "Tiredness is very common and can last months. Gentle daily walking helps rebuild strength. Increase activity gradually and rest when needed."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Medicines",
        "content": "After a donor transplant, you will take immunosuppressive medicines to prevent GVHD, along with medicines to prevent infections. Take them exactly as prescribed. Never stop or change doses without advice.",
        "paragraphs": [
          "After a donor transplant, you will take immunosuppressive medicines to prevent GVHD, along with medicines to prevent infections. Take them exactly as prescribed. Never stop or change doses without advice."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Emotional recovery",
        "content": "It is common to feel low, anxious or frustrated during a long recovery. Talk to your team, family or a counsellor.",
        "paragraphs": [
          "It is common to feel low, anxious or frustrated during a long recovery. Talk to your team, family or a counsellor."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Returning to normal life",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Activity",
            "Typical guidance"
          ],
          "rows": [
            [
              "Return to school or work",
              "Often 6 to 12 months after a donor transplant; sooner after autologous"
            ],
            [
              "International travel",
              "As advised by your team, usually after the early recovery period"
            ],
            [
              "Re-vaccination",
              "Usually starting from 6 to 12 months"
            ]
          ]
        }
      },
      {
        "heading": "Warning signs: contact your team immediately",
        "content": "Fever of 38°C (100.4°F) or higher, or chills New rash, diarrhoea or jaundice Breathlessness or cough Bleeding or unusual bruising Redness or discharge around the central line",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Fever of 38°C (100.4°F) or higher, or chills"
          },
          {
            "label": "",
            "text": "New rash, diarrhoea or jaundice"
          },
          {
            "label": "",
            "text": "Breathlessness or cough"
          },
          {
            "label": "",
            "text": "Bleeding or unusual bruising"
          },
          {
            "label": "",
            "text": "Redness or discharge around the central line"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Why do I need vaccinations again?",
        "a": "Transplant wipes out previous immunity, so childhood vaccines need to be repeated."
      },
      {
        "q": "When can I eat outside food?",
        "a": "Usually only after your immune system recovers. Your team will advise."
      },
      {
        "q": "When will I feel normal?",
        "a": "Many people feel significantly better within 6 to 12 months, though it varies."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Recovery After Bone Marrow Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Recovery After Bone Marrow Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-093",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "possible-complications-and-infections-after-bone-marrow-transplant",
    "title": "Possible Complications and Infections After Bone Marrow Transplant",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Bone marrow transplant is a powerful treatment, but it carries significant risks because the body's blood and immune systems are temporarily weakened. Transplant teams work hard to prevent, detect and treat complications early.",
    "diagram": null,
    "sections": [
      {
        "heading": "Infections",
        "content": "Infections are the most common complication. Risks change over time: regular blood tests to detect viruses early. Prevention: preventive antibiotics, antivirals and antifungals, filtered air rooms, hand hygiene, food safety and Fever is an emergency during low counts and needs immediate treatment.",
        "paragraphs": [
          "Infections are the most common complication. Risks change over time:",
          "regular blood tests to detect viruses early."
        ],
        "bullets": [],
        "callouts": [
          "Prevention: preventive antibiotics, antivirals and antifungals, filtered air rooms, hand hygiene, food safety and",
          "Fever is an emergency during low counts and needs immediate treatment."
        ],
        "table": {
          "headers": [
            "Period",
            "Main infection risks"
          ],
          "rows": [
            [
              "First 3 to 4 weeks",
              "Bacterial and fungal infections while counts are very low"
            ],
            [
              "1 to 3 months",
              "Virus reactivation, such as CMV; fungal infections"
            ],
            [
              "After 3 months",
              "Chest infections, shingles, and others while immunity rebuilds"
            ]
          ]
        }
      },
      {
        "heading": "Mucositis",
        "content": "Painful sores in the mouth and throat caused by conditioning chemotherapy. They usually heal as counts recover. Treatment includes mouth care, pain relief and nutritional support.",
        "paragraphs": [
          "Painful sores in the mouth and throat caused by conditioning chemotherapy. They usually heal as counts recover.",
          "Treatment includes mouth care, pain relief and nutritional support."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Bleeding and anaemia",
        "content": "Low platelets and red cells may require transfusions until the new marrow engrafts.",
        "paragraphs": [
          "Low platelets and red cells may require transfusions until the new marrow engrafts."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Graft failure",
        "content": "Occasionally, the new stem cells do not engraft or later stop working. Options may include a second infusion of stem cells or another transplant.",
        "paragraphs": [
          "Occasionally, the new stem cells do not engraft or later stop working. Options may include a second infusion of stem cells or another transplant."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Graft-versus-host disease (GVHD)",
        "content": "In donor transplants, the donor's immune cells may attack the patient's tissues. This is covered in detail in a separate article.",
        "paragraphs": [
          "In donor transplants, the donor's immune cells may attack the patient's tissues. This is covered in detail in a separate article."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Organ effects",
        "content": "Regular tests monitor organ function. Liver: a condition called veno-occlusive disease (VOD) or sinusoidal obstruction syndrome can occur in the first weeks Kidneys: some medicines can affect kidney function Lungs: inflammation or infection Heart: some conditioning treatments can affect heart function",
        "paragraphs": [
          "Regular tests monitor organ function."
        ],
        "bullets": [
          {
            "label": "Liver:",
            "text": "a condition called veno-occlusive disease (VOD) or sinusoidal obstruction syndrome can occur in the first weeks"
          },
          {
            "label": "Kidneys:",
            "text": "some medicines can affect kidney function"
          },
          {
            "label": "Lungs:",
            "text": "inflammation or infection"
          },
          {
            "label": "Heart:",
            "text": "some conditioning treatments can affect heart function"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Long-term effects",
        "content": "Long-term follow-up clinics screen for these effects. Infertility Early menopause or hormone problems Thyroid problems Cataracts Bone thinning A small increased risk of other cancers later in life Disease relapse",
        "paragraphs": [
          "Long-term follow-up clinics screen for these effects."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Infertility"
          },
          {
            "label": "",
            "text": "Early menopause or hormone problems"
          },
          {
            "label": "",
            "text": "Thyroid problems"
          },
          {
            "label": "",
            "text": "Cataracts"
          },
          {
            "label": "",
            "text": "Bone thinning"
          },
          {
            "label": "",
            "text": "A small increased risk of other cancers later in life"
          },
          {
            "label": "",
            "text": "Disease relapse"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Reducing your risk",
        "content": "Follow infection precautions carefully Take all medicines as prescribed Attend every follow-up appointment Report symptoms early Avoid smoking and alcohol",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Follow infection precautions carefully"
          },
          {
            "label": "",
            "text": "Take all medicines as prescribed"
          },
          {
            "label": "",
            "text": "Attend every follow-up appointment"
          },
          {
            "label": "",
            "text": "Report symptoms early"
          },
          {
            "label": "",
            "text": "Avoid smoking and alcohol"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Warning signs: contact your team immediately",
        "content": "Fever or chills Breathlessness or chest pain Yellowing of the skin or eyes, or rapid weight gain Severe diarrhoea Bleeding",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Fever or chills"
          },
          {
            "label": "",
            "text": "Breathlessness or chest pain"
          },
          {
            "label": "",
            "text": "Yellowing of the skin or eyes, or rapid weight gain"
          },
          {
            "label": "",
            "text": "Severe diarrhoea"
          },
          {
            "label": "",
            "text": "Bleeding"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Are complications common?",
        "a": "Some complications, such as infections, are common, but most are managed successfully."
      },
      {
        "q": "What is CMV?",
        "a": "A common virus that can reactivate after transplant. It is monitored with blood tests and treated early."
      },
      {
        "q": "Can the disease come back after transplant?",
        "a": "Yes, relapse is possible. Your team will monitor for it."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Possible Complications and Infections After Bone Marrow Transplant (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Possible Complications and Infections After Bone Marrow Transplant adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-094",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "understanding-graft-versus-host-disease",
    "title": "Understanding Graft-Versus-Host Disease",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Graft-versus-host disease (GVHD) is a complication that can occur after an allogeneic (donor) bone marrow transplant. It happens when immune cells from the donor recognise the patient's body as foreign and attack it. It does not occur after autologous transplants.",
    "diagram": {
      "title": "How GVHD happens",
      "steps": [
        {
          "number": "1",
          "title": "Donor immune cells",
          "description": "Arrive with the transplant"
        },
        {
          "number": "2",
          "title": "Recognise \"foreign\" tissue",
          "description": "Patient's cells look different"
        },
        {
          "number": "3",
          "title": "Attack",
          "description": "Skin, gut, liver and other organs affected"
        },
        {
          "number": "4",
          "title": "Treatment",
          "description": "Immune-suppressing medicines calm the reaction"
        }
      ]
    },
    "sections": [
      {
        "heading": "Why does it happen?",
        "content": "The donor's immune cells are meant to protect the patient and fight remaining cancer. But because the donor and patient are not identical, these cells may also attack healthy tissues. Interestingly, a mild degree of this immune reaction can be helpful, as the same process can attack cancer cells, known as the graft-versus-tumour effect.",
        "paragraphs": [
          "The donor's immune cells are meant to protect the patient and fight remaining cancer. But because the donor and patient are not identical, these cells may also attack healthy tissues.",
          "Interestingly, a mild degree of this immune reaction can be helpful, as the same process can attack cancer cells, known as the graft-versus-tumour effect."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Types of GVHD",
        "content": "Acute GVHD Chronic GVHD Usually develops in the first few months after transplant Mainly affects the skin, gut and liver Usually develops later, often after the first few months Can affect almost any organ, including skin, mouth, eyes, lungs, joints and liver May last for months or years",
        "paragraphs": [
          "Acute GVHD Chronic GVHD"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Usually develops in the first few months after transplant"
          },
          {
            "label": "",
            "text": "Mainly affects the skin, gut and liver"
          },
          {
            "label": "",
            "text": "Usually develops later, often after the first few months"
          },
          {
            "label": "",
            "text": "Can affect almost any organ, including skin, mouth, eyes, lungs, joints and liver"
          },
          {
            "label": "",
            "text": "May last for months or years"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Symptoms of acute GVHD",
        "content": "Skin: rash, often starting on the palms, soles or face, which may spread Gut: diarrhoea, stomach cramps, nausea, vomiting, loss of appetite Liver: yellowing of the skin and eyes (jaundice), dark urine",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Skin:",
            "text": "rash, often starting on the palms, soles or face, which may spread"
          },
          {
            "label": "Gut:",
            "text": "diarrhoea, stomach cramps, nausea, vomiting, loss of appetite"
          },
          {
            "label": "Liver:",
            "text": "yellowing of the skin and eyes (jaundice), dark urine"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Symptoms of chronic GVHD",
        "content": "Dry, gritty eyes Dry mouth, mouth sores or sensitivity to spicy food Skin tightening, thickening or colour changes Joint stiffness Breathlessness or persistent cough Weight loss",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Dry, gritty eyes"
          },
          {
            "label": "",
            "text": "Dry mouth, mouth sores or sensitivity to spicy food"
          },
          {
            "label": "",
            "text": "Skin tightening, thickening or colour changes"
          },
          {
            "label": "",
            "text": "Joint stiffness"
          },
          {
            "label": "",
            "text": "Breathlessness or persistent cough"
          },
          {
            "label": "",
            "text": "Weight loss"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Risk factors",
        "content": "Less closely matched donors Unrelated or older donors Female donor to male patient Peripheral blood stem cells compared with bone marrow Older patient age",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Less closely matched donors"
          },
          {
            "label": "",
            "text": "Unrelated or older donors"
          },
          {
            "label": "",
            "text": "Female donor to male patient"
          },
          {
            "label": "",
            "text": "Peripheral blood stem cells compared with bone marrow"
          },
          {
            "label": "",
            "text": "Older patient age"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Prevention",
        "content": "Patients receive immunosuppressive medicines for several months after transplant to reduce the risk of GVHD. Additional preventive strategies are used depending on the donor type.",
        "paragraphs": [
          "Patients receive immunosuppressive medicines for several months after transplant to reduce the risk of GVHD.",
          "Additional preventive strategies are used depending on the donor type."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "Based on symptoms, examination and tests. Sometimes a small skin or gut biopsy is needed to confirm.",
        "paragraphs": [
          "Based on symptoms, examination and tests. Sometimes a small skin or gut biopsy is needed to confirm."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Treatment",
        "content": "Steroids: the first-line treatment for many cases Other immune-suppressing or targeted medicines when steroids are not enough Supportive care: eye drops, mouth care, skin moisturisers and nutritional support Physiotherapy for joint stiffness",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Steroids:",
            "text": "the first-line treatment for many cases"
          },
          {
            "label": "",
            "text": "Other immune-suppressing or targeted medicines when steroids are not enough"
          },
          {
            "label": "Supportive care:",
            "text": "eye drops, mouth care, skin moisturisers and nutritional support"
          },
          {
            "label": "",
            "text": "Physiotherapy for joint stiffness"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Living with GVHD",
        "content": "Many people with GVHD lead fulfilling lives with treatment. Treatment also increases infection risk, so precautions remain important.",
        "paragraphs": [
          "Many people with GVHD lead fulfilling lives with treatment. Treatment also increases infection risk, so precautions remain important."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "When should you contact your team?",
        "content": "Report any new rash, diarrhoea, jaundice, dry eyes or mouth, breathlessness or skin changes promptly. Early treatment works best.",
        "paragraphs": [
          "Report any new rash, diarrhoea, jaundice, dry eyes or mouth, breathlessness or skin changes promptly. Early treatment works best."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Does GVHD mean the transplant has failed?",
        "a": "No. GVHD means the donor cells are active. It needs treatment but is not graft failure."
      },
      {
        "q": "Can GVHD be cured?",
        "a": "Many cases settle with treatment. Chronic GVHD may need longer-term management."
      },
      {
        "q": "Can GVHD occur years later?",
        "a": "Chronic GVHD can develop or flare months or even years after transplant."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Graft-Versus-Host Disease (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Graft-Versus-Host Disease adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-095",
    "specialtySlug": "bone-marrow-transplant",
    "specialtyTitle": "Bone Marrow Transplant",
    "slug": "life-after-bone-marrow-transplantation",
    "title": "Life After Bone Marrow Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Many people go on to live full, active lives after a bone marrow transplant. Life after transplant involves gradually returning to normal routines while continuing long-term health care.",
    "diagram": null,
    "sections": [
      {
        "heading": "Long-term follow-up",
        "content": "Even after you feel well, regular check-ups remain important: Most centres provide a survivorship care plan outlining what tests are needed and when. Monitoring blood counts and disease status Screening for late effects on the heart, lungs, thyroid, bones, eyes and hormones Monitoring for chronic GVHD after donor transplants Cancer screening as recommended",
        "paragraphs": [
          "Even after you feel well, regular check-ups remain important:",
          "Most centres provide a survivorship care plan outlining what tests are needed and when."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Monitoring blood counts and disease status"
          },
          {
            "label": "",
            "text": "Screening for late effects on the heart, lungs, thyroid, bones, eyes and hormones"
          },
          {
            "label": "",
            "text": "Monitoring for chronic GVHD after donor transplants"
          },
          {
            "label": "",
            "text": "Cancer screening as recommended"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Re-vaccination",
        "content": "Transplant erases immunity from previous vaccines. Re-vaccination usually begins 6 to 12 months after transplant, following a schedule set by your team. Live vaccines are delayed until the immune system has recovered sufficiently.",
        "paragraphs": [
          "Transplant erases immunity from previous vaccines. Re-vaccination usually begins 6 to 12 months after transplant, following a schedule set by your team. Live vaccines are delayed until the immune system has recovered sufficiently."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Returning to work and school",
        "content": "Many people return within 6 to 12 months after a donor transplant, and sooner after an autologous transplant A gradual return, such as part-time hours, often helps Children can usually return to school when their team advises, with infection precautions",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Many people return within 6 to 12 months after a donor transplant, and sooner after an autologous transplant"
          },
          {
            "label": "",
            "text": "A gradual return, such as part-time hours, often helps"
          },
          {
            "label": "",
            "text": "Children can usually return to school when their team advises, with infection precautions"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Fertility and family planning",
        "content": "Discuss family planning with your transplant team and a fertility specialist. Conditioning treatment can affect fertility in both men and women Fertility preservation before transplant, such as egg, embryo or sperm freezing, may allow future parenthood Some people recover fertility naturally; others may use assisted reproductive techniques Women may experience early menopause and may need hormone therapy",
        "paragraphs": [
          "Discuss family planning with your transplant team and a fertility specialist."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Conditioning treatment can affect fertility in both men and women"
          },
          {
            "label": "",
            "text": "Fertility preservation before transplant, such as egg, embryo or sperm freezing, may allow future parenthood"
          },
          {
            "label": "",
            "text": "Some people recover fertility naturally; others may use assisted reproductive techniques"
          },
          {
            "label": "",
            "text": "Women may experience early menopause and may need hormone therapy"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Emotional health",
        "content": "Recovery can bring relief and gratitude, but also anxiety about relapse, fatigue or changes in body image and relationships. This is normal. Counselling, support groups and talking with other transplant survivors can help.",
        "paragraphs": [
          "Recovery can bring relief and gratitude, but also anxiety about relapse, fatigue or changes in body image and relationships. This is normal. Counselling, support groups and talking with other transplant survivors can help."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Healthy habits",
        "content": "Do not smoke, and limit alcohol Eat a balanced diet Exercise regularly to rebuild strength Protect your skin from the sun, especially if you have had GVHD Maintain good dental hygiene and regular dental check-ups Get enough sleep",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Do not smoke, and limit alcohol"
          },
          {
            "label": "",
            "text": "Eat a balanced diet"
          },
          {
            "label": "",
            "text": "Exercise regularly to rebuild strength"
          },
          {
            "label": "",
            "text": "Protect your skin from the sun, especially if you have had GVHD"
          },
          {
            "label": "",
            "text": "Maintain good dental hygiene and regular dental check-ups"
          },
          {
            "label": "",
            "text": "Get enough sleep"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Travel",
        "content": "International travel is usually possible once your team approves. Carry a summary of your medical history and medicines, and check vaccination requirements for your destination.",
        "paragraphs": [
          "International travel is usually possible once your team approves. Carry a summary of your medical history and medicines, and check vaccination requirements for your destination."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Contact your team if you notice: Persistent fever or infections New fatigue, bruising or bleeding Breathlessness Signs of chronic GVHD, such as dry eyes, mouth sores or skin tightening",
    "faqs": [
      {
        "q": "Will I need follow-up for life?",
        "a": "Long-term follow-up is recommended, though visits become less frequent over time."
      },
      {
        "q": "Can I have children after transplant?",
        "a": "Some people can, either naturally or with assisted reproduction. Discuss options early."
      },
      {
        "q": "Will my blood group change?",
        "a": "After a donor transplant with a different blood group, your blood group gradually changes to match your donor's."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Life After Bone Marrow Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Life After Bone Marrow Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-096",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "understanding-chronic-kidney-disease",
    "title": "Understanding Chronic Kidney Disease",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Chronic kidney disease (CKD) means the kidneys are gradually losing their ability to filter waste and excess fluid from the blood. It often develops silently over years. Early detection can slow its progress.",
    "diagram": null,
    "sections": [
      {
        "heading": "What do the kidneys do?",
        "content": "Filter waste and excess water to make urine Balance salts and minerals Help control blood pressure Make a hormone that helps produce red blood cells Keep bones healthy by activating vitamin D",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Filter waste and excess water to make urine"
          },
          {
            "label": "",
            "text": "Balance salts and minerals"
          },
          {
            "label": "",
            "text": "Help control blood pressure"
          },
          {
            "label": "",
            "text": "Make a hormone that helps produce red blood cells"
          },
          {
            "label": "",
            "text": "Keep bones healthy by activating vitamin D"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The five stages of CKD",
        "content": "Doctors measure kidney function using eGFR (estimated glomerular filtration rate), calculated from a blood creatinine test.",
        "paragraphs": [
          "Doctors measure kidney function using eGFR (estimated glomerular filtration rate), calculated from a blood creatinine test."
        ],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Stage",
            "eGFR (approx.)",
            "What it means"
          ],
          "rows": [
            [
              "1",
              "90 or above",
              "Normal function with signs of kidney damage"
            ],
            [
              "2",
              "60–89",
              "Mildly reduced"
            ],
            [
              "3",
              "30–59",
              "Moderately reduced"
            ],
            [
              "4",
              "15–29",
              "Severely reduced"
            ],
            [
              "5",
              "Below 15",
              "Kidney failure (end-stage kidney disease)"
            ]
          ]
        }
      },
      {
        "heading": "Symptoms",
        "content": "Early CKD usually has no symptoms . As it advances, people may notice: Swelling of the feet, ankles or around the eyes Tiredness and weakness Reduced appetite, nausea or vomiting Itching Changes in urination, including foamy urine or passing urine at night Breathlessness Muscle cramps Difficulty concentrating",
        "paragraphs": [
          "Early CKD usually has no symptoms . As it advances, people may notice:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Swelling of the feet, ankles or around the eyes"
          },
          {
            "label": "",
            "text": "Tiredness and weakness"
          },
          {
            "label": "",
            "text": "Reduced appetite, nausea or vomiting"
          },
          {
            "label": "",
            "text": "Itching"
          },
          {
            "label": "",
            "text": "Changes in urination, including foamy urine or passing urine at night"
          },
          {
            "label": "",
            "text": "Breathlessness"
          },
          {
            "label": "",
            "text": "Muscle cramps"
          },
          {
            "label": "",
            "text": "Difficulty concentrating"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Main causes",
        "content": "Diabetes: the leading cause High blood pressure Glomerulonephritis: inflammation of the kidney's filters Polycystic kidney disease: an inherited condition Repeated kidney infections, kidney stones or blockages Long-term use of certain painkillers or unregulated herbal remedies",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Diabetes:",
            "text": "the leading cause"
          },
          {
            "label": "",
            "text": "High blood pressure"
          },
          {
            "label": "Glomerulonephritis:",
            "text": "inflammation of the kidney's filters"
          },
          {
            "label": "Polycystic kidney disease:",
            "text": "an inherited condition"
          },
          {
            "label": "",
            "text": "Repeated kidney infections, kidney stones or blockages"
          },
          {
            "label": "",
            "text": "Long-term use of certain painkillers or unregulated herbal remedies"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diagnosis",
        "content": "People with diabetes or high blood pressure should have these tests at least once a year. Blood test for creatinine and eGFR Urine test for protein (albumin) and blood Ultrasound of the kidneys Sometimes a kidney biopsy",
        "paragraphs": [
          "People with diabetes or high blood pressure should have these tests at least once a year."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Blood test for creatinine and eGFR"
          },
          {
            "label": "",
            "text": "Urine test for protein (albumin) and blood"
          },
          {
            "label": "",
            "text": "Ultrasound of the kidneys"
          },
          {
            "label": "",
            "text": "Sometimes a kidney biopsy"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Treatment options",
        "content": "Controlling blood sugar and blood pressure Medicines that protect the kidneys Diet changes, such as reducing salt and, in some stages, protein and potassium Avoiding medicines that harm the kidneys, such as some painkillers Treating anaemia and bone problems",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Controlling blood sugar and blood pressure"
          },
          {
            "label": "",
            "text": "Medicines that protect the kidneys"
          },
          {
            "label": "",
            "text": "Diet changes, such as reducing salt and, in some stages, protein and potassium"
          },
          {
            "label": "",
            "text": "Avoiding medicines that harm the kidneys, such as some painkillers"
          },
          {
            "label": "",
            "text": "Treating anaemia and bone problems"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When kidneys fail",
        "content": "At stage 5, the options are: Dialysis: haemodialysis or peritoneal dialysis Kidney transplant: often the best long-term option for suitable patients Conservative care: focusing on symptoms and quality of life",
        "paragraphs": [
          "At stage 5, the options are:"
        ],
        "bullets": [
          {
            "label": "Dialysis:",
            "text": "haemodialysis or peritoneal dialysis"
          },
          {
            "label": "Kidney transplant:",
            "text": "often the best long-term option for suitable patients"
          },
          {
            "label": "Conservative care:",
            "text": "focusing on symptoms and quality of life"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "See a nephrologist if your eGFR is falling, protein is found in your urine, or you have diabetes or high blood pressure with abnormal kidney tests.",
    "faqs": [
      {
        "q": "Can CKD be reversed?",
        "a": "Damage usually cannot be reversed, but progression can often be slowed significantly."
      },
      {
        "q": "Does drinking more water cure kidney disease?",
        "a": "No. Fluid needs vary, and some patients need to limit fluids. Follow your doctor's advice."
      },
      {
        "q": "Is CKD always progressive?",
        "a": "Not always. Many people remain stable for years with good control."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Chronic Kidney Disease (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Chronic Kidney Disease adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-097",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "when-does-a-patient-need-a-kidney-transplant",
    "title": "When Does a Patient Need a Kidney Transplant?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A kidney transplant is considered when the kidneys have failed or are close to failing. For many patients, transplantation offers longer life and better quality of life than long-term dialysis.",
    "diagram": null,
    "sections": [
      {
        "heading": "When is it recommended?",
        "content": "A transplant is usually considered for people with: End-stage kidney disease (CKD stage 5), with eGFR below about 15 Kidney function steadily declining towards failure, often with eGFR below about 20 Patients already on dialysis who are fit for surgery",
        "paragraphs": [
          "A transplant is usually considered for people with:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "End-stage kidney disease (CKD stage 5), with eGFR below about 15"
          },
          {
            "label": "",
            "text": "Kidney function steadily declining towards failure, often with eGFR below about 20"
          },
          {
            "label": "",
            "text": "Patients already on dialysis who are fit for surgery"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Pre-emptive transplant",
        "content": "A pre-emptive transplant is done before dialysis begins, usually with a living donor. It is associated with better outcomes and avoids the burden of dialysis. Early referral to a transplant team makes this possible.",
        "paragraphs": [
          "A pre-emptive transplant is done before dialysis begins, usually with a living donor. It is associated with better outcomes and avoids the burden of dialysis. Early referral to a transplant team makes this possible."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Transplant vs dialysis",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "Dialysis",
            "Transplant"
          ],
          "rows": [
            [
              "How it works",
              "Machine or fluid filters the blood",
              "A new kidney does the work"
            ],
            [
              "Time commitment",
              "Several sessions a week or daily exchanges",
              "Regular follow-up visits"
            ],
            [
              "Diet and fluids",
              "More restricted",
              "Fewer restrictions"
            ],
            [
              "Energy and quality of life",
              "Often reduced",
              "Usually better"
            ],
            [
              "Long-term survival",
              "Lower on average",
              "Generally better for suitable patients"
            ],
            [
              "Lifelong medicines",
              "Some",
              "Daily immunosuppressants"
            ]
          ]
        }
      },
      {
        "heading": "Who is eligible?",
        "content": "The transplant team assesses: Age alone does not rule out a transplant. Fitness matters more. Overall health: heart, lungs and blood vessels Infections: active infections must be treated first Cancer: active cancer usually needs to be treated, with a period of remission Ability to take lifelong medicines and attend follow-up Psychological and social support",
        "paragraphs": [
          "The transplant team assesses:",
          "Age alone does not rule out a transplant. Fitness matters more."
        ],
        "bullets": [
          {
            "label": "Overall health:",
            "text": "heart, lungs and blood vessels"
          },
          {
            "label": "Infections:",
            "text": "active infections must be treated first"
          },
          {
            "label": "Cancer:",
            "text": "active cancer usually needs to be treated, with a period of remission"
          },
          {
            "label": "",
            "text": "Ability to take lifelong medicines and attend follow-up"
          },
          {
            "label": "",
            "text": "Psychological and social support"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Who may not be suitable?",
        "content": "Some conditions can be treated first so that a transplant becomes possible later. Severe heart or lung disease that makes surgery unsafe Active cancer or uncontrolled infection Inability to follow treatment, such as active substance misuse Very limited life expectancy from other conditions",
        "paragraphs": [
          "Some conditions can be treated first so that a transplant becomes possible later."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Severe heart or lung disease that makes surgery unsafe"
          },
          {
            "label": "",
            "text": "Active cancer or uncontrolled infection"
          },
          {
            "label": "",
            "text": "Inability to follow treatment, such as active substance misuse"
          },
          {
            "label": "",
            "text": "Very limited life expectancy from other conditions"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The evaluation process",
        "content": "Expect blood tests, heart tests, imaging, dental and gynaecological check-ups, infection screening, blood group and tissue typing, and counselling for both recipient and donor.",
        "paragraphs": [
          "Expect blood tests, heart tests, imaging, dental and gynaecological check-ups, infection screening, blood group and tissue typing, and counselling for both recipient and donor."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Ask your nephrologist about transplant referral once your kidney function reaches stage 4. Early discussion gives time to evaluate potential donors.",
    "faqs": [
      {
        "q": "Is a transplant a cure for kidney failure?",
        "a": "It is a treatment, not a cure. It requires lifelong medicines and follow-up."
      },
      {
        "q": "Can I have a transplant if I am already on dialysis?",
        "a": "Yes. Many transplant recipients have been on dialysis."
      },
      {
        "q": "Do I need to stop dialysis immediately after transplant?",
        "a": "Most people no longer need dialysis once the new kidney works well, though some need it briefly."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for When Does a Patient Need a Kidney Transplant? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for When Does a Patient Need a Kidney Transplant? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-098",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "kidney-transplant-procedure-explained",
    "title": "Kidney Transplant Procedure Explained",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A kidney transplant places a healthy kidney from a donor into a person whose kidneys have failed. One healthy kidney can do the work of two. This article explains how the transplant works; see our separate guide on what happens on the day of surgery.",
    "diagram": {
      "title": "How the new kidney connects",
      "steps": [
        {
          "number": "1",
          "title": "Placement",
          "description": "Lower abdomen, right or left side"
        },
        {
          "number": "2",
          "title": "Artery",
          "description": "Joined to an artery supplying the leg"
        },
        {
          "number": "3",
          "title": "Vein",
          "description": "Joined to a nearby vein"
        },
        {
          "number": "4",
          "title": "Ureter",
          "description": "Connected to the bladder; urine flows"
        }
      ]
    },
    "sections": [
      {
        "heading": "Where is the new kidney placed?",
        "content": "Unlike what many people expect, the new kidney is not placed where the old kidneys are. It is placed in the lower abdomen , on the right or left side, just above the groin. This location: Allows easy connection to large blood vessels Keeps the kidney close to the bladder Makes it easier to monitor and, if needed, biopsy",
        "paragraphs": [
          "Unlike what many people expect, the new kidney is not placed where the old kidneys are. It is placed in the lower abdomen , on the right or left side, just above the groin. This location:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Allows easy connection to large blood vessels"
          },
          {
            "label": "",
            "text": "Keeps the kidney close to the bladder"
          },
          {
            "label": "",
            "text": "Makes it easier to monitor and, if needed, biopsy"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What happens to the old kidneys?",
        "content": "Usually, the patient's own kidneys are left in place . They are removed only in specific situations, such as repeated infections, very large polycystic kidneys or uncontrolled blood pressure.",
        "paragraphs": [
          "Usually, the patient's own kidneys are left in place . They are removed only in specific situations, such as repeated infections, very large polycystic kidneys or uncontrolled blood pressure."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "How is the kidney connected?",
        "content": "The surgeon makes three connections: A small temporary tube called a stent is often placed in the ureter to help healing. It is removed a few weeks later in a short procedure. 1. The kidney's artery is joined to an artery in the pelvis 2. The kidney's vein is joined to a nearby vein 3. The ureter (the tube that carries urine) is connected to the bladder",
        "paragraphs": [
          "The surgeon makes three connections:",
          "A small temporary tube called a stent is often placed in the ureter to help healing. It is removed a few weeks later in a short procedure."
        ],
        "bullets": [],
        "callouts": [],
        "steps": [
          {
            "number": 1,
            "text": "The kidney's artery is joined to an artery in the pelvis"
          },
          {
            "number": 2,
            "text": "The kidney's vein is joined to a nearby vein"
          },
          {
            "number": 3,
            "text": "The ureter (the tube that carries urine) is connected to the bladder"
          }
        ]
      },
      {
        "heading": "When does the new kidney start working?",
        "content": "Kidneys from living donors often start producing urine immediately Kidneys from deceased donors may take days or weeks to start working fully; temporary dialysis may be needed",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Kidneys from living donors often start producing urine immediately"
          },
          {
            "label": "",
            "text": "Kidneys from deceased donors may take days or weeks to start working fully; temporary dialysis may be needed"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Preventing rejection",
        "content": "The immune system sees the new kidney as foreign. Immunosuppressant medicines are started around the time of surgery and taken for life to prevent rejection.",
        "paragraphs": [
          "The immune system sees the new kidney as foreign. Immunosuppressant medicines are started around the time of surgery and taken for life to prevent rejection."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Special types of transplant",
        "content": "ABO-incompatible transplant: possible between donors and recipients with different blood groups, using special treatment to remove antibodies before surgery Paired exchange (swap) transplant: two incompatible donor-recipient pairs exchange kidneys, where legally permitted",
        "paragraphs": [],
        "bullets": [
          {
            "label": "ABO-incompatible transplant:",
            "text": "possible between donors and recipients with different blood groups, using special treatment to remove antibodies before surgery"
          },
          {
            "label": "Paired exchange (swap) transplant:",
            "text": "two incompatible donor-recipient pairs exchange kidneys, where legally permitted"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How long does a transplanted kidney last?",
        "content": "On average: Taking medicines regularly and attending follow-up are key to long-term success. If a kidney eventually fails, another transplant may be possible. Living donor kidneys often last 15 to 20 years or more Deceased donor kidneys often last 10 to 15 years",
        "paragraphs": [
          "On average:",
          "Taking medicines regularly and attending follow-up are key to long-term success. If a kidney eventually fails, another transplant may be possible."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Living donor kidneys often last 15 to 20 years or more"
          },
          {
            "label": "",
            "text": "Deceased donor kidneys often last 10 to 15 years"
          }
        ],
        "callouts": []
      }
    ],
    "whenToConsult": "A transplant nephrologist and surgeon will explain whether you are suitable and which type of transplant fits your situation.",
    "faqs": [
      {
        "q": "Will I have three kidneys after a transplant?",
        "a": "Often yes, as the native kidneys are usually left in place."
      },
      {
        "q": "Is a kidney transplant major surgery?",
        "a": "Yes, it is major surgery, usually lasting 3 to 4 hours."
      },
      {
        "q": "Can I have a second transplant?",
        "a": "Yes, if a transplanted kidney fails and you are still fit."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Kidney Transplant Procedure Explained (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Kidney Transplant Procedure Explained adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-099",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "living-donor-versus-deceased-donor-transplantation",
    "title": "Living Donor Versus Deceased Donor Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A donated kidney can come from a living person or from someone who has died. Both can be life- changing. Understanding the differences helps patients and families plan.",
    "diagram": null,
    "sections": [
      {
        "heading": "Living donor transplant",
        "content": "A healthy person donates one of their two kidneys. The donor lives normally with one kidney. Advantages: Better long-term kidney survival on average The kidney usually works immediately Surgery can be planned at the best time, including before dialysis begins Shorter or no waiting time",
        "paragraphs": [
          "A healthy person donates one of their two kidneys. The donor lives normally with one kidney.",
          "Advantages:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Better long-term kidney survival on average"
          },
          {
            "label": "",
            "text": "The kidney usually works immediately"
          },
          {
            "label": "",
            "text": "Surgery can be planned at the best time, including before dialysis begins"
          },
          {
            "label": "",
            "text": "Shorter or no waiting time"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Deceased donor transplant",
        "content": "Kidneys are donated by a person who has been declared brain dead , with consent from their family. Allocation follows a waiting list managed by state and national organ-sharing networks. Considerations: Waiting times can be long, often several years The kidney may take time to start working Average kidney lifespan is somewhat shorter than from living donors",
        "paragraphs": [
          "Kidneys are donated by a person who has been declared brain dead , with consent from their family. Allocation follows a waiting list managed by state and national organ-sharing networks.",
          "Considerations:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Waiting times can be long, often several years"
          },
          {
            "label": "",
            "text": "The kidney may take time to start working"
          },
          {
            "label": "",
            "text": "Average kidney lifespan is somewhat shorter than from living donors"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Comparison",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Feature",
            "Living donor",
            "Deceased donor"
          ],
          "rows": [
            [
              "Waiting time",
              "Short, planned",
              "Often years"
            ],
            [
              "Kidney starts working",
              "Usually immediately",
              "May be delayed"
            ],
            [
              "Average kidney lifespan",
              "Longer",
              "Somewhat shorter"
            ],
            [
              "Surgery timing",
              "Planned",
              "At short notice"
            ],
            [
              "Donor surgery",
              "Required",
              "Not applicable"
            ]
          ]
        }
      },
      {
        "heading": "Who can be a living donor in India?",
        "content": "Living organ donation in India is regulated by the Transplantation of Human Organs and Tissues Act (THOTA) : Near relatives , such as parents, siblings, children, spouse and grandparents, can donate after verification of the relationship Donors who are not near relatives may donate only with approval from an official Authorisation Committee , which checks that the donation is voluntary and not commercial Buying or selling organs is illegal and punishable by law Swap (paired) donation between families is permitted under the law with appropriate approvals",
        "paragraphs": [
          "Living organ donation in India is regulated by the Transplantation of Human Organs and Tissues Act (THOTA) :"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Near relatives , such as parents, siblings, children, spouse and grandparents, can donate after verification of the relationship"
          },
          {
            "label": "",
            "text": "Donors who are not near relatives may donate only with approval from an official Authorisation Committee , which checks that the donation is voluntary and not commercial"
          },
          {
            "label": "",
            "text": "Buying or selling organs is illegal and punishable by law"
          },
          {
            "label": "",
            "text": "Swap (paired) donation between families is permitted under the law with appropriate approvals"
          }
        ],
        "callouts": []
      },
      {
        "heading": "International patients",
        "content": "Patients travelling to India usually need a related living donor. Additional documents are required, including proof of relationship and verification from their country's embassy or relevant authority. The transplant hospital guides families through this process.",
        "paragraphs": [
          "Patients travelling to India usually need a related living donor. Additional documents are required, including proof of relationship and verification from their country's embassy or relevant authority. The transplant hospital guides families through this process."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Is living donation safe for the donor?",
        "content": "Donors undergo thorough medical and psychological screening. The surgery is usually done by laparoscopy (keyhole surgery). Most donors return home in a few days and to normal activities within several weeks. Long- term risks are low for carefully selected donors, and lifelong check-ups are recommended.",
        "paragraphs": [
          "Donors undergo thorough medical and psychological screening. The surgery is usually done by laparoscopy (keyhole surgery). Most donors return home in a few days and to normal activities within several weeks. Long- term risks are low for carefully selected donors, and lifelong check-ups are recommended."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Organ donation pledges",
        "content": "Anyone can pledge to donate organs after death. Discussing this with family is important, as their consent is needed.",
        "paragraphs": [
          "Anyone can pledge to donate organs after death. Discussing this with family is important, as their consent is needed."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Can a friend donate a kidney to me?",
        "a": "Only with approval from the Authorisation Committee, which verifies that there is no commercial arrangement."
      },
      {
        "q": "Does donating a kidney shorten the donor's life?",
        "a": "For carefully screened donors, long-term health is generally very good."
      },
      {
        "q": "Can a donor have children later?",
        "a": "Yes. Women can usually have healthy pregnancies after donating, with appropriate monitoring."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Living Donor Versus Deceased Donor Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Living Donor Versus Deceased Donor Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-100",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "how-is-kidney-donor-compatibility-assessed",
    "title": "How Is Kidney Donor Compatibility Assessed?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Before a kidney transplant, doctors carry out several tests to check whether a donor's kidney is likely to be accepted by the recipient's immune system. This reduces the risk of rejection.",
    "diagram": {
      "title": "Compatibility testing",
      "steps": [
        {
          "number": "1",
          "title": "Blood group",
          "description": "Checks ABO compatibility"
        },
        {
          "number": "2",
          "title": "HLA typing",
          "description": "Compares tissue markers"
        },
        {
          "number": "3",
          "title": "Antibody screen",
          "description": "Checks recipient antibodies against donors"
        },
        {
          "number": "4",
          "title": "Crossmatch",
          "description": "Final test mixing donor cells with recipient blood"
        }
      ]
    },
    "sections": [
      {
        "heading": "1. Blood group (ABO) compatibility",
        "content": "Blood group compatibility for kidney donation follows similar rules to blood transfusion: The Rh factor (positive or negative) does not matter for kidney transplantation.",
        "paragraphs": [
          "Blood group compatibility for kidney donation follows similar rules to blood transfusion:",
          "The Rh factor (positive or negative) does not matter for kidney transplantation."
        ],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Recipient blood group",
            "Compatible donor blood groups"
          ],
          "rows": [
            [
              "O",
              "O"
            ],
            [
              "A",
              "A, O"
            ],
            [
              "B",
              "B, O"
            ],
            [
              "AB",
              "A, B, AB, O"
            ]
          ]
        }
      },
      {
        "heading": "2. HLA tissue typing",
        "content": "HLA (human leukocyte antigens) are markers on cells that help the immune system recognise what belongs to the body. Donor and recipient HLA types are compared. A closer match may improve long-term kidney survival, but a perfect match is not required . Many successful transplants occur with partial matches.",
        "paragraphs": [
          "HLA (human leukocyte antigens) are markers on cells that help the immune system recognise what belongs to the body. Donor and recipient HLA types are compared. A closer match may improve long-term kidney survival, but a perfect match is not required . Many successful transplants occur with partial matches."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "3. Antibody screening",
        "content": "Some recipients have antibodies against certain HLA types, often from previous pregnancies, blood transfusions or transplants. A test called PRA or single antigen testing identifies these antibodies, helping doctors understand which donors may be unsuitable.",
        "paragraphs": [
          "Some recipients have antibodies against certain HLA types, often from previous pregnancies, blood transfusions or transplants. A test called PRA or single antigen testing identifies these antibodies, helping doctors understand which donors may be unsuitable."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "4. Crossmatch test",
        "content": "The crossmatch is a key final test. The recipient's blood is mixed with the donor's cells to check whether the recipient has antibodies that would attack the donor kidney. The crossmatch is often repeated close to the date of surgery. Negative crossmatch: good; the transplant can usually proceed Positive crossmatch: indicates a higher risk of rejection; special treatment or a different donor may be needed",
        "paragraphs": [
          "The crossmatch is a key final test. The recipient's blood is mixed with the donor's cells to check whether the recipient has antibodies that would attack the donor kidney.",
          "The crossmatch is often repeated close to the date of surgery."
        ],
        "bullets": [
          {
            "label": "Negative crossmatch:",
            "text": "good; the transplant can usually proceed"
          },
          {
            "label": "Positive crossmatch:",
            "text": "indicates a higher risk of rejection; special treatment or a different donor may be needed"
          }
        ],
        "callouts": []
      },
      {
        "heading": "5. Donor health assessment",
        "content": "Compatibility is not only about immune matching. Donors also undergo: Kidney function tests and urine tests Imaging, usually a CT scan, to check kidney anatomy Heart and general health checks Infection screening Psychological assessment",
        "paragraphs": [
          "Compatibility is not only about immune matching. Donors also undergo:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Kidney function tests and urine tests"
          },
          {
            "label": "",
            "text": "Imaging, usually a CT scan, to check kidney anatomy"
          },
          {
            "label": "",
            "text": "Heart and general health checks"
          },
          {
            "label": "",
            "text": "Infection screening"
          },
          {
            "label": "",
            "text": "Psychological assessment"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What if the donor is not compatible?",
        "content": "Options may include: ABO-incompatible transplant: antibodies are reduced before surgery with special treatment Desensitisation: treatment to lower harmful antibodies Paired kidney exchange (swap): two incompatible pairs exchange donors, with legal approval Waiting for a deceased donor kidney",
        "paragraphs": [
          "Options may include:"
        ],
        "bullets": [
          {
            "label": "ABO-incompatible transplant:",
            "text": "antibodies are reduced before surgery with special treatment"
          },
          {
            "label": "Desensitisation:",
            "text": "treatment to lower harmful antibodies"
          },
          {
            "label": "Paired kidney exchange (swap):",
            "text": "two incompatible pairs exchange donors, with legal approval"
          },
          {
            "label": "",
            "text": "Waiting for a deceased donor kidney"
          }
        ],
        "callouts": []
      },
      {
        "heading": "How long does testing take?",
        "content": "Donor and recipient evaluation usually takes several weeks, depending on test results and legal documentation.",
        "paragraphs": [
          "Donor and recipient evaluation usually takes several weeks, depending on test results and legal documentation."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "Start the compatibility testing process early with your transplant team, especially if you have more than one potential donor.",
    "faqs": [
      {
        "q": "Does the donor need the same blood group?",
        "a": "Not necessarily. Compatible groups can donate, and ABO-incompatible transplants are possible."
      },
      {
        "q": "Is a perfect HLA match necessary?",
        "a": "No. Many transplants succeed with partial matches."
      },
      {
        "q": "What does a positive crossmatch mean?",
        "a": "That the recipient may react against the donor kidney. Your team will discuss options."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for How Is Kidney Donor Compatibility Assessed? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for How Is Kidney Donor Compatibility Assessed? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-101",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "preparing-for-kidney-transplantation",
    "title": "Preparing for Kidney Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "Preparing well for a kidney transplant helps surgery go smoothly and supports long-term success. Preparation involves medical tests, lifestyle changes, legal documentation and practical planning.",
    "diagram": {
      "title": "Preparation pathway",
      "steps": [
        {
          "number": "1",
          "title": "Medical work-up",
          "description": "Recipient and donor tests"
        },
        {
          "number": "2",
          "title": "Fitness and vaccines",
          "description": "Infections treated; vaccines updated"
        },
        {
          "number": "3",
          "title": "Legal approval",
          "description": "Documents and committee clearance"
        },
        {
          "number": "4",
          "title": "Surgery scheduled",
          "description": "Admission planned"
        }
      ]
    },
    "sections": [
      {
        "heading": "Medical preparation for the recipient",
        "content": "Blood and urine tests: including blood group, tissue typing and infection screening such as hepatitis B, hepatitis C, HIV and tuberculosis Heart evaluation: ECG, echocardiogram and sometimes a stress test or angiogram Imaging: chest X-ray, abdominal ultrasound and sometimes scans of blood vessels Dental check-up: to treat any infection before surgery Cancer screening: as appropriate for age, such as Pap smear or mammogram Vaccinations: updated before transplant, as some vaccines cannot be given afterwards",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Blood and urine tests:",
            "text": "including blood group, tissue typing and infection screening such as hepatitis B, hepatitis C, HIV and tuberculosis"
          },
          {
            "label": "Heart evaluation:",
            "text": "ECG, echocardiogram and sometimes a stress test or angiogram"
          },
          {
            "label": "Imaging:",
            "text": "chest X-ray, abdominal ultrasound and sometimes scans of blood vessels"
          },
          {
            "label": "Dental check-up:",
            "text": "to treat any infection before surgery"
          },
          {
            "label": "Cancer screening:",
            "text": "as appropriate for age, such as Pap smear or mammogram"
          },
          {
            "label": "Vaccinations:",
            "text": "updated before transplant, as some vaccines cannot be given afterwards"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Medical preparation for the living donor",
        "content": "The donor undergoes a detailed evaluation to make sure donation is safe, including kidney function, imaging, heart and general health checks, and counselling.",
        "paragraphs": [
          "The donor undergoes a detailed evaluation to make sure donation is safe, including kidney function, imaging, heart and general health checks, and counselling."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Getting healthy",
        "content": "Stop smoking completely Maintain a healthy weight Control blood sugar and blood pressure Stay active as much as possible Follow your dialysis schedule and diet carefully if you are on dialysis",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Stop smoking completely"
          },
          {
            "label": "",
            "text": "Maintain a healthy weight"
          },
          {
            "label": "",
            "text": "Control blood sugar and blood pressure"
          },
          {
            "label": "",
            "text": "Stay active as much as possible"
          },
          {
            "label": "",
            "text": "Follow your dialysis schedule and diet carefully if you are on dialysis"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Emotional preparation",
        "content": "Understand the risks and benefits Talk openly with your donor and family Counselling is part of the process for both recipient and donor",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Understand the risks and benefits"
          },
          {
            "label": "",
            "text": "Talk openly with your donor and family"
          },
          {
            "label": "",
            "text": "Counselling is part of the process for both recipient and donor"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Legal documentation in India",
        "content": "Transplants in India require legal approval under the Transplantation of Human Organs and Tissues Act . Documents typically include: For international patients , additional documents are needed, including verification from the embassy or relevant authority of the home country. Start this process early, as it can take time. Proof of identity for donor and recipient Proof of relationship, such as birth certificates or family documents Consent forms Approval from the hospital or state Authorisation Committee , where required",
        "paragraphs": [
          "Transplants in India require legal approval under the Transplantation of Human Organs and Tissues Act .",
          "Documents typically include:",
          "For international patients , additional documents are needed, including verification from the embassy or relevant authority of the home country. Start this process early, as it can take time."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Proof of identity for donor and recipient"
          },
          {
            "label": "",
            "text": "Proof of relationship, such as birth certificates or family documents"
          },
          {
            "label": "",
            "text": "Consent forms"
          },
          {
            "label": "",
            "text": "Approval from the hospital or state Authorisation Committee , where required"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Practical preparation",
        "content": "Plan time off work for both recipient and donor International patients usually need to stay near the hospital for several weeks after surgery Arrange a caregiver to support recovery Prepare a list of all medicines",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Plan time off work for both recipient and donor"
          },
          {
            "label": "",
            "text": "International patients usually need to stay near the hospital for several weeks after surgery"
          },
          {
            "label": "",
            "text": "Arrange a caregiver to support recovery"
          },
          {
            "label": "",
            "text": "Prepare a list of all medicines"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Before admission",
        "content": "Follow instructions about fasting and medicines Inform your team if you develop fever, cough or any infection If on dialysis, you may need a session shortly before surgery",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Follow instructions about fasting and medicines"
          },
          {
            "label": "",
            "text": "Inform your team if you develop fever, cough or any infection"
          },
          {
            "label": "",
            "text": "If on dialysis, you may need a session shortly before surgery"
          }
        ],
        "callouts": []
      },
      {
        "heading": "When should you contact your team?",
        "content": "Contact your team if you become unwell, develop an infection, or if anything changes in your health or your donor's health during preparation.",
        "paragraphs": [
          "Contact your team if you become unwell, develop an infection, or if anything changes in your health or your donor's health during preparation."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "How long does preparation take?",
        "a": "Often several weeks to a few months, depending on tests and legal approvals."
      },
      {
        "q": "Why do I need dental treatment?",
        "a": "Infections in the mouth can become dangerous after transplant due to immunosuppression."
      },
      {
        "q": "Can my surgery be postponed?",
        "a": "Yes, if an infection or new health issue is found. Safety comes first."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Preparing for Kidney Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Preparing for Kidney Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-102",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "what-happens-during-kidney-transplant-surgery",
    "title": "What Happens During Kidney Transplant Surgery?",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "For living donor transplants, the donor and recipient usually have surgery on the same day, often in adjoining operating theatres. Here is what typically happens.",
    "diagram": {
      "title": "Surgery day",
      "steps": [
        {
          "number": "1",
          "title": "Admission",
          "description": "Final checks and crossmatch"
        },
        {
          "number": "2",
          "title": "Donor surgery",
          "description": "Keyhole removal of one kidney"
        },
        {
          "number": "3",
          "title": "Recipient surgery",
          "description": "New kidney connected"
        },
        {
          "number": "4",
          "title": "Recovery",
          "description": "Close monitoring in the transplant unit"
        }
      ]
    },
    "sections": [
      {
        "heading": "Admission",
        "content": "Admission usually 1 to 2 days before surgery Final blood tests, including a repeat crossmatch Anaesthesia review Dialysis, if needed, to optimise the recipient's condition Fasting from the night before",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Admission usually 1 to 2 days before surgery"
          },
          {
            "label": "",
            "text": "Final blood tests, including a repeat crossmatch"
          },
          {
            "label": "",
            "text": "Anaesthesia review"
          },
          {
            "label": "",
            "text": "Dialysis, if needed, to optimise the recipient's condition"
          },
          {
            "label": "",
            "text": "Fasting from the night before"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The donor's surgery",
        "content": "Performed under general anaesthesia Usually done by laparoscopic (keyhole) surgery through small incisions, with one slightly larger cut to remove the kidney The surgery takes about 2 to 4 hours The kidney is carefully removed, flushed with a cold preservation solution and taken to the recipient's theatre",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Performed under general anaesthesia"
          },
          {
            "label": "",
            "text": "Usually done by laparoscopic (keyhole) surgery through small incisions, with one slightly larger cut to remove the kidney"
          },
          {
            "label": "",
            "text": "The surgery takes about 2 to 4 hours"
          },
          {
            "label": "",
            "text": "The kidney is carefully removed, flushed with a cold preservation solution and taken to the recipient's theatre"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The recipient's surgery",
        "content": "Immunosuppressant medicines are started around the time of surgery. Performed under general anaesthesia An incision is made in the lower abdomen, on the right or left side The new kidney is placed and connected to an artery, a vein and the bladder A temporary stent may be placed in the ureter The surgery usually takes 3 to 4 hours",
        "paragraphs": [
          "Immunosuppressant medicines are started around the time of surgery."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Performed under general anaesthesia"
          },
          {
            "label": "",
            "text": "An incision is made in the lower abdomen, on the right or left side"
          },
          {
            "label": "",
            "text": "The new kidney is placed and connected to an artery, a vein and the bladder"
          },
          {
            "label": "",
            "text": "A temporary stent may be placed in the ureter"
          },
          {
            "label": "",
            "text": "The surgery usually takes 3 to 4 hours"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Waking up",
        "content": "The recipient wakes up in the recovery area or transplant ICU with: Many recipients notice the new kidney producing urine soon after surgery, especially with a living donor kidney. A urinary catheter to measure urine output A central line in the neck or chest for medicines and fluids Possibly a surgical drain near the incision Pain relief through a drip or epidural",
        "paragraphs": [
          "The recipient wakes up in the recovery area or transplant ICU with:",
          "Many recipients notice the new kidney producing urine soon after surgery, especially with a living donor kidney."
        ],
        "bullets": [
          {
            "label": "",
            "text": "A urinary catheter to measure urine output"
          },
          {
            "label": "",
            "text": "A central line in the neck or chest for medicines and fluids"
          },
          {
            "label": "",
            "text": "Possibly a surgical drain near the incision"
          },
          {
            "label": "",
            "text": "Pain relief through a drip or epidural"
          }
        ],
        "callouts": []
      },
      {
        "heading": "The first few days",
        "content": "For the recipient: For the donor: Close monitoring of urine output, fluid balance and blood tests Walking begins within a day or two Catheter and drains are removed over several days Hospital stay of about 5 to 10 days Walking the next day Hospital stay of about 2 to 4 days Return to light activities within a few weeks",
        "paragraphs": [
          "For the recipient:",
          "For the donor:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Close monitoring of urine output, fluid balance and blood tests"
          },
          {
            "label": "",
            "text": "Walking begins within a day or two"
          },
          {
            "label": "",
            "text": "Catheter and drains are removed over several days"
          },
          {
            "label": "",
            "text": "Hospital stay of about 5 to 10 days"
          },
          {
            "label": "",
            "text": "Walking the next day"
          },
          {
            "label": "",
            "text": "Hospital stay of about 2 to 4 days"
          },
          {
            "label": "",
            "text": "Return to light activities within a few weeks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Possible risks of surgery",
        "content": "The transplant team monitors closely for these and treats them early. Bleeding or infection Blood clots Leakage or narrowing at the ureter connection Delayed kidney function Rejection",
        "paragraphs": [
          "The transplant team monitors closely for these and treats them early."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Bleeding or infection"
          },
          {
            "label": "",
            "text": "Blood clots"
          },
          {
            "label": "",
            "text": "Leakage or narrowing at the ureter connection"
          },
          {
            "label": "",
            "text": "Delayed kidney function"
          },
          {
            "label": "",
            "text": "Rejection"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Family support",
        "content": "Family members are kept informed during surgery. Having a dedicated caregiver for both donor and recipient makes recovery easier.",
        "paragraphs": [
          "Family members are kept informed during surgery. Having a dedicated caregiver for both donor and recipient makes recovery easier."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Is the donor awake during surgery?",
        "a": "No. Both donor and recipient are under general anaesthesia."
      },
      {
        "q": "How long will I be in hospital?",
        "a": "Recipients typically stay 5 to 10 days; donors 2 to 4 days."
      },
      {
        "q": "Will the new kidney work immediately?",
        "a": "Living donor kidneys usually start working quickly; some take a few days."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for What Happens During Kidney Transplant Surgery? (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for What Happens During Kidney Transplant Surgery? adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-103",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "recovery-after-kidney-transplantation",
    "title": "Recovery After Kidney Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "The first three months after a kidney transplant are the most important for recovery. This is when the risk of rejection and infection is highest and medicines are adjusted most often.",
    "diagram": {
      "title": "Recovery timeline",
      "steps": [
        {
          "number": "1",
          "title": "Week 1",
          "description": "Hospital monitoring; walking starts"
        },
        {
          "number": "2",
          "title": "Weeks 2 to 6",
          "description": "Frequent blood tests; stent removal"
        },
        {
          "number": "3",
          "title": "Months 2 to 3",
          "description": "Medicines adjusted; visits reduce"
        },
        {
          "number": "4",
          "title": "After 3 months",
          "description": "Return to most normal activities"
        }
      ]
    },
    "sections": [
      {
        "heading": "After discharge",
        "content": "Frequent blood tests: often two to three times a week at first, to check kidney function and medicine levels Clinic visits are gradually reduced as you recover International patients usually need to stay near the transplant centre for several weeks before returning home The ureteric stent, if placed, is usually removed after 4 to 6 weeks in a short procedure",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Frequent blood tests:",
            "text": "often two to three times a week at first, to check kidney function and medicine levels"
          },
          {
            "label": "",
            "text": "Clinic visits are gradually reduced as you recover"
          },
          {
            "label": "",
            "text": "International patients usually need to stay near the transplant centre for several weeks before returning home"
          },
          {
            "label": "",
            "text": "The ureteric stent, if placed, is usually removed after 4 to 6 weeks in a short procedure"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Medicines",
        "content": "You will take several medicines, including immunosuppressants to prevent rejection, and medicines to prevent infections. Take them exactly on time , every day. Never miss doses or stop medicines without advice.",
        "paragraphs": [
          "You will take several medicines, including immunosuppressants to prevent rejection, and medicines to prevent infections. Take them exactly on time , every day. Never miss doses or stop medicines without advice."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Self-monitoring at home",
        "content": "Many centres ask you to keep a daily record of: Weight Blood pressure Temperature Urine output, in the early weeks",
        "paragraphs": [
          "Many centres ask you to keep a daily record of:"
        ],
        "bullets": [
          {
            "label": "",
            "text": "Weight"
          },
          {
            "label": "",
            "text": "Blood pressure"
          },
          {
            "label": "",
            "text": "Temperature"
          },
          {
            "label": "",
            "text": "Urine output, in the early weeks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Wound care and activity",
        "content": "Keep the wound clean and dry Walk daily and build up gradually Avoid lifting more than about 5 kg for 6 to 8 weeks Avoid driving for several weeks, as advised",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Keep the wound clean and dry"
          },
          {
            "label": "",
            "text": "Walk daily and build up gradually"
          },
          {
            "label": "",
            "text": "Avoid lifting more than about 5 kg for 6 to 8 weeks"
          },
          {
            "label": "",
            "text": "Avoid driving for several weeks, as advised"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Diet and fluids",
        "content": "Drink the amount of fluid your team recommends Eat a balanced, low-salt diet Follow food safety rules: freshly cooked food, safe water, washed fruits and vegetables Avoid grapefruit and pomegranate unless your team approves, as they can affect medicine levels Avoid herbal remedies and supplements unless approved",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Drink the amount of fluid your team recommends"
          },
          {
            "label": "",
            "text": "Eat a balanced, low-salt diet"
          },
          {
            "label": "",
            "text": "Follow food safety rules: freshly cooked food, safe water, washed fruits and vegetables"
          },
          {
            "label": "",
            "text": "Avoid grapefruit and pomegranate unless your team approves, as they can affect medicine levels"
          },
          {
            "label": "",
            "text": "Avoid herbal remedies and supplements unless approved"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Signs of rejection",
        "content": "Rejection is when the immune system attacks the new kidney. Often it is detected only by blood tests , which is why regular testing is essential. Possible symptoms include: Most rejection episodes can be treated successfully if caught early. Reduced urine output Swelling or rapid weight gain Fever Pain or tenderness over the transplant Rising blood pressure",
        "paragraphs": [
          "Rejection is when the immune system attacks the new kidney. Often it is detected only by blood tests , which is why regular testing is essential. Possible symptoms include:",
          "Most rejection episodes can be treated successfully if caught early."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Reduced urine output"
          },
          {
            "label": "",
            "text": "Swelling or rapid weight gain"
          },
          {
            "label": "",
            "text": "Fever"
          },
          {
            "label": "",
            "text": "Pain or tenderness over the transplant"
          },
          {
            "label": "",
            "text": "Rising blood pressure"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Signs of infection",
        "content": "Fever or chills Burning while passing urine Cough or breathlessness Diarrhoea Redness or discharge from the wound",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Fever or chills"
          },
          {
            "label": "",
            "text": "Burning while passing urine"
          },
          {
            "label": "",
            "text": "Cough or breathlessness"
          },
          {
            "label": "",
            "text": "Diarrhoea"
          },
          {
            "label": "",
            "text": "Redness or discharge from the wound"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Returning to normal life",
        "content": "",
        "paragraphs": [],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Activity",
            "Typical timing"
          ],
          "rows": [
            [
              "Light daily activities",
              "A few weeks"
            ],
            [
              "Desk work",
              "About 6 to 12 weeks"
            ],
            [
              "Driving",
              "Several weeks, when cleared"
            ],
            [
              "Exercise",
              "Gradually; avoid contact sports initially"
            ]
          ]
        }
      },
      {
        "heading": "When should you contact your team?",
        "content": "Contact your transplant team immediately for any signs of rejection or infection, if you miss doses of medicines, or if you develop vomiting or diarrhoea that stops you taking medicines.",
        "paragraphs": [
          "Contact your transplant team immediately for any signs of rejection or infection, if you miss doses of medicines, or if you develop vomiting or diarrhoea that stops you taking medicines."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "How long will recovery take?",
        "a": "Most people feel significantly better within 6 to 12 weeks."
      },
      {
        "q": "Can rejection happen without symptoms?",
        "a": "Yes. That is why regular blood tests are vital."
      },
      {
        "q": "Can I eat normally after transplant?",
        "a": "Most people have fewer restrictions than on dialysis, but food safety and some limits remain."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Recovery After Kidney Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Recovery After Kidney Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-104",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "understanding-immunosuppressant-medicines",
    "title": "Understanding Immunosuppressant Medicines",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "After a transplant, the body's immune system sees the new organ as foreign and tries to attack it. Immunosuppressant, or anti-rejection, medicines lower the immune response to protect the new organ. They must be taken for as long as the transplant works.",
    "diagram": null,
    "sections": [
      {
        "heading": "How do they work?",
        "content": "These medicines act like a dimmer switch on the immune system, turning it down enough to prevent rejection while still allowing some protection against infection.",
        "paragraphs": [
          "These medicines act like a dimmer switch on the immune system, turning it down enough to prevent rejection while still allowing some protection against infection."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Common types",
        "content": "Most patients take a combination of medicines: Doses are highest soon after transplant and are gradually reduced.",
        "paragraphs": [
          "Most patients take a combination of medicines:",
          "Doses are highest soon after transplant and are gradually reduced."
        ],
        "bullets": [],
        "callouts": [],
        "table": {
          "headers": [
            "Group",
            "Examples",
            "Purpose"
          ],
          "rows": [
            [
              "Calcineurin inhibitors",
              "Tacrolimus, cyclosporine",
              "Main anti-rejection medicine"
            ],
            [
              "Antiproliferative agents",
              "Mycophenolate, azathioprine",
              "Stop immune cells multiplying"
            ],
            [
              "Steroids",
              "Prednisolone",
              "Reduce inflammation and immune activity"
            ],
            [
              "mTOR inhibitors",
              "Sirolimus, everolimus",
              "Used in selected patients"
            ]
          ]
        }
      },
      {
        "heading": "Blood level monitoring",
        "content": "Some medicines, especially tacrolimus, need regular blood level checks . The blood test is usually done before the morning dose. Levels that are too low increase rejection risk; levels that are too high increase side effects.",
        "paragraphs": [
          "Some medicines, especially tacrolimus, need regular blood level checks . The blood test is usually done before the morning dose. Levels that are too low increase rejection risk; levels that are too high increase side effects."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Possible side effects",
        "content": "Many side effects can be managed by adjusting doses or adding other medicines. Higher risk of infections High blood pressure High blood sugar or diabetes Tremor Effects on kidney function High cholesterol Weight gain and bone thinning (with steroids) Stomach upset or diarrhoea Increased risk of some cancers over time, particularly skin cancer",
        "paragraphs": [
          "Many side effects can be managed by adjusting doses or adding other medicines."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Higher risk of infections"
          },
          {
            "label": "",
            "text": "High blood pressure"
          },
          {
            "label": "",
            "text": "High blood sugar or diabetes"
          },
          {
            "label": "",
            "text": "Tremor"
          },
          {
            "label": "",
            "text": "Effects on kidney function"
          },
          {
            "label": "",
            "text": "High cholesterol"
          },
          {
            "label": "",
            "text": "Weight gain and bone thinning (with steroids)"
          },
          {
            "label": "",
            "text": "Stomach upset or diarrhoea"
          },
          {
            "label": "",
            "text": "Increased risk of some cancers over time, particularly skin cancer"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Drug and food interactions",
        "content": "Some medicines and foods can change immunosuppressant levels: Always tell any doctor or pharmacist that you are a transplant patient before starting new medicines. Grapefruit and pomegranate juice Certain antibiotics and antifungal medicines Some anti-seizure and tuberculosis medicines Herbal remedies and supplements",
        "paragraphs": [
          "Some medicines and foods can change immunosuppressant levels:",
          "Always tell any doctor or pharmacist that you are a transplant patient before starting new medicines."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Grapefruit and pomegranate juice"
          },
          {
            "label": "",
            "text": "Certain antibiotics and antifungal medicines"
          },
          {
            "label": "",
            "text": "Some anti-seizure and tuberculosis medicines"
          },
          {
            "label": "",
            "text": "Herbal remedies and supplements"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Tips for taking medicines safely",
        "content": "Take medicines at the same time every day Use a pill organiser and phone reminders Never stop or change doses on your own Do not run out; plan refills in advance, especially when travelling Carry a list of your medicines Keep the same brand where possible, as switching brands may change blood levels",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Take medicines at the same time every day"
          },
          {
            "label": "",
            "text": "Use a pill organiser and phone reminders"
          },
          {
            "label": "",
            "text": "Never stop or change doses on your own"
          },
          {
            "label": "",
            "text": "Do not run out; plan refills in advance, especially when travelling"
          },
          {
            "label": "",
            "text": "Carry a list of your medicines"
          },
          {
            "label": "",
            "text": "Keep the same brand where possible, as switching brands may change blood levels"
          }
        ],
        "callouts": []
      },
      {
        "heading": "What if I miss a dose?",
        "content": "Follow your transplant team's specific advice. Do not take a double dose without checking first.",
        "paragraphs": [
          "Follow your transplant team's specific advice. Do not take a double dose without checking first."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "When should you contact your team?",
        "content": "Contact your team if you miss doses, have vomiting or diarrhoea that stops you absorbing medicines, or notice new side effects.",
        "paragraphs": [
          "Contact your team if you miss doses, have vomiting or diarrhoea that stops you absorbing medicines, or notice new side effects."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Will I need these medicines forever?",
        "a": "Yes, for as long as the transplanted kidney is working."
      },
      {
        "q": "Can I take painkillers?",
        "a": "Some painkillers can harm the kidney. Paracetamol is often preferred, but always check first."
      },
      {
        "q": "Why do I need sun protection?",
        "a": "Immunosuppressants increase the risk of skin cancer."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Understanding Immunosuppressant Medicines (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Understanding Immunosuppressant Medicines adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  },
  {
    "id": "art-105",
    "specialtySlug": "kidney-transplant",
    "specialtyTitle": "Kidney Transplant",
    "slug": "life-after-kidney-transplantation",
    "title": "Life After Kidney Transplantation",
    "readingTime": "2 min read",
    "reviewer": "to be assigned",
    "reviewDate": "pending",
    "draftStatus": "DRAFT — For Specialist Review",
    "overview": "A successful kidney transplant can give people the freedom to work, travel, exercise and enjoy family life without dialysis. Protecting the new kidney for the long term depends on daily habits and regular care.",
    "diagram": null,
    "sections": [
      {
        "heading": "Long-term follow-up",
        "content": "International patients usually continue follow-up with a nephrologist in their home country, in coordination with the transplant team. Clinic visits become less frequent over time, often every few months after the first year Regular blood tests monitor kidney function and medicine levels Annual checks for blood pressure, diabetes, cholesterol and bone health Skin checks and cancer screening, as transplant medicines raise some cancer risks",
        "paragraphs": [
          "International patients usually continue follow-up with a nephrologist in their home country, in coordination with the transplant team."
        ],
        "bullets": [
          {
            "label": "",
            "text": "Clinic visits become less frequent over time, often every few months after the first year"
          },
          {
            "label": "",
            "text": "Regular blood tests monitor kidney function and medicine levels"
          },
          {
            "label": "",
            "text": "Annual checks for blood pressure, diabetes, cholesterol and bone health"
          },
          {
            "label": "",
            "text": "Skin checks and cancer screening, as transplant medicines raise some cancer risks"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Protecting your kidney",
        "content": "Take immunosuppressants exactly on time, every day, for life Control blood pressure and blood sugar Stay well hydrated, as advised Avoid painkillers that harm the kidney unless approved Avoid unprescribed herbal or traditional remedies",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Take immunosuppressants exactly on time, every day, for life"
          },
          {
            "label": "",
            "text": "Control blood pressure and blood sugar"
          },
          {
            "label": "",
            "text": "Stay well hydrated, as advised"
          },
          {
            "label": "",
            "text": "Avoid painkillers that harm the kidney unless approved"
          },
          {
            "label": "",
            "text": "Avoid unprescribed herbal or traditional remedies"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Healthy lifestyle",
        "content": "Diet: balanced, low in salt, rich in vegetables and fruit, with controlled sugar and fat Weight: avoid excess weight gain, which is common after transplant Exercise: regular walking, cycling, swimming or other activities; avoid contact sports that could injure the transplant No smoking, and limit alcohol",
        "paragraphs": [],
        "bullets": [
          {
            "label": "Diet:",
            "text": "balanced, low in salt, rich in vegetables and fruit, with controlled sugar and fat"
          },
          {
            "label": "Weight:",
            "text": "avoid excess weight gain, which is common after transplant"
          },
          {
            "label": "Exercise:",
            "text": "regular walking, cycling, swimming or other activities; avoid contact sports that could injure the transplant"
          },
          {
            "label": "",
            "text": "No smoking, and limit alcohol"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Preventing infections",
        "content": "Wash hands regularly Avoid close contact with people who are unwell Practise food and water safety Keep up with recommended vaccinations; live vaccines are usually avoided",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Wash hands regularly"
          },
          {
            "label": "",
            "text": "Avoid close contact with people who are unwell"
          },
          {
            "label": "",
            "text": "Practise food and water safety"
          },
          {
            "label": "",
            "text": "Keep up with recommended vaccinations; live vaccines are usually avoided"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Work and daily life",
        "content": "Most people return to work, study and normal routines within a few months. Jobs with heavy lifting or infection exposure may need adjustments.",
        "paragraphs": [
          "Most people return to work, study and normal routines within a few months. Jobs with heavy lifting or infection exposure may need adjustments."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "Travel",
        "content": "Carry enough medicines for the whole trip, plus extra, in your hand luggage Carry a medical summary and your transplant team's contact details Take care with food and water Check whether vaccinations are needed for your destination, and discuss them with your team first Use sun protection",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Carry enough medicines for the whole trip, plus extra, in your hand luggage"
          },
          {
            "label": "",
            "text": "Carry a medical summary and your transplant team's contact details"
          },
          {
            "label": "",
            "text": "Take care with food and water"
          },
          {
            "label": "",
            "text": "Check whether vaccinations are needed for your destination, and discuss them with your team first"
          },
          {
            "label": "",
            "text": "Use sun protection"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Pregnancy and family planning",
        "content": "Women can often have successful pregnancies after transplant, usually advised to wait at least one year with stable kidney function Some medicines must be changed before pregnancy, so planning with the transplant team is essential Men taking certain medicines should also discuss family planning",
        "paragraphs": [],
        "bullets": [
          {
            "label": "",
            "text": "Women can often have successful pregnancies after transplant, usually advised to wait at least one year with stable kidney function"
          },
          {
            "label": "",
            "text": "Some medicines must be changed before pregnancy, so planning with the transplant team is essential"
          },
          {
            "label": "",
            "text": "Men taking certain medicines should also discuss family planning"
          }
        ],
        "callouts": []
      },
      {
        "heading": "Emotional wellbeing",
        "content": "Adjusting to life after transplant can bring mixed emotions, including gratitude, worry about rejection and changes in relationships. Support groups and counselling can help.",
        "paragraphs": [
          "Adjusting to life after transplant can bring mixed emotions, including gratitude, worry about rejection and changes in relationships. Support groups and counselling can help."
        ],
        "bullets": [],
        "callouts": []
      },
      {
        "heading": "When should you contact your team?",
        "content": "Contact your team for fever, reduced urine, swelling, rising blood pressure, new medicines, or any symptoms that concern you.",
        "paragraphs": [
          "Contact your team for fever, reduced urine, swelling, rising blood pressure, new medicines, or any symptoms that concern you."
        ],
        "bullets": [],
        "callouts": []
      }
    ],
    "whenToConsult": "",
    "faqs": [
      {
        "q": "Can I live a normal life after a kidney transplant?",
        "a": "Many people live full, active lives with good care."
      },
      {
        "q": "Can I play sports?",
        "a": "Yes, most sports are encouraged. Avoid contact sports that could injure the kidney."
      },
      {
        "q": "What happens if the kidney stops working?",
        "a": "Options include dialysis or another transplant. Your team will guide you."
      }
    ],
    "disclaimer": "This article is for general education only and does not replace a consultation with a qualified doctor. Treatment decisions depend on your individual medical history and examination. If you have severe or sudden symptoms, call 108 or 112 in India, or your local emergency number, immediately.",
    "illustrationPlaceholder": "Anatomical illustration / clinical procedural diagram for Life After Kidney Transplantation (Scheduled for certified medical illustrator review).",
    "assessmentIncludes": "Specialist consultation, laboratory baseline profiling, high-resolution diagnostic imaging, and multi-disciplinary board review.",
    "recordsToSend": "Clinical case notes, recent imaging files (DICOM CT/MRI/PET), pathology or biopsy reports, and current medication list.",
    "commonOptions": "Comprehensive evidence-based management protocols for Life After Kidney Transplantation adhering to international clinical standards.",
    "hospitalFacilities": "Accredited tertiary hospital infrastructure with advanced procedural suites, intensive care backup, and dedicated international patient coordination.",
    "timeInIndia": "Typically 7 to 14 days depending on individual clinical requirements and recovery milestones.",
    "recoveryAndFollowUp": "Structured post-procedure monitoring, follow-up imaging, and scheduled remote teleconsultations upon return home.",
    "costRange": "Itemised preliminary estimates provided by treating hospital upon review of complete records.",
    "questionsToAsk": [
      "What are the alternatives to this procedure for my specific stage?",
      "What is the expected recovery timeline before I can safely travel?",
      "What follow-up tests or rehabilitation will I need once I return home?",
      "Who will be my primary point of contact during and after treatment?"
    ]
  }
];
