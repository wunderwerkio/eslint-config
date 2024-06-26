import { fixupPluginRules } from '@eslint/compat';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    plugins: {
      react: eslintPluginReact,
      'react-hooks': fixupPluginRules(eslintPluginReactHooks),
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.stories.jsx', '**/*.stories.js', '**/*.stories.tsx', '**/*.stories.ts'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
