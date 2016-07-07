var express = require("express");
var app = express();
var path = require('path');

var importThreejs = require('./modules/three');


app.use(express.static('public'));


app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname,'public', 'index.html'));
});


app.get('/balance', function (request, response){
var toHtml = {};
  toHtml.ranNum = importThreejs.moneyNumber();
  toHtml.accountBal = importThreejs.words();
  response.send(toHtml);
});

// app.get('/index.html', function (request, response){
// });


var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Server Listening on port', port, 'CNTRL C to stop');
});
