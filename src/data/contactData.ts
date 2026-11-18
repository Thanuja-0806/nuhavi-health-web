/**
 * src/data/contactData.ts
 * Centralized content and localized copy for Nuhavi Health's
 * Contact and Request Medical Opinion experiences.
 *
 * Supported languages:
 * - en: English
 * - ru: Russian (Русский, LTR)
 * - ar: Arabic (العربية, RTL)
 *
 * Strict Policy Adherence:
 * - Zero invented phone numbers, emails, WhatsApp accounts, or response promises.
 * - Retains approved placeholder tags for team confirmation.
 * - Emergency medical warning on all contact and enquiry pages.
 * - Explains coordination role vs clinical hospital responsibility.
 */

import type { SupportedLang } from '../i18n/translations';

export interface ChannelCard {
  id: string;
  title: string;
  note: string;
  placeholderNotice: string;
  badgeLabel?: string;
  type: 'messaging' | 'email';
}

export interface ContactPageData {
  metaTitle: string;
  metaDescription: string;
  breadcrumbs: {
    home: string;
    contact: string;
  };
  eyebrow: string;
  title: string;
  deck: string;
  channelsHeading: string;
  channels: ChannelCard[];
  enquiryCard: {
    title: string;
    description: string;
    badge: string;
    buttonLabel: string;
    buttonHref: string;
  };
  hoursCard: {
    title: string;
    schedule: string;
    replyLabel: string;
    replyPlaceholder: string;
  };
  privacyNotice: {
    title: string;
    text: string;
  };
  emergencyNotice: {
    title: string;
    text: string;
  };
}

export interface RequestOpinionPageData {
  metaTitle: string;
  metaDescription: string;
  breadcrumbs: {
    home: string;
    requestOpinion: string;
  };
  eyebrow: string;
  title: string;
  deck: string;
  timingNote: string;
  steps: {
    step1: {
      number: string;
      label: string;
      heading: string;
      nameLabel: string;
      namePlaceholder: string;
      whoLabel: string;
      whoOptions: { value: string; label: string }[];
      countryLabel: string;
      countryPlaceholder: string;
      countryOptions: { value: string; label: string }[];
      languageLabel: string;
      languageSubnote: string;
      languageOptions: { value: string; label: string }[];
      continueButton: string;
      errorsHeading: string;
      errorName: string;
      errorCountry: string;
    };
    step2: {
      number: string;
      label: string;
      heading: string;
      specialtyLabel: string;
      specialtyOptions: { value: string; label: string }[];
      notesLabel: string;
      notesPlaceholder: string;
      backButton: string;
      continueButton: string;
    };
    step3: {
      number: string;
      label: string;
      heading: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      contactMethodLabel: string;
      contactMethodOptions: { value: string; label: string }[];
      timeLabel: string;
      timeOptions: { value: string; label: string }[];
      privacyConsentText: string;
      privacyLinkText: string;
      marketingConsentText: string;
      backButton: string;
      submitButton: string;
      submittingButton: string;
      errorsHeading: string;
      errorConsent: string;
      errorGeneral: string;
    };
    success: {
      heading: string;
      referencePrefix: string;
      referenceSuffix: string;
      followNote: string;
      demoBanner: string;
      uploadOfferTitle: string;
      uploadOfferTag: string;
      uploadOfferBodyPrefix: string;
      uploadOfferBodySuffix: string;
      healthConsentText: string;
      healthConsentLinkText: string;
      requestLinkButton: string;
      linkRequestedBanner: string;
      viewUploadPageLink: string;
      uploadLaterText: string;
      uzbekWarning: string;
      uzbekGeneticWarning: string;
    };
  };
  sidebar: {
    nextHeading: string;
    nextSteps: string[];
    privacyHeading: string;
    privacyBody: string;
    emergencyHeading: string;
    emergencyBody: string;
  };
}

