# Glöggva Deployment Guide

## Pre-rendering for SEO

This site uses **Puppeteer-based pre-rendering** to ensure Google and other search engines can crawl the full page content.

### How it works

1. **Build**: `vite build` creates the standard React SPA in `/dist`
2. **Post-build**: The `prerender-puppeteer.mjs` script automatically runs after build
   - Starts a local HTTP server
   - Launches headless Chrome
   - Visits each route and waits for React to render
   - Saves the fully-rendered HTML to disk
   - Replaces the empty `<div id="root"></div>` with actual content

### Routes that are pre-rendered

- `/` (homepage)
- `/thjonusta` (services)
- `/laun` (payroll)
- `/um-okkur` (about)
- `/samband` (contact)

## Building for Production

```bash
# Install dependencies
npm install

# Build the site (includes pre-rendering)
npm run build

# The /dist folder now contains pre-rendered HTML files
```

## Deploying to Netlify

### Option 1: Git-based deployment (Recommended)

1. Commit all changes:
   ```bash
   git add .
   git commit -m "Fix SEO with Puppeteer pre-rendering"
   git push
   ```

2. Netlify will automatically build and deploy

3. Verify in Netlify build log that you see:
   ```
   🚀 Starting Puppeteer pre-rendering...
   ✓ Local server started
   📄 Pre-rendering: /
   📄 Pre-rendering: /thjonusta
   ...
   ✅ Pre-rendering complete!
   ```

### Option 2: Manual deployment

```bash
npm run build
netlify deploy --prod
```

## Verifying SEO Content

After deployment, verify that the content is in the HTML source:

### Method 1: curl (command line)
```bash
curl https://www.gloggva.is | grep "Bókhald"
curl https://www.gloggva.is/laun | grep "Launavinnsla"
```

### Method 2: Browser
1. Visit https://www.gloggva.is
2. Right-click → **View Page Source** (NOT Inspect)
3. Search for "Bókhald með betri yfirsýn"
4. You should find this text directly in the HTML

### Method 3: Google Search Console
1. Go to URL Inspection tool
2. Enter: `https://www.gloggva.is`
3. Click "Test Live URL"
4. Click "View Crawled Page" → "HTML"
5. Verify the main content is present

## What Changed

### Before (CSR only)
```html
<div id="root"></div>
<script src="/assets/index-abc123.js"></script>
```
↳ Google sees empty HTML, content only loads after JavaScript

### After (Pre-rendered)
```html
<div id="root">
  <section class="min-h-screen">
    <h1>Bókhald með betri yfirsýn</h1>
    <p>Fagleg bókhaldsþjónusta fyrir íslensk fyrirtæki...</p>
    ...
  </section>
</div>
<script src="/assets/index-abc123.js"></script>
```
↳ Google sees full HTML content immediately, JavaScript still works for interactivity

## Files Changed

- `/scripts/prerender-puppeteer.mjs` - New pre-rendering script
- `/package.json` - Updated postbuild script
- `/public/robots.txt` - SEO crawling instructions
- `/public/sitemap.xml` - Full sitemap with all routes
- `/public/_redirects` - Netlify SPA routing (already configured)
- `/public/_headers` - Security and caching headers (already configured)

## Troubleshooting

### Pre-rendering fails during build

Check Netlify build log. If you see errors about Puppeteer:

1. Add this to `netlify.toml` (create if doesn't exist):
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [build.environment]
     PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = "true"
     PUPPETEER_EXECUTABLE_PATH = "/usr/bin/chromium-browser"
   ```

2. Or use the fallback pre-render script:
   ```bash
   # In package.json, change postbuild to:
   "postbuild": "node scripts/prerender.mjs"
   ```

### Content still not showing in View Source

1. Clear Netlify cache: **Deploys → Trigger Deploy → Clear cache and deploy**
2. Wait 2-3 minutes for CDN to update
3. Test in incognito mode or different browser
4. Check that build log shows pre-rendering succeeded

### Routes not working (404 errors)

Verify `/public/_redirects` contains:
```
/*    /index.html   200
```

## Next Steps

After deployment:

1. ✅ Verify content in View Source
2. ✅ Submit sitemap to Google Search Console: `https://www.gloggva.is/sitemap.xml`
3. ✅ Request re-indexing for key pages
4. ✅ Monitor Google Search Console for crawl errors
5. ✅ Check Core Web Vitals and page speed
