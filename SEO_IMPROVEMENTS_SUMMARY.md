# 🎯 SEO Improvements Summary - Glöggva.is

**Dagsetning:** 14. apríl 2026  
**Vandamál:** Glöggva.is birtist EKKI þegar leitað er að "bókhald" á Google  
**Staða:** ✅ Indexed (en ekki ranking fyrir generic keywords)

---

## ✅ Útfærðar umbætur:

### 1. **Meta Tags & Title Optimization**
- ✅ Uppfært `<title>` með keywords: "Bókhald, Launavinnsla og Skattskil á Íslandi"
- ✅ Bætt við 30+ viðbótar keywords í meta tags:
  - `bókhald`, `bókhald ísland`, `bókhaldsstofa`, `bókhaldsfyrirtæki`
  - `bókhald Reykjavík`, `bókhaldsstofa Reykjavík`
  - `launavinnsla`, `ársreikningar`, `VSK skil`, `framtöl`, `skattskil`
- ✅ Lengri og betri meta description (160 chars)

### 2. **Structured Data (Schema.org)**
Bætt við 4 nýjum structured data blocks:

#### a) FAQ Schema ✅
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    "Hvað kostar bókhald á Íslandi?",
    "Hvað felst í bókhaldsþjónustu?",
    "Hvar er Glöggva staðsett?",
    "Hvernig byrja ég með Glöggva?"
  ]
}
```
**Ávinningur:** Rich snippets í Google search með FAQ dropdown

#### b) Breadcrumb Schema ✅
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    "Heim → Bókhaldsþjónusta → Um okkur → Samband"
  ]
}
```
**Ávinningur:** Breadcrumb navigation í Google results

#### c) AccountingService Schema ✅ (Þegar til staðar, en optimized)
```json
{
  "@type": "AccountingService",
  "serviceType": [
    "Bókhald", "Launavinnsla", "Ársreikningar",
    "Skattskil", "VSK skil", "Fjármálaráðgjöf"
  ]
}
```

#### d) Organization Schema ✅
```json
{
  "@type": "Organization",
  "contactPoint": {
    "telephone": "+354-772-5040",
    "areaServed": "IS",
    "availableLanguage": ["Icelandic", "English"]
  }
}
```

### 3. **Content Optimization**

#### a) About Section - H2 Heading ✅
**Fyrir:**
```html
<h2>Um okkur</h2>
```

**Eftir:**
```html
<h2>Glöggva ehf. - Bókhaldsþjónusta á Íslandi</h2>
<p>Fagleg bókhaldsstofa í Reykjavík með áherslu á rafrænt bókhald, launavinnslu og persónulega þjónustu</p>
```

**Ávinningur:** 
- Keywords í H2 tags
- LSI keywords: "bókhaldsstofa", "rafrænt bókhald", "launavinnsla"

#### b) Image Alt Tags ✅
**Fyrir:**
```html
<img alt="Rakel Þórhallsdóttir - Founder">
```

**Eftir:**
```html
<img alt="Rakel Þórhallsdóttir - Bókari og eigandi Glöggva ehf. bókhaldsþjónusta">
```

### 4. **Sitemap.xml Update**
- ✅ Uppfært `lastmod` til 2026-04-14
- ✅ Breytt `changefreq` í "weekly" (var "monthly")
- ✅ Hækkað priority fyrir `/thjonusta` í 0.9

### 5. **Favicon**
- ✅ Búið til `/public/favicon.svg` með Glöggva "G" logo
- ⏳ **TODO:** Búa til `favicon.ico` (sjá `/FAVICON_INSTRUCTIONS.md`)

### 6. **Technical SEO**
- ✅ Fjarlægt Analytics Debug Panel (óþarfa JavaScript)
- ✅ Hreinsað console errors
- ✅ Canonical URLs til staðar
- ✅ hreflang tags fyrir íslenska/enska
- ✅ Mobile-friendly (responsive design)
- ✅ HTTPS enabled (Netlify)

---

## 📊 Keyword Strategy:

### Primary Keywords (High Priority):
1. **bókhald** - Generic (mjög samkeppnishæft)
2. **bókhald ísland** - Geographic
3. **bókhaldsstofa** - Service type
4. **bókhald Reykjavík** - Local

### Secondary Keywords (Medium Priority):
5. launavinnsla
6. ársreikningar
7. skattskil
8. VSK skil
9. framtöl
10. bókhaldsþjónusta

### Long-Tail Keywords (Easier to rank):
11. bókhaldsstofa Reykjavík
12. bókhald fyrir lítil fyrirtæki
13. rafrænt bókhald ísland
14. skipta um bókara
15. bókhaldsráðgjöf reykjavík

---

## 📈 Væntanlegur árangur:

