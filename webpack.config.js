const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports ={
    devtool: 'eval-source-map',
    entry:  __dirname + '/src/main.js',
    output:{
        path:__dirname + '/dist',
        filename:"js/[name].js"
    },
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
        inline: true//实时刷新
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader',]
            },{
                test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:'fonts/[name].[ext]?[hash]'
                }
            },{
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        'less':[
                            'vue-style-loader','css-loader','less-loader'
                        ]
                    }
                }
            },{
                test:/\.less$/,
                use:[
                    'vue-style-loader','css-loader','less-loader'
                ]
            },{
                test:/.(jpg|png)$/,
                use:['url-loader']
            }
        ]
    },resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname,'./src')
        }
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}