export const contactData: Record<SupportedLang, ContactPageData> = {
  en: {
    metaTitle: 'Talk to a Care Coordinator | Nuhavi Health',
    metaDescription: 'Direct communication channels with Nuhavi Health medical coordinators. A person replies during office hours — no automated chatbots.',
    breadcrumbs: {
      home: 'Home',
      contact: 'Contact',
    },
    eyebrow: 'Direct Communication Channels',
    title: 'Talk to a care coordinator',
    deck: 'Choose whichever is easiest for you. A person replies — there is no chatbot. Please do not send medical reports in chat; use the private upload link we email you.',
    channelsHeading: 'Direct Messaging & Email Channels',
    channels: [
      {
        id: 'telegram',
        title: 'Telegram',
        note: 'The messenger most patients in Uzbekistan and Central Asia use.',
        placeholderNotice: '[Needs confirmation: Telegram username (PUBLIC_TELEGRAM_USERNAME)]',
        badgeLabel: 'Uzbekistan & CIS',
        type: 'messaging',
      },
      {
        id: 'whatsapp',
        title: 'WhatsApp',
        note: 'The messenger most patients in Africa and the Middle East use.',
        placeholderNotice: '[Needs confirmation: WhatsApp Business number (PUBLIC_WHATSAPP_NUMBER)]',
        badgeLabel: 'Africa & Middle East',
        type: 'messaging',
      },
      {
        id: 'email',
        title: 'Email',
        note: 'For general questions and coordination enquiries. Do not attach medical records.',
        placeholderNotice: '[Needs confirmation: contact email (PUBLIC_CONTACT_EMAIL)]',
        badgeLabel: 'General Enquiries',
        type: 'email',
      },
    ],
    enquiryCard: {
      title: 'Enquiry form',
      description: 'The fastest structured path to a physician review. Gives you an official enquiry reference straight away.',
      badge: 'Recommended',
      buttonLabel: 'Request a medical opinion',
      buttonHref: '/en/request-opinion/',
    },
    hoursCard: {
      title: 'Coordination Hours',
      schedule: 'Monday to Saturday, 9:00 to 19:00 India time (UTC+5:30)',
      replyLabel: 'We reply',
      replyPlaceholder: '[Needs confirmation: response-time promise the team can keep]',
    },
    privacyNotice: {
      title: 'Medical record privacy standard',
      text: 'Please do not send diagnostic scans or patient records over chat messengers or standard email. After your enquiry is registered, we email a private, encrypted upload link to protect your medical confidentiality.',
    },
    emergencyNotice: {
      title: 'Is this an emergency?',
      text: 'Chest pain, sudden weakness or numbness, difficulty speaking, severe bleeding, a seizure or difficulty breathing need care now. Go to the nearest emergency department or call your local emergency number. Do not wait for an enquiry reply.',
    },
  },

  ru: {
    metaTitle: 'Свяжитесь с медицинским координатором | Nuhavi Health',
    metaDescription: 'Прямые каналы связи с медицинскими координаторами Nuhavi Health. Отвечает специалист, без ботов и автоответчиков.',
    breadcrumbs: {
      home: 'Главная',
      contact: 'Контакты',
    },
    eyebrow: 'Прямые каналы связи',
    title: 'Свяжитесь с медицинским координатором',
    deck: 'Выберите наиболее удобный для вас способ связи. Вам ответит живой координатор — без ботов и автоответчиков. Пожалуйста, не отправляйте медицинские выписки в чаты; используйте защищенную ссылку, которую мы направим вам после обращения.',
    channelsHeading: 'Мессенджеры и электронная почта',
    channels: [
      {
        id: 'telegram',
        title: 'Telegram',
        note: 'Основной канал связи для пациентов из Узбекистана, Казахстана и стран СНГ.',
        placeholderNotice: '[Требуется подтверждение: имя пользователя Telegram (PUBLIC_TELEGRAM_USERNAME)]',
        badgeLabel: 'Узбекистан и СНГ',
        type: 'messaging',
      },
      {
        id: 'whatsapp',
        title: 'WhatsApp',
        note: 'Удобный канал для пациентов из стран Ближнего Востока, Африки и Европы.',
        placeholderNotice: '[Требуется подтверждение: рабочий номер WhatsApp (PUBLIC_WHATSAPP_NUMBER)]',
        badgeLabel: 'Ближний Восток и мир',
        type: 'messaging',
      },
      {
        id: 'email',
        title: 'Электронная почта',
        note: 'Для общих организационных вопросов. Пожалуйста, не прикрепляйте медицинские файлы к письмам.',
        placeholderNotice: '[Требуется подтверждение: контактный email (PUBLIC_CONTACT_EMAIL)]',
        badgeLabel: 'Общие вопросы',
        type: 'email',
      },
    ],
    enquiryCard: {
      title: 'Форма запроса заключения',
      description: 'Самый надежный способ организовать консилиум. Сразу присваивает официальный номер обращения.',
      badge: 'Рекомендуется',
      buttonLabel: 'Запросить медицинское заключение',
      buttonHref: '/ru/request-opinion/',
    },
    hoursCard: {
      title: 'Часы работы службы координации',
      schedule: 'С понедельника по субботу, с 09:00 до 19:00 по индийскому времени (IST / UTC+5:30)',
      replyLabel: 'Время ответа',
      replyPlaceholder: '[Требуется подтверждение: гарантированное время ответа команды]',
    },
    privacyNotice: {
      title: 'Стандарт защиты медицинских данных',
      text: 'Пожалуйста, не пересылайте медицинские выписки и снимки КТ/МРТ через открытые мессенджеры и обычную почту. После регистрации запроса мы вышлем персональную защищенную ссылку для безопасной передачи файлов.',
    },
    emergencyNotice: {
      title: 'Это экстренный случай?',
      text: 'Боль в груди, внезапная слабость или онемение, нарушение речи, сильное кровотечение, судороги или затрудненное дыхание требуют немедленной медицинской помощи. Срочно обратитесь в ближайшее отделение скорой помощи или вызовите экстренные службы. Не ждите ответа на запрос координации.',
    },
  },

  ar: {
    metaTitle: 'تواصل مع منسق الرعاية الطبية | نوهـافي هيلث',
    metaDescription: 'قنوات التواصل المباشرة مع منسقي الرعاية الطبية في نوهـافي هيلث. يتواصل معك منسق متخصص خلال ساعات العمل — دون أي ردود آلية.',
    breadcrumbs: {
      home: 'الرئيسية',
      contact: 'اتصل بنا',
    },
    eyebrow: 'قنوات التواصل المباشرة',
    title: 'تواصل مع منسق الرعاية الطبية',
    deck: 'اختر الوسيلة الأنسب لك. يجيبك منسق رعاية متخصص — بدون روبوتات آلية. يُرجى عدم إرسال التقارير الطبية عبر المحادثات المباشرة؛ استخدم الرابط الآمن الذي نرسله إليك عبر البريد الإلكتروني.',
    channelsHeading: 'قنوات المحادثة المباشرة والبريد',
    channels: [
      {
        id: 'telegram',
        title: 'تيليجرام (Telegram)',
        note: 'التطبيق المفضل للعديد من المرضى في آسيا الوسطى ودول رابطة الدول المستقلة.',
        placeholderNotice: '[بحاجة إلى تأكيد: معرف تيليجرام (PUBLIC_TELEGRAM_USERNAME)]',
        badgeLabel: 'آسيا الوسطى',
        type: 'messaging',
      },
      {
        id: 'whatsapp',
        title: 'واتساب (WhatsApp)',
        note: 'وسيلة التواصل الأكثر استخداماً للمرضى من دول الشرق الأوسط وأفريقيا.',
        placeholderNotice: '[بحاجة إلى تأكيد: رقم واتساب للأعمال (PUBLIC_WHATSAPP_NUMBER)]',
        badgeLabel: 'الشرق الأوسط وأفريقيا',
        type: 'messaging',
      },
      {
        id: 'email',
        title: 'البريد الإلكتروني',
        note: 'للاستفسارات العامة والترتيبات الإدارية. يُرجى عدم إرفاق الملفات الطبية المباشرة.',
        placeholderNotice: '[بحاجة إلى تأكيد: البريد الإلكتروني للتواصل (PUBLIC_CONTACT_EMAIL)]',
        badgeLabel: 'استفسارات عامة',
        type: 'email',
      },
    ],
    enquiryCard: {
      title: 'نموذج طلب الرأي الطبي',
      description: 'المسار الأكثر تنظيماً لعرض حالتك على المستشفيات. يمنحك رقماً مرجعياً رسمياً لطلبك فور الإرسال.',
      badge: 'موصى به',
      buttonLabel: 'طلب رأي طبي مجاني',
      buttonHref: '/ar/request-opinion/',
    },
    hoursCard: {
      title: 'أوقات العمل والتنسيق',
      schedule: 'من الاثنين إلى السبت، من 9:00 صباحاً حتى 7:00 مساءً بتوقيت الهند (UTC+5:30)',
      replyLabel: 'مدة الرد',
      replyPlaceholder: '[بحاجة إلى تأكيد: التزام وقت الرد الذي يمكن للفريق الوفاء به]',
    },
    privacyNotice: {
      title: 'معايير حماية وخصوصية السجلات الطبية',
      text: 'يُرجى عدم إرسال الأشعة التشخيصية أو الملفات الطبية الحساسة عبر تطبيقات المراسلة العامة. بعد تسجيل استفسارك، نرسل إليك رابطاً مشفراً وخاصاً لتحميل المستندات لضمان أعلى درجات السرية الطبية.',
    },
    emergencyNotice: {
      title: 'هل هذه حالة طارئة؟',
      text: 'ألم الصدر الحاد، أو الضعف والخدر المفاجئ، أو صعوبة النطق، أو النزيف الحاد، أو التشنجات وصعوبة التنفس تستدعي رعاية طبية فورية. توجه فوراً إلى أقرب قسم طوارئ أو اتصل برقم الإسعاف المحلي في بلدك. لا تنتظر رداً على استفسار التنسيق.',
    },
  },
};

