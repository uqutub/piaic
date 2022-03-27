const path = require('path');

console.log('__filename ', __filename);

var pathObj = path.parse(__filename);

console.log('pathObj ', pathObj)