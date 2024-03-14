const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require('./package.json').dependencies;

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: 'http://localhost:9002/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'hello_world',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'hello_world' },
        exposes: {
          './routes': './src/router/routes',
          './HelloWorldApp': './src/App'
        },
        // this can be overrided by the host
        shared: {
          ...deps
        }
      }),
    ],
  },
  devServer: {
    port: 9002,
  },
})
