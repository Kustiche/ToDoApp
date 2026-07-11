import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'array-callback-return': ['error', { checkForEach: true }],
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['warn', 'always'],
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': 'error',
      'no-debugger': 'warn',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': ['error', { allowSeparateTypeImports: true }],
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-obj-calls': 'error',
      'no-self-assign': 'error',
      'no-sparse-arrays': 'error',
      'no-unassigned-vars': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unused-vars': 'error',
      'no-use-before-define': 'warn',
      'no-useless-assignment': 'error',
      'use-isnan': 'error',

      // Предложения

      eqeqeq: 'error',
      'no-console': 'warn',
      'no-delete-var': 'error',
      'no-empty': 'error',
      'no-extra-boolean-cast': 'error',
      'no-global-assign': 'error',
      'no-redeclare': 'error',
      'no-shadow-restricted-names': 'error',
    },
  },
]);
