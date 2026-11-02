/**
 * src/i18n/translations.ts
 * Centralized, professional translations for Nuhavi Health.
 * Supported languages:
 * - en: English (Original reference)
 * - ru: Russian (Русский, LTR)
 * - ar: Arabic (العربية, RTL)
 *
 * Strict Medical & Coordination Rules:
 * - Natural, fluent medical coordination terminology.
 * - Zero invented clinical claims or changes to meaning.
 * - Brand name "Nuhavi Health" and certified abbreviations (NABH, JCI) preserved.
 */

export type SupportedLang = 'en' | 'ru' | 'ar';

export interface SiteTranslations {
  nav: {
    treatments: string;
    hospitals: string;
    howItWorks: string;
    countries: string;
    stories: string;
    resources: string;
    about: string;
    contact: string;
    requestOpinion: string;
    menu: string;
    close: string;
    language: string;
  };
  footer: {
    roleDescription: string;
    disclaimerCallout: string;
    coordinationHeading: string;
    aboutHeading: string;
    legalHeading: string;
    privacyPolicy: string;
    termsConditions: string;
    disclaimer: string;
    copyright: (year: number) => string;
  };
  chatWidget: {
    title: string;
    subtitle: string;
    telegramStatus: string;
    whatsappStatus: string;
    emailTitle: string;
    emailStatus: string;
    warningNote: string;
    buttonLabel: string;
    buttonAriaLabel: string;
  };
}

