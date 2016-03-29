define(['Backbone', 'usersView', 'blogsView', 'userFormView', 'usersCollection', 'blogsCollection'], 
	function(Backbone, UsersView, BlogsView, UserFormView, UsersCollection, BlogsCollection) {
		return Backbone.Router.extend({
	
			routes: {
				''          : 'blogsPage',
				'blogs'     : 'blogsPage',
				'users'     : 'usersPage',
				'users/:id' : 'editUserPage',
				'user/:id' : 'createUserPage'
			},
	
			blogsPage : function() {
				var blogs = new BlogsCollection();
				new BlogsView(blogs);
			},
	
			usersPage : function() {
				var users = new UsersCollection();
				new UsersView(users);
			},
	
			editUserPage : function() {
				new UserFormView();
			},
	
			createUserPage : function() {
				var users = new UsersCollection();
				new UserFormView(users);
			}
	});
});