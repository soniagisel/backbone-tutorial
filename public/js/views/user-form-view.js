define(['Backbone', 'text!userFromTmpl', 'usersListView'], function(Backbone, UserFromTmpl) {
    return Backbone.View.extend({
        model: null,
        el: $('.container'),
        template: _.template(UserFromTmpl),

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }
    });
});