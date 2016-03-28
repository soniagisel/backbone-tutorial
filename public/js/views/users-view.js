define(['Backbone', 'text!usersViewTmpl', 'usersListView'], function(Backbone, usersViewTmpl, UsersListView) {
	return Backbone.View.extend({
		model: null,
		el: $('.container'),
		template: _.template(usersViewTmpl),

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(this.template);
			this.$el.find('.table').append(new UsersListView().$el);
			return this;
		}
	});
});