export const requestOpinionData: Record<SupportedLang, RequestOpinionPageData> = {
  en: {
    metaTitle: 'Request a Medical Opinion | Nuhavi Health',
    metaDescription: 'Start with a short enquiry. No payment and no commitment. You can send your reports securely straight afterwards.',
    breadcrumbs: {
      home: 'Home',
      requestOpinion: 'Request a medical opinion',
    },
    eyebrow: 'Medical Travel Coordination',
    title: 'Request a medical opinion',
    deck: 'Start with a short enquiry. No payment and no commitment. You can send your reports securely straight afterwards.',
    timingNote: 'Takes about two minutes. Please do not paste medical reports here — after you send this, you can upload them through a secure link.',
    steps: {
      step1: {
        number: '1',
        label: 'About you',
        heading: 'About you',
        nameLabel: "Full name of the patient",
        namePlaceholder: 'e.g. Johnathan Doe',
        whoLabel: 'Who is filling in this form?',
        whoOptions: [
          { value: 'patient', label: 'The patient' },
          { value: 'family', label: 'A family member' },
          { value: 'attendant', label: 'A friend or attendant' },
        ],
        countryLabel: 'Country of residence',
        countryPlaceholder: 'Choose a country',
        countryOptions: [
          { value: 'uzbekistan', label: 'Uzbekistan' },
          { value: 'kenya', label: 'Kenya' },
          { value: 'tanzania', label: 'Tanzania' },
          { value: 'nigeria', label: 'Nigeria' },
          { value: 'uganda', label: 'Uganda' },
          { value: 'ghana', label: 'Ghana' },
          { value: 'rwanda', label: 'Rwanda' },
          { value: 'kazakhstan', label: 'Kazakhstan' },
          { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
          { value: 'tajikistan', label: 'Tajikistan' },
          { value: 'saudi', label: 'Saudi Arabia' },
          { value: 'uae', label: 'United Arab Emirates' },
          { value: 'oman', label: 'Oman' },
          { value: 'yemen', label: 'Yemen' },
          { value: 'iraq', label: 'Iraq' },
          { value: 'other', label: 'Other country' },
        ],
        languageLabel: 'Preferred language',
        languageSubnote: 'We will tell you if we cannot yet support your language.',
        languageOptions: [
          { value: 'en', label: 'English' },
          { value: 'ru', label: 'Русский (Russian)' },
          { value: 'uz', label: "O'zbek (Uzbek)" },
          { value: 'ar', label: 'العربية (Arabic)' },
          { value: 'sw', label: 'Kiswahili (Swahili)' },
        ],
        continueButton: 'Continue to enquiry details',
        errorsHeading: 'Please check the following before continuing:',
        errorName: "Enter the patient's full name",
        errorCountry: 'Choose the country where the patient lives',
      },
      step2: {
        number: '2',
        label: 'Your enquiry',
        heading: 'Your enquiry',
        specialtyLabel: 'Medical specialty or treatment needed',
        specialtyOptions: [
          { value: 'cancer-care', label: 'Cancer care (oncology)' },
          { value: 'orthopaedics', label: 'Orthopaedics and joint replacement' },
          { value: 'cardiac-sciences', label: 'Cardiac sciences and heart surgery' },
          { value: 'neurosciences', label: 'Neurosciences and brain surgery' },
          { value: 'organ-transplants', label: 'Organ transplants' },
          { value: 'spine-surgery', label: 'Spine surgery' },
          { value: 'gastroenterology', label: 'Gastroenterology and hepatology' },
          { value: 'nephrology-urology', label: 'Nephrology and urology' },
          { value: 'fertility', label: 'Fertility and IVF' },
          { value: 'ophthalmology', label: 'Ophthalmology and eye surgery' },
          { value: 'other', label: 'Other specialty (on request)' },
        ],
        notesLabel: 'Describe your symptoms, diagnosis or what advice you need',
        notesPlaceholder: 'Give a brief summary. Do not paste full records here.',
        backButton: 'Back',
        continueButton: 'Continue to contact & consent',
      },
      step3: {
        number: '3',
        label: 'Contact and consent',
        heading: 'Contact and consent',
        emailLabel: 'Email address',
        emailPlaceholder: 'name@example.com',
        phoneLabel: 'Phone or WhatsApp number, with country code',
        phonePlaceholder: '+1 234 567 8900',
        contactMethodLabel: 'Best way to contact you',
        contactMethodOptions: [
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'phone', label: 'Phone call' },
          { value: 'email', label: 'Email' },
          { value: 'telegram', label: 'Telegram' },
        ],
        timeLabel: 'Best time to reach you (your local time)',
        timeOptions: [
          { value: 'any', label: 'Any time' },
          { value: 'morning', label: 'Morning (09:00 - 12:00)' },
          { value: 'afternoon', label: 'Afternoon (12:00 - 17:00)' },
          { value: 'evening', label: 'Evening (17:00 - 20:00)' },
        ],
        privacyConsentText: 'I have read the privacy notice and agree that Nuhavi Health may use these details to contact me about this enquiry.',
        privacyLinkText: 'privacy notice',
        marketingConsentText: 'Optional: send me occasional updates and patient guides. This is separate from my enquiry and I can stop at any time.',
        backButton: 'Back',
        submitButton: 'Send enquiry',
        submittingButton: 'Submitting enquiry...',
        errorsHeading: 'Please check the following before submitting:',
        errorConsent: 'Please agree to the privacy notice to submit your enquiry',
        errorGeneral: 'Please complete all required fields before submitting.',
      },
      success: {
        heading: 'Enquiry received',
        referencePrefix: 'Your enquiry reference is',
        referenceSuffix: 'Keep it for your records.',
        followNote: 'A care coordinator will contact you using the method you chose.',
        demoBanner: "Demonstration mode: this preview is not connected to Nuhavi's systems. Nothing was sent or stored.",
        uploadOfferTitle: 'Send your medical reports now',
        uploadOfferTag: 'optional',
        uploadOfferBodyPrefix: 'Reports sent today let the review start sooner. We email a private upload link to',
        uploadOfferBodySuffix: ', valid for 48 hours.',
        healthConsentText: 'I agree that Nuhavi Health may store my medical reports securely and that its doctors and coordinators may review them to coordinate my care. My reports will be shared with a hospital only after I agree to that hospital. I can withdraw this consent at any time.',
        healthConsentLinkText: 'Privacy notice',
        requestLinkButton: 'Email me a secure upload link',
        linkRequestedBanner: 'Demonstration: a secure link would now be emailed to',
        viewUploadPageLink: 'See the upload page',
        uploadLaterText: 'Or wait — your coordinator can send it later.',
        uzbekWarning: 'Secure upload for your country is opening soon. Your coordinator will tell you how to share your reports safely. Please do not send them by chat or email.',
        uzbekGeneticWarning: 'Patients living in Uzbekistan: please never upload genetic test results (for example BRCA or NGS reports). Uzbek law requires genetic data to stay in Uzbekistan.',
      },
    },
    sidebar: {
      nextHeading: 'What happens next',
      nextSteps: [
        'You receive an official enquiry reference straight away.',
        'If you wish, agree to secure storage and we email you a private link to upload your reports — optional, and you can do it later.',
        'A coordinator contacts you by your chosen method during office hours.',
        'With your agreement, an accredited hospital team reviews your records and you receive their opinion and itemized estimate.',
      ],
      privacyHeading: 'Strict Medical Privacy',
      privacyBody: 'We never sell or disclose patient contact details to third parties. Records are reviewed strictly for clinical coordination and shared only with hospitals you explicitly authorize.',
      emergencyHeading: 'Is this an emergency?',
      emergencyBody: 'Chest pain, sudden weakness or numbness, difficulty speaking, severe bleeding, a seizure or difficulty breathing need care now. Go to the nearest emergency department or call your local emergency number. Do not wait for an enquiry reply.',
    },
  },

  ru: {
    metaTitle: 'Запросить медицинское заключение | Nuhavi Health',
    metaDescription: 'Начните с короткого запроса. Без оплаты и без обязательств. После этого вы сможете безопасно загрузить медицинские документы.',
    breadcrumbs: {
      home: 'Главная',
      requestOpinion: 'Запросить медицинское заключение',
    },
    eyebrow: 'Координация медицинских поездок',
    title: 'Запросить медицинское заключение',
    deck: 'Начните с короткого запроса. Без оплаты и без обязательств. После этого вы сможете безопасно загрузить медицинские документы.',
    timingNote: 'Заполнение займет около двух минут. Пожалуйста, не вставляйте сюда выписки — после отправки запроса мы пришлем вам защищенную ссылку для загрузки.',
    steps: {
      step1: {
        number: '1',
        label: 'О пациенте',
        heading: 'О пациенте',
        nameLabel: 'ФИО пациента',
        namePlaceholder: 'например, Иванов Иван Иванович',
        whoLabel: 'Кто заполняет эту форму?',
        whoOptions: [
          { value: 'patient', label: 'Сам пациент' },
          { value: 'family', label: 'Член семьи или родственник' },
          { value: 'attendant', label: 'Друг или сопровождающее лицо' },
        ],
        countryLabel: 'Страна постоянного проживания',
        countryPlaceholder: 'Выберите страну',
        countryOptions: [
          { value: 'uzbekistan', label: 'Узбекистан' },
          { value: 'kazakhstan', label: 'Казахстан' },
          { value: 'kyrgyzstan', label: 'Кыргызстан' },
          { value: 'tajikistan', label: 'Таджикистан' },
          { value: 'kenya', label: 'Кения' },
          { value: 'tanzania', label: 'Танзания' },
          { value: 'nigeria', label: 'Нигерия' },
          { value: 'uganda', label: 'Уганда' },
          { value: 'ghana', label: 'Гана' },
          { value: 'rwanda', label: 'Руанда' },
          { value: 'saudi', label: 'Саудовская Аравия' },
          { value: 'uae', label: 'ОАЭ' },
          { value: 'oman', label: 'Оман' },
          { value: 'yemen', label: 'Йемен' },
          { value: 'iraq', label: 'Ирак' },
          { value: 'other', label: 'Другая страна' },
        ],
        languageLabel: 'Предпочитаемый язык общения',
        languageSubnote: 'Мы обязательно сообщим, если на данном этапе координация на этом языке недоступна.',
        languageOptions: [
          { value: 'ru', label: 'Русский (Russian)' },
          { value: 'uz', label: "O'zbek (Uzbek)" },
          { value: 'en', label: 'English (Английский)' },
          { value: 'ar', label: 'العربية (Arabic)' },
          { value: 'sw', label: 'Kiswahili (Суахили)' },
        ],
        continueButton: 'Продолжить к деталям запроса',
        errorsHeading: 'Пожалуйста, проверьте следующие поля:',
        errorName: 'Укажите полное имя пациента',
        errorCountry: 'Выберите страну проживания пациента',
      },
      step2: {
        number: '2',
        label: 'Ваш запрос',
        heading: 'Ваш медицинский запрос',
        specialtyLabel: 'Требуемое медицинское направление',
        specialtyOptions: [
          { value: 'cancer-care', label: 'Онкология и лечение рака' },
          { value: 'orthopaedics', label: 'Ортопедия и замена суставов' },
          { value: 'cardiac-sciences', label: 'Кардиология и кардиохирургия' },
          { value: 'neurosciences', label: 'Неврология и нейрохирургия' },
          { value: 'organ-transplants', label: 'Трансплантация органов' },
          { value: 'spine-surgery', label: 'Хирургия позвоночника' },
          { value: 'gastroenterology', label: 'Гастроэнтерология и гепатология' },
          { value: 'nephrology-urology', label: 'Нефрология и урология' },
          { value: 'fertility', label: 'Лечение бесплодия и ЭКО' },
          { value: 'ophthalmology', label: 'Офтальмология и микрохирургия глаза' },
          { value: 'other', label: 'Другое направление (по согласованию)' },
        ],
        notesLabel: 'Опишите диагноз, текущие симптомы или суть вопроса',
        notesPlaceholder: 'Кратко изложите ситуацию. Полные выписки вы сможете загрузить позже.',
        backButton: 'Назад',
        continueButton: 'Продолжить к контактам и согласию',
      },
      step3: {
        number: '3',
        label: 'Контакты и согласие',
        heading: 'Контакты и согласие',
        emailLabel: 'Электронная почта',
        emailPlaceholder: 'name@example.com',
        phoneLabel: 'Номер телефона или WhatsApp (с кодом страны)',
        phonePlaceholder: '+998 90 123 4567',
        contactMethodLabel: 'Удобный способ связи',
        contactMethodOptions: [
          { value: 'telegram', label: 'Telegram' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'phone', label: 'Телефонный звонок' },
          { value: 'email', label: 'Эл. почта' },
        ],
        timeLabel: 'Удобное время для связи (по вашему местному времени)',
        timeOptions: [
          { value: 'any', label: 'В любое время' },
          { value: 'morning', label: 'Утром (09:00 - 12:00)' },
          { value: 'afternoon', label: 'Днем (12:00 - 17:00)' },
          { value: 'evening', label: 'Вечером (17:00 - 20:00)' },
        ],
        privacyConsentText: 'Я ознакомился с политикой конфиденциальности и согласен, что Nuhavi Health может использовать эти данные для связи со мной по данному запросу.',
        privacyLinkText: 'политикой конфиденциальности',
        marketingConsentText: 'Необязательно: присылать мне полезные медицинские руководства. Это не связано с моим текущим запросом, и я могу отписаться в любое время.',
        backButton: 'Назад',
        submitButton: 'Отправить запрос',
        submittingButton: 'Отправка запроса...',
        errorsHeading: 'Пожалуйста, проверьте следующие поля:',
        errorConsent: 'Необходимо согласиться с политикой конфиденциальности для отправки запроса',
        errorGeneral: 'Пожалуйста, заполните все обязательные поля перед отправкой.',
      },
      success: {
        heading: 'Запрос успешно принят',
        referencePrefix: 'Номер вашего обращения:',
        referenceSuffix: 'Сохраните его для истории.',
        followNote: 'Медицинский координатор свяжется с вами выбранным способом в ближайшее время.',
        demoBanner: 'Режим демонстрации: запрос зафиксирован в интерфейсе прототипа.',
        uploadOfferTitle: 'Отправить медицинские выписки сейчас',
        uploadOfferTag: 'необязательно',
        uploadOfferBodyPrefix: 'Выписки, отправленные сегодня, ускорят врачебный консилиум. Мы направим персональную защищенную ссылку на',
        uploadOfferBodySuffix: ' (действительна 48 часов).',
        healthConsentText: 'Я согласен, что Nuhavi Health может безопасно хранить мои медицинские документы, а врачи и координаторы службы могут изучать их для организации лечения. Мои документы будут переданы в клинику только после моего явного согласия на работу с этой клиникой. Я могу отозвать это согласие в любое время.',
        healthConsentLinkText: 'Политика конфиденциальности',
        requestLinkButton: 'Отправить мне ссылку для загрузки',
        linkRequestedBanner: 'Ссылка для безопасной загрузки запрошена и отправлена на',
        viewUploadPageLink: 'Перейти к странице загрузки',
        uploadLaterText: 'Или подождите — ваш координатор сможет выслать ссылку позже.',
        uzbekWarning: 'Безопасная загрузка для вашей страны скоро откроется. Координатор свяжется с вами и подскажет безопасный порядок передачи данных. Пожалуйста, не отправляйте выписки в мессенджеры.',
        uzbekGeneticWarning: 'Пациенты, проживающие в Узбекистане: пожалуйста, никогда не загружайте результаты генетических тестов (например, BRCA или NGS). Законодательство Узбекистана требует хранения генетических данных внутри страны.',
      },
    },
    sidebar: {
      nextHeading: 'Что происходит дальше',
      nextSteps: [
        'Вашему обращению сразу присваивается официальный номер для отслеживания.',
        'При вашем согласии мы направим защищенную ссылку для загрузки выписок и снимков МРТ/КТ — это необязательно делать сразу.',
        'Медицинский координатор свяжется с вами на русском языке в удобное для вас время.',
        'Врачи профильных аккредитованных клиник изучат историю болезни и подготовят независимое заключение и официальную смету.',
      ],
      privacyHeading: 'Безопасность медицинских данных',
      privacyBody: 'Мы не передаем контакты посторонним лицам. Ваши медицинские выписки передаются только в клиники, согласованные с вами лично.',
      emergencyHeading: 'Неотложная медицинская помощь',
      emergencyBody: 'Боль в груди, внезапная слабость или онемение, нарушение речи, сильное кровотечение, судороги или затрудненное дыхание требуют немедленной помощи. Срочно обратитесь в ближайшую больницу скорой помощи. Не ждите ответа на запрос координации.',
    },
  },

  ar: {
    metaTitle: 'طلب رأي طبي واستشارة | نوهـافي هيلث',
    metaDescription: 'ابدأ بطلب استفسار موجز. دون أي رسوم أو التزام مالي. يمكنك إرسال تقاريرك الطبية بأمان تام فور الانتهاء.',
    breadcrumbs: {
      home: 'الرئيسية',
      requestOpinion: 'طلب رأي طبي',
    },
    eyebrow: 'تنسيق السفر للعلاج الطبي',
    title: 'طلب رأي طبي واستشارة علاجية',
    deck: 'ابدأ بطلب استفسار موجز. دون أي رسوم أو التزام مالي. يمكنك إرسال تقاريرك الطبية بأمان تام فور الانتهاء.',
    timingNote: 'يستغرق ملء النموذج نحو دقيقتين. يُرجى عدم لصق التقارير الطبية هنا — بعد إرسال النموذج، يمكنك تحميلها عبر رابط مشفر وآمن.',
    steps: {
      step1: {
        number: '1',
        label: 'بيانات المريض',
        heading: 'بيانات المريض',
        nameLabel: 'الاسم الكامل للمريض',
        namePlaceholder: 'مثال: محمد عبدالله',
        whoLabel: 'من يقوم بتعبئة هذا النموذج؟',
        whoOptions: [
          { value: 'patient', label: 'المريض نفسه' },
          { value: 'family', label: 'أحد أفراد العائلة' },
          { value: 'attendant', label: 'مرافق أو صديق' },
        ],
        countryLabel: 'بلد الإقامة الحالي',
        countryPlaceholder: 'اختر الدولة',
        countryOptions: [
          { value: 'saudi', label: 'المملكة العربية السعودية' },
          { value: 'uae', label: 'الإمارات العربية المتحدة' },
          { value: 'oman', label: 'سلطنة عمان' },
          { value: 'yemen', label: 'اليمن' },
          { value: 'iraq', label: 'العراق' },
          { value: 'kenya', label: 'كينيا' },
          { value: 'tanzania', label: 'تنزانيا' },
          { value: 'nigeria', label: 'نيجيريا' },
          { value: 'uzbekistan', label: 'أوزبكستان' },
          { value: 'kazakhstan', label: 'كازاخستان' },
          { value: 'uganda', label: 'أوغندا' },
          { value: 'ghana', label: 'غانا' },
          { value: 'rwanda', label: 'رواندا' },
          { value: 'other', label: 'دولة أخرى' },
        ],
        languageLabel: 'لغة التواصل المفضلة',
        languageSubnote: 'سنبلغك في حال تعذر تقديم الدعم بلغتك المفضلة في الوقت الحالي.',
        languageOptions: [
          { value: 'ar', label: 'العربية (Arabic)' },
          { value: 'en', label: 'English (الإنجليزية)' },
          { value: 'ru', label: 'Русский (الروسية)' },
          { value: 'uz', label: "O'zbek (الأوزبكية)" },
          { value: 'sw', label: 'Kiswahili (السواحلية)' },
        ],
        continueButton: 'الانتقال إلى تفاصيل الحالة',
        errorsHeading: 'يرجى مراجعة الحقول التالية قبل المتابعة:',
        errorName: 'يرجى إدخال الاسم الكامل للمريض',
        errorCountry: 'يرجى اختيار بلد إقامة المريض',
      },
      step2: {
        number: '2',
        label: 'تفاصيل الطلب',
        heading: 'تفاصيل الطلب الطبي',
        specialtyLabel: 'التخصص الطبي أو نوع العلاج المطلوب',
        specialtyOptions: [
          { value: 'cancer-care', label: 'علاج الأورام وأمراض السرطان' },
          { value: 'orthopaedics', label: 'جراحة العظام واستبدال المفاصل' },
          { value: 'cardiac-sciences', label: 'أمراض وجراحة القلب والأوعية الدموية' },
          { value: 'neurosciences', label: 'علوم وجراحة المخ والأعصاب' },
          { value: 'organ-transplants', label: 'عمليات زراعة الأعضاء' },
          { value: 'spine-surgery', label: 'جراحة العمود الفقري' },
          { value: 'gastroenterology', label: 'أمراض الجهاز الهضمي والكبد' },
          { value: 'nephrology-urology', label: 'أمراض الكلى والمسالك البولية' },
          { value: 'fertility', label: 'علاج العقم وتأخر الإنجاب (أطفال الأنابيب)' },
          { value: 'ophthalmology', label: 'طب وجراحة العيون' },
          { value: 'other', label: 'تخصص آخر (حسب الطلب)' },
        ],
        notesLabel: 'صف الأعراض الحالية أو التشخيص أو المشورة الطبية المطلوبة',
        notesPlaceholder: 'يرجى تقديم ملخص موجز. لا تلصق التقارير الطبية الكاملة هنا.',
        backButton: 'رجوع',
        continueButton: 'الانتقال إلى بيانات الاتصال والموافقة',
      },
      step3: {
        number: '3',
        label: 'التواصل والموافقة',
        heading: 'بيانات التواصل والموافقة',
        emailLabel: 'عنوان البريد الإلكتروني',
        emailPlaceholder: 'name@example.com',
        phoneLabel: 'رقم الهاتف أو الواتساب مع الرمز الدولي',
        phonePlaceholder: '+966 50 000 0000',
        contactMethodLabel: 'طريقة التواصل المفضلة',
        contactMethodOptions: [
          { value: 'whatsapp', label: 'واتساب (WhatsApp)' },
          { value: 'phone', label: 'اتصال هاتفي' },
          { value: 'email', label: 'البريد الإلكتروني' },
          { value: 'telegram', label: 'تيليجرام (Telegram)' },
        ],
        timeLabel: 'أفضل وقت للاتصال بك (حسب توقيتك المحلي)',
        timeOptions: [
          { value: 'any', label: 'في أي وقت' },
          { value: 'morning', label: 'صباحاً (09:00 - 12:00)' },
          { value: 'afternoon', label: 'ظهراً (12:00 - 17:00)' },
          { value: 'evening', label: 'مساءً (17:00 - 20:00)' },
        ],
        privacyConsentText: 'لقد قرأت إشعار الخصوصية وأوافق على قيام نوهـافي هيلث باستخدام هذه البيانات للتواصل معي بشأن هذا الطلب.',
        privacyLinkText: 'إشعار الخصوصية',
        marketingConsentText: 'اختياري: إرسال أدلة طبية وإرشادات للمرضى من حين لآخر. هذا منفصل عن استفساري ويمكنني إلغاء الاشتراك في أي وقت.',
        backButton: 'رجوع',
        submitButton: 'إرسال الطلب الآن',
        submittingButton: 'جاري إرسال الطلب...',
        errorsHeading: 'يرجى مراجعة الحقول التالية قبل الإرسال:',
        errorConsent: 'يرجى الموافقة على إشعار الخصوصية لإرسال طلبك',
        errorGeneral: 'يرجى إكمال جميع الحقول المطلوبة قبل الإرسال.',
      },
      success: {
        heading: 'تم استلام طلبك بنجاح',
        referencePrefix: 'الرقم المرجعي لطلبك هو:',
        referenceSuffix: 'يُرجى الاحتفاظ به لسجلاتك ومتابعتك.',
        followNote: 'سيتواصل معك منسق الرعاية الطبية عبر الوسيلة التي قمت باختيارها في أقرب وقت.',
        demoBanner: 'وضع المعاينة التجريبية: هذا النموذج للعرض ولم يتم تسجيل البيانات في الأنظمة الفعلية.',
        uploadOfferTitle: 'إرسال التقارير الطبية الآن',
        uploadOfferTag: 'اختياري',
        uploadOfferBodyPrefix: 'إرسال التقارير اليوم يتيح لفريق المستشفى بدء المراجعة بشكل أسرع. سنرسل رابط تحميل آمن وخاص إلى',
        uploadOfferBodySuffix: '، ويكون صالحاً لمدة 48 ساعة.',
        healthConsentText: 'أوافق على قيام نوهـافي هيلث بتخزين تقاريري الطبية بأمان ومراجعتها من قبل الأطباء والمنسقين لتنسيق علاجي. لن تتم مشاركة تقاريري مع أي مستشفى إلا بعد موافقتي الصريحة على ذلك المستشفى، ويمكنني سحب هذه الموافقة في أي وقت.',
        healthConsentLinkText: 'إشعار الخصوصية',
        requestLinkButton: 'أرسل لي رابط التحميل الآمن عبر البريد',
        linkRequestedBanner: 'تم طلب رابط التحميل المشفر وسيتم إرساله إلى',
        viewUploadPageLink: 'عرض صفحة رفع الملفات',
        uploadLaterText: 'أو يمكنك الانتظار — يستطيع منسقك إرسال الرابط لك لاحقاً.',
        uzbekWarning: 'خدمة التحميل الآمن للملفات ستتوفر قريباً لبلدك. سيخبرك المنسق بكيفية مشاركة تقاريرك بأمان. يُرجى عدم إرسالها عبر المحادثة أو البريد.',
        uzbekGeneticWarning: 'للمرضى المقيمين في أوزبكستان: يُرجى عدم تحميل نتائج الاختبارات الجينية إطلاقاً (مثل تحاليل BRCA أو تقارير NGS). يتطلب القانون الأوزبكي الاحتفاظ بالبيانات الجينية داخل حدود أوزبكستان.',
      },
    },
    sidebar: {
      nextHeading: 'ماذا يحدث بعد إرسال الطلب؟',
      nextSteps: [
        'يتم إصدار رقم مرجعي رسمي لطلبك فور الانتهاء مباشرة.',
        'إذا رغبت في ذلك، يمكنك الموافقة على التخزين الآمن وسنرسل لك رابطاً خاصاً لتحميل تقاريرك الطبية — خطوة اختيارية ويمكنك القيام بها لاحقاً.',
        'يتواصل معك منسق الرعاية الطبية عبر طريقتك المفضلة خلال ساعات العمل.',
        'بموافقتك، يراجع فريق المستشفى المعتمد أوراقك الطبية وتتلقى الرأي الطبي المبدئي وتقدير التكلفة التفصيلي.',
      ],
      privacyHeading: 'خصوصية وسرية السجلات الطبية',
      privacyBody: 'نحن لا نشارك أو نبيع بيانات الاتصال الخاصة بالمرضى لأي جهة خارجية. تتم مراجعة التقارير الطبية حصرياً لأغراض التنسيق العلاجي ولا تُرسل إلا للمستشفيات التي توافق عليها أنت شخصياً.',
      emergencyHeading: 'هل هذه حالة طارئة؟',
      emergencyBody: 'ألم الصدر الحاد، أو الضعف والخدر المفاجئ، أو صعوبة النطق، أو النزيف الحاد، أو التشنجات وصعوبة التنفس تستدعي رعاية طبية فورية. توجه فوراً إلى أقرب قسم طوارئ أو اتصل برقم الإسعاف المحلي في بلدك. لا تنتظر رداً على استفسار التنسيق.',
    },
  },
};

