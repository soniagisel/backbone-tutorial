require.config({
    baseURL: 'js',
    paths: {
        //Libraries
        Backbone        : 'node_modules/backbone/backbone',
        underscore      : 'node_modules/underscore/underscore',
        jquery          : 'node_modules/jquery/dist/jquery',
        text            : 'node_modules/requirejs-text/text',

        //Router
        router          : 'configs/router',

        ///Views///
        
        //users
        usersView       : 'views/users-view',
        userView        : 'views/user-view',
        usersListView   : 'views/users-list-view',
        userFormView    : 'views/user-form-view',
        
        //blogs
        blogsView       : 'views/blogs-view',
        blogView        : 'views/blog-view',
        blogsListView   : 'views/blogs-list-view',

        //Models
        blogModel       : 'models/blog-model',
        userModel       : 'models/user-model',
        
        //Collections
        blogsCollection : 'collections/blogs-collection',
        blogsInstance   : 'collections/blogs-instance',

        usersCollection : 'collections/users-collection',
        usersInstance   : 'collections/users-instance',

        //Templates
        blogsViewTmpl   : 'tmpl/blogs-view-tmpl.html',
        blogsListTmpl   : 'tmpl/blogs-list-tmpl.html',
        usersViewTmpl   : 'tmpl/users-view-tmpl.html',
        userFromTmpl    : 'tmpl/user-form-tmpl.html',
        usersListTmpl   : 'tmpl/users-list-tmpl.html'

    },

    shim: {
        'underscore' : {
            exports: '_'
        },
        'jquery' : {
            exports: '$'
        },
        'Backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'] // here I would like to load the already loaded library
        }
    }
});


require(['Backbone','router'], function(Backbone,Router) {
    new Router();
    Backbone.history.start();
});
