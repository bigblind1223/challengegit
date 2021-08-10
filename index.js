var name = require('./package.json').name
// add reverse route
require('productionize')(name)

var server = require('./lib/server')
var port = process.env.PORT || 5000
server().listen(port)
console.log(name, 'listening on port', port)
