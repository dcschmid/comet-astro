import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: [
      '.astro/',
      'dist/',
      'node_modules/',
      '*.d.ts',
      // Files with complex template strings that ESLint can't parse
      'src/components/OptimizedImage.astro',
      'src/components/Textarea.astro',
      'src/components/LanguageSwitcher.astro',
      'src/components/MapEmbed.astro',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
  ...astro.configs['flat/recommended'],
  prettier,
];
