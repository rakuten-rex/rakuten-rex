/**
 * ReX React Components Starter kit
 * webpack configuration
 */

// webpack and native nodejs libs
const webpack = require('webpack');
const path = require('path');
const del = require('del');
const cssnano = require('cssnano');
const { readFileSync } = require('fs');
// Webpack Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DiscardOverriddenCssPropsPlugin = require('./project-scripts/webpack/discard-overridden-css-props');
const BundleSassMixinPlugin = require('./project-scripts/webpack/bundle-sass-mixin');
// Package Information and filenames
const { name, version, description, dependencies } = require('./package.json');

const libraryName = name
  .toLowerCase()
  .replace('@rakuten-rex/', 'rakuten-rex-')
  .replace(/(-)\w/g, m => m.toUpperCase().replace(/-/, ''));
const packageName = name.replace('@rakuten-rex/', '');

// Webpack Config for Production mode
const { entry, npmFiles } = require('./rexconfig');

const config = {
  // Build mode
  mode: 'production',
  name: 'production.config',
  // Entry for component under ./src folder
  entry,
  // Output config to build the static assets JavaScript, CSS, etc.
  output: {
    path: path.resolve(__dirname, `npm`),
    publicPath: '/',
    filename: '[name].production.min.js',
    chunkFilename: '[name].production.min.js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: `${libraryName}OnDemand`,
  },
  // Loaders for Babel, CSS, SASS, Files (SVG, PNG, etc.)
  module: {
    rules: [
      // ESlint
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      // Styles loader for Css and Sass
      {
        test: /\.(css|scss)$/,
        use: [
          // Creates style nodes from JS strings and extract content to .css file
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(svg)$/,
        use: ['@svgr/webpack'],
      },
      // Load Files like JPG, PNG, WebFonts, etc.
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: (_url, _resourcePath) => {
            // eslint-disable-next-line no-unused-vars
            const [beforeSrc, componentImageSrc] = _resourcePath.split('src/');
            return componentImageSrc;
          },
          publicPath: (_url, _resourcePath) => {
            // eslint-disable-next-line no-unused-vars
            const [beforeSrc, componentImageSrc] = _resourcePath.split('src/');
            return componentImageSrc;
          },
        },
      },
    ],
  },
  // Resolve extenstions for JS and JSX
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  // Use React as external library from CDN or Global Window object
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  plugins: [
    // Bundle all Sass mixin files into one mixin
    new BundleSassMixinPlugin({ packageName, name, version }),
    // Copyright
    new webpack.BannerPlugin({
      banner: `
@license ${name} v${version} ${new Date().toISOString().split('T')[0]}
[file]

Copyright (c) 2018-present, Rakuten, Inc.

This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.`,
    }),
    // Extract CSS from javascript bundle
    new MiniCssExtractPlugin({
      filename: '[name].production.min.css',
      chunkFilename: '[name].production.min.css',
    }),
    new DiscardOverriddenCssPropsPlugin(),
    // NPM package distribution
    // License
    new CopyWebpackPlugin([{ from: './LICENSE' }]),
    // index.js (require only .js files)
    new CopyWebpackPlugin([
      {
        from: './project-scripts/webpack/npm/indexJS.tpl',
        to: 'index.js',
        transform(content) {
          return content
            .toString()
            .replace(/__COMPONENT_NAME__/g, npmFiles.index);
        },
      },
    ]),
    // MyComponent/index.js (require .css + .js files)
    new CopyWebpackPlugin(
      npmFiles.components.map(item => {
        return {
          from: './project-scripts/webpack/npm/index.tpl',
          to: `${item}/index.js`,
          transform(content) {
            return content.toString().replace(/__COMPONENT_NAME__/g, item);
          },
        };
      })
    ),
    // MyComponent/css/index.js (require .css file only)
    new CopyWebpackPlugin(
      npmFiles.components.map(item => {
        return {
          from: './project-scripts/webpack/npm/css/index.tpl',
          to: `${item}/css/index.js`,
          transform(content) {
            return content.toString().replace(/__COMPONENT_NAME__/g, item);
          },
        };
      })
    ),
    // MyComponent/css/static.js (require .css file only)
    new CopyWebpackPlugin(
      npmFiles.components.map(item => {
        return {
          from: './project-scripts/webpack/npm/css/static.tpl',
          to: `${item}/css/static.js`,
          transform(content) {
            return content.toString().replace(/__COMPONENT_NAME__/g, item);
          },
        };
      })
    ),
    // Clear version of package.json for NPM
    new CopyWebpackPlugin([
      {
        from: './project-scripts/webpack/npm/package.tpl',
        to: `package.json`,
        transform(content) {
          return content
            .toString()
            .replace(/__COMPONENT_NAME__/g, name.replace('@rakuten-rex/', ''))
            .replace(/__VERSION__/g, version)
            .replace(/__DESCRIPTION__/g, description)
            .replace(/__REACT_VERSION__/g, dependencies.react)
            .replace(/__REACT_DOM_VERSION__/g, dependencies['react-dom']);
        },
      },
    ]),
    // README file for NPM
    new CopyWebpackPlugin([
      {
        from: './project-scripts/webpack/markdown/README.md',
        to: `README.md`,
        transform(content) {
          return content
            .toString()
            .replace(
              /__RAW_GITHUB__/g,
              `https://raw.githubusercontent.com/rakuten-rex/${name.replace(
                '@rakuten-rex/',
                ''
              )}/master/`
            )
            .replace(/__INFO_HOW_TO__/g, '')
            .replace(
              /__EXAMPLE_SASS__/g,
              readFileSync(
                'project-scripts/webpack/markdown/EXAMPLE_SASS.md',
                'utf8'
              )
            )
            .replace(
              /__EXAMPLE_JSX__/g,
              readFileSync(
                'project-scripts/webpack/markdown/EXAMPLE_JSX.md',
                'utf8'
              )
            )
            .replace(
              /__EXAMPLE_HTML__/g,
              readFileSync(
                'project-scripts/webpack/markdown/EXAMPLE_HTML.md',
                'utf8'
              )
                .trim()
                .replace(/(\n)/gm, '\n    ')
            )
            .replace(/__COMPONENT_NAME__/g, name.replace('@rakuten-rex/', ''))
            .replace(/__COMPONENT_NAME_INDEX__/g, npmFiles.index)
            .replace(/__VERSION__/g, version);
        },
      },
    ]),
    // README file for current project
    new CopyWebpackPlugin([
      {
        from: './project-scripts/webpack/markdown/README.md',
        to: `../README.md`,
        transform(content) {
          return content
            .toString()
            .replace(/__RAW_GITHUB__/g, '')
            .replace(
              /__INFO_HOW_TO__/g,
              readFileSync(
                'project-scripts/webpack/markdown/INFO_HOW_TO.md',
                'utf8'
              )
            )
            .replace(
              /__EXAMPLE_SASS__/g,
              readFileSync(
                'project-scripts/webpack/markdown/EXAMPLE_SASS.md',
                'utf8'
              )
            )
            .replace(
              /__EXAMPLE_JSX__/g,
              readFileSync(
                'project-scripts/webpack/markdown/EXAMPLE_JSX.md',
                'utf8'
              )
            )
            .replace(
              /__EXAMPLE_HTML__/g,
              readFileSync(
                'project-scripts/webpack/markdown/EXAMPLE_HTML.md',
                'utf8'
              )
                .trim()
                .replace(/(\n)/gm, '\n    ')
            )
            .replace(/__COMPONENT_NAME__/g, name.replace('@rakuten-rex/', ''))
            .replace(/__COMPONENT_NAME_INDEX__/g, npmFiles.index)
            .replace(/__VERSION__/g, version);
        },
      },
    ]),
  ],
  // Build optimizations
  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [
      // Google Closure compiler instead of TerserJS
      new ClosureCompiler({
        options: {
          compilationLevel: 'SIMPLE',
          languageIn: 'ECMASCRIPT5_STRICT',
          languageOut: 'ECMASCRIPT5_STRICT',
          warningLevel: 'QUIET',
          applyInputSourceMaps: false,
          useTypesForOptimization: false,
          processCommonJsModules: false,
          rewritePolyfills: false,
        },
      }),
      // Optimize css output
      new OptimizeCSSAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAllButFirst: true,
              },
              cssDeclarationSorter: {
                order: 'alphabetically',
              },
              minifyFontValues: {
                removeQuotes: false,
              },
            },
          ],
        },
      }),
    ],
  },
};

