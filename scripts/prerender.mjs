import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

// SEO content for each route
const routes = {
  '/': {
    title: 'Glöggva - Bókhald, Launavinnsla og Skattskil á Íslandi',
    description: 'Fagleg bókhaldsþjónusta á Íslandi. Bókhald, launavinnsla, ársreikningar, VSK skil, framtöl og skattskil fyrir íslensk fyrirtæki.',
    content: `<div class="seo-content" style="padding:2rem;font-family:sans-serif;max-width:800px;margin:0 auto;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">Bókhald með betri yfirsýn</h1>
      <p style="font-size:1.125rem;margin-bottom:1.5rem;">Fagleg bókhaldsþjónusta fyrir íslensk fyrirtæki. Bókhald, launavinnsla, ársreikningar, VSK skil, framtöl og skattskil.</p>
      <h2 style="font-size:1.5rem;margin:1.5rem 0 1rem;">Þjónusta</h2>
      <ul style="margin-bottom:1.5rem;line-height:1.8;">
        <li>Bókhald og fjárhagsstjórnun</li>
        <li>Launavinnsla og launagreiningar</li>
        <li>Ársreikningar og skattskil</li>
        <li>VSK skil og framtöl</li>
      </ul>
      <p>Hafðu samband: <a href="tel:+3547725040">772-5040</a> | <a href="mailto:gloggva@gloggva.is">gloggva@gloggva.is</a></p>
    </div>`
  },
  '/thjonusta': {
    title: 'Bókhaldsþjónusta - Glöggva',
    description: 'Bókhald, launavinnsla, ársreikningar, VSK skil og fjármálaráðgjöf fyrir íslensk fyrirtæki.',
    content: `<div class="seo-content" style="padding:2rem;font-family:sans-serif;max-width:800px;margin:0 auto;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">Þjónusta</h1>
      <h2 style="font-size:1.5rem;margin:1.5rem 0 1rem;">Bókhald og Fjárhagsstjórnun</h2>
      <p style="margin-bottom:1.5rem;">Fagleg bókhaldsþjónusta fyrir fyrirtæki á Íslandi.</p>
      <h2 style="font-size:1.5rem;margin:1.5rem 0 1rem;">Launavinnsla</h2>
      <p style="margin-bottom:1.5rem;">Nákvæm launavinnsla með þjónustu við starfsfólk.</p>
      <h2 style="font-size:1.5rem;margin:1.5rem 0 1rem;">Ársreikningar og Skattskil</h2>
      <p>Ársreikningar, framtöl og skattskil fyrir íslensk fyrirtæki.</p>
    </div>`
  },
  '/laun': {
    title: 'Launavinnsla og Launagreiningar - Glöggva',
    description: 'Launavinnsla, launaspár, kjarasamningar og launagreiningar fyrir íslensk fyrirtæki.',
    content: `<div class="seo-content" style="padding:2rem;font-family:sans-serif;max-width:800px;margin:0 auto;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">Launavinnsla og Greiningar</h1>
      <p style="font-size:1.125rem;margin-bottom:1.5rem;">Við bjóðum upp á launavinnslu, launaspár, kjarasamninga og launagreiningar.</p>
      <ul style="margin-bottom:1.5rem;line-height:1.8;">
        <li>Kjarasamningar</li>
        <li>Launaspá</li>
        <li>Hátíðadagar</li>
        <li>Veikindagreiðslur</li>
        <li>Yfirvinnuviðvaranir</li>
      </ul>
    </div>`
  },
  '/um-okkur': {
    title: 'Um Glöggva - Bókhaldsstofa í Reykjavík',
    description: 'Glöggva ehf. er bókhaldsstofa í Reykjavík með áherslu á persónulega þjónustu og traust ráðgjöf.',
    content: `<div class="seo-content" style="padding:2rem;font-family:sans-serif;max-width:800px;margin:0 auto;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">Um okkur</h1>
      <p style="font-size:1.125rem;margin-bottom:1.5rem;">Glöggva ehf. er bókhaldsstofa í Reykjavík með áherslu á persónulega þjónustu og fagleg ráðgjöf.</p>
      <p>Við veitum bókhaldsþjónustu, launavinnslu, ársreikninga og skattskil fyrir íslensk fyrirtæki.</p>
    </div>`
  },
  '/samband': {
    title: 'Hafa Samband - Glöggva Bókhald',
    description: 'Hafðu samband við Glöggva fyrir bókhaldsþjónustu. Sími: 772-5040, netfang: gloggva@gloggva.is',
    content: `<div class="seo-content" style="padding:2rem;font-family:sans-serif;max-width:800px;margin:0 auto;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">Hafa samband</h1>
      <p style="margin-bottom:1rem;">Hafðu samband við okkur fyrir frekari upplýsingar um bókhaldsþjónustu.</p>
      <p style="margin:0.5rem 0;">Sími: <a href="tel:+3547725040">772-5040</a></p>
      <p style="margin:0.5rem 0;">Netfang: <a href="mailto:gloggva@gloggva.is">gloggva@gloggva.is</a></p>
      <p style="margin:0.5rem 0;">Staðsetning: Reykjavík, Ísland</p>
    </div>`
  }
};

// Read the base index.html
const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ dist/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

let baseHtml = fs.readFileSync(indexPath, 'utf-8');

// Generate pre-rendered HTML for each route
Object.entries(routes).forEach(([route, data]) => {
  let html = baseHtml;

  // Update title
  html = html.replace(/<title>.*?<\/title>/, `<title>${data.title}</title>`);

  // Update meta description
  html = html.replace(
    /<meta name="description" content=".*?"\/>/,
    `<meta name="description" content="${data.description}"/>`
  );

  // Inject SEO content into body (for crawlers that don't execute JS)
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${data.content}</div>`
  );

  // Determine output path
  if (route === '/') {
    // Overwrite index.html
    fs.writeFileSync(indexPath, html);
    console.log(`✓ Generated pre-rendered / (index.html)`);
  } else {
    // Create directory for route
    const routeDir = path.join(distDir, route.slice(1));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html);
    console.log(`✓ Generated pre-rendered ${route}`);
  }
});

console.log('\n✅ Pre-rendering complete! Google can now see your content.');
