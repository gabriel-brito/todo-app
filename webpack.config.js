module.exports = {
	entry: './app/todoApp.js',
	output: { 
		filename: 'public/bundle.js' 
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}