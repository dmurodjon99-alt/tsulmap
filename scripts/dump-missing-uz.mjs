/** Выгружает поля без узбекского перевода для указанного здания. */
import { BUILDINGS } from '../src/data/index.js';
const map = Object.fromEntries(BUILDINGS.map((b) => [b.id, b]));
const b = map[process.argv[2]];
const from = Number(process.argv[3] ?? 0);
const to = Number(process.argv[4] ?? 99);

b.units.slice(from, to).forEach((u) => {
  const out = [];
  for (const f of ['address', 'motto', 'audience']) {
    if (u[f] && !u[f].uz) out.push(`  [${f}] ${u[f].ru}`);
  }
  for (const s of u.sections ?? []) {
    const v = s.body ?? s.items;
    if (v && !v.uz) {
      const val = Array.isArray(v.ru) ? v.ru.map((x) => '     • ' + x).join('\n') : '     ' + v.ru;
      out.push(`  [section:${s.key}]${Array.isArray(v.ru) ? ' (список)' : ''}\n${val}`);
    }
  }
  if (out.length) console.log(`\n### ${u.id}\n` + out.join('\n'));
});
