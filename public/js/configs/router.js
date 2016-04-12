define(['Backbone', 'usersPageView', 'blogsPageView', 'userFormView', 'usersCollection', 
	'blogsCollection', 'signUpPageView'],
	function(Backbone, UsersPageView, BlogsPageView, UserFormView, UsersCollection, BlogsCollection, SignUpPageView) {
		return Backbone.Router.extend({
	
			routes: {
				''             : 'signUpPage',
				'auth/signup'  : 'signUpPage',
				'auth/login'   : 'logInPage',
				'blogs'        : 'blogsPage',
				'users'        : 'usersPage',
				'users/:id'    : 'editUserPage',
				'user/new'     : 'createUserPage'
			},
			
			signUpPage: function () {
				new SignUpPageView();
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