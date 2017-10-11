var express=require('express');
var router=express.Router();

router.get('/', function(req,res){
	res.json(movies);
});

var movies=[
{id: 101, name: "The tiger", year :2003, rating: 9.8},
{id: 102, name: "The truth", year :2004, rating: 7.8},
{id: 103, name: "The king", year :2006, rating: 6.7}
];


router.put('/:id',function(req,res){
	if(!req.body.name ||
		!req.body.year.toString().match(/^[0-9]{4}$/g) ||
		!req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
		!req.params.id.toString().match(/^[0-9]{3,}$/g)){
		res.status(400);
	res.json({message: "Bad Request"});
	}
	else{
		var updateIndex=movies.map(function(movie){
			return movie.id;
		}).indexOf(parseInt(req.params.id));
		if(updateIndex === -1){
			movies.push({
				id:req.params.id,
				name:req.body.name,
				year:req.body.year,
				rating:req.body.rating
			});
		res.json({message: "New Movie Created", location: "/movies/" +req.params.id});
		}
		else{
			movies[updateIndex]={
				id: req.params.id,
				name:req.body.name,
				year:req.body.year,
				rating:req.body.rating
			};
			res.json({meassage: "Movie id" +req.params.id + " updated.",
				location: "/movies/"+req.params.id});
		}
	}
});
module.exports=router;