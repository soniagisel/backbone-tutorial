define(['Backbone','blogModel', 'blogsPageView', 'text!blogsListTmpl'],
    function (Backbone, BlogModel, BlogsPageView, blogsListTmpl) {

        //Backbone View for one blog
        var BlogView = Backbone.View.extend({
            model: new BlogModel(),
            //as we have no definition for $el, Backbone will take tagName as the default $el
            tagName: 'tr',
            events: {
                'click .edit-blog'   : 'edit',
                'click .update-blog' : 'update',
                'click .cancel'      : 'cancel',
                'click .delete-blog' : 'delete'
            },
            initialize : function(blog) {
                this.model = blog;
                this.template = _.template(blogsListTmpl);
            },
            edit: function() {
                $('.edit-blog').hide();
                $('.delete-blog').hide();
                this.$('.update-blog').show();
                this.$('.cancel').show();

                var author = this.$('.author').html();
                var title = this.$('.title').html();
                var url = this.$('.url').html();

                this.$('.author').html('<input type="text" class="form-control author-update" value="' + author + '">');
                this.$('.title').html('<input type="text" class="form-control title-update" value="' + title + '">');
                this.$('.url').html('<input type="text" class="form-control url-update" value="' + url + '">');
            },
            update: function() {
                this.model.set('author', $('.author-update').val());
                this.model.set('title', $('.title-update').val());
                this.model.set('url', $('.url-update').val());

                this.model.save(null, {
                    success: function(response) {
                        console.log('Successfully UPDATED blog with _id: ' + response.toJSON()._id);
                    },
                    error: function(response) {
                        console.log('Failed to UPDATE blog.');
                    }
                })
            },
            cancel: function() {
                BlogsPageView.render();
            },
            delete: function() {
                this.model.destroy({
                    success: function(response) {
                        console.log('Successfully DELETED blog with _id: ' + response.toJSON()._id);
                    },
                    error: function() {
                        console.log('Failed to DELETE blog.');
                    }
                });
            },

            render : function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

        return BlogView;
});