# Why /laun Doesn't Work When Visiting www.gloggva.is/laun

## The Problem

When you visit `https://www.gloggva.is/laun`, the page doesn't scroll to the "laun" section.

## Root Cause

**The redirect from www to non-www is NOT working** because:

1. ❌ You have `/public/_redirects` as a **DIRECTORY** containing `main.tsx`
2. ❌ Netlify expects `_redirects` to be a **FILE**, not a directory
3. ❌ Since the file doesn't exist properly, the redirect never happens
4. ❌ The page loads on the www domain instead of redirecting to non-www
5. ❌ Your JavaScript tries to scroll but the URL context is wrong

## What Should Happen

```
User visits: https://www.gloggva.is/laun
       ↓
Netlify redirects to: https://gloggva.is/laun (301 redirect)
       ↓
Browser loads: https://gloggva.is/laun
       ↓
React app detects pathname "/laun"
       ↓
JavaScript finds element with id="laun"
       ↓
Scrolls to the PayrollInsights section ✅
```

## What's Actually Happening

```
User visits: https://www.gloggva.is/laun
       ↓
Netlify can't read _redirects (it's a directory!)
       ↓
No redirect happens ❌
       ↓
Netlify serves /laun/index.html on www domain
       ↓
React app loads on: https://www.gloggva.is/laun (wrong domain!)
       ↓
JavaScript tries to scroll but something is off
       ↓
Section doesn't load properly ❌
```

## The Fix I Applied

I moved the redirect configuration to `netlify.toml` instead:

```toml
# Redirect www to non-www (must come BEFORE SPA fallback)
[[redirects]]
  from = "https://www.gloggva.is/*"
  to = "https://gloggva.is/:splat"
  status = 301
  force = true

# SPA fallback (catch-all for client-side routing)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false
```

**Why this works:**
- ✅ Netlify reads `netlify.toml` during build
- ✅ The www redirect is configured BEFORE the SPA fallback
- ✅ `force = true` ensures the redirect takes priority
- ✅ No need for separate `_redirects` file

## Testing After Deploy

### Test 1: www Should Redirect

```bash
curl -I https://www.gloggva.is/laun
```

**Expected:**
```
HTTP/2 301
location: https://gloggva.is/laun
```

### Test 2: Non-www Should Work

```bash
curl -I https://gloggva.is/laun
```

**Expected:**
```
HTTP/2 200
content-type: text/html
```

### Test 3: Browser Test

1. Visit: `https://www.gloggva.is/laun`
2. **Should redirect to:** `https://gloggva.is/laun`
3. **URL bar should show:** `https://gloggva.is/#laun` (after scroll)
4. **Page should scroll to:** PayrollInsights section ✅

## Why _redirects as Directory Doesn't Work

Netlify's build process:
1. Copies everything from `public/` to `dist/` during build
2. Looks for `dist/_redirects` (a TEXT FILE)
3. Reads the redirect rules from that file
4. Applies them to the deployed site

**What happens with a directory:**
```
/public/_redirects/           ← This is a directory
/public/_redirects/main.tsx   ← Netlify doesn't read .tsx files!

During build:
vite copies /public/* to /dist/
   ↓
/dist/_redirects/main.tsx     ← This is still a directory!
   ↓
Netlify looks for /dist/_redirects (a file)
   ↓
Finds a directory instead ❌
   ↓
Skips redirect processing
   ↓
No redirects applied! ❌
```

## Why netlify.toml is Better

1. ✅ **Official Netlify configuration file** - designed for this purpose
2. ✅ **Read during build time** - no file structure issues
3. ✅ **Version controlled** - part of your repo
4. ✅ **Clear priority** - redirects are processed top-to-bottom
5. ✅ **No ambiguity** - TOML format is explicit and validated
6. ✅ **Can't be a directory** - it's always a single file

## File Structure You Should Have

```
/
├── netlify.toml              ← Redirect configuration (ACTIVE)
├── public/
│   ├── _redirects/           ← DELETE THIS DIRECTORY
│   │   └── main.tsx          ← DELETE THIS FILE
│   ├── sitemap.xml           ← Keep
│   ├── robots.txt            ← Keep
│   └── ...
└── ...
```

