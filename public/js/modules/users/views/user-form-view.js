define(['Backbone', 'text!userFromTmpl', 'usersListView', 'userModel'],
    function(Backbone, UserFromTmpl, UsersListView, UserModel) {
        return Backbone.View.extend({
            model: null,
            el: $('.container'),
            template: _.template(UserFromTmpl),

            events: {
                'click .save-new-user' : 'saveNewUser'
            },

            initialize: function() {
                this.render();
            },

            render: function() {
                this.$el.html(this.template);
                return this;
            },

            saveNewUser : function (users) {
                var user = new UserModel({
                    username: $('.username-input').val(),
                    email: $('.email-input').val(),
                    phone: $('.phone-input').val()
                });
                $('.username-input').val('');
                $('.email-input').val('');
                $('.phone-input').val('');

                user.save(null, {
                    success: function(response) {
                        console.log('Successfully saved User with _id: ' + response.toJSON()._id);
                        Backbone.history.navigate('users', true);
                    },
                    error: function() {
                        console.log('Failed to save User');
                    }
                });

            }
    });
});