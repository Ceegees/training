var express=require('express');
var router=express.Router();
var movies=[
{id: 101, name: "PEE", year: 1992, rating: 3.2},
{id: 102, name: "CEE", year: 1998, rating: 5.0},
{id: 103, name: "GEE", year: 2000, rating: 6.3},
{id: 104, name: "TEE", year: 2009, rating: 3.3}
];

router.get('/:id([0-9]{3,})',function(req,res){
	var currMovie=movies.filter(function(movie){
		if(movie.id==req.params.id){
			return true;
		}
	});
if(currMovie.length==1){
	res.json(currMovie[0]);
}
else{
	res.status(404);
	res.json({message: "Not Found"});
}
});
router.post('/',function(req,res){
	//check whether the entered fields are valid or not
	if(!req.body.name ||
		!req.body.year.toString().match(/^[0-9]{4}$/g) ||
		!req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)){
		res.status(400);
	res.json({message: "Bad request"});
	}
	else{
		var newId=movies[movies.length-1].id+1;
		movies.push({
			id: req.body.name,
			name: req.body.name,
			year: req.body.year,
			rating: req.body.rating
		});
		res.json({message: "New movie created.", location: "/movie/" +req.params.id});

	}
	});
router.put('/:id',function(req,res){
	//Check whether the provided fields are valid or not
	if(!req.body.name ||
		!req.body.year.toString().match(/^[0-9]{4}$/g) ||
		!req.body.rating.toString().match(/^[0-9]\.[0-9]$/g) ||
		!req.params.id.toString().match(/^[0-9]{3,}$/g)){
		res.status(400);
	res.json({message: "Bad Request"});
	}
	else{
		//Gets the index of movie with given id.
		var updateIndex=movies.map(function(movie){
			return movies.id;
		}).indexOf(parseInt(req.params.id));

		if(updateIndex===-1){
			//NOt found the movie, Then create new 
			movies.push({
				id: req.params.id,
				name: req.body.name,
				year: req.body.year,
				rating: req.body.rating
			});
			res.json({message: "Movie Id"+req.params.id + " updated", location: "/movie/" + req.params.id});
		}
	}
});

router.delete('/:id', function(req,res){
	var removeIndex = movies.map(function(movie){
		return movies.id;
	}).indexOf(req.params.id); //Gets us the index of movie with given id
	if(removeIndex === -1){
		res.json({message: "Not found"});

	}
	else{
		movies.splice(removeIndex,1);
		res.send({message: "Movie id" +req.params.id + "removed"});
	} 
});

 module.exports=router;