module.exports = {
  extends: ['./base.js', 'plugin:jsdoc/recommended'],
  rules: {
    // 'jsdoc/require-jsdoc': [
    //   'error',
    //   {
    //     publicOnly: false,
    //     require: {
    //       ClassDeclaration: true,
    //       ClassExpression: true,
    //       ArrowFunctionExpression: true,
    //       MethodDefinition: true,
    //     },
    //   },
    // ],
    'jsdoc/require-description': [
      'error',
      {
        contexts: ['any'],
      },
    ],
  },
};
