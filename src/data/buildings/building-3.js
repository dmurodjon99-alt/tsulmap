import { L, P, S, SL, C, contacts } from '../l10n-helpers.js';

/**
 * ЗДАНИЕ №3 — ул. Сайилгох / просп. Амира Темура (учебный корпус №3).
 * Источник: «3 eng.txt» / «3 ru.txt» / «3 uz.txt».
 * ВАЖНО: это единственное здание, для которого в исходных материалах есть
 * настоящий узбекский текст — здесь заполнены все три языка.
 * Кафедра гражданского права дополнена данными из файла «1 ru/eng».
 */
export const building3 = {
  id: 'b3',
  number: 3,
  slug: 'building-3',
  name: L('Учебное здание №3', 'Academic Building No. 3', '3-o‘quv binosi'),
  short: L('Здание №3', 'Building 3', '3-bino'),
  subtitle: L(
    'Кафедры теории права, международного права, языков; ИРЦ и «Электронный университет»',
    'Departments of legal theory, international law and languages; IRC and "Electronic University"',
    'Huquq nazariyasi, xalqaro huquq va tillar kafedralari; ARM va «Elektron universitet»'
  ),
  address: L(
    'г. Ташкент, ул. Сайилгох, 13 / просп. Амира Темура, 12–13',
    'Tashkent, 13 Sayilgokh Street / 12–13 Amir Temur Avenue',
    'Toshkent sh., Sayilgoh ko‘chasi, 13 / Amir Temur shoh ko‘chasi, 12–13'
  ),
  floors: [1, 2],
  accent: 'from-tsul-800/70 to-tsul-950/70',

  units: [
    /* ------------------------------------------------------------------ */
    {
      id: 'b3-dep-theory',
      category: 'department',
      floor: 2,
      rooms: ['224'],
      name: L('Кафедра теории государства и права', 'Department of Theory of State and Law', 'Davlat va huquq nazariyasi kafedrasi'),
      summary: L(
        '9 дисциплин бакалавриата и магистратуры, 18 преподавателей',
        '9 undergraduate and graduate subjects, 18 lecturers',
        '9 ta bakalavr va magistratura fani, 18 o‘qituvchi'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 13, ТГЮУ, 3-е здание, 224-аудитория',
        'Tashkent city, Sayilgokh street, building 13, TSUL, 3rd building, auditorium 224',
        'Toshkent shahri, Sayilgoh ko‘chasi, 13-uy, TDYU, 3-bino, 224-auditoriya'
      ),
      motto: L(
        'Теория и история права — основа юриспруденции!',
        'Theory and history of law is the foundation of jurisprudence!',
        'Huquq nazariyasi va tarixi huquqshunoslikning asosidir!'
      ),
      sections: [
        S(
          'goal',
          'Подготовка кадров, способных внести достойный вклад в формирование правового демократического государства в Узбекистане.',
          'Training personnel capable of making a worthy contribution to the formation of a legal democratic state in Uzbekistan.',
          'O‘zbekistonda huquqiy demokratik davlatni shakllantirishga munosib hissa qo‘sha oladigan kadrlar tayyorlash.'
        ),
        SL(
          'subjects',
          [
            '5 предметов бакалавриата: Теория государства и права; История государства и права; Юридическая техника; История правовых учений; Законотворческий процесс;',
            '4 предмета магистратуры: Нормотворчество; Современные тенденции развития права; Современные правовые системы современности; Введение в правоведение.',
          ],
          [
            '5 undergraduate subjects: Theory of State and Law; History of State and Law; Legal Technique; History of Legal Doctrines; Lawmaking Process;',
            '4 graduate subjects: Norm-making; Modern Trends in the Development of Law; Modern Legal Systems of Today; Introduction to Jurisprudence.',
          ],
          [
            '5 bakalavriat fani: Davlat va huquq nazariyasi; Davlat va huquq tarixi; Huquqiy texnika; Huquqiy ta’limotlar tarixi; Qonun ijodkorligi jarayoni;',
            'Magistraturada 4 ta fan: Qoidalarni ishlab chiqish; Huquqni rivojlantirishning zamonaviy tendensiyalari; Zamonaviy huquqiy tizimlar; Huquqshunoslikka kirish.',
          ]
        ),
      ],
      staff: [
        P(['Муратаев Серикбек Алпамисович', 'заведующий кафедрой, кандидат юридических наук'], ['Murataev Serikbek Alpamisovich', 'Head of Department, Candidate of Legal Sciences'], ['Muratayev Serikbek Alpamisovich', 'kafedra mudiri, yuridik fanlar nomzodi']),
        P(['Бобоев Халимбой Бобоевич', 'доктор юридических наук, профессор, деятель науки Республики Узбекистан'], ['Boboev Khalimboy Boboevich', 'Doctor of Legal Sciences, Professor, Scientist of the Republic of Uzbekistan'], ['Boboyev Halimboy Boboyevich', 'yuridik fanlar doktori, professor, O‘zbekiston Respublikasi fan arbobi']),
        P(['Мавлюда Ахмедшаева Ахатовна', 'доктор юридических наук, профессор, Заслуженный наставник молодёжи Республики Узбекистан'], ['Mavlyuda Akhmedshaeva Akhatovna', 'Doctor of Legal Sciences, Professor, Honored Youth Mentor of the Republic of Uzbekistan'], ['Mavluda Ahmedshayeva Axatovna', 'yuridik fanlar doktori, professor, O‘zbekiston Respublikasi xizmat ko‘rsatgan yoshlar ustozi']),
        P(['Мухитдинова Фирюза Абдурашидовна', 'доктор юридических наук, профессор'], ['Mukhitdinova Firyuza Abdurashidovna', 'Doctor of Legal Sciences, Professor'], ['Muxitdinova Firuza Abdurashidovna', 'yuridik fanlar doktori, professor']),
        P(['Мухамедов Хайдарали Мелиевич', 'кандидат юридических наук, профессор'], ['Mukhamedov Khaidarali Melievich', 'Candidate of Legal Sciences, Professor'], ['Muhamedov Haydarali Melievich', 'yuridik fanlar nomzodi, professor']),
        P(['Кудрявцев Игорь Владимирович', 'кандидат юридических наук, и.о. профессора'], ['Kudryavtsev Igor Vladimirovich', 'Candidate of Legal Sciences, Acting Professor'], ['Kudryavtsev Igor Vladimirovich', 'yuridik fanlar nomzodi, professor v.b.']),
        P(['Хусанбаев Олим Отамуратович', 'кандидат юридических наук, и.о. профессора'], ['Khusanbaev Olim Otamuratovich', 'Candidate of Legal Sciences, Acting Professor'], ['Husanbayev Olim Otamuratovich', 'yuridik fanlar nomzodi, professor v.b.']),
        P(['Турдиев Хайитжон Усмонкул угли', 'PhD, и.о. доцента'], ['Turdiev Khayitzhon Usmonkul ugli', 'PhD, Acting Associate Professor'], ["Turdiyev Xayitjon Usmonqul o‘g‘li", 'PhD, dotsent v.b.']),
        P(['Хайитов Шерзод Рахматуллаевич', 'старший преподаватель'], ['Khayitov Sherzod Rakhmatullaevich', 'Senior Lecturer'], ['Hayitov Sherzod Rahmatullayevich', 'katta o‘qituvchi']),
        P(['Садиков Максудбой Абдулажонович', 'преподаватель'], ['Sadikov Maksudboy Abdulazhonovich', 'Lecturer'], ['Sodiqov Maqsudboy Abdulajonovich', 'o‘qituvchi']),
        P(['Содиков Акмал Шавкат угли', 'старший преподаватель'], ['Sodikov Akmal Shavkat ugli', 'Senior Lecturer'], ["Sodiqov Akmal Shavkat o‘g‘li", 'katta o‘qituvchi']),
        P(['Хужаназаров Азизжон Анварович', 'PhD, преподаватель'], ['Khuzhanazarov Azizjon Anvarovich', 'PhD, Lecturer'], ["Xo‘janazarov Azizjon Anvarovich", 'PhD, o‘qituvchi']),
        P(['Умарова Ирода Мухамедовна', 'преподаватель'], ['Umarova Iroda Mukhamedovna', 'Lecturer'], ['Umarova Iroda Muxamedovna', 'o‘qituvchi']),
        P(['Турсунова Малика Улугбековна', 'преподаватель'], ['Tursunova Malika Ulugbekovna', 'Lecturer'], ["Tursunova Malika Ulug‘bekovna", 'o‘qituvchi']),
        P(['Султанова Сабохат Алишеровна', 'PhD, преподаватель'], ['Sultanova Sabokhat Alisherovna', 'PhD, Lecturer'], ['Sultonova Sabohat Alisherovna', 'PhD, o‘qituvchi']),
        P(['Мустафакулов Дилшод Саломович', 'преподаватель'], ['Mustafakulov Dilshod Salomovich', 'Lecturer'], ['Mustafoqulov Dilshod Salomovich', 'o‘qituvchi']),
        P(['Боймуродов Ботир Панжи ўғли', 'старший преподаватель'], ['Boymurodov Botir Panji ugli', 'Senior Lecturer'], ["Boymurodov Botir Panji o‘g‘li", 'katta o‘qituvchi']),
        P(['Абдусамиева Дилробо Абдувахоб қизи', 'преподаватель'], ['Abdusamieva Dilrobo Abduvakhob kizi', 'Lecturer'], ['Abdusamiyeva Dilrobo Abduvahob qizi', 'o‘qituvchi']),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b3-dep-international',
      category: 'department',
      floor: 1,
      rooms: ['105'],
      name: L(
        'Кафедра международного права и прав человека',
        'Department of International Law and Human Rights',
        'Xalqaro huquq va inson huquqlari kafedrasi'
      ),
      summary: L(
        '10 дисциплин: международное публичное, уголовное право, право ЕС и ВТО',
        '10 subjects: public international, criminal law, EU and WTO law',
        '10 ta fan: xalqaro ommaviy, jinoyat huquqi, YeI va JST huquqi'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 35, ТГЮУ, 3-е здание, 105-аудитория',
        'Tashkent city, Sayilgokh street, building 35, TSUL, 3rd building, auditorium 105',
        'Toshkent shahri, Sayilgoh ko‘chasi, 35-uy, TDYU, 3-bino, 105-auditoriya'
      ),
      motto: L(
        'Студентам — знание, стране — профессионалы!',
        'Knowledge for students, professionals for the country!',
        'Talabalarga — bilim, mamlakatga — professionallar!'
      ),
      sections: [
        S(
          'goal',
          'Кафедра международного права и прав человека является одной из ведущих кафедр университета, которая ведёт учебно-исследовательскую работу по следующим дисциплинам: «Международное публичное право», «Международное уголовное право», «Международные права человека», «Право ЕС», «Исламское право», «Дипломатическое и консульское право», «Право Всемирной торговой организации», «Право международных организаций». Кафедра стремится углублённо изучить международное публичное право и права человека, а также подготовить высококвалифицированные юридические кадры на основе сравнительного анализа правовых систем национальных и зарубежных стран. В настоящее время кафедра сотрудничает с Министерством юстиции, Министерством иностранных дел, Национальным центром по правам человека, Академией Генеральной прокуратуры, Академией МВД, правоохранительными органами и высшими учебными заведениями.',
          'The Department of International Law and Human Rights is one of the leading departments of the university, which conducts educational and research work in the following disciplines: "Public International Law", "International Criminal Law", "International Human Rights", "EU Law", "Islamic Law", "Diplomatic and Consular Law", "World Trade Organization Law", "Law of International Organizations". The department strives to study public international law and human rights in depth, as well as to train highly qualified legal personnel based on a comparative analysis of the legal systems of national and foreign countries. Currently, the department cooperates with the Ministry of Justice, the Ministry of Foreign Affairs, the National Center for Human Rights, the Academy of the General Prosecutor’s Office, the Academy of the Ministry of Internal Affairs, law enforcement agencies, and higher educational institutions.',
          'Xalqaro huquq va inson huquqlari kafedrasi universitetning yetakchi kafedralaridan biri hisoblanadi va quyidagi fanlar bo‘yicha o‘quv-tadqiqot ishlarini olib boradi: «Xalqaro ommaviy huquq», «Xalqaro jinoyat huquqi», «Xalqaro inson huquqlari», «Yevropa Ittifoqi huquqi», «Islom huquqi», «Diplomatik va konsullik huquqi», «Jahon savdo tashkiloti huquqi», «Xalqaro tashkilotlar huquqi». Kafedra Adliya vazirligi, Tashqi ishlar vazirligi, Inson huquqlari bo‘yicha milliy markaz, Bosh prokuratura akademiyasi, IIV akademiyasi, huquqni muhofaza qilish organlari va oliy ta’lim muassasalari bilan hamkorlik qiladi.'
        ),
        SL(
          'subjects',
          [
            '8 предметов бакалавриата: «Международное публичное право»; «Международное уголовное право»; «Международные права человека»; «Право Европейского Союза»; «Исламское право»; «Дипломатическое и консульское право»; «Право Всемирной торговой организации»; «Право международных организаций»;',
            '2 предмета магистратуры: «Право ВТО и разрешение споров в его рамках»; «Международное миграционное право».',
          ],
          [
            '8 undergraduate subjects: "Public International Law"; "International Criminal Law"; "International Human Rights"; "European Union Law"; "Islamic Law"; "Diplomatic and Consular Law"; "World Trade Organization Law"; "Law of International Organizations";',
            '2 graduate subjects: "WTO Law and Dispute Settlement within Its Framework"; "International Migration Law".',
          ],
          [
            '8 bakalavriat fani: «Xalqaro ommaviy huquq»; «Xalqaro jinoyat huquqi»; «Xalqaro inson huquqlari»; «Yevropa Ittifoqi huquqi»; «Islom huquqi»; «Diplomatik va konsullik huquqi»; «Jahon savdo tashkiloti huquqi»; «Xalqaro tashkilotlar huquqi»;',
            '2 magistratura fani: «JST huquqi va uning doirasidagi nizolarni hal qilish»; «Xalqaro migratsiya huquqi».',
          ]
        ),
      ],
      staff: [
        P(['Гафурова Нозимахон Эльдаровна', 'заведующая кафедрой, ю.ф.ф.д (PhD), доцент'], ['Gafurova Nozimakhon Eldarovna', 'Head of Department, PhD in Law, Associate Professor'], ["G‘afurova Nozimaxon Eldarovna", 'kafedra mudiri, yu.f.f.d (PhD), dotsent']),
        P(['Юлдашева Говхержан', 'профессор, д.ю.н.'], ['Yuldasheva Govkherzhan', 'Professor, Doctor of Legal Sciences'], ['Yuldasheva Govherjan', 'professor, yu.f.d.']),
        P(['Мухамеджанов Аманулла Закирович', 'профессор, д.ю.н.'], ['Mukhamedzhanov Amanulla Zakirovich', 'Professor, Doctor of Legal Sciences'], ['Muhamedjanov Amanulla Zakirovich', 'professor, yu.f.d.']),
        P(['Умерханона Дилдора Шерипхановна', 'и.о. профессора кафедры, д.ю.н., доцент'], ['Umerkhanona Dildora Sheripkhanovna', 'Acting Professor of the Department, Doctor of Legal Sciences, Associate Professor'], ['Mirxonona Dildora Sheripxanovna', 'kafedra professori v.b., yu.f.d., dotsent']),
        P(['Юнусов Хайдарали Муратович', 'доцент, к.ю.н.'], ['Yunusov Khaidarali Muratovich', 'Associate Professor, Candidate of Legal Sciences'], ['Yunusov Haydarali Muratovich', 'dotsent, yu.f.n.']),
        P(['Рахманов Абдумукстор Рейджаббаевич', 'доцент, к.ю.н.'], ['Rakhmanov Abdumukstor Reydzhabbaevich', 'Associate Professor, Candidate of Legal Sciences'], ['Rahmonov Abdumukstor Reyjabboyevich', 'dotsent, yu.f.n.']),
        P(['Максаматов Махмуд Максаматаминович', 'и.о. доцента, д.ю.ф.н (PhD)'], ['Maksamatov Makhmud Maksamataminovich', 'Acting Associate Professor, PhD in Law'], ['Maksamatov Mahmud Maksamataminovich', 'dotsent v.b., yu.f.f.d (PhD)']),
        P(['Сулайманов Одилжон Раббимович', 'доцент, к.ю.н.'], ['Sulaymanov Odilzhon Rabbimovich', 'Associate Professor, Candidate of Legal Sciences'], ['Sulaymonov Odiljon Rabbimovich', 'dotsent, yu.f.n.']),
        P(['Мируктамова Феруза Лутфуллаевна', 'старший преподаватель, без учёной степени'], ['Miruktamova Feruza Lutfullaevna', 'Senior Lecturer, no academic degree'], ['Miruktamova Feruza Lutfullayevna', 'katta o‘qituvchi, ilmiy darajasi yo‘q']),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b3-dep-uzbek',
      category: 'department',
      floor: 1,
      rooms: [],
      name: L('Кафедра узбекского языка и литературы', 'Department of Uzbek Language and Literature', 'O‘zbek tili va adabiyoti kafedrasi'),
      summary: L(
        'Юрислингвистика, делопроизводство на государственном языке',
        'Jurislinguistics, office work in the state language',
        'Yurislingvistika, davlat tilida ish yuritish'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 13, ТГЮУ, 3-е здание',
        'Tashkent city, Sayilgokh street, building 13, TSUL, 3rd building',
        'Toshkent shahri, Sayilgoh ko‘chasi, 13-uy, TDYU, 3-bino'
      ),
      motto: L(
        'Язык и литература — орудие мышления юриста',
        'Language and literature are the lawyer’s tool of thinking',
        'Til va adabiyot — huquqshunosning fikrlash vositasi'
      ),
      sections: [
        S(
          'goal',
          'Кафедра узбекского языка и литературы — единственное структурное подразделение, которое ведёт образовательную, духовную и исследовательскую работу по вопросам языка и права, повышению престижа и статуса государственного языка, совместимости литературы и права. Одной из важных целей кафедры считается проведение научно-исследовательских работ в области юрислингвистики, которая является связующим звеном между юриспруденцией и филологией, в частности, вопросы юридического языка, создания тезауруса юридических терминов, формирования письменной юридической речи, права и литературы. Осуществляется работа по повышению престижа и статуса узбекского языка как государственного, изучается опыт развитых стран.',
          'The Department of Uzbek Language and Literature is the only structural division that conducts educational, spiritual, and research work on issues of language and law, increasing the prestige and status of the state language, and the compatibility of literature and law. One of the important goals of the department is considered to be conducting research work in the field of jurislinguistics, which is a link between jurisprudence and philology, in particular, issues of legal language, creation of a thesaurus of legal terms, formation of written legal speech, law, and literature. Work is carried out to increase the prestige and status of the Uzbek language as the state language, and the experience of developed countries is being studied.',
          'O‘zbek tili va adabiyoti kafedrasi til va huquq masalalari, davlat tilining obro‘si va maqomini oshirish, adabiyot va huquq muvofiqligi bo‘yicha ta’lim, ma’naviy va tadqiqot ishlarini olib boradigan yagona tarkibiy bo‘linma hisoblanadi. Kafedraning muhim maqsadlaridan biri huquqshunoslik va filologiya o‘rtasidagi bog‘lovchi halqa bo‘lgan yurislingvistika sohasida ilmiy-tadqiqot ishlarini olib borishdir: yuridik til masalalari, yuridik atamalar tezaurusini yaratish, yozma huquqiy nutqni shakllantirish, huquq va adabiyot.'
        ),
        SL(
          'subjects',
          [
            'Бакалавриат: Правовые навыки и методология; Делопроизводство на государственном языке;',
            'Магистратура: Преподавание правовых дисциплин / педагогическая практика; Делопроизводство на государственном языке.',
          ],
          [
            'Undergraduate: Legal Skills and Methodology; Office Work in the State Language;',
            'Graduate: Teaching Legal Disciplines / Pedagogical Practice; Office Work in the State Language.',
          ],
          [
            'Bakalavriat: Huquqiy ko‘nikmalar va metodologiya; Davlat tilida ish yuritish;',
            'Magistratura: Huquqiy fanlarni o‘qitish / pedagogik amaliyot; Davlat tilida ish yuritish.',
          ]
        ),
      ],
      staff: [
        P(['Рамазонов Нодир Нормуродович', 'заведующий кафедрой, PhD по филологическим наукам, и.о. доцента'], ['Ramazonov Nodir Normurodovich', 'Head of Department, PhD in Philology, Acting Associate Professor'], ['Ramazonov Nodir Normurodovich', 'kafedra mudiri, filologiya fanlari bo‘yicha PhD, dotsent v.b.']),
        P(['Хашимова Дилдархон Уринбаевна', 'профессор кафедры, доктор педагогических наук'], ['Khashimova Dildarkhon Urinbaevna', 'Professor of the Department, Doctor of Pedagogical Sciences'], ['Xashimova Dildarxon Urinbayevna', 'kafedra professori, pedagogika fanlari doktori']),
        P(['Кучимов Шухрат Норкизилович', 'и.о. профессора кафедры, доктор филологических наук'], ['Kuchimov Shukhrat Norkizilovich', 'Acting Professor of the Department, Doctor of Philological Sciences'], ['Kuchimov Shuhrat Norqizilovich', 'kafedra professori v.b., filologiya fanlari doktori']),
        P(['Гулямова Гулнора Якубовна', 'доцент кафедры, кандидат филологических наук'], ['Gulyamova Gulnora Yakubovna', 'Associate Professor of the Department, Candidate of Philological Sciences'], ['Gulyamova Gulnora Yakubovna', 'dotsent, filologiya fanlari nomzodi']),
        P(['Расулмухамедова Дурдона Тулкунжоновна', 'доцент кафедры, кандидат филологических наук'], ['Rasulmukhamedova Hurdona Tulkunzhonovna', 'Associate Professor of the Department, Candidate of Philological Sciences'], ['Rasulmuhamedova Durdona Tulkunjonovna', 'dotsent, filologiya fanlari nomzodi']),
        P(['Ниязова Насиба Журабековна', 'и.о. доцента кафедры, кандидат педагогических наук'], ['Niyazova Nasiba Zhurabekovna', 'Acting Associate Professor of the Department, Candidate of Pedagogical Sciences'], ["Niyozova Nasiba Jo‘rabekovna", 'kafedra dotsenti v.b., pedagogika fanlari nomzodi']),
        P(['Зиямухамедова Шахноза Толкуновна', 'и.о. доцента кафедры'], ['Ziyamukhamedova Shakhnoza Tolkunovna', 'Acting Associate Professor of the Department'], ['Ziyamuhamedova Shahnoza Tolkunovna', 'kafedra dotsenti v.b.']),
        P(['Бозорова Насиба Пулотжоновна', 'и.о. доцента кафедры, кандидат филологических наук'], ['Bozorova Nasiba Pulotzhonovna', 'Acting Associate Professor of the Department, Candidate of Philological Sciences'], ['Bozorova Nasiba Pulotjonovna', 'kafedra dotsenti v.b., filologiya fanlari nomzodi']),
        P(['Пулатова Умида Рамазоновна', 'старший преподаватель кафедры'], ['Pulatova Umida Ramazonovna', 'Senior Lecturer of the Department'], ["Po‘latova Umida Ramazonovna", 'kafedra katta o‘qituvchisi']),
        P(['Матенов Рашид Бекимбетович', 'старший преподаватель кафедры'], ['Matenov Rashid Bekimbetovich', 'Senior Lecturer of the Department'], ['Matenov Rashid Bekimbetovich', 'kafedra katta o‘qituvchisi']),
        P(['Фаттахова Амина Рустамовна', 'преподаватель кафедры'], ['Fattakhova Amina Rustamovna', 'Lecturer of the Department'], ['Fattaxova Amina Rustamovna', 'kafedra o‘qituvchisi']),
        P(['Чориев Орифжон Абдисобирович', 'преподаватель кафедры'], ['Choriev Orifzhon Abdisobirovich', 'Lecturer of the Department'], ['Choriyev Orifjon Abdisobirovich', 'kafedra o‘qituvchisi']),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b3-dep-sport',
      category: 'department',
      floor: 1,
      rooms: [],
      name: L('Кафедра физического воспитания и спорта', 'Department of Physical Education and Sports', 'Jismoniy tarbiya va sport kafedrasi'),
      summary: L(
        'Спортивный клуб «Юрист Олимпик», 12 секций',
        '"Yurist Olympic" sports club, 12 sections',
        '«Yurist Olimpik» sport klubi, 12 ta seksiya'
      ),
      address: L(
        'г. Ташкент, проспект Амира Темура, 13, спортивный комплекс ТГЮУ, 3-е здание',
        'Tashkent city, Amir Temur avenue 13, TSUL sports complex, 3rd building',
        'Toshkent shahri, Amir Temur shoh ko‘chasi, 13, TDYU sport majmuasi, 3-bino'
      ),
      motto: L(
        'Максимум спорта, здоровья и знаний!',
        'Maximum sports, health, and knowledge!',
        'Maksimal sport, sog‘liq va bilim!'
      ),
      sections: [
        S(
          'goal',
          'Кафедра физического воспитания и спорта — одна из востребованных кафедр в нашем университете, которая проводит факультативные занятия по физической культуре, а также спортивные мероприятия по различным видам спорта среди студентов, преподавателей и сотрудников. Большое значение уделяется спортивным секциям по разным направлениям: мы хотим, чтобы студенты и работники были здоровыми и гармонично развитыми личностями. Мы стремимся создать условия для полноценного исследования педагогических подходов к формированию здорового образа жизни у молодёжи страны в лице студентов нашего университета. Поэтому тесно сотрудничаем с Ассоциацией студенческого спорта Республики Узбекистан.',
          'The Department of Physical Education and Sports is one of the popular departments at our university, which conducts elective physical education classes, as well as sports events in various sports among students, teachers, and employees of our university. Great importance is attached to sports sections in different directions for our students and employees; we want them to be healthy and harmoniously developed individuals. We strive to create conditions for a full study of pedagogical approaches to the formation of a healthy lifestyle among the country’s youth in the person of our university students. Therefore, we closely cooperate with the Student Sports Association of the Republic of Uzbekistan.',
          'Jismoniy tarbiya va sport kafedrasi universitetimizning talab qilinadigan kafedralaridan biri bo‘lib, jismoniy tarbiya bo‘yicha fakultativ mashg‘ulotlar, shuningdek talabalar, o‘qituvchilar va xodimlar o‘rtasida turli sport turlari bo‘yicha tadbirlar o‘tkazadi. Biz talabalar va xodimlarning sog‘lom va barkamol shaxs bo‘lishini istaymiz. Shu bois O‘zbekiston Respublikasi talabalar sporti assotsiatsiyasi bilan yaqindan hamkorlik qilamiz.'
        ),
        S(
          'programs',
          'На кафедре официально открыт спортивный клуб «Юрист Олимпик»; мы активно сотрудничаем с различными организациями, заключаем договоры, оказываем спортивно-оздоровительные услуги. При кафедре активно работают спортивные секции по мини-футболу, баскетболу, волейболу, бадминтону, настольному теннису, шахматам, шашкам, бодибилдингу, фитнесу, армрестлингу, большому теннису и борьбе. Проявившие себя студенты представляют университет на межвузовских городских, региональных и республиканских соревнованиях.',
          'The sports club "Yurist Olympic" has been officially opened at the department; we actively cooperate with various organizations, conclude agreements, and provide sports and health services. The department actively runs sports sections in mini-football, basketball, volleyball, badminton, table tennis, chess, checkers, bodybuilding, fitness, arm wrestling, tennis, and wrestling. Students who prove themselves represent the university at interuniversity city, regional, and republican competitions.',
          'Kafedrada «Yurist Olimpik» sport klubi rasman ochilgan; turli tashkilotlar bilan hamkorlik qilamiz, shartnomalar tuzamiz, sport-sog‘lomlashtirish xizmatlarini ko‘rsatamiz. Kafedrada mini-futbol, basketbol, voleybol, badminton, stol tennisi, shaxmat, shashka, bodibilding, fitnes, armrestling, katta tennis va kurash bo‘yicha seksiyalar faoliyat yuritadi.'
        ),
      ],
      staff: [
        P(['Докучаев Дмитрий Павлович', 'заведующий кафедрой физического воспитания и спорта'], ['Dokuchaev Dmitry Pavlovich', 'Head of the Department of Physical Education and Sports'], ['Dokuchayev Dmitriy Pavlovich', 'jismoniy tarbiya va sport kafedrasi mudiri']),
        P(['Холбаева Шарифа Турсункуловна', 'старший преподаватель кафедры'], ['Kholbaeva Sharifa Tursunkulovna', 'Senior Lecturer of the Department'], ['Xolbayeva Sharifa Tursunqulovna', 'kafedra katta o‘qituvchisi']),
        P(['Сухорукова Ирина Сергеевна', 'преподаватель кафедры'], ['Sukhorukova Irina Sergeevna', 'Lecturer of the Department'], ['Suxorukova Irina Sergeyevna', 'kafedra o‘qituvchisi']),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b3-dep-civil',
      category: 'department',
      floor: 2,
      rooms: ['202', '125'],
      name: L('Кафедра гражданского права', 'Department of Civil Law', 'Fuqarolik huquqi kafedrasi'),
      summary: L(
        '18 преподавателей, научные школы Имомова, Окюлова, Караходжаевой',
        '18 lecturers, scientific schools of Imomov, Okyulov, Karakhodjayeva',
        '18 o‘qituvchi, Imomov, Oqyo‘lov, Qaraxodjayeva ilmiy maktablari'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, 35, ТГЮУ, 3-е здание, кабинет 202 (учебная аудитория №125)',
        'Tashkent city, Sayilgokh street, 35, TSUL, 3rd building, office, auditorium 202 (Lecture Room No. 125)',
        'Toshkent shahri, Sayilgoh ko‘chasi, 35, TDYU, 3-bino, 202-auditoriya'
      ),
      motto: L(
        '«Оригинальный юрист — цивилист»',
        'An original lawyer is a civilist',
        'Asl huquqshunos — fuqarolik huquqi bilimdoni'
      ),
      sections: [
        S(
          'goal',
          'Способствовать формированию сильного гражданского общества, обучать зрелые кадры, воспитывать учёных-цивилистов, изучая международный опыт исследовать и разрабатывать нормативные документы в данной сфере.',
          'To contribute to building a strong civil society, prepare skilled personnel, raise civilist scholars, and research and develop regulatory documents in this field while drawing on international experience.',
          'Kuchli fuqarolik jamiyatini shakllantirishga ko‘maklashish, yetuk kadrlarni tayyorlash, fuqarolik huquqi olimlarini tarbiyalash, xalqaro tajribani o‘rganib, sohaga oid me’yoriy hujjatlarni ishlab chiqish.'
        ),
        S(
          'partners',
          'Министерство юстиции, Верховный суд, Агентство интеллектуальной собственности, Федерация обществ защиты прав потребителей, другие организации и вузы республики.',
          'Ministry of Justice, Supreme Court, Intellectual Property Agency, Federation of Consumer Rights Protection Societies, and other organizations and universities across the republic.',
          'Adliya vazirligi, Oliy sud, Intellektual mulk agentligi, Iste’molchilar huquqlarini himoya qilish jamiyatlari federatsiyasi, respublikaning boshqa tashkilotlari va oliy o‘quv yurtlari.'
        ),
        SL(
          'tasks',
          [
            'изучать, исследовать и обучать по дисциплинам «Гражданское право», «Договорное право», «Римское право» и «Право спортивных договоров»;',
            'развивать у студентов навыки сравнительного, аналитического и логического мышления;',
            'изучать актуальные проблемы в данной области;',
            'проводить исследования перспектив правового регулирования отношений в сфере;',
            'разрабатывать подходы, концепции и теории развития национального гражданского права;',
            'проводить научные исследования по вопросам гражданского права и готовить научные разработки.',
          ],
          [
            'Study, research, and teach "Civil Law", "Contract Law", "Roman Law", and "Sports Contract Law";',
            'Develop comparative, analytical, and logical thinking skills in students;',
            'Study current pressing issues in the field;',
            'Research prospects for the legal regulation of relations in this domain;',
            'Formulate approaches, concepts, and theories for the development of national civil law;',
            'Conduct academic research and prepare scholarly studies on civil law issues.',
          ]
        ),
        S(
          'subjects',
          '3 предмета в бакалавриате — Гражданское право, Римское право, Договорное право; 1 предмет в магистратуре — Право спортивных договоров.',
          '3 subjects in undergraduate programs: Civil Law, Roman Law, Contract Law; 1 subject in graduate programs: Sports Contract Law.',
          'Bakalavrda 3 ta fan: Fuqarolik huquqi, Rim huquqi, Shartnoma huquqi; magistraturada 1 ta fan: Sport shartnomalari huquqi.'
        ),
        S(
          'capacity',
          'Кафедра реализует проект фундаментального исследования «Совершенствование теоретико-методологической базы для создания правового механизма повышения привлекательности инвестиционного климата и снижения рисков» в рамках государственных научно-технических программ. Преподаватели ведут исследования по темам правового регулирования спортивных отношений, программ для ЭВМ и баз данных, промышленных образцов, недействительности договоров и бракоразводных отношений. В 2019–2020 годах кафедрой опубликованы 6 монографий, более 100 научных статей, около 10 статей в Scopus.',
          'Within the framework of state scientific and technical programs, the department is implementing a fundamental project titled "Improving the Theoretical and Methodological Basis for Creating a Legal Mechanism to Increase Investment Attractiveness and Reduce Risks". Lecturers conduct research on legal regulations of sports relations, software/databases for computers, industrial designs, invalidity of contracts, and marriage dissolution. Between 2019 and 2020, the department published 6 monographs, over 100 academic articles, and about 10 articles indexed in Scopus.'
        ),
        S(
          'programs',
          'В рамках грантового проекта опубликовано 35 научных статей, проведено 2 круглых стола и научных семинара под руководством профессора О. Окюлова; опубликованы монография, 2 учебника, словарь терминов; в Министерство юстиции внесены предложения по доработке законопроекта Республики Узбекистан «Об инвестиционной деятельности».',
          'Under the grant project, 35 academic articles were published, and 2 roundtables and scientific seminars were hosted under the leadership of Professor O. Okyulov; a monograph, 2 textbooks, and a glossary of terms were published; and proposals were submitted to the Ministry of Justice to improve the draft law of the Republic of Uzbekistan "On Investment Activity".'
        ),
        S(
          'schools',
          'На кафедре действуют научные школы профессоров Имомова, Окюлова, Караходжаевой, Баратова и Топилдиева, а также научные кружки «Цивилист» и «Benefit» (t.me/tdyubenefit), объединяющие студентов, интересующихся гражданским правом.',
          'The department features the scientific schools of Professors Imomov, Okyulov, Karakhodjayeva, Baratov, and Topildiyev, as well as the "Civilist" and "Benefit" (t.me/tdyubenefit) student research clubs for those interested in civil law.'
        ),
        S(
          'faculty',
          'На кафедре работают 18 профессоров и преподавателей, из них 6 докторов юридических наук, 8 кандидатов юридических наук, 3 независимых исследователя и 1 докторант. Преподаватели кафедры — авторы 10 учебников, 6 монографий и 4 учебных пособий.',
          'The department employs 18 professors and lecturers, including 6 Doctors of Science in Law, 8 Candidates of Science in Law, 3 independent researchers, and 1 doctoral candidate. The faculty members are authors of 10 textbooks, 6 monographs, and 4 study guides.'
        ),
      ],
      staff: [
        P(['Имомов Нурилло Файзуллаевич', 'заведующий кафедрой, доктор юридических наук, профессор'], ['Imomov Nurillo Fayzullayevich', 'Head of Department, Doctor of Science in Law, Professor'], ['Imomov Nurillo Fayzullayevich', 'kafedra mudiri, yuridik fanlar doktori, professor']),
        P(['Окюлов Омонбай', 'доктор юридических наук, профессор кафедры'], ['Oqyo‘lov Omonbay', 'Doctor of Science in Law, Professor'], ["Oqyo‘lov Omonboy", 'yuridik fanlar doktori, kafedra professori']),
        P(['Боротов Миродил Хомуджонович', 'доктор юридических наук, профессор кафедры'], ['Borotov Mirodil Khomudjonovich', 'Doctor of Science in Law, Professor'], ['Borotov Mirodil Xomujonovich', 'yuridik fanlar doktori, kafedra professori']),
        P(['Топилдиев Бахромжон Рахимжонович', 'доктор юридических наук, профессор кафедры'], ['Topildiyev Bahromjon Rakhimjonovich', 'Doctor of Science in Law, Professor'], ['Topildiyev Bahromjon Rahimjonovich', 'yuridik fanlar doktori, kafedra professori']),
        P(['Караходжаева Дилором Мамировна', 'доктор юридических наук, профессор кафедры'], ['Karakhodjayeva Dilorom Mamirovna', 'Doctor of Science in Law, Professor'], ['Qaraxodjayeva Dilorom Mamirovna', 'yuridik fanlar doktori, kafedra professori']),
        P(['Бабаев Жаҳонгир Исмаилбекович', 'кандидат юридических наук, доцент'], ['Babayev Jahongir Ismailbekovich', 'Candidate of Science in Law, Associate Professor'], ['Bobayev Jahongir Ismoilbekovich', 'yuridik fanlar nomzodi, dotsent']),
        P(['Бурханова Лейла Маурисовна', 'кандидат юридических наук, доцент'], ['Burkhanova Leyla Maurisovna', 'Candidate of Science in Law, Associate Professor'], ['Burhanova Leyla Maurisovna', 'yuridik fanlar nomzodi, dotsent']),
        P(['Шарахметова Умида Шоакбаровна', 'кандидат юридических наук, доцент кафедры'], ['Sharakhmetova Umida Shoakbarovna', 'Candidate of Science in Law, Associate Professor'], ['Sharaxmetova Umida Shoakbarovna', 'yuridik fanlar nomzodi, kafedra dotsenti']),
        P(['Иноятова Соҳиба Фозиловна', 'кандидат юридических наук, доцент кафедры'], ['Inoyatova Sohiba Fozilovna', 'Candidate of Science in Law, Associate Professor'], ['Inoyatova Sohiba Fozilovna', 'yuridik fanlar nomzodi, kafedra dotsenti']),
        P(['Мехмонов Камбариддин Мирадхамович', 'PhD, доцент кафедры'], ['Mekhmonov Kambariddin Miradkhamovich', 'PhD in Law, Associate Professor'], ['Mehmonov Qambariddin Miradhamovich', 'yuridik fanlar bo‘yicha falsafa doktori (PhD), dotsent']),
        P(['Мусаев Элбек Таюфович', 'кандидат юридических наук, доцент'], ['Musayev Elbek Tayufovich', 'Candidate of Science in Law, Associate Professor'], ['Musayev Elbek Tayufovich', 'yuridik fanlar nomzodi, dotsent']),
        P(['Бабажанова Динара Исламбековна', 'старший преподаватель, PhD'], ['Babajanova Dinara Islambekovna', 'Senior Lecturer, PhD in Law'], ['Babajanova Dinara Islombekovna', 'katta o‘qituvchi, PhD']),
        P(['Эгамбердиев Эдуард Хаджибаевич', 'преподаватель кафедры'], ['Egamberdiyev Eduard Khadjibayevich', 'Lecturer'], ['Egamberdiyev Eduard Xadjibayevich', 'kafedra o‘qituvchisi']),
        P(['Сатвалдиева Юлдузхон Хатамжон кизи', 'преподаватель кафедры'], ['Satvaldiyeva Yulduzkhon Khatamjon qizi', 'Lecturer'], ["Satvaldiyeva Yo‘ldoshxon Xatamjon qizi", 'kafedra o‘qituvchisi']),
        P(['Юсупов Жасурбек Мэлсович', 'преподаватель кафедры'], ['Yusupov Jasurbek Melsovich', 'Lecturer'], ['Yusupov Jasurbek Malsovich', 'kafedra o‘qituvchisi']),
      ],
      consultations: [
        C(L('Имомов Н.Ф.', 'Imomov N.F.'), L('понедельник 9:00–12:00', 'Monday 9:00–12:00'), '202'),
        C(L('Баратов М.Х.', 'Baratov M.Kh.'), L('вторник 9:00–12:00', 'Tuesday 9:00–12:00'), '202'),
        C(L('Топилдиев Б.Р.', 'Topildiyev B.R.'), L('среда 9:00–12:00', 'Wednesday 9:00–12:00'), '202'),
        C(L('Мехмонов К.М.', 'Mekhmonov K.M.'), L('четверг 9:00–12:00', 'Thursday 9:00–12:00'), '202'),
        C(L('Бурханова Л.М.', 'Burkhanova L.M.'), L('пятница 9:00–12:00', 'Friday 9:00–12:00'), '202'),
      ],
      audience: L(
        'Обращаться могут студенты по учебным вопросам кафедры гражданского права.',
        'Students can reach out regarding academic issues at the Department of Civil Law.',
        'Talabalar fuqarolik huquqi kafedrasining o‘quv masalalari bo‘yicha murojaat qilishlari mumkin.'
      ),
      contacts: contacts({ phone: ['+998 (71) 233-33-66 (внутр. 1166, 1165)'], telegram: ['@TDYUfuqarolikhuquqi'] }),
      alsoIn: L('4-е здание ТГЮУ, 3–4 этажи', 'Building 4 of TSUL, 3rd–4th floors', 'TDYU 4-binosi, 3–4-qavatlar'),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b3-dep-foreign-lang',
      category: 'department',
      floor: 1,
      rooms: ['107'],
      name: L('Кафедра иностранных языков', 'Department of Foreign Languages', 'Chet tillar kafedrasi'),
      summary: L(
        'Английский, немецкий, французский для юристов; Legal English advanced',
        'English, German, French for lawyers; Legal English advanced',
        'Yuristlar uchun ingliz, nemis, fransuz tillari'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 13, ТГЮУ, 3-е здание, 107-аудитория',
        'Tashkent city, Sayilgokh street, building 13, TSUL, 3rd building, auditorium 107',
        'Toshkent shahri, Sayilgoh ko‘chasi, 13-uy, TDYU, 3-bino, 107-auditoriya'
      ),
      motto: L(
        '«Один язык приводит вас в коридор жизни. Два языка открывают все двери на этом пути»',
        '"One language sets you in a corridor for life. Two languages open every door along the way"',
        '«Bir til sizni hayot yo‘lagiga olib boradi. Ikki til bu yo‘ldagi barcha eshiklarni ochadi»'
      ),
      sections: [
        S(
          'mission',
          'Кафедра участвует в процессе подготовки высококвалифицированных кадров с современными знаниями, высокими духовно-нравственными качествами и самостоятельным мышлением. Коллектив заключает договоры о сотрудничестве с зарубежными вузами, а также создаёт нетворкинги с преподавателями и студентами данных учебных заведений. Также организует семинары, тренинги и учебные курсы с экспертами сферы. В настоящее время кафедра ведёт работу по сотрудничеству с одним из всемирно признанных университетов — Шанхайским университетом, а также с Техническим институтом Ёджу в Ташкенте, Университетом мировой экономики и дипломатии и Узбекским государственным университетом мировых языков.',
          'The department participates in the process of training highly qualified personnel with modern knowledge, high spiritual and moral qualities, and independent thinking. The staff concludes cooperation agreements with foreign universities, as well as creates networks with teachers and students of these educational institutions. It also organizes seminars, trainings, and study courses with experts in the field. Currently, the department is working on cooperation with one of the world-recognized universities – Shanghai University, as well as with the Yeoju Technical Institute in Tashkent, the University of World Economy and Diplomacy, and the Uzbekistan State University of World Languages.',
          'Kafedra zamonaviy bilimga, yuksak ma’naviy-axloqiy fazilatlarga va mustaqil fikrlashga ega yuqori malakali kadrlar tayyorlash jarayonida ishtirok etadi. Jamoa xorijiy universitetlar bilan hamkorlik shartnomalarini tuzadi, seminarlar va treninglar tashkil etadi. Hozirda kafedra Shanxay universiteti, Toshkentdagi Yeju texnika instituti, Jahon iqtisodiyoti va diplomatiya universiteti hamda O‘zbekiston davlat jahon tillari universiteti bilan hamkorlik qilmoqda.'
        ),
        SL(
          'subjects',
          [
            '4 предмета бакалавриата: Иностранный язык для юристов (основной); Немецкий язык для юристов (основной); Французский язык для юристов (основной); Legal English advanced (предмет на конкурсной основе);',
            '1 предмет магистратуры: Legal drafting (предмет на конкурсной основе).',
          ],
          [
            '4 undergraduate subjects: Foreign Language for Lawyers (main); German for Lawyers (main); French for Lawyers (main); Legal English advanced (competitive subject);',
            '1 graduate subject: Legal drafting (competitive subject).',
          ],
          [
            '4 bakalavriat fani: Yuristlar uchun chet tili (asosiy); Yuristlar uchun nemis tili (asosiy); Yuristlar uchun fransuz tili (asosiy); Legal English advanced (tanlov asosida);',
            '1 magistratura fani: Legal drafting (tanlov asosida).',
          ]
        ),
      ],
      staff: [
        P(['Тошматов Ойбек Шакирович', 'заведующий кафедрой'], ['Toshmatov Oybek Shakirovich', 'Head of Department'], ['Toshmatov Oybek Shakirovich', 'kafedra mudiri']),
        P(['Акобирова Сарвар Туйевна', 'кандидат филологических наук, доцент'], ['Akobirova Sarvar Tuyevna', 'Candidate of Philological Sciences, Associate Professor'], ['Akobirova Sarvar Tuyevna', 'filologiya fanlari nomzodi, dotsent']),
        P(['Рофиева Гуласал Юсубжоновна', 'кандидат филологических наук, доцент'], ['Rofieva Gulasal Yusubzhonovna', 'Candidate of Philological Sciences, Associate Professor'], ["Rofiyeva G‘ulasal Yusubjonovna", 'filologiya fanlari nomzodi, dotsent']),
        P(['Шамситдинова Манзура Гаппаровна', 'и.о. доцента'], ['Shamsitdinova Manzura Gapparovna', 'Acting Associate Professor'], ['Shamsitdinova Manzura Gapparovna', 'dotsent v.b.']),
        P(['Бахриддинова Муяссар Рахимовна', 'старший преподаватель'], ['Bakhriddinova Muyassar Rakhimovna', 'Senior Lecturer'], ['Bahriddinova Muyassar Rahimovna', 'katta o‘qituvchi']),
        P(['Мамадаюпова Васила Шоназаровна', 'старший преподаватель'], ['Mamadayupova Vasila Shonazarovna', 'Senior Lecturer'], ['Mamadayupova Vasila Shonazarovna', 'katta o‘qituvchi']),
        P(['Мустафоева Ноила Ишназаровна', 'старший преподаватель'], ['Mustafoeva Noila Ishnazarovna', 'Senior Lecturer'], ['Mustafoyeva Noila Ishnazarovna', 'katta o‘qituvchi']),
        P(['Йулдошев Отабек Абдуганиевич', 'старший преподаватель'], ['Yuldoshev Otabek Abduganievich', 'Senior Lecturer'], ["Yo‘ldoshev Otabek Abdug‘aniyevich", 'katta o‘qituvchi']),
        P(['Шаджалилова Нодира Бахрамовна', 'старший преподаватель'], ['Shadjalilova Nodira Bakhramovna', 'Senior Lecturer'], ['Shajalilova Nodira Bahramovna', 'katta o‘qituvchi']),
        P(['Миргиязова Муниса Мирусмановна', 'старший преподаватель'], ['Mirgiyazova Munisa Mirusmanovna', 'Senior Lecturer'], ['Mirgiyozova Munisa Mirusmanovna', 'katta o‘qituvchi']),
        P(['Мирзаахмедова Махлиё Йулдашевна', 'преподаватель'], ['Mirzaakhmedova Makhliyo Yuldashevna', 'Lecturer'], ["Mirzaaxmedova Mahliyo Yo‘ldoshevna", 'o‘qituvchi']),
        P(['Хайдарова Умида Пулатовна', 'преподаватель'], ['Khaydarova Umida Pulatovna', 'Lecturer'], ["Haydarova Umida Po‘latovna", 'o‘qituvchi']),
        P(['Султонкулов Гайратжон Мухторович', 'преподаватель'], ['Sultonkulov Gayratzhon Mukhtorovich', 'Lecturer'], ["Sultonqulov G‘ayratjon Muxtorovich", 'o‘qituvchi']),
        P(['Усарова Дилдора Абдуазизовна', 'преподаватель'], ['Usarova Dildora Abduazizovna', 'Lecturer'], ['Usarova Dildora Abduazizovna', 'o‘qituvchi']),
        P(['Рузибоева Нигора Рахимовна', 'преподаватель'], ['Ruziboeva Nigora Rakhimovna', 'Lecturer'], ['Ruziboyeva Nigora Rahimovna', 'o‘qituvchi']),
        P(['Зойирова Дилсуз Абдижалиловна', 'преподаватель'], ['Zoyirova Dilsuz Abdizalilovna', 'Lecturer'], ['Zoyirova Dilsuz Abdijalilovna', 'o‘qituvchi']),
        P(['Раупов Миразиз Мустафакулович', 'преподаватель'], ['Raupov Miraziz Mustafakulovich', 'Lecturer'], ['Raupov Miraziz Mustafaqulovich', 'o‘qituvchi']),
        P(['Аметова Ойшажон Розматовна', 'преподаватель'], ['Ametova Oyshazhon Rozmatovna', 'Lecturer'], ['Ametova Oyshajon Rozmatovna', 'o‘qituvchi']),
        P(['Расулмухамедова Умида Алишеровна', 'преподаватель'], ['Rasulmukhamedova Umida Alisherovna', 'Lecturer'], ['Rasulmuhamedova Umida Alisherovna', 'o‘qituvchi']),
        P(['Сурманов Сардор Эгамович', 'преподаватель'], ['Surmanov Sardor Egamovich', 'Lecturer'], ['Surmanov Sardor Egamovich', 'o‘qituvchi']),
        P(['Ёкубов Улугбек Ёкубхон угли', 'преподаватель'], ['Yokubov Ulugbek Yokubkhon ugli', 'Lecturer'], ["Yoqubov Ulug‘bek Yoqubxon o‘g‘li", 'o‘qituvchi']),
        P(['Сайфуллаева Юлдуз Эркиновна', 'преподаватель'], ['Sayfullaeva Yulduz Erkinovna', 'Lecturer'], ["Sayfullayeva Yo‘ldosh Erkinovna", 'o‘qituvchi']),
      ],
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b3-e-university',
      category: 'service',
      floor: 2,
      rooms: ['227'],
      name: L('Центр «Электронный университет»', '"Electronic University" Center', '«Elektron universitet» markazi'),
      summary: L(
        'ИКТ-инфраструктура, автоматизация учебного процесса, сети и информационная безопасность',
        'ICT infrastructure, automation of the educational process, networks and information security',
        'AKT infratuzilmasi, o‘quv jarayonini avtomatlashtirish, tarmoq va axborot xavfsizligi'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 13, ТГЮУ, 3-е здание, 227-аудитория',
        'Tashkent city, Sayilgokh street, building 13, TSUL, 3rd building, auditorium 227',
        'Toshkent shahri, Sayilgoh ko‘chasi, 13-uy, TDYU, 3-bino, 227-auditoriya'
      ),
      hours: L(
        'Приёмные дни: понедельник, четверг с 15:00 до 17:00',
        'Reception Days: Monday, Thursday from 15:00 to 17:00',
        'Qabul kunlari: dushanba, payshanba, soat 15:00 dan 17:00 gacha'
      ),
      sections: [
        S(
          'about',
          'Центр «Электронный университет» создан в соответствии с Постановлением Президента Республики Узбекистан №ПП–5087 от 29 апреля 2020 года «О дополнительных мерах по коренному совершенствованию юридического образования и науки в Республике Узбекистан». Центр является структурным подразделением университета и осуществляет деятельность, связанную с программным обеспечением информационно-коммуникационных систем и иных технических средств.',
          'The "Electronic University" Center was created in accordance with Resolution of the President of the Republic of Uzbekistan No. PP–5087 dated April 29, 2020 "On additional measures for fundamental improvement of legal education and science in the Republic of Uzbekistan." The center is a structural division of the university and carries out activities related to the software of information and communication systems and other technical means.',
          '«Elektron universitet» markazi O‘zbekiston Respublikasi Prezidentining 2020-yil 29-apreldagi PQ–5087-son qarori asosida tashkil etilgan. Markaz universitetning tarkibiy bo‘linmasi bo‘lib, axborot-kommunikatsiya tizimlari dasturiy ta’minoti va boshqa texnik vositalar bilan bog‘liq faoliyatni amalga oshiradi.'
        ),
        SL(
          'structure',
          [
            'Отдел автоматизации управления образовательным процессом;',
            'Отдел сервисной поддержки и технических средств;',
            'Отдел управления сетями и информационной безопасности.',
          ],
          [
            'Department of Automation of Educational Process Management;',
            'Department of Service Support and Technical Means;',
            'Department of Network Management and Information Security.',
          ],
          [
            'Ta’limni boshqarishni avtomatlashtirish bo‘limi;',
            'Xizmatni qo‘llab-quvvatlash va texnik vositalar bo‘limi;',
            'Tarmoqlarni boshqarish va axborot xavfsizligi bo‘limi.',
          ]
        ),
      ],
      staff: [
        P(['Алмурадов Камол Абдуллаевич', 'директор Центра «Электронный университет»'], ['Almuradov Kamol Abdullaevich', 'Director of the "Electronic University" Center'], ['Almuradov Kamol Abdullayevich', '«Elektron universitet» markazi direktori']),
        P(['Мадаминов Шокиржон Кахрамон угли', 'начальник отдела автоматизации управления образовательным процессом'], ['Madaminov Shokhirzhon Kahramon ugli', 'Head of the Department of Automation of Educational Process Management'], ["Madaminov Shokirjon Qahramon o‘g‘li", 'ta’lim jarayonini boshqarishni avtomatlashtirish bo‘limi boshlig‘i']),
        P(['Нурумбетов Амир Юсупбаевич', 'инженер-программист I категории'], ['Nurumbetov Amir Yusupbaevich', 'Software Engineer of the 1st Category'], ['Nurumbetov Amir Yusupbayevich', 'I toifali dasturiy ta’minot muhandisi']),
        P(['Гофуржонов Мухаммадюсуф Абдукодир угли', 'системный администратор'], ['Gofurzhonov Muhammadyusuf Abdukodir ugli', 'System Administrator'], ["G‘ofurjonov Muhammadyusuf Abduqodir o‘g‘li", 'tizim ma’muri']),
        P(['Мухторов Нодир Комил угли', 'начальник отдела сервисной поддержки и технических средств'], ['Mukhtorov Nodir Komil ugli', 'Head of the Department of Service Support and Technical Means'], ["Muxtorov Nodir Komil o‘g‘li", 'xizmatni qo‘llab-quvvatlash bo‘limi boshlig‘i']),
        P(['Кучкоров Маъмур Абдугаффор угли', 'инженер-электроник'], ['Kuchkorov Ma’mur Abdugaffor ugli', 'Electronics Engineer'], ["Qo‘chqorov Ma’mur Abdug‘affor o‘g‘li", 'elektron muhandis']),
        P(['Козлов Алексей Александрович', 'техник'], ['Kozlov Alexey Alexandrovich', 'Technician'], ['Kozlov Aleksey Aleksandrovich', 'texnik']),
        P(['Мустафоев Аброр Омонжон угли', 'техник'], ['Mustafoev Abror Omonzhon ugli', 'Technician'], ["Mustafoyev Abror Omonjon o‘g‘li", 'texnik']),
        P(['Расулов Рустам Жуманазарович', 'инженер по связи'], ['Rasulov Rustam Zhumanazarovich', 'Communications Engineer'], ['Rasulov Rustam Jumanazarovich', 'aloqa muhandisi']),
        P(['Дусткобилов Дусмурод Тураевич', 'начальник отдела управления сетями и информационной безопасности'], ['Dustkobilov Dusmurod Turaevich', 'Head of the Department of Network Management and Information Security'], ["Do‘stqobilov Dusmurod Turayevich", 'tarmoqlarni boshqarish va axborot xavfsizligi bo‘limi boshlig‘i']),
        P(['Эшонкулов Мухаммад Уктам угли', 'системный администратор'], ['Eshonkulov Muhammad Uktam ugli', 'System Administrator'], ["Eshonqulov Muhammad O‘ktam o‘g‘li", 'tizim ma’muri']),
        P(['Убайдуллаев Бекзод Косим угли', 'сетевой администратор'], ['Ubaydullaev Bekzod Kosim ugli', 'Network Administrator'], ["Ubaydullayev Bekzod Qosim o‘g‘li", 'tarmoq ma’muri']),
        P(['Назиров Рафикжон Рахимжон угли', 'инженер-программист'], ['Nazirov Rafikzhon Rahimzhon ugli', 'Software Engineer'], ["Nazirov Rafiqjon Rahimjon o‘g‘li", 'dasturiy ta’minot muhandisi']),
        P(['Ахунджанов Анвар Абдуллаевич', 'инженер-программист'], ['Akhundzhanov Anvar Abdullaevich', 'Software Engineer'], ['Oxunjonov Anvar Abdullayevich', 'dasturiy ta’minot muhandisi']),
      ],
      contacts: contacts({ phone: ['233-66-36, внутренний 1030'], email: ['www.eum@tsul.uz'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b3-irc',
      category: 'service',
      floor: 1,
      rooms: [],
      keywords: ['ИРЦ', 'IRC', 'библиотека', 'kutubxona', 'ARM'],
      name: L('Информационно-ресурсный центр (ИРЦ)', 'Information Resource Center', 'Axborot-resurs markazi (ARM)'),
      summary: L(
        'Электронный каталог, доступ к Westlaw, Scopus, Web of Science',
        'Electronic catalogue, access to Westlaw, Scopus, Web of Science',
        'Elektron katalog, Westlaw, Scopus, Web of Science bazalari'
      ),
      address: L(
        'г. Ташкент, ул. Амира Темура, 12, учебное здание №3, ИРЦ',
        'Tashkent city, Amir Temur street 12, academic building No. 3, IRC',
        'Toshkent shahri, Amir Temur ko‘chasi, 12-uy, 3-o‘quv binosi, ARM'
      ),
      sections: [
        S(
          'about',
          'Информационно-ресурсный центр — особая структура ТГЮУ, партнёр университета в достижении целей образования, которая охватывает все сферы деятельности: учебную, научную и духовно-просветительскую, активно участвует в обеспечении развития образовательного, научного и культурного процесса университета. Он оказывает инновационную и программную поддержку процесса образования и исследований в партнёрстве с профессорско-преподавательским составом и другими исследовательскими и образовательными организациями.',
          'The Information Resource Center is a special structure of TSUL and a partner of the university in achieving educational goals, covering all areas of activity: educational, scientific, spiritual, and enlightenment. It actively participates in ensuring the development of the educational, scientific, and cultural process of the university. It provides innovative and software support for the education and research process in partnership with the faculty and other research and educational organizations.',
          'Axborot-resurs markazi — TDYU ning maxsus tuzilmasi, ta’lim maqsadlariga erishishda universitetning hamkori. Markaz o‘quv, ilmiy va ma’naviy-ma’rifiy faoliyatning barcha sohalarini qamrab oladi hamda professor-o‘qituvchilar bilan hamkorlikda ta’lim va tadqiqot jarayonini innovatsion va dasturiy qo‘llab-quvvatlaydi.'
        ),
        S(
          'capacity',
          'ИРЦ осуществляет справочно-библиографическое и информационное обслуживание студентов, профессорско-преподавательского состава, научных сотрудников университета и широкого круга читателей. Чтобы информировать читателей о литературе и создать условия для её использования, сформирован электронный каталог на базе программ АРМАТ++ и ИРБИС, электронная библиотека на официальном сайте университета и официальный телеграм-канал https://t.me/tsullibrary. Также организован доступ к электронным ресурсам мировых научно-образовательных баз данных Westlaw, LexisNexis, Springer, Web of Science, Scopus, Polpred.com. Ведутся переговоры по заключению договора с юридической базой данных LexisNexis. С 2010 года ИРЦ является членом Международной ассоциации университетских библиотек (Дюссельдорф, Германия).',
          'The IRC provides reference, bibliographic, and information services to students, faculty members, researchers of the university, and a wide range of readers. In order to inform readers about literature and create conditions for its use, an electronic catalog was formed based on the ARMAT++ and IRBIS software, an electronic library on the official university website, and an official Telegram channel https://t.me/tsullibrary. Access to electronic resources of global scientific and educational databases—Westlaw, LexisNexis, Springer, Web of Science, Scopus, and Polpred.com—was also organized. Negotiations are underway to conclude an agreement with the LexisNexis legal database. Since 2010, the IRC has been a member of the International Association of University Libraries (Düsseldorf, Germany).'
        ),
        SL(
          'projects',
          [
            'Ежегодный конкурс «Энг фаол китобхон гуруҳ» («Самая активная группа читателей»);',
            'Ежемесячный конкурс «Зукко китобхон» («Находчивый читатель»), который проводится совместно с первичной организацией Союза молодёжи;',
            'Викторина «Тафаккур» в телеграм-канале ИРЦ.',
          ],
          [
            'Annual contest "Eng faol kitobhon guruh" ("The Most Active Readers’ Group");',
            'Monthly contest "Zukko kitobhon" ("Resourceful Reader"), held jointly with the primary organization of the Youth Union;',
            'The IRC also conducts the "Tafakkur" quiz on its Telegram channel.',
          ],
          [
            'Har yili o‘tkaziladigan «Eng faol kitobxon guruh» tanlovi;',
            'Yoshlar ittifoqi boshlang‘ich tashkiloti bilan birgalikda o‘tkaziladigan oylik «Zukko kitobxon» tanlovi;',
            'ARM Telegram kanalidagi «Tafakkur» viktorinasi.',
          ]
        ),
      ],
      staff: [
        P(['Юсупов Нозимжон Набижонович', 'ведущий специалист ИТ отдела обслуживания информационно-библиотечными ресурсами'], ['Yusupov Nozimzhon Nabizhonovich', 'Leading Specialist of the IT Service Department for Information and Library Resources'], ['Yusupov Nozimjon Nabijonovich', 'axborot-kutubxona resurslari xizmati yetakchi IT mutaxassisi']),
        P(['Усмоналиева Нилуфар Мамаджоновна', 'библиотекарь 1-й категории'], ['Usmonalieva Nilufar Mamadzhonovna', '1st Category Librarian'], ['Usmonaliyeva Nilufar Mamadjonovna', '1-toifali kutubxonachi']),
        P(['Холматова Ирода Холмат қизи', 'библиотекарь 2-й категории'], ['Kholmatova Iroda Kholmat kizi', '2nd Category Librarian'], ['Xolmatova Iroda Xolmat qizi', '2-toifali kutubxonachi']),
        P(['Толипова Зилола Набиевна', 'библиотекарь 2-й категории научно-методического и информационно-справочного отдела'], ['Tolipova Zilola Nabievna', '2nd Category Librarian of the Scientific-Methodological and Information-Reference Department'], ['Tolipova Zilola Nabiyevna', 'ilmiy-uslubiy va axborot-ma’lumot bo‘limi 2-toifali kutubxonachisi']),
        P(['Шамаева Дилнара Турамуротовна', 'ведущий специалист 2-й категории научно-методического и информационно-справочного отдела'], ['Shamaeva Dilnara Turamurotovna', '2nd Category Leading Specialist of the Scientific-Methodological and Information-Reference Department'], ['Shamayeva Dilnara Turamurotovna', 'ilmiy-uslubiy va axborot-ma’lumot bo‘limi 2-toifali yetakchi mutaxassisi']),
        P(['Юрьев Борис Александрович', 'библиотекарь отдела обслуживания информационно-библиотечными ресурсами'], ['Yuryev Boris Alexandrovich', 'Librarian of the Service Department for Information and Library Resources'], ['Yuryev Boris Aleksandrovich', 'axborot-kutubxona resurslari xizmati kutubxonachisi']),
        P(['Халин Сергей Александрович', 'библиотекарь электронной библиотеки отдела электронных информационных ресурсов'], ['Khalin Sergey Alexandrovich', 'Librarian of the Electronic Library of the Department of Electronic Information Resources'], ['Xalin Sergey Aleksandrovich', 'elektron axborot resurslari bo‘limi elektron kutubxonachisi']),
      ],
      contacts: contacts({ email: ['arm@tsul.uz'], telegram: ['https://t.me/tsullibrary'] }),
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'b3-professional-training',
      category: 'service',
      floor: 2,
      rooms: ['202B'],
      name: L('Центр профессионального обучения', 'Professional Training Center', 'Kasb-hunar ta’limi markazi'),
      summary: L(
        'Обучение, переподготовка и повышение квалификации слушателей',
        'Training, retraining and advanced training for students',
        'Tinglovchilarni o‘qitish, qayta tayyorlash va malaka oshirish'
      ),
      address: L(
        'г. Ташкент, ул. Сайилгох, д. 13, ТГЮУ, 3-е здание, аудитория 202 В',
        'Tashkent city, Sayilgokh street, building 13, TSUL, 3rd building, auditorium 202 B',
        'Toshkent shahri, Sayilgoh ko‘chasi, 13-uy, TDYU, 3-bino, 202-auditoriya'
      ),
      sections: [
        S(
          'about',
          'В данном помещении осуществляет свою деятельность Центр профессионального обучения. В центре организуются процессы обучения, переподготовки и повышения квалификации слушателей. Также сотрудниками центра и профессорско-преподавательским составом проводятся занятия, консультации и организационная работа, связанная с учебным процессом. Основная цель центра — подготовка высококвалифицированных юридических кадров, отвечающих современным требованиям, и развитие их профессионального потенциала.',
          'The Professional Training Center carries out its activities in these premises. The center organizes processes of training, retraining, and advanced training for students. Additionally, employees of the center and the teaching staff conduct classes, consultations, and organizational work related to the educational process. The main goal of the center is to train highly qualified legal personnel who meet modern requirements and to develop their professional potential.',
          'Ushbu xonada kasb-hunar ta’limi markazi faoliyat yuritadi. Markazda tinglovchilarni o‘qitish, qayta tayyorlash va malaka oshirish jarayonlari tashkil etiladi. Markazning asosiy maqsadi — zamonaviy talablarga javob beradigan yuqori malakali yuridik kadrlar tayyorlash va ularning kasbiy salohiyatini rivojlantirish.'
        ),
      ],
    },
  ],
};

export default building3;
