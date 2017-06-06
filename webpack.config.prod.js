import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	target: 'web',
	entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
				})
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[chunckhash].[ext]'
					}
				}]
			},
			{
				test: /\.vue$/,
				use: [{
					loader: 'vue-loader',
					options: {
						loaders: {}
						// other vue-loader options go here
					}
				}]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].[contenthash].css'),
		new WebpackMd5Hash(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
			inject: true,
			trackJSsToken: ' '
		}),
		new webpack.optimize.UglifyJsPlugin()
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},
	devtool: 'source-map'
};
