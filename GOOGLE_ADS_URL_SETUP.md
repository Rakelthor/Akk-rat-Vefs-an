# Google Ads URL Setup Guide - Glöggva

## 📋 Yfirlit

Þessi leiðarvísir útskýrir hvernig á að setja upp Google Ads auglýsingar með réttum UTM parameters fyrir keyword tracking og conversion attribution.

---

## 🔗 URL Template Format

Fyrir allar Google Ads auglýsingar, notaðu þetta tracking template:

```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign={campaignid}&utm_term={keyword}&utm_content={creative}&gclid={gclid}
```

### ValueTrack Parameters Útskýring

- `{campaignid}` - Sjálfvirkt fyllt inn með Google Ads campaign ID
- `{keyword}` - Leitarorðið sem notandinn notaði (MIKILVÆGT fyrir tracking)
- `{creative}` - Auglýsingin sem var smellt á
- `{gclid}` - Google Click ID fyrir conversion tracking

---

## 🎯 URL Setup fyrir hverja Herferð

### Herferð 1: Bókhaldsþjónusta

**Campaign URL Template:**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=bokhaldsthjonusta&utm_term={keyword}&utm_content={creative}&gclid={gclid}
```

**Final URLs fyrir mismunandi Ad Groups:**

#### Ad Group 1.1: Bókhald Almenn
```
Final URL: https://gloggva.is/#thjonusta
Tracking Template: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=bokhaldsthjonusta_almenn&utm_term={keyword}&utm_content={creative}&gclid={gclid}#thjonusta
```

**Example Ads:**

**Ad 1 - Bókhaldsstofa (Desktop & Mobile)**
```
Headline 1: Fagleg Bókhaldsþjónusta
Headline 2: Glöggva - Betri Yfirsýn
Headline 3: Bókhald fyrir Smáfyrirtæki
Description 1: Persónuleg bókhaldsþjónusta með áherslu á yfirsýn og þjónustu. Hringdu í 772-5040.
Description 2: VSK skil, launavinnsla og ársreikningar. Sveigjanleg verðlagning.
Path 1: Bokhaldsthjonusta
Path 2: Reykjavik
Final URL: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=bokhaldsthjonusta_almenn&utm_term={keyword}&utm_content=ad1&gclid={gclid}#thjonusta
```

**Ad 2 - VSK Skil**
```
Headline 1: VSK Skil og Uppgjör
Headline 2: Hjálp með VSK
Headline 3: Glöggva Bókhaldsstofa
Description 1: Við sjáum um VSK skil og uppgjör fyrir þitt fyrirtæki. Hafðu samband í dag.
Description 2: Reynsla og fagleg þjónusta. 772-5040.
Path 1: VSK-Skil
Path 2: Bokhaldsthjonusta
Final URL: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=bokhaldsthjonusta_vsk&utm_term={keyword}&utm_content=ad2_vsk&gclid={gclid}#thjonusta
```

---

#### Ad Group 1.2: VSK & Reikningshald
```
Final URL: https://gloggva.is/#thjonusta
Tracking Template: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=bokhaldsthjonusta_vsk&utm_term={keyword}&utm_content={creative}&gclid={gclid}#thjonusta
```

---

### Herferð 2: Launavinnsla

**Campaign URL Template:**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=launavinnsla&utm_term={keyword}&utm_content={creative}&gclid={gclid}
```

**Final URLs:**

#### Ad Group 2.1: Launavinnsla Core
```
Final URL: https://gloggva.is/#laun
Tracking Template: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=launavinnsla_core&utm_term={keyword}&utm_content={creative}&gclid={gclid}#laun
```

**Example Ad - Launavinnsla**
```
Headline 1: Launavinnsla fyrir Fyrirtæki
Headline 2: Glöggva - Fagleg Þjónusta
Headline 3: Staðgreiðsla og Skattskýrslur
Description 1: Við sjáum um alla launavinnslu fyrir þitt fyrirtæki. Nákvæm og áreiðanleg þjónusta.
Description 2: Persónuleg þjónusta og betri yfirsýn. Hringdu 772-5040.
Path 1: Launavinnsla
Path 2: Fyrirtaeki
Final URL: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=launavinnsla_core&utm_term={keyword}&utm_content=ad1_laun&gclid={gclid}#laun
```

---

### Herferð 3: Skattskil & Ársreikningar

