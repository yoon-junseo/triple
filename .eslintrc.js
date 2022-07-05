const { extends: extendConfigs, overrides } = createConfig({
  type: 'frontend',
  project: './tsconfig.json',
})

module.exports = {
  extends: [...extendConfigs],
  overrides: [...overrides],
  rules: {
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
}
