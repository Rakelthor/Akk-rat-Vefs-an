#!/bin/bash

# Cleanup script to remove problematic directories
# These directories cause Netlify build warnings

echo "🧹 Cleaning up problematic directories..."
echo ""

# Check if directories exist
if [ -d "public/_redirects" ]; then
    echo "❌ Found: public/_redirects/ (directory)"
    rm -rf public/_redirects
    echo "✅ Deleted: public/_redirects/"
else
    echo "✅ Clean: public/_redirects/ (not found)"
fi

if [ -d "public/_headers" ]; then
    echo "❌ Found: public/_headers/ (directory)"
    rm -rf public/_headers
    echo "✅ Deleted: public/_headers/"
else
    echo "✅ Clean: public/_headers/ (not found)"
fi

echo ""
echo "🎉 Cleanup complete!"
echo ""
echo "📋 Remaining files in public/:"
ls -la public/ | grep -v "^d" | tail -n +4
echo ""
echo "✅ Now commit and push:"
echo "   git add -A"
echo "   git commit -m 'Remove unused _redirects and _headers directories'"
echo "   git push"
