const pkg = require('./package.json');
const path = require('path');
module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/*/*.jsx',

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }, {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://use.fontawesome.com/releases/v5.4.1/css/all.css'
        }
      ]
    }
  },
  require: [
    path.join(__dirname, 'public/w3.css')
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');

    return `import { ${name} } from '${pkg.name}';`;
  },
};