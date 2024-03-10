const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require('./package.json').dependencies;

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
        library: { type: 'var', name: 'application_b' },
        exposes: {
          './HelloWorld': './src/components/HelloWorld',
        },
        // this can be overrided by the host
        shared: {
          ...deps,
          '@/constants': {
            singleton: true,
            strictVersion: true,
            requiredVersion: '0.0.1',
            version: '0.0.1'
          }
        }
      }),
    ],
  },
  devServer: {
    port: 9001,
  },
})
