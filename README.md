# @wunderwerk/eslint-config

> Support for ESLint v9 was added in version v2!

ESLint config with support for the following:

- React
- React Hooks
- ES6 Imports
- JSDoc
- **Optional:** TypeScript

## Usage

Install the NPM package `npm install -D @wunderwerk/eslint-config` and then
reference the config in your `.eslintrc.js`:

```json
{
  "extends": [
    "@wunderwerk/eslint-config"
  ]
}
```

The module provides config variants for JavaScript and one for TypeScript.
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

### React

You can add react specific rules by extending the `react` config:

```json
{
  "extends": [
    "@wunderwerk/eslint-config/react"
  ]
}
```

### Peer Dependencies

This config references other eslint plugins. These plugins must be installed in
your project and are defined as peer dependencies in this package:

```bash
npm install -D \
  eslint \
  eslint-plugin-import \
  eslint-plugin-jsdoc \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  @typescript-eslint/eslint-plugin
```
