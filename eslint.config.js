
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
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
});