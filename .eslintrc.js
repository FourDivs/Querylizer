module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'compat', 'import', 'jsx-a11y'],
  rules: {
    strict: 0,
    'no-console': 'warn',
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'compat/compat': 'warn',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'jsx-a11y/no-onchange': 0,
    'jsx-a11y/label-has-for': [
      'warn',
      {
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/media-has-caption': 0,
  },
  settings: {
    polyfills: ['Promise', 'promises'],
  },
};
