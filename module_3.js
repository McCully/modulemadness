var randomNumber = require('./module_1');
var formatDollar = require('./module_2');

exports.randomNumber = function(){
  return formatDollar(randomNumber(100, 1000000)) + '\n';
};

exports.account = function(){
  return 'Account balance: \n';
};
