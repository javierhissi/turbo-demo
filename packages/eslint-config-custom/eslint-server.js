module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'max-classes-per-file': 'off',
    'no-restricted-syntax': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': [0],
    'no-use-before-define': [0],
    'import/no-unresolved': [0],
    radix: 'off',
    'consistent-return': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['private-constructors', 'protected-constructors'] }
    ],
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'no-useless-constructor': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off'
  }
};
