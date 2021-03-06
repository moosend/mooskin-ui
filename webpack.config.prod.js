var config = require('./webpack.config.common'),
  glob = require("glob"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

var distFolder = 'lib';
var extractCSS = new MiniCssExtractPlugin({fallback: "style-loader" , filename: "[name]/style.css", allChunks: true});

var entries = glob.sync("./components/*/index.ts", {ignore: ['**/*.spec.tsx', '**/*.spec.ts']}).map(function(entry){ //gets the module paths in components containing index.ts and assigns them to an object
  var obj = {};
  var key = entry.split('/');
  key = key[key.length-2];

  obj[key] = entry;

  return obj;
}).reduce(function(acc, curr){

  for(var i in curr){
    acc[i] = curr[i];
  }

  return acc;
}, {});

entries['index'] = './components/index/index.ts'

config.entry = entries;

config.output = {
  path: __dirname+'/'+distFolder,
  filename: '[name]/index.js',
  library: 'mooskin',
  libraryTarget: 'umd',
  umdNamedDefine: true,
  globalObject: 'this',
  publicPath: '../'
};



config.module.rules.push(
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [ 
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                declaration: true,
                declarationDir: './'+distFolder,
              }
            }
            
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              localIdentName: '[local]___[hash:base64:5]',
              modules: true,
            }
          },
 
          'postcss-loader',
        ]
      },
      {
        test: /\.css$/,    
        exclude: /\*/,                
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 1,
            }
          },
          // 'postcss-loader'
        ]
    }
);

config.plugins.push(
    extractCSS
);

config.externals = [
  'react',
  'react-dom'
];

module.exports = config;
