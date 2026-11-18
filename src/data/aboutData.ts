/**
 * src/data/aboutData.ts
 * Centralized, verified information for the About Nuhavi / Why Choose Us section.
 *
 * Requirements & Corrections:
 * - Removed "doctor-led" claims.
 * - No promises of in-hospital or personal accompaniment.
 * - No promises of a dedicated bilingual coordinator.
 * - No claims of secure time-limited medical-record transfer.
 * - No claims of signed hospital billing arrangements or verified zero-markup agreements.
 * - Preserved approved policy: Nuhavi does not accept hospital referral commissions or kickbacks, with direct hospital billing.
 * - Full English, Russian, and Arabic RTL support.
 */

import type { SupportedLang } from '../i18n/translations';

export interface TrustPrinciple {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  badge: string;
}

export interface ResponsibilityItem {
  title: string;
  description: string;
  items: string[];
}

export interface WhyIndiaReason {
  title: string;
  desc: string;
}

export interface AboutPageData {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  deck: string;
  overview: {
    heading: string;
    lead: string;
    paragraphs: string[];
  };
  responsibilities: {
    sectionTitle: string;
    sectionDeck: string;
    coordination: ResponsibilityItem;
    clinical: ResponsibilityItem;
  };
  trustPrinciples: {
    eyebrow: string;
    heading: string;
    deck: string;
    principles: TrustPrinciple[];
  };
  whyIndia: {
    eyebrow: string;
    heading: string;
    lead: string;
    reasons: WhyIndiaReason[];
  };
  governance: {
    heading: string;
    clinicalLabel: string;
    clinicalDesc: string;
    clinicalHref: string;
    commercialLabel: string;
    commercialDesc: string;
    commercialHref: string;
  };
  cta: {
    heading: string;
    deck: string;
    btnLabel: string;
    backHomeLabel: string;
  };
  breadcrumbs: {
    home: string;
    about: string;
  };
}

