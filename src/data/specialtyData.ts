/**
 * src/data/specialtyData.ts
 * Centralized, verified clinical coordination data for Nuhavi Health's 10 approved specialties.
 *
 * Specialties Taxonomy (Approved in Phase 2B.2 & Phase 2B.3):
 * Accepting enquiries (2):
 *   1. Cancer care (Oncology) — id: cancer-care, slug: oncology
 *   2. Orthopaedics and joint replacement — id: orthopaedics, slug: orthopaedics
 * On request (8):
 *   3. Cardiac sciences — id: cardiac-sciences, slug: cardiac-sciences
 *   4. Neurosciences — id: neurosciences, slug: neurosciences
 *   5. Organ transplants — id: organ-transplants, slug: organ-transplants
 *   6. Spine surgery — id: spine-surgery, slug: spine-surgery
 *   7. Gastroenterology and GI surgery — id: gastroenterology, slug: gastroenterology
 *   8. Nephrology and urology — id: nephrology-urology, slug: nephrology-urology
 *   9. Fertility and IVF — id: fertility, slug: fertility
 *   10. Ophthalmology — id: ophthalmology, slug: ophthalmology
 *
 * Strict Medical & Coordination Rules:
 * - Nuhavi coordinates care; hospitals independently examine, diagnose, decide, and treat.
 * - Zero invented clinical claims, fake doctors, hospitals, prices, or guaranteed outcomes.
 * - India legal framework strictly documented for living-donor transplants (THOTA) and fertility (ART Act).
 * - Clear clinical-review-pending notice where detailed clinical review is pending.
 */

import type { SupportedLang } from '../i18n/translations';

export interface ConditionItem {
  title: string;
  description: string;
}

export interface RecordsGuidance {
  intro: string;
  items: string[];
  disclaimer: string;
}

export interface SpecialtyLocaleContent {
  title: string;
  secondaryLabel: string;
  description: string;
  statusLabel: string;
  metaTitle: string;
  metaDescription: string;
  whatThisCovers: string[];
  scopeDisclaimer?: string;
  conditions: ConditionItem[];
  recordsGuidance: RecordsGuidance;
}

export interface SpecialtyImage {
  src: string;
  alt: Record<SupportedLang, string>;
}

export interface SpecialtyDefinition {
  id: string;
  slug: string;
  status: 'accepting' | 'on-request';
  image: SpecialtyImage;
  content: Record<SupportedLang, SpecialtyLocaleContent>;
}

