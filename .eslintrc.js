module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true
    }
  },
  rules: {
    'no-debugger': 'off',
    'no-console': 'off',
    'no-return-await': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-new-wrappers': 'error',
    'no-unused-vars': ['error', { args: 'after-used', varsIgnorePattern: '^_' }],
    yoda: 'error',
    curly: 'warn'
  },
  overrides: [
    {
      files: ['__tests__/**', '*.test.js'],
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['*.config.js', '*rc.js'],
      rules: {
        strict: 'off'
      }
    }
  ]
};
