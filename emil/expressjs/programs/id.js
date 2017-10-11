var express=require('express');
var app=express();

app.get('/:id',function(req,res){
	res.send('The id is'+req.params.id);
});
app.listen(5000);