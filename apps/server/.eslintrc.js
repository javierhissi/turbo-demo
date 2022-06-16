const { rules, ...otherStuff } = require('eslint-config-mono/eslint-server');

module.exports = {
  ...otherStuff,
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    ...rules,
    'import/no-extraneous-dependencies': 'off',
    'global-require': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
};
