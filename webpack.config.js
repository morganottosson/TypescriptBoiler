
const path = require('path');
module.exports = {
    entry: "./src/index.tsx",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        contentBase: './dist',
        compress: true,
      },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader"
            },
            {
              test: /\.css$/,
              use: [
                  {
                      loader: 'style-loader',
                  },
                  {
                      loader: 'css-loader',
                  },
              ],
          },
        ]
    },
};