define(['Backbone','underscore', 'jquery'], function(Backbone, _, $) {
	return Backbone.View.extend({
		//model: null,
		el: $('.container'),

		initialize: function() {
			this.render();
		},

		render: function() {
			var template = _.template($('<h1>Hola Mundo</h1>').html());
			this.$el.html(template);
		}
	});
});