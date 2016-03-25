require.config({
    baseURL: 'js',
    paths: {
        //Libraries
        Backbone        : 'node_modules/backbone/backbone',
        underscore      : 'node_modules/underscore/underscore',
        jquery          : 'node_modules/jquery/dist/jquery',

        //Router
        router          : 'configs/router',

        //Views
        usersView       : 'views/users-view',
        blogsView       : 'views/blogs-view',
        blogView        : 'views/blog-view',
        blogsListView   : 'views/blogs-list-view',

        //Models
        blogModel       : 'models/blog-model',
        
        //Collections
        blogsCollection : 'collections/blogs-collection',
        blogsInstance   : 'collections/blogs-instance',
    }
});


require(['Backbone','router'], function(Backbone,Router) {
    new Router();
    Backbone.history.start();
});
