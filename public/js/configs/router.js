define(['Backbone', 'usersView', 'blogsView'], function(Backbone, UsersView, BlogsView) {
	return Backbone.Router.extend({

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
});