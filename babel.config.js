module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const isDev = process.env.NODE_ENV === 'dev'
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          forceAllTransforms: true,
          useBuiltIns: 'entry', // entry入口引入  polyfill
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true
          }
        }
      ],
      [
        '@babel/preset-react',
        {
          development: isDev,
          throwIfNamespace: false, // defaults to true
          runtime: 'classic' // defaults to classic
          // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      isDev && 'react-refresh/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './src',
          }
        }
      ],
    ].filter(Boolean)
  }
}
