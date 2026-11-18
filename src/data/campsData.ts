/**
 * src/data/campsData.ts
 * Nuhavi Health — International Medical Camps & Outreach Missions
 *
 * Strict Medical & Operational Compliance:
 * - Visiting specialists and local hospital partners are clearly marked as
 *   "To be announced" (TBA) or "To be confirmed" (TBC) where approvals are pending.
 * - Zero stock photos presented as camp evidence.
 * - Clear disclaimer that medical camps provide in-person clinical triage,
 *   pre-travel evaluations, and second opinion consultations in partnership
 *   with licensed local medical institutions.
 */

export interface MedicalCamp {
  id: string;
  country: string;
  city: string;
  countryCode: string;
  flagEmoji: string;
  status: 'Upcoming' | 'Registration Open' | 'Dates Under Finalization';
  dates: string;
  registrationDeadline: string;
  venue: string;
  visitingSpecialist: string;
  specialistTitle: string;
  localPartner: string;
  indicativeSpecialties: string[];
  description: string;
  consultationFee: string;
  requirements: string[];
}

export const medicalCampsList: MedicalCamp[] = [
  {
    id: 'camp-uzbekistan-tashkent',
    country: 'Uzbekistan',
    city: 'Tashkent',
    countryCode: 'UZ',
    flagEmoji: '🇺🇿',
    status: 'Registration Open',
    dates: 'October 12–14, 2026',
    registrationDeadline: 'September 28, 2026',
    venue: 'Partner Clinical Centre, Mirzo Ulugbek District, Tashkent (Exact clinical room shared upon registration confirmation)',
    visitingSpecialist: 'Senior Surgical Oncologist & Orthopaedic Lead',
    specialistTitle: 'Consultant Clinical Faculty from NABH/JCI Accredited Indian Hospital Network (Named profile released 30 days prior)',
    localPartner: 'In formal coordination with local registered clinical partners (To be finalized)',
    indicativeSpecialties: [
      'Complex Oncology Evaluation',
      'Joint Replacement & Revision Surgery',
      'Cardiac Surgery & Valve Evaluation'
    ],
    description: 'In-person medical review camp for patients with diagnosed oncology conditions, advanced joint degenerative disease, or complex cardiac surgical indications seeking guidance on treatment pathways in India.',
    consultationFee: 'Free clinical coordination & pre-screening (Hospital consultation fees waived during camp)',
    requirements: [
      'Recent diagnostic imaging (MRI, CT, or X-Rays) within the last 6 months',
      'Original histopathology or biopsy reports (for oncology cases)',
      'Previous surgical discharge summaries if applicable',
      'Current prescription list and medical history summary'
    ]
  },
  {
    id: 'camp-kenya-nairobi',
    country: 'Kenya',
    city: 'Nairobi',
    countryCode: 'KE',
    flagEmoji: '🇰🇪',
    status: 'Registration Open',
    dates: 'November 6–8, 2026',
    registrationDeadline: 'October 24, 2026',
    venue: 'Upper Hill Medical District, Nairobi (Full clinical suite address communicated to confirmed registrants)',
    visitingSpecialist: 'Visiting Spine Surgeon & Nephrology Consultant',
    specialistTitle: 'Department Leads from Premier Indian Tertiary Care Centre (Final hospital roster to be announced)',
    localPartner: 'Registered Kenyan Medical Facility Partner (Confirmation pending regulatory clearance)',
    indicativeSpecialties: [
      'Complex Spine Surgery & Scoliosis',
      'Kidney Disease & Renal Transplant Evaluation',
      'Oncology Surgical Second Opinions'
    ],
    description: 'Specialist clinical assessment sessions providing face-to-face case review for Kenyan patients requiring advanced spinal correction, renal disease management, or international cancer therapy.',
    consultationFee: 'Complimentary triage & record assessment by clinical coordinator',
    requirements: [
      'High-resolution MRI/CT scan films or DICOM disc',
      'Renal panel blood work (eGFR, Serum Creatinine, Urea) within 30 days',
      'Detailed clinical notes from your local primary specialist'
    ]
  },
  {
    id: 'camp-tanzania-daressalaam',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    countryCode: 'TZ',
    flagEmoji: '🇹🇿',
    status: 'Registration Open',
    dates: 'November 11–13, 2026',
    registrationDeadline: 'October 30, 2026',
    venue: 'Oysterbay Health Precinct, Dar es Salaam (Specific facility details sent with appointment slot)',
    visitingSpecialist: 'Senior Interventional Cardiologist & Neurosciences Lead',
    specialistTitle: 'Chief of Interventional Cardiology & Neurosurgery (Hospital details confirmed upon regulatory nod)',
    localPartner: 'Local Medical Centre Partner (To be announced following MoH notification)',
    indicativeSpecialties: [
      'Adult & Paediatric Cardiac Sciences',
      'Brain & Cerebrovascular Disorders',
      'Minimally Invasive Joint Replacement'
    ],
    description: 'Direct consultation camp for Tanzanian families seeking independent clinical insight for complex cardiovascular diseases, neurosurgical pathologies, and joint reconstruction.',
    consultationFee: 'Complimentary pre-travel clinical triage',
    requirements: [
      'Echocardiogram (2D Echo) reports and ECG tracings',
      'Brain / Spine MRI or Angiography studies (if applicable)',
      'Current medication schedule and recent laboratory tests'
    ]
  },
  {
    id: 'camp-ghana-accra',
    country: 'Ghana',
    city: 'Accra',
    countryCode: 'GH',
    flagEmoji: '🇬🇭',
    status: 'Dates Under Finalization',
    dates: 'December 2–4, 2026 (Tentative)',
    registrationDeadline: 'November 18, 2026',
    venue: 'Airport Residential Area, Accra (Facility venue under final review)',
    visitingSpecialist: 'Transplant Hepatologist & Advanced Surgical Oncologist',
    specialistTitle: 'Consultant Faculty from Certified Indian Centre of Excellence (To be announced)',
    localPartner: 'Ghana Health Service affiliated clinical partner (Under formal liaison)',
    indicativeSpecialties: [
      'Living Donor Liver & Kidney Transplant Eligibility',
      'Gastrointestinal & Hepato-Pancreato-Biliary Oncology',
      'Complex Orthopaedic Reconstructions'
    ],
    description: 'Pre-travel evaluation camp focusing on organ transplant donor-recipient compatibility pre-screening and multi-disciplinary cancer treatment planning.',
    consultationFee: 'Complimentary review by international care coordinators',
    requirements: [
      'Donor and recipient preliminary blood groups & organ workup reports',
      'Abdominal contrast CT or MRI scans',
      'Complete local clinical dossier'
    ]
  },
  {
    id: 'camp-rwanda-kigali',
    country: 'Rwanda',
    city: 'Kigali',
    countryCode: 'RW',
    flagEmoji: '🇷🇼',
    status: 'Dates Under Finalization',
    dates: 'December 8–10, 2026 (Tentative)',
    registrationDeadline: 'November 25, 2026',
    venue: 'Gasabo District Medical Hub, Kigali (Full venue published upon final schedule)',
    visitingSpecialist: 'Orthopaedic Surgeon & Vitreo-Retinal Specialist',
    specialistTitle: 'Specialist Faculty from Leading Indian Ophthalmology & Joint Institute (To be announced)',
    localPartner: 'Kigali Clinical Health Facility Partner (To be confirmed)',
    indicativeSpecialties: [
      'Robotic Knee & Hip Arthroplasty',
      'Complex Vitreo-Retinal Eye Surgery',
      'Cardiac Valvular Disease Review'
    ],
    description: 'In-person clinical triage camp designed to examine patient suitability for advanced arthroplasty, corneal transplants, and tertiary cardiac interventions in India.',
    consultationFee: 'Complimentary case registration & initial records triage',
    requirements: [
      'Weight-bearing X-rays of knees or hips (AP & Lateral views)',
      'OCT or retinal scan reports for eye cases',
      'Physician recommendation letter'
    ]
  }
];

