The Netlify deploy errored, with the following guidance provided:

**Diagnosis**

- The build succeeds until the postbuild script runs Puppeteer. At that point the prerender step crashes because Chromium was never downloaded: see the Puppeteer error in [lines 88-95](#L88-L95).  
- The Netlify environment for this site includes `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD`, which prevents Puppeteer from fetching Chromium during `npm install`. Because no alternate executable is made available via `PUPPETEER_EXECUTABLE_PATH`, Puppeteer cannot launch, and the postbuild script exits with code 2.

**Solution**

1. In the Netlify UI (Site settings → Build & deploy → Environment) remove the `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD` variable or set it to `false`. This allows Puppeteer to download its bundled Chromium during `npm install`.
2. If you must keep `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD`, point `PUPPETEER_EXECUTABLE_PATH` at a Chromium binary that actually exists on the build image (for example, install one during the build and export its path before running `npm run build`).

After adjusting the environment variables, trigger a fresh deploy so Puppeteer can download/use Chromium and the prerender step will succeed.

The relevant error logs are:

Line 0: build-image version: ac6eb13fbf000e5c09ad677efd8b7c3c2d0142b6 (noble-new-builds)
Line 1: buildbot version: 8867f4b2604d4cbf5c3a806b3254c82128b2ca70
Line 2: Fetching cached dependencies
Line 3: Starting to download cache of 90.1MB (Last modified: 2026-04-18 14:20:37 +0000 UTC)
Line 4: Downloaded cache in 314ms
Line 5: Extracted cache in 2.024s
Line 6: Fetched cache in 2.413s
Line 7: Starting to prepare the repo for build
Line 8: Preparing Git Reference refs/heads/main
Line 9: 
[93m​[39m
[93mWarning: some headers have syntax errors:[39m
[93m​[39m
[93mCould not read headers file: /opt/build/repo/d
Line 10: Installing dependencies
Line 11: mise [36m~/.config/mise/config.toml[0m tools: [34mpython[0m@3.14.3
Line 12: mise [36m~/.config/mise/config.toml[0m tools: [34mruby[0m@3.4.8
Line 13: mise [36m~/.config/mise/config.toml[0m tools: [34mgo[0m@1.26.2
Line 14: v18.20.8 is already installed.
Line 15: Now using node v18.20.8 (npm v10.8.2)
Line 16: Enabling Node.js Corepack
Line 17: No npm workspaces detected
Line 18: Installing npm packages using npm version 10.8.2
Line 19: npm warn EBADENGINE Unsupported engine {
Line 39: [36m[1m​[22m[39m
Line 40: [36m[1m❯ Version[22m[39m
Line 41:   @netlify/build 35.13.1
Line 42: [36m[1m​[22m[39m
Line 43: [36m[1m❯ Flags[22m[39m
Line 44:   accountId: 69b81ddbe51fb61d2b23f878
Line 45:   baseRelDir: true
Line 46:   buildId: 69e3cb2c135054daf5d31583
Line 47:   deployId: 69e3cb2c135054daf5d31585
Line 48: [93m​[39m
Line 49: [93mWarning: some headers have syntax errors:[39m
Line 50: [93m​[39m
Line 51: [93mCould not read headers file: /opt/build/repo/dist/_headers[39m
Line 52: [93m​[39m
Line 53: [93mWarning: some redirects have syntax errors:[39m
Line 54: [93m​[39m
Line 55: [93mCould not read redirects file: /opt/build/repo/dist/_redirects[39m
Line 56: [36m[1m​[22m[39m
Line 57: [36m[1m❯ Current directory[22m[39m
Line 58:   /opt/build/repo
Line 59: [36m[1m​[22m[39m
Line 60: [36m[1m❯ Config file[22m[39m
Line 61:   /opt/build/repo/netlify.toml
Line 62: [36m[1m​[22m[39m
Line 63: [36m[1m❯ Context[22m[39m
Line 78: /fonts/Inter/Inter-Bold.woff2 referenced in /fonts/Inter/Inter-Bold.woff2 didn't resolve at build time, it will remain unchanged
Line 79: rendering chunks...
Line 80: computing gzip size...
Line 81: [2mdist/[22m[32mindex.html                 [39m[1m[2m 10.58 kB[22m[1m[22m[2m │ gzip:   3.12 kB[22m
Line 82: [2mdist/[22m[2massets/[22m[35mindex-zEaMCdW2.css  [39m[1m[2m111.89 kB[22m[1m[22m[2m │ gzip:  17.73 kB[22m
Line 83: [2mdist/[22m[2massets/[22m[36mindex-CIsExBgA.js   [39m[1m[2m362.53 kB[22m[1m[22m[2m │ gzip: 112.30 kB[22m
Line 84: [32m✓ built in 2.84s[39m
Line 85: > @figma/my-make-file@0.0.1 postbuild
Line 86: > node scripts/prerender-puppeteer.mjs
Line 87: 🚀 Starting Puppeteer pre-rendering...
Line 88: Server error: npm warn exec The following package was not found and will be installed: http-server@14.1.1
Line 89: Failed during stage 'building site': Build script returned non-zero exit code: 2
Line 90: Server error: npm warn deprecated whatwg-encoding@2.0.0: Use @exodus/bytes instead for a more spec-conformant and faster impleme
Line 91: ✓ Server should be ready on http://localhost:3456
Line 92: 🌐 Launching headless browser...
Line 93: ❌ Pre-rendering failed: Error: Chromium revision is not downloaded. Run "npm install" or "yarn install"
Line 94:     at Launcher.launch [90m(/opt/build/repo/[39mnode_modules/[4mpuppeteer[24m/lib/Launcher.js:119:15[90m)[39m
Line 95:     at async prerenderWithPuppeteer [90m(file:///opt/build/repo/[39mscripts/prerender-puppeteer.mjs:87:21[90m)[39m
Line 96: [91m[1m​[22m[39m
Line 97: [91m[1m"build.command" failed                                        [22m[39m
Line 98: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 99: ​
Line 100:   [31m[1mError message[22m[39m
Line 101:   Command failed with exit code 1: npm run build
Line 102: ​
Line 103:   [31m[1mError location[22m[39m
Line 104:   In build.command from netlify.toml:
Line 105:   npm run build
Line 106: ​
Line 107:   [31m[1mResolved config[22m[39m
Line 108:   build:
Line 109:     command: npm run build
Line 110:     commandOrigin: config
Line 111:     environment:
Line 112:       - NETLIFY_EMAILS_DIRECTORY
Line 113:       - NETLIFY_EMAILS_SECRET
Line 114:       - NODE_VERSION
Line 115:       - PUPPETEER_SKIP_CHROMIUM_DOWNLOAD
Line 116:       - PUPPETEER_EXECUTABLE_PATH
Line 117:     publish: /opt/build/repo/dist
Line 118:     publishOrigin: config
Line 119:   headers:
Line 120:     - for: /*
      values:
        Permissions-Policy: geolocation=(), microphone=(), camera=()
        Referrer-Policy: strict
Line 121: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 122: Failing build: Failed to build site
Line 123: Finished processing build request in 18.563s