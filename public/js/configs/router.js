define(['Backbone', 'usersPageView', 'blogsPageView', 'userFormView', 'usersCollection', 'blogsCollection'],
	function(Backbone, UsersPageView, BlogsPageView, UserFormView, UsersCollection, BlogsCollection) {
		return Backbone.Router.extend({
	
			routes: {
				''          : 'blogsPage',
				'blogs'     : 'blogsPage',
				'users'     : 'usersPage',
				'users/:id' : 'editUserPage',
				'user/new'  : 'createUserPage'
			},
	
			blogsPage : function() {
				var blogs = new BlogsCollection();
				new BlogsPageView(blogs);
			},
	
			usersPage : function() {
				var users = new UsersCollection();
				new UsersPageView(users);
			},
	
			editUserPage : function(id) {
				new UserFormView(id);
			},
	
			createUserPage : function() {
				new UserFormView();
			}
	});
});