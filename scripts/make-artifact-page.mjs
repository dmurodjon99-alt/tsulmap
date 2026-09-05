/**
 * Превращает single-file сборку (dist-artifact/index.html) в страницу для
 * площадок, которые оборачивают файл в собственный <html><head><body>.
 *
 * Оставляем только то, что должно попасть внутрь <body> хоста:
 *   <title> → подхватывается площадкой как имя страницы,
 *   <link>  на Google Fonts (единственный разрешённый внешний хост),
 *   инлайн <style>, контейнер #root и инлайн <script type="module">.
 */
import fs from 'node:fs';

const src = fs.readFileSync('dist-artifact/index.html', 'utf8');
const pick = (re) => (src.match(re) || []).join('\n');

// В галерее площадки страница должна называться коротким именем продукта,
// без пояснения через тире — пояснение уходит в description публикации.
const title = '<title>TSUL Campus</title>';
const fonts = pick(/<link[^>]*fonts\.(googleapis|gstatic)\.com[^>]*>/g);
const styles = pick(/<style[\s\S]*?<\/style>/g);
const scripts = pick(/<script type="module"[\s\S]*?<\/script>/g).replace(' crossorigin', '');

const out = [title, fonts, styles, '<div id="root"></div>', scripts].join('\n');

fs.writeFileSync('dist-artifact/artifact-page.html', out);
const mb = (Buffer.byteLength(out) / 1048576).toFixed(2);
console.log(`artifact-page.html: ${mb} MB (title/fonts/style/script: ${[title, fonts, styles, scripts].map((p) => (p ? 'ok' : 'MISSING')).join(', ')})`);
