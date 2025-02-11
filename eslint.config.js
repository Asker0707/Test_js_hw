
export default {
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2023, 
        sourceType: 'module',
      },
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', 
    ],
    rules: {
      'no-unused-vars': 'warn', 
      'react/prop-types': 'off', 
    },
    ignores: [
      '**/node_modules/**', 
      '**/*.min.js',
      'dist/**', 
      'coverage/**', 
      'docs/**',
    ],
  };