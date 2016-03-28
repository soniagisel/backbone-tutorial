var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/blogroll');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
	author: String,
	title: String,
	url: String
});

var UserSchema = new Schema({
	username: String,
	email: String,
	phone: String
});

mongoose.model('Blog', BlogSchema);
mongoose.model('User', UserSchema);

var Blog = mongoose.model('Blog');
var User = mongoose.model('User');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


// ROUTES BLOGS
app.get('/api/blogs', function(req, res) {
	Blog.find(function(err, docs) {
		docs.forEach(function(item) {
			console.log('Received a GET request for _id: ' + item._id);
		});
		res.send(docs);
	});
});

app.post('/api/blogs', function(req, res) {
	console.log('Received a POST request');
	for (var key in req.body) {
		console.log(key + ': ' + req.body[key]);
	}
	var blog = new Blog(req.body);
	blog.save(function(err, doc) {
		res.send(doc);
	});
});


app.delete('/api/blogs/:id', function (req, res) {
	console.log('Received a DELETE request for _id: ' + req.params.id );
	Blog.remove({_id: req.params.id},
		function(err) {
			res.send({_id: req.params.id})
	});
});

app.put('/api/blogs/:id', function(req, res) {
	Blog.update({
		_id: req.params.id
	}, req.body, function(err) {
		res.send({_id: req.params.id})
	});
});


// ROUTES USERS
app.get('/api/users', function (req, res) {
	User.find(function (err, docs) {
		docs.forEach(function (item) {
			console.log('Received a GET request for USER _id: ' + item._id);
		});
		res.send(docs);
	});
});

app.post('/api/users', function (req, res) {
	console.log('Received POST request for USERS');
	for (var key in req.body) {
		console.log(key + ': ' + req.body[key]);
	}
	var user = new User(req.body);
	user.save(function (err, doc) {
		res.send(doc);
	});
})

app.delete('/api/users/:id', function (req, res) {
	console.log('Received DELETE request for user _id: ' + req.params.id);
	User.remove({_id: req.params.id},
		function (err) {
			res.send({_id: req.params.id})
		}
	);
});

app.put('/api/users/:id', function(req, res) {
	User.update({
		_id: req.params.id
	}, req.body, function(err) {
		res.send({_id: req.params.id})
	});
});

var port = 3000;

app.listen(port);
console.log('server on ' + port);