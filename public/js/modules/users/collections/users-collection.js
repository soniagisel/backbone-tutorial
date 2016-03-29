define(['Backbone'], function (Backbone) {
    //Backbone Collection
    var UsersCollection = Backbone.Collection.extend({
        url: 'http://localhost:3000/api/users'
    });
    return UsersCollection;
});

