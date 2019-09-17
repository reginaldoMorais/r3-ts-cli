const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|js)x?$/,
    loader: require.resolve('babel-loader')
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  });

  return config;
};
