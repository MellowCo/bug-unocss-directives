
const { uniPostcssPlugin } = require('@dcloudio/uni-cli-shared')
const UnoCSS = require('@unocss/postcss')

module.exports = {
  plugins: [
    uniPostcssPlugin(),
    UnoCSS(),
  ]
}
