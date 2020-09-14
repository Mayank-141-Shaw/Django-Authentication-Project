module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modeules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}