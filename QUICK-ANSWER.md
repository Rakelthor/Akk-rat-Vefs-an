# Quick Answer: Should I Request Indexing for HTTP?

## The Question

> "Should I also request indexing for http://www.gloggva.is not just for https://www.gloggva.is?"

## The Answer

### ❌ NO - ONLY request indexing for HTTPS (without www)

**Request indexing for these 5 URLs ONLY:**

```
https://gloggva.is/
https://gloggva.is/thjonusta
https://gloggva.is/laun
https://gloggva.is/um-okkur
https://gloggva.is/samband
```

**Do NOT request indexing for:**
- ❌ `http://gloggva.is` (HTTP without www)
- ❌ `http://www.gloggva.is` (HTTP with www)
- ❌ `https://www.gloggva.is` (HTTPS with www)

---

## Why?

### 1. Your Canonical is Non-WWW HTTPS

You've set up:
```
https://www.gloggva.is  →  redirects to  →  https://gloggva.is ✅
```

**This means:**
- ✅ `https://gloggva.is` = Your canonical (official) URL
- 🔀 `https://www.gloggva.is` = Redirects to canonical
- 🔀 `http://` versions = Redirect to HTTPS (Netlify automatic)

### 2. Google Only Indexes Canonical URLs

When Google crawls:
```
User requests indexing for: http://www.gloggva.is/laun

Google sees:
1. http://www.gloggva.is/laun
2. ↓ (redirects via 301)
3. https://www.gloggva.is/laun
4. ↓ (redirects via 301)  
5. https://gloggva.is/laun ✅

Google indexes: https://gloggva.is/laun
Google ignores: All the redirect sources
```

**Result:** Only `https://gloggva.is/laun` appears in search results ✅

### 3. It Doesn't Hurt, But It's Redundant

**Technically:**
- You COULD request indexing for `http://www.gloggva.is/laun`
- Google would follow redirects and index `https://gloggva.is/laun`
- End result is the same

**But best practice:**
- ✅ Request indexing for the canonical URL directly
- ✅ Clearer and more explicit
- ✅ Less confusing in Search Console reports

---

## What Happens in Each Scenario

### Scenario A: Request Indexing for Canonical (RECOMMENDED)

**You request:**
```
https://gloggva.is/laun
```

**Google does:**
1. ✅ Crawls `https://gloggva.is/laun`
2. ✅ Sees content (pre-rendered HTML)
3. ✅ Indexes `https://gloggva.is/laun`

**Result:** ✅ Clean, direct indexing

---

### Scenario B: Request Indexing for www Version

**You request:**
```
https://www.gloggva.is/laun
```

**Google does:**
1. 🔍 Crawls `https://www.gloggva.is/laun`
2. 🔀 Sees `301 redirect to https://gloggva.is/laun`
3. 🔍 Follows redirect
4. ✅ Indexes `https://gloggva.is/laun` (canonical)

**Result:** ✅ Same outcome, but via redirect

---

### Scenario C: Request Indexing for HTTP Version

**You request:**
```
http://www.gloggva.is/laun
```

**Google does:**
1. 🔍 Crawls `http://www.gloggva.is/laun`
2. 🔀 Sees redirect to HTTPS (Netlify automatic)
3. 🔍 Follows to `https://www.gloggva.is/laun`
4. 🔀 Sees redirect to non-www (your _redirects)
5. 🔍 Follows to `https://gloggva.is/laun`
6. ✅ Indexes `https://gloggva.is/laun` (canonical)

**Result:** ✅ Same outcome, but via 2 redirects (inefficient)

---

## Recommendation

### ✅ Do This (BEST):

**Request indexing for canonical URLs only:**
```
https://gloggva.is/
https://gloggva.is/thjonusta
https://gloggva.is/laun
https://gloggva.is/um-okkur
https://gloggva.is/samband
```

**Why?**
- ✅ Clear and explicit
- ✅ Matches your sitemap
- ✅ Matches your canonical tags
- ✅ No redirect hops
- ✅ Easier to track in Search Console

### ⚠️ You Could Do This (BUT DON'T):

**Request indexing for ALL variations:**
```
https://gloggva.is/laun
https://www.gloggva.is/laun
http://gloggva.is/laun
http://www.gloggva.is/laun
```

**Why this is not recommended:**
- ⚠️ Redundant (all index the same canonical URL)
- ⚠️ Wastes your time (4x the work)
- ⚠️ Wastes Google's crawl budget
- ⚠️ More confusing in reports
- ⚠️ No SEO benefit

**End result is the same anyway!**

---

## The Bottom Line

### Your Setup:

```
CANONICAL: https://gloggva.is ✅

All these redirect to canonical:
├─ https://www.gloggva.is → (301) → https://gloggva.is
├─ http://gloggva.is      → (301) → https://gloggva.is
└─ http://www.gloggva.is  → (301) → https://gloggva.is
```

### What to Do:

**✅ Request indexing for:** `https://gloggva.is/laun` (and 4 other pages)

**❌ Do NOT request for:** `http://` or `www.` versions

### Why?

**Because Google:**
1. Follows redirects automatically
2. Only indexes the canonical URL
3. Ignores redirect sources

**Requesting indexing for redirects is redundant!**

---

## TL;DR

**Question:** Should I request indexing for HTTP and www versions?

**Answer:** ❌ NO

**Do this instead:**

1. ✅ Request indexing for `https://gloggva.is/laun` (non-www, HTTPS)
2. ✅ Repeat for 4 other pages
3. ✅ That's it!

**Google will automatically handle:**
- ✅ HTTP → HTTPS redirects (Netlify does this)
- ✅ www → non-www redirects (your _redirects does this)
- ✅ Indexing the canonical version

**You don't need to do anything else!** 🚀

---

## Related Files

📄 `/INDEXING-GUIDE.md` - Complete guide to indexing strategy  
📄 `/TROUBLESHOOT-NOW.md` - Fix "Redirect error" in GSC  
📄 `/FIX-REDIRECT-ERROR.md` - Detailed explanation of redirect errors  
