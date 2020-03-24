const path = require('path');

module.exports = {
  ignore: ['**/Nav*/*.js'],
  components: 'app/components/**/index.js',
  defaultExample: true,
  moduleAliases: {
    components: path.resolve(__dirname, 'app/components'),
    images: path.resolve(__dirname, 'app/images'),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
  },
};