### Tímalína:

| Tímabil | Vænt ranking | Ástæða |
|---------|--------------|--------|
| **1-2 vikur** | Indexing | Google indexar nýjar meta tags og structured data |
| **2-4 vikur** | Long-tail keywords (pos. 20-50) | "bókhaldsstofa Reykjavík", "rafrænt bókhald" |
| **1-3 mánuði** | Medium keywords (pos. 10-30) | "bókhald Reykjavík", "launavinnsla ísland" |
| **3-6 mánuði** | Primary keywords (pos. 5-20) | "bókhald", "bókhaldsstofa" |
| **6-12 mánuði** | Top 10 | Með consistent content og backlinks |

### Forsendur fyrir árangri:
- ✅ Technical SEO í lagi
- ✅ Structured data til staðar
- ⏳ **Þarf:** Regular content updates (blog)
- ⏳ **Þarf:** Backlinks frá trusted sites (ja.is, gulalinan.is)
- ⏳ **Þarf:** Google Business Profile
- ⏳ **Þarf:** Customer reviews

---

## 🚀 Næstu skref (Recommended):

### 1. Google Search Console (PRIORITY!)
```bash
1. Farðu á: https://search.google.com/search-console
2. Bættu við "gloggva.is"
3. Verify domain ownership (DNS method)
4. Submit sitemap: https://gloggva.is/sitemap.xml
5. Request indexing fyrir homepage
```

### 2. Google Business Profile (LOCAL SEO!)
```bash
1. Farðu á: https://business.google.com
2. Claim "Glöggva ehf." profile
3. Bættu við:
   - Nákvæmri heimilisfang
   - Opnunartímum
   - Þjónustulistum
   - 5-10 myndum
4. Fáðu fyrstu 10 reviews frá viðskiptavinum
```

### 3. Backlinks (DOMAIN AUTHORITY!)
Skráðu Glöggva í:
- ✅ Google Maps (done?)
- ⏳ ja.is
- ⏳ gulalinan.is
- ⏳ visir.is/upplysing
- ⏳ RSK skattalisti (ef applicable)
- ⏳ LinkedIn company page
- ⏳ Facebook business page

### 4. Content Marketing (ORGANIC TRAFFIC!)
Búðu til blogg posts:
- "Hvernig á að skipta um bókara á Íslandi" (guide)
- "Rafrænt bókhald vs. hefðbundið bókhald" (comparison)
- "VSK skil á Íslandi - Complete Guide 2026"
- "Launavinnsla fyrir lítil fyrirtæki"
- "Ársreikningar - Hvað þarftu að vita?"

### 5. Local Citations
Gakktu úr skugga um að NAP (Name, Address, Phone) sé consistent:
```
Glöggva ehf.
[Heimilisfang]
Reykjavík, Ísland
+354 772 5040
gloggva@gloggva.is
```

Skráðu í:
- ⏳ Yelp Iceland
- ⏳ Tripadvisor (ef applicable)
- ⏳ Local directories

---

## 📞 Snarbúðin (While waiting for SEO):

### Google Ads
Þú hefur þegar sett upp Google Ads tracking!

**Keywords til að byrja með:**
```
- bókhald [Exact match]
- bókhald reykjavík [Exact match]
- bókhaldsstofa [Phrase match]
- launavinnsla [Phrase match]
- skipta um bókara [Broad match]
```

**Budget suggestion:**
- ISK 50,000 - 100,000/mán
- CPC: ISK 200-500 per click
- ~200-300 clicks/mán
- ~10-20 leads/mán (5-10% conversion rate)

---

## ✅ Checklist:

- [x] Meta tags optimized
- [x] Structured data added (FAQ, Breadcrumb)
- [x] Content optimization (H2 tags, alt tags)
- [x] Sitemap updated
- [x] favicon.svg created
- [ ] favicon.ico upload (see FAVICON_INSTRUCTIONS.md)
- [ ] Google Search Console setup
- [ ] Google Business Profile setup
- [ ] Backlinks (0/10 completed)
- [ ] Blog content (0/5 articles)
- [ ] Customer reviews (0/10 reviews)

---

## 🎯 Núverandi staða:

**Site:** https://gloggva.is  
**Indexed:** ✅ Yes (`site:gloggva.is` finnst)  
**Ranking fyrir "bókhald":** ❌ Not yet (væntilegur tími: 1-3 mán)  
**Structured Data:** ✅ AccountingService, FAQ, Breadcrumb, Organization  
**Mobile-friendly:** ✅ Yes  
**Page Speed:** ✅ Good (Netlify hosting)

---

**Næsta uppfærsla:** Í lok apríl 2026 (eftir 2-3 vikur)

**Questions?** Hafðu samband! 🚀
