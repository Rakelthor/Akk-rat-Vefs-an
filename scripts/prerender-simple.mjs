#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

console.log('🚀 Starting simple pre-rendering (no Puppeteer needed)...\n');

// Check if dist exists
if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Run "vite build" first.');
  process.exit(1);
}

// First, create proper _redirects and _headers files in dist/
// This fixes the Netlify build warnings about directories

console.log('📝 Creating Netlify configuration files...\n');

// Create _redirects file (replaces the directory version)
const redirectsContent = `# Redirect akkúrat.is to gloggva.is (if domain is connected)
https://akkúrat.is/* https://gloggva.is/:splat 301!
https://www.akkúrat.is/* https://gloggva.is/:splat 301!
http://akkúrat.is/* https://gloggva.is/:splat 301!
http://www.akkúrat.is/* https://gloggva.is/:splat 301!

# Redirect www to non-www for gloggva.is
https://www.gloggva.is/* https://gloggva.is/:splat 301!

# SPA fallback - serve pre-rendered HTML for all routes
/* /index.html 200
`;

const redirectsPath = path.join(distDir, '_redirects');
// Remove directory if it exists
if (fs.existsSync(redirectsPath) && fs.lstatSync(redirectsPath).isDirectory()) {
  console.log('🗑️  Removing _redirects directory...');
  fs.rmSync(redirectsPath, { recursive: true, force: true });
}
fs.writeFileSync(redirectsPath, redirectsContent, 'utf-8');
console.log('✅ Created _redirects file');

// Create _headers file (replaces the directory version)
const headersContent = `# Security and cache headers for gloggva.is

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/assets/*
  Cache-Control: public, max-age=31536000, immutable
`;

const headersPath = path.join(distDir, '_headers');
// Remove directory if it exists
if (fs.existsSync(headersPath) && fs.lstatSync(headersPath).isDirectory()) {
  console.log('🗑️  Removing _headers directory...');
  fs.rmSync(headersPath, { recursive: true, force: true });
}
fs.writeFileSync(headersPath, headersContent, 'utf-8');
console.log('✅ Created _headers file\n');

