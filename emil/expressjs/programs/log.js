//create instance for each files
var express=require('express');
var bodyParser=require('body-parser');
var multer=require('multer');
var upload=multer();
var cookieParser=require('cookie-parser');
var session=require('express-session');
var app=express();

//connect with pug file
app.set('view engine','pug');
app.set('views','./views');

//Create subruote for each of the instance
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(upload.array());
app.use(cookieParser());
//app.use(session({secret: "Your secret key"}));

var users=[];//Array to push ecah user's id and password

app.get('/signup',function(req,res){
	res.render('signup');//Get the signup route 
});



app.post('/signup',function(req,res){
	console.log('Posted data to signup')
	if(!req.body.id || !req.body.password){
		res.status("400");
		res.send("Invalid information");
	}
	else{
		users.filter(function(user){
			if(user.id===req.body.id){
				res.render('signup',{
					message: "Already existing user"});
			}
		});
		var newuser= {id:req.body.id, password:req.body.password};
		users.push(newuser);
		req.session.user=newuser;
		res.redirect('/protected_page');
	}
});



function checkSignIn(req,res){
	if(req.session.user){
		next();  //Session exists proceed to next page
	}
	else{ 
		var err=new Error("Not logged in");
		console.log(req.session.user);
		next(err);//Generate an error for unautherized page
	}
}

app.get('/protected_page', checkSignIn, function(req,res){
	res.render('protected_page',{id: req.session.user.id})
});

//Here signup completed

//Here start the login operation

app.get('/login',function(req,res){
	res.render('login');
});

app.post('/login',function(req,res){
	if(!req.body.id || !req.body.password){
		res.rener('login', {message: "Enter both id and password"});
	}
	else{
		users.filter(function(user){
			if(user.id===req.body.id && user.password===req.body.password){
				req.session.user=user;
				res.redirect('/protected_page');
			}
		});
		res.render('login', {message: "Invalid informations"})
	}
});


app.get('/logout',function(req,res){
	req.session.destroy(function(){
		console.log("User logged out successfully");
	});
	res.redirect('/login');
});

app.use('/protected_page',function(err,req,res,next){
	console.log(err);
	//User be unauthenticated then redirect to login
	res.redirect('/login');
});

app.listen(3000);