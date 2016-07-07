var number = require('./one');
var stringNumber = require('./two');
module.exports.moneyNumber = randomNumString;
module.exports.words = printWords;



function randomNumString () {
  return stringNumber.modTwo(number.modOne(100, 1000000));
}

function printWords () {
   return ("Account balance: \n");
}
