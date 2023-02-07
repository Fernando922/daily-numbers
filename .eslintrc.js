module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'detox', 'sort-keys-fix'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-globals': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': 'off',
    'no-useless-escape': 'off',
    'no-console': 'error',
    'import/no-extraneous-dependencies': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
};
