const isProductionEnv = process.env.NODE_ENV === 'production'

console.log(process.env.NODE_ENV)

module.exports = {
  publicPath: './',
  productionSourceMap: isProductionEnv ? false : true,
  // devServer: {
  //   proxy: {
  //     "/xxx": {
  //       target: "xxx.xxx.com",
  //       changOrigin: true,
  //       pathRewrite: {},
  //       ws: true,
  //     },
  //   },
  // },
}
