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
      responsibilityNote: 'We coordinate care. Hospitals examine, decide and treat. We do not promise outcomes, savings or visa approval.',
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
      deck: 'Nuhavi Health is a doctor-led coordination company in Hyderabad. We stand beside you while hospitals provide the medical care.',
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
          title: 'Your records stay private',
          text: 'Shared only through private, time-limited links, and only with hospitals you agree to.',
        },
        {
          title: 'Estimates in writing',
          text: 'Every estimate states what is included, what is not, the currency and how long it is valid.',
        },
        {
          title: 'Our fee, stated up front',
          text: 'You know what Nuhavi charges before you commit.',
          marker: '[Needs confirmation: no-hospital-payments statement (match signed MOUs)]',
        },
        {
          title: 'Hospitals, verified',
          text: 'Accreditation and services are checked and dated before a hospital appears on this site.',
        },
      ],
    },
    peopleNotPackages: {
      eyebrow: 'Personal Coordination',
      title: 'People, not packages',
      deck: 'The same coordinator meets you, sits with you at consultations and checks on you after you fly home.',
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
          caption: 'An interpreter at consultations when you need one.',
        },
      ],
    },
    specialties: {
      eyebrow: 'Medical Specialties',
      title: 'Explore treatments',
      deck: 'We focus first on cancer care and joint replacement, where we can coordinate properly. Other specialties are arranged case by case.',
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
        'NABH / JCI national or international accreditation verified',
        'Proven surgical and clinical volume in your required specialty',
        'Dedicated international patient wing with verified billing protocols',
        'Direct specialist access without middleman commissions',
        'Written commitment to transparent clinical governance',
      ],
      cardTitle: 'Our Selection Standard',
      cardText: 'Every hospital on this platform is independently audited for clinical credentials, medical equipment vintage, hygiene compliance, and fair pricing practices.',
    },
    costBreakdown: {
      title: 'What goes into the cost of treatment',
      deck: 'Hospital costs, travel, stay and coordination fees — explained up front with no hidden charges.',
      feesCta: 'How estimates and our fee work',
      illustrativeNote: 'Illustrative breakdown of typical medical travel expenditure',
      categories: [
        { name: 'Surgery & Surgeon Fees', percent: '45%', desc: 'Operating room, surgeon, anaesthetist, and primary clinical procedures.' },
        { name: 'Hospital Stay & Nursing', percent: '20%', desc: 'Inpatient room charges, routine nursing, and standard hospital medicines.' },
        { name: 'Diagnostic Tests & Scans', percent: '10%', desc: 'Pre-operative pathology labs, MRI, CT scans, and post-procedure checks.' },
        { name: 'Implants & Consumables', percent: '10%', desc: 'Certified prosthetics, stents, or specialized surgical materials if required.' },
        { name: 'Local Accommodation', percent: '7%', desc: 'Verified guest house, serviced apartment or hotel near the medical facility.' },
        { name: 'Flight & Medical Visa', percent: '5%', desc: 'Round-trip airfare and Indian government medical visa processing fees.' },
        { name: 'Nuhavi Coordination Fee', percent: '3%', desc: 'Transparent coordinator fee stated clearly up front before travel.' },
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
          href: '/en/resources/preparing-medical-records/',
        },
        {
          title: 'Understanding hospital estimates',
          desc: 'A line-by-line guide on what is included, room upgrade clauses, and unexpected extras.',
          href: '/en/resources/understanding-treatment-estimate/',
        },
        {
          title: 'Questions to ask before travelling',
          desc: '10 clinical questions to ask your treating doctor during the initial teleconsultation.',
          href: '/en/resources/questions-to-ask-hospital/',
        },
        {
          title: 'Medical visa guide for India',
          desc: 'Required documents, eligibility for attendants, and processing times for e-Medical visas.',
          href: '/en/resources/',
        },
        {
          title: 'Planning your stay in Hyderabad',
          desc: 'Safe neighbourhoods near major medical centres, verified serviced stays, and daily amenities.',
          href: '/en/resources/',
        },
        {
          title: 'Bringing a family attendant',
          desc: 'Practical guidance on medical attendant visas, lodging together, and emotional support.',
          href: '/en/resources/',
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
      headline: 'Квалифицированная медицинская помощь в Индии. Поддержка на каждом этапе.',
      deck: 'Узнайте о вариантах лечения, выберите подходящие клиники, получите согласованные медицинские заключения и спланируйте поездку — с сопровождением до, во время и после лечения.',
      primaryCta: 'Запросить медицинское заключение',
      secondaryCta: 'Виды лечения',
      responsibilityNote: 'Мы координируем организационные вопросы. Обследование, назначения и лечение проводят клиники. Мы не даем гарантий исхода лечения, экономии средств или одобрения визы.',
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
      deck: 'Nuhavi Health — координационная служба под врачебным руководством в Хайдарабаде. Мы сопровождаем вас, пока клиники оказывают медицинскую помощь.',
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
          title: 'Ваши данные остаются конфиденциальными',
          text: 'Передаются только по защищенным ссылкам с ограниченным сроком действия и только в согласованные с вами больницы.',
        },
        {
          title: 'Письменные сметы',
          text: 'Каждая смета четко указывает, что включено, что не включено, валюту и срок действия.',
        },
        {
          title: 'Наша комиссия известна заранее',
          text: 'Вы точно знаете стоимость услуг Nuhavi до принятия каких-либо обязательств.',
        },
        {
          title: 'Проверенные больницы',
          text: 'Аккредитация и медицинские направления проверяются и датируются до появления клиники на сайте.',
        },
      ],
    },
    peopleNotPackages: {
      eyebrow: 'Индивидуальное сопровождение',
      title: 'Забота о людях, а не продажа пакетов',
      deck: 'Один и тот же координатор встретит вас, будет сопровождать на консультациях и справится о вашем здоровье после возвращения домой.',
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
          caption: 'Переводчик на консультациях при необходимости.',
        },
      ],
    },
    specialties: {
      eyebrow: 'Медицинские направления',
      title: 'Направления лечения',
      deck: 'В первую очередь мы фокусируемся на онкологии и замене суставов, где можем обеспечить безупречную координацию. Другие направления организуются индивидуально.',
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
        'Подтвержденная государственная или международная аккредитация NABH / JCI',
        'Высокий объем успешных операций по вашему клиническому направлению',
        'Специализированное отделение для иностранцев с прозрачным выставлением счетов',
        'Прямой контакт с ведущими врачами без посредников',
        'Письменное подтверждение прозрачных клинических стандартов',
      ],
      cardTitle: 'Наш стандарт отбора',
      cardText: 'Каждая клиника на платформе проходит независимый аудит на уровень оснащения, соблюдение протоколов стерильности и открытую ценовую политику.',
    },
    costBreakdown: {
      title: 'Из чего складывается стоимость лечения',
      deck: 'Медицинские расходы, перелет, проживание и координация — все фиксируется открыто и без скрытых платежей.',
      feesCta: 'Как формируются сметы и наша комиссия',
      illustrativeNote: 'Примерная структура типичных расходов на медицинскую поездку',
      categories: [
        { name: 'Операция и гонорар хирурга', percent: '45%', desc: 'Операционная, хирург, анестезиолог и ключевые лечебные манипуляции.' },
        { name: 'Пребывание в стационаре и уход', percent: '20%', desc: 'Палата, круглосуточное наблюдение медсестер и базовые медикаменты.' },
        { name: 'Диагностика и анализы', percent: '10%', desc: 'Предоперационные лабораторные анализы, МРТ, КТ и контрольные исследования.' },
        { name: 'Импланты и расходные материалы', percent: '10%', desc: 'Сертифицированные эндопротезы, стенты и хирургические комплектующие.' },
        { name: 'Проживание в городе', percent: '7%', desc: 'Проверенные апартаменты или гостиница рядом с клиникой на амбулаторный период.' },
        { name: 'Авиабилеты и медицинская виза', percent: '5%', desc: 'Билеты в обе стороны и визовые сборы для пациента и сопровождающего.' },
        { name: 'Координационная комиссия Nuhavi', percent: '3%', desc: 'Прозрачная комиссия координатора, утвержденная до начала поездки.' },
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
          href: '/en/resources/preparing-medical-records/',
        },
        {
          title: 'Как читать предварительную смету клиники',
          desc: 'Построчный разбор статей расходов, условия палат и непредвиденные траты.',
          href: '/en/resources/understanding-treatment-estimate/',
        },
        {
          title: 'Вопросы врачу перед поездкой',
          desc: '10 ключевых вопросов лечащему хирургу на предварительной телеконсультации.',
          href: '/en/resources/questions-to-ask-hospital/',
        },
        {
          title: 'Медицинская виза в Индию',
          desc: 'Перечень документов, визы для сопровождающих и сроки оформления e-Medical Visa.',
          href: '/en/resources/',
        },
        {
          title: 'Организация проживания в Хайдарабаде',
          desc: 'Безопасные районы около ведущих клиник, проверенное жилье и инфраструктура.',
          href: '/en/resources/',
        },
        {
          title: 'Поездка с сопровождающим',
          desc: 'Полезные советы по оформлению визы сопровождающего, совместному быту и уходу.',
          href: '/en/resources/',
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
      responsibilityNote: 'نحن ننسق الرعاية. المستشفيات هي التي تفحص وتقرر وتعالج. لا نعد بنتائج علاجية أو توفير مالي أو إصدار التأشيرة.',
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
      deck: 'نوهـافي هيلث هي شركة تنسيق طبي بإشراف أطباء في حيدر أباد. نقف بجانبك بينما تقدم المستشفيات الرعاية الطبية.',
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
          title: 'بياناتك وسجلاتك في سرية تامة',
          text: 'تتم مشاركتها فقط عبر روابط خاصة ومحددة الصلاحية، ومع المستشفيات التي توافق عليها فقط.',
        },
        {
          title: 'تقديرات مالية مكتوبة',
          text: 'يوضح كل تقدير ما هو مشمول وما هو غير مشمول، والعملة ومدة الصلاحية.',
        },
        {
          title: 'أتعابنا محددة مسبقاً',
          text: 'تعرف أتعاب نوهـافي بوضوح قبل أن تلتزم بأي شيء.',
        },
        {
          title: 'مستشفيات معتمدة ومحققة',
          text: 'يتم التحقق من الاعتماد والخدمات الطبية وتوثيقها قبل ظهور أي مستشفى على موقعنا.',
        },
      ],
    },
    peopleNotPackages: {
      eyebrow: 'تنسيق شخصي متكامل',
      title: 'اهتمام بالإنسان، لا بيع باقات',
      deck: 'المنسق نفسه يستقبلك، ويحضر معك الاستشارات الطبية، ويتابع حالتك بعد عودتك إلى وطنك.',
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
          caption: 'مترجم يرافقك في الاستشارات الطبية عند الحاجة.',
        },
      ],
    },
    specialties: {
      eyebrow: 'التخصصات الطبية',
      title: 'استكشف العلاجات',
      deck: 'نركز في المقام الأول على علاج الأورام واستبدال المفاصل حيث نضمن أعلى مستوى من التنسيق. ويتم ترتيب التخصصات الأخرى لكل حالة على حدة.',
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
        'اعتمادات وطنية ودولية موثقة (NABH / JCI)',
        'خبرة سريرية وأعداد عمليات مثبتة في التخصص المطلوب',
        'جناح مخصص للمرضى الدوليين مع بروتوكولات محاسبية شفافة',
        'تواصل مباشر مع كبار الاستشاريين دون وسطاء',
        'التزام موثق بالحوكمة السريرية والأمان الطبي',
      ],
      cardTitle: 'معيار الاختيار المستقل',
      cardText: 'تخضع جميع المستشفيات الشريكة لتدقيق مستقل يشمل حداثة التجهيزات الطبية، ومعدلات مكافحة العدوى، والنزاهة في تسعير الخدمات.',
    },
    costBreakdown: {
      title: 'مما تتكون تكلفة العلاج؟',
      deck: 'تكاليف المستشفى، والسفر، والإقامة، وأتعاب التنسيق — موضحة مسبقاً بشفافية وبدون رسوم خفية.',
      feesCta: 'كيف تعمل التقديرات وأتعابنا',
      illustrativeNote: 'رسم توضيحي لمتوسط بنود الإنفاق في رحلة العلاج الطبي',
      categories: [
        { name: 'الجراحة وأتعاب الاستشاريين', percent: '45%', desc: 'غرفة العمليات، أتعاب الجراح، طبيب التخدير، والإجراءات الطبية الرئيسية.' },
        { name: 'الإقامة بالمستشفى والتمريض', percent: '20%', desc: 'رسوم الغرفة في القسم الداخلي، الرعاية التمريضية، والأدوية القياسية.' },
        { name: 'الفحوصات والأشعة التشخيصية', percent: '10%', desc: 'تحاليل المختبر، الرنين المغناطيسي، الأشعة المقطعية، وفحوصات المتابعة.' },
        { name: 'الغرسات والمستلزمات الطبية', percent: '10%', desc: 'المفاصل الاصطناعية المعتمدة دولياً، الدعامات، والمستهلكات الجراحية.' },
        { name: 'الإقامة الفندقية والشقق', percent: '7%', desc: 'شقق فندقية أو فنادق معتمدة وآمنة قريبة من المستشفى لفترة النقاهة.' },
        { name: 'تذاكر الطيران ورسوم التأشيرة', percent: '5%', desc: 'تذاكر السفر ورسوم إصدار التأشيرة الطبية الإلكترونية للحكومة الهندية.' },
        { name: 'أتعاب خدمة تنسيق نوهـافي', percent: '3%', desc: 'أتعاب التنسيق الواضحة والمحددة مسبقاً قبل التزامك بالسفر.' },
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
          href: '/en/resources/preparing-medical-records/',
        },
        {
          title: 'فهم وقراءة تقديرات تكلفة المستشفى',
          desc: 'شرح تفصيلي لبنود التقدير الطبي، شروط ترقية الغرف، والمصاريف الطارئة.',
          href: '/en/resources/understanding-treatment-estimate/',
        },
        {
          title: 'أسئلة مهمة للمستشفى قبل السفر',
          desc: '10 أسئلة سريرية أساسية يجب طرحها على الجراح المعالج في الاستشارة التمهيدية.',
          href: '/en/resources/questions-to-ask-hospital/',
        },
        {
          title: 'دليل التأشيرة الطبية إلى الهند',
          desc: 'المستندات المطلوبة، شروط المرافقين، والمدة الزمنية لإصدار التأشيرة الطبية.',
          href: '/en/resources/',
        },
        {
          title: 'التخطيط للإقامة في حيدر أباد',
          desc: 'المناطق السكنية الآمنة بجوار كبرى المجمعات الطبية والخدمات اليومية للمرضى.',
          href: '/en/resources/',
        },
        {
          title: 'السفر برفقة أحد أفراد العائلة',
          desc: 'إرشادات عملية لتأشيرة المرافق، السكن المشترك، والدعم المعنوي للمريض.',
          href: '/en/resources/',
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
};

