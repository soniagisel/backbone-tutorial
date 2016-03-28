define(['Backbone', 'blogsListView', 'blogModel', 'blogsInstance', 'text!blogsViewTmpl'], 
    function (Backbone, BlogsListView, BlogModel, BlogsInstance, blogsViewTmpl) {
    //Backbone View for all blogs
    var BlogsView = Backbone.View.extend({
        model: null,
        el: $('.container'),
        template: _.template(blogsViewTmpl),

        events: {
            'click .add-blog' : 'addBlog'
        },

        addBlog: function () {
            var blog = new BlogModel({
                author: $('.author-input').val(),
                title: $('.title-input').val(),
                url: $('.url-input').val()
            });
            $('.author-input').val('');
            $('.title-input').val('');
            $('.url-input').val('');
            
            BlogsInstance.add(blog);

            blog.save(null, {
                success: function(response) {
                    console.log('Successfully saved Blog with _id: ' + response.toJSON()._id);
                },
                error: function() {
                    console.log('Failed to save Blog');
                }
            });
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(this.template);
            this.$el.find('.table').append(new BlogsListView().$el)
            return this;
        }
    });
    
    return BlogsView; 
});