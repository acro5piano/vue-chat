module.exports = {
  context: __dirname + '/resources/assets/js',

  entry: {
    javascript: './app.js',
  },

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  devServer: {
    proxy: {
      '/': {
        target: {
          host: "localhost",
          protocol: 'http:',
          port: 3001
        },
        secure: false
      }
    },
    contentBase: 'dist',
    port: 3000,
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@': __dirname + './resources/assets/js',
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
};
