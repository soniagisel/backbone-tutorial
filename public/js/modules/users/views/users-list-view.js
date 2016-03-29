define(['Backbone', 'userView'],
    function (Backbone, UserView) {
        //Backbone View for all blogs
        var UsersListView = Backbone.View.extend({

            model: null,
            tagName: 'tbody',

            initialize: function(users) {
                var self = this;
                this.model = users;
                this.model.on('change', function() {
                    setTimeout(function() {
                        self.render();
                    }, 30);
                }, this);

                this.model.on('remove', this.render, this);

                this.model.fetch({
                    success: function(response) {
                        _.each(response.toJSON(), function(item) {
                            console.log('Successfully GOT user with _id: ' + item._id);
                            self.render();
                        });
                    },
                    error: function() {
                        console.log('Failed to get users');
                    }
                });
            },

            render: function() {

                var self = this;
                this.$el.html('');
                _.each(this.model.toArray(), function(user) {
                    self.$el.append(new UserView({model: user}).render().$el);
                });
                return this;
            }
        });

        return UsersListView;
    });
