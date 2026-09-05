import { L, P, S, SL, C, contacts } from '../l10n-helpers.js';

/**
 * ЗДАНИЕ №1 — ул. Сайилгох, 35 (главный корпус).
 * Источник: «1 eng.txt» / «1 ru.txt».
 * Здесь сосредоточена администрация университета и часть кафедр.
 */
export const building1 = {
  id: 'b1',
  number: 1,
  slug: 'building-1',
  name: L('Учебное здание №1', 'Academic Building No. 1', '1-o‘quv binosi'),
  short: L('Здание №1', 'Building 1', '1-bino'),
  subtitle: L(
    'Главный корпус: ректорат, административные управления, ключевые кафедры',
    'Main building: rectorate, administrative departments, key academic chairs',
    'Bosh bino: rektorat, ma’muriy boshqarmalar, asosiy kafedralar'
  ),
  address: L(
    'г. Ташкент, ул. Сайилгох, 35',
    'Tashkent, 35 Sayilgokh Street',
    'Toshkent sh., Sayilgoh ko‘chasi, 35'
  ),
  floors: [1, 2, 3],
  accent: 'from-tsul-700/70 to-tsul-900/70',

  units: [
    /* ------------------------------------------------------------------ */
    {
      id: 'b1-rectorate',
      category: 'administration',
      floor: 2,
      rooms: ['206'],
      name: L('Ректорат', 'Rectorate', 'Rektorat'),
      summary: L(
        'Стратегические и организационные вопросы деятельности университета',
        "Strategic and organisational matters of the university's activity",
        'Universitet faoliyatining strategik va tashkiliy masalalari'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, здание №1 ТГЮУ, кабинет №206',
        'Tashkent city, Sayilgokh Street, House 35, Building No. 1 of TSUL, Cabinet No. 206'
      ),
      sections: [
        S(
          'about',
          `Ректор: Ходжаев Бахшилло Камолович — доктор юридических наук, профессор, советник юстиции 2-го класса. Родился 25 июня 1982 года в Бухарской области.`,
          `Rector: Khodjaev Bakhshillo Kamolovich — Doctor of Law, Professor, Counselor of Justice 2nd Class. Born on June 25, 1982, in Bukhara Region.`
        ),
        S(
          'works',
          `Образование и карьера: В 2004 году окончил бакалавриат Ташкентского государственного юридического института, в 2006 году — магистратуру. С 2004 по 2005 год работал помощником юриста в адвокатской фирме «Mezon xususiy xizmati», с 2006 по 2013 год — преподавателем, старшим преподавателем кафедры «Хозяйственное право и хозяйственно-процессуальное право», заместителем декана 2-го юридического факультета. В 2013–2014 годах — доцент кафедры бизнес-права ТГЮУ. С 2014 по 2018 год обучался в докторантуре по направлению «Сравнительное правоведение» Университета Нагоя (Япония). В 2018–2019 годах занимал должности главного консультанта, начальника отдела, заместителя директора Исследовательского института правовой политики при Министерстве юстиции Республики Узбекистан; в 2019–2020 годах — заместителя начальника Управления по координации юридического образования и судебно-экспертной деятельности Министерства юстиции; в 2020 году — заведующего кафедрой бизнес-права ТГЮУ; с 2020 по 2022 год — декана факультета частного права.`,
          `Education and Career: In 2004, he graduated from the bachelor's program of Tashkent State Law Institute, and in 2006 — from the master's program. From 2004 to 2005, he worked as a legal assistant at the "Mezon xususiy xizmati" law firm; from 2006 to 2013 — as a lecturer, senior lecturer of the Department of Economic Law and Economic Procedural Law, and Deputy Dean of the 2nd Faculty of Law. In 2013–2014 — Associate Professor of the Department of Business Law at TSUL. From 2014 to 2018, he pursued doctoral studies in Comparative Law at Nagoya University (Japan). In 2018–2019, he held positions of Chief Consultant, Head of Department, and Deputy Director of the Research Institute of Legal Policy under the Ministry of Justice of the Republic of Uzbekistan; in 2019–2020 — Deputy Head of the Department for Coordination of Legal Education and Forensic Activities of the Ministry of Justice; in 2020 — Head of the Department of Business Law at TSUL; from 2020 to 2022 — Dean of the Faculty of Private Law.`
        ),
      ],
      staff: [P(['Ходжаев Бахшилло Камолович', 'ректор ТГЮУ'], ['Khodjaev Bakhshillo Kamolovich', 'Rector of TSUL'])],
      audience: L(
        `К ректорату обращаются по стратегическим и организационным вопросам деятельности университета, требующим решения на уровне руководства — крупные инициативы, жалобы, не решённые на уровне структурных подразделений, официальные обращения организаций и представителей власти.`,
        `The Rectorate is approached for strategic and organizational matters of the university's activities that require decisions at the leadership level — major initiatives, complaints unresolved at the level of structural divisions, official inquiries from organizations and government representatives.`
      ),
      contacts: contacts({ phone: ['+998 71 233-66-36'], email: ['tsulrector.info@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-accounting',
      category: 'administration',
      floor: 1,
      rooms: ['102', '110', '103'],
      name: L('Бухгалтерия', 'Accounting Department', 'Buxgalteriya'),
      summary: L(
        'Заработная плата, стипендии, финансовая и налоговая отчётность',
        'Salaries, stipends, financial and tax reporting',
        'Ish haqi, stipendiyalar, moliyaviy va soliq hisoboti'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, здание №1 ТГЮУ, кабинеты №102 и №110, кабинет №103 (адрес отдела)',
        'Tashkent city, Sayilgokh Street, House 35, Building No. 1 of TSUL, Cabinets No. 102 and No. 110, Cabinet No. 103 (department address)'
      ),
      sections: [
        S(
          'about',
          'Бухгалтерия — один из самых молодых и инициативных отделов Ташкентского государственного юридического университета.',
          'The Accounting Department is one of the youngest and most proactive departments of Tashkent State University of Law.'
        ),
        S(
          'goal',
          'Организация бухгалтерского учёта с использованием современных технических средств и информационных технологий.',
          'Organization of accounting using modern technical means and information technologies.'
        ),
        SL(
          'tasks',
          [
            'обеспечение целевого использования бюджетных и внебюджетных средств на цели, предусмотренные сметой расходов;',
            'регулярный контроль сохранности денежных средств и ценностей;',
            'своевременный расчёт и выплата заработной платы преподавателей, сотрудников и приравненных к ней выплат, студенческих стипендий;',
            'своевременное взыскание дебиторской задолженности и обеспечение погашения кредиторской задолженности;',
            'подготовка и сдача финансовой, налоговой и другой отчётности.',
          ],
          [
            'ensuring the targeted use of budgetary and non-budgetary funds for the purposes provided for by the expense estimate;',
            'regular monitoring of the safety of monetary funds and valuables;',
            'timely calculation and payment of salaries for teachers, employees, and equivalent payments, as well as student stipends;',
            'timely recovery of accounts receivable and ensuring the settlement of accounts payable;',
            'preparation and submission of financial, tax, and other reporting.',
          ]
        ),
      ],
      staff: [
        P(['Парпиев Муслимбек Максудалиевич', 'главный бухгалтер'], ['Parpiev Muslimbek Maksudalievich', 'Chief Accountant']),
        P(['Назарова Насибахон Нуманжановна', 'заместитель главного бухгалтера'], ['Nazarova Nasibakhon Numanjanovna', 'Deputy Chief Accountant']),
        P(['Ахмуратов Ахрор Худаярович', 'заместитель главного бухгалтера'], ['Akhmuratov Akhror Khudayarovich', 'Deputy Chief Accountant']),
        P(['Жумабоев Дониёр Олимжон угли', 'бухгалтер'], ['Zhumaboev Doniyor Olimzhon ugli', 'Accountant']),
        P(['Бобонорова Замира Болтаевна', 'бухгалтер'], ['Bobonorova Zamira Boltaevna', 'Accountant']),
        P(['Абзалова Муножотхон Азизджановна', 'бухгалтер'], ['Abzalova Munozhotkhon Azizdzhanovna', 'Accountant']),
        P(['Сахибова Дилноза Тимур қизи', 'бухгалтер'], ['Sakhibova Dilnoza Timur qizi', 'Accountant']),
        P(['Исманова Нигина Шухратжановна', 'бухгалтер'], ['Ismanova Nigina Shukhratjanovna', 'Accountant']),
        P(['Якубов Фаррух Улуғбекович', 'бухгалтер'], ['Yakubov Farrukh Ulugbekovich', 'Accountant']),
      ],
      audience: L(
        'Обращаться могут сотрудники и преподаватели университета по вопросам заработной платы, стипендий и иных выплат, а также подразделения университета по вопросам финансовой и налоговой отчётности.',
        'University employees and faculty members may apply regarding issues of salaries, stipends, and other payments, as well as university departments regarding financial and tax reporting.'
      ),
      contacts: contacts({ phone: ['233-66-36', '1110 (внутр.)'], email: ['anvar-0088@umail.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-finance',
      category: 'administration',
      floor: 1,
      rooms: ['101', '103'],
      name: L('Финансово-экономический отдел', 'Financial and Economic Department', 'Moliya-iqtisod bo‘limi'),
      summary: L(
        'Штатное расписание, сметы расходов, надбавки и премии',
        'Staffing table, expense estimates, allowances and bonuses',
        'Shtat jadvali, xarajatlar smetasi, ustama va mukofotlar'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, здание №1 ТГЮУ, кабинет №101 (кабинет №103 указан также в исходных данных отдела)',
        'Tashkent city, Sayilgokh Street, House 35, Building No. 1 of TSUL, Cabinet No. 101 (Cabinet No. 103 is also indicated in the department’s source data)'
      ),
      sections: [
        S(
          'about',
          'Финансово-экономический отдел ТГЮУ является одним из вновь созданных и инициативных отделов университета.',
          'The Financial and Economic Department of TSUL is one of the newly created and proactive departments of the university.'
        ),
        S(
          'tasks',
          'Разработка штатного расписания для руководящего, технического, обслуживающего и профессорско-преподавательского состава университета, разработка сметы расходов.',
          'Development of the staffing table for executive, technical, maintenance, and teaching staff of the university, development of the expense estimate.'
        ),
        SL(
          'activity',
          [
            'занимается вопросами выделения надбавок и премий работникам;',
            'обеспечивает эффективное использование средств, выделяемых на научно-исследовательские, фундаментальные и прикладные исследования и проекты молодых учёных по грантам Агентства науки и технологий Республики Узбекистан;',
            'осуществляет расчёт расходов на публикацию в университетской типографии учебников, учебных пособий, монографий и необходимых бланков;',
            'занимается укреплением финансово-экономического состояния университета, плановым ведением финансово-хозяйственной деятельности, повышением эффективности целевого использования бюджетных и внебюджетных средств.',
          ],
          [
            'deals with issues of allocating allowances and bonuses to employees;',
            'ensures the effective use of funds allocated for research, fundamental, and applied research and projects of young scientists under grants from the Agency for Science and Technologies of the Republic of Uzbekistan;',
            'calculates expenses for publishing textbooks, study guides, monographs, and required forms in the university publishing house;',
            'works on strengthening the financial and economic state of the university, planned conduct of financial and economic activities, and increasing the efficiency of targeted use of budgetary and non-budgetary funds.',
          ]
        ),
      ],
      staff: [
        P(['Рахимов Анвар Махмарасулович', 'руководитель отдела'], ['Rakhimov Anvar Makhmarasulovich', 'Head of Department']),
        P(['Ярмухамедова Зумрад Шахитовна', 'экономист финансово-экономического отдела'], ['Yarmukhamedova Zumrad Shakhitovna', 'Economist of the Financial and Economic Department']),
      ],
      audience: L(
        'Обращаться могут структурные подразделения университета по вопросам штатного расписания, сметы расходов, надбавок и премий, а также по финансово-хозяйственным вопросам.',
        'Structural divisions of the university may apply regarding issues of the staffing table, expense estimates, allowances and bonuses, as well as financial and economic matters.'
      ),
      contacts: contacts({ phone: ['233-66-36', '1110 (внутр.)'], email: ['anvar-0088@umail.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-quality',
      category: 'administration',
      floor: 2,
      rooms: ['208', '205А'],
      name: L('Отдел по контролю качества образования', 'Department for Education Quality Control', 'Ta’lim sifatini nazorat qilish bo‘limi'),
      summary: L(
        'Мониторинг качества обучения, внутренняя аттестация, соответствие стандартам',
        'Monitoring of education quality, internal accreditation, compliance with standards',
        'Ta’lim sifati monitoringi, ichki attestatsiya, standartlarga muvofiqlik'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, учебное здание №1, кабинеты №208 и №205А',
        'Tashkent city, Sayilgokh Street, House 35, Academic Building No. 1, Cabinets No. 208 and No. 205A'
      ),
      motto: L(
        '«Верховенство закона и социальная справедливость обеспечивается квалифицированным юридическим персоналом»',
        '"The rule of law and social justice are ensured by qualified legal personnel."'
      ),
      sections: [
        S(
          'mission',
          'Отдел — одно из новых подразделений университета, состоящее из увлечённых, полных энтузиазма и талантливых молодых сотрудников. Мы работаем над изучением и анализом соответствия знаний студентов государственным образовательным стандартам, контролем качества обучения, организацией внутренней аттестации, выявлением и устранением негативных факторов, влияющих на качество образования, повышением качества образования и подготовкой конкурентоспособных юридических кадров.',
          'The department is one of the new units of the university, consisting of passionate, enthusiastic, and talented young employees. We work on studying and analyzing the compliance of students’ knowledge with state educational standards, monitoring the quality of education, organizing internal accreditation, identifying and eliminating negative factors affecting the quality of education, improving the quality of education, and training competitive legal professionals.'
        ),
        S(
          'principle',
          '«Ценить качество образовательного процесса и всегда стремиться к нему».',
          '"Value the quality of the educational process and always strive for it."'
        ),
        SL(
          'tasks',
          [
            'организуем систематический контроль за качеством обучения в университете;',
            'контролируем выполнение нормативных актов, направленных на повышение качества образования;',
            'ведём мониторинг показателей, определяющих качество образования;',
            'участвуем во внутренней аттестации университета, разработке мероприятий по подъёму рейтинга университета до международного уровня;',
            'изучаем интеграционные процессы между учёбой и практикой;',
            'готовим аналитические документы по итогам изучения учебного процесса;',
            'вносим предложения по поощрению преподавателей, проводящих активные, интересные и качественные занятия;',
            'проводим социологические опросы среди студентов для выявления направлений повышения качества образования.',
          ],
          [
            'we organize systematic monitoring of the quality of education at the university;',
            'we monitor the implementation of regulatory acts aimed at improving the quality of education;',
            'we monitor indicators that determine the quality of education;',
            'we participate in the internal accreditation of the university, the development of measures to raise the university’s ranking to an international level;',
            'we study the integration processes between study and practice;',
            'we prepare analytical documents based on the results of studying the educational process;',
            'we submit proposals for rewarding teachers who conduct active, interesting, and high-quality classes;',
            'we conduct sociological surveys among students to identify areas for improving the quality of education.',
          ]
        ),
      ],
      staff: [
        P(['Якубов Шухрат Умматалиевич', 'начальник отдела, доктор юридических наук, профессор'], ['Yakubov Shukhrat Ummatalievich', 'Head of Department, Doctor of Law, Professor']),
        P(['Акмалхонов Боситхон Азизхон угли', 'главный специалист'], ['Akpalkhonov Bositkhon Azizkhon ugli', 'Chief Specialist']),
        P(['Маматалиев Тулкин Хушмамат угли', 'главный специалист'], ['Mamataliev Tulkin Khushmamat ugli', 'Chief Specialist']),
      ],
      audience: L(
        'Обращаться могут преподаватели и студенты по вопросам качества образовательного процесса, соответствия обучения образовательным стандартам и внутренней аттестации.',
        'Teachers and students may apply regarding the quality of the educational process, compliance of education with educational standards, and internal accreditation.'
      ),
      contacts: contacts({ phone: ['233-66-36', '1161 (внутр.)'], email: ['www.tsnb@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-hr',
      category: 'administration',
      floor: 2,
      rooms: ['207'],
      name: L('Отдел кадров', 'Human Resources Department (HR)', 'Kadrlar bo‘limi'),
      summary: L(
        'Трудовые отношения, кадровый резерв, подбор персонала',
        'Labour relations, talent pool, recruitment',
        'Mehnat munosabatlari, kadrlar zaxirasi, xodimlarni tanlash'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, учебное здание №1, кабинет №207',
        'Tashkent city, Sayilgokh Street, House 35, Academic Building No. 1, Cabinet No. 207'
      ),
      sections: [
        S(
          'about',
          'Отдел кадров ТГЮУ создан на основании постановления Президента Республики Узбекистан от 28 апреля 2017 года ПП-2932 «О мерах по коренному совершенствованию системы и повышению эффективности подготовки кадров в ТГЮУ», указа от 29 апреля 2020 года УП-5987 «О дополнительных мерах по кардинальному совершенствованию юридического образования и науки в Республике Узбекистан», решения №4 Совета университета от 21 мая 2020 года.',
          'The Human Resources Department of TSUL was established on the basis of Resolution of the President of the Republic of Uzbekistan dated April 28, 2017, PP-2932 "On measures for radical improvement of the system and increasing the efficiency of personnel training at TSUL", Decree dated April 29, 2020, UP-5987 "On additional measures for radical improvement of legal education and science in the Republic of Uzbekistan", decision No. 4 of the University Council dated May 21, 2020.'
        ),
        S(
          'mission',
          'Отдел является структурным подразделением университета, которое ведёт работу по обеспечению университета высококвалифицированными кадрами, способными выполнять возложенные на них задачи и функции, расстановке сотрудников и формированию кадрового резерва.',
          'The department is a structural unit of the university that works to provide the university with highly qualified personnel capable of performing the tasks and functions assigned to them, placing employees, and forming a talent pool.'
        ),
        S(
          'tasks',
          'Поиск, привлечение и отбор квалифицированных специалистов, организация приёма на работу кандидатов на основе собеседования или конкурса по рекрутменту или хедхантингу согласно приказу министра юстиции Республики Узбекистан №68-ум от 24 марта 2020 года «О системе HR-менеджмента в органах и учреждениях юстиции»; оформление документов о трудовых отношениях; формирование базы данных работников университета; контроль за соблюдением требований Трудового кодекса Республики Узбекистан и иного трудового законодательства.',
          'Searching, attracting, and selecting qualified specialists, organizing the hiring of candidates based on interviews or recruitment/headhunting competitions in accordance with Order No. 68-um of the Minister of Justice of the Republic of Uzbekistan dated March 24, 2020 "On the HR management system in justice bodies and institutions"; processing documents on employment relationships; forming a database of university employees; monitoring compliance with the requirements of the Labor Code of the Republic of Uzbekistan and other labor legislation.'
        ),
        S(
          'goal',
          'Широкое привлечение в состав профессорско-преподавательского состава и других сотрудников честных, добросовестных и квалифицированных кадров с высоким уровнем профессионально-педагогического мастерства, правовой и политической культуры, творческим мышлением.',
          'Broad attraction of honest, conscientious, and qualified personnel with a high level of professional and pedagogical skills, legal and political culture, and creative thinking into the faculty and other staff.'
        ),
      ],
      staff: [
        P(['Хамракулов Шавкатжон Салимович', 'начальник отдела'], ['Khamrakulov Shavkatzhon Salimovich', 'Head of Department']),
        P(['Абуллаев Диёр Ибодиллаевич', 'главный специалист'], ['Abullayev Diyor Ibodillayevich', 'Chief Specialist']),
        P(['Жураев Жавохир Улугбекович', 'ведущий специалист'], ['Zhuraev Zhavokhir Ulugbekovich', 'Leading Specialist']),
        P(['Ахмедова Муборак Махмудовна', 'ведущий специалист'], ['Akhmedova Muborak Makhmudovna', 'Leading Specialist']),
        P(['Мукадирова Холида Давронбек кизи', 'инспектор'], ['Mukadirova Kholida Davronbek kizi', 'Inspector']),
      ],
      audience: L(
        'Обращаться могут кандидаты на трудоустройство, а также действующие сотрудники и преподаватели по вопросам оформления трудовых отношений, кадрового резерва и трудового законодательства.',
        'Candidates for employment, as well as current employees and teachers, may apply regarding the formalization of labor relations, talent pool, and labor legislation.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-anticorruption',
      category: 'administration',
      floor: 2,
      rooms: ['204'],
      name: L('Отдел внутреннего антикоррупционного контроля', 'Internal Anti-Corruption Control Department', 'Ichki korrupsiyaga qarshi nazorat bo‘limi'),
      summary: L(
        'Профилактика коррупции, телефон доверия, ISO 37001',
        'Corruption prevention, helpline, ISO 37001',
        'Korrupsiya profilaktikasi, ishonch telefoni, ISO 37001'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, учебное здание №1, кабинет №204',
        'Tashkent city, Sayilgokh Street, House 35, Academic Building No. 1, Cabinet No. 204'
      ),
      sections: [
        S(
          'about',
          'Отдел внутреннего антикоррупционного контроля ТГЮУ создан 14 декабря 2022 года. В университете среди профессорско-преподавательского состава и студентов реализуются меры по недопущению коррупции, обеспечению своевременного и качественного исполнения действующего законодательства, решений Национального совета по противодействию коррупции Республики Узбекистан и поручений руководства.',
          'The Internal Anti-Corruption Control Department of TSUL was established on December 14, 2022. Measures are being implemented at the university among the faculty and students to prevent corruption, ensure timely and high-quality implementation of current legislation, decisions of the National Council for Countering Corruption of the Republic of Uzbekistan, and instructions of the management.'
        ),
        S(
          'training',
          '27 апреля был проведён семинар-тренинг для профессорско-преподавательского состава и сотрудников университета по разъяснению внутренних антикоррупционных документов и требований международного стандарта ISO 37001. В соответствии с Указом Президента Республики Узбекистан от 29 апреля 2020 года ПФ-5987 в университете принимаются меры по обеспечению соответствия международным стандартам системы противодействия коррупции ISO 37001.',
          'On April 27, a seminar-training was held for the teaching staff and employees of the university to explain internal anti-corruption documents and the requirements of the international standard ISO 37001. In accordance with the Decree of the President of the Republic of Uzbekistan dated April 29, 2020, PF-5987, measures are being taken at the university to ensure compliance of the anti-corruption system with international ISO 37001 standards.'
        ),
        S(
          'cooperation',
          'Отделом совместно с Агентством по противодействию коррупции Республики Узбекистан разработан совместный план, в рамках которого среди профессорско-преподавательского состава, сотрудников и студентов проводятся различные пропагандистские и просветительские мероприятия по противодействию коррупции.',
          'Jointly with the Anti-Corruption Agency of the Republic of Uzbekistan, the department developed a joint plan under which various promotional and educational anti-corruption events are held among faculty members, employees, and students.'
        ),
      ],
      staff: [
        P(['Хосилов Эркин Дилмуротович', 'начальник отдела внутреннего антикоррупционного контроля'], ['Khosilov Erkin Dilmurotovich', 'Head of the Internal Anti-Corruption Control Department']),
      ],
      audience: L(
        'Обращаться могут студенты, преподаватели и сотрудники университета по фактам коррупционных проявлений или подозрению в них — через Telegram-бот @tsul_anticorbot, телефон доверия или лично.',
        'Students, teachers, and staff members of the university may apply regarding instances of corruption or suspicions thereof — via the Telegram bot @tsul_anticorbot, the helpline, or in person.'
      ),
      contacts: contacts({
        phone: ['+998 71 233-42-09 (телефон доверия)'],
        telegram: ['t.me/tsulanticor', '@tsul_anticorbot'],
      }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-safety',
      category: 'administration',
      floor: 3,
      rooms: ['311'],
      name: L('Отдел охраны труда и гражданской защиты', 'Department of Occupational Health and Civil Protection', 'Mehnat muhofazasi va fuqaro muhofazasi bo‘limi'),
      summary: L(
        'Охрана труда, пожарная безопасность, действия при ЧС',
        'Occupational safety, fire safety, emergency response',
        'Mehnat muhofazasi, yong‘in xavfsizligi, favqulodda vaziyatlar'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, учебное здание №1, кабинет №311 (3-й этаж)',
        'Tashkent city, Sayilgokh Street, 35, Academic Building No. 1, Cabinet No. 311 (3rd floor)'
      ),
      motto: L('«Своевременно предупредить, спасти и помочь»', '"Timely warn, rescue, and help."'),
      sections: [
        S(
          'mission',
          'Один из стратегических отделов университета. Мы поддерживаем постоянную предупредительно-профилактическую работу среди сотрудников и студентов, проводим обучение и контроль за соблюдением правил пожарной и технической безопасности, а также за правильными действиями сотрудников и студентов при чрезвычайных ситуациях.',
          'One of the strategic departments of the university. We maintain continuous preventive work among employees and students, provide training and monitor compliance with fire and technical safety rules, as well as the correct actions of employees and students during emergencies.'
        ),
        S(
          'tasks',
          'Заблаговременное предотвращение рисков и угроз чрезвычайных ситуаций, оказание своевременной и комплексной помощи населению при возникновении опасности для их жизни и здоровья. Работаем по трём направлениям: охрана и безопасность труда; гражданская защита в чрезвычайных ситуациях; пожарная и техническая безопасность.',
          'Advance prevention of risks and threats of emergency situations, provision of timely and comprehensive assistance to the population in case of danger to their life and health. We operate in three directions: occupational health and safety; civil protection in emergencies; fire and technical safety.'
        ),
        S(
          'activity',
          'Постоянно работаем над повышением квалификации, совершенствуем знания и навыки по охране труда и пожарной безопасности, обмениваемся опытом с коллегами по линии МЧС Республики Узбекистан, а также со специалистами России, Белоруссии и Японии. Реализуем мероприятия по предупреждению несчастных случаев и травматизма на рабочем месте, по предупреждению и ликвидации чрезвычайных ситуаций, подготовке работников и студентов к действиям при ЧС, а также по оповещению с помощью автоматических систем и обеспечению готовности сил и средств к действиям при ЧС. К мероприятиям привлекаются опытные специалисты МЧС, правоохранительных органов и медицинский персонал; проводятся показательные и практические занятия по оказанию первой помощи.',
          'We constantly work on professional development, improve knowledge and skills in occupational safety and fire safety, exchange experience with colleagues from the Ministry of Emergency Situations of the Republic of Uzbekistan, as well as specialists from Russia, Belarus, and Japan. We implement measures to prevent workplace accidents and injuries, to prevent and eliminate emergencies, to prepare employees and students for action during emergency situations, as well as for notification via automated systems and ensuring the readiness of forces and means for actions during emergencies. Experienced specialists from the Ministry of Emergency Situations, law enforcement agencies, and medical personnel are involved in events; demonstration and practical sessions on first aid are conducted.'
        ),
      ],
      staff: [
        P(['Давакеев Марат Ражабович', 'начальник отдела гражданской защиты и охраны труда'], ['Davakeev Marat Razhabovich', 'Head of the Department of Civil Protection and Occupational Health']),
        P(['Турсунов Собир Дониевич', 'инженер по гражданской защите и чрезвычайным ситуациям'], ['Tursunov Sobir Donievich', 'Engineer for Civil Protection and Emergency Situations']),
      ],
      audience: L(
        'Обращаться могут сотрудники и студенты по вопросам охраны труда, пожарной и технической безопасности, а также действий при чрезвычайных ситуациях.',
        'Employees and students may apply regarding occupational safety, fire and technical safety, as well as actions during emergency situations.'
      ),
      contacts: contacts({ phone: ['(99) 489-95-50'], email: ['davakeev.m@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-legal-bureau',
      category: 'administration',
      floor: 1,
      rooms: ['127'],
      name: L('Юридическое бюро', 'Legal Bureau', 'Yuridik byuro'),
      summary: L(
        'Правовая экспертиза локальных актов, договорно-правовая и претензионная работа',
        'Legal expertise of local acts, contractual and claims work',
        'Lokal hujjatlar ekspertizasi, shartnoma-huquqiy ish'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, учебное здание №1, кабинет №127',
        'Tashkent city, Sayilgokh Street, 35, Academic Building No. 1, Cabinet No. 127'
      ),
      sections: [
        S(
          'goal',
          'Юридическое бюро — структурное подразделение ТГЮУ, главными направлениями деятельности которого являются организация обеспечения верховенства закона и законности в правоприменительной деятельности университета; контроль за соответствием законодательству проектов локальных актов и иных документов; участие в нормотворческой деятельности, ведение договорно-правовой и претензионно-исковой работы, защита имущественных и иных интересов университета; возвращение на доработку проектов документов, не отвечающих требованиям законодательства, подготовка правовых заключений; участие в проверках, ревизиях и инвентаризациях, подготовка правовых заключений по выявленным правонарушениям.',
          'The Legal Bureau is a structural unit of TSUL whose main areas of activity are organizing the rule of law and legality in the law enforcement activities of the university; monitoring compliance of draft local acts and other documents with legislation; participating in normative activity, conducting contractual-legal and claims-litigation work, protecting property and other interests of the university; returning draft documents that do not meet legal requirements for revision, preparing legal opinions; participating in inspections, audits, and inventories, preparing legal opinions on identified violations.'
        ),
      ],
      staff: [
        P(['Хосилов Эркин Дилмуротович', 'старший юрисконсульт'], ['Khosilov Erkin Dilmurotovich', 'Senior Legal Counsel']),
        P(['Сафаров Алишер Мусурмон угли', 'юрисконсульт'], ['Safarov Alisher Musurmon ugli', 'Legal Counsel']),
      ],
      audience: L(
        'Обращаться могут структурные подразделения университета по вопросам правовой экспертизы локальных актов, договорно-правовой и претензионно-исковой работы.',
        'Structural units of the university may apply regarding issues of legal expertise of local acts, contractual-legal, and claims-litigation work.'
      ),
      contacts: contacts({ phone: ['233-66-36', '1181 (внутр.)'], email: ['www.e.hosilov@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-operations',
      category: 'administration',
      floor: 1,
      rooms: ['105'],
      name: L('Управление по эксплуатации и ремонту', 'Department for Operation and Repair', 'Ekspluatatsiya va ta’mirlash boshqarmasi'),
      summary: L(
        'Эксплуатация, ремонт и техническое состояние зданий университета',
        'Operation, repair and technical condition of university buildings',
        'Universitet binolarini ekspluatatsiya qilish va ta’mirlash'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, учебное здание №1, кабинет №105',
        'Tashkent city, Sayilgokh Street, House 35, Academic Building No. 1, Cabinet No. 105'
      ),
      sections: [
        S(
          'mission',
          'Организует эксплуатацию и ремонт зданий ТГЮУ. Мы проводим профилактические и ремонтные работы в учебных и студенческих зданиях, Доме проживания студентов, текущий и капитальный ремонт, электроснабжение и обслуживание зданий, создавая благоприятные условия для профессорско-преподавательского состава, сотрудников и студентов.',
          'Organizes the operation and repair of TSUL buildings. We conduct preventive and repair work in academic and student buildings, the Student Residence Hall, routine and capital repairs, power supply, and maintenance of buildings, creating favorable conditions for teaching staff, employees, and students.'
        ),
        S(
          'works',
          'В 2020 году проводились текущие ремонтные работы в аудиториях и коридорах учебного корпуса. Система отопления 1-го, 2-го и 3-го учебных корпусов регулярно обслуживается современной системой фенкойл и теплообменным оборудованием. Проведён текущий ремонт коридоров, душевых и санузлов Дома проживания студентов на основе современного дизайна; установлены 4 малых котла отопления Grizzly 150 klo. На территории Дома проживания студентов сооружены фонтаны и установлены современные приборы ночного видения. Проведён профилактический ремонт узлов систем горячего и холодного водоснабжения. Кровли 1-го и 3-го зданий обработаны для снижения воспламеняемости и осмотрены сотрудниками пожарной безопасности. Все внутренние и внешние электрические системы прошли испытание в лабораторных условиях. Осуществляется проверка технического состояния транспортных средств университета и контроль соблюдения правил дорожного движения. Постоянно ведутся работы по благоустройству и озеленению территории.',
          'In 2020, routine repair work was carried out in classrooms and corridors of the academic building. The heating system of the 1st, 2nd, and 3rd academic buildings is regularly serviced by a modern fan coil system and heat exchange equipment. Routine repair of corridors, showers, and sanitary facilities of the Student Residence Hall was conducted based on a modern design; 4 small Grizzly 150 klo heating boilers were installed. Fountains and modern night vision devices were installed on the territory of the Student Residence Hall. Preventive repair of hot and cold water supply system units was carried out. Roofs of the 1st and 3rd buildings were treated to reduce flammability and inspected by fire safety personnel. All internal and external electrical systems were tested under laboratory conditions. The technical condition of university vehicles is checked and compliance with traffic rules is monitored. Landscaping and greening of the territory are constantly carried out.'
        ),
      ],
      staff: [
        P(['Бозаров Ихтиёржон Хакимович', 'начальник управления'], ['Bozarov Ikhtiyorzhon Khakimovich', 'Head of Department']),
        P(['Ниёзов Одил Абдруахмонович', 'главный инженер отдела строительства и ремонта'], ['Niyozov Odil Abdruakhmonovich', 'Chief Engineer of the Construction and Repair Department']),
        P(['Юлдашев Олимжон Чоршанбиевич', 'главный энергетик отдела энергоснабжения'], ['Yuldashev Olimzhon Chorshanbievich', 'Chief Power Engineer of the Power Supply Department']),
        P(['Абдукадиров Абдираззак Абдусаматович', 'заведующий складом'], ['Abdukadirov Abdirazzak Abdusamatovich', 'Warehouse Manager']),
        P(['Алимов Шухрат Гулямжанович', 'техник-механик'], ['Alimov Shukhrat Gulyamzhanovich', 'Mechanical Technician']),
        P(['Салиева Мухтасархон Бегижоновна', 'инженер отдела строительства и ремонта'], ['Salieva Mukhtasarkhon Begizhonovna', 'Engineer of the Construction and Repair Department']),
        P(['Махмудова Сурайё Абдуманноповна', 'комендант 1-го здания отдела технического обслуживания'], ['Makhmudova Surayyo Abdumannopovna', 'Commandant of the 1st Building of the Technical Maintenance Department']),
        P(['Анварова Наргиза Абдурахимовна', 'комендант 2-го здания отдела технического обслуживания'], ['Anvarova Nargiza Abdurakhimovna', 'Commandant of the 2nd Building of the Technical Maintenance Department']),
        P(['Муратова Севара Бахтияровна', 'комендант 3-го здания отдела технического обслуживания'], ['Muratova Sevara Bakhtiyarovna', 'Commandant of the 3rd Building of the Technical Maintenance Department']),
      ],
      audience: L(
        'Обращаться могут сотрудники, преподаватели и студенты по вопросам эксплуатации, ремонта и технического состояния зданий университета и Дома проживания студентов.',
        'Employees, teachers, and students may apply regarding the operation, repair, and technical condition of university buildings and the Student Residence Hall.'
      ),
      contacts: contacts({ phone: ['71 233-66-36', '1010, 1039 (внутр.)'], email: ['www.i.bozarov@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-org-control',
      category: 'administration',
      floor: 2,
      rooms: ['202', '204'],
      name: L(
        'Управление организационного контроля и стратегического планирования',
        'Department of Organizational Control and Strategic Planning',
        'Tashkiliy nazorat va strategik rejalashtirish boshqarmasi'
      ),
      summary: L(
        'Исполнительская дисциплина, делопроизводство, архив',
        'Executive discipline, document management, archive',
        'Ijro intizomi, ish yuritish, arxiv'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, 1-й корпус, кабинет №202 (кабинет №204 указан также в исходных данных отдела)',
        'Tashkent city, Sayilgokh Street, 35, TSUL, 1st Building, Cabinet No. 202 (Cabinet No. 204 is also indicated in the department’s source data)'
      ),
      sections: [
        S(
          'goal',
          'Координация контрольной работы в университете, изучение состояния исполнительной дисциплины на кафедрах и в других структурных подразделениях, подготовка предложений по повышению эффективности исполнительного контроля, контроль делопроизводства и исполнения документов, их систематический анализ и регулярный мониторинг.',
          'Coordination of control work at the university, studying the state of executive discipline at departments and in other structural units, preparing proposals to increase the effectiveness of executive control, monitoring office work and document execution, their systematic analysis, and regular monitoring.'
        ),
        S(
          'legalBasis',
          'Деятельность управления регулируется Дополнением Управления мониторинга и организационного контроля к Приказу Министра юстиции Республики Узбекистан от 21 октября 2020 года №194-ум и пунктом 17 Указа Президента Республики Узбекистан от 29 апреля 2020 года УП-5987. В штате управления — 9 постоянных сотрудников.',
          'The department’s activities are regulated by the Addition of the Monitoring and Organizational Control Department to Order No. 194-um of the Minister of Justice of the Republic of Uzbekistan dated October 21, 2020, and Clause 17 of Decree No. UP-5987 of the President of the Republic of Uzbekistan dated April 29, 2020. There are 9 permanent employees on the department staff.'
        ),
        S(
          'structure',
          'В состав управления входят Отдел мониторинга и внутреннего контроля, Канцелярия и Архив.',
          'The department includes the Monitoring and Internal Control Division, the Chancellery, and the Archive.'
        ),
      ],
      staff: [
        P(['Назаров Уткир Эркинович', 'начальник управления'], ['Nazarov Utkir Erkinovich', 'Head of the Department of Organizational Control and Strategic Planning']),
        P(['Нуруллаев Шохрух Шухратуллаевич', 'методист отдела мониторинга и внутреннего контроля'], ['Nurullaev Shokhrukh Shukhratullaevich', 'Methodologist of the Monitoring and Internal Control Division']),
        P(['Исроилов Бехруз Дилшодович', 'инспектор отдела мониторинга и внутреннего контроля'], ['Isroilov Bekhruz Dilshodovich', 'Inspector of the Monitoring and Internal Control Division']),
        P(['Эргашев Нодир Хайдарович', 'заведующий канцелярией'], ['Ergashev Nodir Khaidarovich', 'Head of the Chancellery']),
        P(['Сайфиходжаев Ботирходжа Фарходходжаевич', 'делопроизводитель канцелярии'], ['Sayfikhodjaev Botirkhodja Farkhodkhodjaevich', 'Clerk of the Chancellery']),
        P(['Абуова Богдагыл Уралбаевна', 'заведующая архивом'], ['Abuova Bogdagyl Uralbaevna', 'Head of the Archive']),
        P(['Сотимов Элдор Музаффарович', 'архивариус'], ['Sotimov Eldor Muzaffarovich', 'Archivist']),
      ],
      audience: L(
        'Обращаться могут структурные подразделения университета по вопросам делопроизводства, исполнительской дисциплины, а также по вопросам работы с архивом.',
        'Structural units of the university may apply regarding office work, executive discipline, as well as matters regarding work with the archive.'
      ),
      contacts: contacts({ phone: ['233-66-36', '1007, 1038, 1144 (внутр.)'], email: ['info@tsul.uz', 'x.abdullayev@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-chancellery',
      category: 'administration',
      floor: 1,
      rooms: ['109'],
      name: L('Канцелярия', 'Chancellery', 'Devonxona'),
      summary: L(
        'Регистрация, оформление и движение служебной документации',
        'Registration, processing and movement of official documentation',
        'Xizmat hujjatlarini ro‘yxatga olish va harakati'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, 1-й корпус, кабинет №109',
        'Tashkent city, Sayilgokh Street, 35, TSUL, 1st Building, Cabinet No. 109'
      ),
      sections: [
        S(
          'about',
          'Канцелярия — структурное подразделение в составе Управления организационного контроля и стратегического планирования ТГЮУ, отвечающее за делопроизводство университета.',
          'The Chancellery is a structural unit within the Department of Organizational Control and Strategic Planning of TSUL, responsible for the university’s office work.'
        ),
        S(
          'tasks',
          'Приём, регистрация, учёт и контроль исполнения входящей и исходящей документации университета; организация документооборота между структурными подразделениями; подготовка и оформление служебной документации в соответствии с установленными требованиями.',
          'Receipt, registration, record-keeping, and execution control of incoming and outgoing documentation of the university; organization of document flow between structural units; preparation and processing of official documentation in accordance with established requirements.'
        ),
      ],
      staff: [
        P(['Эргашев Нодир Хайдарович', 'заведующий канцелярией'], ['Ergashev Nodir Khaidarovich', 'Head of the Chancellery']),
        P(['Сайфиходжаев Ботирходжа Фарходходжаевич', 'делопроизводитель канцелярии'], ['Sayfikhodjaev Botirkhodja Farkhodkhodjaevich', 'Clerk of the Chancellery']),
      ],
      audience: L(
        'Обращаться могут сотрудники, преподаватели и студенты по вопросам регистрации, оформления и движения служебной документации и официальных обращений.',
        'Employees, teachers, and students may apply regarding the registration, processing, and movement of official documentation and official inquiries.'
      ),
      contacts: contacts({ phone: ['233-66-36', '1007, 1038, 1144 (внутр.)'], email: ['info@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-legal-clinic',
      category: 'service',
      floor: 1,
      rooms: ['124', '129'],
      name: L('Юридическая клиника', 'Legal Clinic', 'Yuridik klinika'),
      summary: L(
        'Бесплатные юридические консультации для граждан и практика для студентов',
        'Free legal consultations for citizens and practice for students',
        'Fuqarolar uchun bepul yuridik maslahat va talabalar amaliyoti'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, учебное здание №1 ТГЮУ, кабинет №124 (кабинет №129 указан также в исходных данных)',
        'Tashkent city, Sayilgokh Street, House 35, Academic Building No. 1 of TSUL, Cabinet No. 124 (Cabinet No. 129 is also indicated in the source data)'
      ),
      hours: L('С понедельника по пятницу с 10:00 до 15:00', 'Monday through Friday from 10:00 to 15:00', 'Dushanbadan jumagacha 10:00–15:00'),
      sections: [
        S(
          'goal',
          'Обеспечить взаимосвязь теоретических знаний студентов университета с практикой, развить у студентов практические навыки, а также оказывать физическим и юридическим лицам бесплатные юридические консультации.',
          'To ensure the interconnection of students’ theoretical knowledge with practice, to develop practical skills in students, and to provide free legal consultations to physical and legal entities.'
        ),
        S(
          'partners',
          'Клиника сотрудничает с ведущими образовательными и научными учреждениями, международными организациями и юридическими клиниками мира, в их числе Ассоциация юридических клиник Кыргызской Республики, Евразийский фонд, Программа развития ООН, USAID, американская компания Street Law Inc., Управление ООН по наркотикам и преступности (UNODC), Программа развития ООН (UNDP), университеты Нью-Йорка и Сиракьюса (США). Клиника также сотрудничает с Союзом молодёжи Узбекистана, адвокатской фирмой «Interlex», Ассоциацией волонтёров Республики Узбекистан, общенациональным движением «Юксалиш», Всемирной ассоциацией молодёжи Узбекистана, ННО «Мехр va Оқибат», общественным объединением инвалидов «SHAROIT PLYUS» города Ташкента и учреждением «Мадад».',
          'The clinic cooperates with leading educational and scientific institutions, international organizations, and legal clinics of the world, including the Association of Legal Clinics of the Kyrgyz Republic, Eurasia Foundation, UNDP, USAID, American company Street Law Inc., United Nations Office on Drugs and Crime (UNODC), United Nations Development Programme (UNDP), New York University and Syracuse University (USA). The clinic also cooperates with the Youth Union of Uzbekistan, the "Interlex" law firm, the Association of Volunteers of the Republic of Uzbekistan, the "Yuksalish" nationwide movement, the World Association of Youth of Uzbekistan, NGO "Mehr va Oqibat", Tashkent city public association of persons with disabilities "SHAROIT PLYUS", and the "Madad" institution.'
        ),
        S(
          'stats',
          'В течение 2023 года юридическая клиника рассмотрела в общей сложности 2 462 обращения граждан: 1 259 — в онлайн-формате, 1 203 — офлайн, то есть при личном обращении в клинику.',
          'During 2023, the Legal Clinic reviewed a total of 2,462 citizens’ applications: 1,259 online and 1,203 offline, i.e., during personal visits to the clinic.'
        ),
        S(
          'education',
          'Под девизом «Повышение правового сознания и правовой культуры в обществе — приоритетная задача» студенты и преподаватели клиники проводят пропагандистские мероприятия и выездные приёмы граждан.',
          'Under the motto "Raising legal awareness and legal culture in society is a priority task", students and teachers of the clinic conduct promotional activities and field receptions of citizens.'
        ),
        SL(
          'projects',
          [
            'проект Street Law;',
            'конкурс «Лучший студент, принимающий граждан»;',
            'конкурс «Лучшее юридическое видео»;',
            'интеллектуальная игра «Правовая смекалка»;',
            'работа с обращениями граждан;',
            'работа с онлайн-обращениями.',
          ],
          [
            'Street Law project;',
            'Competition "Best Student Receiving Citizens";',
            'Competition "Best Legal Video";',
            'Intellectual game "Legal Acumen";',
            'Work with citizens’ applications;',
            'Work with online applications.',
          ]
        ),
        S(
          'socials',
          'Официальные страницы клиники ведутся в Instagram, Facebook, Telegram (на узбекском и русском языках), YouTube и TikTok. На основе анализа обращений и выездных приёмов по наиболее актуальным правовым вопросам готовятся серии небольших популярных практических пособий.',
          'Official pages of the clinic are maintained on Instagram, Facebook, Telegram (in Uzbek and Russian languages), YouTube, and TikTok. Based on the analysis of applications and field receptions, series of small popular practical handbooks are prepared on the most relevant legal issues.'
        ),
      ],
      staff: [
        P(['Нарзиев Отабек Садиевич', 'руководитель Юридической клиники, доктор юридических наук, профессор'], ['Narziev Otabek Sadievich', 'Head of the Legal Clinic, Doctor of Law, Professor']),
        P(['Эшонкулов Жавохир Фазлиддинович', 'методист Юридической клиники'], ['Eshonkulov Zhavokhir Fazliddinovich', 'Methodologist of the Legal Clinic']),
        P(['Арипбаева Айгерим Бахтияровна', 'методист Юридической клиники'], ['Aripbaeva Aigerim Bakhtiyarovna', 'Methodologist of the Legal Clinic']),
      ],
      audience: L(
        'Обращаться могут физические и юридические лица за бесплатной юридической консультацией, а также студенты для получения практических навыков.',
        'Physical and legal entities may apply for free legal advice, as well as students to obtain practical skills.'
      ),
      contacts: contacts({
        phone: ['71 236 28 55, 1-1 (внутр.)', '71 233-66-36, 1114 (внутр.)'],
        email: ['lawclinic@tsul.uz'],
        telegram: ['@TDYU_Yuridik_klinika_bot'],
      }),
    },

    /* ================= КАФЕДРЫ ЗДАНИЯ №1 ============================== */
    {
      id: 'b1-dep-constitutional',
      category: 'department',
      floor: 2,
      rooms: ['214А'],
      name: L('Кафедра конституционного права', 'Department of Constitutional Law', 'Konstitutsiyaviy huquq kafedrasi'),
      summary: L(
        '13 дисциплин, 5 профессоров, сотрудничество с Конституционным судом и ЦИК',
        '13 subjects, 5 professors, cooperation with the Constitutional Court and CEC',
        '13 ta fan, 5 professor, Konstitutsiyaviy sud bilan hamkorlik'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, учебное здание №1, кабинет №214А',
        'Tashkent City, Sayilgoh Street 35, Academic Building 1, Room 214A'
      ),
      motto: L(
        '«Благосостояние народа — высший закон» (Salus Populi Suprema Lex), Цицерон',
        '"The welfare of the people is the supreme law" (Salus Populi Suprema Lex), Cicero'
      ),
      sections: [
        S(
          'goal',
          'Стать одной из самых престижных школ мира в области конституционного права, в которой работают ведущие учёные и обучаются представители международного уровня. Деятельность кафедры направлена на создание и использование учебных материалов по конституционному праву и смежным модулям, соответствующих международным стандартам. Мы стремимся всесторонне изучить процессы, связанные с конституционным правом в стране, мире и гражданском обществе, ознакомиться с международным опытом, а также исследовать и разрабатывать нормативные документы в этой сфере. Сотрудничаем с палатами Олий Мажлиса Республики Узбекистан, Конституционным судом, Центральной избирательной комиссией, Министерством юстиции, правоохранительными органами, некоммерческими организациями и вузами республики.',
          'To become one of the world’s most prestigious schools, home to leading scholars in constitutional law and educating international representatives. The department’s activities are aimed at creating and utilizing educational materials in constitutional law and related modules that meet international standards. We strive to thoroughly study processes related to constitutional law in our country, the world, and civil society, learn from international experience, and research and develop regulatory documents in this field. We cooperate with the chambers of the Oliy Majlis of the Republic of Uzbekistan, the Constitutional Court, the Central Election Commission, the Ministry of Justice, law enforcement agencies, non-governmental organizations, and higher education institutions across the republic.'
        ),
        SL(
          'tasks',
          [
            'анализ изменений в Конституции и законодательстве Узбекистана;',
            'разработка предложений по совершенствованию законодательства;',
            'проведение научных конференций, краудсорсингов и круглых столов;',
            'анализ конституций Узбекистана и зарубежных стран;',
            'подготовка учебников, учебных пособий и научных статей;',
            'организация посещений студентами органов государственной власти;',
            'взаимодействие с зарубежными университетами и исследовательскими центрами;',
            'участие в международных проектах по конституционному праву.',
          ],
          [
            'Analyze changes in the Constitution and legislation of Uzbekistan;',
            'Develop proposals to improve legislation;',
            'Host academic conferences, crowdsourcing events, and roundtables;',
            'Analyze the constitutions of Uzbekistan and foreign countries;',
            'Prepare textbooks, study guides, and academic articles;',
            'Organize student visits to state authorities;',
            'Cooperate with foreign universities and research centers;',
            'Participate in international projects on constitutional law.',
          ]
        ),
        S(
          'subjects',
          'Кафедра ведёт обучение по 13 предметам: 9 на уровне бакалавриата (Конституционное право, Парламентское право, Сравнительное конституционное право, Конституционное правосудие, Органы местной власти; по выбору — Избирательное право, Право органов самоуправления, Право негосударственных некоммерческих организаций, Процесс законотворчества) и 4 на уровне магистратуры (Научные и практические проблемы конституционного права, Конституционный контроль и конституционное правосудие, модули права НПО/НГО; по выбору — Право СМИ).',
          'The department teaches 13 subjects: 9 at the undergraduate level (Constitutional Law, Parliamentary Law, Comparative Constitutional Law, Constitutional Justice, Local Authorities; elective subjects — Electoral Law, Law of Self-Government Bodies, Law of Non-Governmental Non-Profit Organizations, Legislative Process) and 4 at the master’s level (Scientific and Practical Problems of Constitutional Law, Constitutional Review and Constitutional Justice, NGO Law modules; elective subject — Media Law).'
        ),
        S(
          'capacity',
          'В 2025 году кафедрой опубликовано 58 статей в журналах, включённых в перечень ВАК, в том числе 15 в международных журналах, 24 — на международных конференциях, 8 статей в изданиях, включённых в базу данных Scopus, 3 учебника, 28 учебных пособий, 5 монографий. В штате кафедры — 5 профессоров с учёной степенью (5 докторов наук), 2 и.о. профессора (2 доктора наук), 1 доцент (доктор философских наук), 3 старших преподавателя, 5 доцентов и.о. (5 кандидатов наук), 9 преподавателей, а также 62 независимых соискателя и 1 докторант.',
          'In 2025, the department published 58 articles in journals indexed by the Higher Attestation Commission (OAK), 15 of which were in international journals, 24 in international conferences, 8 in publications indexed in the Scopus database, along with 3 textbooks, 28 study guides, and 5 monographs. The department staff includes 5 full professors (5 Doctors of Science), 2 acting professors (2 Doctors of Science), 1 associate professor (PhD), 3 senior lecturers, 5 acting associate professors (5 Candidates of Science), 9 lecturers, as well as 62 independent researchers and 1 doctoral candidate.'
        ),
        S(
          'cooperation',
          'Кафедра сотрудничает с вузами, входящими в первую 1000 мест рейтингов QS World University Rankings, Times Higher Education, Academic Ranking of World Universities, а также с Университетом Нагоя. Налажено сотрудничество с законодательной палатой и Сенатом Олий Мажлиса, Кабинетом Министров, Конституционным судом, Центральной избирательной комиссией, Генеральной прокуратурой, Министерством юстиции Республики Узбекистан, Академией государственного управления, а также с Университетом мировой экономики и дипломатии, Академией правоохранительных органов, Университетом Общественной Безопасности, Академией МВД, Международным Вестминстерским университетом в Ташкенте. Профессора кафедры участвовали в разработке новой редакции Закона «О Конституционном Суде Республики Узбекистан» и Избирательного кодекса.',
          'The department collaborates with universities ranked among the top 1000 in the QS World University Rankings, Times Higher Education, and the Academic Ranking of World Universities, as well as Nagoya University. Cooperation has been established with the Legislative Chamber and Senate of the Oliy Majlis, the Cabinet of Ministers, the Constitutional Court, the Central Election Commission, the General Prosecutor’s Office, the Ministry of Justice of the Republic of Uzbekistan, the Academy of State Administration, as well as the University of World Economy and Diplomacy, the Law Enforcement Academy, the University of Public Security, the Academy of the Ministry of Internal Affairs, and Westminster International University in Tashkent. Professors of the department participated in drafting the new editions of the Law "On the Constitutional Court of the Republic of Uzbekistan" and the Electoral Code.'
        ),
      ],
      staff: [
        P(['Беков Ихтиёр Рустамович', 'заведующий кафедрой'], ['Bekov Ikhtiyor Rustamovich', 'Head of Department']),
        P(['Ахмедов Давран Куванович', 'профессор, д.ю.н.'], ['Ahmedov Davran Kuvanovich', 'Professor, D.Sc. in Law']),
        P(['Кадыров Эшмухаммад Омантураевич', 'профессор, д.ю.н.'], ['Kadyrov Eshmukhammad Omanturaevich', 'Professor, D.Sc. in Law']),
        P(['Рузметов Хайрулло Ибадуллаевич', 'и.о. профессора, д.ю.н.'], ['Ruzmetov Khayrullo Ibadullayevich', 'Acting Professor, D.Sc. in Law']),
        P(['Юлдашев Азизжон Эргаш угли', 'и.о. профессора, д.ю.н.'], ['Yuldashev Azizjon Ergash ugli', 'Acting Professor, D.Sc. in Law']),
        P(['Караходжаева Окилахон Руфатовна', 'профессор, д.ю.н.'], ['Karakhodjayeva Okilakhon Rufatovna', 'Professor, D.Sc. in Law']),
        P(['Мадиев Фахриддин Хошим угли', 'и.о. доцента, д.ю.ф.н.'], ['Madiyev Fakhriddin Khoshim ugli', 'Acting Associate Professor, PhD in Law']),
        P(['Алиева Камола Равшановна', 'и.о. доцента, д.ю.ф.н.'], ['Aliyeva Kamola Ravshanovna', 'Acting Associate Professor, PhD in Law']),
        P(['Бокиев Жахонгир Нурматжон угли', 'заместитель заведующего кафедрой, д.ю.ф.н.'], ['Bokiyev Jakhongir Nurmatjon ugli', 'Deputy Head of Department, PhD in Law']),
        P(['Илхомбеков Жасурбек Илхомбек угли', 'и.о. доцента, д.ю.ф.н.'], ['Ilkhombekov Jasurbek Ilkhombek ugli', 'Acting Associate Professor, PhD in Law']),
        P(['Сафарова Хулкар Норбек кизи', 'и.о. доцента, д.ю.ф.н.'], ['Safarova Khulkar Norbek qizi', 'Acting Associate Professor, PhD in Law']),
        P(['Кудратиллаев Жахангир Закиржан угли', 'старший преподаватель'], ['Kudratillayev Jakhangir Zakirjan ugli', 'Senior Lecturer']),
        P(['Саидов Рустамбек Абдурасулович', 'старший преподаватель, д.ю.ф.н.'], ['Saidov Rustambek Abdurasulovich', 'Senior Lecturer, PhD in Law']),
        P(['Аслонова Лайло Олимовна', 'преподаватель'], ['Aslonova Laylo Olimovna', 'Lecturer']),
        P(['Турсунов Мухаммаджон Отабек угли', 'преподаватель'], ['Tursunov Mukhammadjon Otabek ugli', 'Lecturer']),
        P(['Файзиева Гулрух Мухаммади кизи', 'преподаватель'], ['Fayziyeva Gulrukh Mukhammadi qizi', 'Lecturer']),
        P(['Хакимов Суннат Фуркат угли', 'преподаватель'], ['Khakimov Sunnat Furqat ugli', 'Lecturer']),
        P(['Зайнобидинова Юлдуз Бахтиер кизи', 'преподаватель'], ['Zaynobidinova Yulduz Bakhtiyor qizi', 'Lecturer']),
        P(['Абдурайимов Мухаммад Суванкул угли', 'преподаватель'], ['Abdurayimov Mukhammad Suvankul ugli', 'Lecturer']),
        P(['Собиров Умид Собир угли', 'преподаватель'], ['Sobirov Umid Sobir ugli', 'Lecturer']),
        P(['Бобожонов Жавохир Ислом угли', 'преподаватель'], ['Bobojonov Javohir Islom ugli', 'Lecturer']),
        P(['Хашимхонов Ахрорхон Муминович', 'профессор (по совместительству)'], ['Khashimkhonov Akhrorkhon Muminovich', 'Professor (part-time)']),
        P(['Бабаджанов Атабек Давронбекович', 'профессор (по совместительству)'], ['Babadjanov Atabek Davronbekovich', 'Professor (part-time)']),
        P(['Умиров Фитрат Фахриддинович', 'старший преподаватель (по совместительству)'], ['Umirov Fitrat Fakhriddinovich', 'Senior Lecturer (part-time)']),
        P(['Авезов Дилшод', 'преподаватель (по совместительству)'], ['Avezov Dilshod', 'Lecturer (part-time)']),
      ],
      consultations: [
        C(L('Беков Ихтиёр', 'Bekov Ikhtiyor'), L('понедельник 9:00–12:00', 'Monday 9:00–12:00'), '110'),
        C(L('Кадыров Эшмухаммад', 'Kadyrov Eshmukhammad'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '109'),
        C(L('Юлдашев Азизжон', 'Yuldashev Azizjon'), L('среда 9:00–12:00', 'Wednesday 9:00–12:00'), '109'),
        C(L('Бокиев Жахонгир', 'Bokiyev Jakhongir'), L('четверг 9:00–12:00', 'Thursday 9:00–12:00'), '109'),
        C(L('Мадиев Фахриддин', 'Madiyev Fakhriddin'), L('пятница 9:00–12:00', 'Friday 9:00–12:00'), '109'),
      ],
      audience: L(
        'Обращаться могут студенты по учебным вопросам, апелляциям и научной работе по конституционному праву.',
        'Students can reach out regarding academic issues, appeals, and research work in constitutional law.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-dep-labour',
      category: 'department',
      floor: 1,
      rooms: ['120', '207А'],
      name: L('Кафедра трудового права', 'Department of Labor Law', 'Mehnat huquqi kafedrasi'),
      summary: L(
        'Трудовое право и право социального обеспечения, кружок «Защитник трудового права»',
        'Labour law and social security law, "Protector of Labour Law" research club',
        'Mehnat huquqi va ijtimoiy ta’minot huquqi'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, учебное здание №1, кабинет №120 (график консультаций — кабинет №207А)',
        'Tashkent City, Sayilgoh Street 35, Academic Building 1, Room 120 (Consultation schedule — Room 207A)'
      ),
      motto: L(
        '«Подготовка высококвалифицированных кадров — наша главная задача»',
        '"Training highly qualified personnel is our primary task."'
      ),
      sections: [
        S(
          'goal',
          'Изучение и развитие отрасли как отечественного, так и зарубежного трудового права, рассмотрение и разработка нормативных актов, формирование у студентов навыков анализа нормативно-правовых актов и понимания основополагающих институтов трудового права. Кафедра поддерживает тесные научные и практические связи с образовательными учреждениями, научными центрами, государственными органами и учреждениями, систематически проводит мастер-классы с привлечением специалистов Министерства юстиции, Верховного суда, Академии Генеральной прокуратуры, Министерства занятости и трудовых отношений, Федерации профсоюзов Узбекистана и других организаций.',
          'To study and develop domestic and foreign labor law, review and draft regulatory documents, and cultivate students’ skills in analyzing normative legal acts and understanding the core institutions of labor law. The department maintains strong academic and practical links with educational institutions, research centers, state bodies, and organizations, regularly organizing masterclasses with experts from the Ministry of Justice, the Supreme Court, the Academy of the General Prosecutor’s Office, the Ministry of Employment and Labor Relations, the Federation of Trade Unions of Uzbekistan, and other organizations.'
        ),
        SL(
          'tasks',
          [
            'реализация компетентного подхода к подготовке бакалавров и магистров, способных решать профессиональные задачи;',
            'повышение качества образовательного процесса за счёт укомплектования штата высокопрофессиональными кадрами;',
            'разработка и совершенствование методического обеспечения учебного процесса, внедрение новых образовательных технологий, проведение встреч с работодателями и мастер-классов экспертов;',
            'развитие сотрудничества с органами законодательной, исполнительной и судебной власти, прокуратуры, работодателями и образовательными учреждениями.',
          ],
          [
            'Implement a competency-based approach to preparing bachelors and masters capable of solving professional tasks;',
            'Enhance the quality of the educational process by staffing with highly qualified personnel;',
            'Develop and improve the methodological support of the learning process, introduce new educational technologies, and organize meetings with employers and masterclasses with experts;',
            'Expand cooperation with legislative, executive, and judicial authorities, prosecutor’s offices, employers, and educational institutions.',
          ]
        ),
        S(
          'subjects',
          '«Трудовое право» — для бакалавриата; «Право социального обеспечения», «Сравнительное трудовое право», «Разрешение трудовых споров», «Правовое регулирование трудовых договоров» — для магистратуры.',
          'Undergraduate level — "Labor Law"; Master’s level — "Social Security Law", "Comparative Labor Law", "Labor Dispute Resolution", "Legal Regulation of Employment Contracts".'
        ),
        S(
          'capacity',
          'Из профессорско-преподавательского состава кафедры 4 имеют учёную степень (2 доктора наук, 2 кандидата наук), 7 ведут научные исследования. Кафедрой опубликовано 2 монографии, 33 статьи ВАК, 3 статьи в Scopus. На кафедре действует научный кружок «Защитник трудового права», объединяющий более 200 студентов, а также телеграм-канал «Mehnat huquqi» для информирования населения о новшествах в сфере трудовых отношений и социального обеспечения.',
          '4 members of the department’s teaching staff hold academic degrees (2 Doctors of Science, 2 Candidates of Science), and 7 are conducting academic research. The department has published 2 monographs, 33 articles in OAK-indexed journals, and 3 articles in Scopus. The department runs the "Protector of Labor Law" student research club, uniting over 200 students, as well as the "Labor Law" Telegram channel to inform the public about developments in labor relations and social security.'
        ),
      ],
      staff: [
        P(['Исмоилов Шухратжон Абдусаминович', 'заведующий кафедрой, доктор юридических наук (DSc)'], ['Ismoilov Shukhratjon Abdusaminovich', 'Head of Department, Doctor of Science in Law (DSc)']),
        P(['Бурханходжаева Хуршида Вахдатовна', 'доцент кафедры, кандидат юридических наук'], ['Burkhanjodjayeva Khurshida Vakhdatovna', 'Associate Professor, Candidate of Science in Law']),
        P(['Хамрокулов Баҳодир Мамашарипович', 'преподаватель кафедры, доктор юридических наук (DSc)'], ['Khamrokulov Bahodir Mamasharipovich', 'Lecturer, Doctor of Science in Law (DSc)']),
        P(['Рахимов Мирёкуб Актамович', 'преподаватель кафедры, PhD'], ['Rakhimov Miryokub Aktamovich', 'Lecturer, PhD in Law']),
        P(['Каримжонов Мухаммадамин Мухаммадалиевич', 'преподаватель кафедры'], ['Karimjonov Mukhammadamin Mukhammadaliyevich', 'Lecturer']),
        P(['Муродуллаев Достонжон Нигматулло угли', 'преподаватель кафедры'], ['Murodullayev Dostonjon Nigmatullo ugli', 'Lecturer']),
        P(['Хожабеков Муфтулла Жолмурза ули', 'преподаватель кафедры'], ['Khojabekov Muftulla Jolmursa uli', 'Lecturer']),
        P(['Рахимқулова Лола Улугмуродовна', 'преподаватель кафедры'], ['Rakhimkulova Lola Ulugmurodovna', 'Lecturer']),
        P(['Хакбердиев Азиз Комилович', 'преподаватель кафедры'], ['Khakberdiyev Aziz Komilovich', 'Lecturer']),
        P(['Юсупов Нодирбек Абдужалилович', 'преподаватель кафедры'], ['Yusupov Nodirbek Abdujalilovich', 'Lecturer']),
        P(['Авазов Бобомурод Султонмуродович', 'преподаватель кафедры'], ['Avazov Bobomurod Sultonmurodovich', 'Lecturer']),
      ],
      consultations: [
        C(L('Исмоилов Шухратжон', 'Ismoilov Shukhratjon'), L('понедельник 10:00–12:00', 'Monday 10:00–12:00'), '207А'),
        C(L('Бурханходжаева Хуршида', 'Burkhanjodjayeva Khurshida'), L('вторник 11:00–13:00', 'Tuesday 11:00–13:00'), '207А'),
        C(L('Хамрокулов Баходир', 'Khamrokulov Bahodir'), L('пятница 15:00–17:00', 'Friday 15:00–17:00'), '207А'),
        C(L('Рахимов Мирёкуб', 'Rakhimov Miryokub'), L('понедельник 10:00–12:00', 'Monday 10:00–12:00'), '207А'),
        C(L('Каримжонов Мухаммадамин', 'Karimjonov Mukhammadamin'), L('среда 10:00–12:00', 'Wednesday 10:00–12:00'), '207А'),
        C(L('Муродуллаев Достонжон', 'Murodullayev Dostonjon'), L('пятница 14:00–16:00', 'Friday 14:00–16:00'), '207А'),
        C(L('Хожабеков Муфтулла', 'Khojabekov Muftulla'), L('четверг 09:00–12:00', 'Thursday 09:00–12:00'), '207А'),
        C(L('Рахимкулова Лола', 'Rakhimkulova Lola'), L('четверг 14:00–16:00', 'Thursday 14:00–16:00'), '207А'),
        C(L('Хакбердиев Азиз', 'Khakberdiyev Aziz'), L('среда 11:00–13:00', 'Wednesday 11:00–13:00'), '207А'),
        C(L('Юсупов Нодирбек', 'Yusupov Nodirbek'), L('четверг 14:00–17:00', 'Thursday 14:00–17:00'), '207А'),
        C(L('Авазов Бобомурод', 'Avazov Bobomurod'), L('понедельник 14:00–17:00', 'Monday 14:00–17:00'), '207А'),
      ],
      audience: L(
        'Обращаться могут студенты по учебным вопросам кафедры трудового права.',
        'Students can reach out regarding academic issues at the Department of Labor Law.'
      ),
      contacts: contacts({ phone: ['233-66-36 (1061)'], email: ['mehnat.tsul@umail.uz'], telegram: ['t.me/mehnathuquqi'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-dep-business',
      category: 'department',
      floor: 2,
      rooms: ['214'],
      name: L('Кафедра бизнес-права', 'Department of Business Law', 'Biznes huquqi kafedrasi'),
      summary: L(
        '8 направлений, 22 преподавателя, 3 научных кружка',
        '8 specialisations, 22 lecturers, 3 student research clubs',
        '8 yo‘nalish, 22 o‘qituvchi, 3 ilmiy to‘garak'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, учебное здание №1, кабинет №214',
        'Tashkent City, Sayilgoh Street 35, Academic Building 1, Room 214'
      ),
      motto: L('«Верховенство закона — гарантия бизнеса»', '"The rule of law is the guarantee of business."'),
      sections: [
        S(
          'mission',
          'Одна из лидирующих кафедр университета, которая проводит обучение и научную деятельность по 8 направлениям: «Бизнес-право», «Корпоративное право», «Конкурентное право», «Право ценных бумаг», «Инвестиционное право», «Право электронной коммерции», «Сравнительное корпоративное право», «Банкротное право». Кафедра тесно сотрудничает с Министерством юстиции, Верховным судом, Торгово-промышленной палатой, Агентством развития рынка капитала, Антимонопольным комитетом, правоохранительными органами и бизнес-структурами.',
          'To be one of the university’s leading departments, conducting educational and research activities across 8 specializations: "Business Law", "Corporate Law", "Competition Law", "Securities Law", "Investment Law", "E-Commerce Law", "Comparative Corporate Law", "Bankruptcy Law". The department works closely with the Ministry of Justice, the Supreme Court, the Chamber of Commerce and Industry, the Capital Market Development Agency, the Anti-Monopoly Committee, law enforcement agencies, and business entities.'
        ),
        SL(
          'tasks',
          [
            'ведём исследовательскую и преподавательскую деятельность по дисциплинам направления;',
            'формируем навыки практического применения норм предпринимательского законодательства;',
            'развиваем у студентов навыки сравнительного и логического мышления;',
            'даём молодёжи возможность самостоятельного образования и применения знаний на практике.',
          ],
          [
            'Conduct research and teaching activities across department subjects;',
            'Build practical skills in applying business legislation;',
            'Develop comparative and logical thinking skills in students;',
            'Provide young people with opportunities for self-education and practical application of knowledge.',
          ]
        ),
        S(
          'subjects',
          '5 дисциплин бакалавриата — Бизнес-право, Инвестиционное право, Корпоративное право, Конкурентное право, Право ценных бумаг; 3 дисциплины магистратуры — Право электронной коммерции, Сравнительное корпоративное право, Банкротное право.',
          'Undergraduate level — 5 subjects: Business Law, Investment Law, Corporate Law, Competition Law, Securities Law; Master’s level — 3 subjects: E-Commerce Law, Comparative Corporate Law, Bankruptcy Law.'
        ),
        S(
          'capacity',
          'Кафедра ведёт фундаментальное исследование «Совершенствование теоретических и научно-методических основ систематизации предпринимательских законодательных актов: национальный и зарубежный опыт» в рамках государственных научно-технических программ; на его основе изданы учебник, монография и около 100 научных статей. В 2018–2021 годах кафедрой изданы 8 монографий, более 80 научных статей, 7 статей в Scopus; проведены 3 международные и 3 республиканские научные конференции.',
          'Within the framework of state scientific and technical programs, the department is conducting fundamental research on "Improving the theoretical and scientific-methodological foundations of systemizing business legislation documents: national and foreign experience"; based on this, a textbook, a monograph, and about 100 academic articles have been published. From 2018 to 2021, the department published 8 monographs, over 80 academic articles, and 7 articles in Scopus; 3 international and 3 national scientific conferences were hosted.'
        ),
        S(
          'programs',
          'При кафедре действуют 3 научных кружка — «Business law tutorial», «AchilovaLawSchool», «LAWgical business», в рамках которых 98 талантливых студентов ведут исследовательскую деятельность по вопросам предпринимательского, корпоративного и конкурентного права.',
          'The department runs 3 student research clubs — "Business law tutorial", "AchilovaLawSchool", and "LAWgical business", where 98 talented students conduct research on business, corporate, and competition law issues.'
        ),
        S(
          'faculty',
          'На кафедре работает 22 преподавателя, из них 5 имеют докторскую степень, 6 — выпускники престижных зарубежных университетов. К учебному процессу привлекаются адвокаты и практические работники. Преподаватели кафедры — авторы 8 учебников, 30 пособий, 8 монографий, 12 учебно-методических пособий. В работе также участвуют 12 самостоятельных соискателей и 2 базовых докторанта.',
          'The department employs 22 lecturers, 5 of whom hold doctoral degrees, and 6 are graduates of prestigious foreign universities. Attorneys and practicing specialists are involved in the teaching process. The department staff are authors of 8 textbooks, 30 study guides, 8 monographs, and 12 educational-methodological guides. Additionally, 12 independent researchers and 2 basic doctoral candidates are participating in research.'
        ),
      ],
      staff: [
        P(['Раджапов Хусаин Муҳаммад угли', 'PhD, заведующий кафедрой'], ['Radjapov Khusain Mukhammad ugli', 'PhD, Head of Department']),
        P(['Рўзиназаров Шухрат Нуралиевич', 'д.ю.н., профессор'], ['Ruzinasarov Shukhrat Nuraliyevich', 'D.Sc. in Law, Professor']),
        P(['Ходжаев Бахшилла Камалович', 'д.ю.н., DSc Университета Нагоя (Япония), профессор'], ['Khodjayev Bakhshilla Kamalovich', 'D.Sc. in Law, Nagoya University DSc (Japan), Professor']),
        P(['Ачилова Лилия Илхомовна', 'PhD, и.о. доцента'], ['Achilova Liliya Ilkhomovna', 'PhD, Acting Associate Professor']),
        P(['Тошбоева Робия Собировна', 'к.ю.н., и.о. доцента'], ['Toshboyeva Robiya Sobirovna', 'Candidate of Science in Law, Acting Associate Professor']),
        P(['Худойберганов Бекзод Бахтиёрович', 'PhD, и.о. доцента'], ['Khudoyberganov Bekzod Bakhtiyorovich', 'PhD, Acting Associate Professor']),
        P(['Хусаинова Раъно Абдихолиқовна', 'к.ю.н., преподаватель'], ['Khusainova Ra’no Abdikholiqovna', 'Candidate of Science in Law, Lecturer']),
        P(['Умаров Бекзод Азаматович', 'старший преподаватель'], ['Umarov Bekzod Azamatovich', 'Senior Lecturer']),
        P(['Таджибаева Махсуда Рустамжоновна', 'старший преподаватель'], ['Tadjibayeva Makhsuda Rustamjonovna', 'Senior Lecturer']),
        P(['Ботирова Камола Юсуповна', 'преподаватель'], ['Botirova Kamola Yusupovna', 'Lecturer']),
        P(['Асқаров Жалолиддин Тўйчиевич', 'преподаватель'], ['Asqarov Jaloliddin Tuychiyevich', 'Lecturer']),
        P(['Ещанова Даулетбике Аметбековна', 'преподаватель'], ['Yeshchanova Dauletbike Ametbekovna', 'Lecturer']),
        P(['Холмирзаев Уткир Пахлавонович', 'преподаватель'], ['Kholmirzayev Utkir Pakhlavonovich', 'Lecturer']),
        P(['Мамажонова Хамида Мирсадиковна', 'преподаватель'], ['Mamajonova Khamida Mirsadikovna', 'Lecturer']),
        P(['Жумагулов Алишер Эрнапасович', 'старший преподаватель'], ['Jumagulov Alisher Ernapasovich', 'Senior Lecturer']),
        P(['Ражабов Адхам Амруллоевич', 'преподаватель'], ['Rajabov Adham Amrulloyevich', 'Lecturer']),
        P(['Джуманов Аскар Хасанович', 'преподаватель, LLM Университета Нагоя (Япония)'], ['Djumanov Askar Khasanovich', 'Lecturer, Nagoya University LLM (Japan)']),
        P(['Атажанов Хамдамбек Куромбоевич', 'преподаватель'], ['Atajanov Khamdambek Kuromboyevich', 'Lecturer']),
        P(['Саидова Ситора Сафоевна', 'преподаватель'], ['Saidova Sitora Safoevna', 'Lecturer']),
        P(['Ахунджанов Элмурод Пайзуллаевич', 'старший преподаватель'], ['Akhundjanov Elmurod Payzullayevich', 'Senior Lecturer']),
        P(['Турсунов Абдухалил Абусалимович', 'преподаватель, LLM Университета Нагоя (Япония)'], ['Tursunov Abdukhalil Abusalimovich', 'Lecturer, Nagoya University LLM (Japan)']),
        P(['Умаров Закир Сабирджанович', 'преподаватель'], ['Umarov Zakir Sabirdjanovich', 'Lecturer']),
        P(['Каландаров Аминжон Амандуллаевич', 'преподаватель'], ['Kalandarov Aminjon Amandullayevich', 'Lecturer']),
        P(['Ахророва Саёхат Акром кизи', 'преподаватель'], ['Akhrorova Sayokhat Akrom qizi', 'Lecturer']),
        P(['Каримов Бобур', 'преподаватель'], ['Karimov Bobur', 'Lecturer']),
      ],
      audience: L(
        'Обращаться могут студенты по учебным вопросам кафедры бизнес-права. Приёмные часы преподавателей проводятся в кабинете 214 в течение недели по расписанию кафедры.',
        'Students can reach out regarding academic issues at the Department of Business Law. Office hours for lecturers are held throughout the week in Room 214 according to the department schedule.'
      ),
      contacts: contacts({ phone: ['233-66-36 (внутр. 1071, 1072)'], email: ['businesslaw@mail.ru'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-dep-ip',
      category: 'department',
      floor: 1,
      rooms: ['118'],
      name: L('Кафедра права интеллектуальной собственности', 'Department of Intellectual Property Law', 'Intellektual mulk huquqi kafedrasi'),
      summary: L(
        'IP-право, авторское и патентное право, кибер-право',
        'IP law, copyright and patent law, cyber law',
        'Intellektual mulk, mualliflik va patent huquqi, kiber huquq'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, учебное здание №1, кабинет №118',
        'Tashkent City, Sayilgoh Street 35, Academic Building 1, Room 118'
      ),
      motto: L('«Знание — ключ к развитию»', '"Knowledge is the key to progress."'),
      sections: [
        S(
          'mission',
          'Одна из молодых кафедр университета, которая проводит обучение и научную деятельность по четырём направлениям: «Право интеллектуальной собственности», «Авторское право и смежные права», «Патентное право», «Кибер право». Кафедра сотрудничает с Всемирной организацией интеллектуальной собственности, Верховным судом, Агентством по интеллектуальной собственности, Центром повышения квалификации юристов при Министерстве юстиции, адвокатскими формированиями, вузами и научно-исследовательскими учреждениями республики.',
          'To serve as one of the university’s young departments, conducting educational and research activities in four areas: "Intellectual Property Law", "Copyright and Related Rights", "Patent Law", and "Cyber Law". The department collaborates with the World Intellectual Property Organization, the Supreme Court, the Intellectual Property Agency, the Center for Professional Development of Lawyers under the Ministry of Justice, legal advocacy structures, national universities, and research institutions.'
        ),
        SL(
          'tasks',
          [
            'изучаем, исследуем и даём знания по дисциплинам направления, включая право СМИ и кибер право;',
            'развиваем навыки сравнительного, аналитического и логического мышления;',
            'формируем навыки практического применения норм права интеллектуальной собственности;',
            'создаём новую учебную литературу и организуем занятия с использованием современных педагогических технологий.',
          ],
          [
            'Study, research, and teach department subjects, including Media Law and Cyber Law;',
            'Develop comparative, analytical, and logical thinking skills;',
            'Build practical skills in applying intellectual property law standards;',
            'Create new educational literature and organize classes using modern pedagogical technologies.',
          ]
        ),
        S(
          'subjects',
          '2 дисциплины бакалавриата — Право интеллектуальной собственности (основная), Кибер право (выборная); 7 дисциплин магистратуры — Международное право интеллектуальной собственности, Патентное право, Разрешение споров в сфере интеллектуальной собственности, Система договоров в сфере интеллектуальной собственности, Кибер право, Право СМИ (основные), Авторское право и смежные права (выборная).',
          'Undergraduate level — 2 subjects: Intellectual Property Law (core), Cyber Law (elective); Master’s level — 7 subjects: International Intellectual Property Law, Patent Law, Intellectual Property Dispute Resolution, System of Contracts in Intellectual Property, Cyber Law, Media Law (core subjects), Copyright and Related Rights (elective subject).'
        ),
        S(
          'capacity',
          'На кафедре работают 4 доктора философии (PhD). Ведутся научно-практические исследования по темам гражданско-правового регулирования социальных сетей, коллективного управления имущественными правами в авторском праве, охраны авторского права в сетях телекоммуникации, цифровизации международного арбитража, оценки регулирующего воздействия проектов актов законодательства, противодействия контрафакту и параллельному импорту. В 2019–2021 годах кафедрой опубликованы 15 научных работ (в том числе 12 монографий и 3 научно-публицистические брошюры), более 60 научных статей, 5 статей в Scopus; проведены 2 международные и 2 республиканские научные конференции.',
          'The department employs 4 Doctors of Philosophy (PhD). Applied research is being conducted on civil legal regulation of social networks, collective management of economic rights in copyright, copyright protection in telecommunication networks, digitization of international arbitration, regulatory impact assessment of draft legislation, and combating counterfeit and parallel imports. From 2019 to 2021, the department published 15 academic works (including 12 monographs and 3 popular science booklets), over 60 academic articles, and 5 articles in Scopus; 2 international and 2 national scientific conferences were organized.'
        ),
        S(
          'programs',
          'На кафедре функционируют 2 научных кружка: «Digital Intellectual Property Law (DIPL)» — исследование роли интеллектуальной собственности в условиях развития ИКТ, и «IP&WTO_scientific_circle» — исследование роли интеллектуальной собственности в рамках вступления во Всемирную торговую организацию.',
          'The department runs 2 student research clubs: "Digital Intellectual Property Law (DIPL)" — studying the role of IP in the context of ICT development, and "IP&WTO_scientific_circle" — studying the role of IP within the context of accession to the World Trade Organization.'
        ),
        S(
          'faculty',
          'На кафедре работают 4 доктора философии и 2 преподавателя; к учебному процессу привлекаются адвокаты и практические работники для проведения мастер-классов. Преподаватели — авторы 2 учебников, 12 монографий и 2 учебно-методических пособий; в учебно-методическом процессе участвуют 2 самостоятельных соискателя.',
          'The department employs 4 Doctors of Philosophy and 2 lecturers; lawyers and practicing professionals are regularly brought in to deliver masterclasses. The lecturers are authors of 2 textbooks, 12 monographs, and 2 educational-methodological guides; 2 independent researchers participate in the academic process.'
        ),
      ],
      staff: [
        P(['Хужаев Шохжахон Акмалжон угли', 'заведующий кафедрой, PhD'], ['Khujayev Shokhjakhon Akmaljon ugli', 'Head of Department, PhD in Law']),
        P(['Якубова Ирода Бахрамовна', 'доцент, PhD'], ['Yakubova Iroda Bakhramovna', 'Associate Professor, PhD in Law']),
        P(['Юлдашов Абдумумин Абдугопирович', 'и.о. доцента, PhD'], ['Yuldashov Abdumumin Abdugopirovich', 'Acting Associate Professor, PhD in Law']),
        P(['Бахрамова Мохинур Бахрамовна', 'старший преподаватель, PhD'], ['Bakhramova Mokhinur Bakhramovna', 'Senior Lecturer, PhD in Law']),
        P(['Мукумов Бобур Мелибой угли', 'преподаватель'], ['Mukumov Bobur Meliboy ugli', 'Lecturer']),
        P(['Рахмонова Мохичехра Нодирбек кизи', 'преподаватель'], ['Rakhmonova Mokhichekhra Nodirbek qizi', 'Lecturer']),
        P(['Туракулова Назира Абдушукур кизи', 'заведующий кабинетом'], ['Turaqulova Nazira Abdushukur qizi', 'Head of Office']),
      ],
      consultations: [
        C(L('Хужаев Ш.А.', 'Khujayev Sh.A.'), L('понедельник 15:00–17:00', 'Monday 15:00–17:00'), '118'),
        C(L('Якубова И.Б.', 'Yakubova I.B.'), L('понедельник 10:00–12:00', 'Monday 10:00–12:00'), '118'),
        C(L('Юлдашов А.А.', 'Yuldashov A.A.'), L('вторник 10:00–12:00', 'Tuesday 10:00–12:00'), '118'),
        C(L('Бахрамова М.Б.', 'Bakhramova M.B.'), L('среда 10:00–12:00', 'Wednesday 10:00–12:00'), '118'),
        C(L('Мукумов Б.М.', 'Mukumov B.M.'), L('четверг 10:00–12:00', 'Thursday 10:00–12:00'), '118'),
        C(L('Рахмонова М.Н.', 'Rakhmonova M.N.'), L('пятница 10:00–12:00', 'Friday 10:00–12:00'), '118'),
      ],
      audience: L(
        'Обращаться могут студенты по учебным вопросам кафедры права интеллектуальной собственности.',
        'Students can reach out regarding academic issues at the Department of Intellectual Property Law.'
      ),
      contacts: contacts({ phone: ['233-66-36 (1134)'], email: ['sh.xujayev@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-dep-criminal',
      category: 'department',
      floor: 1,
      rooms: ['106', '107', '113'],
      name: L(
        'Кафедра уголовного права, криминологии и противодействия коррупции',
        'Department of Criminal Law, Criminology, and Countering Corruption',
        'Jinoyat huquqi, kriminologiya va korrupsiyaga qarshi kurashish kafedrasi'
      ),
      summary: L(
        '9 дисциплин, 2 научных кружка, мастер-классы с участием судей',
        '9 subjects, 2 research clubs, masterclasses with judges',
        '9 ta fan, 2 ilmiy to‘garak, sudyalar bilan mahorat darslari'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, здание №1 ТГЮУ, кабинеты №106, №107, №113',
        'Tashkent City, Sayilgoh Street 35, TSUL Building 1, Rooms 106, 107, 113'
      ),
      motto: L('«Сила в справедливости»', '"Strength lies in justice."'),
      sections: [
        S(
          'goal',
          'Не только вывести научный потенциал кафедры на качественно новый уровень, но и создать признанные научные школы по уголовно-правовым предметам на основе системы «устоз-шогирд».',
          'Not only to elevate the department’s scientific potential to a qualitatively new level, but also to build recognized academic schools in criminal law disciplines based on the mentor-apprentice ("ustoz-shogird") system.'
        ),
        SL(
          'tasks',
          [
            'организация учебного процесса на основе современных форм и методов обучения в соответствии с кредитно-модульной системой, подготовка высококвалифицированных юридических кадров;',
            'повышение научного потенциала кафедры, вовлечение молодёжи в научную деятельность, координация научно-исследовательской и инновационной деятельности;',
            'расширение международного сотрудничества, привлечение зарубежных специалистов, организация академического обмена студентами и преподавателями;',
            'анализ качества образования и его повышение, эффективная организация организационно-методических мероприятий.',
          ],
          [
            'Organize the educational process based on modern teaching forms and methods in accordance with the credit-module system, preparing highly qualified legal specialists;',
            'Increase the academic potential of the department, engage youth in scientific activities, and coordinate research and innovative activities;',
            'Expand international cooperation, recruit foreign experts, and organize academic exchanges for students and faculty;',
            'Analyze and improve the quality of education, and effectively organize organizational and methodological events.',
          ]
        ),
        S(
          'subjects',
          'В бакалавриате 5 предметов — «Уголовное право», «Административная ответственность», «Уголовно-исполнительное право», «Криминология», «Противодействие коррупции и комплаенс-контроль»; в магистратуре 4 предмета — «Квалификация коррупционных и экономических преступлений», «Перспективы уголовно-правовой политики», «Уголовное наказание и его назначение», «Проблемы квалификации преступлений».',
          'Undergraduate level — 5 subjects: "Criminal Law", "Administrative Liability", "Penitentiary Law", "Criminology", "Anti-Corruption and Compliance Control"; Master’s level — 4 subjects: "Qualification of Corruption and Economic Crimes", "Prospects of Criminal Law Policy", "Penalties and Their Imposition", "Problems of Crime Qualification".'
        ),
        S(
          'capacity',
          'Научный потенциал — 64%. В 2018–2021 годах кафедрой издано 8 учебников и учебных пособий, 19 монографий, более 100 научных статей, из них 15 — в базах Web of Science и Scopus; проведено более 200 мастер-классов, 10 международных и 43 республиканские конференции и круглых стола.',
          'Academic capacity: 64%. Between 2018 and 2021, the department published 8 textbooks and study guides, 19 monographs, and over 100 academic articles (15 of which were in Web of Science and Scopus); over 200 masterclasses, 10 international, and 43 national conferences and roundtables were held.'
        ),
        S(
          'programs',
          'На кафедре действуют два научных кружка: «Anti-corruption and compliance» — изучение вопросов предупреждения коррупционных правонарушений и внедрения комплаенс-контроля (20 участников, 570 подписчиков телеграм-канала), и «Криминолог и Я» — углублённое изучение уголовного права, уголовно-исполнительного права и криминологии в связке с Юридической клиникой (30 участников, 350 подписчиков телеграм-канала).',
          'The department runs two student research clubs: "Anti-corruption and compliance" — studying corruption prevention and compliance control implementation (20 members, 570 subscribers on Telegram), and "Criminologist and Me" — in connection with the Legal Clinic, providing in-depth study of criminal law, penitentiary law, and criminology (30 members, 350 subscribers on Telegram).'
        ),
        S(
          'faculty',
          'На кафедре работают 2 профессора, 3 доцента, 3 старших преподавателя и 15 преподавателей; регулярно проводятся мастер-классы с участием судей. В учебный процесс вовлечены 26 самостоятельных соискателей и 3 докторанта.',
          'The department employs 2 professors, 3 associate professors, 3 senior lecturers, and 15 lecturers; masterclasses involving judges are held on a regular basis. 26 independent researchers and 3 doctoral candidates are involved in the academic process.'
        ),
      ],
      staff: [
        P(['Хакимов Комил Бахтиярович', 'и.о. заведующего кафедрой, доцент, PhD'], ['Khakimov Komil Bakhtiyarovich', 'Acting Head of Department, Associate Professor, PhD']),
        P(['Зуфаров Рустам Ахмедович', 'профессор, д.ю.н.'], ['Zufarov Rustam Akhmedovich', 'Professor, D.Sc. in Law']),
        P(['Уразалиев Муродбек Кораевич', 'профессор, д.ю.н.'], ['Urazaliyev Murodbek Korayevich', 'Professor, D.Sc. in Law']),
        P(['Ниёзова Саломат Сапаровна', 'и.о. профессора, д.ю.н.'], ['Niyozova Salomat Saparovna', 'Acting Professor, D.Sc. in Law']),
        P(['Абзалова Хуршида Мирзиятовна', 'доцент, д.ю.н.'], ['Abzalova Khurshida Mirziyatovna', 'Associate Professor, D.Sc. in Law']),
        P(['Хайдаров Шухратжон Джумаевич', 'доцент, PhD'], ['Khaydarov Shukhratjon Djumayevich', 'Associate Professor, PhD']),
        P(['Эрматов Гайрат Окмирзаевич', 'и.о. доцента, к.ю.н.'], ['Ermatov Gayrat Okmirzayevich', 'Acting Associate Professor, Candidate of Science in Law']),
        P(['Алланова Азизахон Авазхоновна', 'и.о. доцента, PhD'], ['Allanova Azizakhon Avazkhonovna', 'Acting Associate Professor, PhD']),
        P(['Алтиев Раззок Саидович', 'и.о. доцента, PhD'], ['Altiyev Razzoq Saidovich', 'Acting Associate Professor, PhD']),
        P(['Фазилов Фарход Маратович', 'и.о. доцента, PhD'], ['Fazilov Farkhod Maratovich', 'Acting Associate Professor, PhD']),
        P(['Курбанов Маъруфжон Мамадаминович', 'и.о. доцента, PhD'], ['Kurbanov Ma’rufjon Mamadaminovich', 'Acting Associate Professor, PhD']),
        P(['Худайкулов Ферузбек Хуррамович', 'и.о. доцента, PhD'], ['Khudaykulov Feruzbek Khurramovich', 'Acting Associate Professor, PhD']),
        P(['Розимова Кундуз Юлдашевна', 'старший преподаватель, PhD'], ['Rozimova Kunduz Yuldashevna', 'Senior Lecturer, PhD']),
        P(['Суннатов Вохид Тошмуродович', 'старший преподаватель, PhD'], ['Sunnatov Vokhid Toshmurodovich', 'Senior Lecturer, PhD']),
        P(['Эшкуватов Бобумурод Аброр угли', 'преподаватель'], ['Eshquvatov Bobumurod Abror ugli', 'Lecturer']),
        P(['Ҳожиев Носиржон Комилович', 'преподаватель'], ['Hojiyev Nasirjon Komilovich', 'Lecturer']),
        P(['Мамажанов Аброрбек Мирабдуллаевич', 'преподаватель'], ['Mamajanov Abrorbek Mirabdullayevich', 'Lecturer']),
        P(['Мухаммадалиев Элмурод Дилмурадович', 'преподаватель'], ['Mukhammadaliyev Elmurod Dilmuradovich', 'Lecturer']),
        P(['Отабоев Ибрат Бобур угли', 'преподаватель'], ['Otaboyev Ibrat Bobur ugli', 'Lecturer']),
        P(['Рахимжонова Наргизахон Рахимжоновна', 'преподаватель'], ['Rakhimjonova Nargizakhon Rakhimjonovna', 'Lecturer']),
      ],
      consultations: [
        C(L('Хакимов Комил', 'Khakimov Komil'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '106'),
        C(L('Зуфаров Рустам', 'Zufarov Rustam'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '107'),
        C(L('Уразалиев Муродбек', 'Urazaliyev Murodbek'), L('понедельник 9:00–12:00', 'Monday 9:00–12:00'), '107'),
        C(L('Ниёзова Саломат', 'Niyozova Salomat'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '113'),
        C(L('Абзалова Хуршида', 'Abzalova Khurshida'), L('четверг 9:00–12:00', 'Thursday 9:00–12:00'), '113'),
        C(L('Хайдаров Шухратжон', 'Khaydarov Shukhratjon'), L('четверг 9:00–12:00', 'Thursday 9:00–12:00'), '107'),
        C(L('Эрматов Гайрат', 'Ermatov Gayrat'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '107'),
        C(L('Алланова Азизахон', 'Allanova Azizakhon'), L('понедельник 9:00–12:00', 'Monday 9:00–12:00'), '106'),
        C(L('Алтиев Раззок', 'Altiyev Razzoq'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '106'),
        C(L('Фазилов Фарход', 'Fazilov Farkhod'), L('пятница 9:00–12:00', 'Friday 9:00–12:00'), '113'),
        C(L('Курбанов Маъруфжон', 'Kurbanov Ma’rufjon'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '113'),
        C(L('Худайкулов Ферузбек', 'Khudaykulov Feruzbek'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '106'),
        C(L('Розимова Кундуз', 'Rozimova Kunduz'), L('среда 9:00–12:00', 'Wednesday 9:00–12:00'), '107'),
        C(L('Суннатов Вохид', 'Sunnatov Vokhid'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '113'),
        C(L('Эшкуватов Бобумурод', 'Eshquvatov Bobumurod'), L('пятница 9:00–12:00', 'Friday 9:00–12:00'), '106'),
        C(L('Ҳожиев Носиржон', 'Hojiyev Nasirjon'), L('понедельник 9:00–12:00', 'Monday 9:00–12:00'), '107'),
        C(L('Мамажанов Аброрбек', 'Mamajanov Abrorbek'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '113'),
        C(L('Мухаммадалиев Элмурод', 'Mukhammadaliyev Elmurod'), L('четверг 9:00–12:00', 'Thursday 9:00–12:00'), '106'),
        C(L('Отабоев Ибрат', 'Otaboyev Ibrat'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '107'),
        C(L('Рахимжонова Наргизахон', 'Rakhimjonova Nargizakhon'), L('понедельник 9:00–12:00', 'Monday 9:00–12:00'), '113'),
      ],
      audience: L(
        'Обращаться могут студенты по учебным вопросам кафедры уголовного права, криминологии и противодействия коррупции.',
        'Students can reach out regarding academic issues at the Department of Criminal Law, Criminology, and Countering Corruption.'
      ),
      contacts: contacts({ phone: ['233-66-36, 1056 (внутр.)'], email: ['www.criminal law@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-conference-hall',
      category: 'facility',
      floor: 2,
      rooms: ['203'],
      name: L('Зал заседаний (Majlislar xonasi)', 'Conference Hall', 'Majlislar xonasi'),
      summary: L(
        'Заседания, совещания и официальные мероприятия университета',
        'Meetings, gatherings and official university events',
        'Yig‘ilishlar, kengashlar va rasmiy tadbirlar'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, здание №1 ТГЮУ, кабинет №203',
        'Tashkent City, Sayilgoh Street 35, TSUL Building 1, Room 203'
      ),
      sections: [
        S(
          'about',
          'Помещение используется для проведения заседаний, совещаний и официальных мероприятий структурных подразделений университета.',
          'The hall is intended for hosting meetings, gatherings, and official events of the structural divisions of the university.'
        ),
      ],
      audience: L(
        'Бронирование зала для проведения заседаний и мероприятий согласовывается через соответствующее структурное подразделение университета.',
        'Reserving the hall for meetings and events is coordinated through the relevant structural division of the university.'
      ),
    },
    /* ------------------------------------------------------------------ */
    {
      id: 'b1-students-association',
      category: 'service',
      floor: 1,
      rooms: ['121'],
      keywords: ['ODO', '121 ODO', 'SA', 'talabalar assotsiatsiyasi', 'студсовет', 'самоуправление'],
      name: L(
        'Ассоциация студентов ТГЮУ (Students’ Association)',
        'TSUL Students’ Association',
        'TDYU Talabalar Assotsiatsiyasi'
      ),
      summary: L(
        'Высший орган студенческого самоуправления: защита прав студентов, проекты, 9 департаментов',
        'The highest body of student self-government: rights protection, projects, 9 departments',
        'Talabalar o‘zini o‘zi boshqarishining oliy organi'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, кабинет №121 (ODO)',
        'Tashkent city, Sayilgokh street, 35, TSUL, room No. 121 (ODO)',
        'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU, 121-xona (ODO)'
      ),
      sections: [
        S(
          'about',
          'Студенческая ассоциация Ташкентского государственного юридического университета (TDYU Talabalar Assotsiatsiyasi) — это высший орган студенческого самоуправления и общественная организация, объединяющая студентов бакалавриата, магистратуры, независимых соискателей и докторантов.',
          'The Students’ Association of Tashkent State University of Law (TDYU Talabalar Assotsiatsiyasi) is the highest body of student self-government and a public organization uniting bachelor’s and master’s students, independent researchers, and doctoral candidates.'
        ),
        S(
          'works',
          'Ассоциация студентов была создана в апреле 2022 года по предложению, полученному на встрече студентов с ректором ТГЮУ Акбаром Джурабаевичем Ташкуловым. Студенты выдвинули инициативу создания студенческой общей организации, которая выражала бы их мнение и была бы мостом между студентами и руководством. В течение апреля создавалась Конституция Ассоциации студентов, и она была принята на общем собрании представителей групп — таким образом Ассоциация студентов считается основанной. Её первым президентом стал Шохжахон Шомуродов, который создал азы данной организации. Далее в течение двух лет Ассоциация студентов возглавлялась Мавлюдбеком Исмоиловым. А далее, в 2025 году, Президентом стал Демирали Анваров.',
          'The Students’ Association was created in April 2022 following a proposal made at a meeting of students with the Rector of TSUL, Akbar Djurabaevich Tashkulov. The students put forward the initiative to create a general student organization that would express their opinion and serve as a bridge between the students and the management. Throughout April, the Constitution of the Students’ Association was drafted and adopted at the general meeting of group representatives — this is considered the founding of the Association. Its first president was Shohjahon Shomurodov, who laid the foundations of the organization. For the next two years the Association was headed by Mavlyudbek Ismoilov. In 2025 Demirali Anvarov became President.'
        ),
        SL(
          'structure',
          [
            'Президент Ассоциации студентов избирается всеобщим открытым голосованием среди всех студентов ТГЮУ; далее он формирует Президиум Ассоциации студентов:',
            'Омбудсмен;',
            'Глава Академического департамента;',
            'Глава Научного департамента;',
            'Глава Департамента профессионального развития;',
            'Глава Департамента по внешним связям;',
            'Глава Проектного департамента;',
            'Глава Департамента медиа;',
            'Глава Центра изучения мнения студентов;',
            'Председатель женского совета «Lady lawyer».',
          ],
          [
            'The President of the Students’ Association is elected by a general open vote among all TSUL students; the President then forms the Presidium of the Association:',
            'Ombudsman;',
            'Head of the Academic Department;',
            'Head of the Research Department;',
            'Head of the Professional Development Department;',
            'Head of the External Relations Department;',
            'Head of the Project Department;',
            'Head of the Media Department;',
            'Head of the Centre for Studying Student Opinion;',
            'Chair of the “Lady lawyer” women’s council.',
          ]
        ),
        SL(
          'tasks',
          [
            'индивидуальная и коллективная защита прав и свобод студентов ТГЮУ;',
            'внесение предложений по изменению механизмов или нормативных актов для построения справедливой учебной системы в ТГЮУ;',
            'выражение интересов студенчества перед руководством вуза, согласование студенческих инициатив и участие в улучшении образовательного процесса;',
            'помощь студентам с низкой успеваемостью, привлечение к научным кружкам, обществам и исследованиям;',
            'разработка и реализация общественно значимых проектов, организация культурного досуга.',
          ],
          [
            'individual and collective protection of the rights and freedoms of TSUL students;',
            'submitting proposals to change mechanisms or regulations in order to build a fair academic system at TSUL;',
            'representing student interests before the university management, coordinating student initiatives and taking part in improving the educational process;',
            'helping students with low academic performance, involving them in research clubs, societies and studies;',
            'developing and implementing socially significant projects, organizing cultural leisure.',
          ]
        ),
        S(
          'mission',
          'Ассоциация студентов является голосом всех студентов и каждого студента по отдельности. Она изучает развитие студенческого общества в ТГЮУ и принимает необходимые меры и предложения по правильному развитию русла студенческого общества. Для этого она использует инструменты в виде проектов, защитных механизмов, цифровых платформ и доведения студенческого мнения до руководства.',
          'The Students’ Association is the voice of all students and of every student individually. It studies the development of the student community at TSUL and takes the necessary measures and puts forward proposals for its healthy development, using projects, protective mechanisms, digital platforms and the channelling of student opinion to the management.'
        ),
      ],
      staff: [
        P(['Демирали Анваров', 'Президент Ассоциации студентов (с 2025 года)'], ['Demirali Anvarov', 'President of the Students’ Association (since 2025)'], ['Demirali Anvarov', 'Talabalar assotsiatsiyasi prezidenti (2025-yildan)']),
        P(['Мавлюдбек Исмоилов', 'Президент Ассоциации студентов (2023–2025)'], ['Mavlyudbek Ismoilov', 'President of the Students’ Association (2023–2025)'], ['Mavludbek Ismoilov', 'Talabalar assotsiatsiyasi prezidenti (2023–2025)']),
        P(['Шохжахон Шомуродов', 'первый Президент Ассоциации студентов (2022)'], ['Shohjahon Shomurodov', 'First President of the Students’ Association (2022)'], ['Shohjahon Shomurodov', 'Talabalar assotsiatsiyasining birinchi prezidenti (2022)']),
      ],
      audience: L(
        'Обращаться могут все студенты ТГЮУ — бакалавры, магистранты, независимые соискатели и докторанты — по вопросам защиты прав, учебных конфликтов, студенческих инициатив и проектов.',
        'All TSUL students — bachelor’s and master’s students, independent researchers and doctoral candidates — may apply on matters of rights protection, academic conflicts, student initiatives and projects.'
      ),
      contacts: contacts({ telegram: ['https://t.me/sa_tsul'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b1-korean-center',
      category: 'service',
      floor: 3,
      rooms: ['303'],
      keywords: ['korean', 'корейский', 'koreys', 'Park Anseo'],
      name: L(
        'Центр корейского языка и права',
        'Centre for Korean Language and Law',
        'Koreys tili va huquqi markazi'
      ),
      summary: L(
        'Параллельное изучение корейского языка и корейского права, гибкое расписание',
        'Korean language and Korean law studied in parallel, flexible schedule',
        'Koreys tili va koreys huquqini parallel o‘rganish'
      ),
      address: L(
        'г. Ташкент, 1-е учебное здание ТГЮУ, аудитория 303',
        'Tashkent, 1st academic building of TSUL, room 303',
        'Toshkent, TDYU 1-o‘quv binosi, 303-auditoriya'
      ),
      sections: [
        S(
          'about',
          'Центр предлагает уникальную возможность параллельно изучать корейский язык и правовые дисциплины.',
          'The centre offers a unique opportunity to study the Korean language and legal disciplines in parallel.'
        ),
        SL(
          'subjects',
          [
            'Корейский язык (разные уровни);',
            'Корейское право;',
            'Сравнительное конституционное право Узбекистана и Кореи (на продвинутых этапах);',
            'Важное правило: слушатели курсов корейского языка обязаны также посещать курс корейского права.',
          ],
          [
            'Korean language (different levels);',
            'Korean law;',
            'Comparative constitutional law of Uzbekistan and Korea (at advanced stages);',
            'Important rule: students of the Korean language courses are also required to attend the Korean law course.',
          ]
        ),
        S(
          'activity',
          'Гибкий график: расписание занятий подстраивается под студентов для максимального удобства. Решение накладок: если время занятий в центре совпадает с университетскими модулями, пропуски (НБ) будут официально закрыты.',
          'Flexible schedule: class times are adjusted to the students for maximum convenience. Handling clashes: if the centre’s classes coincide with university modules, the absences are officially cleared.'
        ),
      ],
      staff: [
        P(['Park Anseo', 'руководитель центра, преподаватель'], ['Park Anseo', 'Head of the centre, lecturer'], ['Park Anseo', 'markaz rahbari, o‘qituvchi']),
      ],
      audience: L(
        'Подать заявку могут студенты бакалавриата, магистратуры, докторантуры и даже преподаватели. Руководитель центра — Park Anseo, преподаватель, который отличается невероятной добротой и заслуженно пользуется огромным уважением среди студентов.',
        'Bachelor’s, master’s and doctoral students — and even lecturers — may apply. The centre is headed by Park Anseo, a lecturer known for his exceptional kindness who is deservedly held in great respect among the students.'
      ),
      contacts: contacts({ telegram: ['https://t.me/korean_center_tsul'] }),
    },
  ],
};

export default building1;
