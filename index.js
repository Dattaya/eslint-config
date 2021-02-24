const extendsArr = [
  'airbnb',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
];

const rules = {
  'import/extensions': 'off',
  'max-len': ['error', {
    code: 130, ignoreComments: true, ignoreTrailingComments: true, ignoreUrls: true,
  }],
  'no-plusplus': [
    'error',
    {
      allowForLoopAfterthoughts: true,
    },
  ],
  'no-use-before-define': 'off',
  'prefer-arrow-callback': 'off',
  'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts', '.js', '.jsx'] }],
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/state-in-constructor': 'off',
};

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: extendsArr,
  plugins: [
    'react',
    'react-hooks',
  ],
  rules,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'import/extensions': [
      '.js', '.jsx', '.ts', '.tsx',
    ],
    react: {
      version: 'detect',
    },
  },
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...extendsArr,
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    rules: {
      ...rules,
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-explicit-any': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
      '@typescript-eslint/no-use-before-define': ['warn'],
      '@typescript-eslint/explicit-function-return-type': [ // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        'warn',
        {
          allowExpressions: true,
        },
      ],
    },
  }],
};
