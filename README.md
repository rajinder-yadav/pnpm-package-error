# How to see the PNPM error

__Note__: Delete all lock files (npm, pnpm, yarn)  and "__node_modules/__" directories first, if they exist.

## Using PNPM

Install and run project:

```sh
pnpm i

pnpm run dev
```

## Output

This will result in the following error

```pre
=> Running script [436782:lint] src/**/* Done in 0.53s.
=> Process [436782:yarn eslint ./src] exited (627.6285680000001 ms).
=> Running script [436821:dev:build] src/**/*
=> Process [436821:tsc -p ./tsconfig.dev.json] exited (619.141821 ms).
=> Running script [436837:copy:key] src/**/*
cp: cannot stat 'key': No such file or directory

=> Running script [436838:dev:watch] src/**/*
=> Process [436837:cp -r key build/] exited (2.500831000000062 ms).
/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/bindings@1.5.0/node_modules/bindings/bindings.js:135
  throw err;
  ^

Error: Could not locate the bindings file. Tried:
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/build/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/build/Debug/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/build/Release/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/out/Debug/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/Debug/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/out/Release/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/Release/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/build/default/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/compiled/22.15.0/linux/x64/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/addon-build/release/install-root/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/addon-build/debug/install-root/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/addon-build/default/install-root/node_sqlite3.node
 → /tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/lib/binding/node-v127-linux-x64/node_sqlite3.node
    at bindings (/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/bindings@1.5.0/node_modules/bindings/bindings.js:126:9)
    at Object.<anonymous> (/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/lib/sqlite3-binding.js:1:37)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Module.require (node:internal/modules/cjs/loader:1487:12)
    at require (node:internal/modules/helpers:135:16) {
  tries: [
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/build/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/build/Debug/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/build/Release/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/out/Debug/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/Debug/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/out/Release/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/Release/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/build/default/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/compiled/22.15.0/linux/x64/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/addon-build/release/install-root/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/addon-build/debug/install-root/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/addon-build/default/install-root/node_sqlite3.node',
    '/tmp/sandbox/pnpm-package-error/node_modules/.pnpm/sqlite3@5.1.7/node_modules/sqlite3/lib/binding/node-v127-linux-x64/node_sqlite3.node'
  ]
}

Node.js v22.15.0

=> Process [436838:cross-env PORT=3100 NODE_ENV=development node build/main.js] exited (45.73038500000007 ms).
```

## Clean up and use YARN

Now let's clean things up and use YARN or even NPM.

```sh
rm -rf node_modules
rm pnpm-lock.yaml
```

Install with YARN and run project:

```sh
yarn
yarn run dev
```

## Output

```sh
$ yarn run dev
yarn run v1.22.22
$ gazeall -V --npms 'clean format lint dev:build copy:key dev:watch' -w 'src/**/*'
=> Running script [446202:clean] src/**/*
=> Process [446202:shx rm -rf build] exited (62.308693999999996 ms).
=> Running script [446213:format] src/**/*
=> Process [446213:biome format --write ./src] exited (231.86220100000003 ms).
=> Running script [446224:lint] src/**/*
=> Running script [446224:lint] src/**/* $ /tmp/sandbox/pnpm-package-error/node_modules/.bin/eslint ./src
=> Process [446224:yarn eslint ./src] exited (619.6943679999999 ms).
=> Running script [446270:dev:build] src/**/*
=> Process [446270:tsc -p ./tsconfig.dev.json] exited (700.0062969999999 ms).
=> Running script [446304:copy:key] src/**/*
cp: cannot stat 'key': No such file or directory

=> Running script [446305:dev:watch] src/**/*
=> Process [446304:cp -r key build/] exited (2.808708000000024 ms).
=> Running script [446305:dev:watch] src/**/* 1: Ipsum 0
=> Running script [446305:dev:watch] src/**/* 2: Ipsum 1
=> Running script [446305:dev:watch] src/**/* 3: Ipsum 2
=> Running script [446305:dev:watch] src/**/* 4: Ipsum 3
=> Running script [446305:dev:watch] src/**/* 5: Ipsum 4
=> Running script [446305:dev:watch] src/**/* 6: Ipsum 5
=> Running script [446305:dev:watch] src/**/* 7: Ipsum 6
=> Running script [446305:dev:watch] src/**/* 8: Ipsum 7
=> Running script [446305:dev:watch] src/**/* 9: Ipsum 8
=> Running script [446305:dev:watch] src/**/* 10: Ipsum 9
=> Process [446305:cross-env PORT=3100 NODE_ENV=development node build/main.js] exited (51.910752 ms).
```
