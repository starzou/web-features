/**
 * @module webpack.config
 * @description
 * @time 2015-07-26 12:40
 * @author StarZou
 **/
module.exports = {
    entry : "./entry.js",
    output: {
        path    : __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    }
};