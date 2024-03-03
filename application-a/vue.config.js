const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  //transpileDependencies: true,
  publicPath: 'http://localhost:8080/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'application_a',
        filename: 'remoteEntry.js',
        remotes: {
          // application_b: 'application_b@http://localhost:9001/remoteEntry.js',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
})
