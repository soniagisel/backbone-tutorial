var Routes = Backbone.Router.extend({

	routes: {
		''         : 'blogsPage',
		'blogs'    : 'blogsPage',
		'users'    : 'usersPage'
	},

	blogsPage : function() {
		new BlogsView();
	},

	usersPage : function() {
		new UsersView();
	}
});

var routes = new Routes();

Backbone.history.start();