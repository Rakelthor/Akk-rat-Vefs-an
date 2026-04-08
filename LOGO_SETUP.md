# Glöggva Logo Setup Guide

## Quick Start: Where to Place Your Fiverr Logo Files

### 📁 Step 1: Your Brand Logos → `/public/logos/gloggva/`

Create a new folder `/public/logos/gloggva/` and upload these renamed files:

1. **Primary Logo (SVG)** ✅ REQUIRED FOR NAVBAR: 
   - Upload: `SVG Vector Files/Transparent Logo.svg` 
   - Rename to: `gloggva-logo.svg`

2. **Logo Symbol/Icon (PNG)** ✅ REQUIRED FOR FAVICON:
   - Upload: `PNG Logo Files/Original Logo Symbol.png`
   - Rename to: `gloggva-logo-symbol.png`

3. **Logo Symbol/Icon (SVG)** ✅ REQUIRED FOR MODERN FAVICON:
   - Extract the glasses icon from: `SVG Vector Files/Transparent Logo.svg`
   - Save as: `gloggva-logo-symbol.svg` (just the icon, no text)
   - OR use: `SVG Vector Files/Original Logo Symbol.svg` if provided

4. **Primary Logo (PNG Backup)** (Optional):
   - Upload: `PNG Logo Files/Transparent Logo.png`
   - Rename to: `gloggva-logo.png`

5. **Grayscale Version** (Optional):
   - Upload: `SVG Vector Files/Grayscale Transparent.svg`
   - Rename to: `gloggva-logo-grayscale.svg`

### 🎯 Step 2: Favicon → `/public/` (Root)

Upload to the `/public/` root folder (NOT in logos):

1. **Favicon ICO** (Optional - legacy browsers):
   - Upload: `Favicon/Favicon Transparent.ico`
   - Rename to: `favicon.ico`

**NOTE:** The favicon will work with just the PNG/SVG symbol in step 1. The .ico file is optional for older browsers.

### 📦 Step 3: Archive Files (Optional) → `/public/logos/gloggva/archive/`

Create folder `/public/logos/gloggva/archive/` and upload all other files:

- All remaining PNG files
- All remaining SVG files
- Grayscale versions
- Zoom backgrounds (create subfolder: `archive/zoom-backgrounds/`)
- Social media kit (create subfolder: `archive/social-media/`)
- PDF guides (Wordpress files, guidelines, etc.)

### 🤝 Step 4: Partner Logos → `/public/logos/partners/`

Move existing partner/integration logos to organized subfolders:

**Create these folders and move existing files:**

```
/public/logos/partners/
├── banks/
│   ├── arionbanki.jpg         (move from /public/logos/)
│   ├── islandsbanki.png       (move from /public/logos/)
│   └── landsbankinn.png       (move from /public/logos/)
│
├── accounting/
│   ├── dk-logo.svg            (move from /public/logos/)
│   └── xero.png               (add when available)
│
└── integrations/
    ├── shopify.png            (add when available)
    ├── woocommerce.png        (add when available)
    ├── business-central.png   (add when available)
    ├── payday.png             (move from /public/logos/)
    └── regla.png              (move from /public/logos/)
```

---

## 📁 Final Folder Structure

```
/public/
├── favicon.ico                           # NEW: Your Fiverr favicon
├── logos/
│   ├── gloggva/                         # NEW: Your brand logos
│   │   ├── gloggva-logo.svg            # Primary logo
│   │   ├── gloggva-logo.png            # PNG fallback
│   │   ├── gloggva-logo-symbol.png     # Icon only
│   │   ├── gloggva-logo-symbol.svg     # Modern favicon icon
│   │   ├── gloggva-logo-grayscale.svg  # Grayscale version
│   │   └── archive/                     # All other Fiverr files
│   │       ├── zoom-backgrounds/
│   │       ├── social-media/
│   │       └── *.png, *.svg, *.pdf
│   │
│   └── partners/                        # Partner logos
│       ├── banks/
│       ├── accounting/
│       └── integrations/
```

---

## GitHub Upload Instructions

### Option 1: Via GitHub Web Interface

1. Go to your repository: `https://github.com/yourusername/gloggva-repo`
2. Navigate to `/public/logos/`
3. Click **Add file** → **Create new file**
4. Type: `gloggva/.gitkeep` (this creates the folder)
5. Click **Commit changes**
6. Go back to `/public/logos/gloggva/`
7. Click **Add file** → **Upload files**
8. Drag and drop your renamed Fiverr logo files
9. Add commit message: "Add new Glöggva brand logos from Fiverr"
10. Click **Commit changes**

**Repeat for partner folders:**
11. Create `/public/logos/partners/banks/` folder
12. Upload/move bank logos there
13. Repeat for `accounting/` and `integrations/`

### Option 2: Via Git Command Line

