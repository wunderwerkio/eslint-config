module.exports = {
  plugins: ['import', 'jsdoc'],
  extends: ['plugin:jsdoc/recommended', 'prettier'],
  rules: {
    'import/first': 'warn',
    'no-var': 'warn',
    'no-empty': 'warn',
    'no-unused-vars': 'warn',
    'no-console': [
      'warn',
      {
        allow: ['assert'],
      },
    ],
    'no-fallthrough': 'warn',
    'no-case-declarations': 'error',
    'no-self-assign': 'warn',
    'new-cap': 'warn',
    'no-undefined': 'off',
    'no-global-assign': 'error',
    'prefer-const': 'error',
    'dot-notation': 'error',
    'no-void': 'error',
    'no-useless-catch': 'error',
    'no-prototype-builtins': 'off',
    'jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: false,
        require: {
          ClassDeclaration: true,
          ClassExpression: true,
          ArrowFunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
    'jsdoc/require-description': [
      'error',
      {
        contexts: ['any'],
      },
    ],
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-hyphen-before-param-description': 'warn',
  },
};
