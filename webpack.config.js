// https://stackoverflow.com/questions/42461279/how-to-deploy-a-react-app-on-apache-web-server
// https://stackoverflow.com/questions/43462367/how-to-overcome-the-cors-issue-in-reactjs
// https://medium.com/@baphemot/understanding-react-deployment-5a717d4378fd


const webpack = require('webpack');
const path = require('path');

var config = {

    mode: "production",

    entry:  __dirname + '/src/index.js',
    
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js'
    },

    // devServer: {
    //     inline: true,
    //     port: 8080
    // },

    // resolveLoader: {
    //     modules: [path.join(__dirname, 'node_modules')]
    // },
    devtool: '#sourcemap',

    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
          // loader: 'babel'

          // query: {
          //     presets: [ 'react']
              // presets: ['es2015', 'react']
          //}
        }
      ]
    }
}

module.exports = config;



// const path = require("path")
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
// const glob = require("glob")

// module.exports = {
//   entry: {
//     "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f)),
//   },
//   output: {
//     filename: "build/static/js/bundle.min.js",
//   },
//   module: {
//     loaders : [
//       {
//         test : /\.jsx?/,
//         include : APP_DIR,
//         loader : 'babel'
//       }
//     ],
//     rules: [
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   plugins: [new UglifyJsPlugin()],
// }


// const path = require("path")
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
// const glob = require("glob")

// module.exports = {
//   entry: {
//     "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f)),
//   },
//   output: {
//     filename: "build/static/js/bundle.min.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   plugins: [new UglifyJsPlugin()],
// }

