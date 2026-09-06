/**
 * УЗБЕКСКИЕ ПЕРЕВОДЫ КОНТЕНТА ПОДРАЗДЕЛЕНИЙ
 * ---------------------------------------------------------------------------
 * Почему отдельным файлом, а не третьим аргументом в L(...) внутри
 * src/data/buildings/*.js:
 *
 *  1. Исходные материалы ТГЮУ пришли на русском и английском — здание №3 было
 *     единственным с настоящим узбекским текстом (он и лежит в building-3.js).
 *     Всё остальное переведено при разработке, и держать это отдельно честнее:
 *     видно, где официальная формулировка, а где перевод, требующий вычитки.
 *  2. Файл целиком отдаётся корректору без риска задеть структуру данных.
 *
 * Ключ верхнего уровня — id подразделения; `sections` — по ключу секции.
 * Мерж выполняет normalizeUnit() в src/data/index.js: узбекский подставляется
 * только туда, где его ещё нет, поэтому здание №3 остаётся нетронутым.
 */

export const UZ_CONTENT = {
  /* ===================== ЗДАНИЕ №1 ===================== */

  'b1-rectorate': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, TDYU 1-binosi, 206-xona',
    audience:
      'Rektoratga universitet faoliyatining rahbariyat darajasida hal qilinishi lozim bo‘lgan strategik va tashkiliy masalalari bo‘yicha murojaat qilinadi — yirik tashabbuslar, tarkibiy bo‘linmalar darajasida hal etilmagan shikoyatlar, tashkilotlar va hokimiyat vakillarining rasmiy murojaatlari.',
    sections: {
      about:
        'Rektor: Xodjayev Baxshillo Kamolovich — yuridik fanlar doktori, professor, 2-darajali adliya maslahatchisi. 1982-yil 25-iyunda Buxoro viloyatida tug‘ilgan.',
      works:
        'Ta’lim va faoliyat: 2004-yilda Toshkent davlat yuridik instituti bakalavriaturasini, 2006-yilda magistraturasini tamomlagan. 2004–2005-yillarda «Mezon xususiy xizmati» advokatlik firmasida yurist yordamchisi, 2006–2013-yillarda «Xo‘jalik huquqi va xo‘jalik-protsessual huquqi» kafedrasi o‘qituvchisi, katta o‘qituvchisi hamda 2-yuridik fakultet dekani o‘rinbosari bo‘lib ishlagan. 2013–2014-yillarda TDYU biznes huquqi kafedrasi dotsenti. 2014–2018-yillarda Nagoya universitetida (Yaponiya) «Qiyosiy huquqshunoslik» yo‘nalishi bo‘yicha doktorantura o‘qigan. 2018–2019-yillarda O‘zbekiston Respublikasi Adliya vazirligi huzuridagi Huquqiy siyosat tadqiqot instituti bosh maslahatchisi, bo‘lim boshlig‘i, direktor o‘rinbosari lavozimlarida; 2019–2020-yillarda Adliya vazirligining Yuridik ta’lim va sud-ekspertiza faoliyatini muvofiqlashtirish boshqarmasi boshlig‘i o‘rinbosari; 2020-yilda TDYU biznes huquqi kafedrasi mudiri; 2020–2022-yillarda xususiy huquq fakulteti dekani bo‘lgan.',
    },
  },

  'b1-accounting': {
    address:
      'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, TDYU 1-binosi, 102 va 110-xonalar, 103-xona (bo‘lim manzili)',
    audience:
      'Universitet xodimlari va o‘qituvchilari ish haqi, stipendiya va boshqa to‘lovlar bo‘yicha, universitet bo‘linmalari esa moliyaviy va soliq hisoboti bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      about:
        'Buxgalteriya — Toshkent davlat yuridik universitetining eng yosh va tashabbuskor bo‘limlaridan biri.',
      goal:
        'Zamonaviy texnik vositalar va axborot texnologiyalaridan foydalangan holda buxgalteriya hisobini tashkil etish.',
      tasks: [
        'byudjet va byudjetdan tashqari mablag‘larning xarajatlar smetasida ko‘zda tutilgan maqsadlarga sarflanishini ta’minlash;',
        'pul mablag‘lari va qimmatliklar saqlanishini muntazam nazorat qilish;',
        'o‘qituvchilar va xodimlarning ish haqi hamda unga tenglashtirilgan to‘lovlarni, talabalar stipendiyasini o‘z vaqtida hisoblash va to‘lash;',
        'debitorlik qarzini o‘z vaqtida undirish va kreditorlik qarzining so‘ndirilishini ta’minlash;',
        'moliyaviy, soliq va boshqa hisobotlarni tayyorlash hamda topshirish.',
      ],
    },
  },

  'b1-finance': {
    address:
      'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, TDYU 1-binosi, 101-xona (bo‘lim ma’lumotlarida 103-xona ham ko‘rsatilgan)',
    audience:
      'Universitetning tarkibiy bo‘linmalari shtat jadvali, xarajatlar smetasi, ustama va mukofotlar hamda moliyaviy-xo‘jalik masalalari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      about:
        'TDYU moliya-iqtisod bo‘limi universitetning yangi tashkil etilgan va tashabbuskor bo‘limlaridan biridir.',
      tasks:
        'Universitetning rahbar, texnik, xizmat ko‘rsatuvchi va professor-o‘qituvchilar tarkibi uchun shtat jadvalini ishlab chiqish, xarajatlar smetasini tuzish.',
      activity: [
        'xodimlarga ustama va mukofotlar ajratish masalalari bilan shug‘ullanadi;',
        'O‘zbekiston Respublikasi Fan va texnologiyalar agentligi grantlari bo‘yicha ilmiy-tadqiqot, fundamental va amaliy tadqiqotlarga hamda yosh olimlar loyihalariga ajratilgan mablag‘lardan samarali foydalanishni ta’minlaydi;',
        'universitet bosmaxonasida darsliklar, o‘quv qo‘llanmalari, monografiyalar va zarur blankalarni chop etish xarajatlarini hisoblab chiqadi;',
        'universitetning moliyaviy-iqtisodiy holatini mustahkamlash, moliya-xo‘jalik faoliyatini rejali yuritish, byudjet va byudjetdan tashqari mablag‘lardan maqsadli foydalanish samaradorligini oshirish ustida ishlaydi.',
      ],
    },
  },

  'b1-quality': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, 1-o‘quv binosi, 208 va 205A-xonalar',
    motto:
      '«Qonun ustuvorligi va ijtimoiy adolat malakali yuridik kadrlar tomonidan ta’minlanadi»',
    audience:
      'O‘qituvchilar va talabalar ta’lim jarayoni sifati, o‘qitishning ta’lim standartlariga muvofiqligi hamda ichki attestatsiya masalalari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      mission:
        'Bo‘lim — universitetning yangi bo‘linmalaridan biri bo‘lib, tashabbuskor, g‘ayratli va iqtidorli yosh xodimlardan tashkil topgan. Biz talabalar bilimining davlat ta’lim standartlariga muvofiqligini o‘rganish va tahlil qilish, o‘qitish sifatini nazorat qilish, ichki attestatsiyani tashkil etish, ta’lim sifatiga ta’sir qiluvchi salbiy omillarni aniqlash va bartaraf etish, ta’lim sifatini oshirish hamda raqobatbardosh yuridik kadrlar tayyorlash ustida ishlaymiz.',
      principle: '«Ta’lim jarayoni sifatini qadrlash va unga doimo intilish».',
      tasks: [
        'universitetda ta’lim sifati ustidan tizimli nazoratni tashkil etamiz;',
        'ta’lim sifatini oshirishga qaratilgan me’yoriy hujjatlar ijrosini nazorat qilamiz;',
        'ta’lim sifatini belgilovchi ko‘rsatkichlar monitoringini olib boramiz;',
        'universitetning ichki attestatsiyasida, uning reytingini xalqaro darajaga ko‘tarish chora-tadbirlarini ishlab chiqishda ishtirok etamiz;',
        'o‘qish va amaliyot o‘rtasidagi integratsiya jarayonlarini o‘rganamiz;',
        'o‘quv jarayonini o‘rganish natijalari bo‘yicha tahliliy hujjatlar tayyorlaymiz;',
        'faol, qiziqarli va sifatli mashg‘ulotlar olib boradigan o‘qituvchilarni rag‘batlantirish bo‘yicha takliflar kiritamiz;',
        'ta’lim sifatini oshirish yo‘nalishlarini aniqlash uchun talabalar orasida sotsiologik so‘rovlar o‘tkazamiz.',
      ],
    },
  },

  'b1-hr': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, 1-o‘quv binosi, 207-xona',
    audience:
      'Ishga kirmoqchi bo‘lgan nomzodlar, shuningdek amaldagi xodimlar va o‘qituvchilar mehnat munosabatlarini rasmiylashtirish, kadrlar zaxirasi va mehnat qonunchiligi masalalari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      about:
        'TDYU kadrlar bo‘limi O‘zbekiston Respublikasi Prezidentining 2017-yil 28-apreldagi PQ-2932-son «TDYUda kadrlar tayyorlash tizimini tubdan takomillashtirish va samaradorligini oshirish chora-tadbirlari to‘g‘risida»gi qarori, 2020-yil 29-apreldagi PF-5987-son «O‘zbekiston Respublikasida yuridik ta’lim va fanni tubdan takomillashtirish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida»gi farmoni hamda universitet Kengashining 2020-yil 21-maydagi 4-son qarori asosida tashkil etilgan.',
      mission:
        'Bo‘lim universitetning tarkibiy bo‘linmasi bo‘lib, universitetni zimmasiga yuklatilgan vazifa va funksiyalarni bajara oladigan yuqori malakali kadrlar bilan ta’minlash, xodimlarni joy-joyiga qo‘yish va kadrlar zaxirasini shakllantirish bo‘yicha ish olib boradi.',
      tasks:
        'Malakali mutaxassislarni izlash, jalb qilish va tanlash; O‘zbekiston Respublikasi adliya vaziriing 2020-yil 24-martdagi 68-um-sonli «Adliya organlari va muassasalarida HR-menejment tizimi to‘g‘risida»gi buyrug‘iga muvofiq nomzodlarni suhbat yoki rekrutment va xedxanting tanlovi asosida ishga qabul qilishni tashkil etish; mehnat munosabatlari hujjatlarini rasmiylashtirish; universitet xodimlari ma’lumotlar bazasini shakllantirish; O‘zbekiston Respublikasi Mehnat kodeksi va boshqa mehnat qonunchiligi talablariga rioya etilishini nazorat qilish.',
      goal:
        'Professor-o‘qituvchilar tarkibi va boshqa xodimlar safiga yuksak kasbiy-pedagogik mahoratga, huquqiy va siyosiy madaniyatga, ijodiy fikrlashga ega halol, vijdonli va malakali kadrlarni keng jalb qilish.',
    },
  },

  'b1-anticorruption': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, 1-o‘quv binosi, 204-xona',
    audience:
      'Talabalar, o‘qituvchilar va universitet xodimlari korrupsiya holatlari yoki ularga shubha bo‘yicha @tsul_anticorbot Telegram-boti, ishonch telefoni orqali yoki shaxsan murojaat qilishlari mumkin.',
    sections: {
      about:
        'TDYU ichki korrupsiyaga qarshi nazorat bo‘limi 2022-yil 14-dekabrda tashkil etilgan. Universitetda professor-o‘qituvchilar va talabalar o‘rtasida korrupsiyaga yo‘l qo‘ymaslik, amaldagi qonunchilik, O‘zbekiston Respublikasi Korrupsiyaga qarshi kurashish milliy kengashi qarorlari va rahbariyat topshiriqlarining o‘z vaqtida hamda sifatli ijrosini ta’minlash chora-tadbirlari amalga oshirilmoqda.',
      training:
        '27-aprel kuni professor-o‘qituvchilar va universitet xodimlari uchun ichki korrupsiyaga qarshi hujjatlar hamda ISO 37001 xalqaro standarti talablarini tushuntirish bo‘yicha seminar-trening o‘tkazildi. O‘zbekiston Respublikasi Prezidentining 2020-yil 29-apreldagi PF-5987-son farmoniga muvofiq universitetda korrupsiyaga qarshi kurashish tizimini ISO 37001 xalqaro standartlariga moslashtirish chora-tadbirlari ko‘rilmoqda.',
      cooperation:
        'Bo‘lim tomonidan O‘zbekiston Respublikasi Korrupsiyaga qarshi kurashish agentligi bilan birgalikda qo‘shma reja ishlab chiqilgan bo‘lib, uning doirasida professor-o‘qituvchilar, xodimlar va talabalar o‘rtasida korrupsiyaga qarshi turli targ‘ibot va ma’rifiy tadbirlar o‘tkaziladi.',
    },
  },

  'b1-safety': {
    address:
      'Toshkent sh., Sayilgoh ko‘chasi, 35, 1-o‘quv binosi, 311-xona (3-qavat)',
    motto: '«O‘z vaqtida ogohlantirish, qutqarish va yordam berish»',
    audience:
      'Xodimlar va talabalar mehnat muhofazasi, yong‘in va texnik xavfsizlik hamda favqulodda vaziyatlardagi harakatlar bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      mission:
        'Universitetning strategik bo‘limlaridan biri. Biz xodimlar va talabalar o‘rtasida doimiy ogohlantirish-profilaktika ishlarini olib boramiz, yong‘in va texnik xavfsizlik qoidalariga rioya etilishini hamda favqulodda vaziyatlarda xodimlar va talabalarning to‘g‘ri harakat qilishini o‘rgatamiz va nazorat qilamiz.',
      tasks:
        'Favqulodda vaziyatlar xavfi va tahdidlarining oldini oldindan olish, aholi hayoti va sog‘lig‘iga xavf tug‘ilganda o‘z vaqtida va kompleks yordam ko‘rsatish. Uch yo‘nalishda ishlaymiz: mehnat muhofazasi va xavfsizligi; favqulodda vaziyatlarda fuqaro muhofazasi; yong‘in va texnik xavfsizlik.',
      activity:
        'Malaka oshirish ustida doimiy ishlaymiz, mehnat muhofazasi va yong‘in xavfsizligi bo‘yicha bilim hamda ko‘nikmalarni takomillashtiramiz, O‘zbekiston Respublikasi FVV hamkasblari, shuningdek Rossiya, Belarus va Yaponiya mutaxassislari bilan tajriba almashamiz. Ish joyidagi baxtsiz hodisalar va jarohatlanishning oldini olish, favqulodda vaziyatlarning oldini olish va bartaraf etish, xodimlar va talabalarni favqulodda vaziyatlardagi harakatlarga tayyorlash, avtomatik tizimlar orqali xabardor qilish va kuch-vositalar shayligini ta’minlash bo‘yicha tadbirlarni amalga oshiramiz. Tadbirlarga FVV, huquqni muhofaza qilish organlarining tajribali mutaxassislari va tibbiyot xodimlari jalb etiladi; birinchi yordam ko‘rsatish bo‘yicha namunali va amaliy mashg‘ulotlar o‘tkaziladi.',
    },
  },

  'b1-legal-bureau': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, 1-o‘quv binosi, 127-xona',
    audience:
      'Universitetning tarkibiy bo‘linmalari lokal hujjatlar huquqiy ekspertizasi, shartnoma-huquqiy va da’vo ishlari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      goal:
        'Yuridik byuro — TDYUning tarkibiy bo‘linmasi bo‘lib, uning asosiy faoliyat yo‘nalishlari: universitetning huquqni qo‘llash faoliyatida qonun ustuvorligi va qonuniylikni ta’minlashni tashkil etish; lokal hujjatlar va boshqa hujjatlar loyihalarining qonunchilikka muvofiqligini nazorat qilish; me’yoriy ijodkorlikda ishtirok etish, shartnoma-huquqiy va da’vo ishlarini yuritish, universitetning mulkiy va boshqa manfaatlarini himoya qilish; qonunchilik talablariga javob bermaydigan hujjat loyihalarini qayta ishlashga qaytarish, huquqiy xulosalar tayyorlash; tekshiruv, reviziya va inventarizatsiyalarda ishtirok etish, aniqlangan huquqbuzarliklar bo‘yicha huquqiy xulosalar tayyorlash.',
    },
  },

  'b1-operations': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, 1-o‘quv binosi, 105-xona',
    audience:
      'Xodimlar, o‘qituvchilar va talabalar universitet binolari hamda Talabalar turar joyining ekspluatatsiyasi, ta’miri va texnik holati bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      mission:
        'TDYU binolarining ekspluatatsiyasi va ta’mirini tashkil etadi. Biz o‘quv va talabalar binolarida, Talabalar turar joyida profilaktika va ta’mirlash ishlarini, joriy hamda kapital ta’mirni, elektr ta’minoti va binolarga xizmat ko‘rsatishni amalga oshiramiz va shu orqali professor-o‘qituvchilar, xodimlar va talabalar uchun qulay sharoit yaratamiz.',
      works:
        '2020-yilda o‘quv binosining auditoriya va yo‘laklarida joriy ta’mirlash ishlari olib borildi. 1-, 2- va 3-o‘quv binolarining isitish tizimiga zamonaviy fankoyl tizimi va issiqlik almashinuv uskunalari orqali muntazam xizmat ko‘rsatiladi. Talabalar turar joyining yo‘laklari, dush xonalari va sanuzellari zamonaviy dizayn asosida joriy ta’mirdan chiqarildi; 4 ta kichik Grizzly 150 klo isitish qozoni o‘rnatildi. Talabalar turar joyi hududida favvoralar barpo etilib, zamonaviy tungi ko‘rish qurilmalari o‘rnatildi. Issiq va sovuq suv ta’minoti tizimlari tugunlari profilaktik ta’mirdan o‘tkazildi. 1- va 3-binolar tomlari yonuvchanlikni kamaytirish uchun qayta ishlanib, yong‘in xavfsizligi xodimlari tomonidan ko‘rikdan o‘tkazildi. Barcha ichki va tashqi elektr tizimlari laboratoriya sharoitida sinovdan o‘tdi. Universitet transport vositalarining texnik holati tekshiriladi va yo‘l harakati qoidalariga rioya etilishi nazorat qilinadi. Hudud obodonlashtirish va ko‘kalamzorlashtirish ishlari doimiy olib boriladi.',
    },
  },

  'b1-org-control': {
    address:
      'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU, 1-bino, 202-xona (bo‘lim ma’lumotlarida 204-xona ham ko‘rsatilgan)',
    audience:
      'Universitetning tarkibiy bo‘linmalari ish yuritish, ijro intizomi hamda arxiv bilan ishlash masalalari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      goal:
        'Universitetda nazorat ishlarini muvofiqlashtirish, kafedralar va boshqa tarkibiy bo‘linmalarda ijro intizomi holatini o‘rganish, ijro nazorati samaradorligini oshirish bo‘yicha takliflar tayyorlash, ish yuritish va hujjatlar ijrosini nazorat qilish, ularni tizimli tahlil etish hamda muntazam monitoring qilish.',
      legalBasis:
        'Boshqarma faoliyati O‘zbekiston Respublikasi adliya vazirining 2020-yil 21-oktabrdagi 194-um-sonli buyrug‘iga Monitoring va tashkiliy nazorat boshqarmasi bo‘yicha kiritilgan qo‘shimcha hamda O‘zbekiston Respublikasi Prezidentining 2020-yil 29-apreldagi PF-5987-son farmoni 17-bandi bilan tartibga solinadi. Boshqarma shtatida 9 nafar doimiy xodim bor.',
      structure:
        'Boshqarma tarkibiga Monitoring va ichki nazorat bo‘limi, Devonxona hamda Arxiv kiradi.',
    },
  },

  'b1-chancellery': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU, 1-bino, 109-xona',
    audience:
      'Xodimlar, o‘qituvchilar va talabalar xizmat hujjatlari va rasmiy murojaatlarni ro‘yxatga olish, rasmiylashtirish va harakati bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      about:
        'Devonxona — TDYU Tashkiliy nazorat va strategik rejalashtirish boshqarmasi tarkibidagi tarkibiy bo‘linma bo‘lib, universitetning ish yuritishi uchun javob beradi.',
      tasks:
        'Universitetning kiruvchi va chiquvchi hujjatlarini qabul qilish, ro‘yxatga olish, hisobga olish va ijrosini nazorat qilish; tarkibiy bo‘linmalar o‘rtasida hujjat aylanishini tashkil etish; xizmat hujjatlarini belgilangan talablarga muvofiq tayyorlash va rasmiylashtirish.',
    },
  },

  'b1-legal-clinic': {
    address:
      'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, TDYU 1-o‘quv binosi, 124-xona (manbada 129-xona ham ko‘rsatilgan)',
    audience:
      'Jismoniy va yuridik shaxslar bepul yuridik maslahat olish uchun, talabalar esa amaliy ko‘nikmalar orttirish uchun murojaat qilishlari mumkin.',
    sections: {
      goal:
        'Universitet talabalarining nazariy bilimlarini amaliyot bilan bog‘lash, talabalarda amaliy ko‘nikmalarni rivojlantirish, shuningdek jismoniy va yuridik shaxslarga bepul yuridik maslahatlar ko‘rsatish.',
      partners:
        'Klinika yetakchi ta’lim va ilmiy muassasalar, xalqaro tashkilotlar hamda jahon yuridik klinikalari bilan hamkorlik qiladi: Qirg‘iziston Respublikasi Yuridik klinikalari assotsiatsiyasi, Yevroosiyo jamg‘armasi, BMT Taraqqiyot dasturi, USAID, amerikalik Street Law Inc. kompaniyasi, BMTning Giyohvandlik va jinoyatchilikka qarshi kurash boshqarmasi (UNODC), Nyu-York va Sirakuza universitetlari (AQSh). Klinika shuningdek O‘zbekiston Yoshlar ittifoqi, «Interlex» advokatlik firmasi, O‘zbekiston Respublikasi Volontyorlar assotsiatsiyasi, «Yuksalish» umummilliy harakati, O‘zbekiston Yoshlarining jahon assotsiatsiyasi, «Mehr va Oqibat» NNT, Toshkent shahar «SHAROIT PLYUS» nogironlar jamoat birlashmasi va «Madad» muassasasi bilan hamkorlik qiladi.',
      stats:
        '2023-yil davomida yuridik klinika fuqarolarning jami 2 462 ta murojaatini ko‘rib chiqdi: 1 259 tasi onlayn, 1 203 tasi oflayn, ya’ni klinikaga shaxsan kelish orqali.',
      education:
        '«Jamiyatda huquqiy ong va huquqiy madaniyatni oshirish — ustuvor vazifa» shiori ostida klinika talabalari va o‘qituvchilari targ‘ibot tadbirlari hamda fuqarolarni sayyor qabul qilishni o‘tkazadilar.',
      projects: [
        'Street Law loyihasi;',
        '«Fuqarolarni qabul qiluvchi eng yaxshi talaba» tanlovi;',
        '«Eng yaxshi yuridik videolavha» tanlovi;',
        '«Huquqiy zukkolik» intellektual o‘yini;',
        'fuqarolar murojaatlari bilan ishlash;',
        'onlayn murojaatlar bilan ishlash.',
      ],
      socials:
        'Klinikaning rasmiy sahifalari Instagram, Facebook, Telegram (o‘zbek va rus tillarida), YouTube va TikTokda yuritiladi. Murojaatlar va sayyor qabullar tahlili asosida eng dolzarb huquqiy masalalar bo‘yicha kichik ommabop amaliy qo‘llanmalar turkumi tayyorlanadi.',
    },
  },

  'b1-dep-constitutional': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, 1-o‘quv binosi, 214A-xona',
    motto: '«Xalq farovonligi — oliy qonun» (Salus Populi Suprema Lex), Tsitseron',
    audience:
      'Talabalar o‘quv masalalari, apellyatsiyalar va konstitutsiyaviy huquq bo‘yicha ilmiy ish yuzasidan murojaat qilishlari mumkin.',
    sections: {
      goal:
        'Konstitutsiyaviy huquq sohasida yetakchi olimlar faoliyat yuritadigan va xalqaro darajadagi mutaxassislar tahsil oladigan jahondagi eng nufuzli maktablardan biriga aylanish. Kafedra faoliyati konstitutsiyaviy huquq va turdosh modullar bo‘yicha xalqaro standartlarga javob beradigan o‘quv materiallarini yaratish va ulardan foydalanishga qaratilgan. Biz mamlakat, jahon va fuqarolik jamiyatidagi konstitutsiyaviy huquqqa oid jarayonlarni har tomonlama o‘rganishga, xalqaro tajriba bilan tanishishga, shuningdek ushbu sohadagi me’yoriy hujjatlarni tadqiq etish va ishlab chiqishga intilamiz. O‘zbekiston Respublikasi Oliy Majlisi palatalari, Konstitutsiyaviy sud, Markaziy saylov komissiyasi, Adliya vazirligi, huquqni muhofaza qilish organlari, nodavlat notijorat tashkilotlari va respublika oliy o‘quv yurtlari bilan hamkorlik qilamiz.',
      tasks: [
        'O‘zbekiston Konstitutsiyasi va qonunchiligidagi o‘zgarishlarni tahlil qilish;',
        'qonunchilikni takomillashtirish bo‘yicha takliflar ishlab chiqish;',
        'ilmiy konferensiyalar, kraudsorsing va davra suhbatlarini o‘tkazish;',
        'O‘zbekiston va xorijiy davlatlar konstitutsiyalarini tahlil qilish;',
        'darsliklar, o‘quv qo‘llanmalari va ilmiy maqolalar tayyorlash;',
        'talabalarning davlat hokimiyati organlariga tashrifini tashkil etish;',
        'xorijiy universitetlar va tadqiqot markazlari bilan hamkorlik qilish;',
        'konstitutsiyaviy huquq bo‘yicha xalqaro loyihalarda ishtirok etish.',
      ],
      subjects:
        'Kafedra 13 ta fan bo‘yicha ta’lim beradi: 9 tasi bakalavriatda (Konstitutsiyaviy huquq, Parlament huquqi, Qiyosiy konstitutsiyaviy huquq, Konstitutsiyaviy odil sudlov, Mahalliy hokimiyat organlari; tanlov bo‘yicha — Saylov huquqi, O‘zini o‘zi boshqarish organlari huquqi, Nodavlat notijorat tashkilotlari huquqi, Qonun ijodkorligi jarayoni) va 4 tasi magistraturada (Konstitutsiyaviy huquqning ilmiy va amaliy muammolari, Konstitutsiyaviy nazorat va konstitutsiyaviy odil sudlov, NNT huquqi modullari; tanlov bo‘yicha — OAV huquqi).',
      capacity:
        '2025-yilda kafedra tomonidan OAK ro‘yxatiga kiritilgan jurnallarda 58 ta maqola, shu jumladan 15 tasi xalqaro jurnallarda, 24 tasi xalqaro konferensiyalarda, Scopus bazasiga kiritilgan nashrlarda 8 ta maqola, 3 ta darslik, 28 ta o‘quv qo‘llanma va 5 ta monografiya chop etildi. Kafedra shtatida 5 nafar ilmiy darajali professor (5 fan doktori), 2 nafar professor v.b. (2 fan doktori), 1 nafar dotsent (falsafa doktori), 3 nafar katta o‘qituvchi, 5 nafar dotsent v.b. (5 fan nomzodi), 9 nafar o‘qituvchi, shuningdek 62 nafar mustaqil izlanuvchi va 1 nafar doktorant bor.',
      cooperation:
        'Kafedra QS World University Rankings, Times Higher Education va Academic Ranking of World Universities reytinglarining birinchi 1000 taligiga kiruvchi oliy o‘quv yurtlari, shuningdek Nagoya universiteti bilan hamkorlik qiladi. Oliy Majlis Qonunchilik palatasi va Senati, Vazirlar Mahkamasi, Konstitutsiyaviy sud, Markaziy saylov komissiyasi, Bosh prokuratura, O‘zbekiston Respublikasi Adliya vazirligi, Davlat boshqaruvi akademiyasi, shuningdek Jahon iqtisodiyoti va diplomatiya universiteti, Huquqni muhofaza qilish akademiyasi, Jamoat xavfsizligi universiteti, IIV akademiyasi va Toshkentdagi Xalqaro Vestminster universiteti bilan hamkorlik yo‘lga qo‘yilgan. Kafedra professorlari «O‘zbekiston Respublikasi Konstitutsiyaviy sudi to‘g‘risida»gi qonun va Saylov kodeksining yangi tahrirlarini ishlab chiqishda ishtirok etganlar.',
    },
  },

  'b1-dep-labour': {
    address:
      'Toshkent sh., Sayilgoh ko‘chasi, 35, 1-o‘quv binosi, 120-xona (konsultatsiya jadvali — 207A-xona)',
    motto: '«Yuqori malakali kadrlar tayyorlash — bizning bosh vazifamiz»',
    audience: 'Talabalar mehnat huquqi kafedrasining o‘quv masalalari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      goal:
        'Ham milliy, ham xorijiy mehnat huquqi sohasini o‘rganish va rivojlantirish, me’yoriy hujjatlarni ko‘rib chiqish va ishlab chiqish, talabalarda normativ-huquqiy hujjatlarni tahlil qilish ko‘nikmalarini va mehnat huquqining asosiy institutlarini tushunishni shakllantirish. Kafedra ta’lim muassasalari, ilmiy markazlar, davlat organlari va muassasalari bilan mustahkam ilmiy va amaliy aloqalarni saqlaydi, Adliya vazirligi, Oliy sud, Bosh prokuratura akademiyasi, Bandlik va mehnat munosabatlari vazirligi, O‘zbekiston Kasaba uyushmalari federatsiyasi va boshqa tashkilotlar mutaxassislarini jalb qilgan holda muntazam mahorat darslarini o‘tkazadi.',
      tasks: [
        'kasbiy vazifalarni hal qila oladigan bakalavr va magistrlarni tayyorlashda kompetensiyaviy yondashuvni joriy etish;',
        'shtatni yuqori malakali kadrlar bilan to‘ldirish hisobiga ta’lim jarayoni sifatini oshirish;',
        'o‘quv jarayonining uslubiy ta’minotini ishlab chiqish va takomillashtirish, yangi ta’lim texnologiyalarini joriy etish, ish beruvchilar bilan uchrashuvlar va ekspertlarning mahorat darslarini o‘tkazish;',
        'qonun chiqaruvchi, ijro etuvchi va sud hokimiyati organlari, prokuratura, ish beruvchilar hamda ta’lim muassasalari bilan hamkorlikni rivojlantirish.',
      ],
      subjects:
        'Bakalavriat uchun — «Mehnat huquqi»; magistratura uchun — «Ijtimoiy ta’minot huquqi», «Qiyosiy mehnat huquqi», «Mehnat nizolarini hal qilish», «Mehnat shartnomalarini huquqiy tartibga solish».',
      capacity:
        'Kafedra professor-o‘qituvchilaridan 4 nafari ilmiy darajaga ega (2 fan doktori, 2 fan nomzodi), 7 nafari ilmiy tadqiqot olib bormoqda. Kafedra tomonidan 2 ta monografiya, OAK ro‘yxatidagi 33 ta maqola va Scopusda 3 ta maqola chop etilgan. Kafedrada 200 dan ortiq talabani birlashtirgan «Mehnat huquqi himoyachisi» ilmiy to‘garagi, shuningdek aholini mehnat munosabatlari va ijtimoiy ta’minot sohasidagi yangiliklardan xabardor qilish uchun «Mehnat huquqi» telegram kanali faoliyat yuritadi.',
    },
  },

  'b1-dep-business': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, 1-o‘quv binosi, 214-xona',
    motto: '«Qonun ustuvorligi — biznes kafolati»',
    audience:
      'Talabalar biznes huquqi kafedrasining o‘quv masalalari bo‘yicha murojaat qilishlari mumkin. O‘qituvchilarning qabul soatlari hafta davomida 214-xonada kafedra jadvaliga muvofiq o‘tkaziladi.',
    sections: {
      mission:
        'Universitetning yetakchi kafedralaridan biri bo‘lib, 8 ta yo‘nalish bo‘yicha ta’lim va ilmiy faoliyat olib boradi: «Biznes huquqi», «Korporativ huquq», «Raqobat huquqi», «Qimmatli qog‘ozlar huquqi», «Investitsiya huquqi», «Elektron tijorat huquqi», «Qiyosiy korporativ huquq», «Bankrotlik huquqi». Kafedra Adliya vazirligi, Oliy sud, Savdo-sanoat palatasi, Kapital bozorini rivojlantirish agentligi, Monopoliyaga qarshi kurashish qo‘mitasi, huquqni muhofaza qilish organlari va biznes tuzilmalari bilan yaqin hamkorlik qiladi.',
      tasks: [
        'yo‘nalish fanlari bo‘yicha tadqiqot va o‘qitish faoliyatini olib boramiz;',
        'tadbirkorlik qonunchiligi normalarini amaliyotda qo‘llash ko‘nikmalarini shakllantiramiz;',
        'talabalarda qiyosiy va mantiqiy fikrlash ko‘nikmalarini rivojlantiramiz;',
        'yoshlarga mustaqil ta’lim olish va bilimlarini amaliyotda qo‘llash imkoniyatini beramiz.',
      ],
      subjects:
        'Bakalavriatda 5 ta fan — Biznes huquqi, Investitsiya huquqi, Korporativ huquq, Raqobat huquqi, Qimmatli qog‘ozlar huquqi; magistraturada 3 ta fan — Elektron tijorat huquqi, Qiyosiy korporativ huquq, Bankrotlik huquqi.',
      capacity:
        'Kafedra davlat ilmiy-texnik dasturlari doirasida «Tadbirkorlik qonunchiligi hujjatlarini tizimlashtirishning nazariy va ilmiy-uslubiy asoslarini takomillashtirish: milliy va xorijiy tajriba» fundamental tadqiqotini olib bormoqda; uning asosida darslik, monografiya va 100 ga yaqin ilmiy maqola chop etilgan. 2018–2021-yillarda kafedra tomonidan 8 ta monografiya, 80 dan ortiq ilmiy maqola, Scopusda 7 ta maqola nashr etilgan; 3 ta xalqaro va 3 ta respublika ilmiy konferensiyasi o‘tkazilgan.',
      programs:
        'Kafedrada 3 ta ilmiy to‘garak faoliyat yuritadi — «Business law tutorial», «AchilovaLawSchool», «LAWgical business»; ular doirasida 98 nafar iqtidorli talaba tadbirkorlik, korporativ va raqobat huquqi masalalari bo‘yicha tadqiqot olib boradi.',
      faculty:
        'Kafedrada 22 nafar o‘qituvchi ishlaydi, ulardan 5 nafari doktorlik darajasiga ega, 6 nafari nufuzli xorijiy universitetlar bitiruvchisi. O‘quv jarayoniga advokatlar va amaliyotchi mutaxassislar jalb qilinadi. Kafedra o‘qituvchilari 8 ta darslik, 30 ta qo‘llanma, 8 ta monografiya va 12 ta o‘quv-uslubiy qo‘llanma muallifidir. Ishda 12 nafar mustaqil izlanuvchi va 2 nafar tayanch doktorant ham qatnashadi.',
    },
  },

  'b1-dep-ip': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, 1-o‘quv binosi, 118-xona',
    motto: '«Bilim — taraqqiyot kaliti»',
    audience:
      'Talabalar intellektual mulk huquqi kafedrasining o‘quv masalalari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      mission:
        'Universitetning yosh kafedralaridan biri bo‘lib, to‘rt yo‘nalish bo‘yicha ta’lim va ilmiy faoliyat olib boradi: «Intellektual mulk huquqi», «Mualliflik huquqi va turdosh huquqlar», «Patent huquqi», «Kiber huquq». Kafedra Jahon intellektual mulk tashkiloti, Oliy sud, Intellektual mulk agentligi, Adliya vazirligi huzuridagi Yuristlar malakasini oshirish markazi, advokatlik tuzilmalari, respublika oliy o‘quv yurtlari va ilmiy-tadqiqot muassasalari bilan hamkorlik qiladi.',
      tasks: [
        'yo‘nalish fanlarini, jumladan OAV huquqi va kiber huquqni o‘rganamiz, tadqiq etamiz va o‘qitamiz;',
        'qiyosiy, tahliliy va mantiqiy fikrlash ko‘nikmalarini rivojlantiramiz;',
        'intellektual mulk huquqi normalarini amaliyotda qo‘llash ko‘nikmalarini shakllantiramiz;',
        'yangi o‘quv adabiyotlarini yaratamiz va zamonaviy pedagogik texnologiyalar asosida mashg‘ulotlar tashkil etamiz.',
      ],
      subjects:
        'Bakalavriatda 2 ta fan — Intellektual mulk huquqi (asosiy), Kiber huquq (tanlov); magistraturada 7 ta fan — Xalqaro intellektual mulk huquqi, Patent huquqi, Intellektual mulk sohasidagi nizolarni hal qilish, Intellektual mulk sohasidagi shartnomalar tizimi, Kiber huquq, OAV huquqi (asosiy), Mualliflik huquqi va turdosh huquqlar (tanlov).',
      capacity:
        'Kafedrada 4 nafar falsafa doktori (PhD) ishlaydi. Ijtimoiy tarmoqlarni fuqarolik-huquqiy tartibga solish, mualliflik huquqida mulkiy huquqlarni jamoaviy boshqarish, telekommunikatsiya tarmoqlarida mualliflik huquqini muhofaza qilish, xalqaro arbitrajni raqamlashtirish, qonunchilik hujjatlari loyihalarining tartibga solish ta’sirini baholash, kontrafakt va parallel importga qarshi kurash mavzularida ilmiy-amaliy tadqiqotlar olib borilmoqda. 2019–2021-yillarda kafedra tomonidan 15 ta ilmiy ish (shu jumladan 12 ta monografiya va 3 ta ilmiy-ommabop risola), 60 dan ortiq ilmiy maqola, Scopusda 5 ta maqola chop etilgan; 2 ta xalqaro va 2 ta respublika ilmiy konferensiyasi o‘tkazilgan.',
      programs:
        'Kafedrada 2 ta ilmiy to‘garak faoliyat yuritadi: «Digital Intellectual Property Law (DIPL)» — AKT rivojlanishi sharoitida intellektual mulkning rolini o‘rganish, va «IP&WTO_scientific_circle» — Jahon savdo tashkilotiga a’zolik doirasida intellektual mulkning rolini o‘rganish.',
      faculty:
        'Kafedrada 4 nafar falsafa doktori va 2 nafar o‘qituvchi ishlaydi; mahorat darslarini o‘tkazish uchun advokatlar va amaliyotchi xodimlar jalb qilinadi. O‘qituvchilar 2 ta darslik, 12 ta monografiya va 2 ta o‘quv-uslubiy qo‘llanma muallifidir; o‘quv-uslubiy jarayonda 2 nafar mustaqil izlanuvchi ishtirok etadi.',
    },
  },

  'b1-dep-criminal': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 1-binosi, 106, 107, 113-xonalar',
    motto: '«Kuch — adolatda»',
    audience:
      'Talabalar jinoyat huquqi, kriminologiya va korrupsiyaga qarshi kurashish kafedrasining o‘quv masalalari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      goal:
        'Kafedraning ilmiy salohiyatini sifat jihatidan yangi darajaga ko‘tarish bilan birga, «ustoz-shogird» tizimi asosida jinoyat-huquqiy fanlar bo‘yicha e’tirof etilgan ilmiy maktablarni yaratish.',
      tasks: [
        'kredit-modul tizimiga muvofiq zamonaviy o‘qitish shakl va usullari asosida o‘quv jarayonini tashkil etish, yuqori malakali yuridik kadrlar tayyorlash;',
        'kafedraning ilmiy salohiyatini oshirish, yoshlarni ilmiy faoliyatga jalb qilish, ilmiy-tadqiqot va innovatsion faoliyatni muvofiqlashtirish;',
        'xalqaro hamkorlikni kengaytirish, xorijiy mutaxassislarni jalb qilish, talabalar va o‘qituvchilar akademik almashinuvini tashkil etish;',
        'ta’lim sifatini tahlil qilish va oshirish, tashkiliy-uslubiy tadbirlarni samarali tashkil etish.',
      ],
      subjects:
        'Bakalavriatda 5 ta fan — «Jinoyat huquqi», «Ma’muriy javobgarlik», «Jinoyat-ijroiya huquqi», «Kriminologiya», «Korrupsiyaga qarshi kurashish va komplayens-nazorat»; magistraturada 4 ta fan — «Korrupsiyaviy va iqtisodiy jinoyatlarni kvalifikatsiya qilish», «Jinoyat-huquqiy siyosat istiqbollari», «Jinoyat jazosi va uni tayinlash», «Jinoyatlarni kvalifikatsiya qilish muammolari».',
      capacity:
        'Ilmiy salohiyat — 64%. 2018–2021-yillarda kafedra tomonidan 8 ta darslik va o‘quv qo‘llanma, 19 ta monografiya, 100 dan ortiq ilmiy maqola chop etilgan, ulardan 15 tasi Web of Science va Scopus bazalarida; 200 dan ortiq mahorat darsi, 10 ta xalqaro va 43 ta respublika konferensiyasi hamda davra suhbati o‘tkazilgan.',
      programs:
        'Kafedrada ikkita ilmiy to‘garak faoliyat yuritadi: «Anti-corruption and compliance» — korrupsiyaviy huquqbuzarliklar profilaktikasi va komplayens-nazoratni joriy etish masalalarini o‘rganish (20 ishtirokchi, telegram kanalda 570 obunachi) va «Kriminolog va Men» — Yuridik klinika bilan birgalikda jinoyat huquqi, jinoyat-ijroiya huquqi va kriminologiyani chuqur o‘rganish (30 ishtirokchi, telegram kanalda 350 obunachi).',
      faculty:
        'Kafedrada 2 nafar professor, 3 nafar dotsent, 3 nafar katta o‘qituvchi va 15 nafar o‘qituvchi ishlaydi; sudyalar ishtirokida muntazam mahorat darslari o‘tkaziladi. O‘quv jarayoniga 26 nafar mustaqil izlanuvchi va 3 nafar doktorant jalb etilgan.',
    },
  },

  'b1-conference-hall': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, TDYU 1-binosi, 203-xona',
    audience:
      'Zalni yig‘ilish va tadbirlar uchun band qilish universitetning tegishli tarkibiy bo‘linmasi orqali kelishiladi.',
    sections: {
      about:
        'Xona universitet tarkibiy bo‘linmalarining yig‘ilishlari, kengashlari va rasmiy tadbirlarini o‘tkazish uchun ishlatiladi.',
    },
  },

  'b1-students-association': {
    audience:
      'TDYUning barcha talabalari — bakalavr, magistr, mustaqil izlanuvchi va doktorantlar — huquqlarni himoya qilish, o‘quv nizolari, talabalar tashabbuslari va loyihalari bo‘yicha murojaat qilishlari mumkin.',
    sections: {
      about:
        'Toshkent davlat yuridik universiteti Talabalar assotsiatsiyasi (TDYU Talabalar Assotsiatsiyasi) — talabalar o‘zini o‘zi boshqarishining oliy organi va bakalavriat, magistratura talabalarini, mustaqil izlanuvchilar hamda doktorantlarni birlashtiruvchi jamoat tashkiloti.',
      works:
        'Talabalar assotsiatsiyasi 2022-yil aprel oyida TDYU rektori Akbar Jo‘raboyevich Toshqulov bilan talabalar uchrashuvida bildirilgan taklif asosida tashkil etilgan. Talabalar o‘z fikrini ifodalaydigan va talabalar bilan rahbariyat o‘rtasida ko‘prik bo‘ladigan umumiy talabalar tashkilotini tuzish tashabbusini ilgari surdilar. Aprel davomida Talabalar assotsiatsiyasining Konstitutsiyasi ishlab chiqildi va guruh vakillarining umumiy yig‘ilishida qabul qilindi — shu tariqa Assotsiatsiya tashkil etilgan hisoblanadi. Uning birinchi prezidenti tashkilotning asoslarini yaratgan Shohjahon Shomurodov bo‘ldi. Keyingi ikki yil davomida Assotsiatsiyaga Mavludbek Ismoilov rahbarlik qildi. 2025-yilda esa Prezident etib Demirali Anvarov saylandi.',
      structure: [
        'Talabalar assotsiatsiyasi Prezidenti TDYUning barcha talabalari orasida umumiy ochiq ovoz berish yo‘li bilan saylanadi; so‘ngra u Assotsiatsiya Prezidiumini shakllantiradi:',
        'Ombudsman;',
        'Akademik departament rahbari;',
        'Ilmiy departament rahbari;',
        'Kasbiy rivojlanish departamenti rahbari;',
        'Tashqi aloqalar departamenti rahbari;',
        'Loyiha departamenti rahbari;',
        'Media departamenti rahbari;',
        'Talabalar fikrini o‘rganish markazi rahbari;',
        '«Lady lawyer» xotin-qizlar kengashi raisi.',
      ],
      tasks: [
        'TDYU talabalarining huquq va erkinliklarini yakka hamda jamoaviy himoya qilish;',
        'TDYUda adolatli o‘quv tizimini qurish uchun mexanizmlar yoki me’yoriy hujjatlarni o‘zgartirish bo‘yicha takliflar kiritish;',
        'talabalar manfaatlarini universitet rahbariyati oldida ifodalash, talabalar tashabbuslarini kelishish va ta’lim jarayonini yaxshilashda ishtirok etish;',
        'o‘zlashtirishi past talabalarga yordam berish, ularni ilmiy to‘garaklar, jamiyatlar va tadqiqotlarga jalb qilish;',
        'ijtimoiy ahamiyatga ega loyihalarni ishlab chiqish va amalga oshirish, madaniy hordiqni tashkil etish.',
      ],
      mission:
        'Talabalar assotsiatsiyasi barcha talabalarning va har bir talabaning alohida ovozidir. U TDYUda talabalar jamiyatining rivojlanishini o‘rganadi hamda uning to‘g‘ri yo‘nalishda rivojlanishi uchun zarur chora va takliflarni qabul qiladi. Buning uchun loyihalar, himoya mexanizmlari, raqamli platformalar va talabalar fikrini rahbariyatga yetkazish vositalaridan foydalanadi.',
    },
  },

  'b1-korean-center': {
    audience:
      'Bakalavriat, magistratura, doktorantura talabalari va hatto o‘qituvchilar ariza topshirishlari mumkin. Markaz rahbari — Park Anseo, g‘oyat mehribonligi bilan ajralib turadigan va talabalar orasida katta hurmatga sazovor o‘qituvchi.',
    sections: {
      about:
        'Markaz koreys tili va huquqiy fanlarni parallel o‘rganish uchun noyob imkoniyat taqdim etadi.',
      subjects: [
        'Koreys tili (turli darajalarda);',
        'Koreys huquqi;',
        'O‘zbekiston va Koreyaning qiyosiy konstitutsiyaviy huquqi (ilg‘or bosqichlarda);',
        'Muhim qoida: koreys tili kurslari tinglovchilari koreys huquqi kursiga ham qatnashishlari shart.',
      ],
      activity:
        'Moslashuvchan jadval: mashg‘ulotlar jadvali talabalar uchun maksimal qulaylik bo‘lishi uchun moslashtiriladi. To‘qnashuvlar yechimi: agar markazdagi mashg‘ulot vaqti universitet modullariga to‘g‘ri kelib qolsa, dars qoldirishlar (NB) rasmiy ravishda yopiladi.',
    },
  },

  /* ===================== ЗДАНИЕ №3 (добор к официальному тексту) ===================== */

  'b3-dep-civil': {
    sections: {
      tasks: [
        '«Fuqarolik huquqi», «Shartnoma huquqi», «Rim huquqi» va «Sport shartnomalari huquqi» fanlarini o‘rganish, tadqiq etish va o‘qitish;',
        'talabalarda qiyosiy, tahliliy va mantiqiy fikrlash ko‘nikmalarini rivojlantirish;',
        'ushbu sohadagi dolzarb muammolarni o‘rganish;',
        'soha munosabatlarini huquqiy tartibga solish istiqbollarini tadqiq etish;',
        'milliy fuqarolik huquqini rivojlantirish yondashuvlari, konsepsiyalari va nazariyalarini ishlab chiqish;',
        'fuqarolik huquqi masalalari bo‘yicha ilmiy tadqiqotlar olib borish va ilmiy ishlanmalar tayyorlash.',
      ],
      capacity:
        'Kafedra davlat ilmiy-texnik dasturlari doirasida «Investitsiya muhitining jozibadorligini oshirish va risklarni kamaytirish huquqiy mexanizmini yaratishning nazariy-uslubiy asoslarini takomillashtirish» fundamental tadqiqot loyihasini amalga oshirmoqda. O‘qituvchilar sport munosabatlarini huquqiy tartibga solish, EHM dasturlari va ma’lumotlar bazalari, sanoat namunalari, shartnomalarning haqiqiy emasligi va nikohdan ajralish munosabatlari mavzularida tadqiqot olib boradilar. 2019–2020-yillarda kafedra tomonidan 6 ta monografiya, 100 dan ortiq ilmiy maqola va Scopusda 10 ga yaqin maqola chop etilgan.',
      programs:
        'Grant loyihasi doirasida 35 ta ilmiy maqola chop etilgan, professor O. Oqyo‘lov rahbarligida 2 ta davra suhbati va ilmiy seminar o‘tkazilgan; monografiya, 2 ta darslik va atamalar lug‘ati nashr etilgan; Adliya vazirligiga O‘zbekiston Respublikasining «Investitsiya faoliyati to‘g‘risida»gi qonun loyihasini takomillashtirish bo‘yicha takliflar kiritilgan.',
      schools:
        'Kafedrada professorlar Imomov, Oqyo‘lov, Qaraxodjayeva, Borotov va Topildiyevning ilmiy maktablari, shuningdek fuqarolik huquqiga qiziquvchi talabalarni birlashtiruvchi «Sivilist» va «Benefit» (t.me/tdyubenefit) ilmiy to‘garaklari faoliyat yuritadi.',
      faculty:
        'Kafedrada 18 nafar professor va o‘qituvchi ishlaydi, ulardan 6 nafari yuridik fanlar doktori, 8 nafari yuridik fanlar nomzodi, 3 nafari mustaqil tadqiqotchi va 1 nafari doktorant. Kafedra o‘qituvchilari 10 ta darslik, 6 ta monografiya va 4 ta o‘quv qo‘llanma muallifidir.',
    },
  },

  'b3-irc': {
    sections: {
      capacity:
        'ARM talabalar, professor-o‘qituvchilar, universitet ilmiy xodimlari va keng kitobxonlar doirasiga ma’lumotnoma-bibliografik hamda axborot xizmatini ko‘rsatadi. Kitobxonlarni adabiyot haqida xabardor qilish va undan foydalanish uchun sharoit yaratish maqsadida ARMAT++ va IRBIS dasturlari asosida elektron katalog, universitetning rasmiy veb-saytida elektron kutubxona va rasmiy telegram kanal https://t.me/tsullibrary tashkil etilgan. Shuningdek jahon ilmiy-ta’lim ma’lumotlar bazalari — Westlaw, LexisNexis, Springer, Web of Science, Scopus, Polpred.com — elektron resurslaridan foydalanish yo‘lga qo‘yilgan. LexisNexis yuridik ma’lumotlar bazasi bilan shartnoma tuzish bo‘yicha muzokaralar olib borilmoqda. 2010-yildan beri ARM Xalqaro universitet kutubxonalari assotsiatsiyasi (Dyusseldorf, Germaniya) a’zosi hisoblanadi.',
    },
  },

  /* ===================== ЗДАНИЕ №4 ===================== */

  'b4-faculty-business': {
    address: 'Toshkent sh., Mustaqillik shoh ko‘chasi, 59, TDYU 4-o‘quv binosi, 3-qavat',
    audience:
      'Bakalavriat dasturlari, qabul shartlari, kontrakt to‘lovi va ta’lim dasturlari yo‘nalishlari bilan qiziquvchi abituriyentlar va ularning ota-onalari murojaat qilishlari mumkin. Bundan tashqari, talabalarning o‘zlari dekanatga turli o‘quv masalalari bo‘yicha muntazam murojaat qiladilar: dars jadvalini tuzish, modullar mazmuni, imtihonlarni qayta topshirish, akademik mobillik va o‘quv jarayonining boshqa jihatlari.',
    sections: {
      about:
        'Biznes huquqi va sud himoyasi — fuqarolik huquqi tarmog‘i doirasidagi tayyorgarlik yo‘nalishi bo‘lib, o‘zaro bog‘liq ikki sohani birlashtiradi: tadbirkorlik faoliyatini huquqiy tartibga solish (biznes huquqi) va tomonlar manfaatlarini sudda himoya qilish amaliyoti (sud himoyasi). Huquq tarmog‘i sifatida fuqarolik huquqi teng huquqli sub’ektlar o‘rtasidagi mulkiy va ular bilan bog‘liq shaxsiy nomulkiy munosabatlarni tartibga soladi, ushbu yo‘nalish esa uning tijorat munosabatlari va tadbirkorlik faoliyati jarayonida yuzaga keladigan nizolarni hal qilish sohasidagi qo‘llanilishini aniqlashtiradi. Fakultet talabalari turli sohalardagi kompaniyalarda — banklar va IT-kompaniyalardan tortib ishlab chiqarish korxonalari hamda xorijiy kapital ishtirokidagi qo‘shma korxonalargacha — yuriskonsult va korporativ yurist bo‘lib ishlashlari, shartnoma ishlari, bitimlarni huquqiy qo‘llab-quvvatlash va komplayens-nazorat bilan shug‘ullanishlari mumkin. Ular amaliyot o‘tab, advokat maqomini olgan holda advokaturada karyera qurishlari mumkin — bu fuqarolik yoki iqtisodiy ishlarni yuritish, jumladan biznes manfaatlarini sudda ifodalash imkonini beradi. Bitiruvchilar sud tizimida ham ishlashlari mumkin: sudya yordamchisi lavozimidan boshlab sudya darajasigacha, shu jumladan tadbirkorlar o‘rtasidagi nizolarni ko‘radigan iqtisodiy sudlarda yoki fuqarolik sudlarida. Bundan tashqari, ular uchun davlat va huquqni muhofaza qilish organlari — prokuratura, Adliya vazirligi, soliq va monopoliyaga qarshi tuzilmalar, shuningdek tijorat bitimlarini huquqiy qo‘llab-quvvatlash ko‘nikmalari talab qilinadigan notariat yo‘llari ochiq. Alohida istiqbolli yo‘nalish — mediatsiya, ya’ni O‘zbekistonda faol rivojlanayotgan sudgacha nizolarni hal qilish, shuningdek amaliy yuridik ish bilan birga olib borish mumkin bo‘lgan oliy o‘quv yurtlaridagi pedagogik faoliyat.',
      goal:
        'Talabalarning fuqarolik huquqi va uning boshqa ixtisoslashgan yo‘nalishlari sohasida zarur bilim va ko‘nikmalarni olishini ta’minlash.',
      tasks: [
        'zamonaviy xalqaro standartlarga javob beradigan kadrlar tayyorlash, professor-o‘qituvchilar tarkibini yuksak kasbiy-pedagogik mahoratga, huquqiy va siyosiy madaniyatga, amaliy tajribaga ega mutaxassislar bilan mustahkamlash;',
        'zamonaviy o‘qitish shakl va usullari, innovatsion pedagogik hamda axborot texnologiyalari asosida o‘quv jarayonini tashkil etish;',
        'me’yoriy ijodkorlik jarayonini yanada rivojlantirish maqsadida ushbu sohada maxsus bilim va ko‘nikmalarga ega mutaxassislarni tayyorlash tizimini rivojlantirish;',
        'fakultetning ilmiy salohiyatini kuchaytirish, yoshlarni ilmiy faoliyatga keng jalb qilish, ilmiy-tadqiqot va innovatsion faoliyatni muvofiqlashtirish, tadqiqot loyihalariga jalb etish hamda ta’lim va fan aloqasini ta’minlash;',
        'xorijiy va milliy reyting ko‘rsatkichlarini hisobga olgan holda ilmiy-tadqiqot ishlarini tashkil etish.',
      ],
      structure: [
        'Fuqarolik huquqi kafedrasi;',
        'Korporativ huquq va tadbirkorlik huquqi (biznes huquqi) kafedrasi;',
        'Fuqarolik protsessual huquqi va iqtisodiy huquq kafedrasi;',
        'Intellektual mulk huquqi kafedrasi;',
        'Mehnat huquqi kafedrasi.',
      ],
      location:
        'Fakultet dekanati TDYU 4-binosining 2–3 va 6-qavatlarida joylashgan. Tyutorlar xonalari 2 va 6-qavatlarda.',
    },
  },

  'b4-dep-civil': {
    address:
      'Toshkent sh., Mustaqillik shoh ko‘chasi, 59, TDYU 4-binosi, 3–4-qavat; hamda Sayilgoh ko‘chasi, 35/2, 1-bino, 1-qavat',
    sections: {
      about:
        'Fuqarolik huquqi kafedrasi universitetning bir necha binosida joylashgan. Kafedraning to‘liq tavsifi, o‘qituvchilar tarkibi va konsultatsiya jadvali — 3-binodagi kafedra kartochkasida.',
    },
  },

  'b4-dep-entrepreneurial': {
    address:
      'Toshkent sh., Mustaqillik shoh ko‘chasi, 59, TDYU 4-binosi, 4 va 6-qavat; hamda Sayilgoh ko‘chasi, 35/2, 1-bino, 2-qavat, 214-xona',
    sections: {
      about:
        'Kafedra mashg‘ulotlarni 4-binoda (4 va 6-qavatlar) hamda 1-binoda (214-xona) olib boradi. Yo‘nalishlar, fanlar va tarkib haqidagi batafsil ma’lumot — 1-binodagi biznes huquqi kafedrasi kartochkasida.',
    },
  },

  'b4-room-401': {
    address: 'Toshkent sh., Mustaqillik shoh ko‘chasi, 59, TDYU 4-binosi, 4-qavat',
    sections: {
      about:
        '401-auditoriya TDYU 4-binosining 4-qavatida joylashgan bo‘lib, yakuniy nazorat (kuzgi va yozgi imtihon sessiyalari) o‘tkazish uchun imtihon auditoriyasiga aylantiriladi. Qolgan vaqtda u yerda fakultet talabalari uchun o‘quv mashg‘ulotlari o‘tkaziladi.',
    },
  },

  'b4-room-601': {
    address: 'Toshkent sh., Mustaqillik shoh ko‘chasi, 59, TDYU 4-binosi, 6-qavat',
    sections: {
      about:
        '601-auditoriya TDYU 4-binosining 6-qavatida joylashgan bo‘lib, yakuniy nazorat (kuzgi va yozgi imtihon sessiyalari) o‘tkazish uchun imtihon auditoriyasiga aylantiriladi. Qolgan vaqtda u yerda fakultet talabalari uchun o‘quv mashg‘ulotlari o‘tkaziladi.',
    },
  },

  'b4-coworking': {
    address:
      'Toshkent sh., Mustaqillik shoh ko‘chasi, 59 (TDYU 4-binosining asosiy kirishidan sal o‘ngda)',
    sections: {
      about:
        'Co-working zone — Toshkent davlat yuridik universiteti huzuridagi kovorking markazi bo‘lib, «University 3.0» modeli doirasida tashkil etilgan. G‘oya shundan iboratki, universitet faqat ta’lim vazifasi bilan cheklanmasdan, talabalar va xodimlarning tadbirkorlik hamda texnologik tashabbuslarini rivojlantirish maydoniga aylanadi va zamonaviy texnologiyalar orqali yuridik sohaning transformatsiyasiga ko‘maklashadi.',
      projects:
        'Kovorking bazasida tijoratlashtirishga tayyor loyihalar (Huquq maktabi va boshqalar) ishlab chiqilgan va taqdim etilgan: oliy o‘quv yurtlarida ilmiy tadqiqotlarni monitoring qilish va boshqarish tizimi, ilmiy natijalar ma’lumotlar bazasi, yuristlarni onlayn yollash tizimi va yuridik soha vakillari uchun ijtimoiy tarmoq. Shuningdek kovorkingda biznes-maktab faoliyat yuritadi, u yerda treninglar o‘tkaziladi — xususan, IT-park mutaxassislari allaqachon o‘quv mashg‘ulotlari olib borgan.',
    },
  },

  /* ===================== ЗДАНИЕ №2 ===================== */

  'b2-faculty-public': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 2-qavat, 123-xona',
    motto: '«Adolat — qonun ustuvorligida»',
    audience:
      'Bakalavriat dasturlari, qabul shartlari, kontrakt to‘lovi va ta’lim dasturlari yo‘nalishlari bilan qiziquvchi abituriyentlar va ularning ota-onalari murojaat qilishlari mumkin. Bundan tashqari, talabalarning o‘zlari dekanatga turli o‘quv masalalari bo‘yicha muntazam murojaat qiladilar: dars jadvalini tuzish, modullar mazmuni, imtihonlarni qayta topshirish, akademik mobillik va o‘quv jarayonining boshqa jihatlari.',
    sections: {
      about:
        'Ommaviy huquq — jamoat manfaatlarini ta’minlovchi munosabatlarni tartibga soluvchi huquq tarmoqlari majmuidir. Shu bois ushbu fakultetning tashkil etilishi ommaviy huquqdagi zamonaviy tendensiyalarni, konstitutsiyaviy va ma’muriy munosabatlarni hamda me’yoriy ijodkorlik sohasini joriy etishga alohida e’tibor qaratishni nazarda tutadi. Ommaviy huquq fakultetida tahsil olayotgan talabalar O‘zbekiston Respublikasi Oliy Majlisida, ijro etuvchi hokimiyat organlarida, shu jumladan adliya organlari va prokuraturada, xususiy sektorda hamda fuqarolik jamiyati institutlarida kelgusi faoliyat uchun zarur zamonaviy bilim va ko‘nikmalarni egallash imkoniyatiga ega.',
      goal:
        'Talabalarning me’yoriy ijodkorlik va huquqni qo‘llash sohasida zarur bilim va ko‘nikmalarni olishini ta’minlash.',
      tasks:
        'Zamonaviy xalqaro standartlarga javob beradigan kadrlar tayyorlash, professor-o‘qituvchilar tarkibini yuksak kasbiy-pedagogik mahoratga, huquqiy va siyosiy madaniyatga, amaliy tajribaga ega mutaxassislar bilan mustahkamlash; zamonaviy o‘qitish shakl va usullari, innovatsion pedagogik hamda axborot texnologiyalari asosida o‘quv jarayonini tashkil etish; me’yoriy ijodkorlik jarayonini yanada rivojlantirish maqsadida ushbu sohada maxsus bilim va ko‘nikmalarga ega mutaxassislarni tayyorlash tizimini rivojlantirish; fakultetning ilmiy salohiyatini kuchaytirish, yoshlarni ilmiy faoliyatga keng jalb qilish, ilmiy-tadqiqot va innovatsion faoliyatni muvofiqlashtirish, tadqiqot loyihalariga jalb etish hamda ta’lim va fan aloqasini ta’minlash; xorijiy va milliy reyting ko‘rsatkichlarini hisobga olgan holda ilmiy-tadqiqot ishlarini tashkil etish.',
      structure: [
        'Davlat va huquq nazariyasi kafedrasi;',
        'Konstitutsiyaviy huquq kafedrasi;',
        'Ma’muriy va moliya huquqi kafedrasi;',
        'Ekologiya huquqi kafedrasi;',
        'Umumta’lim fanlari va madaniyat kafedrasi;',
        'O‘zbek tili va adabiyoti kafedrasi.',
      ],
      activity:
        'Kafedralarda faoliyat yuritayotgan professor va o‘qituvchilar ilg‘or pedagogik texnologiyalardan foydalangan holda talabalarni interaktiv tarzda o‘qitadilar.',
    },
  },

  'b2-faculty-criminal': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 217-xona',
    motto: 'Sudya — so‘zlovchi qonun, qonun esa — jim sudya',
    audience:
      'Bakalavriat dasturlari, qabul shartlari, kontrakt to‘lovi va ta’lim dasturlari yo‘nalishlari bilan qiziquvchi abituriyentlar va ularning ota-onalari murojaat qilishlari mumkin. Bundan tashqari, talabalarning o‘zlari dekanatga turli o‘quv masalalari bo‘yicha muntazam murojaat qiladilar: dars jadvalini tuzish, modullar mazmuni, imtihonlarni qayta topshirish, akademik mobillik va o‘quv jarayonining boshqa jihatlari.',
    sections: {
      about:
        'Toshkent davlat yuridik universitetining Jinoiy odil sudlov fakulteti O‘zbekiston Respublikasi Prezidentining 2020-yil 29-apreldagi PF-5987-son «O‘zbekiston Respublikasida yuridik ta’lim va fanni tubdan takomillashtirish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida»gi farmoniga muvofiq tashkil etilgan.',
      goal:
        'Jinoiy odil sudlovni amalga oshiradigan va qonun ustuvorligini ta’minlaydigan professional yuridik kadrlarni tayyorlash.',
      principle: '«Teng bilim, teng imkoniyat va maqsadga intilish».',
      tasks: [
        'zamonaviy pedagogik, axborot-kommunikatsiya va innovatsion ta’lim texnologiyalari shakl va usullari asosida o‘quv jarayonini tashkil etish, fuqarolik jamiyatining eng yuksak talablariga va zamonaviy xalqaro standartlarga javob beradigan yuqori malakali yuridik kadrlar tayyorlash;',
        'yoshlarni ilmiy-tadqiqot ishlariga keng jalb qilish, kafedralarning ilmiy salohiyatini kuchaytirish;',
        'zamonaviy jahon standartlariga mos ilmiy-pedagogik kadrlar tayyorlash, professor-o‘qituvchilar tarkibini yuksak kasbiy-pedagogik mahoratga, huquqiy va siyosiy madaniyatga, amaliy tajribaga ega mutaxassislar bilan mustahkamlash;',
        'xorijiy va milliy reyting ko‘rsatkichlarini hisobga olgan holda o‘quv-tadqiqot ishlarini tashkil etish;',
        'talabalarni o‘qitish va ularni kasbga yo‘naltirish uchun sud, huquqni muhofaza qilish organlari, huquqni himoya qiluvchi va boshqa tashkilotlar bilan muntazam aloqalarni yo‘lga qo‘yish.',
      ],
      structure:
        'Fakultetda dekan, o‘quv ishlari bo‘yicha dekan o‘rinbosari, yoshlar masalalari bo‘yicha dekan o‘rinbosari, xalqaro hamkorlik va ilmiy-innovatsion ishlar bo‘yicha dekan o‘rinbosari, metodist, o‘quv ishlari bo‘yicha dispetcher va ish yurituvchilar faoliyat ko‘rsatadi. Fakultet tarkibiga 4 ta kafedra kiradi: Jinoyat huquqi, kriminologiya va korrupsiyaga qarshi kurashish kafedrasi; Jinoyat-protsessual huquqi kafedrasi; Sud, huquqni muhofaza qiluvchi organlar va advokatura kafedrasi; Kriminalistika va sud ekspertizasi kafedrasi.',
    },
  },

  'b2-dep-courts': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35-uy, TDYU 2-o‘quv binosi, 2-qavat, 208-xona',
    motto: 'Haqiqat yo‘li',
    audience:
      'Talabalar kafedra faoliyati doirasidagi turli masalalar, shuningdek oraliq nazorat ishlari natijalari bo‘yicha apellyatsiya berish masalalarida murojaat qilishlari mumkin.',
    sections: {
      goal:
        'Sud, huquqni muhofaza qiluvchi organlar va advokatura kafedrasi universitetning yetakchi kafedralaridan biri bo‘lib, quyidagi yo‘nalishlarda o‘quv va ilmiy-tadqiqot ishlarini olib boradi: sud hokimiyati, prokuror nazorati, huquqni muhofaza qilish faoliyatini tashkil etish va advokatura. Biz mamlakatimizdagi va butun dunyodagi huquqni muhofaza qilish organlarini har tomonlama o‘rganish, ushbu sohadagi xalqaro tajriba bilan tanishish, shuningdek soha bo‘yicha turli me’yoriy hujjatlarni tadqiq etish va ishlab chiqishni maqsad qilganmiz. Hozirda ushbu yo‘nalishda Adliya vazirligi, Oliy sud, Advokatlar palatasi va amaliyotchi advokatlar, shuningdek huquqni muhofaza qilish organlari bilan hamkorlik qilamiz.',
      subjects: [
        'Bakalavriat: «Sud hokimiyati», «Advokatura», «Tiklovchi odil sudlov» (Restorative Justice), «Prokurorlik faoliyati», «Ijro ishi yuritish»;',
        'Magistratura: «Advokatura va advokatlik faoliyati».',
      ],
      capacity:
        'Kafedra Toshkent davlat yuridik universiteti rektorining 2020-yil 1-iyundagi 08-100-son «Toshkent davlat yuridik universiteti faoliyatini yanada takomillashtirish chora-tadbirlari to‘g‘risida»gi buyrug‘i bilan tashkil etilgan. 2023-yil iyun — 2024-yil yanvar davrida kafedra tomonidan 2 ta monografiya, 10 ta ilmiy maqola va Scopus bazasiga kiruvchi ilmiy jurnallarda 1 ta maqola chop etilgan. Bundan tashqari 1 ta xalqaro konferensiya va ilmiy seminar, 1 ta respublika ilmiy konferensiyasi va davra suhbati o‘tkazilgan. Kafedra qoshida «Legal Protector» to‘garagi va «Yosh prokurorlar» klubi faoliyat yuritadi; ular doirasida muntazam ilmiy tadbirlar o‘tkaziladi.',
    },
  },

  'b2-dep-general': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 2-qavat, 206-auditoriya',
    motto: 'Bilim — taraqqiyot garovi',
    audience:
      'Talabalar kafedra faoliyati doirasidagi turli masalalar, shuningdek oraliq nazorat ishlari natijalari bo‘yicha apellyatsiya berish masalalarida murojaat qilishlari mumkin.',
    sections: {
      goal:
        'Umumta’lim fanlari va madaniyat kafedrasi universitetning yetakchi kafedralaridan biri bo‘lib, 3 ta yo‘nalish bo‘yicha o‘quv va ilmiy-tadqiqot ishlarini olib boradi: «Ijtimoiy-gumanitar fanlar», «Iqtisodiyot va boshqaruv asoslari» hamda «Huquqiy axborot texnologiyalari». Biz mamlakatimiz va jahondagi ijtimoiy-siyosiy, iqtisodiy va zamonaviy huquqiy axborot texnologiyalari bilan bog‘liq ilmiy sohalar va jarayonlarni to‘liq o‘rganishga, ushbu sohalardagi xalqaro tajriba bilan tanishishga va turli me’yoriy hujjatlarni tadqiq etishga intilamiz. Hozirda Adliya vazirligi, Nodavlat notijorat tashkilotlari milliy assotsiatsiyasi, siyosiy partiyalar va respublika oliy o‘quv yurtlari bilan hamkorlik qilamiz.',
      subjects: [
        'Bakalavriat (7 modul): Huquqiy ko‘nikmalar va metodologiya (Legal Skills and Methodology); Yuristlar uchun iqtisodiyot asoslari (Economics for Lawyers); Mikroiqtisodiyot va makroiqtisodiyot; Huquqiy axborot texnologiyalari (Legal tech); Falsafa; Huquqiy loyihalarni boshqarish (Legal Project Management); Huquq falsafasi (Legal philosophy); Tadqiqot metodologiyasi va ko‘nikmalari; Sotsiologiya; Huquq va ijtimoiy fanlar;',
        'Magistratura (4 modul): Ilmiy (huquqiy) tadqiqotlar metodologiyasi (Advanced Legal Research Methods); Yuristlar uchun strategik qarorlar qabul qilish (Strategic Decision Making for Lawyers); Korporativ boshqaruv (Corporate Governance); Ijtimoiy tarmoqlarda raqamli huquqlar va etika.',
      ],
      capacity:
        'So‘nggi uch yilda kafedra tomonidan 7 ta monografiya, 10 ta darslik, 20 dan ortiq yuqori impakt-faktorli jurnalda ilmiy maqolalar va Scopus jurnallarida 16 ta maqola chop etilgan. Shuningdek 5 ta xalqaro konferensiya, 7 ta respublika ilmiy konferensiyasi va davra suhbati o‘tkazilgan.',
      programs:
        'Kafedra qoshida «Legal philosophy», «Amaliy iqtisodiyot» va «Tafakkur» talabalar ilmiy to‘garaklari faoliyat yuritadi. Ushbu to‘garaklarda qatnashib, universitet talabalari huquq falsafasi, siyosat va iqtisodiyot sohasidagi bilim va ko‘nikmalarini mustahkamlaydilar.',
    },
  },

  'b2-reading-room': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 2-qavat, 207-xona',
    sections: {
      about:
        'Buritosh Mustafayevich Mustafayev 1949-yil 2-yanvarda Samarqand viloyatining Xatirchi tumanida tug‘ilgan. 1965–1966-yillarda Toshkent ekskavator zavodida frezachi bo‘lib ishlagan. 1971-yilda Toshkent davlat universitetining yuridik fakultetini tamomlagan. Faoliyatini Samarqand viloyati prokuraturasida boshlagan (tergovchi, tuman prokurori, viloyat prokurori o‘rinbosari).',
      works: [
        '1976–1978 — Oqtosh shahar sudi sudyasi;',
        '1985–1989 — Andijon viloyati prokurori;',
        '1989–1990 — O‘zbekiston Bosh prokurori o‘rinbosari;',
        '1990–1998 — O‘zbekiston Respublikasi Bosh prokurori;',
        '1998–2000 — Prezidentning huquqni muhofaza qilish organlari bo‘yicha Davlat maslahatchisi o‘rinbosari;',
        '2000–2002 — adliya vaziri o‘rinbosari;',
        '2002–2004 — Konstitutsiyaviy sud raisi;',
        '2004–2005 — Markaziy saylov komissiyasi raisi;',
        '2005–2006 — O‘zbekiston adliya vaziri;',
        '2006–2014 — O‘zbekiston Oliy sudi raisi;',
        '2014-yildan vafotigacha — Konstitutsiyaviy sud raisi o‘rinbosari.',
      ],
      stats:
        'Mukofot va unvonlari: O‘zbekiston Respublikasi Prezidentining 1992-yil 27-maydagi farmoniga muvofiq B. Mustafoyev prokuratura organlaridagi ko‘p yillik va samarali faoliyati, qonun ustuvorligini ta’minlashga va huquqiy targ‘ibotga qo‘shgan munosib hissasi uchun «O‘zbekiston Respublikasida xizmat ko‘rsatgan yurist» faxriy unvoni bilan taqdirlangan; 1995-yil 30-avgustdagi farmon bilan huquq-tartibotni ta’minlashdagi katta xizmatlari uchun II darajali «Shon-sharaf» ordeni bilan, 2006-yil 29-avgustdagi farmon bilan «Mehnat shuhrati» ordeni bilan taqdirlangan. 68 yoshida yurak kasalligi bilan shifoxonaga yotqizilganidan so‘ng vafot etgan.',
      education:
        'Toshkent davlat yuridik universitetida 2022-yil 7-oktyabrda Buritosh Mustafoyev nomidagi o‘quv xonasining ochilish marosimi bo‘lib o‘tdi. TDYU sud, huquqni muhofaza qiluvchi organlar va advokatura kafedrasi tashabbusi bilan tashkil etilgan tadbirda O‘zbekiston Respublikasi Sudyalar assotsiatsiyasi, Prokuratura faxriylarini ijtimoiy qo‘llab-quvvatlash jamoat markazi rahbariyati va faxriylari, universitet Faxriylar kengashi a’zolari, o‘qituvchilar, talabalar, Buritosh Mustafoyevning oila a’zolari va shogirdlari ishtirok etdi. Hozirda xona talabalar tomonidan amaliy mashg‘ulotlar, seminarlar o‘tkazish va sud ishlarini chuqur o‘rganish uchun ishlatiladi.',
    },
  },

  'b2-vice-rector': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 2-qavat, 202-xona',
    audience:
      'Talabalar va magistrantlar (ayniqsa almashinuv va amaliyotlarga qiziquvchilar); o‘qituvchilar va ilmiy xodimlar (xalqaro loyihalar uchun); bitiruvchilar va amaliyotchi yuristlar (malaka oshirish dasturlari bo‘yicha); boshqa tashkilot va oliy o‘quv yurtlari vakillari (hamkorlik uchun); xorijiy hamkorlar. Shuni aniqlashtirish joizki, ko‘p masalalarni tegishli boshqarmada (Xalqaro hamkorlik boshqarmasi) hal qilish mumkin, shundan keyingina prorektorga murojaat qilinadi.',
    sections: {
      about:
        '2025-yil 14-fevraldan — Toshkent davlat yuridik universitetining xalqaro aloqalar va uzluksiz ta’lim bo‘yicha prorektori. A. Yoqubov 1985-yilda Qashqadaryo viloyatining Qarshi shahrida tug‘ilgan. Ma’lumoti oliy. 2007-yilda Samarqand davlat universiteti bakalavriaturasini, 2011-yilda Toshkent davlat yuridik instituti magistraturasini tamomlagan. Yuridik fanlar doktori (DSc), dotsent. 3-darajali adliya maslahatchisi, amaliyotchi yurist, arbitr, mediator. 2022–2025-yillarda Qarshi xalqaro universiteti rektori lavozimida samarali faoliyat yuritgan. «O‘zbekiston Respublikasi mustaqilligiga 30 yil» va «O‘zbekiston Konstitutsiyasiga 30 yil» esdalik medallari bilan taqdirlangan.',
      tasks: [
        'xalqaro dasturlar, grantlar va loyihalarda ishtirok etish;',
        'akademik mobillik (talabalar almashinuvi, xorijdagi amaliyotlar);',
        'xorijiy oliy o‘quv yurtlari va tashkilotlari bilan hamkorlik;',
        'xorijiy o‘qituvchilar va ekspertlarni taklif qilish yoki xodimlar/talabalarning chet elga chiqishi;',
        'xalqaro konferensiyalar, seminarlar, forumlar;',
        'xorijiy diplom va malakalarni tan olish masalalari;',
        'xalqaro nashrlar va qo‘shma ilmiy tadqiqotlar;',
        'xorijiy talabalar bilan ishlash (qabul, moslashuv, viza masalalari);',
        'universitetni xalqarolashtirish bo‘yicha strategik tashabbuslar.',
      ],
    },
  },

  'b2-publishing': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 1-qavat, 115-xona',
    audience:
      'Talabalar ham, o‘qituvchilar ham murojaat qilishlari mumkin. Jurnallarga maqolalar platforma orqali qabul qilinadi. Kelib tushgan maqolalar har bir jurnalning elektron pochtasi orqali ko‘rib chiqiladi: maqolaning jurnal talablariga muvofiqligi, plagiat darajasi va ekspertiza natijalari tekshiriladi, so‘ngra mualliflarga javob xatlari yuboriladi.',
    sections: {
      about:
        'Toshkent davlat yuridik universitetining tahririy-nashriyot bo‘limi O‘zbekiston Respublikasi Prezidentining 2020-yil 29-apreldagi «O‘zbekiston Respublikasida yuridik ta’lim va fanni tubdan takomillashtirish bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida»gi farmoni asosida tashkil etilgan. Bo‘lim universitetning tarkibiy bo‘linmasi bo‘lib, o‘qituvchilar va xodimlar, doktorantlar, mustaqil izlanuvchilar, magistrlar, talabalar va boshqa shaxslar tomonidan tayyorlangan ilmiy, ilmiy-uslubiy, ilmiy-ommabop, o‘quv, o‘quv-uslubiy va boshqa materiallarni hamda universitetning davriy nashrlarini chop etishga tayyorlash va nashr etish bilan shug‘ullanadi.',
      structure:
        'Tahririy-nashriyot bo‘limi tahririyat, davriy nashrlar sektori va bosmaxona sektoridan iborat. Davriy nashrlar sektorida universitet ta’sis etgan ilmiy jurnallar chop etishga tayyorlanadi: «Yuridik fanlar axborotnomasi — Review of Law Sciences», «Yurisprudensiya», «Kriminologiya va jinoiy odil sudlov», «O‘zbekiston qonunchiligi tahlili» va «TSUL Legal Report».',
    },
  },

  'b2-international': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 2-qavat, 210-xona',
    audience:
      'Akademik mobillik (exchange) dasturi bo‘yicha xorijda tahsil olish mezonlariga javob beradigan talabalar ham, magistrantlar ham murojaat qilishlari mumkin.',
    sections: {
      about:
        'Xalqaro hamkorlik departamenti Toshkent davlat yuridik universitetining eng dinamik va ilg‘or bo‘linmalaridan biridir. Bo‘limning asosiy vazifasi — jahonning yetakchi ta’lim muassasalari, tadqiqot markazlari va tashkilotlari bilan mustahkam hamkorlikni rivojlantirish orqali ta’lim darajasini oshirish. Bo‘lim talabalar almashinuvi dasturlariga ko‘maklashishga intiladi va shu orqali akademik tajribani boyitib, dunyoqarashni kengaytiradi.',
      structure: ['Xalqaro aloqalar bo‘limi;', 'Akademik mobillik (exchange) bo‘linmasi.'],
      programs:
        'Markaziy Osiyo forumi, Erasmus+, UNICEN va Fulbright kabi joriy yo‘nalishlardan tashqari, TDYU o‘z yutuqlari bilan faxrlanadi. Xususan, universitet 2019–2024-yillar davomida xalqaro yuridik musobaqalarda g‘alaba qozonib, talabalarning yuksak iste’dodi va akademik yutuqlarini namoyish etdi.',
    },
  },

  'b2-moot-court': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 2-qavat, 204-xona',
    audience:
      'Huquqshunoslik yo‘nalishidagi TDYU va boshqa universitetlarning mutlaqo barcha talabalari ishtirok etishi mumkin. Bo‘sh vaqtda xonadan universitetning ichki qoidalariga rioya qilgan holda TDYUning barcha talabalari foydalanishi mumkin. Ishtirok tafsilotlarini universitetning rasmiy telegram kanalidan bilib olish mumkin.',
    sections: {
      about:
        'O‘quv sud majlislari zali (Moot Court) — haqiqiy sudning simulyatsiyasi. Talabalar faraziy keys oladilar, jamoalarga bo‘linadilar (da’vogar, javobgar, prokuror, himoyachi) va yuristlar, sudyalar yoki o‘qituvchilar oldida haqiqiy sud majlisi jarayonini namoyish etadilar.',
    },
  },

  'b2-continuing-education': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 2-qavat, 211A-xona',
    audience:
      'TDYU huzuridagi akademik litseylar o‘qituvchilari va xodimlari — pedagogik mahoratni oshirish, uslubiy qo‘llab-quvvatlash va innovatsion rivojlanish uchun. Yuridik kollej va texnikumlar o‘qituvchilari va talabalari — ta’limiy va uslubiy yordam, ta’lim sifati monitoringi uchun. Homiylikka olingan maktablar o‘qituvchilari va xodimlari — tadbirlar, mahorat darslari tashkil etish va o‘quvchilar bilan ishlash uchun. TDYUning o‘z talabalari va xodimlari — uzluksiz ta’lim, qayta tayyorlash, amaliyot va tadbirlarda ishtirok etish masalalari bo‘yicha. Tashqi mutaxassislar va tashkilotlar — qo‘shma dasturlar, yuridik sohada malaka oshirish va tadbirlarni muvofiqlashtirish uchun.',
    sections: {
      about:
        'Toshkent davlat yuridik universiteti rektorining 2025-yil 31-iyuldagi 164-son buyrug‘iga muvofiq Uzluksiz ta’lim boshqarmasi tugatilib, uning negizida Uzluksiz ta’lim va tadbirlarni muvofiqlashtirish boshqarmasi tashkil etilgan; uning tarkibiga Tadbirlarni muvofiqlashtirish va Uzluksiz ta’lim bo‘limlari kiradi.',
      tasks: [
        'akademik litseylarda o‘quv jarayoni sifati va samaradorligini oshirish, ularning innovatsion rivojlanishi va takomillashuvi, shuningdek o‘qituvchilarning pedagogik mahoratini oshirish uchun TDYUning o‘quv va ilmiy salohiyatidan, moddiy-texnik bazasidan, ta’lim va axborot resurslaridan foydalanish;',
        'akademik litsey o‘quvchilarining bilim va salohiyatini oshirish, iqtidorli o‘quvchilarni qo‘llab-quvvatlash va ularni maqsadli ta’limga yo‘naltirish bo‘yicha faoliyatni tashkil etishga ko‘maklashish;',
        'yuridik texnikumlarda yuridik kadrlar tayyorlash bo‘yicha o‘quv-uslubiy ishga ko‘maklashish, texnikum talabalarining bilimi, huquqiy ongi va madaniyatini oshirish uchun TDYU o‘qituvchilarini jalb qilish, ta’lim sifatini doimiy monitoring qilish, natijalarini tahlil etish, texnikumlarga amaliy va axborot-resurs yordami ko‘rsatish;',
        'huquqni qo‘llash sohasida nazariy tayyorgarlikning amaliy faoliyat bilan uzviy bog‘liqligini ta’minlashga qaratilgan zamonaviy shakl va usullar hamda axborot-kommunikatsiya texnologiyalaridan foydalangan holda o‘quv jarayonini tashkil etish bo‘yicha takliflar ishlab chiqish;',
        'homiylikka olingan maktablarda turli tadbirlar va mahorat darslari o‘tkazilishini ta’minlash;',
        'TDYUda tashkil etiladigan tadbirlarni muvofiqlashtirish va o‘tkazishga ko‘maklashish;',
        'TDYU kafedralari va boshqa tarkibiy bo‘linmalarining akademik litseylar hamda yuridik texnikumlar bilan o‘quv, uslubiy, ilmiy va tarbiyaviy-ma’rifiy sohalardagi hamkorligini muvofiqlashtirish.',
      ],
      structure: ['Uzluksiz ta’lim bo‘limi;', 'Tadbirlarni muvofiqlashtirish bo‘limi.'],
    },
  },

  'b2-german-library': {
    address: 'Toshkent sh., Sayilgoh ko‘chasi, 35, TDYU 2-o‘quv binosi, 1-qavat, 119-xona',
    audience:
      'Kutubxonaga TDYU talabalari, magistrantlari va doktorantlari tashrif buyurishlari mumkin. Shuni hisobga olish kerakki, taqdim etilgan nashrlarning aksariyati nemis tilida yozilgan, shu bois adabiyot bilan to‘liq ishlash uchun nemis tilini bilish tavsiya etiladi.',
    sections: {
      about:
        'Kutubxona 2023-yilda Toshkent davlat yuridik universiteti va Regensburg universiteti (Germaniya) o‘rtasidagi mustahkam akademik hamkorlik ramzi sifatida ochilgan. U talabalarning ta’lim va ilmiy faoliyatida muhim rol o‘ynab, ixtisoslashgan yuridik adabiyotdan foydalanish imkonini beradi. Fondning asosiy qismini nemis tilidagi nemis huquqiga oid kitoblar tashkil etadi. Bundan tashqari, kutubxonada yapon tilidagi nashrlar ham mavjud bo‘lib, bu uni xorijiy huquqiy tizimlar va chet tillarini o‘rganuvchilar uchun ayniqsa qiziqarli qiladi.',
    },
  },

  'b2-japanese-center': {
    audience:
      'Faqat 1-kurs talabalari qabul qilinadi. Barcha qo‘shimcha ma’lumotni markazga shaxsan tashrif buyurib olish mumkin.',
    sections: {
      about:
        'Yapon markazi — shunchaki talabalar to‘garagi emas, balki quyi va yuqori kurs talabalari doimiy muloqotda bo‘ladigan, jamoa vaqt o‘tishi bilan haqiqiy oilaga aylanadigan chinakam jipslashgan jamiyat. Markaz kutubxonasi — o‘zaro yordam maydoni bo‘lib, u yerda yuqori kurs talabalari doimo maslahat berishga va qo‘llab-quvvatlashga tayyor.',
      location: [
        '101-xona — o‘qituvchilar xonasi;',
        '102-xona — kutubxona;',
        '103, 104-xonalar — o‘quv auditoriyalari.',
      ],
      subjects: [
        'O‘qish muddati: 4 yil;',
        'Jadval: mashg‘ulotlar har kuni 2 soatdan o‘tkaziladi;',
        'Asosiy fanlar: Yaponiya tarixi, Yaponiya huquqi, Fuqarolik huquqi, Sotsiologiya.',
      ],
      programs: [
        'Kim qabul qilinadi: faqat 1-kurs talabalari;',
        'Qabul qanday o‘tadi: tanishuv haftasida rasmiy taqdimot o‘tkaziladi va unda barcha qabul shartlari e’lon qilinadi. Abituriyentlar uchun e’lonlar bilan axborot chati har o‘quv yili qaytadan ochiladi;',
        'Tayyorgarlik va imtihon: qabuldan oldin kirish imtihoniga tayyorgarlik uchun 2 hafta beriladi. Imtihonning o‘zida yapon alifbosi «Xiragana» bilimi tekshiriladi.',
      ],
    },
  },
};
