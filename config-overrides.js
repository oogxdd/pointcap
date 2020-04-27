const {
  override,
  addWebpackResolve,
  addWebpackModuleRule
} = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackResolve({
    alias: {
      hooks: path.resolve(__dirname, 'src/hooks/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      icons: path.resolve(__dirname, 'src/assets/icons')
    }
  }),
  addWebpackModuleRule({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })
)
