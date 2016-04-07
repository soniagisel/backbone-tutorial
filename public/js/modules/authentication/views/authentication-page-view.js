define(['Backbone','text!signUpPageTmpl'],
    function (Backbone, SignUpPageTmpl) {

        var SignUpPageView = Backbone.View.extend({
            el: $('.container'),

            events: {
                'click .create-account' : 'submitHandler'
            },
            
            initialize : function() {
                console.log('initialize');
                this.template = _.template(SignUpPageTmpl);
                this.render();
            },

            render : function() {
                console.log('render');
                this.$el.html(this.template);
                return this;
            },

            submitHandler: function () {
                alert('formulario enviado');
            }
        });

        return SignUpPageView;
    });