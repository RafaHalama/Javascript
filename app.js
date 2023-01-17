var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require("request");
var mongo = require('mongodb').MongoClient;
var assert = require('assert');
const mongoose=require('mongoose');
const Product = require('./product');
const User = require('./user');
const Order = require('./order');
const methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const { ensureAuthenticated } = require('./auth');

var urlcon =('mongodb://admin:admin@cluster0-shard-00-00-ubgw2.mongodb.net:27017,cluster0-shard-00-01-ubgw2.mongodb.net:27017,cluster0-shard-00-02-ubgw2.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true');
require('./passport')(passport);
mongoose.connect(urlcon, {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.post('/signup', function (req, res) {
	User.find({email: req.body.email})
	.exec()
	.then(user =>{
	if(user.length>=1){
		
	return console.log("User exists");
	}else{
		const user = new User({
	 email: req.body.email,
	 password: req.body.password
  });
  bcrypt.genSalt(10, (err,salt)=> bcrypt.hash(user.password, salt,(err, hash)=>{
  if(err) throw err;
  user.password=hash;
	user.save()
	.then(result=>{
  console.log(result);
  })
  .catch(err=> console.log(err));
  res.redirect('/index');
  }))
		}//else
	});//then
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/changeinfotest',
    failureRedirect: '/index',
  })(req, res, next);
});

app.get('/changeData', function (req, res) {	
    Product.find(function (err, docs1) {
        User.find(function (err, docs2) {
            res.render('changeinfotest', {
                firstlist : docs1,
                seclist : docs2
            });
        });
    });
});



app.get('/index', function (req, res) {
  res.render('index');
});
app.post('/search', function (req, res) {
	const string = req.body.sinfo;
	const stringg = string.charAt(0).toUpperCase()+string.slice(1);
	Product.find({name: stringg},function(err,docs) {
        res.render('tabela', {
            items : docs
        });
    });
});
app.get('/signupform', function (req, res) {
  res.render('signupform');
});

app.post('/addData', function (req, res) {
  const product = new Product({
		name: req.body.name,
		price: req.body.price,
		type: req.body.type
  });
  product.save().then(result=>{
  console.log(result);
  })
  .catch(err=> console.log(err));
  setTimeout(function(){
res.redirect('/changeData');
}, 1000);	  
});
app.post('/editData', function (req, res) {
	const id = req.body.idd;
	var query = {_id: id};
	var newv = { $set: {name: req.body.name, price: req.body.price, type: req.body.type} };
Product.updateOne(query, newv)
.exec()
.then(result=>{
  console.log(result);
  })
.catch(err=>{
	console.log(err)
});
setTimeout(function(){
res.redirect('/changeData');
}, 1000);
});
app.post('/deleteData', function (req, res) {
const id = req.body.idd;
Product.deleteOne({_id: id})
.exec()
.then(result=>{
  console.log(result);
  })
.catch(err=>{
	console.log(err)
});
setTimeout(function(){
res.redirect('/changeData');
}, 1000);
});

app.post('/addOrder', function (req, res) {
  const order = new Order({
		product: req.body.id,
		user: req.body.idd
  });
  order.save().then(result=>{
  console.log(result);
  })
  .catch(err=> console.log(err));
  setTimeout(function(){
res.redirect('/index');
}, 1000);	  
});

app.get('/get-data-swords', function (req, res) {
	Product.find({type: 'sword'},function(err,docs1) {
		User.find(function (err, docs2) {
        res.render('tabela', {
            items : docs1,
			firstlist: docs2
			});
		});
	});
});
app.get('/get-data-axes', function (req, res) {
	Product.find({type: 'axe'},function(err,docs1) {
        User.find(function (err, docs2) {
        res.render('tabela', {
            items : docs1,
			firstlist: docs2
			});
		});
	});
});
app.get('/get-data-helmets', function (req, res) {
	Product.find({type: 'helmet'},function(err,docs1) {
        User.find(function (err, docs2) {
        res.render('tabela', {
            items : docs1,
			firstlist: docs2
			});
		});
	});
});
app.get('/get-data-shields', function (req, res) {
	Product.find({type: 'shield'},function(err,docs1) {
        User.find(function (err, docs2) {
        res.render('tabela', {
            items : docs1,
			firstlist: docs2
			});
		});
	});
});

app.post('/deleteUser', function (req, res) {
	const id = req.body.idd;
User.deleteOne({_id: id})
.exec()
.then(result=>{
  console.log(result);
  })
.catch(err=>{
	console.log(err)
});
setTimeout(function(){
res.redirect('/changeData');
}, 1000);
});

/*
app.post('/signup', function (req, res) {
	User.find({email: req.body.email})
	.exec()
	.then(user =>{
	if(user.length>=1){
		
	return console.log("User exists");
	}else{
		const user = new User({
	 email: req.body.email,
	 password: req.body.password
  });
  user.save().then(result=>{
  console.log(result);
  })
  .catch(err=> console.log(err));
  res.redirect('/index');
		}
	});
});

app.post('/login', function (req, res) {
	User.findOne({email: req.body.email})
	.exec()
	.then(user =>{
		if(user == null){
			return console.log("User do not exists");   
			}
			if(req.body.password==user.password){
				
				const token = jwt.sign(
				{
					user
				}, 
				'secret', 
				{
					expiresIn: "1h"
				}, 
				);
			 res.render('index', {
            token : token
					});					   
			}else{
			return console.log("Wrong password");  
			}
		})
	.catch(err=>{
	console.log(err)
			});
});
*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});