export const specialtiesList: SpecialtyDefinition[] = [
  // 1. Cancer care (Oncology)
  {
    id: 'cancer-care',
    slug: 'oncology',
    status: 'accepting',
    image: {
      src: '/images/treatment-oncology.jpg',
      alt: {
        en: 'Advanced radiation oncology linear accelerator and precision cancer therapy suite',
        ru: 'Высокотехнологичный комплекс лучевой терапии и онкологическое оборудование',
        ar: 'مجمع علاج الأورام الإشعاعي المتطور وتقنيات الفحص الدقيق للأورام',
      },
    },
    content: {
      en: {
        title: 'Cancer care (oncology)',
        secondaryLabel: 'Oncology',
        description: 'Diagnosis review, surgery, chemotherapy, radiotherapy and newer therapies.',
        statusLabel: 'Accepting enquiries',
        metaTitle: 'Cancer Care (Oncology) | Treatments | Nuhavi Health',
        metaDescription: 'Cancer treatment depends on the exact type of cancer, its stage and your overall health. Records review and coordination with trusted hospital oncology teams in India.',
        whatThisCovers: [
          'Medical oncology (chemotherapy, targeted and hormonal therapy)',
          'Surgical oncology (tumour resection and reconstructive surgery)',
          'Radiation oncology (advanced linear accelerators and brachytherapy)',
          'Haemato-oncology and bone marrow / stem cell transplantation',
          'Multidisciplinary tumour board evaluations before travel',
        ],
        scopeDisclaimer: 'Cellular therapies such as CAR-T are listed only when a verified provider offers them for your condition. Not every treatment is suitable for every patient; your treating team decides.',
        conditions: [
          { title: 'Breast cancer', description: 'Comprehensive surgical, systemic, and radiation treatment protocols tailored to tumour biology.' },
          { title: 'Gastrointestinal and colorectal cancers', description: 'Multimodal therapy for tumours of the oesophagus, stomach, liver, pancreas, and bowel.' },
          { title: 'Lung cancer', description: 'Staging, molecular profiling, targeted therapy, and thoracic surgical coordination.' },
          { title: 'Head and neck cancers', description: 'Specialized resection, organ-preserving radiotherapy, and microvascular reconstruction.' },
          { title: 'Gynaecological cancers', description: 'Care for ovarian, cervical, and uterine malignancies by dedicated gynaecological oncologists.' },
          { title: 'Urological cancers', description: 'Prostate, bladder, and renal cell cancer management including minimally invasive options.' },
          { title: 'Blood cancers & haematology', description: 'Leukaemia, lymphoma, and myeloma protocols including stem-cell transplant evaluation.' },
        ],
        recordsGuidance: {
          intro: 'Complete diagnostic records allow the hospital oncology team to perform an accurate preliminary clinical evaluation.',
          items: [
            'Biopsy or histopathology report (mandatory for diagnosis confirmation)',
            'Immunohistochemistry (IHC) or genetic profiling reports, if performed',
            'Recent imaging reports (CT, MRI, or PET-CT scan reports from the last 6 to 8 weeks)',
            'Original scan DICOM images (disc or secure cloud download link)',
            'Recent complete blood counts, renal, and liver function panels',
            'Summary of prior chemotherapy regimens, radiation doses, or surgical notes with dates',
          ],
          disclaimer: 'The hospital treating team will review your records and confirm if additional restaging investigations are necessary upon arrival.',
        },
      },
      ru: {
        title: 'Онкология',
        secondaryLabel: 'Лечение рака',
        description: 'Экспертиза диагноза, хирургия, химиотерапия, лучевая терапия и современные методы лечения.',
        statusLabel: 'Прием обращений открыт',
        metaTitle: 'Онкология | Направления лечения | Nuhavi Health',
        metaDescription: 'Лечение онкологических заболеваний в клиниках Индии: проверка диагноза, мультидисциплинарные консилиумы и прозрачная координация поездки.',
        whatThisCovers: [
          'Химиотерапия, таргетная и иммунотерапия по международным протоколам',
          'Онкохирургия и органосохраняющие операции',
          'Высокоточная лучевая терапия и радиохирургия',
          'Гематоонкология и трансплантация костного мозга',
          'Мультидисциплинарный онкологический консилиум (Tumor Board)',
        ],
        scopeDisclaimer: 'Клеточные методы лечения (включая CAR-T) рассматриваются только при наличии подтвержденной клинической целесообразности. Выбор протокола определяет лечащий врач клиники.',
        conditions: [
          { title: 'Рак молочной железы', description: 'Комплексное хирургическое, системное и лучевое лечение.' },
          { title: 'Опухоли ЖКТ и брюшной полости', description: 'Лечение новообразований пищевода, желудка, печени, поджелудочной железы и кишечника.' },
          { title: 'Рак легких', description: 'Молекулярно-генетическое профилирование, таргетная терапия и торакальная хирургия.' },
          { title: 'Опухоли головы и шеи', description: 'Органосохраняющие протоколы и микрохирургическая реконструкция.' },
          { title: 'Гинекологическая онкология', description: 'Лечение рака шейки матки, тела матки и яичников.' },
          { title: 'Онкоурология', description: 'Лечение рака предстательной железы, мочевого пузыря и почек.' },
          { title: 'Опухоли кроветворной системы', description: 'Терапия лейкозов, лимфом и множественной миеломы.' },
        ],
        recordsGuidance: {
          intro: 'Полный пакет медицинских документов позволяет клинической команде составить точное предварительное заключение.',
          items: [
            'Гистологическое заключение и результаты биопсии (обязательно)',
            'Иммуногистохимическое исследование (ИГХ) и молекулярные маркеры при наличии',
            'Заключения КТ, МРТ или ПЭТ-КТ давностью не более 6–8 недель',
            'Оригинальные снимки исследований в формате DICOM (диск или ссылка)',
            'Свежие развернутые анализы крови, коагулограмма и биохимия',
            'Выписка с историей проведенного лечения, датами и дозировками препаратов',
          ],
          disclaimer: 'Лечащие врачи партнерской клиники изучат документы и сообщат, требуются ли повторные обследования на месте.',
        },
      },
      ar: {
        title: 'علاج وأورام السرطان',
        secondaryLabel: 'الأورام',
        description: 'تدقيق التشخيص، والجراحة، والعلاج الكيميائي، والعلاج الإشعاعي، والبروتوكولات الحديثة.',
        statusLabel: 'استقبال الطلبات متاح',
        metaTitle: 'علاج وأورام السرطان | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق علاج الأورام والسرطان مع مستشفيات الهند المعتمدة: مراجعة التقارير الطبية، وتقييم اللجان المتخصصة، وترتيبات السفر العلاجي.',
        whatThisCovers: [
          'علاج الأورام الدوائي (العلاج الكيميائي، الموجه، والهرموني)',
          'الجراحة الدقيقة للأورام والعمليات الترميمية',
          'العلاج الإشعاعي المتقدم بالأجهزة الحديثة',
          'أمراض الدم وزراعة نخاع العظم والخلايا الجذعية',
          'تقييم الحالة عبر لجان أورام متعددة التخصصات (Tumor Board)',
        ],
        scopeDisclaimer: 'العلاجات الخلوية المتقدمة (مثل CAR-T) تخضع لمطابقة المعايير الطبية الصارمة وتوفرها لدى المستشفى المعالج، والقرار الطبي يعود بالكامل للفريق الطبي المعالج.',
        conditions: [
          { title: 'سرطان الثدي', description: 'بروتوكولات علاجية متكاملة تشمل الجراحة والعلاج الكيميائي والإشعاعي.' },
          { title: 'أورام الجهاز الهضمي والقولون', description: 'علاج أورام المريء والمعدة والكبد والبنكرياس والأمعاء.' },
          { title: 'أورام الرئة والجهاز التنفسي', description: 'التصنيف الجزيئي، والعلاج الموجه، وجراحة الصدر المتخصصة.' },
          { title: 'أورام الرأس والرقبة', description: 'استئصال الأورام مع المحافظة على الوظائف الحيوية والترميم المجهري.' },
          { title: 'الأورام النسائية', description: 'علاج سرطانات عنق الرحم والرحم والمبيضين بإشراف أطباء متخصصين.' },
          { title: 'أورام المسالك البولية', description: 'علاج سرطانات البروستاتا والمثانة والكلى بالتقنيات المتقدمة.' },
          { title: 'سرطانات الدم والغدد اللمفاوية', description: 'بروتوكولات علاج اللوكيميا والليمفوما وتقييم زراعة النخاع.' },
        ],
        recordsGuidance: {
          intro: 'يساعد اكتمال التقارير الطبية الأطباء في المستشفى على تقديم تقييم مبدئي دقيق وخطة علاجية واضحة.',
          items: [
            'تقرير الخزعة وفحص الأنسجة (Histopathology) وهو أساسي لتأكيد التشخيص',
            'تقرير الفحص المناعي الكيميائي (IHC) والجينات إن وجد',
            'تقارير الأشعة المقطعية (CT) أو الرنين (MRI) أو المسح البوزيتروني (PET-CT) خلال 6-8 أسابيع',
            'الصور الإشعاعية بصيغة DICOM (قرص مدمج أو رابط سحابي آمن)',
            'تحاليل الدم الشاملة ووظائف الكبد والكلى الحديثة',
            'ملخص طبي شامل بالعلاجات السابقة وتواريخ الجرعات أو العمليات',
          ],
          disclaimer: 'يقوم الفريق الطبي في المستشفى المعالج بمراجعة ملفك وإخبارك بما إذا كانت هناك فحوصات إضافية مطلوبة عند وصولك.',
        },
      },
    },
  },

  // 2. Orthopaedics and joint replacement
  {
    id: 'orthopaedics',
    slug: 'orthopaedics',
    status: 'accepting',
    image: {
      src: '/images/treatment-orthopaedics.jpg',
      alt: {
        en: 'Post-operative radiograph of total knee joint replacement showing femoral and tibial prostheses',
        ru: 'Рентгенограмма тотального эндопротезирования коленного сустава с компонентами протеза',
        ar: 'صورة شعاعية لعملية استبدال مفصل الركبة بالكامل تُظهر مكونات المفصل الاصطناعي',
      },
    },
    content: {
      en: {
        title: 'Orthopaedics and joint replacement',
        secondaryLabel: 'Joint replacement',
        description: 'Knee and hip replacement, arthroscopy, and complex joint reconstruction.',
        statusLabel: 'Accepting enquiries',
        metaTitle: 'Orthopaedics & Joint Replacement | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for primary and revision joint replacement, arthroscopic surgery, and musculoskeletal care with accredited orthopaedic hospitals in India.',
        whatThisCovers: [
          'Primary total knee and hip replacement',
          'Partial (unicompartmental) knee resurfacing',
          'Complex revision joint surgery for failed or worn implants',
          'Arthroscopic knee, shoulder, and ankle procedures (ligament repair, meniscal repair)',
          'Post-operative inpatient rehabilitation planning and mobility protocols',
        ],
        scopeDisclaimer: 'Joint preservation is prioritised where clinically viable. Implants and surgical techniques are determined independently by your hospital orthopaedic surgeon.',
        conditions: [
          { title: 'Advanced knee osteoarthritis', description: 'Severe joint degeneration, alignment correction, and robotic or conventional joint replacement.' },
          { title: 'Hip arthritis and avascular necrosis (AVN)', description: 'Hip preservation options and primary total hip arthroplasty with high-performance ceramic or metal interfaces.' },
          { title: 'Complex revision joint cases', description: 'Management of loosened, painful, or mechanically compromised previous joint prostheses.' },
          { title: 'Sports and ligament injuries', description: 'Arthroscopic anterior cruciate ligament (ACL) reconstruction, rotator cuff repair, and cartilage restoration.' },
          { title: 'Shoulder and elbow arthritis', description: 'Reverse and total shoulder arthroplasty, and reconstructive joint procedures.' },
        ],
        recordsGuidance: {
          intro: 'Providing weight-bearing radiographs and clinical mobility notes enables the orthopaedic team to assess joint geometry and recommend appropriate procedures.',
          items: [
            'Recent weight-bearing X-rays of the affected joint (AP, lateral, and skyline views)',
            'MRI scan reports and images if soft tissue or cartilage damage is suspected',
            'Clinical notes detailing mobility limitations, walking distance, and pain levels',
            'Prior surgical operative notes and implant stickers if you have had previous joint surgery',
            'Recent blood test results and cardiovascular medical fitness clearance',
          ],
          disclaimer: 'The treating orthopaedic team will conduct in-person physical examinations and range-of-motion assessments upon admission.',
        },
      },
      ru: {
        title: 'Ортопедия и замена суставов',
        secondaryLabel: 'Эндопротезирование',
        description: 'Эндопротезирование коленного и тазобедренного суставов, артроскопия и реконструкция.',
        statusLabel: 'Прием обращений открыт',
        metaTitle: 'Ортопедия и замена суставов | Направления лечения | Nuhavi Health',
        metaDescription: 'Организация эндопротезирования суставов, артроскопических операций и реабилитации в специализированных ортопедических клиниках Индии.',
        whatThisCovers: [
          'Первичное тотальное эндопротезирование коленного и тазобедренного суставов',
          'Одномыщелковое (частичное) протезирование колена',
          'Сложные ревизионные операции при износе или нестабильности протезов',
          'Артроскопическая хирургия суставов (пластика ПКС, резекция мениска)',
          'Программы ранней послеоперационной мобилизации и реабилитации',
        ],
        scopeDisclaimer: 'При наличии показаний предпочтение отдается органосохраняющим методикам. Тип эндопротеза подбирается хирургом индивидуально.',
        conditions: [
          { title: 'Деформирующий остеоартроз коленного сустава', description: 'Прогрессирующий гонартроз 3-4 стадии, деформации оси конечности.' },
          { title: 'Коксартроз и асептический некроз головки бедренной кости (АНГБК)', description: 'Сохраняющие операции и эндопротезирование с керамическими парами трения.' },
          { title: 'Ревизионное протезирование', description: 'Замена компонентов эндопротеза при расшатывании или осложнениях.' },
          { title: 'Спортивные травмы и разрывы связок', description: 'Артроскопическая пластика связочного аппарата колена и плеча.' },
        ],
        recordsGuidance: {
          intro: 'Рентгеновские снимки под нагрузкой позволяют хирургам оценить степень сужения суставной щели и деформации.',
          items: [
            'Свежие рентгенограммы сустава под нагрузкой в двух проекциях',
            'Заключение и снимки МРТ при повреждениях мягких тканей и связок',
            'Выписки из истории болезни с описанием объема движений и характера болей',
            'Паспорт эндопротеза и протоколы предыдущих операций (при ревизионных случаях)',
            'Общие анализы крови и заключения терапевта о сопутствующих заболеваниях',
          ],
          disclaimer: 'Окончательное решение о типе имплантата принимается хирургом после очного осмотра и функциональных тестов.',
        },
      },
      ar: {
        title: 'طب وجراحة العظام والمفاصل',
        secondaryLabel: 'استبدال المفاصل',
        description: 'استبدال مفصل الركبة والورك، وتنظير المفاصل، والجراحات الترميمية المعقدة للمفاصل.',
        statusLabel: 'استقبال الطلبات متاح',
        metaTitle: 'طب وجراحة العظام والمفاصل | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق عمليات استبدال مفصل الركبة والورك وجراحة العظام الدقيقة في أفضل مستشفيات الهند المعتمدة مع رعاية تأهيلية متكاملة.',
        whatThisCovers: [
          'عمليات الاستبدال الكامل لمفصل الركبة والورك',
          'الاستبدال الجزئي لمفصل الركبة للحالات المناسبة',
          'جراحات المراجعة والتبديل المعقدة للمفاصل السابقة',
          'جراحات التنظير المفصلي (ترميم الرباط الصليبي والغضاريف)',
          'برامج التأهيل الحركي المبكر بعد الجراحة داخل المستشفى',
        ],
        scopeDisclaimer: 'تُعطى الأولوية للمحافظة على المفصل الطبيعي متى ما كان ذلك ملائماً سريرياً. يحدد الجراح الاستشاري نوع المفصل الصناعي والتقنية الجراحية المناسبة.',
        conditions: [
          { title: 'خشونة واحتكاك مفصل الركبة المتقدم', description: 'تآكل الغضاريف المفصلية، وتصحيح انحراف الساقين، واستبدال المفصل بالتقنيات الحديثة.' },
          { title: 'تآكل مفصل الورك ونخر رأس الفخذ (AVN)', description: 'خيارات المحافظة على رأس الفخذ وعمليات الاستبدال الكامل بأفضل المفاصل المعتمدة عالمياً.' },
          { title: 'عمليات تبديل المفاصل الصناعية السابقة', description: 'علاج ارتخاء أو تآكل المفاصل الصناعية القديمة واستبدالها بمفاصل مراجعة متطورة.' },
          { title: 'إصابات الملاعب والأربطة', description: 'إعادة بناء الرباط الصليبي الأمامي للركبة بالمنظار وعلاج أوتار الكتف.' },
        ],
        recordsGuidance: {
          intro: 'تتيح الأشعة السينية أثناء الوقوف للفريق الطبي تقييم زوايا المفصل ومقدار التآكل بدقة قبل السفر.',
          items: [
            'أشعة سينية حديثة للمفصل المصاب في وضعية الوقوف (أمامية وجانبية)',
            'تقرير وصور الرنين المغناطيسي (MRI) في حال وجود إصابات في الأربطة أو الأوتار',
            'تقرير طبي يوضح مستوى الحركة والقدرة على المشي وشدة الألم',
            'بيانات المفصل القديم والتقارير الجراحية السابقة في حال جراحات المراجعة',
            'فحوصات الدم الأساسية وتقييم اللياقة العامة للجراحة',
          ],
          disclaimer: 'يقوم الجراح الاستشاري في المستشفى بإجراء الفحص السريري المباشر وقياس مدى حركة المفصل عند الحضور.',
        },
      },
    },
  },

  // 3. Cardiac sciences
  {
    id: 'cardiac-sciences',
    slug: 'cardiac-sciences',
    status: 'on-request',
    image: {
      src: '/images/treatment-cardiac-sciences.jpg',
      alt: {
        en: 'Cardiovascular diagnostic workstation showing 3D cardiac imaging and hemodynamic monitoring',
        ru: 'Диагностический комплекс кардиологии с визуализацией сердца',
        ar: 'مركز تشخيص القلب والأوعية الدموية مع تقنيات التصوير ثلاثي الأبعاد',
      },
    },
    content: {
      en: {
        title: 'Cardiac sciences',
        secondaryLabel: 'Heart care',
        description: 'Bypass surgery, valve repair, angioplasty, and paediatric cardiology.',
        statusLabel: 'On request',
        metaTitle: 'Cardiac Sciences | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for adult and paediatric cardiac care, coronary bypass surgery, valve replacement, and interventional cardiology with accredited heart institutes in India.',
        whatThisCovers: [
          'Coronary artery bypass grafting (CABG), including off-pump (beating heart) techniques',
          'Heart valve repair and replacement (mitral, aortic, and tricuspid valves)',
          'Minimally invasive and catheter-based cardiac interventions (TAVI / TAVR)',
          'Complex paediatric cardiology and congenital heart defect repair',
          'Electrophysiology studies, pacemaker, and ICD implantation coordination',
        ],
        scopeDisclaimer: 'Cardiac procedural decisions require comprehensive multi-disciplinary heart team consensus at the hospital. Emergency interventions are not handled through travel coordination.',
        conditions: [
          { title: 'Coronary artery disease (CAD)', description: 'Multi-vessel blockage management via advanced bypass surgery or complex percutaneous coronary intervention.' },
          { title: 'Valvular heart disease', description: 'Aortic stenosis, mitral regurgitation, and complex multi-valve pathologies.' },
          { title: 'Congenital heart conditions', description: 'Atrial and ventricular septal defects, tetralogy of Fallot, and structural anomalies in paediatric patients.' },
          { title: 'Cardiac arrhythmias', description: 'Atrial fibrillation management, catheter ablation, and cardiac resynchronisation therapy.' },
        ],
        recordsGuidance: {
          intro: 'Clear cardiac diagnostic imaging allows hospital cardiologists and cardiac surgeons to review hemodynamic status and surgical suitability.',
          items: [
            'Coronary angiography report and CD / digital video file (mandatory for bypass review)',
            'Recent 2D Echocardiogram report with calculated ejection fraction (LVEF)',
            'Recent 12-lead ECG traces and any 24-hour Holter monitoring data',
            'Detailed summary of current cardiac medications, antiplatelet therapy, and dosages',
            'Recent blood work including serum creatinine, electrolytes, and HbA1c',
          ],
          disclaimer: 'The hospital heart team will advise whether repeated bedside echo, repeat angiography, or non-invasive coronary testing is necessary before final procedure sign-off.',
        },
      },
      ru: {
        title: 'Кардиология и кардиохирургия',
        secondaryLabel: 'Лечение сердца',
        description: 'Аортокоронарное шунтирование, коррекция клапанов, ангиопластика и детская кардиохирургия.',
        statusLabel: 'По запросу',
        metaTitle: 'Кардиология и кардиохирургия | Направления лечения | Nuhavi Health',
        metaDescription: 'Координация плановой кардиохирургии, шунтирования, протезирования клапанов и интервенционной кардиологии в ведущих центрах Индии.',
        whatThisCovers: [
          'Аортокоронарное шунтирование (АКШ), включая операции на работающем сердце',
          'Пластика и протезирование клапанов сердца (биологические и механические клапаны)',
          'Малоинвазивные катетерные вмешательства и эндоваскулярные операции (TAVI)',
          'Детская кардиохирургия и коррекция врожденных пороков сердца',
          'Электрофизиология, установка кардиостимуляторов и дефибрилляторов (ИКД)',
        ],
        scopeDisclaimer: 'Экстренная кардиологическая помощь в рамках медицинского туризма не оказывается. Все случаи рассматриваются кардиологическим консилиумом клиники.',
        conditions: [
          { title: 'Ишемическая болезнь сердца (ИБС)', description: 'Многососудистое поражение коронарных артерий, стенокардия напряжения.' },
          { title: 'Пороки клапанов сердца', description: 'Стеноз аортального клапана, митральная недостаточность, ревматические поражения.' },
          { title: 'Врожденные пороки сердца (ВПС)', description: 'Дефекты межпредсердной и межжелудочковой перегородок, тетрада Фалло.' },
          { title: 'Нарушения сердечного ритма', description: 'Мерцательная аритмия, синдром слабости синусового узла, блокады сердца.' },
        ],
        recordsGuidance: {
          intro: 'Для экспертной оценки кардиологам необходимы записи коронарографии и свежая эхокардиография.',
          items: [
            'Протокол и видеозапись коронарографии (на диске или через ссылку)',
            'Свежий протокол ЭхоКГ с указанием фракции выброса (ФВ)',
            'ЭКГ в 12 отведениях и данные суточного холтеровского мониторирования',
            'Список принимаемых препаратов (включая антикоагулянты и дезагреганты)',
            'Биохимический анализ крови (показатели креатинина, мочевины, калия, натрия)',
          ],
          disclaimer: 'Кардиологическая команда клиники проведет повторный очный осмотр и контрольное ЭхоКГ перед проведением процедуры.',
        },
      },
      ar: {
        title: 'أمراض وجراحة القلب',
        secondaryLabel: 'رعاية القلب',
        description: 'جراحة الشرايين التاجية، وترميم الصمامات، والقسطرة العلاجية، وطب قلب الأطفال.',
        statusLabel: 'حسب الطلب',
        metaTitle: 'أمراض وجراحة القلب | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق جراحات القلب المفتوح، وتبديل الصمامات، وعمليات القسطرة الدقيقة وجراحة قلب الأطفال في مراكز القلب الرائدة في الهند.',
        whatThisCovers: [
          'جراحة المجازة التاجية وزراعة شرايين القلب (CABG) بالتقنيات الحديثة',
          'إصلاح واستبدال صمامات القلب (الصمام الميترالي والأورطي)',
          'القسطرة التداخلية وتبديل الصمام الأورطي عبر القسطرة (TAVI)',
          'جراحة وتصحيح عيوب القلب الخلقية لدى الأطفال',
          'دراسة كهربائية القلب وتركيب أجهزة تنظيم ضربات القلب (Pacemakers)',
        ],
        scopeDisclaimer: 'تقتصر خدماتنا على التنسيق للحالات المجدولة غير الطارئة، وتخضع جميع القرارات العلاجية لتقييم الفريق الطبي بالمستشفى.',
        conditions: [
          { title: 'تصلب الشرايين التاجية', description: 'علاج انسداد الشرايين المتعددة عبر جراحة القلب المفتوح أو القسطرة التداخلية.' },
          { title: 'أمراض واعتلال صمامات القلب', description: 'تضيق أو ارتجاع الصمامات وإجراءات الإصلاح أو التبديل بصمامات نسيجية أو ميكانيكية.' },
          { title: 'تشوهات القلب الخلقية للأطفال', description: 'إغلاق ثقوب القلب بين الأذينين أو البطينين وتصحيح العيوب المعقدة.' },
          { title: 'اضطرابات نبض القلب', description: 'علاج الرجفان الأذيني وكي بؤر التسارع وتركيب مقومات القلب المزيلة للرجفان.' },
        ],
        recordsGuidance: {
          intro: 'يعد تقرير القسطرة القلبية والتصوير بالموجات الصوتية للقلب أساسياً لتقييم كفاءة عضلة القلب وتحديد الخيار الأنسب.',
          items: [
            'تقرير وفيديو القسطرة التشخيصية للقلب (قرص مدمج أو رابط فيديو رقمي)',
            'تقرير موجات القلب الصوتية (Echo) الحديث موضحاً نسبة كفاءة الضخ (LVEF)',
            'رسم القلب الكهربائي الحديث (ECG) وتقارير الهولتر إن وجدت',
            'قائمة تفصيلية بأدوية القلب والسيولة التي يتناولها المريض',
            'تحاليل وظائف الكلى (الكرياتينين) والأملاح الحديثة',
          ],
          disclaimer: 'يقوم استشاري جراحة القلب بعمل فحص سريري وإعادة الإيكو للتأكد من الجاهزية التامة للتدخل الجراحي.',
        },
      },
    },
  },

  // 4. Neurosciences
  {
    id: 'neurosciences',
    slug: 'neurosciences',
    status: 'on-request',
    image: {
      src: '/images/treatment-neurosciences.jpg',
      alt: {
        en: 'Advanced neurological brain MRI diagnostic workstation showing detailed cerebral structures',
        ru: 'Диагностическая станция МРТ головного мозга и нервной системы',
        ar: 'محطة الرنين المغناطيسي المتقدمة لتصوير الدماغ والجهاز العصبي',
      },
    },
    content: {
      en: {
        title: 'Neurosciences',
        secondaryLabel: 'Brain and spine',
        description: 'Brain surgery, stroke rehabilitation, and spine disorders.',
        statusLabel: 'On request',
        metaTitle: 'Neurosciences | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for microneurosurgery, brain tumour resection, cranial procedures, and specialized neuro-rehabilitation with accredited neurology institutes in India.',
        whatThisCovers: [
          'Microsurgical cranial procedures and skull-base tumour resection',
          'Endoscopic transsphenoidal pituitary surgery',
          'Stereotactic radiosurgery coordination (CyberKnife / Gamma Knife)',
          'Surgical management of intractable epilepsy and movement disorders (DBS)',
          'Dedicated multidisciplinary neuro-rehabilitation and stroke recovery programs',
        ],
        scopeDisclaimer: 'Neurological surgical indications depend on precise functional imaging, motor preservation priorities, and clinical stability for travel.',
        conditions: [
          { title: 'Brain tumours and skull-base lesions', description: 'Meningiomas, gliomas, acoustic neuromas, and pituitary adenomas requiring microsurgical resection.' },
          { title: 'Cerebrovascular disorders', description: 'Elective intracranial aneurysm clipping or coiling, and arteriovenous malformation (AVM) evaluation.' },
          { title: 'Movement disorders and Parkinson\'s', description: 'Evaluation for Deep Brain Stimulation (DBS) therapy by specialized neurology teams.' },
          { title: 'Hydrocephalus and cranial trauma sequelae', description: 'Endoscopic third ventriculostomy (ETV) and shunt revision procedures.' },
        ],
        recordsGuidance: {
          intro: 'High-resolution neuro-imaging and detailed clinical neurological examination notes are required for surgical feasibility assessments.',
          items: [
            'High-resolution MRI Brain scan reports and complete DICOM series (contrast-enhanced)',
            'CT scan reports of the head / CT angiography if vascular lesions are involved',
            'Neurologist examination notes documenting motor power, cranial nerves, and cognitive status',
            'EEG reports and video telemetry summaries for epilepsy patients',
            'Current anti-epileptic and neurological medication regimen with dates of onset',
          ],
          disclaimer: 'Hospital neurosurgeons will review image slice thickness and may request specialized functional MRI or volumetric navigation protocols upon arrival.',
        },
      },
      ru: {
        title: 'Неврология и нейрохирургия',
        secondaryLabel: 'Головной и спинной мозг',
        description: 'Микрохирургия головного мозга, реабилитация после инсульта и заболевания позвоночника.',
        statusLabel: 'По запросу',
        metaTitle: 'Неврология и нейрохирургия | Направления лечения | Nuhavi Health',
        metaDescription: 'Организация плановой нейрохирургии, удаления опухолей мозга, радиохирургии и нейрореабилитации в Индии.',
        whatThisCovers: [
          'Микрохирургическое удаление опухолей головного мозга и основания черепа',
          'Эндоскопические трансназальные операции на аденомах гипофиза',
          'Радиохирургическое лечение (Гамма-нож, Кибер-нож)',
          'Хирургическое лечение эпилепсии и глубокая стимуляция мозга (DBS) при болезни Паркинсона',
          'Комплексные программы нейрореабилитации после инсультов и операций',
        ],
        scopeDisclaimer: 'Показания к нейрохирургическому вмешательству определяются функциональным состоянием пациента и возможностью безопасного авиаперелета.',
        conditions: [
          { title: 'Опухоли головного мозга', description: 'Менингиомы, глиомы, невриномы слухового нерва, краниофарингиомы.' },
          { title: 'Сосудистые патологии ЦНС', description: 'Плановое клипирование или эмболизация аневризм, артериовенозные мальформации (АВМ).' },
          { title: 'Экстрапирамидные расстройства', description: 'Болезнь Паркинсона, дистония, подготовка к имплантации электродов DBS.' },
          { title: 'Гидроцефалия', description: 'Эндоскопическая тривентрикулостомия и ликворошунтирующие операции.' },
        ],
        recordsGuidance: {
          intro: 'Для анализа нейрохирургам требуются оригинальные снимки МРТ в высоком разрешении с контрастированием.',
          items: [
            'Свежие протоколы и DICOM-снимки МРТ головного мозга с контрастом',
            'Заключения КТ-ангиографии при подозрении на сосудистые патологии',
            'Осмотр невролога с оценкой рефлексов, мышечной силы и неврологического дефицита',
            'Заключения ЭЭГ при судорожном синдроме или эпилепсии',
            'Полный список принимаемых противосудорожных и седативных препаратов',
          ],
          disclaimer: 'Нейрохирургическая бригада клиники проведет контрольную нейронавигационную томографию перед операцией.',
        },
      },
      ar: {
        title: 'طب وجراحة المخ والأعصاب',
        secondaryLabel: 'المخ والعمود الفقري',
        description: 'جراحة الدماغ المجهرية، وإعادة تأهيل السكتات الدماغية، واعتلالات الأعصاب.',
        statusLabel: 'حسب الطلب',
        metaTitle: 'طب وجراحة المخ والأعصاب | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق جراحات الدماغ المجهرية واستئصال الأورام والجراحة الإشعاعية وإعادة التأهيل العصبي المتقدم في مستشفيات الهند.',
        whatThisCovers: [
          'جراحات الدماغ المجهرية واستئصال أورام قاع الجمجمة',
          'الجراحة بالمنظار عبر الأنف لأورام الغدة النخامية',
          'الجراحة الإشعاعية الدقيقة بدون فتح جراحي (CyberKnife / Gamma Knife)',
          'جراحة التحفيز العميق للدماغ (DBS) لمرضى باركنسون والاضطرابات الحركية',
          'برامج متكاملة لإعادة التأهيل العصبي والحركي بعد الجلطات والعمليات',
        ],
        scopeDisclaimer: 'تعتمد جدوى التدخل الجراحي للأعصاب على صور الرنين الدقيقة والحالة الوظيفية للمريض وقدرته على السفر بأمان.',
        conditions: [
          { title: 'أورام الدماغ والغدة النخامية', description: 'الأورام السحائية، وأورام العصب السمعي، والأورام الدبقية، وأورام قاع الجمجمة.' },
          { title: 'تشوهات الأوعية الدموية الدماغية', description: 'تقييم وعلاج تمدد الأوعية الدموية بالقسطرة أو الكي الجراحي والتشوهات الشريانية الوريدية (AVM).' },
          { title: 'اضطرابات الحركة ومرض الرعاش (باركنسون)', description: 'تقييم الحالات لزراعة أقطاب التحفيز الكهربائي العميق للدماغ.' },
          { title: 'استسقاء الدماغ والضغط داخل الجمجمة', description: 'عمليات المنظار وتوصيل صمامات تصريف السائل الدماغي الشوكي.' },
        ],
        recordsGuidance: {
          intro: 'يعد توفير صور الرنين المغناطيسي المقطعية عالية الدقة مع الصبغة أساسياً لدراسة الحالة من قبل استشاري جراحة المخ والأعصاب.',
          items: [
            'تقارير وصور الرنين المغناطيسي للدماغ (MRI) عالية الدقة بالصبغة بصيغة DICOM',
            'أشعة مقطعية للشرايين الدماغية (CT Angiography) في حالات الأوعية الدموية',
            'تقرير فحص الأعصاب السريري موضحاً القوة العضلية والوعي والحواس',
            'تخطيط الدماغ الكهربائي (EEG) لمرضى نوبات الصرع أو التشنجات',
            'قائمة الأدوية العصبية الحالية وجرعاتها الدقيقة',
          ],
          disclaimer: 'يقوم جراحو الأعصاب بإعادة تقييم الصور وطلب تخطيط ملاحي دقيق قبل الدخول إلى غرفة العمليات.',
        },
      },
    },
  },

  // 5. Organ transplants
  {
    id: 'organ-transplants',
    slug: 'organ-transplants',
    status: 'on-request',
    image: {
      src: '/images/treatment-organ-transplants.jpg',
      alt: {
        en: 'Clinical medical illustration of kidney transplantation showing donor organ placement and vascular anatomy',
        ru: 'Медицинская иллюстрация трансплантации почки с анатомией сосудов и расположением донорского органа',
        ar: 'رسم توضيحي طبي لعملية زراعة الكلى يوضح موضع العضو المزروع والتشريح الوعائي',
      },
    },
    content: {
      en: {
        title: 'Organ transplants',
        secondaryLabel: 'Liver, kidney',
        description: 'Living donor liver and kidney transplant coordination under Indian legal framework.',
        statusLabel: 'On request',
        metaTitle: 'Organ Transplants | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for living-donor liver and kidney transplants in India under strict Indian legal framework (THOTA). Dedicated patient and donor clearance assistance.',
        whatThisCovers: [
          'Living donor liver transplantation (adult and paediatric recipients)',
          'Living donor kidney transplantation, including ABO-incompatible protocols',
          'Comprehensive pre-transplant recipient and donor medical compatibility screening',
          'Guidance on documentation required for statutory hospital and government Authorisation Committees',
          'Intensive post-transplant immunosuppression monitoring and surgical follow-up',
        ],
        scopeDisclaimer: 'Under Indian law (Transplantation of Human Organs and Tissues Act - THOTA), only living donor transplants between legally documented, medically suitable family relatives are permissible. Commercial donation is strictly illegal.',
        conditions: [
          { title: 'End-stage liver disease and cirrhosis', description: 'Decompensated liver cirrhosis, acute-on-chronic liver failure, and early-stage hepatocellular carcinoma meeting transplant criteria.' },
          { title: 'End-stage renal disease (ESRD)', description: 'Chronic kidney failure requiring maintenance hemodialysis, evaluated for living-related kidney transplant.' },
          { title: 'Paediatric liver and metabolic conditions', description: 'Biliary atresia and inborn errors of metabolism evaluated for parental living-donor liver transplantation.' },
        ],
        recordsGuidance: {
          intro: 'Transplant reviews require exhaustive clinical investigations for both the potential recipient and the proposed living related donor.',
          items: [
            'Recipient complete liver or renal profile, viral markers (HBV, HCV, HIV, CMV), and blood group',
            'Recent abdominal triple-phase CT scan or CT angiography reports and images',
            'MELD / Child-Pugh score records (liver) or current dialysis access and schedules (kidney)',
            'Proposed donor basic medical summary, blood group, and voluntary consent documentation',
            'Government-issued proof of relationship documentation (passports, birth certificates, family registry)',
          ],
          disclaimer: 'All transplant evaluations must be independently cleared by the treating hospital transplant team and formally approved by the statutory Authorisation Committee under THOTA before any procedure can proceed.',
        },
      },
      ru: {
        title: 'Трансплантология органов',
        secondaryLabel: 'Печень, почки',
        description: 'Координация родственной трансплантации печени и почек по законам Индии.',
        statusLabel: 'По запросу',
        metaTitle: 'Трансплантология органов | Направления лечения | Nuhavi Health',
        metaDescription: 'Координация родственной трансплантации печени и почек в клиниках Индии в строгом соответствии с законодательством THOTA.',
        whatThisCovers: [
          'Родственная трансплантация фрагмента печени (взрослые и дети)',
          'Родственная пересадка почки, включая протоколы при несовместимости по группе крови (ABO)',
          'Комплексное обследование реципиента и живого родственного донора',
          'Консультация по подготовке документов для государственной комиссии по этике',
          'Послеоперационное ведение и подбор индивидуальной иммуносупрессивной терапии',
        ],
        scopeDisclaimer: 'Согласно закону Индии THOTA, разрешена только безвозмездная трансплантация от живого генетического или юридически подтвержденного родственника. Любая коммерческая трансплантация строго запрещена законом.',
        conditions: [
          { title: 'Терминальная стадия заболеваний печени', description: 'Декомпенсированный цирроз печени, печеночная недостаточность, синдром Бадда-Киари.' },
          { title: 'Терминальная стадия хронической болезни почек (ХБП 5)', description: 'Хроническая почечная недостаточность, зависимость от гемодиализа.' },
          { title: 'Врожденные заболевания печени у детей', description: 'Атрезия желчевыводящих путей, метаболические поражения печени.' },
        ],
        recordsGuidance: {
          intro: 'Оценка возможности трансплантации требует предоставления полной медицинской документации как пациента, так и потенциального донора.',
          items: [
            'Развернутые печеночные или почечные пробы, группа крови и резус-фактор пациента и донора',
            'Трехфазная КТ брюшной полости с ангиографией сосудов печени / почек',
            'Выписки с динамикой заболевания, расчетом индексов тяжести (MELD / Child-Pugh) или графиком диализа',
            'Медицинские справки о здоровье и отсутствии противопоказаний у потенциального донора',
            'Официальные нотариальные документы, подтверждающие родственную связь (свидетельства о рождении, браке)',
          ],
          disclaimer: 'Проведение операции возможно только после очного углубленного обследования обоих участников и официального разрешения правительственного комитета по этике Индии.',
        },
      },
      ar: {
        title: 'زراعة الأعضاء',
        secondaryLabel: 'الكبد والكلى',
        description: 'تنسيق زراعة الكبد والكلى من المتبرعين الأحياء وفقاً للقوانين الهندية المنظمة.',
        statusLabel: 'حسب الطلب',
        metaTitle: 'زراعة الأعضاء | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق زراعة الكبد والكلى من متبرع حي في الهند وفق الضوابط القانونية الصارمة (قانون THOTA) مع أفضل المراكز المعتمدة.',
        whatThisCovers: [
          'زراعة الكبد من متبرع حي من الأقارب (للبالغين والأطفال)',
          'زراعة الكلى من متبرع حي من الأقارب، بما في ذلك الحالات غير المتطابقة فصائلياً',
          'الفحوصات الطبية والمناعية الدقيقة للمريض والمتبرع لضمان التطابق والأمان',
          'المساعدة في متطلبات التوثيق القانوني للعرض على لجنة التفويض الرسمية (Authorisation Committee)',
          'العناية المركزة والمتابعة المناعية الدقيقة لبروتوكولات تثبيط المناعة بعد الزرع',
        ],
        scopeDisclaimer: 'بموجب القوانين الهندية (قانون THOTA)، يُسمح فقط بالزراعة من متبرع حي من الأقارب المثبتة صلتهم بوثائق رسمية معتمدة. بيع وشراء الأعضاء أو التبرع التجاري محظور ومجرّم قانونياً بشكل قاطع.',
        conditions: [
          { title: 'فشل الكبد المتقدم وتليف الكبد', description: 'تليف الكبد غير المعاوض، والقصور الكبدي الحاد، وأورام الكبد الأولية ضمن معايير الزراعة.' },
          { title: 'القصور الكلوي المزمن في مراحله النهائية', description: 'الفشل الكلوي النهائي والحاجة للغسيل الكلوي المنتظم والتقييم لزراعة الكلى.' },
          { title: 'أمراض الكبد الوراثية لدى الأطفال', description: 'رتق القنوات الصفراوية والخلل الأيضي الوراثي مع التبرع من أحد الوالدين.' },
        ],
        recordsGuidance: {
          intro: 'يتطلب التقييم لزراعة الأعضاء توفير ملف طبي متكامل لكل من المريض والمتبرع الحي المقترح.',
          items: [
            'تحاليل وظائف الكبد أو الكلى الشاملة وفصائل الدم الدقيقة للمريض والمتبرع',
            'أشعة مقطعية ثلاثية المراحل للبطن (Triple Phase CT) مع تصوير الأوعية الدموية',
            'تقارير درجات تليف الكبد (مقياس MELD) أو جداول وتقارير الغسيل الكلوي الحديثة',
            'الفحوصات الأولية للمتبرع المقترح وتأكيد سلامته البدنية وخلوه من الأمراض المزمنة',
            'الوثائق الرسمية المعتمدة والمصدقة التي تثبت صلة القرابة النظامية بين الطرفين',
          ],
          disclaimer: 'لا يمكن اتخاذ قرار العملية إلا بعد الفحص المباشر في المستشفى والحصول على الموافقة الخطية الرسمية من لجنة التفويض الحكومية الهندية المنصوص عليها قانوناً.',
        },
      },
    },
  },

  // 6. Spine surgery
  {
    id: 'spine-surgery',
    slug: 'spine-surgery',
    status: 'on-request',
    image: {
      src: '/images/treatment-spine-surgery.jpg',
      alt: {
        en: 'Spine care diagnostic workstation with high-definition vertebral MRI scans and anatomical model',
        ru: 'Диагностическая станция вертебрологии и МРТ позвоночника',
        ar: 'محطة تشخيص وجراحة العمود الفقري والرنين المغناطيسي المتقدم',
      },
    },
    content: {
      en: {
        title: 'Spine surgery',
        secondaryLabel: 'Spine',
        description: 'Deformity correction, disc replacement, and minimally invasive procedures.',
        statusLabel: 'On request',
        metaTitle: 'Spine Surgery | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for minimally invasive spine surgery, disc replacement, spinal deformity correction, and fusion procedures with accredited hospitals in India.',
        whatThisCovers: [
          'Minimally invasive spine surgery (MISS) and tubular microdiscectomy',
          'Artificial cervical and lumbar disc replacement (arthroplasty)',
          'Spinal fusion (TLIF, PLIF, ALIF) for spondylolisthesis and instability',
          'Scoliosis and kyphosis deformity correction in adolescent and adult patients',
          'Spinal cord decompression and microscopic stenosis release',
        ],
        scopeDisclaimer: 'Conservative medical and physical therapies are always prioritized before surgical intervention. The decision for spine surgery is based on clinical deficit progression.',
        conditions: [
          { title: 'Herniated intervertebral discs (slipped disc)', description: 'Lumbar and cervical disc herniation causing sciatica, radiculopathy, or motor weakness.' },
          { title: 'Spinal canal stenosis', description: 'Neurogenic claudication, walking difficulty, and spinal canal narrowing relieved by decompression.' },
          { title: 'Spondylolisthesis and spinal instability', description: 'Vertebral slipping causing chronic mechanical back pain and nerve root compression.' },
          { title: 'Spinal deformities (scoliosis / kyphosis)', description: 'Three-dimensional spinal curvature correction with advanced intraoperative neuromonitoring.' },
        ],
        recordsGuidance: {
          intro: 'High-quality spinal magnetic resonance imaging is critical to correlate radiological nerve compression with your specific symptoms.',
          items: [
            'Recent MRI scan of the relevant spine segment (cervical, thoracic, or lumbosacral) with reports and DICOM images',
            'Dynamic flexion-extension spinal X-rays (if spinal instability or slipping is suspected)',
            'Detailed notes documenting radiation of pain, numbness, foot drop, or bladder/bowel symptoms',
            'Summary of conservative measures tried so far (physiotherapy, epidural injections, pain medications)',
          ],
          disclaimer: 'Spine specialists will correlate scan findings with in-person clinical neurological tests before recommending any surgical procedure.',
        },
      },
      ru: {
        title: 'Хирургия позвоночника',
        secondaryLabel: 'Позвоночник',
        description: 'Исправление деформаций, замена межпозвонковых дисков и малоинвазивные операции.',
        statusLabel: 'По запросу',
        metaTitle: 'Хирургия позвоночника | Направления лечения | Nuhavi Health',
        metaDescription: 'Малоинвазивные операции на позвоночнике, удаление грыж, замена дисков и коррекция сколиоза в профильных клиниках Индии.',
        whatThisCovers: [
          'Малоинвазивные эндоскопические и микрохирургические дискэктомии',
          'Эндопротезирование межпозвонковых дисков шейного и поясничного отделов',
          'Спондилодез (фиксация позвонков титановыми системами) при нестабильности',
          'Коррекция сколиоза и кифоза у подростков и взрослых',
          'Декомпрессия спинномозгового канала при стенозе',
        ],
        scopeDisclaimer: 'Хирургическое лечение рассматривается только при неэффективности консервативной терапии или нарастании неврологического дефицита.',
        conditions: [
          { title: 'Грыжи межпозвонковых дисков', description: 'Компрессия нервных корешков, радикулопатия, стойкий болевой синдром.' },
          { title: 'Стеноз позвоночного канала', description: 'Сужение спинномозгового канала, перемежающаяся хромота, онемение в ногах.' },
          { title: 'Спондилолистез и нестабильность', description: 'Смещение позвонков, вызывающее компрессию корешков и хронические боли.' },
          { title: 'Деформации позвоночника (сколиоз)', description: 'Тяжелые искривления позвоночника, требующие реконструктивной коррекции с нейромониторингом.' },
        ],
        recordsGuidance: {
          intro: 'Для анализа нейрохирургам и вертебрологам необходимы качественные снимки МРТ и функциональные рентгенограммы.',
          items: [
            'Свежее МРТ пораженного отдела позвоночника (шейный, грудной, поясничный) со снимками',
            'Рентгеновские снимки позвоночника с функциональными пробами (сгибание/разгибание)',
            'Заключение невролога с описанием рефлексов, зон онемения и симптомов выпадения функций',
            'Информация о ранее проведенном лечении (блокады, физиотерапия, массаж)',
          ],
          disclaimer: 'Хирург-вертебролог сопоставит жалобы со снимками во время очной консультации и неврологического осмотра.',
        },
      },
      ar: {
        title: 'جراحة العمود الفقري',
        secondaryLabel: 'العمود الفقري',
        description: 'تصحيح التشوهات، واستبدال الأقراص، والعمليات طفيفة التوغل.',
        statusLabel: 'حسب الطلب',
        metaTitle: 'جراحة العمود الفقري | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق جراحات العمود الفقري المحدودة، واستئصال الانزلاق الغضروفي، وتثبيت الفقرات وتصحيح انحراف العمود الفقري (الجنف) في الهند.',
        whatThisCovers: [
          'جراحات العمود الفقري طفيفة التوغل واستئصال الانزلاق الغضروفي بالميكروسكوب والمنظار',
          'استبدال الأقراص الغضروفية بأقراص صناعية متحركة (الرقبة والقطنية)',
          'تثبيت الفقرات بالشرائح والمسامير التيتانيوم لعلاج عدم استقرار العمود الفقري',
          'تصحيح اعوجاج وانحناء العمود الفقري (الجنف والحدب) بأحدث تقنيات المراقبة العصبية',
          'توسيع القناة الشوكية وتحرير الأعصاب المضغوطة',
        ],
        scopeDisclaimer: 'يُفضل دائماً العلاج التحفظي والطبيعي متى ما كان ممكناً، ولا يُوصى بالتدخل الجراحي إلا في حالات استمرار الألم الشديد أو الضعف العصبي.',
        conditions: [
          { title: 'الانزلاق الغضروفي (الديسك)', description: 'ضغط الغضروف على الأعصاب، وعرق النسا، وخدر أو ضعف الأطراف.' },
          { title: 'تضيق القناة الشوكية', description: 'صعوبة المشي لمسافات طويلة، وثقل الساقين الناتج عن ضيق مجرى الحبل الشوكي.' },
          { title: 'انزلاق الفقرات (Spondylolisthesis)', description: 'تحرك الفقرات عن موضعها الطبيعي مسببة ألماً ميكانيكياً مزمناً.' },
          { title: 'تشوهات وانحراف العمود الفقري (الجنف)', description: 'تصحيح تقوسات العمود الفقري للأطفال والبالغين بالدعامات التيتانيوم.' },
        ],
        recordsGuidance: {
          intro: 'يعد الرنين المغناطيسي المقطعي للفقرات ضرورياً لتحديد موضع ضغط الأعصاب ونوع الإجراء المناسب.',
          items: [
            'تقرير وأشعة الرنين المغناطيسي الحديثة (MRI) للفقرات المعنية (عنقية أو قطنية)',
            'أشعة سينية ديناميكية للفقرات في وضعيتي الانحناء للأمام والخلف',
            'تقرير يوضح الأعراض مثل مسافة المشي ومناطق الخدر أو الضعف في الساقين أو الذراعين',
            'بيان بالعلاجات السابقة مثل جلسات العلاج الطبيعي أو حقن العمود الفقري',
          ],
          disclaimer: 'يقوم استشاري جراحة العمود الفقري بإجراء الفحص العصبي المباشر لمطابقة الأعراض مع صور الأشعة قبل تحديد نوع الجراحة.',
        },
      },
    },
  },

  // 7. Gastroenterology and GI surgery
  {
    id: 'gastroenterology',
    slug: 'gastroenterology',
    status: 'on-request',
    image: {
      src: '/images/treatment-gastroenterology.jpg',
      alt: {
        en: 'Advanced gastroenterology endoscopic suite with dual clinical visualization monitors',
        ru: 'Эндоскопическая видеосистема и диагностика органов пищеварения',
        ar: 'منظومة مناظير الجهاز الهضمي والتشخيص السريري المتطور',
      },
    },
    content: {
      en: {
        title: 'Gastroenterology and GI surgery',
        secondaryLabel: 'Digestive care',
        description: 'Liver disease, advanced endoscopy, and complex gastrointestinal surgeries.',
        statusLabel: 'On request',
        metaTitle: 'Gastroenterology & GI Surgery | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for therapeutic endoscopy, hepatobiliary surgery, colorectal surgery, and digestive tract disorders with specialized medical centres in India.',
        whatThisCovers: [
          'Advanced therapeutic endoscopy and endosonography (EUS, ERCP)',
          'Hepato-pancreatico-biliary (HPB) surgery for liver, biliary, and pancreatic conditions',
          'Minimally invasive and laparoscopic gastrointestinal resections',
          'Management of complex inflammatory bowel disease (Crohn\'s and Ulcerative Colitis)',
          'Comprehensive evaluation for chronic liver disease and portal hypertension',
        ],
        scopeDisclaimer: 'Diagnostic endoscopic procedures and major surgical decisions are made in consultation with hospital gastroenterologists following thorough clinical evaluation.',
        conditions: [
          { title: 'Biliary and pancreatic disorders', description: 'Chronic pancreatitis, pancreatic cysts, biliary strictures, and choledocholithiasis managed by ERCP or surgery.' },
          { title: 'Complex liver diseases', description: 'Cirrhosis workup, autoimmune hepatitis, and portal hypertension evaluations.' },
          { title: 'Gastrointestinal bleeding and strictures', description: 'Endoscopic haemostasis, stricture dilatation, and mucosal resection.' },
          { title: 'Severe inflammatory bowel disease (IBD)', description: 'Biological therapy planning and restorative colorectal surgery for refractory colitis.' },
        ],
        recordsGuidance: {
          intro: 'Providing recent endoscopy notes, histopathology biopsies, and abdominal imaging helps gastroenterologists review your digestive health.',
          items: [
            'Reports and high-definition images/video from previous upper endoscopy or colonoscopy',
            'Histopathology reports of any biopsies taken during prior endoscopic procedures',
            'Recent CT or MRI / MRCP reports of the abdomen and pelvis with digital scan images',
            'Comprehensive liver function tests, complete blood count, and inflammatory markers (CRP/ESR)',
            'Summary of prior medication trials, immunosuppressants, or biologics with dates',
          ],
          disclaimer: 'Repeat diagnostic procedures may be scheduled if prior imaging lacks required resolution or if disease restaging is needed.',
        },
      },
      ru: {
        title: 'Гастроэнтерология и хирургия ЖКТ',
        secondaryLabel: 'Органы пищеварения',
        description: 'Заболевания печени, передовая эндоскопия и сложные хирургические вмешательства.',
        statusLabel: 'По запросу',
        metaTitle: 'Гастроэнтерология и хирургия ЖКТ | Направления лечения | Nuhavi Health',
        metaDescription: 'Диагностика и лечение заболеваний органов пищеварения, эндоскопия, гепатобилиарная хирургия в клиниках Индии.',
        whatThisCovers: [
          'Лечебная и диагностическая эндоскопия (ЭХО-КГ, ЭРХПГ, резекция слизистой)',
          'Хирургия печени, желчных протоков и поджелудочной железы (HPB)',
          'Малоинвазивные лапароскопические операции на желудке и кишечнике',
          'Лечение воспалительных заболеваний кишечника (ВЗК — болезнь Крона, язвенный колит)',
          'Экспертная диагностика хронических поражений печени и портальной гипертензии',
        ],
        scopeDisclaimer: 'Тактика ведения определяется гастроэнтерологами и хирургами клиники на основании лабораторных и эндоскопических данных.',
        conditions: [
          { title: 'Заболевания поджелудочной железы и желчевыводящих путей', description: 'Хронический панкреатит, кисты, стриктуры протоков, камни желчных путей.' },
          { title: 'Хронические заболевания печени', description: 'Гепатиты, цирроз печени, портальная гипертензия.' },
          { title: 'Воспалительные заболевания кишечника (ВЗК)', description: 'Болезнь Крона и язвенный колит, подбор генно-инженерной биологической терапии.' },
        ],
        recordsGuidance: {
          intro: 'Протоколы эндоскопических исследований и биопсий имеют первостепенное значение для гастроэнтерологов.',
          items: [
            'Протоколы гастроскопии и колоноскопии с описанием слизистой',
            'Гистологические заключения биоптатов ЖКТ',
            'Свежие КТ/МРТ брюшной полости или МР-холангиопанкреатография (МРХПГ)',
            'Биохимический анализ крови с печеночными ферментами (АЛТ, АСТ, билирубин, ГГТ, ЩФ)',
          ],
          disclaimer: 'Специалисты клиники могут назначить повторные эндоскопические исследования для оценки активности процесса.',
        },
      },
      ar: {
        title: 'أمراض وجراحة الجهاز الهضمي',
        secondaryLabel: 'الجهاز الهضمي والكبد',
        description: 'أمراض الكبد المتقدمة، والمناظير العلاجية، وجراحات الجهاز الهضمي المعقدة.',
        statusLabel: 'حسب الطلب',
        metaTitle: 'أمراض وجراحة الجهاز الهضمي | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق علاج أمراض الكبد والقنوات الصفراوية، والمناظير التداخلية المتقدمة وجراحات الجهاز الهضمي الدقيقة في مستشفيات الهند.',
        whatThisCovers: [
          'المناظير المتقدمة ومناظير القنوات المرارية والبنكرياس (ERCP و EUS)',
          'جراحات الكبد والبنكرياس والقنوات المرارية المتخصصة (HPB)',
          'استئصال أورام وتضيقات الجهاز الهضمي بالمنظار والجراحة طفيفة التوغل',
          'بروتوكولات علاج أمراض الأمعاء الالتهابية (داء كرون والتهاب القولون التقرحي)',
          'تقييم وعلاج أمراض الكبد المزمنة وارتفاع ضغط الوريد البابي',
        ],
        scopeDisclaimer: 'تُحدد الفحوصات التداخلية والخيارات الجراحية من قِبل استشاريي الجهاز الهضمي بالمستشفى بناءً على المعطيات السريرية.',
        conditions: [
          { title: 'أمراض البنكرياس والقنوات المرارية', description: 'التهاب البنكرياس المزمن، والأكياس، وحصوات القنوات المرارية وتضيقاتها.' },
          { title: 'أمراض الكبد المتقدمة', description: 'تقييم اعتلالات الكبد، وفحص تليف الكبد ومضاعفاته.' },
          { title: 'أمراض القولون والأمعاء الالتهابية', description: 'علاج حالات كرون والقولون التقرحي المستعصية بالأدوية البيولوجية أو الجراحة.' },
        ],
        recordsGuidance: {
          intro: 'تساعد تقارير المناظير السابقة وفحوصات الأنسجة الأطباء في التحقق من مرحلة المرض واختيار البروتوكول الأنسب.',
          items: [
            'تقارير وصور مناظير المعدة والقولون السابقة',
            'نتائج فحص عينات الأنسجة (الخزعات) المأخوذة أثناء المناظير',
            'أشعة الرنين للبطن والقنوات المرارية (MRCP) أو الأشعة المقطعية الحديثة',
            'فحوصات الدم الشاملة ووظائف الكبد ومؤشرات الالتهاب',
          ],
          disclaimer: 'قد يوصي الطبيب الاستشاري بإجراء مناظير استكشافية إضافية بالمستشفى لتقييم الوضع الحالي بدقة.',
        },
      },
    },
  },

  // 8. Nephrology and urology
  {
    id: 'nephrology-urology',
    slug: 'nephrology-urology',
    status: 'on-request',
    image: {
      src: '/images/treatment-nephrology-urology.jpg',
      alt: {
        en: 'Nephrology and urological diagnostic imaging suite displaying 3D renal anatomy reconstruction',
        ru: 'Диагностический комплекс урологии и нефрологии с 3D-моделированием почек',
        ar: 'منظومة تشخيص أمراض الكلى والمسالك البولية والتصوير ثلاثي الأبعاد',
      },
    },
    content: {
      en: {
        title: 'Nephrology and urology',
        secondaryLabel: 'Kidney and urinary',
        description: 'Dialysis coordination, stone disease, and reconstructive urology.',
        statusLabel: 'On request',
        metaTitle: 'Nephrology & Urology | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for renal disorders, maintenance dialysis planning, complex urological stone management, and reconstructive surgery in India.',
        whatThisCovers: [
          'Comprehensive nephrology workup for chronic kidney disease (CKD) stages 1-5',
          'Travel maintenance hemodialysis scheduling in accredited hospital dialysis units',
          'Minimally invasive stone surgery (RIRS, PCNL, laser lithotripsy)',
          'Prostatic enlargement procedures (HoLEP, TURP, robotic-assisted prostatectomy)',
          'Reconstructive urology for urethral strictures and congenital anomalies',
        ],
        scopeDisclaimer: 'Dialysis slot availability and specialized urological surgical plans must be confirmed in advance with the hospital department.',
        conditions: [
          { title: 'Complex kidney stone disease', description: 'Staghorn calculi, recurrent nephrolithiasis, and ureteric stones managed by flexible ureteroscopy and laser.' },
          { title: 'Chronic kidney disease and dialysis care', description: 'Slowing progression, vascular access creation (AV fistula), and safe dialysis travel coordination.' },
          { title: 'Benign and malignant prostate conditions', description: 'Severe urinary outflow obstruction and laser prostate enucleation.' },
          { title: 'Urethral stricture disease', description: 'Urethroplasty and reconstructive urinary tract surgery.' },
        ],
        recordsGuidance: {
          intro: 'Renal function tests, urinary imaging, and recent viral screening are essential for nephrology review.',
          items: [
            'Serial renal function tests (Serum Creatinine, Blood Urea Nitrogen, eGFR) over the past 3 to 6 months',
            'Ultrasound of kidneys, ureters, and bladder (KUB) or non-contrast CT KUB reports and scans',
            'Recent complete urine analysis and urine culture & sensitivity reports',
            'Mandatory viral serology (HBsAg, Anti-HCV, HIV) if maintenance dialysis coordination is required',
            'Dialysis prescription records and vascular access details, if currently on hemodialysis',
          ],
          disclaimer: 'The hospital nephrology team reviews dialysis orders and performs repeat viral screening before initiating treatment in dialysis suites.',
        },
      },
      ru: {
        title: 'Нефрология и урология',
        secondaryLabel: 'Почки и мочевыделительная система',
        description: 'Организация диализа, лечение мочекаменной болезни и реконструктивная урология.',
        statusLabel: 'По запросу',
        metaTitle: 'Нефрология и урология | Направления лечения | Nuhavi Health',
        metaDescription: 'Лечение заболеваний почек, мочекаменной болезни, урологических патологий и координация гемодиализа в Индии.',
        whatThisCovers: [
          'Ведение пациентов с хронической болезнью почек (ХБП)',
          'Организация сеансов гостевого гемодиализа в сертифицированных отделениях клиник',
          'Малоинвазивные лазерные операции при мочекаменной болезни (RIRS, перкутанная нефролитотомия)',
          'Хирургическое лечение заболеваний предстательной железы (лазерная энуклеация HoLEP, ТУР)',
          'Реконструктивные операции на уретре и мочевыводящих путях',
        ],
        scopeDisclaimer: 'График и слоты для гемодиализа согласовываются заранее с отделением нефрологии клиники.',
        conditions: [
          { title: 'Мочекаменная болезнь (МКБ)', description: 'Коралловидные камни почек, камни мочеточников, лазерное дробление.' },
          { title: 'Хроническая почечная недостаточность', description: 'Формирование артериовенозной фистулы (АВФ) и программный диализ.' },
          { title: 'Аденома предстательной железы', description: 'Лазерное удаление гиперплазии простаты с минимальным сроком госпитализации.' },
        ],
        recordsGuidance: {
          intro: 'Показатели функции почек и данные УЗИ/КТ необходимы для подбора тактики урологического или нефрологического лечения.',
          items: [
            'Анализы крови на креатинин, мочевину, электролиты в динамике за 3-6 месяцев',
            'Протоколы УЗИ почек и мочевого пузыря или бесконтрастной КТ мочевыделительной системы',
            'Общий анализ мочи и бакпосев мочи с антибиотикограммой',
            'Обязательные анализы на маркеры гепатитов B, C и ВИЧ (для пациентов на диализе)',
            'Выписка из диализного центра с параметрами диализа и типом сосудистого доступа',
          ],
          disclaimer: 'Перед проведением диализа в клинике проводится обязательное контрольное тестирование на вирусные маркеры.',
        },
      },
      ar: {
        title: 'أمراض الكلى والمسالك البولية',
        secondaryLabel: 'الكلى والمسالك',
        description: 'تنسيق الغسيل الكلوي، وعلاج حصوات الكلى، وجراحة المسالك الترميمية.',
        statusLabel: 'حسب الطلب',
        metaTitle: 'أمراض الكلى والمسالك البولية | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق علاج أمراض الكلى، وحصوات الجهاز البولي بالليزر، وجراحات المسالك البولية والبروستاتا وترتيبات الغسيل الكلوي في الهند.',
        whatThisCovers: [
          'المتابعة الدقيقة لمرضى القصور الكلوي المزمن (CKD)',
          'تنسيق جلسات الغسيل الكلوي للمسافرين في وحدات المستشفيات المعتمدة',
          'جراحات تفتيت وإزالة حصوات الكلى بالليزر والمنظار المرن (RIRS / PCNL)',
          'علاج تضخم البروستاتا بالليزر المتقدم (HoLEP) واستئصالها بالجراحة الروبوتية',
          'جراحات المسالك الترميمية وتوسيع مجرى البول',
        ],
        scopeDisclaimer: 'يتم حجز وترتيب جلسات الغسيل الكلوي والتجهيزات الجراحية بالتنسيق المسبق مع قسم أمراض الكلى بالمستشفى.',
        conditions: [
          { title: 'حصوات الكلى والحالب المعقدة', description: 'تفتيت واستخراج الحصوات الكبيرة والمتشعبة بأحدث تقنيات الليزر دون جراحة تقليدية.' },
          { title: 'القصور الكلوي وجلسات الغسيل', description: 'إجراء وصلات الغسيل الكلوي وتأمين جلسات الغسيل للمرضى القادمين من الخارج.' },
          { title: 'تضخم البروستاتا الحميد', description: 'علاج انسداد مجرى البول واستئصال تضخم البروستاتا بالليزر مع تعافٍ سريع.' },
        ],
        recordsGuidance: {
          intro: 'تعد تحاليل وظائف الكلى الدورية والأشعة المقطعية ضرورية لتقييم حالة الجهاز البولي.',
          items: [
            'تحاليل وظائف الكلى (الكرياتينين واليوريا) خلال الأشهر الأخيرة لتتبع مسار الحالة',
            'تقرير وأشعة السونار أو الأشعة المقطعية بدون صبغة للجهاز البولي (CT KUB)',
            'تحليل البول ومزرعة البول الحديثة',
            'فحوصات الفيروسات الكبدية (B و C) والإيدز (ضرورية لمرضى الغسيل الكلوي)',
            'تقرير تفصيلي لجلسات الغسيل الكلوي الحالية ومواصفات الفلتر والوصلة الوريدية إن وجدت',
          ],
          disclaimer: 'تخضع إجراءات الغسيل الكلوي لبروتوكولات الأمان وفحوصات الدم التأكيدية المعتمدة بالمستشفى فور الوصول.',
        },
      },
    },
  },

  // 9. Fertility and IVF
  {
    id: 'fertility',
    slug: 'fertility',
    status: 'on-request',
    image: {
      src: '/images/treatment-fertility.jpg',
      alt: {
        en: 'State-of-the-art embryology and IVF cleanroom laboratory with micromanipulator microscope',
        ru: 'Лаборатория эмбриологии и ЭКО с микроманипулятором',
        ar: 'مختبر أطفال الأنابيب وعلم الأجنة المجهز بأحدث المجاهر الدقيقة',
      },
    },
    content: {
      en: {
        title: 'Fertility and IVF',
        secondaryLabel: 'Reproductive care',
        description: 'Advanced reproductive technologies under Indian ART regulations.',
        statusLabel: 'On request',
        metaTitle: 'Fertility & IVF | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for advanced reproductive care and in vitro fertilisation (IVF) under Indian ART regulations with accredited fertility centres in India.',
        whatThisCovers: [
          'In vitro fertilisation (IVF) and intracytoplasmic sperm injection (ICSI)',
          'Comprehensive male and female reproductive endocrinology evaluations',
          'Pre-implantation genetic testing (PGT) under clinical guidelines where indicated',
          'Advanced cryopreservation for gametes and embryos',
          'Diagnostic and operative hysteroscopy and laparoscopy for fertility enhancement',
        ],
        scopeDisclaimer: 'All fertility treatments in India are strictly governed by the Assisted Reproductive Technology (ART) Act and Surrogacy Regulation Act. Foreign nationals must comply with published Indian regulatory directives.',
        conditions: [
          { title: 'Female factor infertility', description: 'Tubal factor blockage, severe ovarian dysfunction, and diminished ovarian reserve evaluated by specialists.' },
          { title: 'Male factor subfertility', description: 'Severe oligozoospermia, azoospermia, and surgical sperm retrieval (TESA/TESE).' },
          { title: 'Recurrent implantation failure', description: 'Endometrial receptivity analysis and immunomodulatory protocol reviews.' },
          { title: 'Endometriosis and adenomyosis', description: 'Multidisciplinary medical management and surgical fertility-preserving interventions.' },
        ],
        recordsGuidance: {
          intro: 'Hormonal profiles, previous cycle sheets, and semen analysis reports provide fertility consultants with essential baseline data.',
          items: [
            'Female hormone profile (AMH, Day 2/3 FSH, LH, Estradiol, Prolactin, TSH) within the last 6 months',
            'Pelvic ultrasound reports detailing antral follicle count (AFC) and uterine cavity morphology',
            'Hysterosalpingography (HSG) or hysteroscopy reports evaluating tubal patency',
            'Semen analysis report for the male partner according to WHO criteria (last 3 months)',
            'Summary records and embryology sheets of any prior IVF / ICSI cycles attempted',
          ],
          disclaimer: 'Fertility specialists will conduct repeat baseline follicular scans and infectious disease screenings upon initial clinic consultation.',
        },
      },
      ru: {
        title: 'Репродуктивная медицина (ЭКО)',
        secondaryLabel: 'Лечение бесплодия',
        description: 'Вспомогательные репродуктивные технологии согласно индийским клиническим стандартам.',
        statusLabel: 'По запросу',
        metaTitle: 'Репродуктивная медицина (ЭКО) | Направления лечения | Nuhavi Health',
        metaDescription: 'Организация программ ЭКО, ИКСИ и лечения бесплодия в профильных репродуктивных центрах Индии согласно законам ART.',
        whatThisCovers: [
          'Программы экстракорпорального оплодотворения (ЭКО) и ИКСИ (ICSI)',
          'Комплексное обследование репродуктивной системы обоих партнеров',
          'Преимплантационное генетическое тестирование (ПГТ) по медицинским показаниям',
          'Криоконсервация эмбрионов и половых клеток',
          'Диагностическая и лечебная гистероскопия и лапароскопия',
        ],
        scopeDisclaimer: 'Все программы ВРТ в Индии строго регулируются законом о вспомогательных репродуктивных технологиях (ART Act). Иностранные пациенты проходят проверку соответствия регламентам.',
        conditions: [
          { title: 'Женское бесплодие', description: 'Трубно-перитонеальный фактор, эндокринные нарушения, сниженный овариальный резерв.' },
          { title: 'Мужской фактор бесплодия', description: 'Тяжелые формы олигозооспермии, азооспермия, биопсия яичка (TESA/TESE).' },
          { title: 'Неудачи имплантации в анамнезе', description: 'Оценка рецептивности эндометрия и коррекция протоколов стимуляции.' },
        ],
        recordsGuidance: {
          intro: 'Гормональный профиль и протоколы предыдущих попыток позволяют репродуктологам оценить шансы и скорректировать протокол.',
          items: [
            'Анализы крови на гормоны (АМГ, ФСГ, ЛГ, эстрадиол, пролактин, ТТГ)',
            'Протокол УЗИ органов малого таза с подсчетом антральных фолликулов',
            'Оценка проходимости маточных труб (ГСГ или лапароскопия)',
            'Спермограмма партнера по критериям ВОЗ (давностью не более 3 месяцев)',
            'Эмбриологические протоколы предыдущих программ ЭКО при их наличии',
          ],
          disclaimer: 'Репродуктологи клиники проведут контрольное УЗИ и обязательные тесты на инфекционную группу перед стартом стимуляции.',
        },
      },
      ar: {
        title: 'علاج العقم وتأخر الإنجاب (أطفال الأنابيب)',
        secondaryLabel: 'الخصوبة والإنجاب',
        description: 'تقنيات المساعدة على الإنجاب المتطورة وفق اللوائح الطبية الهندية المنظمة.',
        statusLabel: 'حسب الطلب',
        metaTitle: 'علاج العقم وتأخر الإنجاب (أطفال الأنابيب) | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق برامج أطفال الأنابيب (IVF) وعلاج تأخر الإنجاب في مراكز الخصوبة المعتمدة في الهند وفق اللوائح الطبية المنظمة.',
        whatThisCovers: [
          'برامج أطفال الأنابيب (IVF) والحقن المجهري للبويضات (ICSI)',
          'الفحوصات الهرمونية الشاملة وعلاج اضطرابات الإباضة والخصوبة للزوجين',
          'الفحص الجيني المبكر للأجنة (PGT) وفق المعايير الطبية المعتمدة',
          'تقنيات التجميد المتقدم للأجنة والبويضات',
          'مناظير الرحم والبطن التشخيصية والعلاجية لتهيئة بطانة الرحم',
        ],
        scopeDisclaimer: 'تخضع جميع إجراءات المساعدة على الإنجاب في الهند لقوانين وضوابط تقنيات المساعدة على الإنجاب (قانون ART Act) والقوانين المنظمة للزوار الدوليين.',
        conditions: [
          { title: 'تأخر الإنجاب لدى المرأة', description: 'انسداد قنوات فالوب، وضعف مخزون المبيض، وتكيسات المبايض المتقدمة.' },
          { title: 'عقم الرجال وضعف الحيوانات المنوية', description: 'قلة الحيوانات المنوية الشديدة، وانعدامها، وسحب العينات مجهرياً (TESA/TESE).' },
          { title: 'فشل محاولات الزراعة السابقة', description: 'فحص مستقبلات بطانة الرحم وتعديل البروتوكولات العلاجية لرفع فرص النجاح.' },
        ],
        recordsGuidance: {
          intro: 'يساعد توفير التحاليل الهرمونية للزوجة وتحليل السائل المنوي للزوج في بناء خطة علاجية مخصصة.',
          items: [
            'تحاليل هرمونات الخصوبة (هرمون مخزون المبيض AMH، و FSH، و LH، و Prolactin، و TSH)',
            'تقرير سونار الحوض موضحاً عدد الحويصلات وسلامة تجويف الرحم',
            'تقرير أشعة الصبغة للرحم والأنابيب (HSG) للتأكد من سلامة القنوات',
            'تحليل السائل المنوي للزوج وفق معايير منظمة الصحة العالمية الحديثة',
            'تقارير المحاولات السابقة لأطفال الأنابيب وتفاصيل جودة الأجنة إن وجدت',
          ],
          disclaimer: 'يقوم استشاري الخصوبة بالمستشفى بإجراء سونار تأكيدي وفحوصات السلامة المعتمدة قبل بدء دورة العلاج.',
        },
      },
    },
  },

  // 10. Ophthalmology
  {
    id: 'ophthalmology',
    slug: 'ophthalmology',
    status: 'on-request',
    image: {
      src: '/images/treatment-ophthalmology.jpg',
      alt: {
        en: 'Advanced ophthalmic slit lamp biomicroscope and digital retinal examination workstation',
        ru: 'Офтальмологическая щелевая лампа и цифровая ретинальная диагностика',
        ar: 'جهاز فحص العيون بالمصباح الشقي وتصوير الشبكية الرقمي',
      },
    },
    content: {
      en: {
        title: 'Ophthalmology',
        secondaryLabel: 'Eye care',
        description: 'Complex corneal procedures, vitreo-retinal surgery, and advanced eye care.',
        statusLabel: 'On request',
        metaTitle: 'Ophthalmology | Treatments | Nuhavi Health',
        metaDescription: 'Coordination for advanced eye care, corneal transplantation, vitreoretinal surgery, and complex glaucoma procedures with leading eye institutes in India.',
        whatThisCovers: [
          'Full-thickness and lamellar corneal transplantation (DALK, DSEK, DMEK)',
          'Vitreoretinal surgery for retinal detachment, diabetic retinopathy, and macular holes',
          'Advanced glaucoma filtration procedures and valve / shunt implantations',
          'Complex paediatric ophthalmology and strabismus (squint) correction',
          'Oculoplastic surgery and orbital reconstructive procedures',
        ],
        scopeDisclaimer: 'Corneal donor tissue availability is coordinated in strict compliance with the National Eye Bank framework in India. Surgical feasibility requires comprehensive direct slit-lamp examination.',
        conditions: [
          { title: 'Corneal diseases and keratoconus', description: 'Corneal scarring, dystrophies, and keratoconus managed by collagen cross-linking (CXL) or corneal grafting.' },
          { title: 'Vitreoretinal disorders', description: 'Retinal detachment repair, proliferative diabetic retinopathy, and vitreous haemorrhage clearance.' },
          { title: 'Refractory glaucoma', description: 'Uncontrolled intraocular pressure requiring trabeculectomy or glaucoma drainage device implantation.' },
          { title: 'Complex pediatric eye conditions', description: 'Congenital cataracts, paediatric glaucoma, and complex squint corrections.' },
        ],
        recordsGuidance: {
          intro: 'Detailed ophthalmic examination reports, optical coherence tomography (OCT), and corneal scans enable eye specialists to evaluate your case.',
          items: [
            'Recent visual acuity measurements (best-corrected visual acuity - BCVA)',
            'Optical Coherence Tomography (OCT) scan reports of the macula or optic nerve head',
            'Corneal topography (Pentacam) or pachymetry reports if corneal disease is suspected',
            'B-Scan ocular ultrasonography reports in cases of opaque media or dense vitreous haemorrhage',
            'Summary of intraocular pressure readings (IOP) and current antiglaucoma eye drops',
          ],
          disclaimer: 'Hospital eye specialists will conduct comprehensive in-person slit-lamp examinations, dilated fundus evaluations, and repeat scans upon arrival.',
        },
      },
      ru: {
        title: 'Офтальмология',
        secondaryLabel: 'Зрение',
        description: 'Сложные операции на роговице, витреоретинальная хирургия и микрохирургия глаза.',
        statusLabel: 'По запросу',
        metaTitle: 'Офтальмология | Направления лечения | Nuhavi Health',
        metaDescription: 'Высокотехнологичная офтальмохирургия в Индии: пересадка роговицы, витреоретинальные операции, хирургия глаукомы.',
        whatThisCovers: [
          'Послойная и сквозная кератопластика (пересадка роговицы: DALK, DSEK, DMEK)',
          'Витреоретинальная хирургия (разрывы и отслойки сетчатки, диабетическая ретинопатия)',
          'Хирургическое лечение рефрактерной глаукомы и имплантация дренажей',
          'Детская микрохирургия глаза и исправление косоглазия',
          'Окулопластические и орбитальные реконструктивные операции',
        ],
        scopeDisclaimer: 'Предоставление донорской ткани роговицы регулируется правилами Национального глазного банка Индии. Процедура планируется заблаговременно.',
        conditions: [
          { title: 'Заболевания роговицы и кератоконус', description: 'Кератоконус, дистрофии и рубцы роговицы, кросслинкинг (CXL), кератопластика.' },
          { title: 'Патологии сетчатки и стекловидного тела', description: 'Отслойка сетчатки, макулярные разрывы, гемофтальм, диабетические поражения.' },
          { title: 'Глаукома с высоким внутриглазным давлением', description: 'Трабекулэктомия и клапанная хирургия при неэффективности капельного режима.' },
        ],
        recordsGuidance: {
          intro: 'Офтальмологам необходимы данные оптической когерентной томографии (ОКТ) и параметры остроты зрения.',
          items: [
            'Данные о максимально корригированной остроте зрения (МКОЗ)',
            'Протоколы и снимки оптической когерентной томографии (ОКТ сетчатки / зрительного нерва)',
            'Кератотопография роговицы (Pentacam) при кератоконусе или заболеваниях роговицы',
            'В-сканирование глаза (УЗИ глазного яблока) при непрозрачности оптических сред',
            'Данные о показателях внутриглазного давления (ВГД) и используемых каплях',
          ],
          disclaimer: 'В клинике проводится углубленная биомикроскопия глаза на щелевой лампе и повторная томография перед операцией.',
        },
      },
      ar: {
        title: 'طب وجراحة العيون',
        secondaryLabel: 'رعاية العيون',
        description: 'عمليات القرنية المتقدمة، وجراحة الشبكية والجسم الزجاجي، وتصحيح الإبصار.',
        statusLabel: 'حسب الطلب',
        metaTitle: 'طب وجراحة العيون | التخصصات الطبية | نوهـافي هيلث',
        metaDescription: 'تنسيق عمليات زراعة القرنية، وجراحة شبكية العين، وعلاج المياه الزرقاء المعقدة في مراكز العيون المتقدمة في الهند.',
        whatThisCovers: [
          'زراعة القرنية الطبقية والكاملة (DMEK / DSEK / DALK)',
          'جراحة الشبكية والجسم الزجاجي لعلاج انفصال الشبكية واعتلال الشبكية السكري',
          'علاج الجلوكوما (المياه الزرقاء) بالصمامات الحديثة والجراحة الميكروسكوبية',
          'طب وجراحة عيون الأطفال وتصحيح الحول الدقيق',
          'جراحات تجميل وترميم الجفون والمدار العيني',
        ],
        scopeDisclaimer: 'تخضع زراعة أنسجة القرنية لقوانين وضوابط بنك العيون الوطني الهندي، ويتم تأكيد موعد العملية بعد استكمال الفحص المباشر.',
        conditions: [
          { title: 'أمراض القرنية والقرنية المخروطية', description: 'علاج القرنية المخروطية بالتثبيت الضوئي (CXL) وعمليات زراعة وترقيع القرنية.' },
          { title: 'اعتلال وانفصال الشبكية', description: 'إعادة تثبيت الشبكية جراحياً، واستئصال الجسم الزجاجي في حالات النزيف السكري.' },
          { title: 'الجلوكوما المتقدمة المستعصية', description: 'عمليات تصريف سائل العين وتركيب الصمامات لخفض ضغط العين وحماية العصب البصري.' },
        ],
        recordsGuidance: {
          intro: 'يساعد تقرير فحص قاع العين وصور الأشعة المقطعية للشبكية (OCT) في تقديم التقييم المبدئي بدقة.',
          items: [
            'تقرير يوضح حدة الإبصار الحالية مع النظارة الطبية وبدونها (BCVA)',
            'تقرير وصور الأشعة المقطعية لشبكية العين أو العصب البصري (OCT)',
            'تخطيط وتضاريس القرنية (Pentacam) في حالات القرنية المخروطية',
            'أشعة السونار للعين (B-Scan) في حالات عتامة العين أو نزيف السائل الزجاجي',
            'قياسات ضغط العين الحديثة وقائمة قطرات العيون المستخدمة',
          ],
          disclaimer: 'يقوم استشاري طب وجراحة العيون في المستشفى بإجراء الفحص المجهري المباشر بالمصباح الشقي وفحص قاع العين الموسع فور الوصول.',
        },
      },
    },
  },
];

/**
 * Helper to fetch a specialty definition by ID or slug
 */
export function getSpecialtyBySlugOrId(identifier: string): SpecialtyDefinition | undefined {
  return specialtiesList.find((s) => s.slug === identifier || s.id === identifier);
}

/**
 * Helper to get specialties filtered by status
 */
export function getSpecialtiesByStatus(status: 'accepting' | 'on-request'): SpecialtyDefinition[] {
  return specialtiesList.filter((s) => s.status === status);
}

