module.exports.modTwo = toMoney;




function toMoney (input) {
return input.toLocaleString('en',{ style: 'currency', currency: 'USD' , maximumSignificantDigits: 6 });

}
