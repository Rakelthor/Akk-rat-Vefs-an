# Netlify headers file for gloggva.is

# Apply headers to all pages
/*
  # Security headers
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  
  # Cache control for assets
  Cache-Control: public, max-age=31536000, immutable
  
# HTML pages - no caching
/*.html
  Cache-Control: public, max-age=0, must-revalidate

# Root index
/
  Cache-Control: public, max-age=0, must-revalidate
  
# Sitemap and robots
/sitemap.xml
  Content-Type: application/xml
  Cache-Control: public, max-age=3600

/robots.txt
  Content-Type: text/plain
  Cache-Control: public, max-age=3600
