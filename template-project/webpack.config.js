const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const dotenv = require('dotenv');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const getEnv = () => {
  let dotenvPath = '';

  if (process.env.NODE_ENV === 'production') {
    dotenvPath = 'env/.env.production';
  } else if (process.env.NODE_ENV === 'staging') {
    dotenvPath = 'env/.env.production';
  } else {
    dotenvPath = 'env/.env';
  }

  return dotenv.config({
    path: dotenvPath,
  }).parsed;
};

const setPlugins = () => {
  const plugins = [
    new MiniCssExtractPlugin({
      filename: 'client.css',
      chunkFilename: 'vendor.css',
      ignoreOrder: false,
    }),

    new HTMLWebpackPlugin({
      title: 'Title',
      template: path.resolve(__dirname, `${srcPath}/client/index.ejs`),
    }),

    new webpack.EnvironmentPlugin(['NODE_ENV']),

    new webpack.DefinePlugin({
      'process.env.APP_ENV': JSON.stringify(getEnv()),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),

    new CopyWebpackPlugin([
      { from: `${srcPath}/app/assets/fonts`, to: `fonts`, flatten: true },
      { from: `${srcPath}/app/assets/images`, to: `images` },
    ]),
  ];

  if (process.env.NODE_ENV === 'analyse') {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (process.env.NODE_ENV === 'production') {
    plugins.push(new TerserPlugin());
  }

  if (process.env.NODE_ENV !== 'development') {
    plugins.push(new ProgressBarPlugin());
  }

  return plugins;
};

const setMode = () => {
  if (process.env.NODE_ENV === 'staging') {
    return 'none';
  }
  return process.env.NODE_ENV;
};

module.exports = {
  context: srcPath,

  target: 'web',

  mode: setMode(),

  entry: {
    client: `${srcPath}/client/index.tsx`,
    vendor: [
      '@bootstrap-styled/provider',
      '@bootstrap-styled/v4',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/react-fontawesome',
      'axios',
      'react',
      'react-dom',
      'react-redux',
      'react-redux-toastr',
      'react-router-dom',
      'react-scroll-up',
      'redux',
      'redux-persist',
      'redux-saga',
      'styled-components',
    ],
  },

  output: {
    path: distPath,
    filename: '[name].js',
    publicPath: '/assets/',
  },

  devServer: {
    port: 8081,
    contentBase: `${srcPath}/client`,
    historyApiFallback: true,
  },

  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(ico)$/i,
        use: 'file-loader?name=[name].[ext]',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.woff|.woff2|.ttf|.eot*.*$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },

  plugins: setPlugins(),

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'all',
    },
    minimize: false,
  },

  devtool: 'source-map',
};
