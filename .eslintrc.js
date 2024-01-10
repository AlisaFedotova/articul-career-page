module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    eqeqeq: 'warn',
    'linebreak-style': 'off',
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],
    'prefer-const': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-object-spread': 'warn',
    'no-array-constructor': 'warn',
    'array-callback-return': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-template': 'warn',
    'arrow-parens': 'warn',
    'no-iterator': 'warn',
    'brace-style': 'warn',
    'spaced-comment': 'warn',
    'no-eval': 'error',
    'no-param-reassign': 'error',
    'prefer-arrow-callback': 'error',
    'nonblock-statement-body-position': 'error',
  },
};
