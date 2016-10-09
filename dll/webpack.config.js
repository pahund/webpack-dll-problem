var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: {
		alpha: ["./alpha", "./a", "module", "preact"],
		beta: ["./beta", "./b"]
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "MyDll.[name].js",
		library: "[name]_[hash]"
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.DllPlugin({
			path: path.join(__dirname, "js", "[name]-manifest.json"),
			name: "[name]_[hash]"
		})
	]
};
