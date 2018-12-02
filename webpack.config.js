const devModule = require('./build/webpack.dev.config');
const proModule = require('./build//webpack.pro.config');

let finalModule = {};
const ENV = process.env.NODE_ENV;
switch (ENV) {
  case 'dev':
    finalModule = devModule;
    break;
  case 'prod':
    finalModule = proModule;
    break;
  default:
    break;
}
module.exports = finalModule;
