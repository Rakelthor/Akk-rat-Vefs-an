The Netlify deploy errored, with the following guidance provided:

**Diagnosis**

- The build stops because Vite/Rollup cannot resolve the import `figma:asset/6afac1329ae710508d72650cddfd09cfdae97e74.png`; see [line 64](#L64). This non-standard `figma:` protocol is not handled by the current Vite configuration, so the bundler can’t locate the requested image.

**Solution**

1. Locate the component (for example under `src/`) that imports `figma:asset/6afac1329ae710508d72650cddfd09cfdae97e74.png`. Make sure that the corresponding image file is actually committed to the repository (it is typically generated into a folder such as `src/assets` or `.figma/assets` when exporting from Figma).
2. Update your code or Vite configuration so the asset resolves to a real file path:
   - Either change the import to a relative path to the committed asset, e.g.  
     ```ts
     import icon from '../path/to/assets/6afac1329ae710508d72650cddfd09cfdae97e74.png';
     ```
   - Or add a Vite alias/custom plugin that maps the `figma:asset/` prefix to the folder containing these exported assets. For example:
     ```ts
     // vite.config.ts
     import { defineConfig } from 'vite';
     import path from 'node:path';

     export default defineConfig({
       resolve: {
         alias: {
           'figma:asset': path.resolve(__dirname, 'src/assets'),
         },
       },
     });
     ```
     Adjust the target folder to match where the asset files live.

3. Commit the asset files (if they were missing), push, and rerun the Netlify build (`npm run build` locally first to confirm).

The relevant error logs are:

Line 0: build-image version: a0bc76c99cbadd99a168cf193f4d4df9fa7ee94a (noble-new-builds)
Line 1: buildbot version: dfcdb146c5cc0789499b31e62a97f76c0fc65ede
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
Line 15: up to date in 865ms
Line 25: [36m[1m​[22m[39m
Line 26: [36m[1m❯ Version[22m[39m
Line 27:   @netlify/build 35.10.1
Line 28: [36m[1m​[22m[39m
Line 29: [36m[1m❯ Flags[22m[39m
Line 30:   accountId: 69b81ddbe51fb61d2b23f878
Line 31:   baseRelDir: true
Line 32:   buildId: 69c30e842347c5aa6e01c6c6
Line 33:   deployId: 69c30e842347c5aa6e01c6c8
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
Line 50:   production
Line 51: [96m[1m​[22m[39m
Line 52: [96m[1mbuild.command from netlify.toml                               [22m[39m
Line 53: [96m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 54: ​
Line 55: [36m$ npm run build[39m
Line 56: > @figma/my-make-file@0.0.1 build
Line 57: > vite build
Line 58: [36mvite v6.3.5 [32mbuilding for production...[36m[39m
Line 59: transforming...
Line 60: Failed during stage 'building site': Build script returned non-zero exit code: 2
Line 61: [32m✓[39m 22 modules transformed.
Line 62: [31m✗[39m Build failed in 486ms
Line 63: [31merror during build:
Line 64: [31m[vite]: Rollup failed to resolve import "figma:asset/6afac1329ae710508d72650cddfd09cfdae97e74.png" from "/opt/build/repo/sr
Line 65: This is most likely unintended because it can break your application at runtime.
Line 66: If you do want to externalize this module explicitly add it to
Line 67: `build.rollupOptions.external`[31m
Line 68:     at viteLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46345:15)
Line 69:     at file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46403:18
Line 70:     at onwarn (file:///opt/build/repo/node_modules/@vitejs/plugin-react/dist/index.js:90:7)
Line 71:     at file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46401:7
Line 72:     at onRollupLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46393:5)
Line 73:     at onLog (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46043:7)
Line 74:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:20981:32
Line 75:     at Object.logger [as onLog] (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:22968:9)
Line 76:     at ModuleLoader.handleInvalidResolvedId (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:21712:26)
Line 77:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:21670:26[39m
Line 78: [91m[1m​[22m[39m
Line 79: [91m[1m"build.command" failed                                        [22m[39m
Line 80: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 81: ​
Line 82:   [31m[1mError message[22m[39m
Line 83:   Command failed with exit code 1: npm run build
Line 84: ​
Line 85:   [31m[1mError location[22m[39m
Line 86:   In build.command from netlify.toml:
Line 87:   npm run build
Line 88: ​
Line 89:   [31m[1mResolved config[22m[39m
Line 90:   build:
Line 91:     command: npm run build
Line 92:     commandOrigin: config
Line 93:     environment:
Line 94:       - NETLIFY_EMAILS_DIRECTORY
Line 95:       - NETLIFY_EMAILS_SECRET
Line 96:     publish: /opt/build/repo/dist
Line 97:     publishOrigin: config
Line 98:   redirects:
Line 99:     - from: /*
      status: 200
      to: /index.html
  redirectsOrigin: config
Line 100: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 101: Failing build: Failed to build site
Line 102: Finished processing build request in 10.768s