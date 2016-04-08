define(['Backbone','text!signUpPageTmpl','validate'],
    function (Backbone, SignUpPageTmpl, validate) {

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
                console.log('formulario enviado');
                $('.new-account-form').validate({
                    rules: {
                        username: {
                            required: true,
                            minlength: 4
                        },
                        password: {
                            required: true,
                            minlength: 5
                        },
                        cnfm_password: {
                            required: true,
                            minlength: 5,
                            equalTo: '.password-input'
                        }
                    },
                    messages: {
                        username: {
                            required: 'Username is required',
                            minlength: 'Username must be at least 4 characters length'
                        },
                        password: {
                            required: 'Password is required',
                            minlength: 'Password must be at least 4 characters length'
                        },
                        cnfm_password: {
                            required: 'Please confirm your password',
                            minlength: 'Username must be at least 4 characters length',
                            equalTo: 'Confirmation password must match with the password'
                        }
                    }
                });
            }
        });

        return SignUpPageView;
    });