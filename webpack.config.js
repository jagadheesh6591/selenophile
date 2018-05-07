var vendor_dir = "./vendor";
var config = {
	addVendor : function(name, path) {
		this.resolve.alias[name] = path;
		this.module.noParse.push(new RegExp(path));
	},
	entry : './src/script/app.js',
	output : {
		path : '../src/main/webapp/script',
		filename : 'app.bundle.js',
	},
	resolve : {
		extensions : [ '', '.js', '.jsx', '.css' ],
		alias : {}
	},
	module : {
		noParse : [],
		loaders : [
				{
					test : /\.jsx?$/,
					exclude : /node_modules/,
					loader : 'babel-loader',
					query : {
						presets : [ 'react', 'es2015', 'stage-0' ],
						plugins : [ 'react-html-attrs',
								'transform-class-properties',
								'transform-decorators-legacy' ],
					}
				}, {
					test : /\.css$/,
					loader: "style-loader!css-loader"
				},
				{
			        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
			        loader: 'url-loader'
			    }]
	}
}

config.addVendor('bootstrap', vendor_dir + '/bootstrap/js/bootstrap.min.js');
config.addVendor('bootstrap.css', vendor_dir + '/bootstrap/css/bootstrap.min.css');
config.addVendor('jquery',vendor_dir+'/jquery/jquery.min.js');

module.exports = config;
