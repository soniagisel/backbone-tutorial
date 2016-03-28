define(['Backbone', 'usersView', 'blogsView', 'userFormView'], function(Backbone, UsersView, BlogsView, UserFormView) {
	return Backbone.Router.extend({

		routes: {
			''          : 'blogsPage',
			'blogs'     : 'blogsPage',
			'users'     : 'usersPage',
			'users/:id' : 'editUserPage'
		},

		blogsPage : function() {
			new BlogsView();
		},

		usersPage : function() {
			new UsersView();
		},

		editUserPage : function() {
			new UserFormView();
		}
	});
});