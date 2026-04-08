# Logos Directory

This directory contains all logo files for the Glöggva website.

## 📁 Recommended Folder Structure

```
/public/
├── favicon.ico                    # Main favicon
├── logos/
│   ├── gloggva/                  # ✅ YOUR BRAND LOGOS (Glöggva)
│   │   ├── gloggva-logo.svg      # Primary logo (navbar)
│   │   ├── gloggva-logo.png      # PNG fallback
│   │   ├── gloggva-logo-symbol.png   # Icon/symbol only
│   │   ├── gloggva-logo-grayscale.svg # Grayscale version
│   │   └── archive/              # Source files, variations
│   │       ├── zoom-backgrounds/
│   │       ├── social-media/
│   │       └── guidelines.pdf
│   │
│   └── partners/                 # 🤝 PARTNER/INTEGRATION LOGOS
│       ├── banks/
│       │   ├── arionbanki.jpg
│       │   ├── islandsbanki.png
│       │   └── landsbankinn.png
│       ├── accounting/
│       │   ├── dk-logo.svg
│       │   └── xero.png
│       └── integrations/
│           ├── shopify.png
│           ├── woocommerce.png
│           ├── business-central.png
│           ├── payday.png
│           └── regla.png
```

## Why Separate Folders?

✅ **Better Organization** - Easy to find your own brand vs partner logos  
✅ **Easier Management** - Update partners without touching your brand files  
✅ **Clearer Licensing** - Different usage rights for your logo vs third-party  
✅ **Scalable** - Easy to add more categories (banks, software, certifications)  
✅ **Team Clarity** - Developers instantly understand file structure  

## File Placement Guide

### Your Brand Logos → `/public/logos/gloggva/`

**From your Fiverr package:**
- `Transparent Logo.svg` → `gloggva-logo.svg`
- `Transparent Logo.png` → `gloggva-logo.png`
- `Original Logo Symbol.png` → `gloggva-logo-symbol.png`
- `Grayscale Transparent.svg` → `gloggva-logo-grayscale.svg`

**Archive files** → `/public/logos/gloggva/archive/`:
- Zoom backgrounds
- Social media kit
- WordPress versions
- PDF guidelines

### Partner Logos → `/public/logos/partners/`

**Banks** → `/public/logos/partners/banks/`:
- arionbanki.jpg
- islandsbanki.png
- landsbankinn.png

**Accounting Software** → `/public/logos/partners/accounting/`:
- dk-logo.svg
- xero.png

**Integrations** → `/public/logos/partners/integrations/`:
- shopify.png
- woocommerce.png
- business-central.png
- payday.png
- regla.png

### Favicon → `/public/` (root)

- `Favicon Transparent.ico` → `favicon.ico`

## Usage in Code

### Your Glöggva Logo (Navbar)
```tsx
<img src="/logos/gloggva/gloggva-logo.svg" alt="Glöggva" />
```

### Partner Logos (LogoShowcase)
```tsx
<img src="/logos/partners/banks/arionbanki.jpg" alt="Arion banki" />
<img src="/logos/partners/integrations/shopify.png" alt="Shopify" />
```

### Favicon (in index.html)
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

### Structured Data (in index.html)
```json
"logo": "https://gloggva.is/logos/gloggva/gloggva-logo.svg"
```