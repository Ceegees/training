var express=require('express');
var app=express();

app.get('/dynamic_view',function(req,res){
	res.render('dynamic',{
		name:"TutorialPoint",
		url:"http://wwww.tutorialpoint.com"
	});
});


app.listen(3000);