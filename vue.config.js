const isProductionEnv = process.env.NODE_ENV === 'production'

console.log(process.env.NODE_ENV)

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: isProductionEnv ? false : true,
  devServer: {
    port: 8081,
    //   proxy: {
    //     "/xxx": {
    //       target: "xxx.xxx.com",
    //       changOrigin: true,
    //       pathRewrite: {},
    //       ws: true,
    //     },
    //   },
  },
}
