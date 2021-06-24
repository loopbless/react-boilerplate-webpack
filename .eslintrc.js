// eslint规则，严禁私自改动
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'standard-with-typescript', // 统一格式化规范
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    projectFolderIgnoreList: ['./config', '.eslintrc.js'],
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    indent: 'off',
    quotes: ['error', 'single'],
    'react/jsx-uses-react': 0,
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off', // 函数必须有返回值
    '@typescript-eslint/no-explicit-any': 'off', // 不能使用any
    '@typescript-eslint/no-floating-promises': 'off', // promise回调成功识别必须处理
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      { allowNullableBoolean: true }
    ], // boolean类型做判断
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['src/components/*.ts', 'src/components/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error']
      }
    }
  ]
}
