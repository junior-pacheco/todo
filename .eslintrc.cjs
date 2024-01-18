module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'global-require': 'off',
    'newline-per-chained-call': 'off',
    'import/no-dynamic-require': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'class-methods-use-this': 'off',
    indent: ['error', 2]
  }

}
