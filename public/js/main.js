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
        usersView       : 'modules/users/views/users-view',
        userView        : 'modules/users/views/user-view',
        usersListView   : 'modules/users/views/users-list-view',
        userFormView    : 'modules/users/views/user-form-view',
        
        //blogs
        blogsView       : 'modules/blogs/views/blogs-view',
        blogView        : 'modules/blogs/views/blog-view',
        blogsListView   : 'modules/blogs/views/blogs-list-view',

        //Models
        blogModel       : 'modules/blogs/models/blog-model',
        userModel       : 'modules/users/models/user-model',
        
        //Collections
        blogsCollection : 'modules/blogs/collections/blogs-collection',

        usersCollection : 'modules/users/collections/users-collection',

        //Templates
        blogsViewTmpl   : 'modules/blogs/templates/blogs-view-tmpl.html',
        blogsListTmpl   : 'modules/blogs/templates/blogs-list-tmpl.html',
        usersViewTmpl   : 'modules/users/templates/users-view-tmpl.html',
        userFromTmpl    : 'modules/users/templates/user-form-tmpl.html',
        usersListTmpl   : 'modules/users/templates/users-list-tmpl.html'

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
