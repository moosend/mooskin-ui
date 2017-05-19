module.exports = {
 entry: './src/index.ts',
 output: {
   filename: './dist/index.js',
   library: 'mooskin',
   libraryTarget: 'umd',
   umdNamedDefine: true
 },
 module: {
   rules: [
     {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },
     {
       enforce: 'pre',
       test: /\.tsx?$/,
       use: "source-map-loader"
     },
     {
       test: /\.tsx?$/,
       exclude: /node_modules/,
       use: [ 'babel-loader', 'ts-loader' ]
     },
     {
        test: /\.css$/,
        use: [
            'style-loader',
            { 
                loader: 'css-loader', 
                options: { 
                    importLoaders: 1,
                    modules: true
                } 
            },
            'postcss-loader'
        ]
      }
   ]
 },
 plugins: [
  // new DtsBundlePlugin()
 ],
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 devtool: 'inline-source-map',
};

// function DtsBundlePlugin(){}

// DtsBundlePlugin.prototype.apply = function (compiler) {
//   compiler.plugin('done', function(){
//     var dts = require('dts-bundle');

//     dts.bundle({
//       name: 'mooskin',
//       main: 'dist/index.d.ts',
//       out: './indexx.d.ts',
//       removeSource: true,
//       outputAsModuleFolder: false // to use npm in-package typings
//     });
//   });
// };