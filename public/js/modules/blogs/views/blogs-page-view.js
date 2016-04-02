define(['Backbone', 'blogsListView', 'blogsCollection', 'blogModel' , 'text!blogsViewTmpl'],
    function (Backbone, BlogsListView, BlogsCollection, BlogModel, blogsViewTmpl) {
    //Backbone View for all blogs
    var BlogsView = Backbone.View.extend({
        collection: null,
        el: $('.container'),
        template: _.template(blogsViewTmpl),
        events: {
            'click .add-blog' : 'addBlog'
        },

        initialize: function(blogs) {
            this.collection = blogs;
            this.render();
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

            this.collection.add(blog);

            blog.save(null, {
                success: function(response) {
                    console.log('Successfully saved Blog with _id: ' + response.toJSON()._id);
                },
                error: function() {
                    console.log('Failed to save Blog');
                }
            });
        },

        render: function() {
            this.$el.html(this.template);
            this.$el.find('.table').append(new BlogsListView(this.collection).$el)
            return this;
        }
    });
    
    return BlogsView; 
});