export const translations: Record<SupportedLang, SiteTranslations> = {
  en: {
    nav: {
      treatments: 'Treatments',
      hospitals: 'Hospitals',
      howItWorks: 'How it works',
      countries: 'Countries',
      stories: 'Stories',
      resources: 'Resources',
      about: 'About',
      contact: 'Contact',
      requestOpinion: 'Request a medical opinion',
      menu: 'Menu',
      close: 'Close',
      language: 'Language',
    },
    footer: {
      roleDescription:
        'Nuhavi Health is an independent medical travel coordination service. We assist international patients by coordinating requests, travel logistics, and communication with independent healthcare providers.',
      disclaimerCallout:
        'Notice: Nuhavi Health facilitates coordination and communication between patients and healthcare providers. We are not a hospital, clinic, or medical provider and do not provide medical diagnosis, treatment, or clinical evaluations.',
      coordinationHeading: 'Coordination',
      aboutHeading: 'About Nuhavi Health',
      legalHeading: 'Legal',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms and Conditions',
      disclaimer: 'Disclaimer',
      copyright: (year: number) => `© ${year} Nuhavi Health. All rights reserved.`,
    },
    chatWidget: {
      title: 'Talk to a care coordinator',
      subtitle: 'A coordinator replies during office hours — Monday to Saturday.',
      telegramStatus: 'Number coming soon — use the contact page',
      whatsappStatus: 'Number coming soon — use the contact page',
      emailTitle: 'Email',
      emailStatus: 'General enquiry — use the contact page',
      warningNote:
        'Please do not send medical reports through chat or email. After your enquiry we email you a private, secure upload link.',
      buttonLabel: 'Chat with us',
      buttonAriaLabel: 'Talk to a care coordinator',
    },
  },

  ru: {
    nav: {
      treatments: 'Лечение',
      hospitals: 'Больницы',
      howItWorks: 'Как это работает',
      countries: 'Страны',
      stories: 'Истории пациентов',
      resources: 'Руководства',
      about: 'О нас',
      contact: 'Контакты',
      requestOpinion: 'Запросить медицинское заключение',
      menu: 'Меню',
      close: 'Закрыть',
      language: 'Язык',
    },
    footer: {
      roleDescription:
        'Nuhavi Health — независимая служба координации медицинских поездок. Мы помогаем иностранным пациентам, организуя медицинские запросы, логистику поездки и взаимодействие с ведущими независимыми клиниками.',
      disclaimerCallout:
        'Внимание: Nuhavi Health содействует координации и общению между пациентами и медицинскими учреждениями. Мы не являемся клиникой или медицинским учреждением и не осуществляем самостоятельную диагностику, назначение или проведение лечения.',
      coordinationHeading: 'Координация',
      aboutHeading: 'О Nuhavi Health',
      legalHeading: 'Юридическая информация',
      privacyPolicy: 'Политика конфиденциальности',
      termsConditions: 'Условия использования',
      disclaimer: 'Отказ от ответственности',
      copyright: (year: number) => `© ${year} Nuhavi Health. Все права защищены.`,
    },
    chatWidget: {
      title: 'Свяжитесь с координатором',
      subtitle: 'Координатор отвечает в рабочее время — с понедельника по субботу.',
      telegramStatus: 'Номер скоро появится — используйте страницу контактов',
      whatsappStatus: 'Номер скоро появится — используйте страницу контактов',
      emailTitle: 'Эл. почта',
      emailStatus: 'Общие вопросы — используйте страницу контактов',
      warningNote:
        'Пожалуйста, не отправляйте медицинские документы через чат или эл. почту. После обращения мы вышлем вам защищенную ссылку для приватной загрузки.',
      buttonLabel: 'Связаться с нами',
      buttonAriaLabel: 'Связаться с медицинским координатором',
    },
  },

  ar: {
    nav: {
      treatments: 'العلاجات',
      hospitals: 'المستشفيات',
      howItWorks: 'كيف نعمل',
      countries: 'الدول',
      stories: 'تجارب المرضى',
      resources: 'المصادر',
      about: 'عن نوهـافي',
      contact: 'اتصل بنا',
      requestOpinion: 'طلب رأي طبي',
      menu: 'القائمة',
      close: 'إغلاق',
      language: 'اللغة',
    },
    footer: {
      roleDescription:
        'نوهـافي هيلث (Nuhavi Health) هي خدمة مستقلة لتنسيق السفر الطبي. نحن نساعد المرضى الدوليين من خلال تنسيق الطلبات الطبية والترتيبات اللوجستية والتواصل مع مقدمي الرعاية الصحية المستقلين.',
      disclaimerCallout:
        'تنويه: تُيسّر نوهـافي هيلث التنسيق والتواصل بين المرضى ومقدمي الرعاية الصحية. نحن لسنا مستشفى أو عيادة أو جهة علاجية، ولا نقدم تشخيصاً طبياً أو علاجاً أو تقييماً سريرياً.',
      coordinationHeading: 'خدمات التنسيق',
      aboutHeading: 'عن نوهـافي هيلث',
      legalHeading: 'معلومات قانونية',
      privacyPolicy: 'سياسة الخصوصية',
      termsConditions: 'الشروط والأحكام',
      disclaimer: 'إخلاء المسؤولية',
      copyright: (year: number) => `© ${year} نوهـافي هيلث. جميع الحقوق محفوظة.`,
    },
    chatWidget: {
      title: 'تحدث مع منسق الرعاية',
      subtitle: 'يجيب المنسق خلال ساعات العمل — من الاثنين إلى السبت.',
      telegramStatus: 'الرقم قريباً — استخدم صفحة التواصل',
      whatsappStatus: 'الرقم قريباً — استخدم صفحة التواصل',
      emailTitle: 'البريد الإلكتروني',
      emailStatus: 'استفسارات عامة — استخدم صفحة التواصل',
      warningNote:
        'يرجى عدم إرسال التقارير الطبية عبر المحادثة أو البريد الإلكتروني. بعد استفسارك، سنرسل إليك رابطاً آمناً وخاصاً لتحميل الملفات.',
      buttonLabel: 'محادثة معنا',
      buttonAriaLabel: 'تحدث مع منسق الرعاية الطبية',
    },
  },
};

export function getLangFromUrl(url: URL): SupportedLang {
  const pathname = url.pathname;
  if (pathname.startsWith('/ar')) return 'ar';
  if (pathname.startsWith('/ru')) return 'ru';
  return 'en';
}

