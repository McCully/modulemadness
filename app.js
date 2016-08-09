var http = require('http');
var randomNumber = require('./module_1.js');
var formatDollar = require('./module_2.js');
var module3 = require('./module_3.js');

http.createServer(function (req , res) {
  res.writeHead (200);
  res.write(module3.account() + module3.randomNumber()  + '\n');

  res.end();
}).listen(3000);

console.log('listening on port 3000');
