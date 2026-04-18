import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

console.log('🚀 Starting advanced pre-rendering with Puppeteer...\n');

// Routes to pre-render
const routes = [
  '/',
  '/thjonusta',
  '/laun',
  '/um-okkur',
  '/samband'
];

// Check if dist exists
if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Run "npm run build" first.');
  process.exit(1);
}

try {
  // Install puppeteer if not already installed
  console.log('📦 Ensuring Puppeteer is installed...');
  try {
    execSync('npm list puppeteer', { stdio: 'ignore' });
  } catch {
    console.log('Installing Puppeteer...');
    execSync('npm install --no-save puppeteer', { stdio: 'inherit' });
  }

  // Import puppeteer dynamically
  const puppeteer = await import('puppeteer');

  console.log('🌐 Launching headless browser...\n');
  const browser = await puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Start a simple HTTP server to serve the dist folder
  const handler = await import('serve-handler');
  const http = await import('http');
  
  const server = http.default.createServer((request, response) => {
    return handler.default(request, response, {
      public: distDir,
      cleanUrls: false
    });
  });

  await new Promise((resolve) => {
    server.listen(5555, () => {
      console.log('✓ Local server started on http://localhost:5555\n');
      resolve();
    });
  });

  // Pre-render each route
  for (const route of routes) {
    const url = `http://localhost:5555${route}`;
    console.log(`📄 Pre-rendering: ${route}`);

    try {
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait a bit more for any animations/lazy loading
      await page.waitForTimeout(2000);

      // Get the fully rendered HTML
      const html = await page.content();

      // Determine output path
      let outputPath;
      if (route === '/') {
        outputPath = path.join(distDir, 'index.html');
      } else {
        const routeDir = path.join(distDir, route.slice(1));
        fs.mkdirSync(routeDir, { recursive: true });
        outputPath = path.join(routeDir, 'index.html');
      }

      // Write the pre-rendered HTML
      fs.writeFileSync(outputPath, html);
      console.log(`   ✓ Saved to ${outputPath}`);

    } catch (error) {
      console.error(`   ❌ Failed to pre-render ${route}:`, error.message);
    }
  }

  await browser.close();
  server.close();

  console.log('\n✅ Pre-rendering complete!');
  console.log('📊 Google can now crawl and index your full page content.\n');

} catch (error) {
  console.error('❌ Pre-rendering failed:', error);
  process.exit(1);
}
