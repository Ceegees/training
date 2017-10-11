var express=require('express');
var app=express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/',function(req,res){
	res.cookie('name','express').send('cookie set');
});
app.get('/new',function(req,res){
	res.cookie('name1','nodejs').send('cookie set');
});
app.get('/showcookie',function(req,res){
	console.log('Cookies:',req.cookies);
});
app.listen(5000);