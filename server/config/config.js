var path = require('path');
var rootPath = path.normalize( __dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/test',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://cz:kit32sum@ds051851.mongolab.com:51851/test1',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
}
