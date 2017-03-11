const path = require('path');
const webpack=require('webpack');
module.exports = {
    entry: {
        kang_index: path.resolve('./dev/kang_index.jsx'),
        zqy_refer: path.resolve('./dev/zqy_refer.jsx'),
        li_contact: path.resolve('./dev/contact.jsx'),
        zk_index: path.resolve('./dev/zk_index.jsx'),
        zqy_tk: path.resolve('./dev/zqy_tk.jsx'),
        lq_brand: path.resolve('./dev/zqy_brand.jsx'),
        cyh_admin: path.resolve('./dev/cyh_admin.jsx'),
        xdz_detail: path.resolve('./dev/xdz_detail.jsx'),
        fu: path.resolve('./dev/fu.jsx'),
        login:path.resolve('./dev/login.jsx')
    },
    output: {path: path.resolve('www/public/js'), filename: '[name].js'},
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    },
    plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
    ]
}
//npm run start/watch   (.json文件script添加)
