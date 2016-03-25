define(['Backbone'], function (Backbone) {
    //Backbone Collection
    var BlogsCollection = Backbone.Collection.extend({
        url: 'http://localhost:3000/api/blogs'
    });
    return BlogsCollection;
});

