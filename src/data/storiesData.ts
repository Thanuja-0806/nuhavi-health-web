/**
 * src/data/storiesData.ts
 * Centralized, verified Patient Stories and Patient Journey data for Nuhavi Health.
 *
 * Strict Medical & Ethical Rules:
 * - Zero fictional patient stories, zero invented testimonials, zero stock patient photos.
 * - Clear explanation that stories will only be published with written informed consent.
 * - Reusable layout schema ready for future verified patient stories.
 * - Clear patient journey section detailing Nuhavi's 5-step non-clinical coordination process.
 * - Full English, Russian, and Arabic RTL support.
 */

import type { SupportedLang } from '../i18n/translations';

export interface PatientJourneyStep {
  step: string;
  title: string;
  role: string;
  description: string;
  deliverables: string[];
}

export interface EthicalPolicyRule {
  number: string;
  title: string;
  description: string;
}

export interface VerifiedPatientStory {
  id: string;
  patientAlias: string;
  country: string;
  specialty: string;
  hospitalCategory: string;
  coordinationFocus: string;
  timeline: string;
  narrative: string[];
  keyCoordinationTakeaway: string;
  consentBadge: string;
  consentConfirmed: boolean;
  publishedDate: string;
}

export interface StoriesPageContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  deck: string;
  emptyState: {
    badge: string;
    heading: string;
    description: string;
    commitment: string;
  };
  consentNotice: {
    badge: string;
    title: string;
    lead: string;
    rules: EthicalPolicyRule[];
    legalDisclaimer: string;
  };
  journeySection: {
    eyebrow: string;
    title: string;
    deck: string;
    coordinationRole: {
      label: string;
      text: string;
    };
    clinicalRole: {
      label: string;
      text: string;
    };
    steps: PatientJourneyStep[];
  };
  futureStoriesLayout: {
    eyebrow: string;
    title: string;
    deck: string;
    templateBadge: string;
    blueprintTitle: string;
    blueprintDesc: string;
    fields: Array<{ label: string; value: string }>;
    stories: VerifiedPatientStory[];
  };
  ctaSection: {
    heading: string;
    deck: string;
    btnLabel: string;
    backHomeLabel: string;
  };
  breadcrumbs: {
    home: string;
    stories: string;
  };
}

