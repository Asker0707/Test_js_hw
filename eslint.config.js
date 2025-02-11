// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  languageOptions: {
    globals: {
      // Определите глобальные переменные здесь
      window: 'readonly',
      document: 'readonly',
      // другие глобальные переменные, если нужно
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
  },
  // Другие настройки
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // если вы используете React
  ],
  rules: {
    // ваши правила
  },
});