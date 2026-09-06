/**
 * УЗБЕКСКИЕ ПЕРЕВОДЫ ДОЛЖНОСТЕЙ И РАСПИСАНИЙ
 * ---------------------------------------------------------------------------
 * Должности повторяются десятками: «преподаватель» встречается 60+ раз.
 * Поэтому перевод хранится словарём «русский оригинал → узбекский», а не
 * рядом с каждым сотрудником — так он занимает 90 строк вместо 300 правок
 * и его удобно вычитывать одним куском.
 *
 * ВНИМАНИЕ: это перевод, выполненный при разработке, а не официальные
 * формулировки ТГЮУ. Термины сверены с узбекскими текстами здания №3 из
 * исходных материалов (kafedra mudiri, dotsent v.b., katta o‘qituvchi и т.д.),
 * но перед публикацией как официальных их стоит вычитать.
 */

/** Русское написание должности → узбекское. */
export const ROLES_UZ = {
  // --- руководство университета ---
  'ректор ТГЮУ': 'TDYU rektori',
  'проректор по международным отношениям и непрерывному образованию, д.ю.н. (DSc), доцент':
    'Xalqaro aloqalar va uzluksiz ta’lim bo‘yicha prorektor, yuridik fanlar doktori (DSc), dotsent',

  // --- административные должности ---
  'начальник отдела': 'bo‘lim boshlig‘i',
  'начальник управления': 'boshqarma boshlig‘i',
  'руководитель отдела': 'bo‘lim rahbari',
  'начальник отдела, доктор юридических наук, профессор':
    'bo‘lim boshlig‘i, yuridik fanlar doktori, professor',
  'главный специалист': 'bosh mutaxassis',
  'ведущий специалист': 'yetakchi mutaxassis',
  инспектор: 'inspektor',
  'заведующий кабинетом': 'kabinet mudiri',

  // --- бухгалтерия и финансы ---
  'главный бухгалтер': 'bosh hisobchi',
  'заместитель главного бухгалтера': 'bosh hisobchi o‘rinbosari',
  бухгалтер: 'hisobchi',
  'экономист финансово-экономического отдела': 'moliya-iqtisod bo‘limi iqtisodchisi',

  // --- антикоррупция, охрана труда, юридическое бюро ---
  'начальник отдела внутреннего антикоррупционного контроля':
    'ichki korrupsiyaga qarshi nazorat bo‘limi boshlig‘i',
  'начальник отдела гражданской защиты и охраны труда':
    'fuqaro muhofazasi va mehnat muhofazasi bo‘limi boshlig‘i',
  'инженер по гражданской защите и чрезвычайным ситуациям':
    'fuqaro muhofazasi va favqulodda vaziyatlar bo‘yicha muhandis',
  'старший юрисконсульт': 'katta yuriskonsult',
  юрисконсульт: 'yuriskonsult',

  // --- эксплуатация и ремонт ---
  'главный инженер отдела строительства и ремонта':
    'qurilish va ta’mirlash bo‘limi bosh muhandisi',
  'главный энергетик отдела энергоснабжения': 'energiya ta’minoti bo‘limi bosh energetigi',
  'заведующий складом': 'ombor mudiri',
  'техник-механик': 'texnik-mexanik',
  'инженер отдела строительства и ремонта': 'qurilish va ta’mirlash bo‘limi muhandisi',
  'комендант 1-го здания отдела технического обслуживания':
    'texnik xizmat ko‘rsatish bo‘limi 1-bino komendanti',
  'комендант 2-го здания отдела технического обслуживания':
    'texnik xizmat ko‘rsatish bo‘limi 2-bino komendanti',
  'комендант 3-го здания отдела технического обслуживания':
    'texnik xizmat ko‘rsatish bo‘limi 3-bino komendanti',

  // --- делопроизводство и архив ---
  'заведующий канцелярией': 'devonxona mudiri',
  'делопроизводитель канцелярии': 'devonxona ish yurituvchisi',
  'заведующая архивом': 'arxiv mudiri',
  архивариус: 'arxivchi',
  'методист отдела мониторинга и внутреннего контроля':
    'monitoring va ichki nazorat bo‘limi metodisti',
  'инспектор отдела мониторинга и внутреннего контроля':
    'monitoring va ichki nazorat bo‘limi inspektori',

  // --- юридическая клиника ---
  'руководитель Юридической клиники, доктор юридических наук, профессор':
    'Yuridik klinika rahbari, yuridik fanlar doktori, professor',
  'методист Юридической клиники': 'Yuridik klinika metodisti',

  // --- международное сотрудничество и непрерывное образование ---
  'глава отдела международного сотрудничества': 'xalqaro hamkorlik bo‘limi boshlig‘i',
  'главный специалист отдела международных отношений':
    'xalqaro aloqalar bo‘limi bosh mutaxassisi',
  'специалист отдела международных отношений': 'xalqaro aloqalar bo‘limi mutaxassisi',
  'главный специалист подразделения академической мобильности':
    'akademik mobillik bo‘linmasi bosh mutaxassisi',
  'специалист подразделения академической мобильности':
    'akademik mobillik bo‘linmasi mutaxassisi',
  'заместитель начальника управления, начальник отдела координации мероприятий':
    'boshqarma boshlig‘i o‘rinbosari, tadbirlarni muvofiqlashtirish bo‘limi boshlig‘i',
  'главный специалист отдела непрерывного образования':
    'uzluksiz ta’lim bo‘limi bosh mutaxassisi',
  'методист отдела координации мероприятий': 'tadbirlarni muvofiqlashtirish bo‘limi metodisti',

  // --- заведующие кафедрами ---
  'заведующий кафедрой': 'kafedra mudiri',
  'заведующий кафедрой, PhD': 'kafedra mudiri, PhD',
  'PhD, заведующий кафедрой': 'PhD, kafedra mudiri',
  'заведующий кафедрой, доктор юридических наук (DSc)':
    'kafedra mudiri, yuridik fanlar doktori (DSc)',
  'заведующий кафедрой, доктор юридических наук, профессор':
    'kafedra mudiri, yuridik fanlar doktori, professor',
  'и.о. заведующего кафедрой, доцент, PhD': 'kafedra mudiri v.b., dotsent, PhD',
  'заместитель заведующего кафедрой, д.ю.ф.н.':
    'kafedra mudiri o‘rinbosari, yuridik fanlar bo‘yicha falsafa doktori',
  'заведующая кафедрой, кандидат философских наук, доцент':
    'kafedra mudiri, falsafa fanlari nomzodi, dotsent',

  // --- профессорско-преподавательский состав ---
  'профессор, д.ю.н.': 'professor, yuridik fanlar doktori',
  'д.ю.н., профессор': 'yuridik fanlar doktori, professor',
  'д.ю.н., DSc Университета Нагоя (Япония), профессор':
    'yuridik fanlar doktori, Nagoya universiteti DSc (Yaponiya), professor',
  'и.о. профессора, д.ю.н.': 'professor v.b., yuridik fanlar doktori',
  'профессор кафедры, доктор юридических наук (DSc)':
    'kafedra professori, yuridik fanlar doktori (DSc)',
  'и.о. профессора кафедры (PhD)': 'kafedra professori v.b. (PhD)',
  'профессор (по совместительству)': 'professor (o‘rindoshlik asosida)',

  'доцент, д.ю.н.': 'dotsent, yuridik fanlar doktori',
  'доцент, PhD': 'dotsent, PhD',
  'доцент кафедры, кандидат юридических наук': 'kafedra dotsenti, yuridik fanlar nomzodi',
  'и.о. доцента, PhD': 'dotsent v.b., PhD',
  'и.о. доцента, к.ю.н.': 'dotsent v.b., yuridik fanlar nomzodi',
  'и.о. доцента, д.ю.ф.н.': 'dotsent v.b., yuridik fanlar bo‘yicha falsafa doktori',
  'и.о. доцента кафедры (PhD)': 'kafedra dotsenti v.b. (PhD)',
  'и.о. доцента кафедры, доктор юридических наук (DSc)':
    'kafedra dotsenti v.b., yuridik fanlar doktori (DSc)',
  'PhD, и.о. доцента': 'PhD, dotsent v.b.',
  'к.ю.н., и.о. доцента': 'yuridik fanlar nomzodi, dotsent v.b.',

  'старший преподаватель': 'katta o‘qituvchi',
  'старший преподаватель кафедры': 'kafedra katta o‘qituvchisi',
  'старший преподаватель, PhD': 'katta o‘qituvchi, PhD',
  'старший преподаватель, д.ю.ф.н.':
    'katta o‘qituvchi, yuridik fanlar bo‘yicha falsafa doktori',
  'старший преподаватель (по совместительству)': 'katta o‘qituvchi (o‘rindoshlik asosida)',

  преподаватель: 'o‘qituvchi',
  'преподаватель кафедры': 'kafedra o‘qituvchisi',
  'преподаватель кафедры, PhD': 'kafedra o‘qituvchisi, PhD',
  'преподаватель кафедры, доктор юридических наук (DSc)':
    'kafedra o‘qituvchisi, yuridik fanlar doktori (DSc)',
  'преподаватель, LLM Университета Нагоя (Япония)':
    'o‘qituvchi, Nagoya universiteti LLM (Yaponiya)',
  'преподаватель (по совместительству)': 'o‘qituvchi (o‘rindoshlik asosida)',
  'к.ю.н., преподаватель': 'yuridik fanlar nomzodi, o‘qituvchi',

  // --- учёные степени других отраслей ---
  'кандидат филологических наук, доцент': 'filologiya fanlari nomzodi, dotsent',
  'кандидат исторических наук, доцент': 'tarix fanlari nomzodi, dotsent',
  'кандидат исторических наук, старший преподаватель':
    'tarix fanlari nomzodi, katta o‘qituvchi',
  'кандидат физико-математических наук, доцент':
    'fizika-matematika fanlari nomzodi, dotsent',
  'доктор философии (PhD) по педагогике, доцент':
    'pedagogika bo‘yicha falsafa doktori (PhD), dotsent',
  'доктор философии (PhD) по философии, старший преподаватель':
    'falsafa bo‘yicha falsafa doktori (PhD), katta o‘qituvchi',
  'доктор философии (PhD) по экономике, старший преподаватель':
    'iqtisodiyot bo‘yicha falsafa doktori (PhD), katta o‘qituvchi',

  // --- деканат факультета уголовного правосудия (с научными интересами) ---
  'декан факультета уголовного правосудия. Научные интересы: уголовное право, криминология, противодействие коррупции, уголовно-исполнительное право, адвокатура, судебная деятельность, правоохранительные органы':
    'Jinoiy odil sudlov fakulteti dekani. Ilmiy qiziqishlari: jinoyat huquqi, kriminologiya, korrupsiyaga qarshi kurashish, jinoyat-ijroiya huquqi, advokatura, sud faoliyati, huquqni muhofaza qiluvchi organlar',
  'заместитель декана по учебной работе. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, судебная система и правоохранительные органы':
    'O‘quv ishlari bo‘yicha dekan o‘rinbosari. Ilmiy qiziqishlari: jinoyat huquqi, jinoyat-protsessual huquqi, advokatura, sud tizimi va huquqni muhofaza qiluvchi organlar',
  'заместитель декана по делам молодёжи и духовному просвещению. Научные интересы: уголовное право, уголовно-процессуальное право, теория доказательств, адвокатура, судебные и правоохранительные органы, оперативно-розыскная деятельность':
    'Yoshlar masalalari va ma’naviy-ma’rifiy ishlar bo‘yicha dekan o‘rinbosari. Ilmiy qiziqishlari: jinoyat huquqi, jinoyat-protsessual huquqi, isbot nazariyasi, advokatura, sud va huquqni muhofaza qiluvchi organlar, tezkor-qidiruv faoliyati',
  'тьютор. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, судебная система и правоохранительные органы':
    'Tyutor. Ilmiy qiziqishlari: jinoyat huquqi, jinoyat-protsessual huquqi, advokatura, sud tizimi va huquqni muhofaza qiluvchi organlar',
  'тьютор. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, бизнес-право':
    'Tyutor. Ilmiy qiziqishlari: jinoyat huquqi, jinoyat-protsessual huquqi, advokatura, biznes huquqi',
  'тьютор. Научные интересы: уголовное право, уголовно-процессуальное право, адвокатура, криминалистика, криминология, судебная система и правоохранительные органы':
    'Tyutor. Ilmiy qiziqishlari: jinoyat huquqi, jinoyat-protsessual huquqi, advokatura, kriminalistika, kriminologiya, sud tizimi va huquqni muhofaza qiluvchi organlar',
};

/** Дни недели — расписания консультаций отличаются только ими и временем. */
const WEEKDAYS_UZ = {
  понедельник: 'dushanba',
  вторник: 'seshanba',
  среда: 'chorshanba',
  четверг: 'payshanba',
  пятница: 'juma',
  суббота: 'shanba',
};

/**
 * Переводит строку расписания вида «понедельник 9:00–12:00».
 * Время не трогаем — оно одинаково во всех языках.
 */
export function translateSchedule(ru) {
  if (!ru) return null;
  let out = ru;
  for (const [day, uz] of Object.entries(WEEKDAYS_UZ)) {
    out = out.replace(new RegExp(day, 'gi'), uz);
  }
  return out === ru ? null : out;
}
