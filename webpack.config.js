var path = require('path');

module.exports = {
    entry : {
        javascript : "./src/index.js"
    },
    output : {
        /* path is the physical folder where compilation output will be placed */
        path : path.resolve(__dirname, "dist"),
        /* public path is the virtual directory in which resources can be accessed when served */
        publicPath : "/assets/",
        filename : 'bundle.js'
    },

    devtool : 'source-map',
    resolve : {
        extensions : ["", ".webpack.js", ".web.js", ".js"]
    },
    module : {
        loaders : [
            {
                test : /\.tsx?$/,
                loader : "ts-loader"
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }

        ],
        preLoaders : [
            {
                test : /\.js$/,
                loader : "source-map-loader"
            },
            { 
                test: /\.jsx?$/, 
                loader: 'eslint', 
                exclude: /node_modules/ 
            }
        ]
    }
    ,
    // Individual Plugin Options
    eslint: {
        emitError: true,
        failOnError: true,
        failOnWarning: false
    }
    
}