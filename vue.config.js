module.exports = {
  runtimeCompiler: true,

  pwa: {
    name: 'Game-Console'
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_global.scss";
        `
      }
    }
  },
}