export const storiesData: Record<SupportedLang, StoriesPageContent> = {
  en: {
    metaTitle: 'Patient Stories & Coordination Journey | Nuhavi Health',
    metaDescription: 'Read about our ethical storytelling standard, explore our 5-step patient coordination journey, and learn how we protect patient privacy.',
    eyebrow: 'Patient Experiences & Ethical Policy',
    title: 'Patient stories and the coordination journey',
    deck: 'Stories from real patients will appear here, told in their own words and published strictly with written informed consent. Explore how our coordination process works from first contact to safe return home.',
    emptyState: {
      badge: 'Ethical Transparency',
      heading: 'No patient stories are published yet.',
      description: 'Nuhavi Health is a dedicated medical travel coordination service. Rather than display invented testimonials, staged photos, or paid endorsements, we choose complete honesty: we will only publish genuine stories after patients conclude their treatment and provide explicit, voluntary consent.',
      commitment: 'Our standard: zero fictional accounts, zero paid reviews, and absolute respect for patient confidentiality.',
    },
    consentNotice: {
      badge: 'Consent & Privacy Policy',
      title: 'Our Ethical Storytelling Standard',
      lead: 'Medical treatment is deeply personal. When we publish patient accounts in the future, we adhere strictly to six non-negotiable principles:',
      rules: [
        {
          number: '01',
          title: 'Prior Written Consent',
          description: 'No story, quote, or image is ever shared without unambiguous, written consent from the patient (or parent/legal guardian for minors).',
        },
        {
          number: '02',
          title: 'Patient Approves Every Word',
          description: 'Patients review and approve the final text, context, and any accompanying photos before anything is published online.',
        },
        {
          number: '03',
          title: 'Unconditional Right to Revoke',
          description: 'A patient can ask us to remove or anonymize their story at any time, for any reason, with no questions asked.',
        },
        {
          number: '04',
          title: 'Identity Protection by Default',
          description: 'Last names, contact details, and unnecessary identifying clinical particulars are removed unless the patient specifically requests otherwise.',
        },
        {
          number: '05',
          title: 'Zero Paid Testimonials or Actors',
          description: 'We never pay patients for testimonials, never offer discounts in exchange for positive reviews, and never employ actors or stock models.',
        },
        {
          number: '06',
          title: 'Focus on Coordination, Not Outcome Guarantees',
          description: 'Stories describe logistical and administrative care coordination. They do not advertise individual doctors or promise identical medical results.',
        },
      ],
      legalDisclaimer: 'Mandatory Notice: Nuhavi Health is a medical travel coordinator, not a hospital or healthcare provider. Any future published story reflects an individual coordination experience and does not constitute medical advice, diagnosis, or a guarantee of treatment outcome.',
    },
    journeySection: {
      eyebrow: 'The Coordination Process',
      title: 'How your medical journey unfolds',
      deck: 'A structured, predictable 5-step journey where administrative logistics are taken care of by Nuhavi, while clinical decisions remain strictly in the hands of treating hospital specialists.',
      coordinationRole: {
        label: 'Nuhavi Coordinates',
        text: 'We organize records, obtain multi-hospital specialist opinions, secure transparent estimates, assist with visas, and accompany your non-clinical logistics.',
      },
      clinicalRole: {
        label: 'The Hospital Treats',
        text: 'Accredited hospital consultants examine you in person, determine medical eligibility, formulate clinical protocols, perform treatments, and retain medical responsibility.',
      },
      steps: [
        {
          step: '01',
          title: 'Medical Record Review & Specialist Matching',
          role: 'Pre-Travel Stage',
          description: 'You share your medical records, scan files, and pathology reports through our secure intake channel. We submit them to leading senior specialists across our network of accredited hospitals in India.',
          deliverables: [
            'Secure document transfer and organization',
            'Preliminary written medical opinions from 2–3 hospitals',
            'Clarification of missing tests or restaging scans needed',
          ],
        },
        {
          step: '02',
          title: 'Transparent Quotation & Written Agreement',
          role: 'Financial Clarity Stage',
          description: 'We provide itemized hospital estimates detailing room categories, surgical fees, diagnostics, and medicines. Nuhavi’s coordination fee is stated separately in writing with direct hospital payment.',
          deliverables: [
            'Side-by-side hospital cost comparison',
            'Zero hospital markups or referral commissions',
            'Detailed written coordination service agreement',
          ],
        },
        {
          step: '03',
          title: 'Medical Visa & Travel Logistics',
          role: 'Preparation Stage',
          description: 'Upon choosing a hospital, we secure official hospital visa invitation letters for you and your attendant, assist with medical visa applications, and coordinate airport reception in India.',
          deliverables: [
            'Official hospital medical visa invitation letters',
            'Local SIM card and transit arrangements',
            'Accommodation options vetted near the hospital',
          ],
        },
        {
          step: '04',
          title: 'In-Hospital Accompaniment & Translation',
          role: 'Treatment Stage',
          description: 'Your assigned bilingual care coordinator assists during initial registration, doctor consultations, and hospital admission, ensuring language clarity and comfort throughout your stay.',
          deliverables: [
            'Personal coordinator for admission and discharge navigation',
            'Russian or Arabic translation support during clinical visits',
            'Daily check-ins for non-clinical patient comfort',
          ],
        },
        {
          step: '05',
          title: 'Discharge Continuity & Post-Treatment Support',
          role: 'Follow-up Stage',
          description: 'Before you travel home, we collect comprehensive English discharge summaries, operative reports, and discharge medications, ensuring your home physician receives complete records.',
          deliverables: [
            'Complete physical and digital medical records dossier',
            'Assistance with post-treatment telemedicine queries',
            'Follow-up schedule coordination with treating specialists',
          ],
        },
      ],
    },
    futureStoriesLayout: {
      eyebrow: 'Future Verified Stories',
      title: 'Our verified storytelling architecture',
      deck: 'When patients grant informed written consent to share their experiences, their journeys will be published in this structured, transparent format.',
      templateBadge: 'Publishing Blueprint',
      blueprintTitle: 'How verified stories will appear on this page',
      blueprintDesc: 'Every future story will clearly display origin, specialty, coordination duration, and an explicit informed consent verification badge.',
      fields: [
        { label: 'Patient Identification', value: 'First name or verified anonymous alias (with country of origin)' },
        { label: 'Medical Specialty', value: 'Clinical focus area (e.g. Oncology, Orthopaedics, Cardiac)' },
        { label: 'Treating Institution', value: 'Accredited partner hospital category and city' },
        { label: 'Coordination Scope', value: 'Logistical, translation, and administrative coordination details' },
        { label: 'Verification Badge', value: 'Direct confirmation of signed patient informed consent' },
      ],
      stories: [], // Zero fictional stories — strictly waiting for authentic verified consent
    },
    ctaSection: {
      heading: 'Have questions about how we coordinate care?',
      deck: 'Our care coordinators are ready to review your medical reports and walk you through every step of planning your medical travel to India.',
      btnLabel: 'Request a medical opinion',
      backHomeLabel: 'Back to Homepage',
    },
    breadcrumbs: {
      home: 'Home',
      stories: 'Patient stories',
    },
  },

  ru: {
    metaTitle: 'Истории пациентов и путь координации | Nuhavi Health',
    metaDescription: 'Этические стандарты публикаций историй пациентов, 5 этапов неклинической координации лечения в Индии и защита конфиденциальности.',
    eyebrow: 'Опыт пациентов и этическая политика',
    title: 'Истории пациентов и путь координации',
    deck: 'Здесь будут публиковаться реальные истории пациентов, рассказанные их собственными словами и исключительно с письменного согласия. Узнайте, как организован каждый шаг координации лечения.',
    emptyState: {
      badge: 'Этическая прозрачность',
      heading: 'Истории пациентов пока не опубликованы.',
      description: 'Nuhavi Health — сервис независимой координации лечения. Вместо вымышленных отзывов, фотографий моделей и оплаченных рекомендаций мы выбираем абсолютную честность: мы опубликуем только подлинные истории пациентов после завершения лечения и получения их добровольного письменного согласия.',
      commitment: 'Наш стандарт: ноль вымышленных историй, ноль заказных отзывов и абсолютная защита конфиденциальности медицинских данных.',
    },
    consentNotice: {
      badge: 'Политика согласия и защиты данных',
      title: 'Наш этический стандарт публикаций',
      lead: 'Вопросы здоровья глубоко индивидуальны. Публикуя истории пациентов в будущем, мы неукоснительно соблюдаем 6 строгих правил:',
      rules: [
        {
          number: '01',
          title: 'Предварительное письменное согласие',
          description: 'Ни одна история, цитата или фотография не публикуется без явного письменного согласия пациента (или законного представителя ребенка).',
        },
        {
          number: '02',
          title: 'Утверждение каждого слова пациентом',
          description: 'Пациент лично проверяет и утверждает финальный текст, контекст и фотоматериалы перед размещением на сайте.',
        },
        {
          number: '03',
          title: 'Безусловное право отозвать согласие',
          description: 'Пациент вправе в любой момент потребовать удаления или полной анонимизации своей истории без объяснения причин.',
        },
        {
          number: '04',
          title: 'Защита персональных данных',
          description: 'Фамилии, контактные данные и избыточные медицинские подробности исключаются, если пациент прямо не пожелал иного.',
        },
        {
          number: '05',
          title: 'Запрет на коммерческие отзывы и актеров',
          description: 'Мы никогда не оплачиваем отзывы, не предоставляем скидок за похвалу и не нанимаем актеров для имитации пациентов.',
        },
        {
          number: '06',
          title: 'Фокус на координации, а не на гарантии излечения',
          description: 'Истории описывают логистику и сервисную поддержку. Они не рекламируют отдельных врачей и не гарантируют одинаковых медицинских результатов для других пациентов.',
        },
      ],
      legalDisclaimer: 'Обязательное уведомление: Nuhavi Health является координатором медицинских поездок, а не медицинской клиникой. Любая будущая опубликованная история отражает индивидуальный опыт координации и не является медицинской консультацией или гарантией клинического исхода.',
    },
    journeySection: {
      eyebrow: 'Процесс координации',
      title: 'Как проходит организация лечения',
      deck: 'Четкий, понятный 5-этапный маршрут: Nuhavi решает организационные и сервисные задачи, а клинические решения принимают ведущие специалисты аккредитованных клиник.',
      coordinationRole: {
        label: 'Nuhavi координирует',
        text: 'Сбор выписок, направление запросов в клиники, получение прозрачных смет, визовая поддержка и неклиническое сопровождение.',
      },
      clinicalRole: {
        label: 'Клиника лечит',
        text: 'Очный осмотр врачами клиники, составление лечебного протокола, проведение процедур и полная клиническая ответственность за результат.',
      },
      steps: [
        {
          step: '01',
          title: 'Анализ документов и выбор специалистов',
          role: 'До поездки',
          description: 'Вы передаете имеющиеся выписки, диски МРТ/КТ и гистологические заключения через безопасный канал связи. Мы направляем их ведущим профильным хирургам в клиники Индии.',
          deliverables: [
            'Безопасная передача и структурирование файлов',
            'Предварительные врачебные заключения из 2–3 клиник',
            'Уточнение списка необходимых контрольных дообследований',
          ],
        },
        {
          step: '02',
          title: 'Прозрачные сметы и письменный договор',
          role: 'Финансовая ясность',
          description: 'Вы получаете официальные сметы госпиталей с указанием категории палаты, стоимости операции и анализов. Координационный сбор Nuhavi фиксируется отдельно в письменном договоре.',
          deliverables: [
            'Сравнительная таблица предложений госпиталей',
            'Прямая оплата в кассу клиники без скрытых комиссий',
            'Официальный договор на координационные услуги',
          ],
        },
        {
          step: '03',
          title: 'Медицинская виза и логистика перелета',
          role: 'Подготовка к вылету',
          description: 'После выбора клиники мы оформляем официальные визовые приглашения для пациента и сопровождающего лица, консультируем по перелетам и встречаем в аэропорту.',
          deliverables: [
            'Официальное гарантийное письмо от клиники для мед. визы',
            'Помощь с местной связью и трансфером из аэропорта',
            'Проверенные варианты проживания рядом с госпиталем',
          ],
        },
        {
          step: '04',
          title: 'Сопровождение в госпитале и перевод',
          role: 'Период лечения',
          description: 'Персональный русскоязычный координатор помогает при оформлении госпитализации, переводит на консультациях и оперативно решает бытовые вопросы.',
          deliverables: [
            'Координатор при первичной консультации и госпитализации',
            'Перевод медицинских терминов и диалогов с докторами',
            'Ежедневная связь по всем неклиническим вопросам',
          ],
        },
        {
          step: '05',
          title: 'Выписка, эпикризы и связь с докторами',
          role: 'По возвращении домой',
          description: 'Перед вылетом домой мы проверяем полноту англоязычного выписного эпикриза, протоколов операций и рекомендаций для вашего лечащего врача дома.',
          deliverables: [
            'Полный цифровой и бумажный комплект медицинских документов',
            'Организация дистанционных консультаций при необходимости',
            'График контрольных обследований с индийскими специалистами',
          ],
        },
      ],
    },
    futureStoriesLayout: {
      eyebrow: 'Будущие верифицированные истории',
      title: 'Архитектура подтвержденных историй',
      deck: 'Когда пациенты дадут добровольное информированное согласие на публикацию своего опыта, их истории появятся в этом структурированном и открытом формате.',
      templateBadge: 'Стандарт публикации',
      blueprintTitle: 'Как будут оформлены подтвержденные истории',
      blueprintDesc: 'Каждая история будет содержать указание страны, профиля лечения, сроков координации и знак подтвержденного информированного согласия.',
      fields: [
        { label: 'Идентификация пациента', value: 'Имя или анонимный псевдоним с указанием страны проживания' },
        { label: 'Медицинское направление', value: 'Клинический профиль (онкология, ортопедия, нейрохирургия)' },
        { label: 'Аккредитованный госпиталь', value: 'Категория клиники и город проведения лечения' },
        { label: 'Объем координации', value: 'Организационные, переводческие и логистические услуги' },
        { label: 'Знак согласия', value: 'Прямое подтверждение подписанного информированного согласия' },
      ],
      stories: [], // Ноль вымышленных историй
    },
    ctaSection: {
      heading: 'Остались вопросы по организации лечения?',
      deck: 'Наши медицинские координаторы изучат ваши выписки и подробно объяснят каждый шаг подготовки поездки в клиники Индии.',
      btnLabel: 'Запросить медицинское мнение',
      backHomeLabel: 'Вернуться на главную',
    },
    breadcrumbs: {
      home: 'Главная',
      stories: 'Истории пациентов',
    },
  },

  ar: {
    metaTitle: 'تجارب وقصص المرضى ومسار التنسيق الطبي | نوهـافي هيلث',
    metaDescription: 'تعرف على معايير النشر الأخلاقي لتجارب المرضى، والمراحل الخمس لرحلة التنسيق الطبي في الهند، وضمانات حماية الخصوصية.',
    eyebrow: 'تجارب المرضى والسياسة الأخلاقية',
    title: 'تجارب المرضى ومسار التنسيق الطبي',
    deck: 'ستُنشر هنا قصص وتجارب واقعية لمرضانا بكلماتهم الخاصة وبعد الحصول على موافقتهم الكتابية المستنيرة الصريحة. تعرّف على كيفية تنظيم رحلة التنسيق خطوة بخطوة.',
    emptyState: {
      badge: 'شفافية وأمانة مطلقة',
      heading: 'لم يتم نشر أي تجارب حتى الآن.',
      description: 'نوهـافي هيلث هي خدمة مخصصة لتنسيق السفر الطبي المستقل. وبدلاً من نشر تقييمات مفبركة أو صور تمثيلية أو آراء مدفوعة، اخترنا الصدق التام: لن ننشر أي تجربة إلا بعد اكتمال العلاج وموافقة المريض الخطية الحرة والصريحة.',
      commitment: 'عهدنا الدائم: لا قصص وهمية، لا تقييمات مدفوعة، والتزام صارم بسرية البيانات الصحية للمرضى.',
    },
    consentNotice: {
      badge: 'ميثاق الخصوصية والموافقة',
      title: 'ميثاق النشر الأخلاقي لتجارب المرضى',
      lead: 'الرعاية الصحية والعلاج تجربة شخصية بالغة الخصوصية. عند نشر أي تجربة مريض مستقبلاً، نلتزم تماماً بستة مبادئ حاسمة:',
      rules: [
        {
          number: '01',
          title: 'الموافقة الكتابية المسبقة',
          description: 'لا تُنشر أي قصة أو اقتباس أو صورة دون موافقة كتابية واضحة ومسبقة من المريض (أو ولي الأمر في حالة القُصّر).',
        },
        {
          number: '02',
          title: 'اعتماد المريض للنص النهائي',
          description: 'يقوم المريض أو ذووه بمراجعة النص النهائي واعتماد الصور وسياق النشر بدقة قبل ظهورها على الموقع.',
        },
        {
          number: '03',
          title: 'حق الإلغاء والحذف غير المشروط',
          description: 'يحق للمريض في أي وقت طلب حذف قصته أو حجب أي تفاصيل منها فوراً وبدون إبداء أي أسباب.',
        },
        {
          number: '04',
          title: 'حماية الهوية والسرية الطبية',
          description: 'تُحذف الأسماء العائلية وأرقام الاتصال والتفاصيل الطبية الدقيقة التي قد تكشف هوية المريض إلا إذا طلب المريض نشرها.',
        },
        {
          number: '05',
          title: 'حظر التقييمات المدفوعة والممثلين',
          description: 'نحن لا ندفع أي مقابل مادي للشهادات، ولا نمنح خصومات مقابل التقييم الإيجابي، ولا نستعين بممثلين أو صور جاهزة.',
        },
        {
          number: '06',
          title: 'التركيز على التنسيق لا على وعود الشفاء',
          description: 'توضح القصص تجربة التنسيق والخدمات اللوجستية، ولا تروج لأطباء بعينهم، ولا تضمن الحصول على نفس النتائج العلاجية للآخرين.',
        },
      ],
      legalDisclaimer: 'إشعار قانوني إلزامي: نوهـافي هيلث هي جهة تنسيق سفر طبي وليست مستشفى أو جهة علاجية. أي تجربة ستُنشر مستقبلاً تعكس تجربة شخصية مع خدمات التنسيق، ولا تشكل استشارة طبية أو ضماناً لنتائج علاجية محددة.',
    },
    journeySection: {
      eyebrow: 'مسار التنسيق المتكامل',
      title: 'كيف تسير خطوات رحلتك العلاجية',
      deck: 'مسار واضح ومحدد من 5 مراحل تتولى فيه نوهـافي إدارة الترتيبات الإدارية واللوجستية، بينما تظل كافة القرارات السريرية بيد الأطباء الاستشاريين في المستشفيات المعتمدة.',
      coordinationRole: {
        label: 'نوهـافي تنسق',
        text: 'تنظيم التقارير الطبية، والتواصل مع كبار الاستشاريين، والحصول على عروض أسعار مباشرة، وتسهيل التأشيرات والمرافقة الإدارية.',
      },
      clinicalRole: {
        label: 'المستشفى يعالج',
        text: 'الفحص السريري المباشر، وتحديد الخطة العلاجية، وإجراء العمليات أو العلاج، وتحمل المسؤولية الطبية الكاملة.',
      },
      steps: [
        {
          step: '01',
          title: 'دراسة التقارير الطبية واختيار الاستشاريين',
          role: 'مرحلة ما قبل السفر',
          description: 'ترسل تقاريرك الطبية وصور الأشعة عبر قنواتنا الآمنة، لنعرضها على كبار الاستشاريين في المستشفيات التخصصية المعتمدة في الهند للحصول على تقييم مبدئي.',
          deliverables: [
            'نقل وحفظ مشفر للبيانات الطبية',
            'آراء طبية مكتوبة من مستشفيين أو ثلاثة مستشفيات معتمدة',
            'توضيح الفحوصات الإضافية المطلوبة بعد الوصول',
          ],
        },
        {
          step: '02',
          title: 'عروض الأسعار المباشرة والاتفاق المكتوب',
          role: 'مرحلة الوضوح المالي',
          description: 'نزودك بعروض أسعار مفصلة ومعتمدة من المستشفيات تشمل الإقامة وأتعاب الجراحة والأدوية، مع توضيح أتعاب تنسيق نوهـافي بشكل مستقل ودفع مباشر للمستشفى.',
          deliverables: [
            'مقارنة شفافة بين خيارات المستشفيات المتخصصة',
            'فواتير مباشرة من المستشفى بدون أي عمولات خفية',
            'اتفاقية تنسيق مكتوبة ومفصلة لجميع الخدمات الإدارية',
          ],
        },
        {
          step: '03',
          title: 'التأشيرة العلاجية وترتيبات السفر',
          role: 'مرحلة التحضير للسفر',
          description: 'نستخرج لك وللمرافق خطابات الدعوة الرسمية من المستشفى للحصول على التأشيرة الطبية للهند، ونرتب استقبال المطار ووسائل النقل والإقامة المريحة.',
          deliverables: [
            'خطابات دعوة رسمية من المستشفى للتأشيرة الطبية',
            'تأمين شريحة اتصال محلية ومواصلات الاستقبال من المطار',
            'خيارات إقامة مريحة ومفحوصة قريبة من المستشفى',
          ],
        },
        {
          step: '04',
          title: 'المرافقة داخل المستشفى والترجمة',
          role: 'مرحلة العلاج بالمستشفى',
          description: 'يرافقك منسق الرعاية الشخصي أثناء إجراءات الدخول واستشارات الأطباء، موفراً الترجمة اللازمة لضمان التواصل الواضح وراحتك طوال فترة الإقامة.',
          deliverables: [
            'منسق شخصي يرافقك في المستشفى خلال إجراءات الدخول والخروج',
            'ترجمة دقيقة للمصطلحات الطبية أثناء الحوار مع الأطباء',
            'متابعة يومية مستمرة لتلبية كافة الاحتياجات غير الطبية',
          ],
        },
        {
          step: '05',
          title: 'تقرير الخروج الطبي واستمرارية المتابعة',
          role: 'مرحلة ما بعد العودة للوطن',
          description: 'قبل مغادرتك الهند، نتأكد من استلامك لكافة التقارير الطبية باللغة الإنجليزية، وتقارير العمليات، والتعليمات الدوائية لتقديمها لطبيبك المعالج في بلدك.',
          deliverables: [
            'ملف طبي ورقي وإلكتروني كامل ومفصل لرحلة العلاج',
            'تنسيق الاستشارات الطبية عن بُعد عند الحاجة',
            'جدول واضح للمتابعة الدورية مع الفريق الطبي المعالج',
          ],
        },
      ],
    },
    futureStoriesLayout: {
      eyebrow: 'هيكلية التجارب الموثقة مستقبلاً',
      title: 'معايير تصميم وتوثيق تجارب المرضى',
      deck: 'عندما يمنح المرضى موافقتهم المستنيرة لنشر تجاربهم، ستظهر القصص وفق هذا النموذج الشفاف والمحكم حفاظاً على المصداقية والخصوصية.',
      templateBadge: 'نموذج النشر المعتمد',
      blueprintTitle: 'كيف ستظهر التجارب المعتمدة في هذه الصفحة',
      blueprintDesc: 'ستتضمن كل قصة بلد المريض، والتخصص الطبي، ونطاق التنسيق، وشارة التحقق المباشر من الموافقة المستنيرة.',
      fields: [
        { label: 'بيانات المريض', value: 'الاسم الأول أو اسم مستعار معتمد مع ذكر بلد القدوم' },
        { label: 'التخصص الطبي', value: 'المجال العلاجي (الأورام، جراحة العظام، أمراض القلب)' },
        { label: 'المستشفى المعالج', value: 'تصنيف المستشفى المعتمد والمدينة في الهند' },
        { label: 'نطاق التنسيق', value: 'تفاصيل الخدمات اللوجستية والإدارية والترجمة' },
        { label: 'شارة الموافقة', value: 'تأكيد موثق لشهادة الموافقة الخطية المستنيرة الموقعة' },
      ],
      stories: [], // صفر قصص مفبركة — في انتظار التجارب الحقيقية الموثقة
    },
    ctaSection: {
      heading: 'هل لديك استفسار حول كيفية تنسيق علاجك؟',
      deck: 'فريق منسقي الرعاية لدينا مستعد لدراسة ملفك الطبي وشرح كافة تفاصيل رحلتك العلاجية إلى الهند.',
      btnLabel: 'طلب رأي طبي',
      backHomeLabel: 'العودة إلى الرئيسية',
    },
    breadcrumbs: {
      home: 'الرئيسية',
      stories: 'تجارب وقصص المرضى',
    },
  },
};

