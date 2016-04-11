define(['Backbone'], function (Backbone) {
    Backbone.Model.prototype.idAttribute = '_id';

    var UserModel = Backbone.Model.extend({
        defaults: {
            username : '',
            email    : '',
            phone    : '',
            password : ''
        },
        urlRoot: 'http://localhost:3000/api/users'
    });
    return UserModel;
});