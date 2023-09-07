module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['./base.js', 'plugin:jsdoc/recommended-typescript', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
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
        'jsdoc/require-description-complete-sentence': 'warn',
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
              ':function:not(:function :function)',
            ],
          },
        ],
      },
    },
  ],
};
