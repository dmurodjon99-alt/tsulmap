/** Аудит покрытия узбекским: что ещё не переведено в данных подразделений. */
import { BUILDINGS } from '../src/data/index.js';
const miss = { name: 0, summary: 0, address: 0, motto: 0, hours: 0, audience: 0, sections: 0, consult: 0 };
const roles = new Set();
const per = {};

for (const b of BUILDINGS) {
  const st = { units: 0, sections: 0, fields: 0 };
  for (const u of b.units) {
    st.units++;
    for (const f of ['name', 'summary', 'address', 'motto', 'hours', 'audience']) {
      if (u[f] && !u[f].uz) { miss[f]++; st.fields++; }
    }
    for (const s of u.sections ?? []) {
      const v = s.body ?? s.items;
      if (v && !v.uz) { miss.sections++; st.sections++; }
    }
    for (const p of u.staff ?? []) if (p.role?.ru && !p.role.uz) roles.add(p.role.ru);
    for (const c of u.consultations ?? []) if (c.when?.ru && !c.when.uz) miss.consult++;
  }
  per[b.id] = st;
}

console.log('НЕ ХВАТАЕТ УЗБЕКСКОГО:');
for (const [k, v] of Object.entries(miss)) console.log('  ' + k + ':', v);
console.log('  уникальных должностей:', roles.size);
console.log('\nПо зданиям:', JSON.stringify(per));
console.log('\nДОЛЖНОСТИ:');
[...roles].sort().forEach((r, i) => console.log(String(i + 1).padStart(3) + '. ' + r));
