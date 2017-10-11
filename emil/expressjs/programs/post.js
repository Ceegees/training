var express=require('express');
var app=express();

app.get('/hello',function(req,res){
	res.send('Entered on to the get module');
});

app.post('/hello',function(req,res){
	res.send('Entered on to the post module');
});
app.listen(4000);