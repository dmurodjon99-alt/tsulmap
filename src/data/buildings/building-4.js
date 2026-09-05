import { L, P, S, SL } from '../l10n-helpers.js';

/**
 * ЗДАНИЕ №4 — просп. Мустакиллик, 59 («Дархан»).
 * Источник: «4 eng.txt» / «4 ru.txt» (файлы «1 uz.txt» и «2 uz.txt» содержат
 * тот же материал на русском языке — это дубликаты, а не узбекский перевод).
 */
export const building4 = {
  id: 'b4',
  number: 4,
  slug: 'building-4',
  name: L('Учебное здание №4', 'Academic Building No. 4', '4-o‘quv binosi'),
  short: L('Здание №4', 'Building 4', '4-bino'),
  nickname: L('Дархан', 'Darkhan', 'Darxon'),
  subtitle: L(
    'Факультет бизнес-права и судебной защиты, экзаменационные аудитории 401 и 601, коворкинг',
    'Faculty of Business Law and Judicial Protection, exam rooms 401 and 601, co-working zone',
    'Biznes huquqi va sud himoyasi fakulteti, 401 va 601 imtihon auditoriyalari, kovorking'
  ),
  address: L(
    'г. Ташкент, проспект Мустакиллик, 59',
    'Tashkent, 59 Mustaqillik Avenue',
    'Toshkent sh., Mustaqillik shoh ko‘chasi, 59'
  ),
  floors: [2, 3, 4, 6],
  accent: 'from-gold-600/40 to-tsul-900/80',

  units: [
    /* ------------------------------------------------------------------ */
    {
      id: 'b4-faculty-business',
      category: 'faculty',
      floor: 3,
      rooms: [],
      name: L(
        'Факультет бизнес-права и судебной защиты',
        'Faculty of Business Law and Judicial Protection',
        'Biznes huquqi va sud himoyasi fakulteti'
      ),
      summary: L(
        '5 кафедр, деканат на 2–3 и 6 этажах, тьюторские кабинеты',
        '5 departments, dean’s office on floors 2–3 and 6, tutor rooms',
        '5 ta kafedra, dekanat 2–3 va 6-qavatlarda, tyutor xonalari'
      ),
      address: L(
        'г. Ташкент, проспект Мустакиллик, 59, учебное здание №4, 3 этаж ТГЮУ',
        'Tashkent city, Mustaqillik Avenue, 59, Academic Building No. 4, 3rd floor, TSUL'
      ),
      sections: [
        S(
          'about',
          'Бизнес-право и судебная защита — это профиль подготовки в рамках отрасли гражданского права, объединяющий два взаимосвязанных направления: правовое регулирование предпринимательской деятельности (бизнес-право) и практику защиты интересов сторон в суде (судебная защита). Как отрасль права, гражданское право регулирует имущественные и связанные с ними личные неимущественные отношения между равноправными субъектами, а данный профиль конкретизирует его применение в сфере коммерческих отношений и разрешения споров, возникающих в процессе предпринимательской деятельности. Студенты факультета могут работать юрисконсультами и корпоративными юристами в компаниях различных сфер — от банков и IT-компаний до производственных предприятий и совместных предприятий с иностранным капиталом, занимаясь договорной работой, сопровождением сделок и комплаенс-контролем. Они могут строить карьеру в адвокатуре, пройдя стажировку и получив статус адвоката, что позволяет вести гражданские или экономические дела, в том числе представлять интересы бизнеса в суде. Также выпускники могут работать в судебной системе, начиная с должности помощника судьи и продвигаясь к должности судьи, включая работу в экономических судах, рассматривающих споры между предпринимателями, либо в гражданских судах. Кроме того, для них открыты пути в государственных и правоохранительных органах — прокуратуре, Министерстве юстиции, налоговых и антимонопольных структурах, — а также в нотариате, где востребованы навыки сопровождения коммерческих сделок. Отдельным перспективным направлением является медиация — досудебное урегулирование споров, которое активно развивается в Узбекистане, а также преподавательская деятельность в вузах, которую можно совмещать с практической юридической работой.',
          'Business Law and Judicial Protection is a specialization profile within the branch of civil law, combining two interconnected areas: the legal regulation of entrepreneurial activity (business law) and the practice of protecting the interests of parties in court (judicial protection). As a branch of law, civil law regulates property and related personal non-property relations between equal subjects, while this profile specifies its application in the field of commercial relations and the resolution of disputes arising in the process of entrepreneurial activity. Students of the Faculty of Business Law and Judicial Protection can work as legal advisors and corporate lawyers in companies across various sectors—from banks and IT companies to manufacturing enterprises and joint ventures with foreign capital—handling contractual work, deal support, and compliance control. They can build a career in advocacy after completing an internship and obtaining attorney status, which allows them to handle civil or economic cases, including representing business interests in court. Graduates can also work in the judicial system, starting as a judge’s assistant and advancing to the position of a judge, including work in economic courts that consider disputes between entrepreneurs or civil courts. In addition, paths are open to them in state and law enforcement agencies—the Prosecutor’s Office, the Ministry of Justice, tax and anti-monopoly structures—as well as in the notary system, where skills in supporting commercial transactions are in demand. A separate promising direction is mediation—out-of-court dispute resolution, which is actively developing in Uzbekistan—as well as teaching activities in universities, which can be combined with practical legal work.'
        ),
        S(
          'goal',
          'Обеспечить получение студентами необходимых знаний и навыков в области гражданского права и остальных его специализированных направлений.',
          'To ensure that students acquire the necessary knowledge and skills in the field of civil law and its other specialized branches.'
        ),
        SL(
          'tasks',
          [
            'подготовка кадров, отвечающих современным международным стандартам, укрепление профессорско-преподавательского состава специалистами с высокими профессиональными педагогическими навыками, правовой и политической культурой, практическим опытом;',
            'организация учебного процесса на основе современных форм и методов обучения, инновационных педагогических и информационных технологий;',
            'развитие системы подготовки специалистов со специальными знаниями и навыками в этой области с целью дальнейшего развития процесса нормотворчества;',
            'усиление научного потенциала факультета, широкое вовлечение молодёжи в научную деятельность, координация научно-исследовательской и инновационной деятельности, вовлечение в исследовательские проекты и обеспечение связи образования и науки;',
            'организация научно-исследовательской работы с учётом индикаторов зарубежных и отечественных рейтингов.',
          ],
          [
            'training personnel that meet modern international standards, strengthening the faculty staff with specialists who possess high professional pedagogical skills, legal and political culture, and practical experience;',
            'organizing the educational process based on modern forms and teaching methods, innovative pedagogical and information technologies;',
            'developing a system for training specialists with special knowledge and skills in this area in order to further develop the process of rule-making;',
            'strengthening the scientific potential of the faculty, broadly involving youth in scientific activities, coordinating research and innovation activities, involving them in research projects, and ensuring the connection between education and science;',
            'organizing research work taking into account the indicators of foreign and domestic rankings.',
          ]
        ),
        SL(
          'structure',
          [
            'Кафедра гражданского права;',
            'Кафедра корпоративного права и предпринимательского права (бизнес-права);',
            'Кафедра гражданского процессуального права и экономического права;',
            'Кафедра права интеллектуальной собственности;',
            'Кафедра трудового права.',
          ],
          [
            'Department of Civil Law;',
            'Department of Corporate Law and Entrepreneurial Law (Business Law);',
            'Department of Civil Procedural Law and Economic Law;',
            'Department of Intellectual Property Law;',
            'Department of Labour Law.',
          ]
        ),
        S(
          'location',
          'Деканат факультета размещается на 2–3 и 6 этажах 4-го корпуса ТГЮУ. Тьюторские кабинеты находятся на 2 и 6 этажах.',
          'The Dean’s Office of the faculty is located on the 2nd–3rd and 6th floors of Building 4, TSUL. Tutor rooms are located on the 2nd and 6th floors.'
        ),
      ],
      staff: [
        P(['Мусаев Бекзод Турсунбоевич', 'декан факультета'], ['Musayev Bekzod Tursunboyevich', 'Dean of the Faculty'], ['Musayev Bekzod Tursunboyevich', 'fakultet dekani']),
        P(['Махмарахимов Ихтиёр Бахтиёрович', 'заместитель декана по вопросам молодёжи'], ['Mahmarahimov Ixtiyor Baxtiyorovich', 'Deputy Dean for Youth Affairs'], ['Mahmarahimov Ixtiyor Baxtiyorovich', 'yoshlar masalalari bo‘yicha dekan o‘rinbosari']),
        P(['Юлдашов Абдумумин Абдугопирович', 'глава академического департамента (замдекан)'], ['Yuldashov Abdumumin Abdugopirovich', 'Head of Academic Department (Deputy Dean)'], ['Yuldashov Abdumumin Abdug‘opirovich', 'akademik departament rahbari (dekan o‘rinbosari)']),
      ],
      audience: L(
        'Могут обращаться абитуриенты и их родители, интересующиеся программами бакалавриата, условиями поступления, стоимостью контрактного обучения и профилями образовательных программ. Кроме того, к деканату регулярно обращаются сами студенты по различным учебным вопросам: составление расписания, содержание модулей, пересдачи экзаменов, академическая мобильность и другие аспекты учебного процесса.',
        'Applicants and their parents interested in undergraduate programs, admission conditions, tuition fees, and profiles of educational programs can contact the office. In addition, students themselves regularly contact the dean’s office on various academic issues: scheduling, module content, exam retakes, academic mobility, and other aspects of the educational process.'
      ),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b4-dep-civil',
      category: 'department',
      floor: 3,
      rooms: [],
      name: L('Кафедра гражданского права', 'Department of Civil Law', 'Fuqarolik huquqi kafedrasi'),
      summary: L(
        'Подразделение кафедры в 4-м корпусе: 3–4 этажи',
        'The department’s premises in Building 4: floors 3–4',
        '4-binodagi kafedra bo‘linmasi: 3–4-qavatlar'
      ),
      address: L(
        'г. Ташкент, проспект Мустакиллик, 59, 3–4 этаж, 4-е здание ТГЮУ; и ул. Сайилгох, 35/2, здание №1, 1 этаж',
        'Tashkent city, Mustaqillik Avenue, 59, 3rd-4th floor, Building 4, TSUL and Sayilgoh Street, 35/2, Building No. 1, 1st floor'
      ),
      relatedUnitId: 'b3-dep-civil',
      sections: [
        S(
          'about',
          'Кафедра гражданского права размещается сразу в нескольких корпусах университета. Полное описание кафедры, состав преподавателей и график консультаций — в карточке кафедры в 3-м здании.',
          'The Department of Civil Law occupies premises in several university buildings at once. The full description of the department, its staff and consultation schedule are available in the department’s card in Building 3.'
        ),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b4-dep-entrepreneurial',
      category: 'department',
      floor: 4,
      rooms: ['214'],
      name: L(
        'Кафедра предпринимательского и корпоративного права',
        'Department of Entrepreneurial and Corporate Law',
        'Tadbirkorlik va korporativ huquq kafedrasi'
      ),
      summary: L(
        '4 и 6 этажи 4-го корпуса; также кабинет №214 в здании №1',
        'Floors 4 and 6 of Building 4; also room No. 214 in Building 1',
        '4-binoning 4 va 6-qavatlari; 1-binoda 214-xona'
      ),
      address: L(
        'г. Ташкент, проспект Мустакиллик, 59, 4 и 6 этаж, 4-е здание ТГЮУ; и ул. Сайилгох, 35/2, здание №1, 2 этаж, кабинет №214',
        'Tashkent city, Mustaqillik Avenue, 59, 4th and 6th floor, Building 4, TSUL and Sayilgoh Street, 35/2, Building No. 1, 2nd floor, Room No. 214'
      ),
      relatedUnitId: 'b1-dep-business',
      sections: [
        S(
          'about',
          'Кафедра ведёт занятия в 4-м корпусе (4 и 6 этажи) и в здании №1 (кабинет №214). Подробное описание направлений, дисциплин и состава — в карточке кафедры бизнес-права в здании №1.',
          'The department holds classes in Building 4 (floors 4 and 6) and in Building 1 (room No. 214). A detailed description of its areas, subjects and staff is available in the Department of Business Law card in Building 1.'
        ),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b4-room-401',
      category: 'facility',
      floor: 4,
      rooms: ['401'],
      keywords: ['401', 'экзамен', 'сессия', 'imtihon'],
      name: L('Аудитория №401', 'Auditorium No. 401', '401-auditoriya'),
      summary: L(
        'Экзаменационная аудитория итогового контроля; в остальное время — учебные занятия',
        'Examination hall for final assessments; regular classes at other times',
        'Yakuniy nazorat imtihon auditoriyasi; qolgan vaqtda o‘quv mashg‘ulotlari'
      ),
      address: L(
        'г. Ташкент, проспект Мустакиллик, 59, 4 этаж, 4-е здание ТГЮУ',
        'Tashkent city, Mustaqillik Avenue, 59, 4th floor, Building 4, TSUL'
      ),
      sections: [
        S(
          'about',
          'Аудитория №401 находится на 4 этаже 4-го здания ТГЮУ и преобразуется в экзаменационную аудиторию для проведения итогового контроля (осенних и летних сессий). В остальное время там проводятся учебные занятия для студентов факультета.',
          'Auditorium No. 401 is located on the 4th floor of Building 4, TSUL, and is transformed into an examination hall for final assessments (autumn and summer exam sessions). At other times, regular classes for faculty students are held there.'
        ),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b4-room-601',
      category: 'facility',
      floor: 6,
      rooms: ['601'],
      keywords: ['601', 'экзамен', 'сессия', 'imtihon'],
      name: L('Аудитория №601', 'Auditorium No. 601', '601-auditoriya'),
      summary: L(
        'Экзаменационная аудитория итогового контроля; в остальное время — учебные занятия',
        'Examination hall for final assessments; regular classes at other times',
        'Yakuniy nazorat imtihon auditoriyasi; qolgan vaqtda o‘quv mashg‘ulotlari'
      ),
      address: L(
        'г. Ташкент, проспект Мустакиллик, 59, 6 этаж, 4-е здание ТГЮУ',
        'Tashkent city, Mustaqillik Avenue, 59, 6th floor, Building 4, TSUL'
      ),
      sections: [
        S(
          'about',
          'Аудитория №601 находится на 6 этаже 4-го здания ТГЮУ и преобразуется в экзаменационную аудиторию для проведения итогового контроля (осенних и летних сессий). В остальное время там проводятся учебные занятия для студентов факультета.',
          'Auditorium No. 601 is located on the 6th floor of Building 4, TSUL, and is transformed into an examination hall for final assessments (autumn and summer exam sessions). At other times, regular classes for faculty students are held there.'
        ),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b4-coworking',
      category: 'facility',
      floor: 2, // отдельный вход справа от главного, уровень 2-го этажа корпуса
      rooms: [],
      keywords: ['co-working', 'coworking', 'коворкинг', 'kovorking', 'University 3.0', 'IT-park'],
      name: L('TSUL Co-working zone', 'TSUL Co-working zone', 'TSUL Co-working zone'),
      summary: L(
        'Коворкинг-центр модели «University 3.0»: стартапы, бизнес-школа, тренинги IT-park',
        'Co-working centre of the "University 3.0" model: startups, business school, IT-park trainings',
        '«University 3.0» modelidagi kovorking markazi: startaplar, biznes maktabi'
      ),
      address: L(
        'г. Ташкент, проспект Мустакиллик, 59 (чуть правее от основного входа в 4-й корпус ТГЮУ)',
        'Tashkent city, Mustaqillik Avenue, 59 (slightly to the right of the main entrance to Building 4, TSUL)'
      ),
      sections: [
        S(
          'about',
          'Co-working zone — это коворкинг-центр при Ташкентском государственном юридическом университете, созданный в рамках модели «University 3.0». Идея в том, чтобы университет не ограничивался только образовательной функцией, а стал площадкой для развития предпринимательских и технологических инициатив студентов и сотрудников, способствуя трансформации юридической сферы через современные технологии.',
          'Co-working zone is a co-working center at Tashkent State University of Law (TSUL), created within the framework of the "University 3.0" model. The idea is that the university should not be limited only to an educational function, but become a platform for developing entrepreneurial and technological initiatives of students and staff, contributing to the transformation of the legal sphere through modern technologies.'
        ),
        S(
          'projects',
          'На базе коворкинга разрабатывались и презентовались проекты (Huquq maktabi и др.), готовые к коммерциализации: система мониторинга и управления научными исследованиями в вузах, база данных научных результатов, система онлайн-найма юристов и социальная сеть для представителей юридической сферы. Также в коворкинге работает бизнес-школа, где проходят тренинги — в частности, там уже проводили обучение специалисты IT-park.',
          'Based on the co-working space, projects ready for commercialization were developed and presented (such as "Huquq maktabi" and others): a system for monitoring and managing scientific research in universities, a database of scientific results, an online hiring system for lawyers, and a social network for legal professionals. A business school also operates in the co-working space, holding trainings—in particular, IT-park specialists have already conducted training there.'
        ),
      ],
    },
  ],
};

export default building4;
