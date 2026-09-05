import { L, P, S, SL, contacts } from '../l10n-helpers.js';

/**
 * ЗДАНИЕ №2 — ул. Сайилгох, 35 (учебный корпус №2).
 * Источник: «2 eng.txt» / «2 ru.txt».
 * Факультеты, международное сотрудничество, Moot Court, библиотеки.
 */
export const building2 = {
  id: 'b2',
  number: 2,
  slug: 'building-2',
  name: L('Учебное здание №2', 'Academic Building No. 2', '2-o‘quv binosi'),
  short: L('Здание №2', 'Building 2', '2-bino'),
  subtitle: L(
    'Факультеты, международное сотрудничество, Moot Court и специальные библиотеки',
    'Faculties, international cooperation, Moot Court and special libraries',
    'Fakultetlar, xalqaro hamkorlik, Moot Court va maxsus kutubxonalar'
  ),
  address: L(
    'г. Ташкент, ул. Сайилгох, 35',
    'Tashkent, 35 Sayilgokh Street',
    'Toshkent sh., Sayilgoh ko‘chasi, 35'
  ),
  floors: [1, 2],
  accent: 'from-tsul-600/70 to-tsul-900/70',

  units: [
    /* ------------------------------------------------------------------ */
    {
      id: 'b2-faculty-public',
      category: 'faculty',
      floor: 2,
      rooms: ['123'],
      name: L('Факультет публичного права', 'Public Law Faculty', 'Ommaviy huquq fakulteti'),
      summary: L(
        '6 кафедр: теория государства и права, конституционное, административное, экологическое право',
        '6 departments: theory of state and law, constitutional, administrative, environmental law',
        '6 ta kafedra: davlat va huquq nazariyasi, konstitutsiyaviy, ma’muriy huquq'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, учебное здание №2, второй этаж ТГЮУ, кабинет №123',
        'Tashkent city, Sayilgokh street, 35, TSUL academic building No. 2, second floor, room No. 123'
      ),
      motto: L('«Справедливость — в верховенстве закона»', '"Justice lies in the rule of law."'),
      sections: [
        S(
          'about',
          'Публичное право — это совокупность отраслей права, регулирующих отношения, обеспечивающие общественные интересы. Поэтому создание этого факультета предполагает уделить особое внимание внедрению современных тенденций в публичном праве, конституционных, административных отношениях и области нормотворчества. Студенты, обучающиеся на факультете публичного права, имеют возможность приобрести современные знания и навыки, необходимые для будущей работы в Олий Мажлисе Республики Узбекистан, органах исполнительной власти, в том числе органах юстиции, прокуратуре, частном секторе и в институтах гражданского общества.',
          'Public law is a collection of branches of law that regulate relations ensuring public interests. Therefore, the creation of this faculty implies paying special attention to the implementation of modern trends in public law, constitutional, administrative relations, and the field of lawmaking. Students studying at the Faculty of Public Law have the opportunity to acquire modern knowledge and skills necessary for future work in the Oliy Majlis of the Republic of Uzbekistan, executive authorities, including justice bodies, prosecutor’s office, private sector, and civil society institutions.'
        ),
        S(
          'goal',
          'Обеспечить получение студентами необходимых знаний и навыков в области нормотворчества и правоприменения.',
          'To ensure that students receive the necessary knowledge and skills in the field of lawmaking and law enforcement.'
        ),
        S(
          'tasks',
          'Подготовка кадров, отвечающих современным международным стандартам, укрепление профессорско-преподавательского состава специалистами с высокими профессиональными педагогическими навыками, правовой и политической культурой, практическим опытом; организация учебного процесса на основе современных форм и методов обучения, инновационных педагогических и информационных технологий; развитие системы подготовки специалистов со специальными знаниями и навыками в этой области с целью дальнейшего развития процесса нормотворчества; усиление научного потенциала факультета, широкое вовлечение молодёжи в научную деятельность, координация научно-исследовательской и инновационной деятельности, вовлечение в исследовательские проекты и обеспечение связи образования и науки; организация научно-исследовательской работы с учётом индикаторов зарубежных и отечественных рейтингов.',
          'Training personnel that meet modern international standards, strengthening the teaching staff with specialists possessing high professional pedagogical skills, legal and political culture, and practical experience; organizing the educational process based on modern forms and methods of teaching, innovative pedagogical and information technologies; developing a system of training specialists with special knowledge and skills in this area in order to further develop the lawmaking process; strengthening the scientific potential of the faculty, wide involvement of youth in scientific activity, coordination of research and innovation activities, involvement in research projects, and ensuring the connection between education and science; organization of research work taking into account the indicators of foreign and domestic rankings.'
        ),
        SL(
          'structure',
          [
            'Кафедра теории государства и права;',
            'Кафедра конституционного права;',
            'Кафедра административного и финансового права;',
            'Кафедра экологического права;',
            'Кафедра общеобразовательных дисциплин и культуры;',
            'Кафедра узбекского языка и литературы.',
          ],
          [
            'Department of Theory of State and Law;',
            'Department of Constitutional Law;',
            'Department of Administrative and Financial Law;',
            'Department of Environmental Law;',
            'Department of General Education Disciplines and Culture;',
            'Department of Uzbek Language and Literature.',
          ]
        ),
        S(
          'activity',
          'Профессора и преподаватели, работающие на кафедрах, обучают студентов в интерактивном режиме, используя передовые педагогические технологии.',
          'Professors and lecturers working at the departments teach students interactively using advanced pedagogical technologies.'
        ),
      ],
      staff: [P(['Макамов Дурбек Нематович', 'декан факультета публичного права'], ["Makamov Durbek Ne'matovich", 'Dean of the Faculty of Public Law'], ["Makamov Durbek Ne'matovich", 'Ommaviy huquq fakulteti dekani'])],
      audience: L(
        'Могут обращаться абитуриенты и их родители, интересующиеся программами бакалавриата, условиями поступления, стоимостью контрактного обучения и профилями образовательных программ. Кроме того, к деканату регулярно обращаются сами студенты по различным учебным вопросам: составление расписания, содержание модулей, пересдачи экзаменов, академическая мобильность и другие аспекты учебного процесса.',
        'Applicants and their parents interested in undergraduate programs, admission conditions, tuition fees, and educational program profiles can contact them. In addition, students themselves regularly contact the dean’s office on various academic issues: schedule composition, module content, exam retakes, academic mobility, and other aspects of the educational process.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-faculty-criminal',
      category: 'faculty',
      floor: 2,
      rooms: ['217'],
      name: L('Факультет уголовного правосудия', 'Faculty of Criminal Justice', 'Jinoiy odil sudlov fakulteti'),
      summary: L(
        '4 кафедры, деканат, тьюторы; подготовка кадров для уголовного правосудия',
        '4 departments, dean’s office, tutors; training for criminal justice',
        '4 ta kafedra, dekanat, tyutorlar'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, 2-й учебный корпус, кабинет №217',
        'Tashkent city, Sayilgokh street, 35, Tashkent State University of Law, 2nd academic building, room 217'
      ),
      motto: L(
        'Судья — это говорящий закон, а закон — молчаливый судья',
        'A judge is a speaking law, and the law is a silent judge'
      ),
      sections: [
        S(
          'about',
          'Факультет уголовного правосудия Ташкентского государственного юридического университета создан в соответствии с Указом Президента Республики Узбекистан от 29 апреля 2020 года № УП-5987 «О дополнительных мерах по кардинальному совершенствованию юридического образования и науки в Республике Узбекистан».',
          'The Faculty of Criminal Justice of Tashkent State University of Law was established in accordance with Decree of the President of the Republic of Uzbekistan dated April 29, 2020, No. UP-5987 "On additional measures for fundamental improvement of legal education and science in the Republic of Uzbekistan."'
        ),
        S(
          'goal',
          'Подготовка профессиональных юридических кадров, которые будут осуществлять уголовное правосудие и обеспечивать верховенство закона.',
          'To train professional legal personnel who will administer criminal justice and ensure the rule of law.'
        ),
        S(
          'principle',
          '«Равные знания, равные возможности и целеустремлённость».',
          '"Equal knowledge, equal opportunities, and determination."'
        ),
        SL(
          'tasks',
          [
            'организация учебного процесса на основе современных форм и методов педагогического, информационно-коммуникационного, инновационного технологий обучения, подготовка высококвалифицированных юридических кадров, отвечающих самым высоким требованиям гражданского общества и современным международным стандартам;',
            'широкое вовлечение молодёжи в научно-исследовательскую работу, усиление научного потенциала кафедр;',
            'подготовка научно-педагогических кадров, соответствующих современным мировым стандартам, усиление профессорско-преподавательского состава специалистами с высокими профессиональными педагогическими навыками, правовой и политической культурой, практическим опытом;',
            'организация учебно-исследовательской работы с учётом зарубежных и отечественных рейтинговых показателей;',
            'установление регулярных контактов с судебными, правоохранительными органами, правозащитными и другими организациями для обучения студентов и их дальнейшей ориентации в профессии.',
          ],
          [
            'organization of the educational process based on modern forms and methods of pedagogical, information-communication, and innovative learning technologies, preparation of highly qualified legal personnel who meet the highest requirements of civil society and modern international standards;',
            'broad involvement of youth in research work, strengthening the scientific potential of the departments;',
            'preparation of scientific-pedagogical personnel corresponding to modern world standards, strengthening the teaching staff with specialists possessing high professional pedagogical skills, legal and political culture, and practical experience;',
            'organization of educational and research work taking into account foreign and domestic ranking indicators;',
            'establishing regular contacts with judicial, law enforcement agencies, human rights, and other organizations for training students and their further career orientation.',
          ]
        ),
        S(
          'structure',
          'В факультете осуществляют свою деятельность декан, заместитель декана по учебной части, заместитель декана по делам молодёжи, заместитель декана по международному сотрудничеству и научно-инновационным делам, методист, диспетчер по учебной части и делопроизводители. В состав факультета входят 4 кафедры: Кафедра уголовного права, криминологии и противодействия коррупции; Кафедра уголовно-процессуального права; Кафедра судебных, правоохранительных органов и адвокатуры; Кафедра криминалистики и судебной экспертизы.',
          'The faculty carries out its activities through the dean, vice-dean for academic affairs, vice-dean for youth affairs, vice-dean for international cooperation and scientific-innovative affairs, methodologist, dispatcher for academic affairs, and office managers. The Faculty of Criminal Justice consists of 4 departments: Department of Criminal Law, Criminology and Anti-Corruption; Department of Criminal Procedure Law; Department of Courts, Law Enforcement Agencies and Advocacy; Department of Forensics and Judicial Expertise.'
        ),
      ],
      staff: [
        P(
          ['Камалова Дилдора Гайратовна', 'декан факультета уголовного правосудия. Научные интересы: уголовное право, криминология, противодействие коррупции, уголовно-исполнительное право, адвокатура, судебная деятельность, правоохранительные органы'],
          ['Kamalova Dildora Gayratovna', 'Dean of the Faculty of Criminal Justice. Research interests: criminal law, criminology, anti-corruption, penal law, advocacy, judicial activity, law enforcement agencies']
        ),
        P(
          ['Мамасобиров Давронбек Эрназарович', 'заместитель декана по учебной работе. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, судебная система и правоохранительные органы'],
          ['Mamasobirov Davronbek Ernazarovich', 'Vice-Dean for Academic Affairs. Research interests: criminal law, criminal procedure law, advocacy, judicial system, and law enforcement agencies']
        ),
        P(
          ['Нодиров Музаффар Ахмад угли', 'заместитель декана по делам молодёжи и духовному просвещению. Научные интересы: уголовное право, уголовно-процессуальное право, теория доказательств, адвокатура, судебные и правоохранительные органы, оперативно-розыскная деятельность'],
          ['Nodirov Muzaffar Akhmad ugli', 'Vice-Dean for Youth Affairs and Spiritual and Enlightenment Work. Research interests: criminal law, criminal procedure law, theory of evidence, advocacy, judicial and law enforcement agencies, operational-search activity']
        ),
        P(
          ['Абдусамадов Дилмурод Фарход огли', 'тьютор. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, судебная система и правоохранительные органы'],
          ['Abdusamadov Dilmurod Farkhod ogli', 'Tutor. Research interests: criminal law, criminal procedure law, advocacy, judicial system, and law enforcement agencies']
        ),
        P(
          ['Меликузиев Фазлиддин Абдурасул угли', 'тьютор. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, бизнес-право'],
          ['Melikuziev Fazliddin Abdurasul ugli', 'Tutor. Research interests: criminal law, criminal procedure law, advocacy, business law']
        ),
        P(
          ['Толибжонов Хаётжон Муродович', 'тьютор. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, судебная система и правоохранительные органы'],
          ['Tolibjonov Khayotjon Murodovich', 'Tutor. Research interests: criminal law, criminal procedure law, advocacy, judicial system, and law enforcement agencies']
        ),
        P(
          ['Махмудов Хуршид Гафурович', 'тьютор. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, криминалистика, криминология, судебная система и правоохранительные органы'],
          ['Makhmudov Khurshid Gafurovich', 'Tutor. Research interests: criminal law, criminal procedure law, advocacy, forensics, criminology, judicial system, and law enforcement agencies']
        ),
      ],
      audience: L(
        'Могут обращаться абитуриенты и их родители, интересующиеся программами бакалавриата, условиями поступления, стоимостью контрактного обучения и профилями образовательных программ. Кроме того, к деканату регулярно обращаются сами студенты по различным учебным вопросам: составление расписания, содержание модулей, пересдачи экзаменов, академическая мобильность и другие аспекты учебного процесса.',
        'Applicants and their parents interested in undergraduate programs, admission conditions, tuition fees, and educational program profiles can contact them. In addition, students themselves regularly contact the dean’s office on various academic issues: schedule composition, module content, exam retakes, academic mobility, and other aspects of the educational process.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-dep-courts',
      category: 'department',
      floor: 2,
      rooms: ['208'],
      name: L(
        'Кафедра суда, правоохранительных органов и адвокатуры',
        'Department of Courts, Law Enforcement Agencies and Advocacy',
        'Sud, huquqni muhofaza qiluvchi organlar va advokatura kafedrasi'
      ),
      summary: L(
        'Судебная власть, прокурорский надзор, адвокатура; кружки «Legal Protector» и «Молодые прокуроры»',
        'Judicial power, prosecutorial supervision, advocacy; "Legal Protector" and "Young Prosecutors" clubs',
        'Sud hokimiyati, prokuror nazorati, advokatura'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, 2-е учебное здание, второй этаж ТГЮУ, комната №208',
        'Tashkent city, Sayilgokh street, 35, 2nd academic building, second floor of TSUL, room No. 208'
      ),
      motto: L('Путь истины', 'The Path of Truth'),
      sections: [
        S(
          'goal',
          'Кафедра суда, правоохранительных органов и адвокатуры является одной из ведущих кафедр университета и проводит учебные и научно-исследовательские работы в следующих профильных сферах: судебная власть, прокурорский надзор, организация правоохранительной деятельности и адвокатура. Мы ставим целью всестороннее изучение правоохранительных органов в нашей стране и во всём мире, ознакомление с международным опытом в этой области, а также исследование и разработку различных нормативных актов в данной сфере. В настоящее время по данному направлению работы мы сотрудничаем с Министерством юстиции, Верховным судом, Палатой адвокатов и практикующими адвокатами, а также правоохранительными органами.',
          'The Department of Courts, Law Enforcement Agencies and Advocacy is one of the leading departments of the university and conducts educational and research work in the following profile areas: judicial power, prosecutorial supervision, organization of law enforcement activities, and advocacy. We aim to comprehensively study law enforcement agencies in our country and around the world, familiarize with international experience in this area, as well as research and develop various regulatory acts in this sphere. Currently, in this area of work, we cooperate with the Ministry of Justice, the Supreme Court, the Chamber of Advocates, practicing lawyers, and law enforcement agencies.'
        ),
        SL(
          'subjects',
          [
            'Бакалавриат: «Судебная власть», «Адвокатура», «Восстановительное правосудие» (Restorative Justice), «Прокурорская деятельность», «Исполнительное производство»;',
            'Магистратура: «Адвокатура и адвокатская деятельность».',
          ],
          [
            'Undergraduate: "Judicial Power", "Advocacy", "Restorative Justice", "Prosecutorial Activity", "Enforcement Proceedings";',
            'Graduate: "Advocacy and Legal Practice".',
          ]
        ),
        S(
          'capacity',
          'Кафедра создана приказом ректора Ташкентского государственного юридического университета от 1 июня 2020 года №08-100 «О мерах по дальнейшему совершенствованию деятельности Ташкентского государственного юридического университета». За период июнь 2023 года — январь 2024 кафедрой опубликовано: 2 монографии; 10 научных статей; 1 статья в научных журналах, входящих в базу данных Scopus. Кроме того, проведены 1 международная конференция и научный семинар, 1 республиканская научная конференция и круглый стол. При кафедре действуют кружок «Legal Protector» и клуб «Молодые прокуроры»; в их рамках регулярно проводятся научные мероприятия.',
          'The department was created by order of the Rector of Tashkent State University of Law dated June 1, 2020, No. 08-100 "On measures to further improve the activities of Tashkent State University of Law." The department during the period of June 2023 – January 2024 has published: 2 monographs; 10 scientific articles; 1 article in scientific journals indexed in the Scopus database. In addition, the following were held: 1 international conference and scientific seminar, 1 republican scientific conference and round table. The student club "Legal Protector" and the club "Young Prosecutors" operate under the department. Scientific events are regularly held within these clubs.'
        ),
      ],
      staff: [
        P(['Джураев Ихтиёр Бахтиярович', 'заведующий кафедрой, доктор юридических наук (DSc)'], ['Dzhuraev Ikhtiyor Bakhtiyarovich', 'Head of the Department, Doctor of Law (DSc)']),
        P(['Неъматов Жасур Аминжонович', 'профессор кафедры, доктор юридических наук (DSc)'], ["Ne'matov Zhasur Aminzhonovich", 'Professor of the Department, Doctor of Law (DSc)']),
        P(['Нурумов Дилшодбек Джумабаевич', 'и.о. профессора кафедры (PhD)'], ['Nurumov Dilshodbek Dzhumabaevich', 'Acting Professor of the Department (PhD)']),
        P(['Маткаримов Кудрат Каландарович', 'и.о. доцента кафедры, доктор юридических наук (DSc)'], ['Matkarimov Kudrat Kalandarovich', 'Acting Associate Professor, Doctor of Law (DSc)']),
        P(['Матмуротов Алибек Равилович', 'и.о. доцента кафедры (PhD)'], ['Matmurotov Alibek Ravilovich', 'Acting Associate Professor (PhD)']),
        P(['Мардонов Камол Каромат угли', 'старший преподаватель кафедры'], ['Mardonov Kamol Karomat ugli', 'Senior Lecturer of the Department']),
        P(['Турдалиев Джамшид Джамолович', 'старший преподаватель кафедры'], ['Turdaliev Dzhamshid Dzhamolovich', 'Senior Lecturer of the Department']),
        P(['Кодиралиев Саддам Бахтиёржон угли', 'старший преподаватель кафедры'], ['Kodiraliev Saddam Bakhtiyorzhon ugli', 'Senior Lecturer of the Department']),
        P(['Хакимова Камола Фаррух кизи', 'преподаватель кафедры'], ['Khakimova Kamola Farrukh kizi', 'Lecturer of the Department']),
      ],
      audience: L(
        'Студенты могут обращаться по различным вопросам в сфере деятельности кафедры, а также по вопросам подачи апелляции по результатам промежуточных контрольных работ.',
        'Students can contact on various issues within the department’s sphere of activity, as well as on filing appeals based on the results of mid-term control works.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-dep-general',
      category: 'department',
      floor: 2,
      rooms: ['206'],
      name: L(
        'Кафедра общеобразовательных дисциплин и культуры',
        'Department of General Education Disciplines and Culture',
        'Umumta’lim fanlari va madaniyat kafedrasi'
      ),
      summary: L(
        'Общественно-гуманитарные науки, экономика для юристов, Legal Tech',
        'Social sciences and humanities, economics for lawyers, Legal Tech',
        'Ijtimoiy-gumanitar fanlar, yuristlar uchun iqtisod, Legal Tech'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, учебное здание №2, второй этаж, аудитория №206',
        'Tashkent city, Sayilgokh street, 35, TSUL, academic building No. 2, second floor, room No. 206'
      ),
      motto: L('Знание — залог прогресса', 'Knowledge is the key to progress'),
      sections: [
        S(
          'goal',
          'Кафедра общеобразовательных дисциплин и культуры является одной из ведущих кафедр университета, которая ведёт учебную и научно-исследовательскую работу по 3 направлениям: «Общественно-гуманитарные науки», «Основы экономики и управления» и «Правовые информационные технологии». Мы стремимся в полной мере изучить научные сферы и процессы, связанные с социально-политическими, экономическими и современными правовыми информационными технологиями в нашей стране и мире, ознакомиться с международным опытом в этих областях и исследовать различные нормативные документы. В настоящее время мы сотрудничаем с Министерством юстиции, Национальной ассоциацией негосударственных некоммерческих организаций, политическими партиями и высшими учебными заведениями республики.',
          'The Department of General Education Disciplines and Culture is one of the leading departments of the university, conducting educational and research work in 3 areas: "Social Sciences and Humanities", "Fundamentals of Economics and Management", and "Legal Information Technologies". We strive to fully study the scientific fields and processes related to socio-political, economic, and modern legal information technologies in our country and the world, familiarize ourselves with international experience in these fields, and study various regulatory documents. Currently, we cooperate with the Ministry of Justice, the National Association of Non-Governmental Non-Profit Organizations, political parties, and higher educational institutions of the republic.'
        ),
        SL(
          'subjects',
          [
            'Бакалавриат (7 модулей): Правовые навыки и методология (Legal Skills and Methodology); Основы экономики для юристов (Economics for Lawyers); Микроэкономика и макроэкономика; Правовые информационные технологии (Legal tech); Философия; Управление правовыми проектами (Legal Project Management); Философия права (Legal philosophy); Методология исследования и навыки; Социология; Право и общественные науки;',
            'Магистратура (4 модуля): Методология научных (правовых) исследований (Advanced Legal Research Methods); Принятие стратегических решений для юристов (Strategic Decision Making for Lawyers); Корпоративное управление (Corporate Governance); Цифровые права и этика в социальных сетях.',
          ],
          [
            'Undergraduate (7 modules): Legal Skills and Methodology; Economics for Lawyers; Microeconomics and Macroeconomics; Legal Information Technologies (Legal tech); Philosophy; Legal Project Management; Legal Philosophy; Research Methodology and Skills; Sociology; Law and Social Sciences;',
            'Graduate (4 modules): Advanced Legal Research Methods; Strategic Decision Making for Lawyers; Corporate Governance; Digital Law and Ethics in Social Networks.',
          ]
        ),
        S(
          'capacity',
          'За последние три года кафедрой издано и опубликовано: 7 монографий; 10 учебников; научные статьи в более чем 20 журналах с высоким импакт-фактором; 16 статей в Scopus-журналах. Также проведено 5 международных конференций, 7 республиканских научных конференций и круглых столов.',
          'Over the past three years, the department has issued and published: 7 monographs; 10 textbooks; scientific articles in more than 20 journals with a high impact factor; 16 articles in Scopus journals. Also conducted: 5 international conferences; 7 republican scientific conferences and round tables.'
        ),
        S(
          'programs',
          'При кафедре действуют студенческие научные кружки «Legal philosophy», «Прикладная экономика», «Тафаккур». Участвуя в этих кружках, студенты университета укрепляют свои знания и навыки в области философии права, политики, экономики.',
          'Student scientific clubs "Legal philosophy", "Applied Economics", and "Tafakkur" operate under the department. Participating in these clubs, university students strengthen their knowledge and skills in the field of legal philosophy, politics, and economics.'
        ),
      ],
      staff: [
        P(['Носирходжаева Гулнора Абдукаххаровна', 'заведующая кафедрой, кандидат философских наук, доцент'], ['Nosirkhodzhaeva Gulnora Abdukakkharovna', 'Head of the Department, Candidate of Philosophical Sciences, Associate Professor']),
        P(['Кучкаров Рахмон Урманович', 'кандидат филологических наук, доцент'], ['Kuchkarov Rakhmon Urmanovich', 'Candidate of Philological Sciences, Associate Professor']),
        P(['Азимов Хакимали Имомович', 'кандидат исторических наук, доцент'], ['Azimov Khakimali Imomovich', 'Candidate of Historical Sciences, Associate Professor']),
        P(['Каримов Акрамжон Зайнобидинович', 'кандидат физико-математических наук, доцент'], ['Karimov Akramzhon Zainobidinovich', 'Candidate of Physical and Mathematical Sciences, Associate Professor']),
        P(['Юнусова Мунаввархон Сабировна', 'доктор философии (PhD) по педагогике, доцент'], ['Yunusova Munavvarkhon Sabirovna', 'Doctor of Philosophy (PhD) in Pedagogy, Associate Professor']),
        P(['Шоякубов Шомансур Шакабилович', 'кандидат исторических наук, старший преподаватель'], ['Shoyakubov Shomansur Shakabilovich', 'Candidate of Historical Sciences, Senior Lecturer']),
        P(['Таджибаева Дильнавоз Озодовна', 'старший преподаватель'], ['Tadzhibaeva Dilnavoz Ozodovna', 'Senior Lecturer']),
        P(['Хусаинова Фируза Тохировна', 'старший преподаватель'], ['Khusainova Firuza Tokhirovna', 'Senior Lecturer']),
        P(['Обломуродова Хабиба Наимовна', 'доктор философии (PhD) по философии, старший преподаватель'], ['Oblomurodova Khabiba Naimovna', 'Doctor of Philosophy (PhD) in Philosophy, Senior Lecturer']),
        P(['Ибрагимов Кудрат Давлетбаевич', 'старший преподаватель'], ['Ibragimov Kudrat Davletbaevich', 'Senior Lecturer']),
        P(['Азимова Дилафруз Мирзатуллаевна', 'доктор философии (PhD) по экономике, старший преподаватель'], ['Azimova Dilafruz Mirzatullaevna', 'Doctor of Philosophy (PhD) in Economics, Senior Lecturer']),
        P(['Абдулов Дамир Рустамович', 'старший преподаватель'], ['Abdulov Damir Rustamovich', 'Senior Lecturer']),
        P(['Жураев Жахонгир Баходир угли', 'преподаватель'], ['Zhuraev Zhakhongir Bakhodir ugli', 'Lecturer']),
        P(['Тошпулатов Шохижахон Эшпулатович', 'преподаватель'], ['Toshpulatov Shokhizhakhon Eshpulatovich', 'Lecturer']),
      ],
      audience: L(
        'Студенты могут обращаться по различным вопросам в сфере деятельности кафедры, а также по вопросам подачи апелляции по результатам промежуточных контрольных работ.',
        'Students can contact on various issues within the department’s sphere of activity, as well as on filing appeals based on the results of mid-term control works.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-reading-room',
      category: 'facility',
      floor: 2,
      rooms: ['207'],
      name: L(
        'Читальный зал имени Буритоша Мустафаева',
        'Mustafaev Boritosh Mustafaevich Reading Room',
        'Buritosh Mustafayev nomidagi o‘quv xonasi'
      ),
      summary: L(
        'Практические занятия, семинары и углублённое изучение судопроизводства',
        'Practical classes, seminars and in-depth study of judicial proceedings',
        'Amaliy mashg‘ulotlar, seminarlar, sud jarayonini o‘rganish'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, учебное здание №2, второй этаж, №207',
        'Tashkent city, Sayilgokh street, 35, TSUL, academic building No. 2, second floor, No. 207'
      ),
      sections: [
        S(
          'about',
          'Буритош Мустафаевич Мустафаев родился 2 января 1949 года в Хатирчинском районе Самаркандской области. В 1965–1966 годах работал фрезеровщиком на Ташкентском экскаваторном заводе. В 1971 году окончил юридический факультет Ташкентского государственного университета. Начинал в прокуратуре Самаркандской области (следователь, прокурор района, заместитель прокурора области).',
          'Buritosh Mustafaevich Mustafaev was born on January 2, 1949, in the Khatirchi district of the Samarkand region. In 1965–1966, he worked as a milling machine operator at the Tashkent Excavator Plant. In 1971, he graduated from the Faculty of Law of Tashkent State University. He started in the prosecutor’s office of the Samarkand region (investigator, district prosecutor, deputy regional prosecutor).'
        ),
        SL(
          'works',
          [
            '1976–1978 — судья Акташского городского суда;',
            '1985–1989 — прокурор Андижанской области;',
            '1989–1990 — заместитель Генерального прокурора Узбекистана;',
            '1990–1998 — Генеральный прокурор Республики Узбекистан;',
            '1998–2000 — заместитель Государственного советника Президента по правоохранительным органам;',
            '2000–2002 — заместитель министра юстиции;',
            '2002–2004 — председатель Конституционного суда;',
            '2004–2005 — председатель Центральной избирательной комиссии;',
            '2005–2006 — министр юстиции Узбекистана;',
            '2006–2014 — председатель Верховного суда Узбекистана;',
            'с 2014 года до смерти — заместитель председателя Конституционного суда.',
          ],
          [
            '1976–1978 — judge of the Aktash City Court;',
            '1985–1989 — prosecutor of the Andijan region;',
            '1989–1990 — Deputy Prosecutor General of Uzbekistan;',
            '1990–1998 — Prosecutor General of the Republic of Uzbekistan;',
            '1998–2000 — Deputy State Advisor to the President for Law Enforcement Agencies;',
            '2000–2002 — Deputy Minister of Justice;',
            '2002–2004 — Chairman of the Constitutional Court;',
            '2004–2005 — Chairman of the Central Election Commission;',
            '2005–2006 — Minister of Justice of Uzbekistan;',
            '2006–2014 — Chairman of the Supreme Court of Uzbekistan;',
            'from 2014 until his death — Deputy Chairman of the Constitutional Court.',
          ]
        ),
        S(
          'stats',
          'Награды и звание: согласно Указу Президента Республики Узбекистан от 27 мая 1992 года Б. Мустафаеву за многолетнюю и эффективную работу в органах прокуратуры, достойный вклад в обеспечение верховенства закона и правовую пропаганду присвоено почётное звание «Заслуженный юрист Республики Узбекистан»; Указом от 30 августа 1995 года за большие заслуги в обеспечении правопорядка награждён орденом «Шон-шараф» II степени; Указом от 29 августа 2006 года награждён орденом «Меҳнат шуҳрати». Скончался в возрасте 68 лет после госпитализации с сердечным заболеванием.',
          'Awards and title: According to the Decree of the President of the Republic of Uzbekistan dated May 27, 1992, B. Mustafaev was awarded the honorary title "Honored Lawyer of the Republic of Uzbekistan" for long-term and effective work in the prosecution authorities, worthy contribution to ensuring the rule of law and legal promotion. By the Decree dated August 30, 1995, for great merits in ensuring law and order, he was awarded the "Shon-Sharaf" order of the II degree. By the Decree dated August 29, 2006, he was awarded the "Mekhnat Shukhrati" order. He passed away at the age of 68 after hospitalization with heart disease.'
        ),
        S(
          'education',
          'В Ташкентском государственном юридическом университете 7 октября 2022 года состоялась церемония открытия учебного кабинета имени Буритоша Мустафаева. В мероприятии, организованном по инициативе кафедры суда, правоохранительных органов и адвокатуры ТГЮУ, приняли участие руководство и ветераны Ассоциации судей Республики Узбекистан, Общественного центра социальной поддержки ветеранов прокуратуры, члены Совета ветеранов университета, преподаватели, студенты, члены семьи и ученики Буритоша Мустафаева. В данный момент кабинет используется студентами для проведения практических занятий, семинаров и углублённого изучения судопроизводства.',
          'On October 7, 2022, a grand opening ceremony of the study room named after Buritosh Mustafaev took place at Tashkent State University of Law. In the event organized at the initiative of the Department of Courts, Law Enforcement Agencies and Advocacy of TSUL, the management and veterans of the Association of Judges of the Republic of Uzbekistan, the Public Center for Social Support of Prosecution Veterans, members of the Council of Veterans of Tashkent State University of Law, teachers, students, family members, and pupils of Buritosh Mustafaev took part. At present, the room is used by students for conducting practical classes, seminars, and in-depth study of judicial proceedings.'
        ),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-vice-rector',
      category: 'administration',
      floor: 2,
      rooms: ['202'],
      name: L(
        'Кабинет проректора Якубова Ахтама Нусратиллоевича',
        'Office of Vice-Rector Yakubov Akhtam Nusratilloyevich',
        'Prorektor Yoqubov Ahtam Nusratilloyevich kabineti'
      ),
      summary: L(
        'Проректор по международным отношениям и непрерывному образованию',
        'Vice-Rector for International Relations and Continuing Education',
        'Xalqaro aloqalar va uzluksiz ta’lim bo‘yicha prorektor'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, учебное здание №2, второй этаж, №202',
        'Tashkent city, Sayilgokh street, 35, TSUL, academic building No. 2, second floor, No. 202'
      ),
      sections: [
        S(
          'about',
          'С 14 февраля 2025 года — проректор по международным отношениям и непрерывному образованию Ташкентского государственного юридического университета. А. Якубов родился в 1985 году в городе Карши Кашкадарьинской области. Образование высшее. В 2007 году окончил бакалавриат Самаркандского государственного университета. В 2011 году окончил магистратуру Ташкентского государственного юридического института. Доктор юридических наук (DSc), доцент. Советник юстиции 3-го класса, практикующий юрист, арбитр, медиатор. С 2022 по 2025 год вёл эффективную деятельность на должности ректора Каршинского международного университета. Награждён памятными медалями «30 лет независимости Республики Узбекистан» и «30 лет Конституции Узбекистана».',
          'Since February 14, 2025 — Vice-Rector for International Relations and Continuing Education of Tashkent State University of Law. A. Yakubov was born in 1985 in the city of Karshi, Kashkadarya region. Higher education. In 2007, he graduated with a bachelor’s degree from Samarkand State University. In 2011, he graduated with a master’s degree from Tashkent State Law Institute. Doctor of Law (DSc), Associate Professor. Counselor of Justice of the 3rd class, practicing lawyer, arbitrator, mediator. From 2022 to 2025, he carried out effective activity as Rector of Karshi International University. He was awarded commemorative medals "30 years of independence of the Republic of Uzbekistan" and "30 years of the Constitution of Uzbekistan."'
        ),
        SL(
          'tasks',
          [
            'участие в международных программах, грантах, проектах;',
            'академическая мобильность (обмен студентами, стажировки за рубежом);',
            'партнёрства с зарубежными вузами и организациями;',
            'приглашение иностранных преподавателей, экспертов или выезд сотрудников/студентов;',
            'международные конференции, семинары, форумы;',
            'вопросы признания иностранных дипломов, квалификаций;',
            'международные публикации и совместные научные исследования;',
            'работа с иностранными студентами (приём, адаптация, визовые вопросы);',
            'стратегические инициативы по интернационализации университета.',
          ],
          [
            'Participation in international programs, grants, projects;',
            'Academic mobility (student exchange, internships abroad);',
            'Partnerships with foreign universities and organizations;',
            'Invitation of foreign teachers, experts, or travel of staff/students;',
            'International conferences, seminars, forums;',
            'Issues of recognition of foreign diplomas and qualifications;',
            'International publications and joint scientific research;',
            'Work with international students (admission, adaptation, visa issues);',
            'Strategic initiatives for internationalization of the university.',
          ]
        ),
      ],
      staff: [
        P(['Якубов Ахтам Нусратиллоевич', 'проректор по международным отношениям и непрерывному образованию, д.ю.н. (DSc), доцент'], ['Yakubov Akhtam Nusratilloyevich', 'Vice-Rector for International Relations and Continuing Education, DSc, Associate Professor']),
      ],
      audience: L(
        'Студенты и магистранты (особенно интересующиеся обменом, стажировками); преподаватели и научные сотрудники (для международных проектов); выпускники и практикующие юристы (по программам повышения квалификации); представители других организаций и вузов (партнёрства); иностранные партнёры. Однако стоит уточнить: многие вопросы можно решить в соответствующем управлении (Управление международного сотрудничества), а уже потом обращаться к проректору.',
        'Students and master’s students (especially those interested in exchanges, internships). Teachers and research staff (for international projects). Graduates and practicing lawyers (for continuing education programs). Representatives of other organizations and universities (partnerships). Foreign partners. However, it is worth clarifying that many issues can be resolved in the relevant department/division (International Cooperation Department), and only then contact the Vice-Rector.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-publishing',
      category: 'service',
      floor: 1,
      rooms: ['115'],
      name: L('Редакционно-издательский отдел', 'Editorial and Publishing Department', 'Tahririy-nashriyot bo‘limi'),
      summary: L(
        'Научные журналы университета, приём статей, типография',
        'University academic journals, article submissions, printing',
        'Universitet ilmiy jurnallari, maqolalar qabuli'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, учебное здание №2, первый этаж, №115',
        'Tashkent city, Sayilgokh street, 35, TSUL, academic building No. 2, first floor, No. 115'
      ),
      sections: [
        S(
          'about',
          'Редакционно-издательский отдел Ташкентского государственного юридического университета был создан на основании Указа Президента Республики Узбекистан от 29 апреля 2020 года «О дополнительных мерах по кардинальному совершенствованию юридического образования и науки в Республике Узбекистан». Отдел является структурным подразделением университета и занимается подготовкой к публикации и выпуском научных, научно-методических, научно-популярных, учебных, учебно-методических и других материалов, а также периодических изданий университета, подготовленных преподавателями и сотрудниками, докторантами, самостоятельными соискателями, магистрами, студентами и другими лицами.',
          'The Editorial and Publishing Department of Tashkent State University of Law was established on the basis of the Decree of the President of the Republic of Uzbekistan dated April 29, 2020 "On additional measures for fundamental improvement of legal education and science in the Republic of Uzbekistan." The department is a structural unit of the university and is engaged in the preparation for publication and release of scientific, scientific-methodological, popular science, educational, teaching-methodological, and other materials, as well as periodicals of the university prepared by teachers and staff, doctoral students, independent researchers, master’s students, students, and other persons.'
        ),
        S(
          'structure',
          'Редакционно-издательский отдел состоит из редакции, сектора периодических изданий и сектора типографии. В секторе периодических изданий готовятся к публикации научные журналы, учреждённые университетом: «Вестник юридических наук — Review of Law Sciences», «Юриспруденция», «Криминология и уголовное правосудие», «Анализ законодательства Узбекистана» и «TSUL Legal Report».',
          'The Editorial and Publishing Department consists of the editorial office, the periodicals sector, and the printing sector. In the periodicals sector, scientific journals established by Tashkent State University of Law are prepared for publication: "Review of Law Sciences", "Jurisprudence", "Criminology and Criminal Justice", "Analysis of Legislation of Uzbekistan", and "TSUL Legal Report".'
        ),
      ],
      audience: L(
        'Могут обратиться как студенты, так и преподаватели. Приём статей в журналы осуществляется через платформу. Поступившие статьи рассматриваются через электронную почту каждого журнала: проверяется соответствие статьи требованиям журнала, уровень плагиата, а также результаты экспертизы, после чего авторам отправляются письма с ответами.',
        'Both students and teachers can apply. Articles for journals are accepted through the platform. Submitted articles are reviewed via the email of each journal. In doing so, the article’s compliance with the journal’s requirements, the level of plagiarism, and the results of the expert evaluation are checked, after which response letters are sent to the authors.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-international',
      category: 'service',
      floor: 2,
      rooms: ['210'],
      name: L('Отдел международного сотрудничества', 'International Cooperation Department', 'Xalqaro hamkorlik bo‘limi'),
      summary: L(
        'Erasmus+, Fulbright, академическая мобильность, программы обмена',
        'Erasmus+, Fulbright, academic mobility, exchange programmes',
        'Erasmus+, Fulbright, akademik mobillik, almashinuv dasturlari'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, учебное здание №2, второй этаж, №210',
        'Tashkent city, Sayilgokh street, 35, TSUL, academic building No. 2, second floor, No. 210'
      ),
      sections: [
        S(
          'about',
          'Департамент международного сотрудничества является одним из самых динамичных и прогрессивных подразделений Ташкентского государственного юридического университета. Главная задача отдела — повысить уровень образования путём развития прочного сотрудничества с ведущими мировыми учебными заведениями, исследовательскими центрами и организациями. Отдел стремится содействовать программам обмена студентами, тем самым обогащая академический опыт и расширяя кругозор.',
          'The Department of International Cooperation is one of the most dynamic and progressive divisions of Tashkent State University of Law. The main task of the department is to increase the level of education by developing strong cooperation with leading world educational institutions, research centers, and organizations. The department strives to promote student exchange programs, thereby enriching academic experience and expanding horizons.'
        ),
        SL(
          'structure',
          ['Отдел международных отношений;', 'Подразделение академической мобильности (exchange).'],
          ['International Relations Department;', 'Academic Mobility Unit (exchange).']
        ),
        S(
          'programs',
          'В дополнение к текущим направлениям — Центральноазиатский форум, Erasmus+, UNICEN и Fulbright — ТГЮУ гордится своими достижениями. Примечательно, что университет одержал победу на международных юридических соревнованиях в течение 2019–2024 годов, демонстрируя исключительные таланты и академические достижения студентов.',
          'In addition to current information such as the Central Asian Forum, Erasmus+, UNICEN, and Fulbright, TSUL takes pride in its achievements. Notably, our university won international legal competitions during 2019-2024, demonstrating the exceptional talents and academic achievements of our students.'
        ),
      ],
      staff: [
        P(['Умиров Фитрат Фахриддинович', 'глава отдела международного сотрудничества'], ['Umirov Fitrat Fakhriddinovich', 'Head of the International Cooperation Department']),
        P(['Бобур Узаков', 'главный специалист отдела международных отношений'], ['Bobur Uzakov', 'Chief Specialist, International Relations Division']),
        P(['Мухриддин Халиков', 'специалист отдела международных отношений'], ['Mukhriddin Khalikov', 'Specialist, International Relations Division']),
        P(['Фаррух Хикматов', 'главный специалист подразделения академической мобильности'], ['Farrukh Khikmatov', 'Chief Specialist, Academic Mobility Unit']),
        P(['Хулкар Раджабова', 'специалист подразделения академической мобильности'], ['Khulkar Radzhabova', 'Specialist, Academic Mobility Unit']),
      ],
      audience: L(
        'Могут обратиться как студенты, так и магистранты, соответствующие критериям для обучения за границей по программе академической мобильности (exchange).',
        'Both students and master’s students meeting the criteria for studying abroad under the academic mobility (exchange) program can apply.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-moot-court',
      category: 'facility',
      floor: 2,
      rooms: ['204'],
      keywords: ['moot court', 'мут корт', 'судебный зал', 'sud zali'],
      name: L('Учебный зал судебных заседаний (Moot Court)', 'Moot Court Room', 'Moot Court — o‘quv sud zali'),
      summary: L(
        'Симуляция реального судебного процесса: истец, ответчик, прокурор, защитник',
        'Simulation of a real trial: plaintiff, defendant, prosecutor, defence counsel',
        'Haqiqiy sud jarayoni simulyatsiyasi'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, учебное здание №2, второй этаж, №204',
        'Tashkent city, Sayilgokh street, 35, TSUL, academic building No. 2, second floor, No. 204'
      ),
      sections: [
        S(
          'about',
          'Учебный зал судебных заседаний (Moot Court) — это симуляция реального суда. Студенты получают гипотетический кейс, делятся на команды (истец, ответчик, прокурор, защитник) и имитируют реальный процесс судебного заседания перед юристами, судьями или преподавателями.',
          'The Moot Court Room is a simulation of a real court. Students receive a hypothetical case and divide into teams (plaintiff, defendant, prosecutor, defense counsel). They simulate a real trial process in front of lawyers, judges, or teachers.'
        ),
      ],
      audience: L(
        'Могут участвовать абсолютно все студенты как ТГЮУ, так и других университетов по направлению юриспруденции. В свободное время кабинетом могут пользоваться абсолютно все студенты ТГЮУ с соблюдением внутренних правил университета. Подробности для участия можно изучить в официальном телеграм-канале университета.',
        'Absolutely all students, both from TSUL and other universities in the field of jurisprudence, can participate. In their free time, absolutely all TSUL students can use the room, subject to the university’s internal rules. Details for participation can be studied in the official Telegram channel of the university.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-continuing-education',
      category: 'service',
      floor: 2,
      rooms: ['211А'],
      name: L('Департамент непрерывного образования', 'Department of Continuing Education', 'Uzluksiz ta’lim departamenti'),
      summary: L(
        'Академические лицеи, юридические техникумы, координация мероприятий',
        'Academic lyceums, legal technical schools, event coordination',
        'Akademik litseylar, yuridik texnikumlar, tadbirlar koordinatsiyasi'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, учебное здание №2, второй этаж, №211А',
        'Tashkent city, Sayilgokh street, 35, TSUL, academic building No. 2, second floor, No. 211A'
      ),
      sections: [
        S(
          'about',
          'Согласно приказу ректора Ташкентского государственного юридического университета №164 от 31 июля 2025 года, Управление непрерывного образования было упразднено, а на его основе создано Управление непрерывного образования и координации мероприятий, в состав которого входят отделы координации мероприятий и непрерывного образования.',
          'According to the order of the Rector of Tashkent State University of Law No. 164 dated July 31, 2025, the Department of Continuing Education was abolished, and on its basis, the Department of Continuing Education and Event Coordination was created, which includes the departments of Event Coordination and Continuing Education.'
        ),
        SL(
          'tasks',
          [
            'использование учебного и научного потенциала ТГЮУ, материально-технической базы, образовательных и информационных ресурсов для повышения качества и результативности учебного процесса в академических лицеях, их инновационного развития и совершенствования, а также для повышения педагогического мастерства преподавателей;',
            'поддержка организации деятельности по повышению уровня знаний и потенциала учащихся академических лицеев, поддержке талантливых учеников и их направлению на целевое образование;',
            'содействие учебно-методической работе по подготовке юридических кадров в юридических техникумах, привлечение преподавателей ТГЮУ для повышения уровня знаний, правового сознания и культуры студентов техникумов, проведение постоянного мониторинга качества образования, анализ его результатов, предоставление практической и информационно-ресурсной помощи техникумам;',
            'разработка предложений по организации учебного процесса с использованием современных форм и методов, а также информационно-коммуникационных технологий, направленных на обеспечение тесной связи теоретической подготовки с практической деятельностью в сфере применения права;',
            'обеспечение проведения различных мероприятий и мастер-классов в школах, взятых под патронат;',
            'координация и содействие проведению мероприятий, организуемых в ТГЮУ;',
            'координация деятельности кафедр и других структурных подразделений ТГЮУ в сотрудничестве с академическими лицеями и юридическими техникумами в учебной, методической, научной и воспитательно-просветительской сферах.',
          ],
          [
            'Utilizing the educational and scientific potential of TSUL, material and technical base, educational and information resources to improve the quality and effectiveness of the educational process in academic lyceums, their innovative development and improvement, as well as to enhance the pedagogical skills of teachers;',
            'Supporting the organization of activities to increase the level of knowledge and potential of students of academic lyceums, supporting talented students and directing them to targeted education;',
            'Assisting educational and methodological work on training legal personnel in legal technical schools, involving TSUL teachers to increase the level of knowledge, legal awareness, and culture of technical school students, conducting constant monitoring of education quality, analyzing its results, providing practical and information-resource assistance to technical schools;',
            'Developing proposals for organizing the educational process using modern forms and methods, as well as information and communication technologies aimed at ensuring a close connection between theoretical training and practical activities in the field of law enforcement;',
            'Ensuring the organization of various events and master classes in patronized schools;',
            'Coordinating and assisting in conducting events organized at TSUL;',
            'Coordinating the activities of departments and other structural divisions of TSUL in cooperation with academic lyceums and legal technical schools in educational, methodological, scientific, and educational-enlightenment spheres.',
          ]
        ),
        SL(
          'structure',
          ['Отдел непрерывного образования;', 'Отдел координации мероприятий.'],
          ['Continuing Education Department;', 'Event Coordination Department.']
        ),
      ],
      staff: [
        P(['Авезов Дилшод Садулаевич', 'начальник управления'], ['Avezov Dilshod Sadulaevich', 'Head of Department']),
        P(['Хикматов Фаррух Илхом угли', 'заместитель начальника управления, начальник отдела координации мероприятий'], ['Khikmatov Farrukh Ilkhom ugli', 'Deputy Head of Department, Head of Event Coordination Department']),
        P(['Мамадиев Аброр Абдурахмон угли', 'главный специалист отдела непрерывного образования'], ['Mamadiev Abror Abdurakhmon ugli', 'Chief Specialist of Continuing Education Department']),
        P(['Бахромова Нилуфар Хошимовна', 'методист отдела координации мероприятий'], ['Bakhromova Nilufar Khoshimovna', 'Methodologist of Event Coordination Department']),
      ],
      audience: L(
        'Преподаватели и сотрудники академических лицеев при ТГЮУ — для повышения педагогического мастерства, методической поддержки и инновационного развития. Преподаватели и студенты юридических колледжей, техникумов — для образовательной и методической помощи, мониторинга качества обучения. Учителя и сотрудники подшефных школ — организация мероприятий, мастер-классов и работы со школьниками. Студенты и сотрудники самого ТГЮУ — по вопросам непрерывного образования, переподготовки, стажировок и участия в мероприятиях. Внешние специалисты и организации — для совместных программ, повышения квалификации в юридической сфере, координации событий.',
        'Teachers and staff of academic lyceums under TSUL — for enhancing pedagogical skills, methodological support, and innovative development. Teachers and students of legal colleges and technical schools — for educational and methodological assistance, monitoring the quality of education. Teachers and staff of patronized schools — organization of events, master classes, and work with schoolchildren. Students and staff of TSUL itself — on issues of continuing education, retraining, internships, and participation in events. External specialists and organizations — for joint programs, advanced training in the legal field, and event coordination.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b2-german-library',
      category: 'facility',
      floor: 1,
      rooms: ['119'],
      name: L(
        'Специальная библиотека Центра немецкого права и сравнительно-правовых исследований',
        'Special Library of the Center for German Law and Comparative Legal Studies',
        'Nemis huquqi va qiyosiy-huquqiy tadqiqotlar markazi maxsus kutubxonasi'
      ),
      summary: L(
        'Литература по немецкому праву на немецком и японском языках',
        'Literature on German law in German and Japanese',
        'Nemis huquqi bo‘yicha adabiyot (nemis va yapon tillarida)'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, учебное здание №2, первый этаж, №119',
        'Tashkent city, Sayilgokh street, 35, TSUL, academic building No. 2, first floor, No. 119'
      ),
      sections: [
        S(
          'about',
          'Библиотека была открыта в 2023 году в знак крепкого академического сотрудничества между Ташкентским государственным юридическим университетом и Университетом Регенсбурга (Германия). Она играет важную роль в образовательной и научной деятельности студентов, предоставляя доступ к специализированной юридической литературе. Основную часть фонда составляют книги по немецкому праву на немецком языке. Кроме того, в библиотеке представлены издания на японском языке, что делает её особенно интересной для изучающих зарубежные правовые системы и иностранные языки.',
          'The library was opened in 2023 as a sign of strong academic cooperation between Tashkent State University of Law and the University of Regensburg (Germany). It plays an important role in the educational and scientific activities of students, providing access to specialized legal literature. The main part of the collection consists of books on German law in German. In addition, the library presents publications in Japanese, making it especially interesting for those studying foreign legal systems and foreign languages.'
        ),
      ],
      audience: L(
        'Посещать библиотеку могут студенты, магистранты и докторанты ТГЮУ. При этом стоит учитывать, что большинство представленных изданий написано на немецком языке, поэтому для полноценной работы с литературой желательно владеть немецким языком.',
        'Students, master’s students, and doctoral students of TSUL can visit the library. However, it should be kept in mind that most of the presented publications are written in German, so for full work with the literature, it is desirable to speak German.'
      ),
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'b2-japanese-center',
      category: 'service',
      floor: 1,
      rooms: ['101', '102', '103', '104'],
      keywords: ['japan', 'японский', 'yapon', 'Ямагива', 'Yamagiwa', 'хирагана'],
      name: L('Японский центр', 'Japanese Centre', 'Yapon markazi'),
      summary: L(
        'Четырёхлетняя программа: японский язык, история и право Японии; своя библиотека',
        'A four-year programme: Japanese language, history and law of Japan; its own library',
        'To‘rt yillik dastur: yapon tili, tarixi va huquqi; o‘z kutubxonasi'
      ),
      address: L(
        'г. Ташкент, 2-е учебное здание ТГЮУ, кабинеты 101–104',
        'Tashkent, 2nd academic building of TSUL, rooms 101–104',
        'Toshkent, TDYU 2-o‘quv binosi, 101–104-xonalar'
      ),
      sections: [
        S(
          'about',
          'Японский центр — это не просто студенческий кружок, а настоящее сплочённое общество, где студенты младших и старших курсов находятся в постоянном взаимодействии, а коллектив со временем становится настоящей семьёй. Библиотека центра — это пространство взаимопомощи, где старшекурсники всегда готовы проконсультировать и поддержать.',
          'The Japanese Centre is not just a student club but a genuinely close-knit community where junior and senior students interact constantly and the team gradually becomes a real family. The centre’s library is a space of mutual help, where senior students are always ready to advise and support.'
        ),
        SL(
          'location',
          [
            'Кабинет 101 — учительская;',
            'Кабинет 102 — библиотека;',
            'Кабинеты 103, 104 — учебные аудитории.',
          ],
          [
            'Room 101 — teachers’ room;',
            'Room 102 — library;',
            'Rooms 103, 104 — classrooms.',
          ]
        ),
        SL(
          'subjects',
          [
            'Длительность обучения: 4 года;',
            'Расписание: занятия проходят ежедневно по 2 часа;',
            'Ключевые дисциплины: История Японии, Право Японии, Гражданское право, Социология.',
          ],
          [
            'Duration of studies: 4 years;',
            'Schedule: classes are held daily, 2 hours each;',
            'Key subjects: History of Japan, Law of Japan, Civil Law, Sociology.',
          ]
        ),
        SL(
          'programs',
          [
            'Кого принимают: исключительно студентов 1 курса;',
            'Как проходит набор: на ознакомительной неделе проводится официальная презентация, где объявляются все условия поступления. Информационный чат с объявлениями для абитуриентов открывается заново каждый учебный год;',
            'Подготовка и экзамен: перед зачислением даётся 2 недели на подготовку к вступительному экзамену. На самом экзамене проверяется знание японского алфавита «Хирагана».',
          ],
          [
            'Who is admitted: first-year students only;',
            'How admission works: during the orientation week an official presentation is held where all admission conditions are announced. The information chat for applicants is reopened every academic year;',
            'Preparation and exam: two weeks are given to prepare for the entrance exam, which tests knowledge of the Japanese “Hiragana” alphabet.',
          ]
        ),
      ],
      staff: [
        P(['Ямагива-сенсей', 'главный преподаватель центра'], ['Yamagiwa-sensei', 'Head teacher of the centre'], ['Yamagiva-sensey', 'markazning bosh o‘qituvchisi']),
      ],
      audience: L(
        'Принимаются исключительно студенты 1 курса. Всю дополнительную информацию можно получить при личном визите в центр.',
        'Only first-year students are admitted. Any further information can be obtained by visiting the centre in person.'
      ),
    },
  ],
};

export default building2;
