/**
 * src/data/costsData.ts
 * Centralized, verified financial transparency and cost breakdown data for Nuhavi Health.
 *
 * Requirements:
 * - 6 Expandable Accordion Sections:
 *   1. Understanding Treatment Costs (with approved 22/16/14/20/10/10/8% baseline model)
 *   2. Hospital Charges vs Nuhavi Fees
 *   3. What Is Included
 *   4. Additional Expenses
 *   5. Payment Process
 *   6. Cost Estimates & Disclaimer
 *
 * Strict Medical & Coordination Rules:
 * - Direct hospital billing: hospital charges paid directly to treating hospitals.
 * - Zero referral commissions, kickbacks, or hidden hospital markups.
 * - Nuhavi coordinates medical travel; hospitals independently diagnose and treat.
 * - No unconfirmed fees, discounts, or promised savings.
 * - Clear disclaimer that Nuhavi does not promise treatment outcomes or savings.
 * - Full English, Russian, and Arabic RTL support.
 */

import type { SupportedLang } from '../i18n/translations';

export interface CostCategory {
  id: string;
  name: string;
  percent: string;
  width: string;
  color: string;
  desc: string;
}

export interface AccordionBullet {
  title?: string;
  text: string;
}

export interface AccordionCallout {
  title: string;
  text: string;
  type?: 'info' | 'trust' | 'notice';
}

export interface CostAccordionSection {
  id: string;
  number: string;
  title: string;
  summary: string;
  badge?: string;
  paragraphs?: string[];
  bullets?: AccordionBullet[];
  callout?: AccordionCallout;
}

export interface CostsDataContent {
  pageTitle: string;
  pageDescription: string;
  eyebrow: string;
  title: string;
  deck: string;
  illustrativeNote: string;
  categories: CostCategory[];
  sections: CostAccordionSection[];
  ctaLabel: string;
  backToHowItWorks: string;
}

