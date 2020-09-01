var readlineSync = require('readline-sync');
var number = readlineSync.question('Please give a number');
console.log(number.repeat(number));

