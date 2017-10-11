var express=require('express');
var router=express.Router();
var movies=[
{id: 101, name: "Flight club", year: 1999, rating: 8.1},
{id: 102, name: "Inception", year: 2010, rating: 8.7},
{id: 103, name: "The dark night", year: 2008, rating: 9},
{id: 104, name: "12 Angry Men", year: 1957, rating :8.9}
];
module.exports=router;

router.get('/',function(req,res){
	res.json(movies);
});

router.post('/',function(req,res){
	if(!req.body.name ||
		!req.body.year.toString().match(/^[0-9]{4}$/g) ||
		!req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
		res.status(400);
		res.json({messsage: "Bad Request"});
	}
	else{
		var newId=movies[movies.length-1].id+1;
		movies.push({
			id:newId,
			name:req.body.name,
			year:req.body.year,
			rating:req.body.rating
		});
		res.json({message: "New movies created", location: "/movies/" + newId});
	}
});