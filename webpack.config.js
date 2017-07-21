var webpack = require("webpack");
require('uglifyjs-webpack-plugin');


module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module:{
		rules: [
			{
				enforce: 'pre',
				test: /\.(css|scss|sass)$/,
				use: [ 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader' ]
			},
			{
                test: /\.(js|css)$/,
                loader: "stripcomment-loader"
            },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
                    loader: 'babel-loader',
                    loader: 'eslint-loader',
                    options: {
                        presets: ['env'],
                        fix: true
                    }
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
			    use: [
			    	'url-loader?limit=10000',
			    	'img-loader'
			    ]
			}
		]
	},
	plugins: [new webpack.optimize.UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false
		},
		output: {
            comments: false
        }	
	})],

	devServer: {
		inline:true,
		port: 8000
	}
}