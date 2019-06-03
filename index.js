const http = require('http'); //server
var fs = require('fs'); //file or folder 

var express = require('express');
var app = express();
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.use('/', function(req,res){
    res.send("test");
});

var port = process.env.PORT;

console.log(port+"1");
if(typeof port==="undefined"){
    port = 3000
}
console.log(port+"2");

app.listen(port);
console.log("App started at"+port);