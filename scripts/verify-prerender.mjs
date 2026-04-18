#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');

console.log('🔍 Verifying pre-rendered content...\n');

const checks = [
  {
    file: 'index.html',
    route: '/',
    keywords: ['Bókhald', 'Glöggva', 'bókhaldsþjónustu']
  },
  {
    file: 'thjonusta/index.html',
    route: '/thjonusta',
    keywords: ['Þjónusta', 'Bókhald']
  },
  {
    file: 'laun/index.html',
    route: '/laun',
    keywords: ['Launavinnsla', 'laun']
  },
  {
    file: 'um-okkur/index.html',
    route: '/um-okkur',
    keywords: ['Um okkur', 'Glöggva']
  },
  {
    file: 'samband/index.html',
    route: '/samband',
    keywords: ['samband', 'gloggva@gloggva.is']
  }
];

let allPassed = true;

for (const check of checks) {
  const filePath = path.join(distDir, check.file);
  
  console.log(`\n📄 Checking ${check.route}`);
  console.log(`   File: ${check.file}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`   ❌ File not found!`);
    allPassed = false;
    continue;
  }
  
  const html = fs.readFileSync(filePath, 'utf-8');
  const htmlSize = (html.length / 1024).toFixed(1);
  console.log(`   Size: ${htmlSize}KB`);
  
  let foundKeywords = 0;
  const missingKeywords = [];
  
  for (const keyword of check.keywords) {
    if (html.includes(keyword)) {
      foundKeywords++;
    } else {
      missingKeywords.push(keyword);
    }
  }
  
  if (foundKeywords === check.keywords.length) {
    console.log(`   ✅ All keywords found (${foundKeywords}/${check.keywords.length})`);
  } else {
    console.log(`   ⚠️  Only ${foundKeywords}/${check.keywords.length} keywords found`);
    console.log(`   Missing: ${missingKeywords.join(', ')}`);
    allPassed = false;
  }
  
  // Check if it's just empty root div
  const hasEmptyRoot = html.includes('<div id="root"></div>');
  const hasContentInRoot = html.includes('<div id="root">') && !hasEmptyRoot;
  
  if (hasEmptyRoot) {
    console.log(`   ❌ Root div is EMPTY - pre-rendering failed!`);
    allPassed = false;
  } else if (hasContentInRoot) {
    console.log(`   ✅ Root div contains content`);
  }
}

console.log('\n' + '='.repeat(50));

if (allPassed) {
  console.log('✅ All pre-rendered pages verified successfully!');
  console.log('\n📊 Your site is ready for SEO. Google will be able to crawl:');
  console.log('   • Homepage hero content');
  console.log('   • Service descriptions');
  console.log('   • Payroll information');
  console.log('   • About page');
  console.log('   • Contact information');
  console.log('\n🚀 Deploy to Netlify: git push');
  console.log('🔍 Verify live: curl https://www.gloggva.is | grep "Bókhald"');
  process.exit(0);
} else {
  console.log('❌ Some pre-rendered pages have issues.');
  console.log('\n🔧 Try running: npm run build');
  console.log('   This will rebuild and re-run pre-rendering.');
  process.exit(1);
}