**Campaign URL Template:**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=skattskil_arsreikningar&utm_term={keyword}&utm_content={creative}&gclid={gclid}
```

**Final URLs:**

#### Ad Group 3.1: Ársreikningar
```
Final URL: https://gloggva.is/#thjonusta
Tracking Template: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=arsreikningar&utm_term={keyword}&utm_content={creative}&gclid={gclid}#thjonusta
```

**Example Ad - Ársreikningar**
```
Headline 1: Ársreikningar fyrir EHF
Headline 2: Fagleg Bókhaldsþjónusta
Headline 3: Glöggva - Betri Yfirsýn
Description 1: Við aðstoðum við gerð ársreiknings fyrir þitt fyrirtæki. Reynsla og fagmennska.
Description 2: Áreiðanleg þjónusta og persónuleg ráðgjöf. Hafðu samband.
Path 1: Arsreikningar
Path 2: Fyrirtaeki
Final URL: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=arsreikningar&utm_term={keyword}&utm_content=ad1_arsreikningur&gclid={gclid}#thjonusta
```

---

#### Ad Group 3.2: Framtal (SEASONAL - Mars/Apríl)
```
Final URL: https://gloggva.is/#thjonusta
Tracking Template: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=framtal_seasonal&utm_term={keyword}&utm_content={creative}&gclid={gclid}#thjonusta
```

**Example Ad - Framtal (SEASONAL)**
```
Headline 1: Hjálp við Framtalagerð
Headline 2: Framtal Fyrirtækis 2026
Headline 3: Glöggva Bókhaldsstofa
Description 1: Við aðstoðum við framtalagerð fyrir fyrirtæki. Fljótur og áreiðanlegur afgreiðslutími.
Description 2: Komdu framtalinu í gott horf. Hafðu samband í dag - 772-5040.
Path 1: Framtal
Path 2: Fyrirtaeki
Final URL: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=framtal_seasonal&utm_term={keyword}&utm_content=ad1_framtal&gclid={gclid}#samband
```

---

### Herferð 4: Brand Keywords

**Campaign URL Template:**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=brand&utm_term={keyword}&utm_content={creative}&gclid={gclid}
```

**Final URL:**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=brand&utm_term={keyword}&utm_content=brand_ad&gclid={gclid}
```

**Example Ad - Brand**
```
Headline 1: Glöggva ehf.
Headline 2: Bókhald - Laun - Skattskil
Headline 3: Persónuleg Þjónusta
Description 1: Fagleg bókhaldsþjónusta með áherslu á betri yfirsýn og persónulega þjónustu.
Description 2: Hafðu samband í dag - 772-5040 eða gloggva@gloggva.is
Path 1: Bokhaldsthjonusta
Path 2: Reykjavik
Final URL: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=brand&utm_term={keyword}&utm_content=brand_ad&gclid={gclid}
```

---

### Herferð 5: Stofnun Fyrirtækja

**Campaign URL Template:**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=stofnun_fyrirtaekja&utm_term={keyword}&utm_content={creative}&gclid={gclid}
```

**Final URL:**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=stofnun_fyrirtaekja&utm_term={keyword}&utm_content={creative}&gclid={gclid}#samband
```

**Example Ad - Stofnun EHF**
```
Headline 1: Stofna EHF með Hjálp
Headline 2: Við Aðstoðum við Stofnun
Headline 3: Glöggva Bókhaldsstofa
Description 1: Þarftu aðstoð við stofnun fyrirtækis? Við hjálpum þér í gegnum ferlið.
Description 2: Persónuleg ráðgjöf og reynsla. Hringdu 772-5040.
Path 1: Stofnun-Fyrirtaekis
Path 2: EHF
Final URL: https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=stofnun_fyrirtaekja&utm_term={keyword}&utm_content=ad1_stofnun&gclid={gclid}#samband
```

---

## 🔍 Hvernig virkar Tracking?

### 1. Notandi smellir á auglýsingu
```
User clicks ad for keyword: "bókhaldsþjónusta reykjavík"
```

### 2. Google redirectar með UTM parameters
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=bokhaldsthjonusta_almenn&utm_term=bókhaldsþjónusta%20reykjavík&utm_content=ad1&gclid=Cj0KCQiA...
```

### 3. Vefsíðan geymir UTM parameters
```javascript
// Automatically stored in sessionStorage
{
  utm_source: "google",
  utm_medium: "cpc",
  utm_campaign: "bokhaldsthjonusta_almenn",
  utm_term: "bókhaldsþjónusta reykjavík",  // <-- KEYWORD!
  utm_content: "ad1",
  gclid: "Cj0KCQiA..."
}
```

