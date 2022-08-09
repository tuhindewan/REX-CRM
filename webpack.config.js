const path = require("path");
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
    ...defaultConfig,
    ...{
        mode: 'development',
        entry: {
            index: './admin/src/index.js'
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, "admin/asset/dist")
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        }
    }
}