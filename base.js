// @ts-check

import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintConfigJsdoc from 'eslint-plugin-jsdoc';

/** @typedef {0 | 1 | 2} Severity */
/** @typedef {"error" | "off" | "warn"} SeverityString */
/** @typedef {Severity | SeverityString } RuleLevel */
/** @typedef {[RuleLevel, ...unknown[]]} RuleLevelAndOptions */
/** @typedef {RuleLevel | RuleLevelAndOptions} RuleEntry */
/** @typedef {Partial<Record<string, RuleEntry>>} RuleRecord */

export default [
  eslint.configs.recommended,
  eslintConfigPrettier,
  eslintConfigJsdoc.configs['flat/recommended'],
  {
    /** @type {RuleRecord} */
    rules: {
      'no-var': 'warn',
      'no-empty': 'warn',
      'no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': [
        'warn',
        {
          allow: ['assert'],
        },
      ],
      'no-fallthrough': 'warn',
      'no-case-declarations': 'error',
      'no-self-assign': 'warn',
      'new-cap': 'off',
      'no-undefined': 'off',
      'no-global-assign': 'error',
      'prefer-const': 'error',
      'dot-notation': 'error',
      'no-void': 'error',
      'no-useless-catch': 'error',
      'no-prototype-builtins': 'off',
      'jsdoc/require-description-complete-sentence': ['warn', { abbreviations: ['etc', 'e.g.', 'i.e.'] }],
      'jsdoc/require-hyphen-before-param-description': 'warn',
      'jsdoc/no-blank-block-descriptions': 'error',
      'jsdoc/tag-lines': ['warn', 'never', { startLines: 1 }],
      'jsdoc/require-jsdoc': [
        'warn',
        {
          publicOnly: false,
          exemptEmptyFunctions: false,
          exemptEmptyConstructors: false,
          require: {
            ArrowFunctionExpression: false,
            ClassDeclaration: false,
            ClassExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            MethodDefinition: false,
          },
          contexts: [
            'ClassDeclaration',
            'ClassExpression',
            // Select a FunctionDeclaration that is not a descendant of
            // another FunctionDeclaration.
            ':function:not(:function :function):not(CallExpression > :function):not(Property > :function)',
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.stories.jsx', '**/*.stories.js', '**/*.stories.tsx', '**/*.stories.ts'],
    rules: {
      'jsdoc/require-jsdoc': 'off',
    },
  },
];
