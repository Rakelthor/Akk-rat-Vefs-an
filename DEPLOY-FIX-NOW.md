# 🚀 Deploy This Fix NOW

## What I Fixed

✅ **Added www → non-www redirect to `netlify.toml`**

The problem was that `/public/_redirects` is a directory (not a file), so Netlify couldn't read your redirect rules.

I moved the redirect to `netlify.toml` which is the official Netlify configuration file.

---

## Files Changed

### 1. `/netlify.toml` (UPDATED)

**Added this redirect:**
```toml
# Redirect www to non-www (must come BEFORE SPA fallback)
[[redirects]]
  from = "https://www.gloggva.is/*"
  to = "https://gloggva.is/:splat"
  status = 301
  force = true
```

**Now all traffic from `www.gloggva.is` will redirect to `gloggva.is` ✅**

### 2. `/public/sitemap.xml` (UPDATED)

**Changed all URLs from:**
```xml
<loc>https://www.gloggva.is/laun</loc>
```

**To:**
```xml
<loc>https://gloggva.is/laun</loc>
```

**Updated `lastmod` to `2026-04-19` ✅**

---

## Deploy Steps

### 1. Commit and Push (NOW)

```bash
git add netlify.toml public/sitemap.xml
git commit -m "Fix www redirect - moved to netlify.toml"
git push
```

### 2. Wait for Netlify Deploy (2-3 minutes)

- Go to: https://app.netlify.com/
- Watch the deploy log
- Wait for "Published" status ✅

### 3. Test the Redirect (After Deploy)

**Test in terminal:**
```bash
curl -I https://www.gloggva.is/laun
```

**Expected response:**
```
HTTP/2 301
location: https://gloggva.is/laun
```

**If you see `301` and correct `location`, it's working!** ✅

### 4. Test in Browser

1. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Visit: `https://www.gloggva.is/laun`
3. **Should redirect to:** `https://gloggva.is/laun`
4. **Should scroll to:** "Greining launaþróunar" section ✅
5. **URL should update to:** `https://gloggva.is/#laun`

---

## What This Fixes

### ✅ Before (Broken):

```
User: https://www.gloggva.is/laun
  ↓
❌ No redirect (Netlify can't read _redirects directory)
  ↓
❌ Page loads on www domain
  ↓
❌ Scroll behavior doesn't work properly
```

### ✅ After (Fixed):

```
User: https://www.gloggva.is/laun
  ↓
✅ 301 Redirect to https://gloggva.is/laun
  ↓
✅ Pre-rendered HTML loads
  ↓
✅ React detects /laun path
  ↓
✅ Scrolls to id="laun" section
  ↓
✅ URL updates to /#laun
```

---

## Test All Routes

After deploy, test these URLs:

| Test | URL | Expected Result |
|------|-----|-----------------|
| 1 | `https://www.gloggva.is/` | Redirects to `https://gloggva.is/` |
| 2 | `https://www.gloggva.is/laun` | Redirects to `https://gloggva.is/laun` → scrolls to "laun" section |
| 3 | `https://www.gloggva.is/thjonusta` | Redirects to `https://gloggva.is/thjonusta` → scrolls to services |
| 4 | `https://www.gloggva.is/um-okkur` | Redirects to `https://gloggva.is/um-okkur` → scrolls to about |
| 5 | `https://www.gloggva.is/samband` | Redirects to `https://gloggva.is/samband` → scrolls to contact |
| 6 | `http://gloggva.is/laun` | Redirects to `https://gloggva.is/laun` (HTTP → HTTPS) |
| 7 | `http://www.gloggva.is/laun` | Redirects to `https://gloggva.is/laun` (HTTP+www → HTTPS) |

**All should end up at `https://gloggva.is/[path]` (non-www, HTTPS) ✅**

---

## Google Search Console Next Steps

After the redirect is working:

### 1. Request Re-Indexing (ONLY Non-WWW URLs)

Request indexing for these 5 URLs:
```
https://gloggva.is/
https://gloggva.is/thjonusta
https://gloggva.is/laun
https://gloggva.is/um-okkur
https://gloggva.is/samband
```

**Do NOT request for www URLs** - they redirect to non-www automatically!

### 2. Wait for Google to Re-Crawl (1-2 days)

- Google will see the new pre-rendered HTML
- "Redirect error" will disappear
- All pages will be indexed ✅

---

## Optional Cleanup

You can delete the unused `_redirects` and `_headers` directories:

```bash
rm -rf public/_redirects
rm -rf public/_headers
```

**Why?** Because `netlify.toml` already has all the configuration. These directories are unused clutter.

**Note:** This is optional - they won't cause problems, but it's cleaner without them.

---

## Troubleshooting

### Issue: Still not redirecting after deploy

**Check:**
1. Did the deploy finish? (Check Netlify dashboard)
2. Did you clear browser cache?
3. Try in incognito/private window
4. Check `curl -I https://www.gloggva.is/laun` (should show 301)

### Issue: Redirect works but scroll doesn't

**Check:**
1. Does the element exist? (Open DevTools, search for `id="laun"`)
2. Check browser console for errors
3. Make sure you're on the non-www URL (`https://gloggva.is/laun`)

### Issue: Google Search Console still shows redirect error

**Wait!** This is old data from April 17 (before the fix).
- Request re-indexing
- Wait 1-2 days
- Error will disappear ✅

---

## Summary

### What Changed:
- ✅ Added www → non-www redirect to `netlify.toml`
- ✅ Updated sitemap to use non-www URLs
- ✅ Updated lastmod dates to today (2026-04-19)

### What You Need to Do:
1. ✅ `git push` (deploy changes)
2. ✅ Wait 2-3 minutes for deploy
3. ✅ Test redirect in browser
4. ✅ Request re-indexing in Google Search Console

### Expected Result:
- ✅ All www traffic redirects to non-www
- ✅ `/laun` route works and scrolls correctly
- ✅ Google indexes non-www URLs
- ✅ "Redirect error" disappears in 1-2 days

**Everything should work after this deploy!** 🚀
