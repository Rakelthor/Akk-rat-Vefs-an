# Debug Scroll to Section Issue

## What to Test After Deploy

### Test 1: Direct Link
Visit: `https://www.gloggva.is/laun`

**Expected:**
1. ✅ Redirects to `https://gloggva.is/laun` (301)
2. ✅ Page loads
3. ✅ Scrolls to "Greining launaþróunar" section
4. ✅ URL changes to `https://gloggva.is/#laun`

### Test 2: Check Browser Console

Open Developer Tools (F12) and visit `https://www.gloggva.is/laun`

**Look for these console logs:**

```
Navigation check: { pathname: '/laun', hash: '', targetId: 'laun' }
Scroll attempt: 1 of 10
Looking for element with ID: laun Found: true
Scrolling to: laun Position: 850
Successfully scrolled to section!
```

**If you see "Found: false":**
- The element doesn't exist (unlikely, we checked)

**If you see "Found: true" but no scroll:**
- The scroll calculation might be wrong

**If you don't see any logs:**
- JavaScript might not be loading

---

## Current Changes Made

### ✅ Updated `/src/app/App.tsx`

**Improvements:**
1. Now handles both `/laun` (path) and `/#laun` (hash) navigation
2. Checks hash FIRST, then falls back to pathname
3. Added `hashchange` event listener for in-page navigation
4. Better logging for debugging

**How it works:**
```javascript
// Check hash first
let targetId = window.location.hash.slice(1); // '#laun' → 'laun'

// If no hash, check pathname
if (!targetId) {
  const path = window.location.pathname.slice(1); // '/laun' → 'laun'
  targetId = path;
}

// Scroll to element with that ID
document.getElementById(targetId); // id="laun"
```

---

## What Could Still Be Wrong?

### Issue 1: Pre-rendered HTML Position

**Problem:** The pre-rendered `/laun/index.html` might already load at the correct scroll position, so the JavaScript scroll doesn't happen.

**Test:** View page source when visiting `gloggva.is/laun` - does the HTML contain the full PayrollInsights section?

**Fix (if needed):** Make the scroll instant on first load:
```javascript
behavior: 'instant' // instead of 'smooth'
```

### Issue 2: Timing

**Problem:** React hasn't hydrated yet when scroll tries to happen.

**Current solution:** Already implemented! We retry up to 10 times with increasing delays.

### Issue 3: Redirect Preserves Scroll Position

**Problem:** The redirect might preserve the scroll position (top of page).

**Test:** Check if you're starting at the top or somewhere else.

**Fix:** Force scroll to happen AFTER redirect completes.

---

## Next Steps

### 1. Deploy the Updated Code

```bash
git add src/app/App.tsx
git commit -m "Improve scroll navigation for path-based routes"
git push
```

### 2. Test in Browser

1. Clear cache (Ctrl+Shift+Delete → Cached images and files)
2. Open **Incognito/Private** window
3. Open **Developer Tools** (F12)
4. Go to **Console** tab
5. Visit: `https://www.gloggva.is/laun`
6. **Check:**
   - Did it redirect?
   - Did it scroll?
   - What logs do you see?

### 3. Report Back

**Tell me:**
- ✅ or ❌ Redirect works (www → non-www)
- ✅ or ❌ Scroll to section works
- 📋 Copy/paste console logs

---

## Additional Tests

### Test All Routes:

1. `https://www.gloggva.is/thjonusta` → Should scroll to "Þjónusta okkar"
2. `https://www.gloggva.is/laun` → Should scroll to "Greining launaþróunar"
3. `https://www.gloggva.is/um-okkur` → Should scroll to "Um Glöggu"
4. `https://www.gloggva.is/samband` → Should scroll to "Hafðu samband"

### Test Hash Navigation (Should Already Work):

1. `https://gloggva.is/#thjonusta` → Should scroll to services
2. `https://gloggva.is/#laun` → Should scroll to payroll
3. `https://gloggva.is/#um-okkur` → Should scroll to about
4. `https://gloggva.is/#samband` → Should scroll to contact

---

## If It Still Doesn't Work

### Option A: Use Client-Side Redirect Instead

Change `_redirects` to:
```
https://www.gloggva.is/* https://gloggva.is/:splat 301!
```

To:
```
https://www.gloggva.is/* https://gloggva.is/#:splat 301!
```

This would redirect `www.gloggva.is/laun` to `gloggva.is/#laun` (with hash).

**Downside:** URL looks different, but scroll would definitely work.

### Option B: Add Delay

Increase the initial delay in App.tsx:
```javascript
setTimeout(tryScroll, 500); // Instead of 50ms
```

**Reason:** Give more time for page to fully load.

### Option C: Force Instant Scroll on First Load

Change scroll behavior:
```javascript
window.scrollTo({
  top: offsetPosition,
  behavior: window.scrollY === 0 ? 'instant' : 'smooth'
});
```

**Reason:** If page just loaded, scroll instantly instead of smoothly.

---

## Deploy This Now

```bash
git add src/app/App.tsx
git commit -m "Improve path-based scroll navigation"
git push
```

Then test and report what you see in the console! 🚀
