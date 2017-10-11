var express=require('express');
var app=express();

app.get('/things/:id/:name',function(req,res){
	res.send("The entered name is"+req.params.name+"\nid is"+req.params.id);
});
app.listen(4001);