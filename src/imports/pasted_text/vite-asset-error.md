The Netlify deploy errored, with the following guidance provided:

**Diagnosis**  
- The build fails when Vite tries to bundle the project because Rollup cannot resolve the import `figma:asset/e21d1a5fa166bdee196a1483b81416881d968604.png` [line 63](#L63). That scheme (`figma:asset/...`) is not defined anywhere in the Vite configuration, so Vite interprets it as an absolute module ID and the build aborts. This points to a missing/incorrect asset reference rather than a general Rollup issue.

**Solution**  
1. Confirm that the PNG referenced by that hash actually exists in your repo (e.g. under `src/assets/` or `public/`). If the file was generated locally and never committed, add it to the repository.  
2. Update the import so Vite knows where to find it. Either change the component code to import the file via a relative path, e.g.  
   ```tsx
   import myImage from '../assets/my-image.png';
   ```  
   or add an alias in `vite.config.ts` that maps the `figma:asset` prefix to the directory where those files live:  
   ```ts
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import { fileURLToPath, URL } from 'node:url';

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         'figma:asset': fileURLToPath(new URL('./src/assets', import.meta.url)),
       },
     },
   });
   ```  
   (Make sure the alias points to the folder that actually contains `e21d1a5fa166bdee196a1483b81416881d968604.png`.)

After committing the asset and adjusting the import/alias, rebuild on Netlify.

The relevant error logs are:

Line 0: build-image version: a0bc76c99cbadd99a168cf193f4d4df9fa7ee94a (noble-new-builds)
Line 1: buildbot version: 854a34bbca35cdbdaec05bf6f4a809a0f4efe4ea
Line 2: Building with cache
Line 3: Starting to prepare the repo for build
Line 4: Preparing Git Reference refs/heads/main
Line 5: 
[93m​[39m
[93mWarning: some headers have syntax errors:[39m
[93m​[39m
[93mCould not read headers file: /opt/build/repo/d
Line 6: Installing dependencies
Line 7: mise [36m~/.config/mise/config.toml[0m tools: [34mpython[0m@3.14.3
Line 8: mise [36m~/.config/mise/config.toml[0m tools: [34mruby[0m@3.4.8
Line 9: mise [36m~/.config/mise/config.toml[0m tools: [34mgo[0m@1.26.1
Line 10: v22.22.2 is already installed.
Line 11: Now using node v22.22.2 (npm v10.9.7)
Line 12: Enabling Node.js Corepack
Line 13: No npm workspaces detected
Line 14: Installing npm packages using npm version 10.9.7
Line 15: up to date in 579ms
Line 25: [36m[1m​[22m[39m
Line 26: [36m[1m❯ Version[22m[39m
Line 27:   @netlify/build 35.11.1
Line 28: [36m[1m​[22m[39m
Line 29: [36m[1m❯ Flags[22m[39m
Line 30:   accountId: 69b81ddbe51fb61d2b23f878
Line 31:   baseRelDir: true
Line 32:   buildId: 69c3de481e62d40bbe28de96
Line 33:   deployId: 69c3de481e62d40bbe28de98
Line 34: [93m​[39m
Line 35: [93mWarning: some headers have syntax errors:[39m
Line 36: [93m​[39m
Line 37: [93mCould not read headers file: /opt/build/repo/dist/_headers[39m
Line 38: [93m​[39m
Line 39: [93mWarning: some redirects have syntax errors:[39m
Line 40: [93m​[39m
Line 41: [93mCould not read redirects file: /opt/build/repo/dist/_redirects[39m
Line 42: [36m[1m​[22m[39m
Line 43: [36m[1m❯ Current directory[22m[39m
Line 44:   /opt/build/repo
Line 45: [36m[1m​[22m[39m
Line 46: [36m[1m❯ Config file[22m[39m
Line 47:   /opt/build/repo/netlify.toml
Line 48: [36m[1m​[22m[39m
Line 49: [36m[1m❯ Context[22m[39m
Line 51: [96m[1m​[22m[39m
Line 52: [96m[1mbuild.command from netlify.toml                               [22m[39m
Line 53: [96m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 54: ​
Line 55: [36m$ npm run build[39m
Line 56: > @figma/my-make-file@0.0.1 build
Line 57: > vite build
Line 58: [36mvite v6.3.5 [32mbuilding for production...[36m[39m
Line 59: transforming...
Line 60: [32m✓[39m 20 modules transformed.
Line 61: [31m✗[39m Build failed in 504ms
Line 62: [31merror during build:
Line 63: [31m[vite]: Rollup failed to resolve import "figma:asset/e21d1a5fa166bdee196a1483b81416881d968604.png" from "/opt/build/repo/sr
Line 64: This is most likely unintended because it can break your application at runtime.
Line 65: If you do want to externalize this module explicitly add it to
Line 66: `build.rollupOptions.external`[31m
Line 67:     at viteLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46345:15)
Line 68:     at file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46403:18
Line 69:     at onwarn (file:///opt/build/repo/node_modules/@vitejs/plugin-react/dist/index.js:90:7)
Line 70:     at file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46401:7
Line 71:     at onRollupLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46393:5)
Line 72:     at onLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46043:7)
Line 73:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:20981:32
Line 74:     at Object.logger [as onLog] (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:22968:9)
Line 75:     at ModuleLoader.handleInvalidResolvedId (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:21712:26)
Line 76:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:21670:26[39m
Line 77: [91m[1m​[22m[39m
Line 78: [91m[1m"build.command" failed                                        [22m[39m
Line 79: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 80: ​
Line 81:   [31m[1mError message[22m[39m
Line 82:   Command failed with exit code 1: npm run build
Line 83: ​
Line 84:   [31m[1mError location[22m[39m
Line 85:   In build.command from netlify.toml:
Line 86:   npm run build
Line 87: ​
Line 88:   [31m[1mResolved config[22m[39m
Line 89:   build:
Line 90:     command: npm run build
Line 91:     commandOrigin: config
Line 92:     environment:
Line 93:       - NETLIFY_EMAILS_DIRECTORY
Line 94:       - NETLIFY_EMAILS_SECRET
Line 95:     publish: /opt/build/repo/dist
Line 96:     publishOrigin: config
Line 97:   redirects:
Line 98:     - from: /*
      status: 200
      to: /index.html
  redirectsOrigin: config
Line 99: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 100: Failing build: Failed to build site
Line 101: Finished processing build request in 9.74s
Line 102: Failed during stage 'building site': Build script returned non-zero exit code: 2