module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'airbnb-base',
  ],
  env: {
    es6: true,
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // use eslint no-unused vars not standard
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'no-plusplus': 'off',
    // Git changes this for us, it's annoying in development
    'linebreak-style': 'off',
    // Increase line length as tabs are enforced
    'max-len': [1, 200, 0],
    // Enforce typescript semi-colon rules and not just JS
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error'],
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    // base rule can give false positives so must be disabled
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  ignorePatterns: ['**/api/*.json', '**/*.json'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