```bash
# Navigate to your project
cd your-project-folder

# Create new folder structure
mkdir -p public/logos/gloggva/archive
mkdir -p public/logos/partners/banks
mkdir -p public/logos/partners/accounting
mkdir -p public/logos/partners/integrations

# Add your Glöggva brand logos
cp ~/Downloads/Transparent\ Logo.svg public/logos/gloggva/gloggva-logo.svg
cp ~/Downloads/Transparent\ Logo.png public/logos/gloggva/gloggva-logo.png
cp ~/Downloads/Original\ Logo\ Symbol.png public/logos/gloggva/gloggva-logo-symbol.png

# Add favicon
cp ~/Downloads/Favicon\ Transparent.ico public/favicon.ico

# Move archive files
cp -r ~/Downloads/remaining-fiverr-files/* public/logos/gloggva/archive/

# Move existing partner logos to new structure
git mv public/logos/arionbanki.jpg public/logos/partners/banks/
git mv public/logos/islandsbanki.png public/logos/partners/banks/
git mv public/logos/landsbankinn.png public/logos/partners/banks/
git mv public/logos/dk-logo.svg public/logos/partners/accounting/
git mv public/logos/payday.png public/logos/partners/integrations/
git mv public/logos/regla.png public/logos/partners/integrations/

# Remove old gloggva-logo.png if it exists
git rm public/logos/gloggva-logo.png

# Commit and push
git add public/logos/ public/favicon.ico
git commit -m "Reorganize logos: separate brand and partner logos, add new Fiverr brand assets"
git push origin main
```

---

## File Naming Convention Summary

| Original File | Rename To | Location |
|---------------|-----------|----------|
| `Transparent Logo.svg` | `gloggva-logo.svg` | `/public/logos/gloggva/` |
| `Transparent Logo.png` | `gloggva-logo.png` | `/public/logos/gloggva/` |
| `Original Logo Symbol.png` | `gloggva-logo-symbol.png` | `/public/logos/gloggva/` |
| `Grayscale Transparent.svg` | `gloggva-logo-grayscale.svg` | `/public/logos/gloggva/` |
| `Favicon Transparent.ico` | `favicon.ico` | `/public/` |
| All other Fiverr files | Keep original names | `/public/logos/gloggva/archive/` |

---

## After Upload: Update Your Website Code

Once uploaded, you need to update the logo paths in your code:

### 1. Update Favicon in `/index.html`

Find line 5 and replace:
```html
<!-- OLD -->
<link rel="icon" type="image/svg+xml" href="/vite.svg" />

<!-- NEW -->
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

Also update structured data (lines 47 and 95):
```json
"logo": "https://gloggva.is/logos/gloggva/gloggva-logo.svg"
```

### 2. Update Navbar Logo in `/src/app/components/Navbar.tsx`

```tsx
<img 
  src="/logos/gloggva/gloggva-logo.svg"  // Changed path
  alt="Glöggva ehf. - Bókhaldsþjónusta á Íslandi" 
  className="h-32"
/>
```

### 3. Update Partner Logos in `/src/app/components/LogoShowcase.tsx`

Update all partner logo paths to use new folder structure:

```tsx
// Banks
{ name: 'Arion banki', logo: '/logos/partners/banks/arionbanki.jpg' }
{ name: 'Íslandsbanki', logo: '/logos/partners/banks/islandsbanki.png' }
{ name: 'Landsbankinn', logo: '/logos/partners/banks/landsbankinn.png' }

// Accounting
{ name: 'DK', logo: '/logos/partners/accounting/dk-logo.svg' }
{ name: 'Xero', logo: '/logos/partners/accounting/xero.png' }

// Integrations
{ name: 'Shopify', logo: '/logos/partners/integrations/shopify.png' }
{ name: 'WooCommerce', logo: '/logos/partners/integrations/woocommerce.png' }
{ name: 'Business Central', logo: '/logos/partners/integrations/business-central.png' }
{ name: 'Payday', logo: '/logos/partners/integrations/payday.png' }
{ name: 'Regla', logo: '/logos/partners/integrations/regla.png' }
```

---

## Why This Structure is Better

✅ **Clear Separation** - Your brand vs partners is immediately obvious  
✅ **Easy Updates** - Change partners without touching your brand files  
✅ **Better Licensing** - Different usage rights are clearly separated  
✅ **Scalable** - Easy to add more categories as you grow  
✅ **Professional** - Industry standard organization  
✅ **Team Friendly** - New developers instantly understand structure  

---

## Best Practices

✅ **Use SVG for your logo** - Better quality, smaller file size, scales perfectly  
✅ **Use ICO for favicon** - Best browser compatibility  
✅ **Keep all Fiverr files** - Store everything in `/archive/` for future use  
✅ **Transparent backgrounds** - Essential for logos on different backgrounds  
✅ **Optimize partner logos** - Ensure all third-party logos are properly sized  
✅ **Document everything** - Keep README files updated  

---

## Need Help?

- Logo not showing? Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wrong size? Adjust `className="h-32"` in Navbar component
- Blurry on retina? Use SVG instead of PNG
- Partners not loading? Check file paths match exactly