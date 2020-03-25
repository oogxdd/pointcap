const { override, addWebpackResolve } = require('customize-cra')
const path = require('path')

module.exports = override(
  // add an alias for "ag-grid-react" imports
  addWebpackResolve({
    alias: {
      hooks: path.resolve(__dirname, 'src/hooks/'),
      styles: path.resolve(__dirname, 'src/styles/')
    }
  })
)
