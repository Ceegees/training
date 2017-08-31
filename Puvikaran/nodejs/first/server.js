var express = require('express');
var app = express();

app.get('/', function(req,res) {
    res.send("Hello from express server");
});

app.get('/test', function(req,res) {
    res.send("Testing Successfull...!");
});

app.listen('8081',function() {

console.log("Server is up on port: 8081");
});
