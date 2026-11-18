/**
 * src/i18n/homeTranslations.ts
 * Complete, professional translations for all 11 homepage sections.
 * English (/en/), Russian (/ru/), Arabic (/ar/).
 */
import type { SupportedLang } from './translations';

export interface HomeContent {
  hero: {
    eyebrow: string;
    headline: string;
    deck: string;
    primaryCta: string;
    secondaryCta: string;
    responsibilityNote: string;
    routeEyebrow: string;
    routeCaption: string;
    stops: Array<{
      id: string;
      stepNumber: string;
      shortLabel: string;
      title: string;
      description: string;
    }>;
  };
  whoWeAre: {
    title: string;
    deck: string;
    weDoTitle: string;
    weDoItems: string[];
    weDoNotTitle: string;
    weDoNotItems: string[];
    trustCards: Array<{
      title: string;
      text: string;
      marker?: string;
    }>;
  };
  peopleNotPackages: {
    eyebrow: string;
    title: string;
    deck: string;
    photos: Array<{
      label: string;
      description: string;
      caption: string;
    }>;
  };
  specialties: {
    eyebrow: string;
    title: string;
    deck: string;
    acceptingLabel: string;
    onRequestLabel: string;
    items: Array<{
      id: string;
      title: string;
      secondaryLabel: string;
      description: string;
      status: 'accepting' | 'on-request';
      statusLabel: string;
    }>;
  };
  patientJourney: {
    title: string;
    deck: string;
    fullProcessCta: string;
    stepLabel: string;
    legend: {
      you: string;
      nuhavi: string;
      hospital: string;
      receive: string;
    };
    steps: Array<{
      num: number;
      title: string;
      you: string;
      nuhavi: string;
      hospital: string;
      receive: string;
    }>;
  };
  coordinatorBenefits: {
    title: string;
    deck: string;
    cards: Array<{
      title: string;
      text: string;
    }>;
  };
  hospitalSelection: {
    title: string;
    deck: string;
    standardCta: string;
    checklist: string[];
    cardTitle: string;
    cardText: string;
  };
  costBreakdown: {
    title: string;
    deck: string;
    feesCta: string;
    illustrativeNote: string;
    categories: Array<{
      name: string;
      percent: string;
      desc: string;
    }>;
  };
  patientStories: {
    title: string;
    deck: string;
    linkText: string;
    policyTitle: string;
    policyText: string;
  };
  prepareWithConfidence: {
    title: string;
    deck: string;
    guides: Array<{
      title: string;
      desc: string;
      href: string;
    }>;
  };
  closingCta: {
    title: string;
    deck: string;
    primaryCta: string;
    secondaryCta: string;
  };
}

