const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  //transpileDependencies: true,
  publicPath: 'http://localhost:9001/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'application_b',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'other' },
        exposes: {
          './HelloWorldFromB': './src/components/HelloWorld',
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 9001,
  },
})
