# Google Search Console Indexing Guide for Gloggva.is

## Your Canonical URL Structure

✅ **Canonical domain:** `https://gloggva.is` (without www)

### All These Redirect to the Canonical:

```
http://gloggva.is          → https://gloggva.is ✅
http://www.gloggva.is      → https://gloggva.is ✅  
https://www.gloggva.is     → https://gloggva.is ✅
```

**Only one version gets indexed:** `https://gloggva.is` ✅

---

## ❌ DO NOT Request Indexing For:

1. ❌ `http://gloggva.is` (insecure HTTP)
2. ❌ `http://www.gloggva.is` (insecure HTTP with www)
3. ❌ `https://www.gloggva.is` (www version - redirects to non-www)

**Why?** These all redirect to the canonical version. Google follows the redirects automatically.

---

## ✅ ONLY Request Indexing For:

Request indexing for these **5 URLs only** (all non-www, HTTPS):

1. ✅ `https://gloggva.is/`
2. ✅ `https://gloggva.is/thjonusta`
3. ✅ `https://gloggva.is/laun`
4. ✅ `https://gloggva.is/um-okkur`
5. ✅ `https://gloggva.is/samband`

**These are your canonical URLs that Google should index.**

---

## How to Request Indexing

### In Google Search Console:

1. Go to: https://search.google.com/search-console
2. Make sure you're viewing property: `https://gloggva.is` (or sc-domain:gloggva.is)
3. Click **"URL Inspection"** at the top
4. Enter the FULL URL with https:// and NO www:
   ```
   https://gloggva.is/laun
   ```
5. Click **"REQUEST INDEXING"**
6. Wait for confirmation
7. Repeat for all 5 URLs

### Copy-Paste Ready URLs:

```
https://gloggva.is/
https://gloggva.is/thjonusta
https://gloggva.is/laun
https://gloggva.is/um-okkur
https://gloggva.is/samband
```

---

## What Google Search Console Properties Should You Have?

You should have **ONE** of these setups:

### Option A: Domain Property (RECOMMENDED) ✅

**Property:** `sc-domain:gloggva.is`

**Covers ALL variations:**
- `http://gloggva.is`
- `https://gloggva.is`
- `http://www.gloggva.is`
- `https://www.gloggva.is`
- All subdomains

**Setup:** Requires DNS TXT record verification

### Option B: URL-Prefix Property

**Property:** `https://gloggva.is`

**Covers ONLY:**
- `https://gloggva.is` and its pages
- Does NOT include www, http, or other variations

**Setup:** Can verify via HTML file, meta tag, or DNS

---

## Current Setup Check

### Verify Your GSC Property:

1. Go to Google Search Console
2. Look at the top-left property selector
3. Which do you see?

**If you see:** `sc-domain:gloggva.is`
→ ✅ Perfect! This is a domain property (covers everything)

**If you see:** `https://gloggva.is`
→ ✅ OK! This is a URL-prefix property for non-www
→ ⚠️ But you might ALSO have `https://www.gloggva.is` property
→ You should DELETE the www property if it exists!

**If you see:** `https://www.gloggva.is`
→ ❌ Wrong! You're viewing the www property
→ Switch to the non-www property OR domain property

---

## How Redirects Work with Google

### Example: Requesting Indexing for www Version

**What you do:**
```
Request indexing for: https://www.gloggva.is/laun
```

**What Google does:**
1. 🔍 Googlebot visits: `https://www.gloggva.is/laun`
2. 🔀 Server responds: `301 Redirect to https://gloggva.is/laun`
3. 🔍 Googlebot follows redirect to: `https://gloggva.is/laun`
4. ✅ Googlebot indexes: `https://gloggva.is/laun` (canonical)
5. ❌ Googlebot ignores: `https://www.gloggva.is/laun` (redirect source)

**Result:**
- ✅ `https://gloggva.is/laun` gets indexed
- ❌ `https://www.gloggva.is/laun` does NOT get indexed
- ✅ This is correct behavior!

**Conclusion:**  
It doesn't matter which version you request indexing for - Google will always index the canonical (after following redirects).

**But best practice:**  
Request indexing for the canonical version directly to avoid confusion!

---

## Common Questions

### Q: Should I request indexing for both http and https?

**A: ❌ No!** Only request indexing for HTTPS.

- HTTP automatically redirects to HTTPS (Netlify does this)
- Google follows the redirect and indexes HTTPS
- Requesting HTTP indexing is redundant

### Q: Should I request indexing for both www and non-www?

**A: ❌ No!** Only request indexing for your canonical version.

Since you chose non-www as canonical:
- ✅ Request indexing for: `https://gloggva.is/laun`
- ❌ Don't request for: `https://www.gloggva.is/laun` (redirects to non-www)

### Q: What if I have multiple GSC properties (www and non-www)?

**A: You should consolidate!**

**Recommended setup:**

1. **Keep:** Domain property (`sc-domain:gloggva.is`)
   - OR keep URL-prefix for canonical (`https://gloggva.is`)

2. **Delete:** URL-prefix for www (`https://www.gloggva.is`)
   - This just causes confusion
   - All www traffic is redirected anyway

**How to delete:**

1. Go to Google Search Console
2. Click property selector (top-left)
3. Click ⚙️ icon next to the www property
4. Select "Remove property"

### Q: Will deleting the www property hurt my rankings?

**A: ❌ No!** 

- Google only indexes the canonical version anyway
- Deleting the www property just removes a monitoring view
- Your actual rankings are tied to the canonical URLs, not the GSC property

### Q: Can I have both domain property AND URL-prefix property?

