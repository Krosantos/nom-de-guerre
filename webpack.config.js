const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	devServer: {
		contentBase: path.join(__dirname, 'src', 'static'),
		port: 3000,
	},
	entry: './src/index.js',
	module: {
		rules: [{
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			options: { presets: ['@babel/preset-env'] },
			test: /\.(js|jsx)$/,
		},
		{
			loader: 'style-loader',
			test: /\.css$/,
		},
		{
			loader: 'css-loader',
			query: {
				localIdentName: '[name]__[local]___[hash:base64:5]',
				modules: true,
			},
			test: /\.css$/,
		},
		{
			test: /\.env$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '.env',
				},
			}],
		},
		{
			test: /\.html$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			}],
		},
		{
			test: /\.(png|svg|jpg|gif)$/,
			use: [
				'file-loader',
			],
		},
		{
			test: /\.(eot|ttf|woff|woff2)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
					publicPath: 'fonts/',
				},
			}],
		},
		],
	},

	node: {
		fs: 'empty',
	},
	output: {
		filename: 'bundle.js',
		publicPath: '/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new Dotenv(),
	],
	resolve: {
		alias: {
			'@api': path.resolve(__dirname, 'src', 'client', 'modules', 'api'),
			'@components': path.resolve(__dirname, 'src', 'client', 'components'),
			'@constants': path.resolve(__dirname, 'src', 'constants'),
			'@core': path.resolve(__dirname, 'src', 'client', 'components', 'core'),
			'@pairs': path.resolve(__dirname, 'src', 'client', 'modules', 'pairs'),
			'@selectors': path.resolve(__dirname, 'src', 'client', 'modules', 'selectors'),
		},
		extensions: ['*', '.js', '.jsx'],
	},
};
