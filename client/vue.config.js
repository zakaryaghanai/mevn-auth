const vueSrc = "./src";
const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, vueSrc),
        "@Views": path.join(__dirname, vueSrc + "/views/"),
        "@Router": path.join(__dirname, vueSrc + "/router/"),
        "@Components": path.join(__dirname, vueSrc + "/components/")
      }
    }
  },
  pages: {
    profile: {
      entry: 'src/views/profile/main.js',
      template: 'public/pages/profile/index.html',
      filename: 'pages/profile/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'profile']
    },
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    products: {
      entry: 'src/views/products/main.js',
      template: 'public/pages/products/index.html',
      filename: 'pages/products/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'products']
    },
  }
}