export const homeTranslations: Record<SupportedLang, HomeContent> = {
  en: {
    hero: {
      eyebrow: 'Medical Travel Coordination',
      headline: 'Expert medical care in India. Support at every step.',
      deck: 'Understand your treatment options, explore appropriate hospitals, receive coordinated medical reviews and plan your healthcare journey — with support before, during and after treatment.',
      primaryCta: 'Request a medical opinion',
      secondaryCta: 'Explore treatments',
      responsibilityNote: 'We coordinate care. Hospitals independently examine, diagnose, decide and treat. We do not promise outcomes, savings or visa approval.',
      routeEyebrow: 'Your Coordination Journey',
      routeCaption: 'Select any stage below to inspect how we coordinate each step',
      stops: [
        {
          id: 'share-details',
          stepNumber: '01',
          shortLabel: 'Share your medical details',
          title: '1. Share your medical details',
          description: 'Send a short enquiry. Then, if you agree, upload your reports through a private link we email you. A coordinator who speaks your language follows up.',
        },
        {
          id: 'explore-options',
          stepNumber: '02',
          shortLabel: 'Explore your options',
          title: '2. Explore your options',
          description: 'A hospital team reviews your records. You receive their opinion and written estimates, explained in plain language.',
        },
        {
          id: 'plan-journey',
          stepNumber: '03',
          shortLabel: 'Plan your care journey',
          title: '3. Plan your care journey',
          description: 'Once you decide, we plan the visit around your hospital appointments. Your coordinator helps with visa letter, stay, and reception.',
        },
      ],
    },
    whoWeAre: {
      title: 'Who we are, and who we are not',
      deck: 'Nuhavi Health is an independent medical travel coordination service for international patients travelling to India. We stand beside you while hospitals provide the medical care.',
      weDoTitle: 'We do',
      weDoItems: [
        'Check your records are complete before a hospital sees them',
        'Arrange a review by a hospital team that meets our selection standard',
        'Put estimates side by side so you can compare them',
        'Plan appointments, visa letter, travel, stay and interpreters',
        'Keep in touch after you return home',
      ],
      weDoNotTitle: 'We do not',
      weDoNotItems: [
        'Diagnose, prescribe or decide your treatment',
        'Promote individual doctors or rank them',
        'Provide emergency care',
        'Promise results, savings or visa approval',
        'Sell travel packages',
      ],
      trustCards: [
        {
          title: 'Hospital accreditation verification',
          text: 'National NABH or international JCI accreditation and clinical capabilities are verified on file before any hospital is presented.',
        },
        {
          title: 'Specialty-specific hospital selection',
          text: 'Hospitals are matched for demonstrated surgical volume and clinical depth in your specific condition, not generic marketing.',
        },
        {
          title: 'Transparent itemized cost estimates',
          text: 'Every estimate states what is included, what is excluded, the room category, currency, and validity period.',
        },
        {
          title: 'No referral commissions or kickbacks',
          text: 'Patients pay hospitals directly for all medical care. Our coordination fee is agreed in writing with zero hospital kickbacks.',
        },
        {
          title: 'Direct communication & coordination',
          text: 'A direct coordinator assists with appointments, visa invitation letters, language liaison, and logistical support.',
        },
        {
          title: 'Patient privacy & medical records',
          text: 'Records and scan files are handled with strict confidentiality and shared strictly with hospitals you review and approve.',
        },
      ],
    },
    peopleNotPackages: {
      eyebrow: 'Personal Coordination',
      title: 'People, not packages',
      deck: 'The same coordinator coordinates appointments, guides your journey logistics and checks on you after you fly home.',
      photos: [
        {
          label: 'Photo to come',
          description: 'A coordinator talking with a patient and her daughter in a bright hospital lounge',
          caption: 'Your coordinator explains each step, in writing and in person.',
        },
        {
          label: 'Photo to come',
          description: 'A coordinator greeting a family at Hyderabad airport arrivals',
          caption: 'Met at Hyderabad airport and taken to your stay.',
        },
        {
          label: 'Photo to come',
          description: 'An interpreter sitting beside a patient during a consultation',
          caption: 'Language assistance and hospital interpreter desk access when you need it.',
        },
      ],
    },
    specialties: {
      eyebrow: 'Medical Specialties',
      title: 'Explore treatments',
      deck: 'We focus first on cancer care and joint replacement, where we can coordinate thoroughly. Other specialties are arranged case by case.',
      acceptingLabel: 'Accepting enquiries',
      onRequestLabel: 'On request',
      items: [
        {
          id: 'cancer-care',
          title: 'Cancer care (oncology)',
          secondaryLabel: 'Oncology',
          description: 'Diagnosis review, surgery, chemotherapy, radiotherapy and newer therapies.',
          status: 'accepting',
          statusLabel: 'Accepting enquiries',
        },
        {
          id: 'orthopaedics',
          title: 'Orthopaedics and joint replacement',
          secondaryLabel: 'Joint replacement',
          description: 'Knee and hip replacement, arthroscopy, and complex joint reconstruction.',
          status: 'accepting',
          statusLabel: 'Accepting enquiries',
        },
        {
          id: 'cardiac-sciences',
          title: 'Cardiac sciences',
          secondaryLabel: 'Heart care',
          description: 'Bypass surgery, valve repair, angioplasty, and paediatric cardiology.',
          status: 'on-request',
          statusLabel: 'On request',
        },
        {
          id: 'neurosciences',
          title: 'Neurosciences',
          secondaryLabel: 'Brain and spine',
          description: 'Brain surgery, stroke rehabilitation, and spine disorders.',
          status: 'on-request',
          statusLabel: 'On request',
        },
        {
          id: 'organ-transplants',
          title: 'Organ transplants',
          secondaryLabel: 'Liver, kidney',
          description: 'Living donor liver and kidney transplant coordination under Indian legal framework.',
          status: 'on-request',
          statusLabel: 'On request',
        },
        {
          id: 'spine-surgery',
          title: 'Spine surgery',
          secondaryLabel: 'Spine',
          description: 'Deformity correction, disc replacement, and minimally invasive procedures.',
          status: 'on-request',
          statusLabel: 'On request',
        },
        {
          id: 'gastroenterology',
          title: 'Gastroenterology and GI surgery',
          secondaryLabel: 'Digestive care',
          description: 'Liver disease, advanced endoscopy, and complex gastrointestinal surgeries.',
          status: 'on-request',
          statusLabel: 'On request',
        },
        {
          id: 'nephrology-urology',
          title: 'Nephrology and urology',
          secondaryLabel: 'Kidney and urinary',
          description: 'Dialysis coordination, stone disease, and reconstructive urology.',
          status: 'on-request',
          statusLabel: 'On request',
        },
        {
          id: 'fertility',
          title: 'Fertility and IVF',
          secondaryLabel: 'Reproductive care',
          description: 'Advanced reproductive technologies under Indian ART regulations.',
          status: 'on-request',
          statusLabel: 'On request',
        },
        {
          id: 'ophthalmology',
          title: 'Ophthalmology',
          secondaryLabel: 'Eye care',
          description: 'Complex corneal procedures, vitreo-retinal surgery, and advanced eye care.',
          status: 'on-request',
          statusLabel: 'On request',
        },
      ],
    },
    patientJourney: {
      title: 'How Nuhavi works',
      deck: 'Every step is clear, in writing, and planned around your hospital appointments.',
      fullProcessCta: 'See the full process',
      stepLabel: 'Step',
      legend: {
        you: 'You',
        nuhavi: 'Nuhavi',
        hospital: 'Treating hospital',
        receive: 'What you receive',
      },
      steps: [
        {
          num: 1,
          title: 'Share your medical records',
          you: 'Send an enquiry with your recent reports and diagnosis.',
          nuhavi: 'We check your records are complete and ask for anything missing.',
          hospital: 'A clinical coordinator prepares your case for doctor review.',
          receive: 'Confirmation of receipt and a dedicated coordinator contact.',
        },
        {
          num: 2,
          title: 'Explore options & opinions',
          you: 'Discuss your preferences with your coordinator.',
          nuhavi: 'We submit your records to accredited partner hospitals.',
          hospital: 'Senior specialists review your files and propose clinical approaches.',
          receive: 'Independent medical opinions comparing approaches.',
        },
        {
          num: 3,
          title: 'Written estimates & fees',
          you: 'Review estimates, inclusions, exclusions and our coordination fee.',
          nuhavi: 'We put estimates side by side and explain differences clearly.',
          hospital: 'Issues an itemised estimate with stay duration and room category.',
          receive: 'Comprehensive cost comparison document in writing.',
        },
        {
          num: 4,
          title: 'Visa assistance & travel booking',
          you: 'Apply for Indian medical visa and book flights.',
          nuhavi: 'We facilitate official hospital visa invitation letters and plan itinerary.',
          hospital: 'Issues formal Medical Visa Assistance Letter with FRRO registration.',
          receive: 'Hospital visa letter and pre-travel preparation guide.',
        },
        {
          num: 5,
          title: 'Arrival & local accommodation',
          you: 'Fly to Hyderabad; your attendant travels with you.',
          nuhavi: 'We meet you at the airport and transfer you to your hotel or apartment.',
          hospital: 'Pre-registers your admission and reserves specialist consult time.',
          receive: 'Local SIM card, verified transport, and stay orientation.',
        },
        {
          num: 6,
          title: 'Consultations & hospital care',
          you: 'Attend clinical appointments and inpatient procedures.',
          nuhavi: 'Your coordinator accompanies you to key consultations and interprets.',
          hospital: 'Conducts examinations, surgery, and postoperative nursing care.',
          receive: 'Daily coordinator updates and plain-language medical briefings.',
        },
        {
          num: 7,
          title: 'Discharge & post-care follow-up',
          you: 'Receive discharge summary and fit-to-fly certificate.',
          nuhavi: 'We coordinate follow-up teleconsultations once you return home.',
          hospital: 'Provides comprehensive discharge report and medication regimen.',
          receive: 'Full digitized medical records package and ongoing coordinator support.',
        },
      ],
    },
    coordinatorBenefits: {
      title: 'Why patients and families choose a coordinator',
      deck: 'A coordinator handles logistics and clarifies details so you can focus entirely on treatment.',
      cards: [
        { title: 'Independent guidance', text: 'We work for you, not on commission from any hospital.' },
        { title: 'Clear written estimates', text: 'No surprises. Hospital charges and our fees stated up front.' },
        { title: 'Doctor-led review', text: 'Records examined by medical professionals before dispatch.' },
        { title: 'Language support', text: 'Coordinators and interpreters fluent in Russian, Uzbek, Arabic.' },
        { title: 'Visa letter support', text: 'Fast-track medical visa assistance letters from accredited hospitals.' },
        { title: 'Airport to hotel', text: 'Private airport reception and safe transport to pre-arranged stays.' },
        { title: 'In-person presence', text: 'Beside you during vital doctor consultations in Hyderabad.' },
        { title: 'Daily hospital liaison', text: 'Resolving billing questions, nursing checks, and dietary needs.' },
        { title: 'Complete records archive', text: 'All scans, lab reports and discharge summaries digitized.' },
        { title: 'Home follow-up', text: 'Connecting you with your treating surgeon for months after return.' },
      ],
    },
    hospitalSelection: {
      title: 'Hospitals are chosen on capability, not popularity',
      deck: 'We do not rank hospitals or sell package deals. We connect your case to hospitals that meet our clinical and ethical standards.',
      standardCta: 'Read our selection standard',
      checklist: [
        'Current national accreditation (NABH) or international accreditation (JCI) with certificate and expiry verified on file',
        'Specialty clinical infrastructure matching case needs, including dedicated surgical suites and intensive care',
        'Multidisciplinary team review (tumour board) for cancer cases',
        'International patient service desk and dedicated language support',
        'Itemized written estimates detailing inclusions, exclusions, and duration before travel',
        'Comprehensive English discharge summaries shared directly with the patient',
        'A signed agreement with Nuhavi that strictly rules out patient referral fees',
      ],
      cardTitle: 'Direct Billing & Independent Policy',
      cardText: 'Hospitals bill patients directly for all medical services. Nuhavi does not accept referral fees or mark up hospital estimates. Our coordination fee is transparent and agreed in writing before travel.',
    },
    costBreakdown: {
      title: 'What goes into the cost of treatment',
      deck: 'Hospital costs, travel, stay and coordination fees — explained up front with no hidden charges.',
      feesCta: 'How estimates and our fee work',
      illustrativeNote: 'Illustrative breakdown of typical medical travel expenditure (actual proportions vary by procedure and length of stay)',
      categories: [
        { name: 'Hospital charges', percent: '22%', desc: 'Room, nursing, operating theatre, intensive care if needed. Varies with length of stay and room category.' },
        { name: 'Professional fees', percent: '16%', desc: 'Surgeon, anaesthetist, and primary physician fees. Included in a package or listed separately.' },
        { name: 'Investigations', percent: '14%', desc: 'Pathology tests, CT, MRI, PET scans, and pre-anaesthesia clearance expected in India.' },
        { name: 'Medicines & implants', percent: '20%', desc: 'Chemotherapy and targeted drugs, or joint implants. A clear estimate specifies the assumed drug or implant.' },
        { name: 'Rehabilitation & follow-up', percent: '10%', desc: 'Physiotherapy, dressings, follow-up consults, and discharge medication.' },
        { name: 'Travel & stay', percent: '10%', desc: 'Flights, accommodation near hospital, airport transfers, and local transit.' },
        { name: 'Nuhavi coordination fee', percent: '8%', desc: 'Our coordination fee, agreed in writing before you commit. Covers case preparation, scheduling, and continuous support.' },
      ],
    },
    patientStories: {
      title: 'Patient stories',
      deck: 'Real patient journeys and verified experiences. We only publish stories with written consent and protect personal details.',
      linkText: 'How we handle patient stories',
      policyTitle: 'Ethical Storytelling Policy',
      policyText: 'Medical care is personal. We never pay patients for testimonials, use actors, or exaggerate outcomes. Every published account reflects genuine care coordination with verified identity protection.',
    },
    prepareWithConfidence: {
      title: 'Prepare with confidence',
      deck: 'Guides to help you plan your medical travel, understand hospital estimates, and prepare your medical records.',
      guides: [
        {
          title: 'Preparing your medical records',
          desc: 'How to organize scan images, pathology slides, and past discharge reports before sending.',
          href: '/en/records/',
        },
        {
          title: 'Understanding hospital estimates',
          desc: 'A line-by-line guide on what is included, room upgrade clauses, and unexpected extras.',
          href: '/en/how-it-works/costs-and-fees/',
        },
        {
          title: 'Questions to ask before travelling',
          desc: '10 clinical questions to ask your treating doctor during the initial teleconsultation.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Medical visa guide for India',
          desc: 'Required documents, eligibility for attendants, and processing times for e-Medical visas.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Planning your stay in Hyderabad',
          desc: 'Safe neighbourhoods near major medical centres, verified serviced stays, and daily amenities.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Bringing a family attendant',
          desc: 'Practical guidance on medical attendant visas, lodging together, and emotional support.',
          href: '/en/knowledge-centre/',
        },
      ],
    },
    closingCta: {
      title: 'Your treatment journey starts with clarity',
      deck: 'Send your medical enquiry today. A coordinator will review your request and guide you through the next steps — with zero commitment.',
      primaryCta: 'Request a medical opinion',
      secondaryCta: 'Talk to a care coordinator',
    },
  },

  ru: {
    hero: {
      eyebrow: 'Координация медицинских поездок',
      headline: 'Экспертная медицинская помощь в Индии. Поддержка на каждом шаге.',
      deck: 'Узнайте о вариантах лечения, выберите подходящие клиники, получите согласованные медицинские заключения и спланируйте поездку — с сопровождением до, во время и после лечения.',
      primaryCta: 'Запросить медицинское заключение',
      secondaryCta: 'Виды лечения',
      responsibilityNote: 'Мы координируем организационные вопросы. Клиники независимо проводят обследование, диагностику и лечение. Мы не гарантируем исходы лечения, экономию средств или одобрение визы.',
      routeEyebrow: 'Этапы координации',
      routeCaption: 'Выберите любой этап ниже, чтобы узнать, как мы сопровождаем каждый шаг',
      stops: [
        {
          id: 'share-details',
          stepNumber: '01',
          shortLabel: 'Предоставление медицинских данных',
          title: '1. Предоставление медицинских данных',
          description: 'Отправьте краткий запрос. Затем, при вашем согласии, загрузите медицинские выписки по защищенной ссылке, отправленной на вашу эл. почту. С вами свяжется координатор, говорящий на вашем языке.',
        },
        {
          id: 'explore-options',
          stepNumber: '02',
          shortLabel: 'Рассмотрение вариантов',
          title: '2. Рассмотрение вариантов',
          description: 'Врачи больницы изучают ваши документы. Вы получаете их медицинское заключение и письменную предварительную смету с понятными разъяснениями.',
        },
        {
          id: 'plan-journey',
          stepNumber: '03',
          shortLabel: 'Планирование поездки',
          title: '3. Планирование поездки',
          description: 'После вашего решения мы организуем поездку в соответствии с графиком приемов в больнице. Координатор поможет с визовым приглашением, проживанием и встречей.',
        },
      ],
    },
    whoWeAre: {
      title: 'Кто мы и кем мы не являемся',
      deck: 'Nuhavi Health — сервис независимой координации лечения в Индии для международных пациентов. Мы поддерживаем вас, пока клиники оказывают медицинскую помощь.',
      weDoTitle: 'Что мы делаем',
      weDoItems: [
        'Проверяем полноту документов до передачи в больницу',
        'Организуем рассмотрение врачами клиники, соответствующей нашим стандартам отбора',
        'Предоставляем сметы для удобного и прозрачного сравнения',
        'Помогаем организовать приемы, визовое приглашение, поездку, проживание и переводчиков',
        'Остаемся на связи после вашего возвращения домой',
      ],
      weDoNotTitle: 'Чего мы не делаем',
      weDoNotItems: [
        'Не ставим диагнозы, не выписываем рецепты и не определяем план лечения',
        'Не рекламируем отдельных врачей и не составляем их рейтинги',
        'Не оказываем неотложную медицинскую помощь',
        'Не гарантируем исходы лечения, экономию или получение визы',
        'Не продаем туристические путевки или пакетные туры',
      ],
      trustCards: [
        {
          title: 'Проверка аккредитации (NABH / JCI)',
          text: 'Национальная аккредитация NABH или международная JCI и клиническая база проверяются документально до предложения клиники пациенту.',
        },
        {
          title: 'Выбор клиники по специализации',
          text: 'Госпитали подбираются по реальному опыту профильного хирургического отделения, а не по общей рекламе бренда.',
        },
        {
          title: 'Прозрачные детализированные сметы',
          text: 'Каждая смета детально указывает включенные процедуры, исключения, категорию палаты, валюту и срок действия.',
        },
        {
          title: 'Без комиссий и скрытых наценок клиник',
          text: 'Пациент оплачивает лечение напрямую в кассу госпиталя. Наш координационный сбор фиксирован и согласован заранее.',
        },
        {
          title: 'Прямая связь и координационная поддержка',
          text: 'Прямой контакт с координатором помогает в согласовании приемов, визовых приглашений, переводе и организационной поддержке.',
        },
        {
          title: 'Конфиденциальность медицинских данных',
          text: 'Выписки и снимки обрабатываются со строгой конфиденциальностью и передаются исключительно в согласованные с вами клиники.',
        },
      ],
    },
    peopleNotPackages: {
      eyebrow: 'Индивидуальное сопровождение',
      title: 'Забота о людях, а не продажа пакетов',
      deck: 'Один и тот же координатор организует приемы, сопровождает организационные вопросы поездки и поддерживает связь после вашего возвращения домой.',
      photos: [
        {
          label: 'Фотоколлаж',
          description: 'Координатор общается с пациенткой и ее дочерью в клинике',
          caption: 'Координатор разъясняет каждый шаг письменно и при личной встрече.',
        },
        {
          label: 'Фотоколлаж',
          description: 'Встреча семьи в аэропорту Хайдарабада',
          caption: 'Встреча в аэропорту Хайдарабада и трансфер к месту проживания.',
        },
        {
          label: 'Фотоколлаж',
          description: 'Переводчик сопровождает пациента на консультации у врача',
          caption: 'Языковая поддержка и доступ к переводчикам клиники при необходимости.',
        },
      ],
    },
    specialties: {
      eyebrow: 'Медицинские направления',
      title: 'Направления лечения',
      deck: 'В первую очередь мы фокусируемся на онкологии и замене суставов, где можем обеспечить тщательную координацию. Другие направления организуются индивидуально по запросу.',
      acceptingLabel: 'Прием обращений открыт',
      onRequestLabel: 'По запросу',
      items: [
        {
          id: 'cancer-care',
          title: 'Онкология и лечение рака',
          secondaryLabel: 'Онкология',
          description: 'Экспертиза диагноза, хирургия, химиотерапия, лучевая терапия и современные методы.',
          status: 'accepting',
          statusLabel: 'Прием обращений открыт',
        },
        {
          id: 'orthopaedics',
          title: 'Ортопедия и замена суставов',
          secondaryLabel: 'Эндопротезирование',
          description: 'Эндопротезирование коленного и тазобедренного суставов, артроскопия и реконструкция.',
          status: 'accepting',
          statusLabel: 'Прием обращений открыт',
        },
        {
          id: 'cardiac-sciences',
          title: 'Кардиология и кардиохирургия',
          secondaryLabel: 'Лечение сердца',
          description: 'Аортокоронарное шунтирование, коррекция клапанов, ангиопластика и детская кардиохирургия.',
          status: 'on-request',
          statusLabel: 'По запросу',
        },
        {
          id: 'neurosciences',
          title: 'Неврология и нейрохирургия',
          secondaryLabel: 'Головной и спинной мозг',
          description: 'Микрохирургия головного мозга, реабилитация после инсульта и заболевания позвоночника.',
          status: 'on-request',
          statusLabel: 'По запросу',
        },
        {
          id: 'organ-transplants',
          title: 'Трансплантология органов',
          secondaryLabel: 'Печень, почки',
          description: 'Координация родственной трансплантации печени и почек по законам Индии.',
          status: 'on-request',
          statusLabel: 'По запросу',
        },
        {
          id: 'spine-surgery',
          title: 'Хирургия позвоночника',
          secondaryLabel: 'Позвоночник',
          description: 'Исправление деформаций, замена межпозвонковых дисков и малоинвазивные операции.',
          status: 'on-request',
          statusLabel: 'По запросу',
        },
        {
          id: 'gastroenterology',
          title: 'Гастроэнтерология и хирургия ЖКТ',
          secondaryLabel: 'Органы пищеварения',
          description: 'Заболевания печени, передовая эндоскопия и сложные хирургические вмешательства.',
          status: 'on-request',
          statusLabel: 'По запросу',
        },
        {
          id: 'nephrology-urology',
          title: 'Нефрология и урология',
          secondaryLabel: 'Почки и мочевыделительная система',
          description: 'Организация диализа, лечение мочекаменной болезни и реконструктивная урология.',
          status: 'on-request',
          statusLabel: 'По запросу',
        },
        {
          id: 'fertility',
          title: 'Репродуктивная медицина (ЭКО)',
          secondaryLabel: 'Лечение бесплодия',
          description: 'Вспомогательные репродуктивные технологии согласно индийским клиническим стандартам.',
          status: 'on-request',
          statusLabel: 'По запросу',
        },
        {
          id: 'ophthalmology',
          title: 'Офтальмология',
          secondaryLabel: 'Зрение',
          description: 'Сложные операции на роговице, витреоретинальная хирургия и микрохирургия глаза.',
          status: 'on-request',
          statusLabel: 'По запросу',
        },
      ],
    },
    patientJourney: {
      title: 'Как работает Nuhavi',
      deck: 'Каждый этап прозрачен, зафиксирован письменно и спланирован вокруг приемов в клинике.',
      fullProcessCta: 'Подробнее о процессе',
      stepLabel: 'Шаг',
      legend: {
        you: 'Вы',
        nuhavi: 'Nuhavi',
        hospital: 'Клиника',
        receive: 'Что вы получаете',
      },
      steps: [
        {
          num: 1,
          title: 'Отправка медицинских выписок',
          you: 'Отправьте обращение с актуальными медицинскими документами и диагнозом.',
          nuhavi: 'Мы проверяем полноту пакета документов и запрашиваем недостающие анализы.',
          hospital: 'Клинический координатор готовит медицинскую карту для врачей.',
          receive: 'Подтверждение получения и прямой контакт с вашим координатором.',
        },
        {
          num: 2,
          title: 'Изучение вариантов и второе мнение',
          you: 'Обсудите ваши пожелания и предпочтения с координатором.',
          nuhavi: 'Мы направляем документы в аккредитованные партнерские больницы.',
          hospital: 'Ведущие врачи изучают выписки и предлагают варианты клинического лечения.',
          receive: 'Независимые врачебные заключения со сравнительным анализом.',
        },
        {
          num: 3,
          title: 'Письменные сметы и стоимость услуг',
          you: 'Изучите сметы, включенные процедуры, исключения и комиссию службы.',
          nuhavi: 'Мы сопоставляем сметы клиник и наглядно объясняем разницу в стоимости.',
          hospital: 'Формирует детализированную смету со сроком пребывания и типом палаты.',
          receive: 'Полный сравнительный финансовый документ в письменном виде.',
        },
        {
          num: 4,
          title: 'Помощь с визой и организация поездки',
          you: 'Подайте заявку на медицинскую визу в Индию и приобретайте авиабилеты.',
          nuhavi: 'Мы организуем официальные приглашения от клиники и планируем маршрут.',
          hospital: 'Оформляет официальное приглашение на лечение с регистрацией в FRRO.',
          receive: 'Визовое приглашение больницы и практическое руководство для поездки.',
        },
        {
          num: 5,
          title: 'Прибытие и размещение',
          you: 'Прилетайте в Хайдарабад в сопровождении близкого человека.',
          nuhavi: 'Мы встречаем вас в аэропорту и организуем трансфер до места проживания.',
          hospital: 'Проводит предварительную регистрацию и бронирует время консультаций.',
          receive: 'Местную SIM-карту, надежный транспорт и инструктаж по проживанию.',
        },
        {
          num: 6,
          title: 'Консультации и лечение в стационаре',
          you: 'Посещайте приемы врачей и назначенные процедуры.',
          nuhavi: 'Координатор сопровождает вас на ключевых визитах и помогает с переводом.',
          hospital: 'Проводит обследование, оперативное вмешательство и уход.',
          receive: 'Регулярные отчеты координатора и понятные медицинские разъяснения.',
        },
        {
          num: 7,
          title: 'Выписка и сопровождение дома',
          you: 'Получаете выписной эпикриз и заключение о готовности к перелету.',
          nuhavi: 'Организуем дистанционные телеконсультации с хирургом после возвращения.',
          hospital: 'Предоставляет развернутый выписной эпикриз и план медикаментозного лечения.',
          receive: 'Оцифрованный архив медицинских документов и поддержку координатора.',
        },
      ],
    },
    coordinatorBenefits: {
      title: 'Почему пациенты и их семьи выбирают координатора',
      deck: 'Координатор берет на себя организационные вопросы и проясняет нюансы, чтобы вы могли сосредоточиться на лечении.',
      cards: [
        { title: 'Независимая поддержка', text: 'Мы защищаем ваши интересы и не работаем за комиссионные от клиник.' },
        { title: 'Прозрачные сметы', text: 'Никаких скрытых платежей. Все расходы согласованы заранее.' },
        { title: 'Врачебный аудит', text: 'Документы внимательно изучаются врачами до отправки в клинику.' },
        { title: 'Языковая помощь', text: 'Координаторы и переводчики свободно владеют русским и узбекским языками.' },
        { title: 'Визовое приглашение', text: 'Официальные письма от аккредитованных клиник для быстрой визы.' },
        { title: 'Встреча в аэропорту', text: 'Индивидуальная встреча в аэропорту и комфортабельный трансфер.' },
        { title: 'Личное сопровождение', text: 'Координатор рядом с вами на важнейших консультациях в клинике.' },
        { title: 'Контроль в больнице', text: 'Помощь с палатой, питанием, медицинским персоналом и счетами.' },
        { title: 'Цифровой архив', text: 'Все снимки, анализы и выписки сканируются и сохраняются в вашем профиле.' },
        { title: 'Связь после возвращения', text: 'Организация консультаций с лечащим врачом после возвращения домой.' },
      ],
    },
    hospitalSelection: {
      title: 'Выбор клиники по возможностям, а не по рекламе',
      deck: 'Мы не составляем рейтингов и не продаем пакетные туры. Мы подбираем клиники, строго отвечающие нашим клиническим и этическим стандартам.',
      standardCta: 'Наш стандарт отбора',
      checklist: [
        'Действующая национальная (NABH) или международная (JCI) аккредитация клиники с проверкой сертификата и срока действия',
        'Специализированная инфраструктура — современные операционные залы, реанимация или профильные отделения',
        'Мультидисциплинарный консилиум (Tumour Board) для онкологических пациентов',
        'Отдел международных пациентов и профессиональная языковая помощь',
        'Детализированные письменные сметы с указанием включенных услуг, исключений и сроков до поездки',
        'Полный выписной эпикриз на английском языке, передаваемый пациенту',
        'Подписанное этическое соглашение с Nuhavi, полностью исключающее реферальные комиссии за пациентов',
      ],
      cardTitle: 'Прямая оплата и независимая политика',
      cardText: 'Клиники выставляют счета напрямую пациентам за все медицинские услуги. Nuhavi не получает реферальных комиссий и не делает наценок на сметы больниц. Наша стоимость координации прозрачна и согласуется письменно до поездки.',
    },
    costBreakdown: {
      title: 'Из чего складывается стоимость лечения',
      deck: 'Медицинские расходы, перелет, проживание и координация — все фиксируется открыто и без скрытых платежей.',
      feesCta: 'Как формируются сметы и наша комиссия',
      illustrativeNote: 'Примерная структура типичных расходов на медицинскую поездку (фактическое соотношение зависит от диагноза и типа палаты)',
      categories: [
        { name: 'Больничные расходы', percent: '22%', desc: 'Палата, уход медсестер, операционная, реанимация при необходимости. Зависит от срока пребывания.' },
        { name: 'Гонорары врачей', percent: '16%', desc: 'Гонорары хирурга, анестезиолога и лечащих специалистов. Включаются в пакет или указываются отдельно.' },
        { name: 'Диагностика и анализы', percent: '14%', desc: 'Лабораторные анализы, КТ, МРТ, ПЭТ-КТ и предоперационные обследования в Индии.' },
        { name: 'Медикаменты и импланты', percent: '20%', desc: 'Химиотерапия, таргетные препараты или эндопротезы. В смете обязательно указывается тип препарата или протеза.' },
        { name: 'Реабилитация и наблюдение', percent: '10%', desc: 'Физиотерапия, перевязки, контрольные консультации и выписные медикаменты.' },
        { name: 'Перелет и проживание', percent: '10%', desc: 'Авиабилеты, проживание рядом с клиникой, трансфер из аэропорта и транспорт.' },
        { name: 'Координация Nuhavi', percent: '8%', desc: 'Комиссия за координацию, согласованная в договоре до поездки. Подготовка документов, запись и поддержка.' },
      ],
    },
    patientStories: {
      title: 'Истории пациентов',
      deck: 'Реальный опыт пациентов. Мы публикуем истории только с письменного согласия и защищаем персональные данные.',
      linkText: 'Наши правила публикации историй',
      policyTitle: 'Этическая политика публикаций',
      policyText: 'Лечение — это сугубо личный вопрос. Мы никогда не платим за отзывы, не нанимаем актеров и не преувеличиваем медицинские результаты. Каждая история отражает реальный путь лечения с полной защитой конфиденциальности.',
    },
    prepareWithConfidence: {
      title: 'Готовьтесь к поездке с уверенностью',
      deck: 'Практические руководства помогут спланировать поездку, разобраться в сметах и правильно подготовить медицинские выписки.',
      guides: [
        {
          title: 'Подготовка медицинских документов',
          desc: 'Как систематизировать снимки МРТ, КТ, гистологию и выписки перед отправкой.',
          href: '/en/records/',
        },
        {
          title: 'Как читать предварительную смету клиники',
          desc: 'Построчный разбор статей расходов, условия палат и непредвиденные траты.',
          href: '/en/how-it-works/costs-and-fees/',
        },
        {
          title: 'Вопросы врачу перед поездкой',
          desc: '10 ключевых вопросов лечащему хирургу на предварительной телеконсультации.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Медицинская виза в Индию',
          desc: 'Перечень документов, визы для сопровождающих и сроки оформления e-Medical Visa.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Организация проживания в Хайдарабаде',
          desc: 'Безопасные районы около ведущих клиник, проверенное жилье и инфраструктура.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Поездка с сопровождающим',
          desc: 'Полезные советы по оформлению визы сопровождающего, совместному быту и уходу.',
          href: '/en/knowledge-centre/',
        },
      ],
    },
    closingCta: {
      title: 'Ваш путь к лечению начинается с ясности',
      deck: 'Отправьте медицинский запрос сегодня. Координатор изучит ваше обращение и объяснит дальнейшие шаги — без каких-либо обязательств.',
      primaryCta: 'Запросить медицинское заключение',
      secondaryCta: 'Связаться с координатором',
    },
  },

  ar: {
    hero: {
      eyebrow: 'تنسيق السفر الطبي',
      headline: 'رعاية طبية متخصصة في الهند. دعم في كل خطوة.',
      deck: 'تعرف على خيارات العلاج، واستكشف المستشفيات المناسبة، واحصل على تقييمات طبية منسقة، وخطط لرحلتك العلاجية — مع الدعم والمتابعة قبل العلاج وأثناءه وبعده.',
      primaryCta: 'طلب رأي طبي',
      secondaryCta: 'استكشف العلاجات',
      responsibilityNote: 'نحن ننسق الرعاية. تتولى المستشفيات الفحص والتشخيص وتحديد العلاج وتقديمه باستقلالية تامة. لا نضمن نتائج الشفاء أو التوفير المالي أو الموافقة على التأشيرة.',
      routeEyebrow: 'مسار التنسيق والرعاية',
      routeCaption: 'اختر أي مرحلة أدناه للاطلاع على كيفية تنسيق كل خطوة',
      stops: [
        {
          id: 'share-details',
          stepNumber: '01',
          shortLabel: 'مشاركة بياناتك الطبية',
          title: '1. مشاركة بياناتك الطبية',
          description: 'أرسل استفساراً موجزاً. بعد ذلك، وبموافقتك، يمكنك تحميل تقاريرك عبر رابط خاص نرسله إلى بريدك. سيتواصل معك منسق يتحدث لغتك.',
        },
        {
          id: 'explore-options',
          stepNumber: '02',
          shortLabel: 'استكشاف الخيارات',
          title: '2. استكشاف الخيارات',
          description: 'يقوم فريق المستشفى بمراجعة تقاريرك. تتلقى رأيهم الطبي وتقديرات التكلفة المكتوبة، مع توضيحها بلغة واضحة ومبسطة.',
        },
        {
          id: 'plan-journey',
          stepNumber: '03',
          shortLabel: 'تخطيط رحلتك العلاجية',
          title: '3. تخطيط رحلتك العلاجية',
          description: 'بمجرد اتخاذ قرارك، نخطط للزيارة بما يتوافق مع مواعيد المستشفى. يساعدك المنسق في خطاب التأشيرة، والإقامة، والاستقبال.',
        },
      ],
    },
    whoWeAre: {
      title: 'من نحن، ومن لسنا',
      deck: 'نوهـافي هيلث هي خدمة تنسيق سفر طبي مستقلة في الهند للمرضى الدوليين. نقف بجانبك بينما تقدم المستشفيات الرعاية الطبية.',
      weDoTitle: 'ما نقوم به',
      weDoItems: [
        'نتأكد من اكتمال تقاريرك الطبية قبل إرسالها للمستشفى',
        'نرتب مراجعة الحالة من قبل فريق مستشفى يستوفي معايير الاختيار لدينا',
        'نضع التقديرات المالية جنباً إلى جنب لتتمكن من مقارنتها بوضوح',
        'نخطط المواعيد، وخطاب التأشيرة، والسفر، والإقامة، والمترجمين',
        'نبقى على تواصل معك بعد عودتك إلى وطنك',
      ],
      weDoNotTitle: 'ما لا نقوم به',
      weDoNotItems: [
        'لا نشخص أو نصف أدوية أو نقرر خطتك العلاجية',
        'لا نروّج لأطباء معينين ولا نضع تصنيفات تفضيلية لهم',
        'لا نقدم خدمات الطوارئ أو الإسعاف',
        'لا نضمن نتائج الشفاء أو التوفير المالي أو الموافقة على التأشيرة',
        'لا نبيع باقات سفر أو جولات سياحية',
      ],
      trustCards: [
        {
          title: 'التحقق من الاعتماد (NABH / JCI)',
          text: 'يتم التحقق رسمياً من سريان الاعتماد الوطني NABH أو الدولي JCI والجاهزية الطبية قبل عرض أي مستشفى.',
        },
        {
          title: 'اختيار المستشفى حسب التخصص الدقيق',
          text: 'يتم اختيار المستشفيات وفقاً للخبرة الجراحية والتجهيزات السريرية المثبتة في تشخيصك، وليس استناداً للدعاية العامة.',
        },
        {
          title: 'تقديرات مالية مفصلة ومكتوبة',
          text: 'يوضح كل تقدير ما هو مشمول وما هو غير مشمول، وفئة الغرفة، وأتعاب الجراحة، والعملة، وفترة الصلاحية.',
        },
        {
          title: 'حظر عمولات الإحالة من المستشفيات',
          text: 'يدفع المريض تكاليف العلاج مباشرة للمستشفى. أتعاب التنسيق محددة كتابياً مسبقاً دون أي عمولات إحالة سرية.',
        },
        {
          title: 'تواصل مباشر ودعم تنسيقي',
          text: 'تواصل مباشر ودعم تنسيقي للمواعيد، وخطابات التأشيرة، وتسهيل التواصل مع مكاتب المرضى الدوليين بالمستشفى.',
        },
        {
          title: 'سرية وخصوصية السجلات الطبية',
          text: 'تتم مشاركة التقارير والأشعة بسرية تامة، ومع المستشفيات التي توافق عليها صراحة فقط دون نشرها أو بيعها.',
        },
      ],
    },
    peopleNotPackages: {
      eyebrow: 'تنسيق شخصي متكامل',
      title: 'اهتمام بالإنسان، لا بيع باقات',
      deck: 'المنسق نفسه ينظم مواعيدك الطبية، ويتابع ترتيبات السفر والإقامة، ويتواصل معك للاطمئنان بعد عودتك إلى وطنك.',
      photos: [
        {
          label: 'صورة توضيحية',
          description: 'منسق نوهـافي يتحدث مع مريضة وابنتها في استراحة المستشفى',
          caption: 'يشرح لك منسقك كل خطوة، كتابياً وشخصياً.',
        },
        {
          label: 'صورة توضيحية',
          description: 'منسق يستقبل عائلة في صالة الوصول بمطار حيدر أباد',
          caption: 'استقبال في مطار حيدر أباد ونقل إلى مكان إقامتك.',
        },
        {
          label: 'صورة توضيحية',
          description: 'مترجم يرافق المريض أثناء الاستشارة الطبية',
          caption: 'دعم لغوي وتنسيق مع مكتب المترجمين في المستشفى عند الحاجة.',
        },
      ],
    },
    specialties: {
      eyebrow: 'التخصصات الطبية',
      title: 'استكشف العلاجات',
      deck: 'نركز أولاً على علاج الأورام واستبدال المفاصل حيث نقدم تنسيقاً دقيقاً ومباشراً. وننسق التخصصات الأخرى حسب الطلب لكل حالة بشكل فردي.',
      acceptingLabel: 'نستقبل الاستفسارات',
      onRequestLabel: 'حسب الطلب',
      items: [
        {
          id: 'cancer-care',
          title: 'علاج الأورام والسرطان',
          secondaryLabel: 'الأورام',
          description: 'مراجعة التشخيص، والجراحة، والعلاج الكيميائي، والإشعاعي، والتقنيات الحديثة.',
          status: 'accepting',
          statusLabel: 'نستقبل الاستفسارات',
        },
        {
          id: 'orthopaedics',
          title: 'جراحة العظام واستبدال المفاصل',
          secondaryLabel: 'استبدال المفاصل',
          description: 'استبدال مفصل الركبة والورك، وجراحة المناظير، والترميم المفصلي المعقد.',
          status: 'accepting',
          statusLabel: 'نستقبل الاستفسارات',
        },
        {
          id: 'cardiac-sciences',
          title: 'أمراض وجراحة القلب',
          secondaryLabel: 'طب القلب',
          description: 'جراحة مجازة الشريان التاجي، وإصلاح الصمامات، والقسطرة، وطب قلب الأطفال.',
          status: 'on-request',
          statusLabel: 'حسب الطلب',
        },
        {
          id: 'neurosciences',
          title: 'طب وجراحة المخ والأعصاب',
          secondaryLabel: 'المخ والعمود الفقري',
          description: 'جراحة الدماغ المجهرية، وإعادة تأهيل السكتات الدماغية، واعتلالات الأعصاب.',
          status: 'on-request',
          statusLabel: 'حسب الطلب',
        },
        {
          id: 'organ-transplants',
          title: 'زراعة الأعضاء',
          secondaryLabel: 'الكبد والكلى',
          description: 'تنسيق زراعة الكبد والكلى من المتبرعين الأحياء وفقاً للقوانين الهندية المنظمة.',
          status: 'on-request',
          statusLabel: 'حسب الطلب',
        },
        {
          id: 'spine-surgery',
          title: 'جراحة العمود الفقري',
          secondaryLabel: 'العمود الفقري',
          description: 'تصحيح التشوهات، واستبدال الأقراص، والعمليات طفيفة التوغل.',
          status: 'on-request',
          statusLabel: 'حسب الطلب',
        },
        {
          id: 'gastroenterology',
          title: 'أمراض وجراحة الجهاز الهضمي',
          secondaryLabel: 'الجهاز الهضمي والكبد',
          description: 'أمراض الكبد المتقدمة، والمناظير العلاجية، وجراحات الجهاز الهضمي المعقدة.',
          status: 'on-request',
          statusLabel: 'حسب الطلب',
        },
        {
          id: 'nephrology-urology',
          title: 'أمراض الكلى والمسالك البولية',
          secondaryLabel: 'الكلى والمسالك',
          description: 'تنسيق الغسيل الكلوي، وعلاج حصوات الكلى، وجراحة المسالك الترميمية.',
          status: 'on-request',
          statusLabel: 'حسب الطلب',
        },
        {
          id: 'fertility',
          title: 'علاج العقم وتأخر الإنجاب (أطفال الأنابيب)',
          secondaryLabel: 'الخصوبة والإنجاب',
          description: 'تقنيات المساعدة على الإنجاب المتطورة وفق اللوائح الطبية الهندية المنظمة.',
          status: 'on-request',
          statusLabel: 'حسب الطلب',
        },
        {
          id: 'ophthalmology',
          title: 'طب وجراحة العيون',
          secondaryLabel: 'رعاية العيون',
          description: 'عمليات القرنية المتقدمة، وجراحة الشبكية والجسم الزجاجي، وتصحيح الإبصار.',
          status: 'on-request',
          statusLabel: 'حسب الطلب',
        },
      ],
    },
    patientJourney: {
      title: 'كيف يعمل نوهـافي',
      deck: 'كل خطوة واضحة وموثقة كتابياً ومخططة وفقاً لمواعيد المستشفى الخاصة بك.',
      fullProcessCta: 'تعرف على العملية كاملة',
      stepLabel: 'الخطوة',
      legend: {
        you: 'دورك أنت',
        nuhavi: 'ما ينسقه نوهـافي',
        hospital: 'المستشفى المعالج',
        receive: 'ما تستلمه',
      },
      steps: [
        {
          num: 1,
          title: 'مشاركة تقاريرك الطبية',
          you: 'أرسل استفسارك مع التقارير الحديثة والتشخيص الطبي الحالي.',
          nuhavi: 'ندقق اكتمال ملفك الطبي ونطلب أي فحوصات أو صور ناقصة.',
          hospital: 'يعد المنسق الطبي الداخلي ملفك لمراجعته من كبار الأطباء.',
          receive: 'تأكيد فوري باستلام الطلب وبيانات الاتصال بمنسقك المخصص.',
        },
        {
          num: 2,
          title: 'استكشاف الخيارات والرأي الثاني',
          you: 'ناقش رغباتك وتفضيلاتك مع المنسق الخاص بك.',
          nuhavi: 'نعرض ملفك الطبي على المستشفيات الشريكة المعتمدة.',
          hospital: 'يدرس الاستشاريون التقارير ويقترحون الخطة العلاجية الأنسب.',
          receive: 'آراء طبية مستقلة تقارن بين الأساليب العلاجية المختلفة.',
        },
        {
          num: 3,
          title: 'التقديرات المالية المكتوبة',
          you: 'اطلع على التقديرات وما هو مشمول وغير مشمول وأتعاب التنسيق.',
          nuhavi: 'نضع تقديرات المستشفيات في جدول مقارنة ونشرح الفروق بدقة.',
          hospital: 'يصدر تقديراً مفصلاً بالتكاليف ومدة الإقامة وفئة الغرفة.',
          receive: 'مستند مقارنة مالية شامل وموثق كتابياً.',
        },
        {
          num: 4,
          title: 'تسهيل التأشيرة وحجز السفر',
          you: 'تقدم بطلب التأشيرة الطبية الهندية واحجز تذاكر الطيران.',
          nuhavi: 'نستخرج خطاب الدعوة الطبي الرسمي وننظم خط سير الرحلة.',
          hospital: 'يصدر خطاب المساعدة في التأشيرة الطبية المعتمد لدى FRRO.',
          receive: 'خطاب المستشفى للتأشيرة ودليل إرشادي شامل قبل السفر.',
        },
        {
          num: 5,
          title: 'الوصول والإقامة المريحة',
          you: 'السفر إلى حيدر أباد برفقة أحد أفراد أسرتك.',
          nuhavi: 'نستقبلك في المطار ونقلك بسيارة خاصة إلى مقر إقامتك المجهز.',
          hospital: 'تسجيل دخولك مسبقاً وتأكيد مواعيد الاستشارات مع الأطباء.',
          receive: 'شريحة اتصال محلية، ومواصلات مؤمنة، وإرشادات الإقامة.',
        },
        {
          num: 6,
          title: 'الاستشارات والرعاية بالمستشفى',
          you: 'حضور مواعيد الفحوصات والعمليات المقررة داخل المستشفى.',
          nuhavi: 'يرافقك منسقك في الزيارات الطبية الهامة ويقدم الترجمة الفورية.',
          hospital: 'إجراء الفحوصات والجراحة وتقديم الرعاية التمريضية الفائقة.',
          receive: 'إحاطات يومية وتحديثات منتظمة بلغة مبسطة عن مسار العلاج.',
        },
        {
          num: 7,
          title: 'الخروج والمتابعة بعد العودة',
          you: 'استلام التقرير النهائي وشهادة اللياقة الطبية للسفر.',
          nuhavi: 'ننسق استشارات المتابعة عن بُعد مع طبيبك بعد العودة لوطنك.',
          hospital: 'يقدم ملف الخروج الشامل مع خطة الأدوية والتعليمات الطبية.',
          receive: 'ملف رقمي كامل لجميع سجلاتك الطبية ودعم مستمر من المنسق.',
        },
      ],
    },
    coordinatorBenefits: {
      title: 'لماذا يفضل المرضى وعائلاتهم الاستعانة بمنسق؟',
      deck: 'يتولى المنسق إدارة الترتيبات وتوضيح التفاصيل لتتفرغ تماماً لصحتك وعلاجك.',
      cards: [
        { title: 'توجيه مستقل', text: 'نعمل لصالحك تماماً، ولا نتقاضى أي عمولات تسويقية من المستشفيات.' },
        { title: 'تقديرات واضحة ومكتوبة', text: 'شفافية كاملة. تكاليف المستشفى وأتعابنا محددة مسبقاً دون مفاجآت.' },
        { title: 'مراجعة بإشراف أطباء', text: 'تدقيق المستندات الطبية من أطباء متخصصين قبل إرسالها إلى المستشفى.' },
        { title: 'دعم لغوي ومترجمون', text: 'منسقون ومترجمون يتحدثون العربية بطلاقة يرافقونك في كل خطوة.' },
        { title: 'خطاب تأشيرة سريع', text: 'استخراج خطابات المساعدة للتأشيرة الطبية من مستشفيات معتمدة.' },
        { title: 'استقبال من المطار', text: 'استقبال خاص في صالة الوصول ونقل آمن إلى مقر الإقامة المحجوز.' },
        { title: 'مرافقة في المستشفى', text: 'حضور شخصي معك في أهم الاستشارات الطبية في مستشفيات حيدر أباد.' },
        { title: 'متابعة يومية بالمركز', text: 'حل استفسارات الفواتير، ومتابعة خدمات التمريض والتغذية المطلوبة.' },
        { title: 'أرشيف رقمي لسجلاتك', text: 'رقمنة وحفظ كل صور الأشعة والتحاليل وتقارير الخروج بأمان.' },
        { title: 'رعاية بعد عودتك للوطن', text: 'التنسيق المستمر مع الجراح المعالج للأشهر التالية بعد عودتك.' },
      ],
    },
    hospitalSelection: {
      title: 'اختيار المستشفى بناءً على الكفاءة، لا الشهرة',
      deck: 'لا نصنف المستشفيات تفضيلياً ولا نبيع باقات علاجية. نربط حالتك بالمستشفيات التي تستوفي معاييرنا السريرية والأخلاقية.',
      standardCta: 'اقرأ معايير الاختيار لدينا',
      checklist: [
        'اعتماد وطني (NABH) أو دولي (JCI) سارٍ للمستشفى مع التحقق من الشهادة وتاريخ الصلاحية',
        'تجهيزات وبنية تحتية تخصصية متكاملة تشمل غرف العمليات المجهزة وأقسام العناية المركزة',
        'مراجعة الحالة عبر لجنة أورام متعددة التخصصات (Tumour Board) لجميع حالات السرطان',
        'مكتب مخصص لرعاية المرضى الدوليين وتوفير الدعم اللغوي والمترجمين',
        'تقديرات تكلفة تفصيلية ومكتوبة توضح ما هو مشمول ومستثنى ومدة الإقامة قبل السفر',
        'تقارير خروج طبية شاملة باللغة الإنجليزية تُسلم مباشرة للمريض',
        'اتفاقية تعاون أخلاقية موقعة مع نوهـافي تمنع أي عمولات إحالة للمرضى',
      ],
      cardTitle: 'الدفع المباشر والسياسة المستقلة',
      cardText: 'تصدر المستشفيات فواتيرها مباشرة للمرضى لجميع الخدمات الطبية. لا تتقاضى نوهـافي أي عمولات إحالة ولا تضيف هوامش ربح على تقديرات المستشفى. أتعاب التنسيق واضحة ومحددة كتابياً قبل السفر.',
    },
    costBreakdown: {
      title: 'مما تتكون تكلفة العلاج؟',
      deck: 'تكاليف المستشفى، والسفر، والإقامة، وأتعاب التنسيق — موضحة مسبقاً بشفافية وبدون رسوم خفية.',
      feesCta: 'كيف تعمل التقديرات وأتعابنا',
      illustrativeNote: 'رسم توضيحي لمتوسط بنود الإنفاق في رحلة العلاج الطبي (تختلف النسب الفعلية بحسب نوع الإجراء وفئة الغرفة)',
      categories: [
        { name: 'رسوم المستشفى والإقامة', percent: '22%', desc: 'الغرفة، الرعاية التمريضية، غرفة العمليات، والعناية المركزة إذا لزم الأمر. تتفاوت حسب مدة الإقامة.' },
        { name: 'أتعاب الأطباء والاستشاريين', percent: '16%', desc: 'أتعاب الجراح وطبيب التخدير والاستشاريين المعالجين. تكون مشمولة في باقة العلاج أو مفصلة على حدة.' },
        { name: 'الفحوصات والأشعة التشخيصية', percent: '14%', desc: 'فحوصات المختبر، والأشعة المقطعية، والرنين المغناطيسي، وفحص PET في الهند.' },
        { name: 'الأدوية والغرسات الطبية', percent: '20%', desc: 'العلاج الكيميائي والأدوية الموجهة، أو دعامات ومفاصل العظام. يحدد التقدير نوع الدواء أو المفصل.' },
        { name: 'التأهيل واستشارات المتابعة', percent: '10%', desc: 'العلاج الطبيعي، وتغيير الضمادات، واستشارات المتابعة الدورية، وأدوية الخروج.' },
        { name: 'تذاكر السفر والإقامة الفندقية', percent: '10%', desc: 'تذاكر الطيران، والإقامة بالقرب من المستشفى، والاستقبال في المطار، والتنقلات المحلية.' },
        { name: 'أتعاب خدمة تنسيق نوهـافي', percent: '8%', desc: 'أتعاب التنسيق المتفق عليها كتابياً قبل السفر. تغطي إعداد الملف، وجدولة المواعيد، والدعم المستمر.' },
      ],
    },
    patientStories: {
      title: 'تجارب وقصص المرضى',
      deck: 'تجارب واقعية موثقة لمرضانا. لا ننشر أي تجربة إلا بموافقة كتابية صريحة مع الحفاظ التام على خصوصية البيانات.',
      linkText: 'كيف نتعامل مع تجارب وقصص المرضى',
      policyTitle: 'ميثاق النشر الأخلاقي لتجارب المرضى',
      policyText: 'الرعاية الصحية أمر شديد الخصوصية. نحن لا ندفع للمرضى مقابل التقييمات، ولا نستعين بممثلين، ولا نبالغ في النتائج. كل تجربة منشورة تعبر عن رحلة علاج حقيقية جرى تنسيقها بأعلى معايير حماية الخصوصية.',
    },
    prepareWithConfidence: {
      title: 'استعد لرحلتك بكل ثقة',
      deck: 'أدلة إرشادية تساعدك في التخطيط لرحلتك العلاجية، وفهم تقديرات التكاليف، وإعداد تقاريرك الطبية.',
      guides: [
        {
          title: 'إعداد وتجهيز تقاريرك الطبية',
          desc: 'كيفية تنظيم صور الأشعة والتقارير المخبرية وعينات الأنسجة قبل الإرسال.',
          href: '/en/records/',
        },
        {
          title: 'فهم وقراءة تقديرات تكلفة المستشفى',
          desc: 'شرح تفصيلي لبنود التقدير الطبي، شروط ترقية الغرف، والمصاريف الطارئة.',
          href: '/en/how-it-works/costs-and-fees/',
        },
        {
          title: 'أسئلة مهمة للمستشفى قبل السفر',
          desc: '10 أسئلة سريرية أساسية يجب طرحها على الجراح المعالج في الاستشارة التمهيدية.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'دليل التأشيرة الطبية إلى الهند',
          desc: 'المستندات المطلوبة، شروط المرافقين، والمدة الزمنية لإصدار التأشيرة الطبية.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'التخطيط للإقامة في حيدر أباد',
          desc: 'المناطق السكنية الآمنة بجوار كبرى المجمعات الطبية والخدمات اليومية للمرضى.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'السفر برفقة أحد أفراد العائلة',
          desc: 'إرشادات عملية لتأشيرة المرافق، السكن المشترك، والدعم المعنوي للمريض.',
          href: '/en/knowledge-centre/',
        },
      ],
    },
    closingCta: {
      title: 'رحلتك العلاجية تبدأ بالوضوح والاطمئنان',
      deck: 'أرسل استفسارك الطبي اليوم. سيراجع منسق الرعاية طلبك ويرشدك إلى الخطوات التالية — بدون أي التزام.',
      primaryCta: 'طلب رأي طبي',
      secondaryCta: 'تحدث مع منسق الرعاية',
    },
  },

  fr: {
    hero: {
      eyebrow: 'Coordination de voyage médical',
      headline: 'Soins médicaux experts en Inde. Accompagnement à chaque étape.',
      deck: 'Comprenez vos options de traitement, explorez les hôpitaux adaptés, recevez des avis médicaux coordonnés et planifiez votre parcours de soins — avec un accompagnement avant, pendant et après le traitement.',
      primaryCta: 'Demander un avis médical',
      secondaryCta: 'Explorer les traitements',
      responsibilityNote: 'Nous coordonnons les soins. Les hôpitaux examinent, diagnostiquent, décident et traitent en toute indépendance. Nous ne promettons ni résultats, ni économies, ni obtention de visa.',
      routeEyebrow: 'Votre parcours de coordination',
      routeCaption: 'Sélectionnez une étape ci-dessous pour découvrir notre accompagnement',
      stops: [
        {
          id: 'share-details',
          stepNumber: '01',
          shortLabel: 'Partagez vos antécédents médicaux',
          title: '1. Partagez vos antécédents médicaux',
          description: 'Envoyez une courte demande. Ensuite, si vous acceptez, téléversez vos rapports via un lien privé envoyé par e-mail.',
        },
        {
          id: 'explore-options',
          stepNumber: '02',
          shortLabel: 'Explorez vos options',
          title: '2. Explorez vos options',
          description: 'Une équipe hospitalière examine vos dossiers. Vous recevez leur avis et des devis écrits expliqués en langage clair.',
        },
        {
          id: 'plan-journey',
          stepNumber: '03',
          shortLabel: 'Planifiez votre voyage de soins',
          title: '3. Planifiez votre voyage de soins',
          description: 'Dès que vous décidez, nous organisons la visite autour de vos rendez-vous. Votre coordinateur vous aide pour le visa, le séjour et l’accueil.',
        },
      ],
    },
    whoWeAre: {
      title: 'Qui nous sommes, et qui nous ne sommes pas',
      deck: 'Nuhavi Health est un service indépendant de coordination de voyages médicaux pour les patients internationaux se rendant en Inde.',
      weDoTitle: 'Ce que nous faisons',
      weDoItems: [
        'Vérifier que vos dossiers sont complets avant consultation hospitalière',
        'Organiser un examen par une équipe hospitalière répondant à nos standards',
        'Comparer les devis côte à côte pour une décision éclairée',
        'Planifier rendez-vous, lettre de visa, voyage, séjour et interprètes',
        'Rester en contact après votre retour à domicile',
      ],
      weDoNotTitle: 'Ce que nous ne faisons pas',
      weDoNotItems: [
        'Diagnostiquer, prescrire ou décider de votre traitement',
        'Promouvoir ou classer des médecins individuels',
        'Fournir des soins d’urgence',
        'Garantir des résultats, des économies ou l’obtention de visa',
        'Vendre des forfaits touristiques',
      ],
      trustCards: [
        {
          title: 'Vérification des accréditations hospitalières',
          text: 'Accréditations nationales NABH ou internationales JCI et capacités cliniques vérifiées avant toute présentation.',
        },
        {
          title: 'Sélection hospitalière par spécialité',
          text: 'Les hôpitaux sont sélectionnés selon leur volume chirurgical avéré pour votre affection spécifique.',
        },
        {
          title: 'Devis détaillés et transparents',
          text: 'Chaque devis précise ce qui est inclus, exclu, la catégorie de chambre, la devise et la durée de validité.',
        },
        {
          title: 'Aucune commission d’intermédiation',
          text: 'Les patients règlent directement les hôpitaux pour leurs soins. Nos frais de coordination sont convenus par écrit.',
        },
        {
          title: 'Communication et coordination dédiées',
          text: 'Un coordinateur direct assiste pour les rendez-vous, la lettre de visa, la liaison linguistique et la logistique.',
        },
        {
          title: 'Confidentialité et dossiers médicaux',
          text: 'Les dossiers et examens d’imagerie sont traités avec la plus stricte confidentialité.',
        },
      ],
    },
    peopleNotPackages: {
      eyebrow: 'Coordination personnalisée',
      title: 'Des personnes, pas des forfaits',
      deck: 'Le même coordinateur organise vos rendez-vous, vous guide dans la logistique et prend de vos nouvelles après votre retour.',
      photos: [
        {
          label: 'Photo à venir',
          description: 'Un coordinateur échangeant avec une patiente et sa fille',
          caption: 'Votre coordinateur vous explique chaque étape, par écrit et en personne.',
        },
        {
          label: 'Photo à venir',
          description: 'Un coordinateur accueillant une famille à l’aéroport',
          caption: 'Accueilli à l’arrivée à Hyderabad et conduit à votre hébergement.',
        },
        {
          label: 'Photo à venir',
          description: 'Un interprète accompagnant un patient lors d’une consultation',
          caption: 'Assistance linguistique et interprètes hospitaliers disponibles dès que nécessaire.',
        },
      ],
    },
    specialties: {
      eyebrow: 'Spécialités médicales',
      title: 'Explorer les traitements',
      deck: 'Nous nous concentrons prioritairement sur l’oncologie et le remplacement articulaire, où nous coordonnons de manière approfondie.',
      acceptingLabel: 'Demandes acceptées',
      onRequestLabel: 'Sur demande',
      items: [
        {
          id: 'cancer-care',
          title: 'Cancérologie (Oncologie)',
          secondaryLabel: 'Oncologie',
          description: 'Revue diagnostique, chirurgie, chimiothérapie, radiothérapie et thérapies innovantes.',
          status: 'accepting',
          meta: 'Diagnostic complet · Chirurgie oncologique · Traitements ciblés',
          image: '/images/treatment-oncology.jpg',
          href: '/en/treatments/oncology/',
        },
        {
          id: 'joint-replacement',
          title: 'Orthopédie et remplacement articulaire',
          secondaryLabel: 'Orthopédie',
          description: 'Prothèses de genou et de hanche assistées par robotique et rééducation structurée.',
          status: 'accepting',
          meta: 'Remplacement de genou et hanche · Chirurgie robotique · Rééducation',
          image: '/images/treatment-orthopaedics.jpg',
          href: '/en/treatments/orthopaedics/',
        },
        {
          id: 'cardiac-sciences',
          title: 'Sciences cardiaques',
          secondaryLabel: 'Cardiologie',
          description: 'Chirurgie de pontage, réparations valvulaires et cardiologie interventionnelle.',
          status: 'on-request',
          meta: 'Pontage coronarien · Réparations valvulaires · Cardiologie pédiatrique',
          image: '/images/treatment-cardiac-sciences.jpg',
          href: '/en/treatments/cardiac-sciences/',
        },
        {
          id: 'neurosciences',
          title: 'Neurosciences',
          secondaryLabel: 'Neurochirurgie',
          description: 'Chirurgie des tumeurs cérébrales, anomalies vasculaires et rachis complexe.',
          status: 'on-request',
          meta: 'Neurochirurgie · Tumeurs cérébrales · Stimulation cérébrale',
          image: '/images/treatment-neurosciences.jpg',
          href: '/en/treatments/neurosciences/',
        },
        {
          id: 'organ-transplants',
          title: 'Greffes d’organes',
          secondaryLabel: 'Transplantation',
          description: 'Transplantations rénales et hépatiques par donneur vivant selon la législation indienne.',
          status: 'on-request',
          meta: 'Donneur vivant apparenté · Conformité THOA · Soins intensifs',
          image: '/images/treatment-organ-transplants.jpg',
          href: '/en/treatments/organ-transplants/',
        },
        {
          id: 'spine-surgery',
          title: 'Chirurgie du rachis',
          secondaryLabel: 'Rachis',
          description: 'Décompression mini-invasive, arthrodèse lombaire et correction de scoliose.',
          status: 'on-request',
          meta: 'Hernies discales · Arthrodèse rachidienne · Chirurgie endoscopique',
          image: '/images/treatment-spine-surgery.jpg',
          href: '/en/treatments/spine-surgery/',
        },
        {
          id: 'gastroenterology',
          title: 'Gastro-entérologie',
          secondaryLabel: 'Hépato-gastro',
          description: 'Endoscopie diagnostique avancée, CPRE et chirurgie gastro-intestinale.',
          status: 'on-request',
          meta: 'Endoscopie thérapeutique · CPRE · Chirurgie digestive',
          image: '/images/treatment-gastroenterology.jpg',
          href: '/en/treatments/gastroenterology/',
        },
        {
          id: 'nephrology-urology',
          title: 'Néphrologie et urologie',
          secondaryLabel: 'Urologie',
          description: 'Calculs rénaux par laser, prostatectomie robotique et hémodialyse.',
          status: 'on-request',
          meta: 'Traitement laser des calculs · Chirurgie robotique · Dialyse',
          image: '/images/treatment-nephrology-urology.jpg',
          href: '/en/treatments/nephrology-urology/',
        },
        {
          id: 'fertility',
          title: 'Médecine de la reproduction (FIV)',
          secondaryLabel: 'Fertilité',
          description: 'Fécondation in vitro, ICSI et diagnostic génétique préimplantatoire.',
          status: 'on-request',
          meta: 'FIV / ICSI · Tests génétiques · Préservation de fertilité',
          image: '/images/treatment-fertility.jpg',
          href: '/en/treatments/fertility/',
        },
        {
          id: 'ophthalmology',
          title: 'Ophtalmologie',
          secondaryLabel: 'Soins oculaires',
          description: 'Greffes de cornée, chirurgie de la cataracte et interventions vitréo-rétiniennes.',
          status: 'on-request',
          meta: 'Greffes cornéennes · Chirurgie de la rétine · Glaucome',
          image: '/images/treatment-ophthalmology.jpg',
          href: '/en/treatments/ophthalmology/',
        },
      ],
    },
    patientJourney: {
      title: 'Sept étapes de coordination, du premier message jusqu’au retour',
      deck: 'Nous vous guidons à travers chaque étape logistique pendant que l’hôpital assure vos soins médicaux.',
      steps: [
        {
          number: '1',
          name: 'Partagez vos antécédents médicaux',
          who: 'Vous et votre coordinateur',
          what: 'Envoyez une courte demande, puis téléversez vos rapports via un lien sécurisé et privé.',
          hospital: 'Aucun contact hospitalier à ce stade',
          receive: 'Confirmation de réception et contact de votre coordinateur',
        },
        {
          number: '2',
          name: 'Revue des pièces et questions de clarification',
          who: 'Votre coordinateur',
          what: 'Nous vérifions la lisibilité et l’exhaustivité de vos comptes-rendus avant consultation.',
          hospital: 'Les équipes hospitalières sont sollicitées selon vos critères',
          receive: 'Une liste des examens manquants si nécessaire',
        },
        {
          number: '3',
          name: 'Consultation hospitalière et estimations',
          who: 'L’équipe hospitalière',
          what: 'Les spécialistes étudient votre dossier et émettent un avis médical préliminaire.',
          hospital: 'Établissement accrédité sélectionné pour son expertise',
          receive: 'Avis médical écrit et estimations financières détaillées',
        },
        {
          number: '4',
          name: 'Comparaison des options et décision',
          who: 'Vous et votre famille',
          what: 'Vous comparez les approches chirurgicales, les durées de séjour et les coûts.',
          hospital: 'Disponible pour répondre aux questions de clarification',
          receive: 'Temps nécessaire pour décider en toute sérénité',
        },
        {
          number: '5',
          name: 'Planification du voyage et formalités de visa',
          who: 'Votre coordinateur',
          what: 'Nous coordonnons l’invitation médicale officielle pour la demande de visa e-Medical.',
          hospital: 'Délivre la lettre d’invitation médicale officielle',
          receive: 'Lettre de visa et calendrier prévisionnel des rendez-vous',
        },
        {
          number: '6',
          name: 'Arrivée, consultations et hospitalisation',
          who: 'Vous, votre accompagnant et l’hôpital',
          what: 'Accueil à l’aéroport d’Hyderabad, accompagnement aux consultations et examens.',
          hospital: 'Prend en charge l’ensemble des soins et actes cliniques',
          receive: 'Accompagnement quotidien et interprétariat',
        },
        {
          number: '7',
          name: 'Sortie, convalescence et suivi à distance',
          who: 'Vous, votre coordinateur et votre médecin local',
          what: 'Contrôles post-opératoires, remise du dossier complet et organisation du retour.',
          hospital: 'Délivre le compte-rendu d’hospitalisation et les ordonnances',
          receive: 'Dossier médical complet et téléconsultations de suivi',
        },
      ],
    },
    coordinatorBenefits: {
      title: 'Ce que votre coordinateur fait pour vous',
      deck: 'Un accompagnateur dévoué pour que vous puissiez vous concentrer pleinement sur votre santé.',
      cards: [
        {
          title: 'Un interlocuteur unique',
          text: 'Le même coordinateur suit votre dossier dès le premier message jusqu’à votre convalescence chez vous.',
        },
        {
          title: 'Assistance linguistique',
          text: 'Coordination directe en anglais, français, russe, ouzbek et swahili pour des échanges médicaux fluides.',
        },
        {
          title: 'Clarté administrative et visa',
          text: 'Obtention rapide des lettres d’invitation hospitalières officielles pour vos démarches consulaires.',
        },
        {
          title: 'Logistique locale et accueil',
          text: 'Prise en charge à l’aéroport d’Hyderabad, orientation vers des hébergements vérifiés et transferts.',
        },
      ],
    },
    hospitalSelection: {
      title: 'Notre standard de sélection des hôpitaux',
      deck: 'Nous appliquons des critères stricts pour recommander uniquement des établissements de santé réputés.',
      standardCta: 'Consulter nos critères de sélection',
      checklist: [
        'Accréditation hospitalière nationale NABH ou internationale JCI',
        'Plateaux techniques chirurgicaux modernes et réanimation 24/7',
        'Comités multidisciplinaires de concertation (RCP / Tumour Boards)',
        'Volume opératoire vérifié dans la spécialité concernée',
        'Bureau d’accueil dédié aux patients internationaux',
      ],
      cardTitle: 'Critères rigoureux, sans compromis',
      cardText: 'Nous refusons toute rémunération promotionnelle afin de préserver une impartialité totale dans nos recommandations.',
    },
    costBreakdown: {
      title: 'Comprendre le coût des soins en Inde',
      deck: 'Une transparence totale sur la composition des frais hospitaliers et de coordination.',
      feesCta: 'En savoir plus sur les devis',
      illustrativeNote: 'Répartition moyenne indicative pour une intervention chirurgicale programmée.',
      categories: [
        { name: 'Actes chirurgicaux et honoraires médicaux', percent: '45%', desc: 'Chirurgiens, anesthésistes et équipe soignante.' },
        { name: 'Séjour hospitalier et soins intensifs', percent: '25%', desc: 'Chambre individuelle, surveillance et soins infirmiers.' },
        { name: 'Imagerie et biologie médicale', percent: '15%', desc: 'Examens pré-opératoires, scanners, IRM et analyses.' },
        { name: 'Pharmacie et dispositifs médicaux', percent: '10%', desc: 'Médicaments per-opératoires et implants certifiés.' },
        { name: 'Coordination et logistique', percent: '5%', desc: 'Accueil, interprétariat et accompagnement personnalisé.' },
      ],
    },
    patientStories: {
      title: 'Témoignages et retours d’expérience',
      deck: 'Découvrez comment des patients internationaux ont vécu leur parcours de soins avec Nuhavi Health.',
      linkText: 'Lire les témoignages',
      policyTitle: 'Notre politique éthique de témoignages',
      policyText: 'Tous les témoignages sont publiés avec le consentement éclairé des patients, sans modification de leur ressenti médical.',
    },
    prepareWithConfidence: {
      title: 'Préparez votre voyage en toute sérénité',
      deck: 'Guides pratiques pour organiser vos documents médicaux et anticiper votre séjour.',
      guides: [
        {
          title: 'Préparer vos documents médicaux',
          desc: 'Comment scanner et organiser vos examens d’imagerie et comptes-rendus.',
          href: '/en/records/',
        },
        {
          title: 'Comprendre un devis hospitalier',
          desc: 'Guide détaillé des inclusions, exclusions et clauses tarifaires.',
          href: '/en/how-it-works/costs-and-fees/',
        },
        {
          title: 'Questions essentielles à poser à l’équipe médicale',
          desc: '10 questions cliniques clés avant de confirmer votre déplacement.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Guide du visa médical pour l’Inde',
          desc: 'Formalités e-Medical visa, délais d’obtention et visa pour accompagnant.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Planifier votre hébergement à Hyderabad',
          desc: 'Résidences sécurisées à proximité des principaux campus hospitaliers.',
          href: '/en/knowledge-centre/',
        },
        {
          title: 'Voyager avec un proche',
          desc: 'Conseils pratiques pour l’accompagnant durant la convalescence.',
          href: '/en/knowledge-centre/',
        },
      ],
    },
    closingCta: {
      title: 'Votre parcours de soins commence par la clarté',
      deck: 'Envoyez votre demande médicale dès aujourd’hui. Un coordinateur étudiera votre dossier sans engagement.',
      primaryCta: 'Demander un avis médical',
      secondaryCta: 'Échanger avec un coordinateur',
    },
  },
};

