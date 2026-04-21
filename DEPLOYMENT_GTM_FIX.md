# Google Tag Manager Subsection Tracking - Deployment Guide

## Problem Fixed

Google Tag Manager was showing subsections as "Not tagged":
- ❌ www.gloggva.is/laun - Not tagged
- ❌ www.gloggva.is/thjonusta - Not tagged
- ❌ www.gloggva.is/um-okkur - Not tagged
- ✅ gloggva.is/ - Tagged

## Root Causes Identified

1. **Redirect Error**: The prerender script was redirecting `/laun` → `/#laun` causing "Page not indexed: Redirect error" in Google Search Console
2. **No GTM Events**: GTM tags only fired on initial page load, not when users navigated to subsections
3. **SPA Navigation**: Client-side navigation didn't trigger GTM events

## Solutions Implemented

### 1. Fixed Netlify Redirects ✅
**Before:**
```
/laun https://gloggva.is/#laun 301!  ← Causing redirect errors
```

**After:**
```
/* /index.html 200  ← SPA fallback, no redirects
```

### 2. Added Virtual Pageview Tracking ✅
When users navigate to `/laun`, `/thjonusta`, etc., the app now:
- Pushes `virtual_pageview` event to GTM dataLayer
- Includes page path, title, and UTM parameters
- Works even if gtag hasn't fully loaded yet

### 3. Fixed gtag Initialization ✅
Added wait mechanism to ensure gtag is loaded before analytics initialize.

## Files Changed

1. ✅ `scripts/prerender-simple.mjs` - Removed hash redirects
2. ✅ `src/app/utils/analytics.ts` - Added virtual pageview tracking + gtag wait
3. ✅ `src/app/App.tsx` - Call trackVirtualPageview on navigation
4. ✅ `public/_redirects` - Fixed as proper file (not directory)

## What You Need to Do

### Step 1: Deploy to Netlify 🚀
```bash
# Push changes to GitHub
git add .
git commit -m "Fix GTM tracking for subsections + eliminate redirect errors"
git push origin main
```

Netlify will auto-deploy. Build output should show:
```
✅ Created _redirects file
✓ /               → index.html
✓ /thjonusta      → thjonusta/index.html
✓ /laun           → laun/index.html
✓ /um-okkur       → um-okkur/index.html
✓ /samband        → samband/index.html
```

### Step 2: Configure GTM (5 minutes) 🎯

Follow the instructions in `GTM_VIRTUAL_PAGEVIEW_SETUP.md`:

1. **Create Trigger**: GTM → Triggers → New
   - Name: `Virtual Pageview`
   - Type: Custom Event
   - Event name: `virtual_pageview`

2. **Update GA4 Tag**: Add the new trigger to your GA4 tags

3. **Publish**: Submit changes in GTM

### Step 3: Test (After Deployment) 🧪

1. **Test Navigation**:
   - Visit https://gloggva.is/laun
   - Open browser console
   - You should see: `Virtual pageview tracked: /laun`

2. **Test GTM**:
   - Enable GTM Preview Mode
   - Visit https://gloggva.is/laun
   - Check dataLayer for `virtual_pageview` event with:
     ```json
     {
       "event": "virtual_pageview",
       "page_path": "/laun",
       "page_title": "Glöggva - Laun",
       "page_location": "https://gloggva.is/laun"
     }
     ```

3. **Wait 24-48 hours**:
   - Google Search Console: URLs should show as indexed (no more redirect errors)
   - GTM Tag Coverage: All subsections should show as "Tagged"

## Expected Results

### Google Search Console
**Before:**
```
www.gloggva.is/laun - Page not indexed: Redirect error
```

**After (24-48 hours):**
```
gloggva.is/laun - Indexed, not submitted in sitemap
```

### GTM Tag Coverage
**Before:**
- 3 Not tagged
- 1 Tagged

**After:**
- 0 Not tagged
- 5 Tagged (/, /laun, /thjonusta, /um-okkur, /samband)

## Technical Details

### How Virtual Pageviews Work

1. User visits `https://gloggva.is/laun`
2. Netlify serves pre-rendered `/laun/index.html` (SEO content for crawlers)
3. React hydrates and takes over
4. App detects path-based navigation
5. `trackVirtualPageview('/laun', 'Glöggva - Laun')` is called
6. dataLayer.push fires → GTM receives event → Tags fire

### Why This Is Better Than Hash Navigation

- ✅ Clean URLs: `/laun` instead of `/#laun`
- ✅ No redirects: Avoids Google indexing errors
- ✅ SEO-friendly: Pre-rendered HTML for each route
- ✅ GTM tracking: Virtual pageviews tracked automatically
- ✅ Analytics: Full UTM parameter attribution

## Troubleshooting

**Problem**: Console shows "gtag function not available"
**Solution**: Fixed! Analytics now waits for gtag to load (up to 5 seconds)

**Problem**: GTM shows "Not tagged" after deployment
**Solution**: Make sure you completed Step 2 (Configure GTM trigger)

**Problem**: Google Search Console still shows redirect error
**Solution**: Wait 24-48 hours for Google to re-crawl. Use "Request Indexing" to speed up.

## Summary

✅ Eliminated redirect errors from `/laun` → `/#laun`  
✅ Added automatic GTM virtual pageview tracking  
✅ Fixed gtag initialization timing  
✅ Pre-rendered HTML for SEO (crawlers see content)  
✅ SPA navigation with proper analytics (users get smooth experience)

**Next step**: Deploy to Netlify and configure GTM trigger! 🚀
