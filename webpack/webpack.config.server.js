const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const alias = require('../webpack.resolve.alias')

module.exports = (env, options) => {
	const isProduction = env && env.prod ? true : false

	const config = {
		entry: './src/client/serverRenderer',
		mode: isProduction ? 'production' : 'development',
		devtool: isProduction ? 'none' : 'source-map',
 		externals: [nodeExternals()],
		output: {
			filename: 'serverRenderer.js',
			libraryTarget: 'commonjs2',
			path: path.resolve(__dirname, '../dist'),
			publicPath: '/'
		},

		resolve: {
			extensions: ['.js', '.jsx'],
			alias: alias
		},

		module: {
			rules: [
				{
		            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
		            loader: 'url-loader',
		            options: {
						name: '[path][name].[ext]?[hash]'
					}
		        },
				{
					test: /\.jsx?$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
		      	{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader',
								options: {
		                            minimize: isProduction
		                        }
							},
							{
								loader: 'sass-loader',
								options: {
		                            minimize: isProduction
		                        }
							}
						]
					})
				}
			]
		}
	}

	return config
}