// Read the base index.html
const indexPath = path.join(distDir, 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('❌ dist/index.html not found.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf-8');

// SEO-optimized content for each route
const routes = [
  {
    path: '/',
    output: 'index.html',
    canonical: 'https://gloggva.is/',
    title: 'Glöggva - Bókhald, Launavinnsla og Skattskil á Íslandi',
    description: 'Fagleg bókhaldsþjónusta á Íslandi. Bókhald, launavinnsla, ársreikningar, VSK skil, framtöl og skattskil fyrir íslensk fyrirtæki.',
    content: `
      <section class="hero-section" style="min-height:100vh;background:#1e293b;color:#fff;padding:8rem 2rem 6rem;">
        <div style="max-width:1280px;margin:0 auto;">
          <div style="max-width:640px;">
            <p style="color:#10b981;font-weight:600;margin-bottom:1rem;">BÓKHALD MEÐ BETRI YFIRSÝN</p>
            <h1 style="font-size:3rem;font-weight:700;line-height:1.2;margin-bottom:1.5rem;">Glöggva - Fagleg bókhaldsþjónusta fyrir íslensk fyrirtæki</h1>
            <p style="font-size:1.25rem;line-height:1.8;margin-bottom:2rem;color:#cbd5e1;">Við bjóðum upp á alhliða bókhalds- og launaþjónustu sem einfaldar reksturinn og tryggir nákvæma fjárhagsstjórnun.</p>
          </div>
        </div>
      </section>
      
      <section id="thjonusta" style="padding:6rem 2rem;background:#fff;">
        <div style="max-width:1280px;margin:0 auto;">
          <h2 style="font-size:2.5rem;font-weight:700;margin-bottom:3rem;text-align:center;">Þjónusta okkar</h2>
          <div style="display:grid;gap:2rem;">
            <div style="padding:2rem;border:1px solid #e5e7eb;border-radius:8px;">
              <h3 style="font-size:1.5rem;font-weight:600;margin-bottom:1rem;">Bókhald og Fjárhagsstjórnun</h3>
              <p style="line-height:1.8;color:#4b5563;">Við sjáum um dagleg bókhaldsmál fyrirtækja, fjárhagsskýrslur, VSK skil og allt sem kemur við sögu í bókhaldi fyrirtækja.</p>
            </div>
            <div style="padding:2rem;border:1px solid #e5e7eb;border-radius:8px;">
              <h3 style="font-size:1.5rem;font-weight:600;margin-bottom:1rem;">Launavinnsla</h3>
              <p style="line-height:1.8;color:#4b5563;">Fagleg launavinnsla með nákvæmni og þjónustu við starfsfólk. Sérhæfð þjónusta fyrir launaspár, kjarasamninga og launagreiningar.</p>
            </div>
            <div style="padding:2rem;border:1px solid #e5e7eb;border-radius:8px;">
              <h3 style="font-size:1.5rem;font-weight:600;margin-bottom:1rem;">Ársreikningar og Skattskil</h3>
              <p style="line-height:1.8;color:#4b5563;">Ársreikningar, framtöl og skattskil fyrir íslensk fyrirtæki með faglegri ráðgjöf.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="samband" style="padding:6rem 2rem;background:#f9fafb;">
        <div style="max-width:1280px;margin:0 auto;text-align:center;">
          <h2 style="font-size:2.5rem;font-weight:700;margin-bottom:2rem;">Hafðu samband</h2>
          <p style="font-size:1.125rem;margin-bottom:1rem;"><strong>Sími:</strong> <a href="tel:+3547725040" style="color:#10b981;">772-5040</a></p>
          <p style="font-size:1.125rem;margin-bottom:1rem;"><strong>Netfang:</strong> <a href="mailto:gloggva@gloggva.is" style="color:#10b981;">gloggva@gloggva.is</a></p>
          <p style="font-size:1.125rem;color:#6b7280;">Reykjavík, Ísland</p>
        </div>
      </section>
    `
  },
  {
    path: '/thjonusta',
    output: 'thjonusta/index.html',
    canonical: 'https://gloggva.is/thjonusta',
    title: 'Bókhaldsþjónusta - Glöggva',
    description: 'Bókhald, launavinnsla, ársreikningar, VSK skil og fjármálaráðgjöf fyrir íslensk fyrirtæki.',
    content: `
      <section style="padding:8rem 2rem 6rem;background:#1e293b;color:#fff;">
        <div style="max-width:1280px;margin:0 auto;">
          <h1 style="font-size:3rem;font-weight:700;margin-bottom:1.5rem;">Þjónusta okkar</h1>
          <p style="font-size:1.25rem;color:#cbd5e1;">Alhliða bókhalds- og launaþjónusta fyrir íslensk fyrirtæki</p>
        </div>
      </section>
      
      <section style="padding:6rem 2rem;background:#fff;">
        <div style="max-width:1280px;margin:0 auto;">
          <div style="margin-bottom:4rem;">
            <h2 style="font-size:2rem;font-weight:700;margin-bottom:1.5rem;">Bókhald og Fjárhagsstjórnun</h2>
            <p style="font-size:1.125rem;line-height:1.8;color:#4b5563;">Við sjáum um dagleg bókhaldsmál fyrirtækja, fjárhagsskýrslur, VSK skil og allt sem kemur við sögu í bókhaldi fyrirtækja. Fagleg ráðgjöf og áreiðanleg þjónusta.</p>
          </div>
          <div style="margin-bottom:4rem;">
            <h2 style="font-size:2rem;font-weight:700;margin-bottom:1.5rem;">Launavinnsla</h2>
            <p style="font-size:1.125rem;line-height:1.8;color:#4b5563;">Fagleg launavinnsla með nákvæmni og þjónustu við starfsfólk. Sérhæfð þjónusta fyrir launaspár, kjarasamninga og launagreiningar.</p>
          </div>
          <div>
            <h2 style="font-size:2rem;font-weight:700;margin-bottom:1.5rem;">Ársreikningar og Skattskil</h2>
            <p style="font-size:1.125rem;line-height:1.8;color:#4b5563;">Ársreikningar, framtöl og skattskil fyrir íslensk fyrirtæki með faglegri ráðgjöf og persónulegri þjónustu.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: '/laun',
    output: 'laun/index.html',
    canonical: 'https://gloggva.is/laun',
    title: 'Launavinnsla og Launagreiningar - Glöggva',
    description: 'Launavinnsla, launaspár, kjarasamningar og launagreiningar fyrir íslensk fyrirtæki.',
    content: `
      <section style="padding:8rem 2rem 6rem;background:#1e293b;color:#fff;">
        <div style="max-width:1280px;margin:0 auto;">
          <h1 style="font-size:3rem;font-weight:700;margin-bottom:1.5rem;">Launavinnsla og Greiningar</h1>
          <p style="font-size:1.25rem;color:#cbd5e1;">Fagleg launavinnsla með ítarlegum greiningum og þjónustu</p>
        </div>
      </section>
      
      <section style="padding:6rem 2rem;background:#fff;">
        <div style="max-width:1280px;margin:0 auto;">
          <h2 style="font-size:2rem;font-weight:700;margin-bottom:2rem;">Sérhæfð launaþjónusta</h2>
          <p style="font-size:1.125rem;line-height:1.8;color:#4b5563;margin-bottom:2rem;">Við bjóðum upp á alhliða launavinnslu fyrir íslensk fyrirtæki með áherslu á nákvæmni, áreiðanleika og fagleg ráðgjöf.</p>
          
          <div style="margin-top:3rem;">
            <h3 style="font-size:1.5rem;font-weight:600;margin-bottom:1.5rem;">Þjónusta okkar inniheldur:</h3>
            <ul style="list-style:disc;margin-left:2rem;line-height:2;color:#4b5563;">
              <li>Kjarasamningar og túlkun kjarasamninga</li>
              <li>Launaspár og fjárhagsáætlanir</li>
              <li>Hátíðadagaútreikningar</li>
              <li>Veikindagreiðslur og orlofsfé</li>
              <li>Yfirvinnuviðvaranir og fylgni við vinnureglugerð</li>
              <li>Launagreiningar og skýrslugjöf</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section style="padding:6rem 2rem;background:#f9fafb;">
        <div style="max-width:1280px;margin:0 auto;text-align:center;">
          <h2 style="font-size:2rem;font-weight:700;margin-bottom:1.5rem;">Spurningar um launaþjónustu?</h2>
          <p style="font-size:1.125rem;margin-bottom:1rem;">Hafðu samband í síma <a href="tel:+3547725040" style="color:#10b981;font-weight:600;">772-5040</a></p>
          <p style="font-size:1.125rem;">eða sendu póst á <a href="mailto:gloggva@gloggva.is" style="color:#10b981;font-weight:600;">gloggva@gloggva.is</a></p>
        </div>
      </section>
    `
  },
  {
    path: '/um-okkur',
    output: 'um-okkur/index.html',
    canonical: 'https://gloggva.is/um-okkur',
    title: 'Um Glöggva - Bókhaldsstofa í Reykjavík',
    description: 'Glöggva ehf. er bókhaldsstofa í Reykjavík með áherslu á persónulega þjónustu og traust ráðgjöf.',
    content: `
      <section style="padding:8rem 2rem 6rem;background:#1e293b;color:#fff;">
        <div style="max-width:1280px;margin:0 auto;">
          <h1 style="font-size:3rem;font-weight:700;margin-bottom:1.5rem;">Um okkur</h1>
          <p style="font-size:1.25rem;color:#cbd5e1;">Glöggva - Bókhaldsstofa með persónulega þjónustu</p>
        </div>
      </section>
      
      <section style="padding:6rem 2rem;background:#fff;">
        <div style="max-width:1280px;margin:0 auto;">
          <div style="max-width:800px;margin:0 auto;">
            <p style="font-size:1.25rem;line-height:1.8;color:#4b5563;margin-bottom:2rem;">Glöggva ehf. er bókhaldsstofa í Reykjavík með áherslu á persónulega þjónustu og fagleg ráðgjöf fyrir íslensk fyrirtæki.</p>
            
            <p style="font-size:1.125rem;line-height:1.8;color:#4b5563;margin-bottom:2rem;">Við bjóðum upp á alhliða bókhaldsþjónustu, launavinnslu, ársreikninga og skattskil með áherslu á nákvæmni, áreiðanleika og persónulega þjónustu.</p>
            
            <p style="font-size:1.125rem;line-height:1.8;color:#4b5563;">Okkar markmið er að einfalda fjármálastjórnun fyrirtækja og veita trausta ráðgjöf sem byggir á langri reynslu og þekkingu á íslenskum reglum og lögum.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    path: '/samband',
    output: 'samband/index.html',
    canonical: 'https://gloggva.is/samband',
    title: 'Hafa Samband - Glöggva Bókhald',
    description: 'Hafðu samband við Glöggva fyrir bókhaldsþjónustu. Sími: 772-5040, netfang: gloggva@gloggva.is',
    content: `
      <section style="padding:8rem 2rem 6rem;background:#1e293b;color:#fff;">
        <div style="max-width:1280px;margin:0 auto;">
          <h1 style="font-size:3rem;font-weight:700;margin-bottom:1.5rem;">Hafa samband</h1>
          <p style="font-size:1.25rem;color:#cbd5e1;">Við hlökkum til að heyra frá þér</p>
        </div>
      </section>
      
      <section style="padding:6rem 2rem;background:#fff;">
        <div style="max-width:800px;margin:0 auto;">
          <div style="margin-bottom:3rem;">
            <h2 style="font-size:2rem;font-weight:700;margin-bottom:2rem;">Samband</h2>
            <div style="margin-bottom:1.5rem;">
              <p style="font-size:1.125rem;color:#6b7280;margin-bottom:0.5rem;">Sími:</p>
              <p style="font-size:1.5rem;font-weight:600;"><a href="tel:+3547725040" style="color:#10b981;text-decoration:none;">772-5040</a></p>
            </div>
            <div style="margin-bottom:1.5rem;">
              <p style="font-size:1.125rem;color:#6b7280;margin-bottom:0.5rem;">Netfang:</p>
              <p style="font-size:1.5rem;font-weight:600;"><a href="mailto:gloggva@gloggva.is" style="color:#10b981;text-decoration:none;">gloggva@gloggva.is</a></p>
            </div>
            <div>
              <p style="font-size:1.125rem;color:#6b7280;margin-bottom:0.5rem;">Staðsetning:</p>
              <p style="font-size:1.5rem;font-weight:600;color:#1e293b;">Reykjavík, Ísland</p>
            </div>
          </div>
          
          <div style="background:#f9fafb;padding:2rem;border-radius:8px;">
            <p style="font-size:1.125rem;line-height:1.8;color:#4b5563;">Hafðu samband við okkur fyrir frekari upplýsingar um bókhaldsþjónustu, launavinnslu, ársreikninga eða skattskil. Við svörum öllum fyrirspurnum fljótt og fagmannlega.</p>
          </div>
        </div>
      </section>
    `
  }
];

// Generate pre-rendered HTML for each route
let successCount = 0;

for (const route of routes) {
  try {
    let html = baseHtml;

    // Update title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // Update meta description
    if (html.includes('<meta name="description"')) {
      html = html.replace(
        /<meta name="description" content=".*?"(\s*\/)?>>/i,
        `<meta name="description" content="${route.description}" />`
      );
    } else {
      // Add meta description if it doesn't exist
      html = html.replace(
        '</head>',
        `  <meta name="description" content="${route.description}" />\n</head>`
      );
    }

    // Update canonical URL
    if (route.canonical) {
      if (html.includes('<link rel="canonical"')) {
        // Match canonical tag with or without trailing slash in closing tag
        html = html.replace(
          /<link rel="canonical" href="[^"]*"\s*\/?>/i,
          `<link rel="canonical" href="${route.canonical}" />`
        );
      } else {
        // Add canonical if it doesn't exist
        html = html.replace(
          '</head>',
          `  <link rel="canonical" href="${route.canonical}" />\n</head>`
        );
      }
    }

    // Inject SEO content into the root div
    html = html.replace(
      /<div id="root"><\/div>/,
      `<div id="root">${route.content}</div>`
    );

    // Determine output path
    const outputPath = path.join(distDir, route.output);
    const outputDir = path.dirname(outputPath);

    // Create directory if needed
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the pre-rendered HTML
    fs.writeFileSync(outputPath, html, 'utf-8');
    
    const fileSize = (html.length / 1024).toFixed(1);
    console.log(`✓ ${route.path.padEnd(15)} → ${route.output.padEnd(25)} (${fileSize}KB)`);
    successCount++;

  } catch (error) {
    console.error(`✗ Failed to pre-render ${route.path}:`, error.message);
  }
}

console.log(`\n✅ Pre-rendering complete! ${successCount}/${routes.length} pages rendered.`);
console.log('📊 Google can now see your content in the raw HTML.\n');