**A: Yes, but unnecessary.**

- Domain property already includes everything
- Having both is redundant
- Most people just use domain property

---

## Your Current _redirects File

Located at: `/public/_redirects`

```
# Redirect www to non-www for gloggva.is
https://www.gloggva.is/* https://gloggva.is/:splat 301!

# SPA fallback
/* /index.html 200
```

**What this does:**

1. **Line 2:** Redirects ALL www traffic to non-www with 301 (permanent)
   - `https://www.gloggva.is/` → `https://gloggva.is/`
   - `https://www.gloggva.is/laun` → `https://gloggva.is/laun`
   - The `!` forces this rule to win over others

2. **Line 5:** SPA fallback (serves index.html for client-side routing)
   - But pre-rendered pages (`/laun/index.html`) are served BEFORE this rule
   - Only catches routes that don't have static files

**This is correct!** ✅

---

## Your Current Sitemap

Located at: `/public/sitemap.xml`

**All URLs use non-www canonical:**

```xml
<loc>https://gloggva.is/</loc>
<loc>https://gloggva.is/thjonusta</loc>
<loc>https://gloggva.is/laun</loc>
<loc>https://gloggva.is/um-okkur</loc>
<loc>https://gloggva.is/samband</loc>
```

**This is correct!** ✅

Google will discover and index these URLs from the sitemap.

---

## Testing Your Setup

### Test 1: Verify Redirects Work

Open your browser and try these URLs:

1. `http://gloggva.is/laun`
   - Should redirect to → `https://gloggva.is/laun` ✅

2. `https://www.gloggva.is/laun`
   - Should redirect to → `https://gloggva.is/laun` ✅

3. `http://www.gloggva.is/laun`
   - Should redirect to → `https://gloggva.is/laun` ✅

**All should end up at:** `https://gloggva.is/laun` (non-www, HTTPS)

### Test 2: Check HTTP Response Headers

Use curl or browser DevTools:

```bash
curl -I https://www.gloggva.is/laun
```

**Expected response:**
```
HTTP/2 301
location: https://gloggva.is/laun
```

**If you see `301` and correct `location`:** ✅ Working!

### Test 3: Verify Canonical Tag

1. Visit: `https://gloggva.is/laun`
2. View Page Source
3. Search for: `<link rel="canonical"`

**Expected:**
```html
<link rel="canonical" href="https://gloggva.is/laun" />
```

**Should NOT have www!**

---

## Action Items - Do This Today

### ✅ Step 1: Verify Redirects (5 minutes)

Test all 4 URL variations in your browser:
- [ ] `http://gloggva.is` → redirects to `https://gloggva.is`
- [ ] `https://www.gloggva.is` → redirects to `https://gloggva.is`
- [ ] `http://www.gloggva.is` → redirects to `https://gloggva.is`
- [ ] `https://gloggva.is` → loads normally (canonical) ✅

### ✅ Step 2: Check GSC Property (2 minutes)

1. Open Google Search Console
2. Look at property selector (top-left)
3. Note which property you have:
   - [ ] `sc-domain:gloggva.is` (domain property)
   - [ ] `https://gloggva.is` (URL-prefix, non-www)
   - [ ] `https://www.gloggva.is` (URL-prefix, www)

### ✅ Step 3: Request Indexing (10 minutes)

**In the CORRECT property (non-www or domain):**

Request indexing for these 5 URLs:
- [ ] `https://gloggva.is/`
- [ ] `https://gloggva.is/thjonusta`
- [ ] `https://gloggva.is/laun`
- [ ] `https://gloggva.is/um-okkur`
- [ ] `https://gloggva.is/samband`

**Use the exact URLs above (no www, with https)!**

### ✅ Step 4: Submit Sitemap (2 minutes)

1. In Google Search Console
2. Go to **Sitemaps** (left sidebar)
3. Check if sitemap is submitted
4. If not, enter: `sitemap.xml`
5. Click **Submit**

### ✅ Step 5: Wait for Re-Index (1-2 days)

- Google will re-crawl your pages
- "Redirect error" should disappear
- Pages should show as "Indexed" in Coverage report

---

## Summary

### Your Canonical Setup ✅

| URL | Status | Indexed? |
|-----|--------|----------|
| `https://gloggva.is` | ✅ Canonical | YES |
| `https://www.gloggva.is` | 🔀 301 → non-www | NO |
| `http://gloggva.is` | 🔀 301 → HTTPS | NO |
| `http://www.gloggva.is` | 🔀 301 → HTTPS non-www | NO |

**Only the canonical version should appear in Google search results!**

### What to Request Indexing For

**✅ Request indexing for (5 URLs):**
```
https://gloggva.is/
https://gloggva.is/thjonusta
https://gloggva.is/laun
https://gloggva.is/um-okkur
https://gloggva.is/samband
```

**❌ Do NOT request for:**
- Any `http://` URLs (redirect to HTTPS automatically)
- Any `www.` URLs (redirect to non-www via _redirects)

### Files Updated Today

1. ✅ `/public/_redirects` - Redirects www to non-www
2. ✅ `/public/sitemap.xml` - Uses non-www URLs
3. ✅ `lastmod` updated to 2026-04-19

### Next Steps

1. **NOW:** Verify redirects work in browser
2. **NOW:** Request indexing for 5 canonical URLs
3. **DAY 1-2:** Google re-crawls pages
4. **DAY 3-7:** "Redirect error" disappears, pages indexed ✅

---

**Everything is set up correctly! Just request indexing for the non-www HTTPS URLs and you're done.** 🚀
