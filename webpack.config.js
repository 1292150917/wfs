/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2020-01-13 10:27:52
 * @LastEditors: zhang zi fang
 * @LastEditTime: 2020-09-09 12:01:52
 */

//  不能用于 npm安装  =>仅一个server服务
const webpack = require('webpack');
const ASSET_PATH = process.env.NODE_ENV || '/';
module.exports = {
    entry: "./spa/index.js",
    plugins: [
        new webpack.DefinePlugin({
            CESHI: JSON.stringify("1+1")
        })
    ],
    devServer: {
        port: 9990,
        //进度条
        progress: true,
        contentBase: './spa',
        proxy: {
        }
    },
}