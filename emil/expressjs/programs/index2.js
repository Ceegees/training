var express=require('express');
var bodyParser=require('body-parser');
var multer=require('multer');
var upload=multer();
var cookieParser=require('cookie-parser');

var app=express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Define a router
var movies1=require('./movies1.js');

//Use the router on the sub route
app.use('/movies1',movies1);

app.listen(3000);