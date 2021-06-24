module.exports = {
  './**/*.{ts,tsx,js}': ['prettier --write', 'eslint --fix'],
  'src/**/*.{js,ts,tsx}': ['npm run lint']
}
