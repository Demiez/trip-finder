module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': ["error", { "code": 140 }], // Sets max-len
    'react/prop-types': 0, // Allows not using typechecking via proptypes.
    'linebreak-style': 0, // Disables checking for line-breaks
  },
};
