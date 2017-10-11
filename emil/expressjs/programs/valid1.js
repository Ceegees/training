var express=require('express');
var app=express();

app.use('/things',function(req,res,next){
console.log("The request recieved at next"+Date.now());
next();
});

app.get('/things',function(req,res){
	res.send('Things');
});

app.listen(4005);