const isProductionEnv = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProductionEnv ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: isProductionEnv ? false : true,
  devServer: {
    // port: 8081,
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
