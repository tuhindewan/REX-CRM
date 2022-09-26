/**
 * External dependencies
 */
const path = require( 'path' );
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extract css to files
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/**
 * Internal dependencies
 *
 */

const NODE_ENV = process.env.NODE_ENV || 'development';
const MRM_ADMIN_PHASE = process.env.MRM_ADMIN_PHASE || 'development';


/**
 * get the entry points
 *
 * @returns {{app: string}}
 */
const getEntryPoints = () => {
  return {
    app: './src/index.js',
  };
};

// WordPress.org’s translation infrastructure ignores files named “.min.js” so we need to name our JS files without min when releasing the plugin.
const outputSuffix = MRM_ADMIN_PHASE === 'core' ? '' : '.min';

const webpackConfig = {
  mode: NODE_ENV,
  entry: getEntryPoints(),
  output: {
    filename: `main${ outputSuffix }.js`,
    chunkFilename: `chunks/[name]${ outputSuffix }.js`,
    path: path.resolve(__dirname, "assets/admin/dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader', // postcss loader needed for tailwindcss
            options: {
              postcssOptions: {
                ident: 'postcss',
                // plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline'
      },
    ],
  },
  resolve: {
    fallback: {
      // Reduce bundle size by omitting Node crypto library.
      crypto: 'empty',
      fs: false,
      path: false,
    },
    extensions: [ '.json', '.js', '.jsx', '.ts', '.tsx' ],
    alias: {
      '~': path.resolve( __dirname + '/src' ),
      $: 'jQuery',
      jquery: 'jQuery',
      '@extensions': path.resolve('./packages/easy-email-extensions/src'),
      '@core': path.resolve('./packages/easy-email-core/src'),
      '@arco-themes': path.resolve('./node_modules/@arco-themes'),
      '@': path.resolve('./packages/easy-email-editor/src'),
      'easy-email-editor/lib/style.css': path.resolve(__dirname, 'package.json'),
      'easy-email-extensions/lib/style.css': path.resolve(__dirname, 'package.json'),
      'react-final-form': path.resolve(__dirname, './node_modules/react-final-form'),
      'easy-email-core': path.resolve('./packages/easy-email-core/src/index.tsx'),
      'easy-email-editor': path.resolve('./packages/easy-email-editor/src/index.tsx'),
      'easy-email-extensions': path.resolve('./packages/easy-email-extensions/src/index.tsx'),
    },
  },
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: "css/admin.css", // relative to output.path
    }),
  ],
  externals: [
    'packages/easy-email-core/src/index.tsx',
    'packages/easy-email-editor/src/index.tsx',
    'packages/easy-email-extensions/src/index.tsx',
  ],
};

module.exports = webpackConfig;