### 4. Notandi fyllir út form
```javascript
// Conversion tracking includes all UTM data
trackFormSubmission('contact', {
  value: 50000,
  currency: 'ISK',
  // Automatically includes:
  // - utm_campaign
  // - utm_term (KEYWORD!)
  // - gclid
});
```

### 5. Þú getur séð í Google Ads
- Hvaða **keyword** leiddi til conversion
- Hvaða **campaign** virkaði best
- Hvaða **ad creative** performaði best
- ROI fyrir hvert keyword

---

## 📊 Testing URLs

### Manual Test URLs

**Test 1: Bókhald keyword**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=bokhaldsthjonusta_almenn&utm_term=bókhaldsþjónusta&utm_content=test_ad&gclid=test123#thjonusta
```

**Test 2: Launavinnsla keyword**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=launavinnsla_core&utm_term=launavinnsla&utm_content=test_ad&gclid=test456#laun
```

**Test 3: Framtal keyword (Seasonal)**
```
https://gloggva.is/?utm_source=google&utm_medium=cpc&utm_campaign=framtal_seasonal&utm_term=framtal%20fyrirtækis&utm_content=test_ad&gclid=test789#samband
```

### How to Test

1. **Open browser console** (F12)
2. **Paste test URL** in address bar
3. **Check sessionStorage**:
   ```javascript
   // In console:
   JSON.parse(sessionStorage.getItem('utm_parameters'))
   ```
4. **Scroll 75%** down the page
5. **Fill out contact form** and submit
6. **Check Google Ads** → Conversions (wait 24-48h for data)

---

## 🎨 Ad Copy Best Practices

### Headlines (3 stk)
- **H1**: Main value proposition (Fagleg Bókhaldsþjónusta)
- **H2**: Brand or qualifier (Glöggva - Betri Yfirsýn)
- **H3**: Specific benefit (Bókhald fyrir Smáfyrirtæki)

### Descriptions (2 stk)
- **D1**: Main benefit + action (Persónuleg þjónusta. Hringdu 772-5040)
- **D2**: Additional benefits (VSK skil, launavinnsla, sveigjanleg verðlagning)

### Path (2 stk)
- **P1**: Service name (Bokhaldsthjonusta)
- **P2**: Location or qualifier (Reykjavik)

### Display URL Example:
```
gloggva.is/Bokhaldsthjonusta/Reykjavik
```

---

## ⚙️ Google Ads Account Setup

### 1. Conversion Tracking
```
Primary Conversion: AW-18029982289/q0YKCPumu4wcENHkrpVD
Secondary Conversion: AW-18036202934/347MCKnPzJkcELa7qphD
```

### 2. Conversion Value
```javascript
Form Submission: 50,000 ISK
Phone Call (>60s): 40,000 ISK
Email Click: 20,000 ISK
```

### 3. Attribution Window
```
Click-through: 30 days
View-through: 1 day
```

---

## 📈 Reporting & Analytics

### Google Ads Columns to Add
1. **Conversions** → Contact form submissions
2. **Conversion Value** → Total ISK value
3. **Cost per Conversion** → CPA
4. **Conversion Rate** → % of clicks that convert
5. **Search Terms** → Actual keywords used (vs. your bid keywords)

### Custom Reports
1. **Keyword Performance Report**
   - Shows which exact keywords drove conversions
   - Filter by `utm_term` parameter

2. **Campaign ROI Report**
   - Total spend vs. Total conversion value
   - Calculate ROAS (Return on Ad Spend)

3. **Time of Day Report**
   - Best performing hours (recommend bid adjustments)

---

## 🔧 Troubleshooting

### Issue: Ekki að sjá keywords í conversion data
**Solution:** 
- Athugaðu að `{keyword}` sé í tracking template
- Notaðu "Search Terms" report í Google Ads

### Issue: UTM parameters týnast
**Solution:**
- Athugaðu að Final URL innihaldi alla required parameters
- Prófaðu í incognito mode

### Issue: Conversions ekki að tracka
**Solution:**
- Athugaðu að Cookie Consent sé samþykkt
- Athugaðu Google Ads Conversion ID
- Test með browser console

---

## 📞 Support

Ef þú þarft hjálp:
- **Email**: gloggva@gloggva.is
- **Phone**: +354 772-5040

---

**Síðast uppfært**: April 14, 2026  
**Útgáfa**: 1.0
