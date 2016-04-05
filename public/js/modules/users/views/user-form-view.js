define(['Backbone', 'text!userFromTmpl', 'usersListView', 'userModel'],
    function(Backbone, UserFromTmpl, UsersListView, UserModel) {
        return Backbone.View.extend({
            model: new UserModel(),
            el: $('.container'),
            template: _.template(UserFromTmpl),

            events: {
                'click .save-new-user' : 'saveNewUser'
            },

            initialize: function(id) {
                var self = this;
                if(id) { //exist

                    var user = new UserModel({'_id' : id});
                    user.fetch({
                        success: function(response) {
                            self.model = response;
                            self.render();
                        },
                        error: function() {
                            console.log('Failed to get Blogs');
                        }
                    });
                } else { //create
                    this.render();
                }
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
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