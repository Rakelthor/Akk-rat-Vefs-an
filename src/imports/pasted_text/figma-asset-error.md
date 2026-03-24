The Netlify deploy errored, with the following guidance provided:

**Diagnosis**

- The build fails because Vite cannot resolve the import `figma:asset/6afac1329ae710508d72650cddfd09cfdae97e74.png` referenced from `src/...` ([line 69](#L69)). This `figma:` scheme is not recognized by Vite/Rollup, so the asset is missing at build time and the bundle cannot be produced.

**Solution**

1. Search your codebase for the line that imports `figma:asset/6afac1329ae710508d72650cddfd09cfdae97e74.png`.
2. Verify that the PNG asset actually exists in your repository (if it was exported from Figma, make sure the file was committed).
3. Move the asset to a location Vite can read at build time (for example `src/assets/figma/hero.png` or `public/figma/hero.png`) and update the code to use a standard relative or public-path import, e.g.:

   ```tsx
   import heroImage from '../assets/figma/hero.png';
   ```

   or, if placed in `public`, reference it with `/figma/hero.png`.

4. Remove the `figma:` prefix so that Vite can emit the asset, commit the changes, and redeploy.

This ensures the image is bundled correctly and unblocks the build.

The relevant error logs are:

Line 0: Waiting for other deploys from your team to complete. Check the queue: https://app.netlify.com/teams/rakelthor/builds
Line 1: build-image version: a0bc76c99cbadd99a168cf193f4d4df9fa7ee94a (noble-new-builds)
Line 2: buildbot version: dfcdb146c5cc0789499b31e62a97f76c0fc65ede
Line 3: Building with cache
Line 4: Starting to prepare the repo for build
Line 5: Preparing Git Reference refs/heads/main
Line 6: 
[93m​[39m
[93mWarning: some headers have syntax errors:[39m
[93m​[39m
[93mCould not read headers file: /opt/build/repo/d
Line 7: Installing dependencies
Line 8: mise [36m~/.config/mise/config.toml[0m tools: [34mpython[0m@3.14.3
Line 9: mise [36m~/.config/mise/config.toml[0m tools: [34mruby[0m@3.4.8
Line 10: mise [36m~/.config/mise/config.toml[0m tools: [34mgo[0m@1.26.1
Line 11: v22.22.2 is already installed.
Line 12: Now using node v22.22.2 (npm v10.9.7)
Line 13: Enabling Node.js Corepack
Line 14: No npm workspaces detected
Line 15: Installing npm packages using npm version 10.9.7
Line 16: up to date in 741ms
Line 26: [36m[1m​[22m[39m
Line 27: [36m[1m❯ Version[22m[39m
Line 28:   @netlify/build 35.10.1
Line 29: [36m[1m​[22m[39m
Line 30: [36m[1m❯ Flags[22m[39m
Line 31:   accountId: 69b81ddbe51fb61d2b23f878
Line 32:   baseRelDir: true
Line 33:   buildId: 69c30d4916e53f8f55b879de
Line 34:   deployId: 69c30d4916e53f8f55b879e0
Line 35: [93m​[39m
Line 36: [93mWarning: some headers have syntax errors:[39m
Line 37: [93m​[39m
Line 38: [93mCould not read headers file: /opt/build/repo/dist/_headers[39m
Line 39: [93m​[39m
Line 40: [93mWarning: some redirects have syntax errors:[39m
Line 41: [93m​[39m
Line 42: [93mCould not read redirects file: /opt/build/repo/dist/_redirects[39m
Line 43: [36m[1m​[22m[39m
Line 44: [36m[1m❯ Current directory[22m[39m
Line 45:   /opt/build/repo
Line 46: [36m[1m​[22m[39m
Line 47: [36m[1m❯ Config file[22m[39m
Line 48:   /opt/build/repo/netlify.toml
Line 49: [36m[1m​[22m[39m
Line 50: [36m[1m❯ Context[22m[39m
Line 51:   production
Line 52: [96m[1m​[22m[39m
Line 53: [96m[1mbuild.command from netlify.toml                               [22m[39m
Line 54: [96m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 55: ​
Line 56: [36m$ npm run build[39m
Line 57: > @figma/my-make-file@0.0.1 build
Line 58: > vite build
Line 59: [36mvite v6.3.5 [32mbuilding for production...[36m[39m
Line 60: Failed during stage 'building site': Build script returned non-zero exit code: 2
Line 61: transforming...
Line 62: /fonts/Inter/Inter-Light.woff2 referenced in /fonts/Inter/Inter-Light.woff2 didn't resolve at build time, it will remain unchang
Line 63: /fonts/Inter/Inter-Regular.woff2 referenced in /fonts/Inter/Inter-Regular.woff2 didn't resolve at build time, it will remain unc
Line 64: /fonts/Inter/Inter-Medium.woff2 referenced in /fonts/Inter/Inter-Medium.woff2 didn't resolve at build time, it will remain uncha
Line 65: /fonts/Inter/Inter-SemiBold.woff2 referenced in /fonts/Inter/Inter-SemiBold.woff2 didn't resolve at build time, it will remain u
Line 66: /fonts/Inter/Inter-Bold.woff2 referenced in /fonts/Inter/Inter-Bold.woff2 didn't resolve at build time, it will remain unchanged
Line 67: [31m✗[39m Build failed in 858ms
Line 68: [31merror during build:
Line 69: [31m[vite]: Rollup failed to resolve import "figma:asset/6afac1329ae710508d72650cddfd09cfdae97e74.png" from "/opt/build/repo/sr
Line 70: This is most likely unintended because it can break your application at runtime.
Line 71: If you do want to externalize this module explicitly add it to
Line 72: `build.rollupOptions.external`[31m
Line 73:     at viteLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46345:15)
Line 74:     at file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46403:18
Line 75:     at onwarn (file:///opt/build/repo/node_modules/@vitejs/plugin-react/dist/index.js:90:7)
Line 76:     at file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46401:7
Line 77:     at onRollupLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46393:5)
Line 78:     at onLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46043:7)
Line 79:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:20981:32
Line 80:     at Object.logger [as onLog] (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:22968:9)
Line 81:     at ModuleLoader.handleInvalidResolvedId (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:21712:26)
Line 82:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:21670:26[39m
Line 83: [91m[1m​[22m[39m
Line 84: [91m[1m"build.command" failed                                        [22m[39m
Line 85: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 86: ​
Line 87:   [31m[1mError message[22m[39m
Line 88:   Command failed with exit code 1: npm run build
Line 89: ​
Line 90:   [31m[1mError location[22m[39m
Line 91:   In build.command from netlify.toml:
Line 92:   npm run build
Line 93: ​
Line 94:   [31m[1mResolved config[22m[39m
Line 95:   build:
Line 96:     command: npm run build
Line 97:     commandOrigin: config
Line 98:     environment:
Line 99:       - NETLIFY_EMAILS_DIRECTORY
Line 100:       - NETLIFY_EMAILS_SECRET
Line 101:     publish: /opt/build/repo/dist
Line 102:     publishOrigin: config
Line 103:   redirects:
Line 104:     - from: /*
      status: 200
      to: /index.html
  redirectsOrigin: config
Line 105: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 106: Failing build: Failed to build site
Line 107: Finished processing build request in 10.727s