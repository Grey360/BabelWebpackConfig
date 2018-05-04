const path = require('path');
module.exports = {
    entry: "./main/test.js", // string | object | array
    output: {
        path: path.resolve(__dirname, "dist"), // string
        filename: "bundle.js", // string
    },
    watch: true,
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, "app")
            ],
            exclude: [
                path.resolve(__dirname, "app/demo-files")
            ],
            loader: "babel-loader",
            options: {
                presets: ["es2015"]
            },
        }]
    }
}