#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

// Routes to pre-render
const routes = [
  { path: '/', output: 'index.html' },
  { path: '/thjonusta', output: 'thjonusta/index.html' },
  { path: '/laun', output: 'laun/index.html' },
  { path: '/um-okkur', output: 'um-okkur/index.html' },
  { path: '/samband', output: 'samband/index.html' }
];

console.log('🚀 Starting Puppeteer pre-rendering...\n');

// Check if dist exists
if (!fs.existsSync(distDir)) {
  console.error('❌ dist/ directory not found. Run "vite build" first.');
  process.exit(1);
}

// Start a simple HTTP server
const serverPort = 3456;
let serverProcess;

async function startServer() {
  return new Promise((resolve, reject) => {
    // Use npx to run http-server
    serverProcess = spawn('npx', [
      'http-server',
      distDir,
      '-p',
      serverPort.toString(),
      '-c-1',
      '--silent'
    ], {
      stdio: ['ignore', 'pipe', 'pipe']
    });

    serverProcess.stdout.on('data', (data) => {
      if (data.toString().includes('Available')) {
        console.log(`✓ Local server started on http://localhost:${serverPort}\n`);
        resolve();
      }
    });

    serverProcess.stderr.on('data', (data) => {
      console.error(`Server error: ${data}`);
    });

    // Timeout after 5 seconds
    setTimeout(() => {
      console.log(`✓ Server should be ready on http://localhost:${serverPort}\n`);
      resolve();
    }, 2000);
  });
}

function stopServer() {
  if (serverProcess) {
    serverProcess.kill();
  }
}

async function prerenderWithPuppeteer() {
  try {
    // Dynamically import puppeteer
    let puppeteer;
    try {
      puppeteer = await import('puppeteer');
    } catch (error) {
      console.error('❌ Puppeteer not found. Installing...');
      const { execSync } = await import('child_process');
      execSync('npm install --no-save puppeteer', { stdio: 'inherit' });
      puppeteer = await import('puppeteer');
    }

    await startServer();

    console.log('🌐 Launching headless browser...\n');
    const browser = await puppeteer.default.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    });

    const page = await browser.newPage();

    // Set viewport
    await page.setViewport({ width: 1280, height: 800 });

    // Pre-render each route
    for (const route of routes) {
      const url = `http://localhost:${serverPort}${route.path}`;
      console.log(`📄 Pre-rendering: ${route.path}`);

      try {
        await page.goto(url, {
          waitUntil: ['networkidle0', 'domcontentloaded'],
          timeout: 30000
        });

        // Wait for React to render
        await page.waitForTimeout(1500);

        // Wait for main content to be present
        await page.waitForSelector('section', { timeout: 5000 }).catch(() => {
          console.log('   ⚠️  Warning: No <section> found, continuing anyway...');
        });

        // Get the fully rendered HTML
        const html = await page.content();

        // Verify content is present
        const hasContent = html.includes('Glöggva') || html.includes('bókhald');
        if (!hasContent) {
          console.log('   ⚠️  Warning: Expected content not found in rendered HTML');
        }

        // Create directory if needed
        const outputPath = path.join(distDir, route.output);
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        // Write the pre-rendered HTML
        fs.writeFileSync(outputPath, html);
        
        // Count the content size
        const contentSize = (html.length / 1024).toFixed(1);
        console.log(`   ✓ Saved ${contentSize}KB to ${route.output}`);

      } catch (error) {
        console.error(`   ❌ Failed to pre-render ${route.path}:`, error.message);
      }
    }

    await browser.close();
    stopServer();

    console.log('\n✅ Pre-rendering complete!');
    console.log('📊 Your pages now contain full HTML content for Google.\n');
    console.log('🔍 Verify by running: curl http://localhost:8080 | grep "Bókhald"\n');

  } catch (error) {
    stopServer();
    console.error('❌ Pre-rendering failed:', error);
    process.exit(1);
  }
}

// Run the pre-rendering
prerenderWithPuppeteer();