export const costsData: Record<SupportedLang, CostsDataContent> = {
  en: {
    pageTitle: 'Costs, Estimates & Fees | Nuhavi Health',
    pageDescription: 'No surprises: clear breakdown of hospital charges, coordination fees, inclusions, and payment process.',
    eyebrow: 'Cost & Fee Transparency',
    title: 'Costs, estimates and our fee',
    deck: 'Clear financial expectations before you travel: understand how hospital charges are calculated, what coordination includes, and how payments are handled.',
    illustrativeNote: 'Illustrative breakdown of typical medical travel expenditure (actual proportions vary by procedure and length of stay)',
    categories: [
      {
        id: 'hospital-charges',
        name: 'Hospital charges',
        percent: '22%',
        width: '22%',
        color: '#14294B',
        desc: 'Room, nursing, operating theatre, intensive care if needed. Varies with length of stay and room category.',
      },
      {
        id: 'professional-fees',
        name: 'Professional fees',
        percent: '16%',
        width: '16%',
        color: '#0D1B33',
        desc: 'Surgeon, anaesthetist, and primary physician fees. Included in a package or listed separately.',
      },
      {
        id: 'investigations',
        name: 'Investigations',
        percent: '14%',
        width: '14%',
        color: '#5B6A80',
        desc: 'Pathology tests, CT, MRI, PET scans, and pre-anaesthesia clearance expected in India.',
      },
      {
        id: 'medicines-implants',
        name: 'Medicines & implants',
        percent: '20%',
        width: '20%',
        color: '#7B8CA3',
        desc: 'Chemotherapy and targeted drugs, or joint implants. A clear estimate specifies the assumed drug or implant.',
      },
      {
        id: 'rehab-followup',
        name: 'Rehabilitation & follow-up',
        percent: '10%',
        width: '10%',
        color: '#A3B3C8',
        desc: 'Physiotherapy, dressings, follow-up consults, and discharge medication.',
      },
      {
        id: 'travel-stay',
        name: 'Travel & stay',
        percent: '10%',
        width: '10%',
        color: '#CCD8E8',
        desc: 'Flights, accommodation near hospital, airport transfers, and local transit.',
      },
      {
        id: 'nuhavi-fee',
        name: 'Nuhavi coordination fee',
        percent: '8%',
        width: '8%',
        color: '#C49A3C',
        desc: 'Our coordination fee, agreed in writing before you commit. Covers case preparation, scheduling, and continuous support.',
      },
    ],
    sections: [
      {
        id: 'understanding-treatment-costs',
        number: '01',
        title: 'Understanding Treatment Costs',
        summary: 'How treatment bills are structured across medical, diagnostic, and travel expenses.',
        badge: '7-part model',
        paragraphs: [
          'A typical medical journey comprises clinical hospital fees, diagnostic evaluations, pharmaceuticals or implants, post-procedure recovery, and logistical travel. Below is the approved illustrative baseline model showing how total expenditures are typically distributed across a complete journey.',
        ],
        callout: {
          title: 'Illustrative Baseline Model (100% Total)',
          text: 'Percentages represent an illustrative distribution across average surgical and oncological cases. Exact proportions depend on your specific medical plan, hospital room selection, and recovery duration.',
          type: 'info',
        },
      },
      {
        id: 'hospital-charges-vs-nuhavi-fees',
        number: '02',
        title: 'Hospital Charges vs Nuhavi Fees',
        summary: 'Clear division between clinical healthcare costs and independent coordination services.',
        paragraphs: [
          'Nuhavi Health maintains complete commercial independence. We separate medical provider charges from coordination fees so you always know exactly who is being paid and for what purpose.',
        ],
        bullets: [
          {
            title: 'Hospital Charges (Direct Billing):',
            text: 'Covers operating theatres, room rent, intensive care, specialist surgical fees, diagnostic scans, and inpatient pharmacy. These are billed directly by the treating hospital and paid directly to the hospital billing desk.',
          },
          {
            title: 'Nuhavi Coordination Fee:',
            text: 'Covers preliminary records compilation, multi-hospital case review coordination, obtaining written estimates, visa invitation facilitation, and continuous multilingual coordinator assistance. Agreed in writing before travel.',
          },
        ],
        callout: {
          title: 'Zero Hospital Commission Guarantee',
          text: 'Nuhavi Health does not accept referral fees, markups, or hidden commissions from hospitals or treating doctors. Our priority remains strictly aligned with your care.',
          type: 'trust',
        },
      },
      {
        id: 'what-is-included',
        number: '03',
        title: 'What Is Included',
        summary: 'Comprehensive non-clinical coordination services covered under our written agreement.',
        paragraphs: [
          'Our coordination fee provides end-to-end administrative and logistical support throughout your healthcare travel experience:',
        ],
        bullets: [
          {
            title: 'Medical Records Verification:',
            text: 'Checking your medical reports for completeness and organizing scans for hospital specialist review.',
          },
          {
            title: 'Hospital Review Coordination:',
            text: 'Presenting your anonymised case history to qualified clinical teams at vetted partner hospitals.',
          },
          {
            title: 'Itemised Written Estimates:',
            text: 'Securing official, itemized hospital cost estimates and explaining clinical inclusions in plain language.',
          },
          {
            title: 'Visa & Logistics Facilitation:',
            text: 'Arranging the official medical visa invitation letter issued directly by the treating hospital.',
          },
          {
            title: 'Dedicated Language Coordinator:',
            text: 'A dedicated coordinator who speaks your language assisting you before departure, during hospital visits, and upon return.',
          },
          {
            title: 'Post-Discharge Follow-Up Support:',
            text: 'Facilitating discharge summary handovers and transmitting follow-up clinical questions to your hospital doctors.',
          },
        ],
      },
      {
        id: 'additional-expenses',
        number: '04',
        title: 'Additional Expenses',
        summary: 'Expenses paid directly to external service providers or determined by clinical necessity.',
        paragraphs: [
          'To ensure absolute transparency, the following items are not included in the coordination fee and are paid separately:',
        ],
        bullets: [
          {
            title: 'Flights & International Travel:',
            text: 'Airfare tickets for the patient and accompanying medical attendant, arranged and paid directly with airlines.',
          },
          {
            title: 'External Accommodation:',
            text: 'Guest house, serviced apartment, or hotel stays for accompanying attendants or during outpatient recovery days.',
          },
          {
            title: 'Unforeseen Clinical Investigations:',
            text: 'Specialized restaging tests or unexpected medical requirements that hospital doctors deem necessary following your physical examination.',
          },
          {
            title: 'Complications or Extended ICU Stays:',
            text: 'Any additional inpatient days, emergency intensive care, or specialized medication beyond the baseline hospital estimate.',
          },
        ],
      },
      {
        id: 'payment-process',
        number: '05',
        title: 'Payment Process',
        summary: 'Direct, traceable payments with official hospital receipts and zero intermediaries.',
        paragraphs: [
          'All financial transactions are conducted through verified, auditable channels:',
        ],
        bullets: [
          {
            title: '1. Upfront Written Agreement:',
            text: 'The scope of coordination and our coordination fee are confirmed in writing before you make any travel commitment.',
          },
          {
            title: '2. Direct Hospital Payments:',
            text: 'Hospital deposits and procedural bills are paid directly to the hospital cashier via international wire transfer, major credit cards, or foreign currency exchange.',
          },
          {
            title: '3. Official Receipts & Invoices:',
            text: 'Every payment made at the hospital is supported by an official itemized hospital invoice and tax receipt for your records.',
          },
        ],
        callout: {
          title: 'Direct Hospital Billing Standard',
          text: 'You never pay hospital treatment costs through Nuhavi. All clinical invoices are issued directly by the hospital and paid directly to their accounts department.',
          type: 'trust',
        },
      },
      {
        id: 'cost-estimates-disclaimer',
        number: '06',
        title: 'Cost Estimates & Disclaimer',
        summary: 'Understanding the difference between estimates and quotations, and legal disclaimers.',
        paragraphs: [
          'Medical treatments are highly individual. Here is how cost documentation works and what legal protections apply:',
        ],
        bullets: [
          {
            title: 'Preliminary Estimate:',
            text: 'Formulated from your diagnostic reports before an in-person physical examination. Used for financial planning and comparing hospital approaches.',
          },
          {
            title: 'Confirmed Quotation:',
            text: 'Finalized directly by the hospital clinical team after direct physical examination, restaging tests, and agreed surgical protocol.',
          },
        ],
        callout: {
          title: 'Mandatory Medical & Financial Disclaimer',
          text: 'Nuhavi Health is a medical travel coordinator, not a hospital or healthcare provider. We do not evaluate medical conditions, perform clinical procedures, or guarantee treatment outcomes or savings. Hospital charges are determined independently by treating hospitals based on your individual medical condition.',
          type: 'notice',
        },
      },
    ],
    ctaLabel: 'Request a medical opinion',
    backToHowItWorks: 'Back to How it works',
  },

  ru: {
    pageTitle: 'Стоимость, сметы и комиссии | Nuhavi Health',
    pageDescription: 'Полная прозрачность: подробная структура больничных счетов, координационного сбора, включенных услуг и порядка оплаты.',
    eyebrow: 'Прозрачность стоимости и расчетов',
    title: 'Стоимость лечения, сметы и комиссии',
    deck: 'Полная финансовая прозрачность до поездки: узнайте, как формируются медицинские сметы, что входит в координацию и как производятся расчеты с клиниками.',
    illustrativeNote: 'Примерная структура типичных расходов на медицинскую поездку (фактическое соотношение зависит от диагноза и типа палаты)',
    categories: [
      {
        id: 'hospital-charges',
        name: 'Больничные расходы',
        percent: '22%',
        width: '22%',
        color: '#14294B',
        desc: 'Палата, уход медсестер, операционная, реанимация при необходимости. Зависит от срока пребывания.',
      },
      {
        id: 'professional-fees',
        name: 'Гонорары врачей',
        percent: '16%',
        width: '16%',
        color: '#0D1B33',
        desc: 'Гонорары хирурга, анестезиолога и лечащих специалистов. Включаются в пакет или указываются отдельно.',
      },
      {
        id: 'investigations',
        name: 'Диагностика и анализы',
        percent: '14%',
        width: '14%',
        color: '#5B6A80',
        desc: 'Лабораторные анализы, КТ, МРТ, ПЭТ-КТ и предоперационные обследования в Индии.',
      },
      {
        id: 'medicines-implants',
        name: 'Медикаменты и импланты',
        percent: '20%',
        width: '20%',
        color: '#7B8CA3',
        desc: 'Химиотерапия, таргетные препараты или эндопротезы. В смете обязательно указывается тип препарата или протеза.',
      },
      {
        id: 'rehab-followup',
        name: 'Реабилитация и наблюдение',
        percent: '10%',
        width: '10%',
        color: '#A3B3C8',
        desc: 'Физиотерапия, перевязки, контрольные консультации и выписные медикаменты.',
      },
      {
        id: 'travel-stay',
        name: 'Перелет и проживание',
        percent: '10%',
        width: '10%',
        color: '#CCD8E8',
        desc: 'Авиабилеты, проживание около клиники, трансфер из аэропорта и местный транспорт.',
      },
      {
        id: 'nuhavi-fee',
        name: 'Комиссия Nuhavi',
        percent: '8%',
        width: '8%',
        color: '#C49A3C',
        desc: 'Стоимость координации, согласованная в договоре до поездки. Подготовка документов, запись и поддержка.',
      },
    ],
    sections: [
      {
        id: 'understanding-treatment-costs',
        number: '01',
        title: 'Understanding Treatment Costs',
        summary: 'Структура расходов: медицинские счета, обследования, медикаменты и логистика поездки.',
        badge: 'Модель из 7 частей',
        paragraphs: [
          'Медицинская поездка включает больничные счета, диагностику, медикаменты или импланты, реабилитацию и организацию переезда. Ниже представлена утвержденная ориентировочная модель распределения совокупных затрат.',
        ],
        callout: {
          title: 'Ориентировочная модель (100% в сумме)',
          text: 'Проценты отражают примерное распределение затрат по хирургическим и онкологическим программам. Точная смета зависит от выбранной клиники, протокола лечения и категории палаты.',
          type: 'info',
        },
      },
      {
        id: 'hospital-charges-vs-nuhavi-fees',
        number: '02',
        title: 'Hospital Charges vs Nuhavi Fees',
        summary: 'Четкое разграничение клинических расходов на лечение и независимых координационных услуг.',
        paragraphs: [
          'Nuhavi Health придерживается принципа полной коммерческой независимости. Мы разделяем медицинские платежи и координационный сбор, чтобы пациент точно знал назначение каждого платежа.',
        ],
        bullets: [
          {
            title: 'Счета клиники (Прямая оплата):',
            text: 'Оплата операционной, палаты, реанимации, гонораров хирургов, анализов и стационарных препаратов. Оплачивается напрямую в кассу клиники.',
          },
          {
            title: 'Координационный сбор Nuhavi:',
            text: 'Оплата сбора анамнеза, организации консилиумов в клиниках, получения официальных смет, оформления приглашений для визы и персонального сопровождения координатором.',
          },
        ],
        callout: {
          title: 'Гарантия отсутствия больничных комиссий',
          text: 'Nuhavi Health не принимает комиссионные вознаграждения, скрытые надбавки или проценты от больниц и врачей. Наша работа оплачивается только пациентом по письменному договору.',
          type: 'trust',
        },
      },
      {
        id: 'what-is-included',
        number: '03',
        title: 'What Is Included',
        summary: 'Полный комплекс организационной поддержки по официальному договору координации.',
        paragraphs: [
          'Координационный сбор покрывает полное неклиническое сопровождение вашей поездки:',
        ],
        bullets: [
          {
            title: 'Проверка медицинских документов:',
            text: 'Анализ полноты выписок и подготовка снимков для передачи профильным врачам клиники.',
          },
          {
            title: 'Организация медицинских заключений:',
            text: 'Направление документов в аккредитованные партнерские больницы для врачебной оценки.',
          },
          {
            title: 'Детализированные сметы:',
            text: 'Получение официальных смет клиник и разъяснение включенных процедур на вашем языке.',
          },
          {
            title: 'Визовое приглашение:',
            text: 'Оформление официального гарантийного письма от клиники для медицинской визы в Индию.',
          },
          {
            title: 'Русскоязычный координатор:',
            text: 'Персональный координатор на связи до отъезда, во время пребывания в Индии и после возвращения домой.',
          },
          {
            title: 'Постлечебное сопровождение:',
            text: 'Передача выписных эпикризов и координация контрольных вопросов с индийскими врачами.',
          },
        ],
      },
      {
        id: 'additional-expenses',
        number: '04',
        title: 'Additional Expenses',
        summary: 'Расходы, оплачиваемые напрямую поставщикам услуг или зависящие от клинической картины.',
        paragraphs: [
          'Для обеспечения абсолютной прозрачности следующие статьи расходов оплачиваются отдельно:',
        ],
        bullets: [
          {
            title: 'Авиаперелет:',
            text: 'Билеты для пациента и сопровождающего лица приобретаются напрямую в авиакомпаниях.',
          },
          {
            title: 'Проживание вне клиники:',
            text: 'Отели или апартаменты для сопровождающих лиц или в период амбулаторного наблюдения.',
          },
          {
            title: 'Дополнительные исследования:',
            text: 'Обследования, назначенные врачами клиники после очного осмотра при выявлении сопутствующих патологий.',
          },
          {
            title: 'Осложнения или продление реанимации:',
            text: 'Дни пребывания в ОРИТ или дополнительные медикаменты сверх базовой ориентировочной сметы.',
          },
        ],
      },
      {
        id: 'payment-process',
        number: '05',
        title: 'Payment Process',
        summary: 'Прямые платежи в клинику, официальные чеки и отсутствие посредников.',
        paragraphs: [
          'Все финансовые расчеты осуществляются прозрачно через официальные банковские каналы:',
        ],
        bullets: [
          {
            title: '1. Письменный договор:',
            text: 'Перечень координационных услуг и размер комиссии фиксируются в договоре до начала поездки.',
          },
          {
            title: '2. Прямой расчет с больницей:',
            text: 'Депозиты и оплата лечения вносятся в кассу клиники банковским переводом (SWIFT), картой или наличными в валюте.',
          },
          {
            title: '3. Официальные квитанции:',
            text: 'На каждый платеж в клинике выдается официальный финансовый инвойс с печатью учреждения.',
          },
        ],
        callout: {
          title: 'Стандарт прямых расчетов с клиникой',
          text: 'Пациент никогда не оплачивает медицинские счета через счета Nuhavi. Все медицинские расчеты производятся напрямую с клиникой.',
          type: 'trust',
        },
      },
      {
        id: 'cost-estimates-disclaimer',
        number: '06',
        title: 'Cost Estimates & Disclaimer',
        summary: 'Разница между предварительной оценкой и окончательной сметой, юридические гарантии.',
        paragraphs: [
          'Каждый клинический случай индивидуален. Ниже изложены правила формирования смет и правовые оговорки:',
        ],
        bullets: [
          {
            title: 'Предварительная оценка (Estimate):',
            text: 'Составляется на основе выписок до очного осмотра. Служит ориентиром для планирования бюджета.',
          },
          {
            title: 'Окончательная смета (Confirmed Quotation):',
            text: 'Утверждается клиникой после очного осмотра, контрольных тестов и утверждения протокола операции.',
          },
        ],
        callout: {
          title: 'Отказ от медицинских и финансовых гарантий',
          text: 'Nuhavi Health является службой координации медицинских поездок и не является клиникой. Мы не оказываем медицинских услуг, не ставим диагнозов и не гарантируем конкретные исходы лечения или размер экономии. Окончательная стоимость лечения определяется клиникой на основании фактического состояния здоровья пациента.',
          type: 'notice',
        },
      },
    ],
    ctaLabel: 'Запросить медицинское заключение',
    backToHowItWorks: 'Назад к разделу «Как это работает»',
  },

  ar: {
    pageTitle: 'التكاليف والتقديرات والأتعاب | نوهـافي هيلث',
    pageDescription: 'وضوح مالي تام: تفاصيل تكاليف المستشفى، وأتعاب التنسيق، والبنود المشمولة، وآلية الدفع المباشر.',
    eyebrow: 'الشفافية المالية والتكاليف',
    title: 'تكاليف العلاج، التقديرات، والرسوم',
    deck: 'وضوح مالي كامل قبل السفر: تعرف على كيفية احتساب تكاليف المستشفى، وما تشمله أتعاب التنسيق، وضوابط الدفع المباشر.',
    illustrativeNote: 'رسم توضيحي لمتوسط بنود الإنفاق في رحلة العلاج الطبي (تختلف النسب الفعلية بحسب نوع الإجراء وفئة الغرفة)',
    categories: [
      {
        id: 'hospital-charges',
        name: 'رسوم المستشفى والإقامة',
        percent: '22%',
        width: '22%',
        color: '#14294B',
        desc: 'الغرفة، الرعاية التمريضية، غرفة العمليات، والعناية المركزة إذا لزم الأمر. تتفاوت حسب مدة الإقامة.',
      },
      {
        id: 'professional-fees',
        name: 'أتعاب الأطباء والاستشاريين',
        percent: '16%',
        width: '16%',
        color: '#0D1B33',
        desc: 'أتعاب الجراح وطبيب التخدير والاستشاريين المعالجين. تكون مشمولة في باقة العلاج أو مفصلة على حدة.',
      },
      {
        id: 'investigations',
        name: 'الفحوصات والأشعة التشخيصية',
        percent: '14%',
        width: '14%',
        color: '#5B6A80',
        desc: 'فحوصات المختبر، والأشعة المقطعية، والرنين المغناطيسي، وفحص PET في الهند.',
      },
      {
        id: 'medicines-implants',
        name: 'الأدوية والغرسات الطبية',
        percent: '20%',
        width: '20%',
        color: '#7B8CA3',
        desc: 'العلاج الكيميائي والأدوية الموجهة، أو دعامات ومفاصل العظام. يحدد التقدير نوع الدواء أو المفصل.',
      },
      {
        id: 'rehab-followup',
        name: 'التأهيل واستشارات المتابعة',
        percent: '10%',
        width: '10%',
        color: '#A3B3C8',
        desc: 'العلاج الطبيعي، وتغيير الضمادات، واستشارات المتابعة الدورية، وأدوية الخروج.',
      },
      {
        id: 'travel-stay',
        name: 'السفر والإقامة للمرافقين',
        percent: '10%',
        width: '10%',
        color: '#CCD8E8',
        desc: 'تذاكر الطيران، الفنادق أو الشقق قرب المستشفى، النقل المحلي والتنقل.',
      },
      {
        id: 'nuhavi-fee',
        name: 'أتعاب تنسيق نوهـافي',
        percent: '8%',
        width: '8%',
        color: '#C49A3C',
        desc: 'أتعاب التنسيق المتفق عليها كتابياً قبل السفر. تشمل دراسة الملف، والمواعيد، والمتابعة المستمرة.',
      },
    ],
    sections: [
      {
        id: 'understanding-treatment-costs',
        number: '01',
        title: 'Understanding Treatment Costs',
        summary: 'كيفية توزيع بنود الفاتورة بين الرعاية السريرية، والفحوصات، والإقامة، والخدمات اللوجستية.',
        badge: 'نموذج من 7 أجزاء',
        paragraphs: [
          'تتوزع نفقات الرحلة العلاجية النموذجية بين رسوم المستشفى، والفحوصات المخبرية والإشعاعية، والأدوية والغرسات، وفترة التأهيل، ومصاريف السفر. يوضح النموذج المعتمد أدناه كيفية توزيع هذه النفقات بشكل توضيحي شامل.',
        ],
        callout: {
          title: 'النموذج التوضيحي المعتمد (إجمالي 100%)',
          text: 'تمثل هذه النسب توزيعاً توضيحياً لحالات الجراحة والأورام الشائعة، وتعتمد التكلفة الفعلية على التشخيص الدقيق، ونوع الغرفة، وفترة الإقامة المقررة من قِبل المستشفى.',
          type: 'info',
        },
      },
      {
        id: 'hospital-charges-vs-nuhavi-fees',
        number: '02',
        title: 'Hospital Charges vs Nuhavi Fees',
        summary: 'فصل واضح ومستقل بين فواتير الرعاية الطبية في المستشفى وأتعاب التنسيق الإداري.',
        paragraphs: [
          'تلتزم نوهـافي هيلث بالاستقلالية التجارية التامة. نحن نفصل تماماً بين رسوم المستشفى العلاجية وأتعاب التنسيق حتى يكون المريض على دراية دقيقة بكل مبلغ يدفعه ولمن يذهب.',
        ],
        bullets: [
          {
            title: 'تكاليف المستشفى (دفع مباشر للمستشفى):',
            text: 'تشمل غرف العمليات، والإقامة، والعناية المركزة، وأتعاب الجراحين، والفحوصات والأدوية داخل المستشفى. تُدفع جميعها مباشرة لقسم الحسابات بالمستشفى المعالج.',
          },
          {
            title: 'أتعاب تنسيق نوهـافي:',
            text: 'تغطي تدقيق التقارير الطبية، وتنسيق تقييم الحالة مع استشاريي المستشفيات، وتوفير التقديرات المالية، وتسهيل دعوة الفيزا الطبية، والمرافقة المستمرة بمنسق يتحدث لغتك.',
          },
        ],
        callout: {
          title: 'ضمان عدم تلقي عمولات من المستشفيات',
          text: 'لا تقبل نوهـافي هيلث أي عمولات، أو نسب وساطة، أو أرباح تسويقية من المستشفيات أو الأطباء. مصلحتك الصحية هي محور التزامنا الوحيد.',
          type: 'trust',
        },
      },
      {
        id: 'what-is-included',
        number: '03',
        title: 'What Is Included',
        summary: 'منظومة الدعم الإداري واللوجستي المتكاملة المغطاة ضمن اتفاق التنسيق المكتوب.',
        paragraphs: [
          'تغطي أتعاب التنسيق الخدمات غير السريرية التالية طوال فترة رحلتك العلاجية:',
        ],
        bullets: [
          {
            title: 'تدقيق واكتمال التقارير الطبية:',
            text: 'مراجعة التقارير التشخيصية والصور الإشعاعية والتأكد من جاهزيتها للعرض على الأطباء الاستشاريين.',
          },
          {
            title: 'تنسيق التقييم الطبي مع المستشفيات:',
            text: 'عرض ملف المريض على استشاريي المستشفيات المعتمدة للحصول على الرأي الطبي المبدئي وخيارات العلاج.',
          },
          {
            title: 'توفير وتوضيح التقديرات المالية المكتوبة:',
            text: 'استلام التقديرات الرسمية المكتوبة من المستشفى وشرح البنود الطبية والمالية بلغة واضحة.',
          },
          {
            title: 'تسهيل خطاب الدعوة للتأشيرة الطبية:',
            text: 'استخراج وتنسيق خطاب الدعوة الرسمي الصادر مباشرة من المستشفى المعالج لطلب التأشيرة الطبية.',
          },
          {
            title: 'منسق رعاية مخصص يتحدث لغتك:',
            text: 'منسق يتواصل معك قبل السفر، وأثناء تواجدك في الهند، وبعد العودة إلى وطنك.',
          },
          {
            title: 'متابعة ما بعد الخروج من المستشفى:',
            text: 'المساعدة في تسليم تقارير الخروج وترجمة أي استفسارات موجهة للطبيب المعالج بعد عودتك.',
          },
        ],
      },
      {
        id: 'additional-expenses',
        number: '04',
        title: 'Additional Expenses',
        summary: 'النفقات التي تُدفع مباشرة لمزودي الخدمات الخارجيين أو التي تفرضها الضرورة الطبية.',
        paragraphs: [
          'لضمان الشفافية المطلقة، البنود التالية لا تشملها أتعاب التنسيق وتُدفع بشكل مستقل:',
        ],
        bullets: [
          {
            title: 'تذاكر الطيران الدولي والمحلي:',
            text: 'تذاكر السفر للمريض والمرافق وتُدفع مباشرة لشركات الطيران.',
          },
          {
            title: 'الإقامة الخارجية للمرافقين:',
            text: 'الفنادق أو الشقق الفندقية للمرافقين أو أثناء فترات المراجعة في العيادات الخارجية.',
          },
          {
            title: 'الفحوصات الطبية غير المتوقعة:',
            text: 'أي فحوصات تشخيصية إضافية يطلبها الأطباء بعد الفحص السريري المباشر بالمستشفى.',
          },
          {
            title: 'مضاعفات العلاج أو تمديد العناية المركزة:',
            text: 'أي فترات إقامة إضافية في العناية المركزة أو أدوية تخصصية تتجاوز التقدير المبدئي للمستشفى.',
          },
        ],
      },
      {
        id: 'payment-process',
        number: '05',
        title: 'Payment Process',
        summary: 'دفع مباشر للمستشفى، وفواتير رسمية موثقة دون أي وسطاء ماليين.',
        paragraphs: [
          'تتم جميع المعاملات المالية عبر قنوات مصرفية موثوقة ونظامية:',
        ],
        bullets: [
          {
            title: '1. اتفاق مكتوب مسبق:',
            text: 'يتم الاتفاق على نطاق خدمات التنسيق وقيمة أتعاب التنسيق كتابياً قبل الالتزام بالسفر.',
          },
          {
            title: '2. الدفع المباشر في المستشفى:',
            text: 'تُسدد فواتير العلاج مباشرة في قسم الحسابات بالمستشفى عبر التحويل البنكي الدولي، أو البطاقات الائتمانية، أو العملات الأجنبية المعتمدة.',
          },
          {
            title: '3. فواتير وإيصالات رسمية:',
            text: 'يحصل المريض على فواتير مفصلة وإيصالات ضريبية رسمية ومختومة من المستشفى عن كل دفعة.',
          },
        ],
        callout: {
          title: 'معيار الدفع المباشر للمستشفى',
          text: 'لا يقوم المريض إطلاقاً بدفع تكاليف العلاج الطبي عبر حسابات نوهـافي. تصدر كافة الفواتير الطبية مباشرة من المستشفى وتُدفع إليه حصراً.',
          type: 'trust',
        },
      },
      {
        id: 'cost-estimates-disclaimer',
        number: '06',
        title: 'Cost Estimates & Disclaimer',
        summary: 'الفرق بين التقدير المبدئي وعرض السعر النهائي، والمسؤوليات القانونية.',
        paragraphs: [
          'يختلف مسار العلاج من مريض لآخر بحسب الاستجابة السريرية. فيما يلي قواعد التعامل مع التقديرات المالية:',
        ],
        bullets: [
          {
            title: 'التقدير المالي المبدئي (Preliminary Estimate):',
            text: 'يصدر بناءً على التقارير السابقة قبل الفحص المباشر، ويُستخدم للتخطيط المالي والمقارنة بين خيارات المستشفيات.',
          },
          {
            title: 'عرض السعر النهائي المؤكد (Confirmed Quotation):',
            text: 'يصدره المستشفى بعد إجراء الفحص السريري المباشر، وتأكيد التحاليل، واعتماد الجراح للخطة العلاجية النهائية.',
          },
        ],
        callout: {
          title: 'تنويه قانوني وطبي إلزامي',
          text: 'نوهـافي هيلث هي خدمة تنسيق سفر طبي وليست مستشفى أو جهة علاجية. نحن لا نقوم بالتشخيص الطبي أو تقديم العلاج، ولا نعد بنتائج علاجية محددة أو وفورات مالية مضمونة. تخضع الفواتير الطبية النهائية لقرارات المستشفيات المعالجة المستقلة وفقاً للحالة الصحية الفعلية للمريض.',
          type: 'notice',
        },
      },
    ],
    ctaLabel: 'طلب رأي طبي',
    backToHowItWorks: 'العودة إلى كيف نعمل',
  },
  fr: {
    pageTitle: 'Comprendre les coûts et frais hospitaliers en Inde | Nuhavi Health',
    pageDescription: 'Structure transparente des coûts médicaux, décomposition des forfaits hospitaliers et honoraires de coordination en Inde.',
    eyebrow: 'Transparence financière',
    title: 'Comprendre la structure d’une facture de soins',
    deck: 'Les coûts médicaux sont divisés en éléments distincts. Nuhavi veille à ce que chaque estimation hospitalière détaille exactement ce qui est inclus et ce qui peut faire l’objet d’une facturation séparée.',
    illustrativeNote: 'Répartition moyenne indicative basée sur les données d’hospitalisation en Inde.',
    categories: [
      { id: '1', name: 'Actes chirurgicaux et honoraires', percent: '22%', width: '22%', color: '#0F2340' },
      { id: '2', name: 'Séjour en chambre d’hospitalisation', percent: '16%', width: '16%', color: '#1A375E' },
      { id: '3', name: 'Surveillance en soins intensifs (USI)', percent: '14%', width: '14%', color: '#2B4C7E' },
      { id: '4', name: 'Implants et dispositifs médicaux', percent: '20%', width: '20%', color: '#A88B5A' },
      { id: '5', name: 'Examens d’imagerie et biologie', percent: '10%', width: '10%', color: '#C49A3C' },
      { id: '6', name: 'Pharmacie et consommables', percent: '10%', width: '10%', color: '#64748B' },
      { id: '7', name: 'Coordination et logistique', percent: '8%', width: '8%', color: '#94A3B8' },
    ],
    sections: [
      {
        id: 'understanding',
        number: '01',
        title: 'Comprendre la composition d’un devis hospitalier',
        summary: 'Comment les hôpitaux en Inde décomposent les actes médicaux, le séjour et les implants certifiés.',
        badge: 'Transparence totale',
        paragraphs: [
          'Un devis hospitalier sérieux ne se résume pas à un montant global. Il détaille précisément les honoraires opératoires, la catégorie de chambre, les examens diagnostiques pré-opératoires et les consommables chirurgicaux.'
        ],
        callout: {
          title: 'Facturation hospitalière directe',
          text: 'Tous les frais médicaux et chirurgicaux sont réglés directement à l’hôpital accrédité. Nuhavi ne perçoit aucune commission d’apporteur d’affaires.',
          type: 'trust'
        }
      },
      {
        id: 'comparison',
        number: '02',
        title: 'Estimation préliminaire vs Devis confirmé',
        summary: 'La différence essentielle entre une estimation sur dossier et le devis hospitalier définitif.',
        badge: 'Distinction clé',
        paragraphs: [
          'Une estimation préliminaire est établie à distance sur la base des comptes-rendus scannés. Le devis définitif est confirmé par l’équipe chirurgicale après les consultations et examens cliniques réalisés sur place.'
        ]
      }
    ],
    ctaLabel: 'Demander un devis comparatif',
    backToHowItWorks: 'Retour aux explications',
  },
};
