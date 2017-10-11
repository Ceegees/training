var express=require('express');
var app=express();

var things=require('./thing.js');

app.use('/things',things);

app.listen(3000);