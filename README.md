# @wunderwerk/eslint-config

ESLint config with support for the following:

- React
- React Hooks
- ES6 Imports
- JSDoc
- **Optional:** TypeScript

## Usage

Install the NPM package `npm install @wunderwerk/eslint-config` and then
reference the config in your `.eslintrc.js`:

```json
{
  "extends": [
    "@wunderwerk/eslint-config"
  ]
}
```

The module provides two different configs, one for JavaScript and one for TypeScript.
The default config shown in the example above is for JavaScript.

To use the TypeScript config, extend the config as follows:

```json
{
  "parser": "@typescript-eslint/parser",
  "extends": [
    "@wunderwerk/eslint-config/typescript"
  ]
}
```
