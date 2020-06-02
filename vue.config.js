module.exports = {
  runtimeCompiler: true,

  pwa: {
    name: 'Game-Console'
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: '\n          @import "@/scss/_variables.scss";\n          @import "@/scss/_global.scss";\n        '
      }
    }
  },

  publicPath: "/game-console/"
}