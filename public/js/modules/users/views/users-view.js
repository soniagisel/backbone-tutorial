define(['Backbone', 'text!usersViewTmpl', 'usersListView'], function(Backbone, usersViewTmpl, UsersListView) {
	return Backbone.View.extend({
		model: null,
		el: $('.container'),
		template: _.template(usersViewTmpl),

		initialize: function(users) {
			this.model = users;
			this.render();
		},

		render: function() {
			this.$el.html(this.template);
			this.$el.find('.table').append(new UsersListView(this.model).$el);
			return this;
		}
	});
});