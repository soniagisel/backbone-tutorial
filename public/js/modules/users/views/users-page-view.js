define(['Backbone', 'text!usersViewTmpl', 'usersListView'],
	function(Backbone, usersViewTmpl, UsersListView) {
		return Backbone.View.extend({
			collection: null,
			el: $('.container'),
			template: _.template(usersViewTmpl),

			initialize: function(users) {
				this.collection = users;
				this.render();
			},

			render: function() {
				this.$el.html(this.template);
				this.$el.find('.table').append(new UsersListView(this.collection).$el);
				return this;
			}
		});
});