export const aboutData: Record<SupportedLang, AboutPageData> = {
  en: {
    metaTitle: 'About Nuhavi & Why Choose Us | Nuhavi Health',
    metaDescription: 'Learn who Nuhavi Health is, our 6 trust principles, how our coordination role differs from hospital medical care, and why patients choose us for medical travel to India.',
    eyebrow: 'About Nuhavi Health & Why Choose Us',
    title: 'Independent medical travel coordination to India',
    deck: 'Nuhavi Health is an independent medical travel coordination service based in Hyderabad, India. We help international patients reach accredited hospitals with clear written estimates, zero hospital referral commissions, and dependable logistical guidance.',
    overview: {
      heading: 'Who we are and what we do',
      lead: 'An independent care coordination partner, while treating hospitals provide the medical care.',
      paragraphs: [
        'Nuhavi Health Pvt. Ltd. was established to help international patients navigate unfamiliar healthcare systems in India with clarity and transparent guidance.',
        'We do not operate hospital beds or provide medical treatment. Instead, we act as an independent care coordination partner. We organize your medical records, submit them to specialists at accredited hospitals for preliminary evaluations, obtain transparent itemized hospital estimates, assist with visa invitation letters and travel planning, and provide remote coordination support throughout your medical journey.',
        'Because our coordination fee is agreed with you in writing and we do not accept referral commissions from hospitals, our recommendations remain focused entirely on your preferences.',
      ],
    },
    responsibilities: {
      sectionTitle: 'Two distinct roles: Coordination vs. Clinical care',
      sectionDeck: 'Total clarity begins with knowing exactly who is responsible for each part of your journey.',
      coordination: {
        title: 'Nuhavi Coordinates (Our Role)',
        description: 'We manage non-clinical logistics, administration, and communication to ensure your journey is predictable and organized.',
        items: [
          'Intake and structured organization of diagnostic records and scans',
          'Submitting files to accredited hospital departments for multi-hospital review',
          'Obtaining itemized hospital quotations and comparing them side by side',
          'Issuing official hospital visa invitation letters and assisting with travel planning',
          'Assisting with airport arrival planning and vetted lodging information',
          'Providing remote coordination support and liaising with the hospital international patient desk',
          'Assisting with the collection of complete English discharge summaries from the hospital',
        ],
      },
      clinical: {
        title: 'The Hospital Treats (Clinical Responsibility)',
        description: 'Treating hospital physicians and surgical teams carry full, independent clinical responsibility for your medical care.',
        items: [
          'Conducting in-person physical examinations and clinical history reviews',
          'Ordering and interpreting in-hospital laboratory and diagnostic restaging scans',
          'Recommending specific clinical protocols, therapies, or surgical techniques',
          'Performing surgeries, medical procedures, and hospital interventions',
          'Supervising intensive care, inpatient nursing, and medication administration',
          'Determining hospital discharge readiness and post-operative instructions',
          'Providing post-discharge clinical telemedicine consultations',
        ],
      },
    },
    trustPrinciples: {
      eyebrow: 'Our Foundation of Trust',
      heading: 'Six core principles that guide our work',
      deck: 'Every recommendation, estimate, and coordination service we provide is anchored in these six standards.',
      principles: [
        {
          id: 'accreditation',
          number: '01',
          title: 'Hospital accreditation verification (NABH / JCI)',
          summary: 'We coordinate exclusively with hospitals holding verified national or international accreditations.',
          detail: 'Before presenting any hospital option, we verify active NABH (National Accreditation Board for Hospitals & Healthcare Providers) or JCI (Joint Commission International) accreditation on file. We do not coordinate with unaccredited facilities.',
          badge: 'Quality Standard',
        },
        {
          id: 'specialty-matching',
          number: '02',
          title: 'Specialty-specific hospital selection',
          summary: 'Hospitals are chosen for their specialized clinical depth, not generic institutional marketing.',
          detail: 'Medical excellence is department-specific. A hospital renowned for complex cardiac surgery may not be the optimal choice for neuro-oncology. We match your condition to hospital units with demonstrated clinical volume and specialized infrastructure.',
          badge: 'Clinical Focus',
        },
        {
          id: 'cost-transparency',
          number: '03',
          title: 'Transparent itemized cost estimates',
          summary: 'Itemized written quotes showing room categories, surgical fees, and expected length of stay.',
          detail: 'You receive clear quotations issued directly by hospitals before committing to travel. We show what is included, what is excluded, the currency, and validity period, eliminating unexpected surprise charges upon arrival.',
          badge: 'Financial Clarity',
        },
        {
          id: 'zero-commissions',
          number: '04',
          title: 'No hospital referral commissions or kickbacks',
          summary: 'Patients pay treating hospitals directly. Nuhavi does not accept referral commissions.',
          detail: 'Our policy is strict commercial independence: we do not accept referral commissions, percentage kickbacks, or marketing bounties from hospitals. Patients pay treating hospitals directly for all medical services. Nuhavi’s separate coordination fee is agreed in writing directly with the patient.',
          badge: 'Commercial Independence',
        },
        {
          id: 'direct-coordination',
          number: '05',
          title: 'Direct communication & coordination assistance',
          summary: 'A direct point of contact to coordinate your schedule, answer questions, and facilitate hospital communication.',
          detail: 'You have a direct contact who helps coordinate appointments, liaises with hospital international patient services, and assists with logistical inquiries throughout your medical travel.',
          badge: 'Coordination Support',
        },
        {
          id: 'data-privacy',
          number: '06',
          title: 'Patient privacy & responsible medical record handling',
          summary: 'Strict confidentiality protocols. Your health data is never sold or broadcast publicly.',
          detail: 'Medical files, biopsy reports, and scan images are sensitive personal data. We handle records with strict confidentiality, sharing them exclusively with clinical teams at hospitals you have reviewed and approved.',
          badge: 'Data Protection',
        },
      ],
    },
    whyIndia: {
      eyebrow: 'Destination Context',
      heading: 'Why use Nuhavi for medical travel to India?',
      lead: 'India provides advanced tertiary medicine, but navigating it from abroad without independent guidance can be challenging.',
      reasons: [
        {
          title: 'Overcoming Informational Asymmetry',
          desc: 'With hundreds of private hospitals and varying departmental strengths, international patients cannot easily discern genuine clinical capability from marketing brochures. We provide objective, verified hospital information.',
        },
        {
          title: 'Direct Hospital Billing Policy',
          desc: 'Unlike traditional brokers who may receive undisclosed referral fees from hospital bills, Nuhavi maintains an independent coordination policy: patients pay treating hospitals directly for all clinical care.',
        },
        {
          title: 'Language Assistance & Communication Support',
          desc: 'Navigating medical travel in another country can feel daunting. We assist with communication and liaise with hospital international patient services so you can navigate clinical consultations with clarity.',
        },
        {
          title: 'Continuity Beyond Hospital Discharge',
          desc: 'We assist with gathering complete discharge summaries, facilitating post-operative telemedicine consults, and ensuring your doctor back home receives comprehensive documentation.',
        },
      ],
    },
    governance: {
      heading: 'Clinical governance & commercial transparency',
      clinicalLabel: 'Clinical Governance',
      clinicalDesc: 'Learn how our clinical review process works and how we safeguard medical decision boundaries.',
      clinicalHref: '/en/about/clinical-governance/',
      commercialLabel: 'Commercial Relationships',
      commercialDesc: 'Our published commercial policy: zero hospital referral fees and transparent patient coordination fees.',
      commercialHref: '/en/about/commercial-relationships/',
    },
    cta: {
      heading: 'Ready to discuss your medical travel options?',
      deck: 'Share your diagnostic reports with our coordinators for an independent, no-obligation preliminary review with accredited hospitals in India.',
      btnLabel: 'Request a medical opinion',
      backHomeLabel: 'Back to Homepage',
    },
    breadcrumbs: {
      home: 'Home',
      about: 'About Nuhavi',
    },
  },

  ru: {
    metaTitle: 'О компании Nuhavi и почему выбирают нас | Nuhavi Health',
    metaDescription: 'Узнайте о компании Nuhavi Health, 6 принципах доверия, разграничении роли координатора и клиники, а также преимуществах организации лечения в Индии.',
    eyebrow: 'О компании Nuhavi Health и почему выбирают нас',
    title: 'Независимая координация лечения в Индии',
    deck: 'Nuhavi Health — сервис независимой координации лечения с офисом в Хайдарабаде, Индия. Мы помогаем иностранным пациентам выбрать аккредитованные клиники с официальными сметами, без больничных комиссий и с надежной организационной поддержкой.',
    overview: {
      heading: 'Кто мы и чем занимаемся',
      lead: 'Независимый координационный партнер пациента, пока ведущие госпитали оказывают медицинскую помощь.',
      paragraphs: [
        'Nuhavi Health Pvt. Ltd. создана для помощи иностранным пациентам в прозрачной организации поездок на лечение в клиники Индии.',
        'Мы не являемся госпиталем и не проводим медицинских манипуляций. Наша роль — независимый координационный партнер пациента. Мы систематизируем выписки, передаем их специалистам аккредитованных клиник для получения предварительных заключений, запрашиваем официальные сметы, помогаем с оформлением визовых приглашений и организационными вопросами.',
        'Координационный сбор Nuhavi фиксируется в письменном договоре с пациентом. Мы не принимаем комиссионных вознаграждений от клиник, что обеспечивает объективность наших рекомендаций.',
      ],
    },
    responsibilities: {
      sectionTitle: 'Две разные роли: координация и медицинская помощь',
      sectionDeck: 'Доверие начинается с четкого понимания того, кто и за какую часть поездки несет ответственность.',
      coordination: {
        title: 'Nuhavi координирует (Наша зона ответственности)',
        description: 'Мы берем на себя административные, организационные и сервисные вопросы, чтобы поездка прошла предсказуемо и спокойно.',
        items: [
          'Прием и структурирование выписок, анализов и снимков МРТ/КТ',
          'Направление запросов в специализированные отделения аккредитованных клиник',
          'Получение официальных детальных смет госпиталей и их сопоставление',
          'Оформление визовых приглашений от клиник и содействие в планировании поездки',
          'Консультации по встрече в аэропорту и подбору проверенных вариантов проживания',
          'Координационная поддержка и взаимодействие с международным отделом клиники',
          'Помощь в сборе полного комплекта выписных эпикризов на английском языке',
        ],
      },
      clinical: {
        title: 'Клиника лечит (Клиническая ответственность врачей)',
        description: 'Врачи и хирурги выбранного госпиталя несут полную юридическую и профессиональную медицинскую ответственность за ваше лечение.',
        items: [
          'Очный врачебный осмотр, сбор анамнеза и оценка общего состояния',
          'Назначение и проведение необходимых госпитальных анализов и дообследований',
          'Утверждение окончательного хирургического или терапевтического протокола',
          'Выполнение хирургических операций и лечебных процедур',
          'Наблюдение в палате интенсивной терапии и уход медицинского персонала',
          'Оценка готовности к выписке и выдача медицинских рекомендаций',
          'Проведение дистанционных контрольных врачебных консультаций после выписки',
        ],
      },
    },
    trustPrinciples: {
      eyebrow: 'Основа доверия',
      heading: 'Шесть принципов нашей работы',
      deck: 'Каждая рекомендация, смета и действие наших координаторов опираются на эти шесть стандартов.',
      principles: [
        {
          id: 'accreditation',
          number: '01',
          title: 'Проверка аккредитации клиник (NABH / JCI)',
          summary: 'Мы координируем лечение исключительно в клиниках с действующей национальной или международной аккредитацией.',
          detail: 'Перед тем как предложить клинику пациенту, мы проверяем действующий сертификат NABH или JCI. Мы не сотрудничаем с неаккредитованными медицинскими учреждениями.',
          badge: 'Стандарт качества',
        },
        {
          id: 'specialty-matching',
          number: '02',
          title: 'Выбор клиники по профильной специализации',
          summary: 'Клиники подбираются по реальному опыту профильного отделения, а не по общей рекламе бренда.',
          detail: 'Медицинское мастерство специализированно. Клиника, являющаяся лидером в кардиохирургии, может уступать в нейроонкологии. Мы подбираем клиники с подтвержденным клиническим потоком и оборудованием именно по вашему профилю.',
          badge: 'Клинический профиль',
        },
        {
          id: 'cost-transparency',
          number: '03',
          title: 'Прозрачные детализированные сметы',
          summary: 'Официальные сметы с указанием категории палаты, гонораров хирургов и ориентировочного срока пребывания.',
          detail: 'Пациент получает официальную смету госпиталя до вылета. В ней четко прописано, что включено в стоимость, что оплачивается отдельно, валюта расчета и срок действия предложения.',
          badge: 'Финансовая ясность',
        },
        {
          id: 'zero-commissions',
          number: '04',
          title: 'Независимая координация: отказ от комиссий клиник',
          summary: 'Пациенты оплачивают счета клиники напрямую. Nuhavi не принимает комиссионных вознаграждений от больниц.',
          detail: 'Наша политика — полная коммерческая независимость: мы не принимаем комиссий, бонусов или скрытых выплат от клиник. Оплата за медицинские услуги производится пациентом напрямую в кассу госпиталя, а координационный сбор Nuhavi согласуется в письменном договоре с вами.',
          badge: 'Коммерческая независимость',
        },
        {
          id: 'direct-coordination',
          number: '05',
          title: 'Прямая связь и организационная координация',
          summary: 'Надежный контакт для согласования расписания, ответов на вопросы и связи с клиникой.',
          detail: 'За вашим запросом закрепляется координатор, который помогает согласовать расписание приемов, взаимодействует с международным отделом госпиталя и помогает с организационными вопросами.',
          badge: 'Организационная поддержка',
        },
        {
          id: 'data-privacy',
          number: '06',
          title: 'Конфиденциальность и защита медицинских данных',
          summary: 'Строгие протоколы безопасности. Ваши выписки и снимки никогда не передаются посторонним лицам.',
          detail: 'Медицинские документы — это чувствительная личная информация. Мы храним ваши выписки со строгой конфиденциальностью и передаем их исключительно врачам клиник, согласованных с вами.',
          badge: 'Защита данных',
        },
      ],
    },
    whyIndia: {
      eyebrow: 'Контекст направления',
      heading: 'Зачем обращаться в Nuhavi для поездки на лечение в Индию?',
      lead: 'Индия располагает медициной высокого уровня, но самостоятельная организация поездки из-за рубежа сопряжена со сложностями.',
      reasons: [
        {
          title: 'Преодоление информационной асимметрии',
          desc: 'Среди сотен клиник иностранному пациенту сложно отличить реальный хирургический опыт от рекламных буклетов. Мы предоставляем проверенную информацию по отделениям.',
        },
        {
          title: 'Прямая оплата в кассу клиники',
          desc: 'В отличие от посредников, получающих скрытые проценты от больничных счетов, Nuhavi придерживается независимой политики: пациенты оплачивают медицинские счета напрямую в госпиталь.',
        },
        {
          title: 'Языковая помощь и содействие в общении',
          desc: 'Поездка на лечение за рубеж требует понятного общения. Мы помогаем наладить коммуникацию и взаимодействуем с международным отделом клиники для точного понимания организационных шагов.',
        },
        {
          title: 'Содействие после выписки из клиники',
          desc: 'Мы помогаем собрать все выписные эпикризы, организовать онлайн-консультации и держать связь с врачами дома.',
        },
      ],
    },
    governance: {
      heading: 'Клиническое управление и коммерческая прозрачность',
      clinicalLabel: 'Клиническое управление',
      clinicalDesc: 'Узнайте, как организована проверка медицинской информации и где заканчивается роль координатора.',
      clinicalHref: '/en/about/clinical-governance/',
      commercialLabel: 'Коммерческие отношения',
      commercialDesc: 'Наша опубликованная политика: нулевые комиссии от клиник и фиксированный сбор за координацию.',
      commercialHref: '/en/about/commercial-relationships/',
    },
    cta: {
      heading: 'Хотите обсудить возможности лечения в Индии?',
      deck: 'Направьте ваши медицинские выписки для независимой предварительной оценки в профильных клиниках Индии.',
      btnLabel: 'Запросить медицинское мнение',
      backHomeLabel: 'Вернуться на главную',
    },
    breadcrumbs: {
      home: 'Главная',
      about: 'О компании Nuhavi',
    },
  },

  ar: {
    metaTitle: 'عن نوهـافي هيلث ولماذا يختارنا المرضى | نوهـافي هيلث',
    metaDescription: 'تعرف على شركة نوهـافي هيلث، ومبادئ الثقة الستة، والفرق بين التنسيق الإداري والرعاية الطبية بالمستشفى، ومزايا التنسيق الطبي إلى الهند.',
    eyebrow: 'عن نوهـافي هيلث ولماذا يختارنا المرضى',
    title: 'تنسيق مستقل وموثوق للسفر الطبي إلى الهند',
    deck: 'نوهـافي هيلث هي خدمة تنسيق سفر طبي مستقلة ومقرها في حيدر أباد، الهند. نساعد المرضى الدوليين في الوصول إلى المستشفيات المعتمدة المناسبة بتقديرات مالية مكتوبة، وبدون أي عمولات مستشفيات، مع مرافقة تنظيمية مستمرة.',
    overview: {
      heading: 'من نحن وماذا نقدم',
      lead: 'شريك تنسيق مستقل يقف بجانبك، بينما تقدم المستشفيات التخصصية الرعاية الطبية السريرية.',
      paragraphs: [
        'تأسست نوهـافي هيلث لمساعدة المرضى المسافرين للعلاج في الهند في الحصول على توجيهات شفافة ومعلومات موثوقة ومحايدة.',
        'نحن لسنا مستشفى ولا نقدم تشخيصاً أو علاجاً طبياً بأنفسنا. دورنا هو العمل كشريك تنسيق مستقل بجانب المريض. نتولى تنظيم ملفاتك الطبية، وعرضها على استشاريين في المستشفيات المعتمدة للحصول على تقييمات مبدئية، وتأمين عروض أسعار مباشرة، وتسهيل خطابات التأشيرة العلاجية، وتوفير الدعم التنسيقي طوال فترة رحلتك العلاجية.',
        'أتعاب تنسيق نوهـافي محددة كتابياً ومسبقاً مع المريض، ونحن لا نقبل أي عمولات إحالة من المستشفيات، مما يضمن أن تكون كافة المشورات مخلصة لمصلحتك وحدك.',
      ],
    },
    responsibilities: {
      sectionTitle: 'مسؤوليتان مستقلتان: التنسيق الإداري والرعاية الطبية',
      sectionDeck: 'يبدأ الوضوح التام بمعرفة من المسؤول بدقة عن كل خطوة في رحلتك العلاجية.',
      coordination: {
        title: 'نوهـافي تنسق (نطاق مسؤوليتنا الإدارية)',
        description: 'نتولى إدارة الترتيبات غير السريرية واللوجستية لضمان رحلة علاجية مريحة ومنظمة وخالية من المفاجآت.',
        items: [
          'استلام وتنظيم التقارير الطبية وصور الأشعة بدقة واحترافية',
          'إرسال الملفات للأقسام التخصصية في المستشفيات المعتمدة للمراجعة المبدئية',
          'الحصول على تقديرات مالية مفصلة من المستشفيات ومقارنتها بوضوح',
          'استخراج خطابات الدعوة الرسمية للتأشيرة العلاجية والمساعدة في ترتيبات السفر',
          'المساعدة في ترتيبات الوصول للمطار وتوفير معلومات الإقامة المناسبة قرب المستشفى',
          'تقديم الدعم التنسيقي والتواصل المباشر مع مكتب رعاية المرضى الدوليين بالمستشفى',
          'المساعدة في استلام ملفك الطبي وتقارير الخروج الكاملة باللغة الإنجليزية',
        ],
      },
      clinical: {
        title: 'المستشفى يعالج (المسؤولية الطبية للفرق السريرية)',
        description: 'يتحمل الأطباء الاستشاريون وفرق الجراحة في المستشفى المعالج المسؤولية الطبية والسريرية الكاملة والمستقلة.',
        items: [
          'إجراء الفحص السريري المباشر ومراجعة التاريخ المرضي للمريض',
          'طلب وتفسير الفحوصات المخبرية وأشعة إعادة التقييم المتقدمة داخل المستشفى',
          'تحديد الخطة العلاجية الدقيقة أو التقنية الجراحية المناسبة للحالة',
          'إجراء العمليات الجراحية والتدخلات الطبية وجلسات العلاج',
          'الإشراف على العناية المركزة، والتمريض الداخلي، وإعطاء الأدوية',
          'تحديد موعد الخروج الآمن من المستشفى وكتابة إرشادات التعافي',
          'تقديم استشارات المتابعة الطبية عن بُعد بعد العودة للمنزل',
        ],
      },
    },
    trustPrinciples: {
      eyebrow: 'ركائز الثقة والنزاهة',
      heading: 'المبادئ الستة الحاكمة لعملنا',
      deck: 'كل توصية، وتقدير مالي، وخدمة تنسيق نقدمها تستند بدقة إلى هذه المعايير الستة.',
      principles: [
        {
          id: 'accreditation',
          number: '01',
          title: 'التحقق من اعتماد المستشفيات (NABH / JCI)',
          summary: 'ننسق حصراً مع المستشفيات الحاصلة على اعتمادات وطنية ودولية سارية المفعول.',
          detail: 'قبل عرض أي مستشفى على المريض، نتحقق من سريان اعتماده من الهيئة الوطنية لاعتماد المستشفيات (NABH) أو الهيئة الدولية المشتركة (JCI). لا نتعامل مع منشآت غير معتمدة.',
          badge: 'معيار الجودة',
        },
        {
          id: 'specialty-matching',
          number: '02',
          title: 'اختيار المستشفى حسب التخصص الدقيق',
          summary: 'يتم اختيار المستشفى بناءً على كفاءة القسم التخصصي وخبرته، لا بناءً على الإعلانات العامة.',
          detail: 'التميز الطبي يرتبط بالقسم الدقيق. فالمستشفى المشهور في جراحة القلب قد لا يكون الخيار الأمثل لجراحة أورام الأعصاب. نحن نطابق حالتك مع الأقسام الطبية التي تمتلك خبرة جراحية وتجهيزات تخصصية مثبتة.',
          badge: 'التركيز التخصصي',
        },
        {
          id: 'cost-transparency',
          number: '03',
          title: 'تقديرات مالية مفصلة ومكتوبة',
          summary: 'عروض أسعار رسمية توضح نوع الغرفة، وأتعاب الجراحة، ومدة الإقامة المتوقعة.',
          detail: 'يحصل المريض على عروض أسعار رسمية صادرة مباشرة من المستشفيات قبل السفر. نوضح بنود التكلفة المشمولة وغير المشمولة، والعملة، وفترة الصلاحية لتجنب أي نفقات غير متوقعة عند الوصول.',
          badge: 'شفافية مالية',
        },
        {
          id: 'zero-commissions',
          number: '04',
          title: 'تنسيق مستقل: عدم قبول عمولات من المستشفيات',
          summary: 'يسدد المريض فواتير العلاج للمستشفى مباشرة. نوهـافي لا تقبل أي عمولات إحالة أو نسب من المستشفيات.',
          detail: 'ترتكز سياستنا على الاستقلالية التامة: نحن لا نقبل أي عمولات إحالة أو نسب من فواتير المستشفيات. يدفع المريض تكاليف الرعاية الطبية مباشرة لحسابات المستشفى، وتُحدد أتعاب تنسيق نوهـافي بشكل مستقل ومكتوب مع المريض.',
          badge: 'استقلالية تجارية',
        },
        {
          id: 'direct-coordination',
          number: '05',
          title: 'تواصل مباشر ودعم تنسيقي مستمر',
          summary: 'نقطة اتصال لتنظيم المواعيد، والرد على الاستفسارات، وتسهيل التواصل مع المستشفى.',
          detail: 'يتولى منسق الرعاية تنظيم مواعيدك ومتابعة جدولك الطبي والتنسيق مع قسم رعاية المرضى الدوليين بالمستشفى للإجابة عن استفساراتك اللوجستية طوال رحلتك العلاجية.',
          badge: 'دعم تنسيقي',
        },
        {
          id: 'data-privacy',
          number: '06',
          title: 'حماية خصوصية السجلات والبيانات الطبية',
          summary: 'بروتوكولات سرية مشددة. بياناتك الصحية لا تُباع ولا تُشارك مع أي طرف غير مصرح به.',
          detail: 'التقارير الطبية ونتائج الفحوصات بيانات شخصية بالغة الحساسية. نحن نحافظ على سرية بياناتك التامة، ولا نشاركها إلا مع الفرق الطبية في المستشفيات التي وافقت عليها مسبقاً.',
          badge: 'حماية البيانات',
        },
      ],
    },
    whyIndia: {
      eyebrow: 'لماذا التنسيق في الهند؟',
      heading: 'لماذا يستعين المرضى بنوهـافي للتنسيق الطبي في الهند؟',
      lead: 'توفر الهند رعاية طبية متقدمة بتجهيزات عالمية، لكن تنظيم الرحلة بشكل مستقل من الخارج ينطوي على تحديات.',
      reasons: [
        {
          title: 'مواجهة تباين المعلومات والتسويق التجاري',
          desc: 'بين مئات المستشفيات الخاصة، يصعب على المريض الدولي التمييز بين الكفاءة السريرية الحقيقية وبين الحملات الإعلانية. نحن نوفر معلومات موثوقة ومفحوصة.',
        },
        {
          title: 'سياسة الدفع المباشر للمستشفى',
          desc: 'بخلاف الوسطاء الذين قد يتقاضون نسباً غير معلنة من فواتير المستشفيات، تلتزم نوهـافي بسياسة التنسيق المستقل: يسدد المريض تكاليف العلاج مباشرة لإدارة المستشفى المعالج.',
        },
        {
          title: 'مساعدة لغوية وتواصل واضح',
          desc: 'قد تشكل الرحلة العلاجية في بلد آخر تحدياً في التواصل. نحن نساعد في تسهيل التفاهم وننسق مع مكاتب المرضى الدوليين بالمستشفيات لضمان وضوح كافة الترتيبات.',
        },
        {
          title: 'المساعدة بعد الخروج من المستشفى',
          desc: 'نساعدك في استلام تقارير الخروج كاملة، وتسهيل استشارات المتابعة عن بُعد مع الأطباء المعالجين لتقديمها لطبيبك في وطنك.',
        },
      ],
    },
    governance: {
      heading: 'الحوكمة السريرية والشفافية التجارية',
      clinicalLabel: 'الحوكمة السريرية',
      clinicalDesc: 'تعرف على معايير تدقيق المعلومات الطبية والحدود الفاصلة بين دور التنسيق والرعاية السريرية.',
      clinicalHref: '/en/about/clinical-governance/',
      commercialLabel: 'العلاقات والسياسة التجارية',
      commercialDesc: 'سياستنا التجارية المنشورة: صفر عمولات من المستشفيات وأتعاب تنسيق واضحة ومحددة مع المريض.',
      commercialHref: '/en/about/commercial-relationships/',
    },
    cta: {
      heading: 'هل ترغب في مناقشة خيارات علاجك في الهند؟',
      deck: 'أرسل تقاريرك الطبية الحالية لمنسقينا للحصول على مراجعة مبدئية مستقلة وغير ملزمة مع مستشفيات تخصصية معتمدة.',
      btnLabel: 'طلب رأي طبي',
      backHomeLabel: 'العودة إلى الرئيسية',
    },
    breadcrumbs: {
      home: 'الرئيسية',
      about: 'عن نوهـافي هيلث',
    },
  },
};
