//Backbone Model
var Blog = Backbone.Model.extend({
	defaults : {
		author : '',
		title  : '',
		url    : ''
	}
});

//Backbone Collection
var Blogs = Backbone.Collection.extend({});

//Instantiate two blogs
var blog1 = new Blog({
	author: 'Damian',
	title: 'Damian\'s Blog',
	url: 'http://damiansblog.com'
});

var blog2 = new Blog({
	author: 'Sonia',
	title: 'Sonia\'s Blog',
	url: 'http://soniasblog.com'
});

//Instantiate a Collection
var blogs = new Blogs([blog1,blog2]);