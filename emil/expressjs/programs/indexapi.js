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
var movie=require('./movie.js');

//Use the router on the sub route
app.use('/movie',movie);

app.listen(3000);