const configProd = {
  ...config,
  module: {
    rules: [
      // Babel support for ES6+
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      ...config.module.rules,
    ],
  },
};

const configDev = {
  ...config,
  mode: 'development',
  name: 'development.config',
  output: {
    ...config.output,
    filename: '[name].development.js',
    chunkFilename: '[name].development.js',
  },
  module: {
    rules: [
      // Babel support for ES6+
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      ...config.module.rules,
    ],
  },
  optimization: {
    minimize: false,
  },
  plugins: [
    // Copyright
    new webpack.BannerPlugin({
      banner: `
@license ${name} v${version} ${new Date().toISOString().split('T')[0]}
[file]

Copyright (c) 2018-present, Rakuten, Inc.

This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.`,
    }),
    // Extract CSS from javascript bundle
    new MiniCssExtractPlugin({
      filename: '[name].development.css',
      chunkFilename: '[name].development.css',
    }),
    new DiscardOverriddenCssPropsPlugin(),
    // Optimize css output
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            cssDeclarationSorter: {
              order: 'alphabetically',
            },
            minifyFontValues: {
              removeQuotes: false,
            },
          },
        ],
      },
    }),
  ],
};

// Clean build folder for multiple webpack configs (dev, prod) instead of CleanWebpackPlugin
del.sync([
  path.resolve(config.output.path, '**/*'),
  path.resolve('docs', '**/*'),
]);

// Export webpack config (prod, dev)
module.exports = [configProd, configDev];
