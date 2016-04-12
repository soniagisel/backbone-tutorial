define(['Backbone, text!logInPageTmpl'], function (Backbone, LogInPageTmlp) {
    var logInPageView = Backbone.View.extend({
        el: $('.container'),

        initialize: function () {
            this.template = _.template(LogInPageTmlp);
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });
     return logInPageView;
});