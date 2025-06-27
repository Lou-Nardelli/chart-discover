import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
const baseConfig = [
  ...compat.config({
    root: true,
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['.next/', 'node_modules/'],
    rules: {
      'prefer-arrow-callback': 'error',
      'react/no-unescaped-entities': 'off',

      'import/no-duplicates': 'warn',
      'no-restricted-imports': [
        'error',
        { patterns: [{ group: ['src'], message: 'Do not import from src' }] },
      ],

      // [Avoid Export Default](https://basarat.gitbook.io/typescript/main-1/defaultisbad)
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'import/extensions': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',

      // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/v12.0.0/README.md#how-is-this-rule-different-from-importorder
      'simple-import-sort/imports': [
        'error',
        {
          // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/v7.0.0/src/imports.js#L5
          groups: [
            // Side effect imports
            [String.raw`^\u0000`],

            // Packages
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter
            [String.raw`^@?\w`],

            // Absolute imports and other imports such as Vue-style `@/foo`
            // Anything not matched in another group
            ['^'],

            // Relative imports
            [
              // https://github.com/lydell/eslint-plugin-simple-import-sort/issues/15

              // ../whatever/
              String.raw`^\.\./(?=.*/)`,
              // ../
              String.raw`^\.\./`,
              // ./whatever/
              String.raw`^\./(?=.*/)`,
              // Anything that starts with a dot
              String.raw`^\.`,
              // .html are not side effect imports
              String.raw`^.+\.html$`,
              // .scss/.css are not side effect imports
              String.raw`^.+\.s?css$`,
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'warn',

      // BAN TYPES
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            'React.FC':
              'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
          },
        },
      ],
    },
    overrides: [
      {
        files: [
          'src/**/page.tsx',
          'src/**/layout.tsx',
          'src/**/loading.tsx',
          'src/**/not-found.tsx',
          'src/**/error.tsx',
          'src/**/global-error.tsx',
          './**/postcss.config.mjs',
          './**/next.config.ts',
          './**/eslint.config.mjs',
          './**/commitlint.config.ts',
        ],
        rules: {
          'import/no-default-export': 'off',
        },
      },
    ],
  }),
];

/** @type {import("eslint").Linter.Config} */
const nextConfig = [
  ...baseConfig,
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript'],
  }),
];

export default nextConfig;
