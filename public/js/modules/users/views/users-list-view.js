define(['Backbone', 'userView'],
    function (Backbone, UserView) {
        //Backbone View for all users
        var UsersListView = Backbone.View.extend({

            collection: null,
            tagName: 'tbody',

            initialize: function(users) {
                var self = this;
                this.collection = users;
                this.collection.on('change', function() {
                    setTimeout(function() {
                        self.render();
                    }, 30);
                }, this);

                this.collection.on('remove', this.render, this);

                this.collection.fetch({
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
                _.each(this.collection.toArray(), function(user) {
                    self.$el.append(new UserView(user).render().$el);
                });
                return this;
            }
        });

        return UsersListView;
    });
