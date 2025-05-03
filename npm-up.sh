#!/usr/bin/env bash

# Update Script for NPM Modules.
# Run this to install the latest modules and update package.json
# package.json.t is the template file, make changes there!
cp package.json.t package.json
rm -f pnpm-lock.yaml package-lock.json yarn.lock
rm -rf node_modules

# Node.js Development
yarn add -D @types/node

# Logging
yarn add bunyan bunyan-format
yarn add -D @types/bunyan @types/bunyan-format

# Web Security
yarn add bcrypt jsonwebtoken
yarn add -D @types/jsonwebtoken

# Express.js helpers
yarn add express cors cookie-parser
yarn add -D @types/express

# Koa.js
yarn add koa koa-better-router koa-body @koa/cors koa-router
yarn add @koa/router koa-helmet
yarn add -D @types/koa @types/koa__cors @types/koa__router

# Web General
yarn add axios
yarn add -D @types/axios
yarn add -D browser-sync sass

# Testing
yarn add -D jest @types/jest tape-run
# yarn add -D mocha chai sinon
# yarn add -D @types/chai @types/sinon @types/mocha

# Database: Sqlite3, PostgreSQL, MySQL
yarn add better-sqlite3
yarn add -D @types/better-sqlite3

yarn add pg
yarn add -D @types/pg
yarn add sequelize g-hstore
yarn add -D sequelize-cli

yarn add mysql2

## NPM Script Build dependencies
yarn add -D cross-env cross-var gazeall npm-run-all shx
yarn add -D typedoc typedoc-plugin-markdown typescript biome
yarn add -D @types/shelljs esdoc
yarn add -D eslint @eslint/js typescript typescript-eslint

if [ "$1" = "-" ]; then
  rm -rf node_modules
  # rm -f package-lock.json yarn.lock pnpm-lock.yaml
fi
