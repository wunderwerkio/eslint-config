import tseslint from 'typescript-eslint';

import base from './base.mjs';

/** @typedef {0 | 1 | 2} Severity */
/** @typedef {"error" | "off" | "warn"} SeverityString */
/** @typedef {Severity | SeverityString } RuleLevel */
/** @typedef {[RuleLevel, ...unknown[]]} RuleLevelAndOptions */
/** @typedef {RuleLevel | RuleLevelAndOptions} RuleEntry */
/** @typedef {Partial<Record<string, RuleEntry>>} RuleRecord */

export default [
  ...tseslint.configs.recommended,
  ...base,
  {
    files: ['*.ts', '*.tsx'],
    /** @type {RuleRecord} */
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        },
      ],
      'jsdoc/require-returns': 'off',
      'jsdoc/require-description-complete-sentence': ['warn', { abbreviations: ['etc', 'e.g.', 'i.e.'] }],
      'jsdoc/require-hyphen-before-param-description': 'warn',
      'jsdoc/no-blank-block-descriptions': 'error',
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
];