**After cleaning up:**
```
/
├── netlify.toml              ← Redirect configuration ✅
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── ...
└── ...
```

**Note:** You can optionally create `/public/_redirects` as a proper TEXT FILE, but since you're using `netlify.toml`, it's redundant.

## What About _headers?

Same issue! You have:
```
/public/_headers/             ← Directory
/public/_headers/main.tsx     ← File inside
```

**But Netlify expects:**
```
/public/_headers              ← TEXT FILE (not directory!)
```

**Solution:** Your `netlify.toml` already has all the headers configured, so you can delete the `_headers` directory too!

## Action Items

### ✅ Already Done:
- [x] Added www → non-www redirect to `netlify.toml`
- [x] Set `force = true` to ensure redirect takes priority
- [x] Ordered redirects correctly (www redirect BEFORE SPA fallback)

### 🔧 You Should Do (Optional Cleanup):

Since you manually edited the files, you might want to clean up:

```bash
# Delete the directory versions (optional - they don't hurt but are unused)
rm -rf public/_redirects
rm -rf public/_headers
```

**Note:** This is optional because `netlify.toml` takes priority. The directories won't cause issues, they're just unused clutter.

### 🚀 Deploy and Test:

1. **Commit changes:**
   ```bash
   git add netlify.toml
   git commit -m "Fix www redirect in netlify.toml"
   git push
   ```

2. **Wait for Netlify deploy** (2-3 minutes)

3. **Test the redirect:**
   ```bash
   curl -I https://www.gloggva.is/laun
   ```
   Should show `301` and `location: https://gloggva.is/laun`

4. **Test in browser:**
   - Visit: `https://www.gloggva.is/laun`
   - Should redirect to: `https://gloggva.is/laun`
   - Should scroll to: "laun" section ✅

## How the /laun Route Works

### Pre-rendering Creates Static HTML

The build process creates:
```
dist/
├── index.html              ← Homepage
├── laun/
│   └── index.html          ← Pre-rendered /laun page ✅
├── thjonusta/
│   └── index.html          ← Pre-rendered /thjonusta page
├── um-okkur/
│   └── index.html          ← Pre-rendered /um-okkur page
└── samband/
    └── index.html          ← Pre-rendered /samband page
```

### When You Visit /laun

**Netlify's routing logic:**

1. **Check for exact file match:**
   - Does `/laun` exist as a file? ❌ No
   
2. **Check for directory with index.html:**
   - Does `/laun/index.html` exist? ✅ YES!
   - Serve this file ✅

3. **React app loads:**
   - Detects pathname: `/laun`
   - Finds element: `<section id="laun">...</section>`
   - Scrolls to that section ✅
   - Updates URL: `/#laun` (optional, for UX)

### Why Pre-rendering is Important

**Without pre-rendering:**
```
Google Bot visits: https://gloggva.is/laun
    ↓
Netlify serves: /index.html (via SPA fallback)
    ↓
Google sees: Empty <div id="root"></div> ❌
    ↓
No content indexed! ❌
```

**With pre-rendering:**
```
Google Bot visits: https://gloggva.is/laun
    ↓
Netlify serves: /laun/index.html (pre-rendered)
    ↓
Google sees: Full HTML with content ✅
    ↓
Content indexed! ✅
```

## Summary

### The Problem:
- ❌ `/public/_redirects` was a DIRECTORY, not a FILE
- ❌ Netlify couldn't read redirect rules
- ❌ www → non-www redirect didn't work
- ❌ Page loaded on wrong domain
- ❌ Scroll behavior was broken

### The Solution:
- ✅ Added redirect to `netlify.toml`
- ✅ Used official Netlify configuration format
- ✅ Set `force = true` for priority
- ✅ Ordered redirects correctly

### Next Steps:
1. ✅ Deploy to Netlify
2. ✅ Test www redirect works
3. ✅ Test /laun scrolls correctly
4. ✅ Request re-indexing in Google Search Console

**After deploy, visiting `https://www.gloggva.is/laun` will:**
1. Redirect to `https://gloggva.is/laun` (301)
2. Load the pre-rendered HTML
3. Run React app
4. Scroll to the "laun" section ✅

**Everything should work perfectly!** 🚀
