const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
    },
    devServer:{
        static: {
        directory: path.join(__dirname, 'dist'),
        },
        port: 9000
        },
    module: {
        rules: [{
            test: /\.css$/,
            use: ["style-loader","css-loader", "sass-loader"]
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env']
            }
            }
            },
            {
                test: /\.wav$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets/'
                    }
                  }
                ]
              }
        
            ]
    }
}