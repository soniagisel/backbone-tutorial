define(['Backbone', 'blogsCollection', 'blogView'],
    function (Backbone, BlogsCollection, BlogView) {
        //Backbone View for all blogs
        var BlogsListView = Backbone.View.extend({
            
            model: new BlogsCollection(),
            tagName: 'tbody',

            initialize: function() {
                var self = this;
                this.model.on('add', this.render, this);
                this.model.on('change', function() {
                    setTimeout(function() {
                        self.render();
                    }, 30);
                }, this);

                this.model.on('remove', this.render, this);

                this.model.fetch({
                    success: function(response) {
                        _.each(response.toJSON(), function(item) {
                            console.log('Successfully GOT blog with _id: ' + item._id);
                            self.render();
                        });
                    },
                    error: function() {
                        console.log('Failed to get Blogs');
                    }
                });
            },

            render: function() {

                var self = this;
                this.$el.html('');
                _.each(this.model.toArray(), function(blog) {
                    self.$el.append(new BlogView({model: blog}).render().$el);
                });
                return this;
            }
        });

    return BlogsListView;
});