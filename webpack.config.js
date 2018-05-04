const path = require("path");

module.exports = env => {
    const config = {
        mode: env && env.prod ? 'production': 'development',
        devtool: env && env.prod ? 'source-map' : 'eval',

        entry: "./src/index",
        output: {
            path: __dirname,
            filename: "./dist/app.js"
        },
        resolve: {
            extensions: [".js"]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                }
            ]
        },
        devServer: {
            open: true,
            port: 9000,
            contentBase: path.join(__dirname, "public")
        }
    }
    return config;
};
