define(['Backbone'], function (Backbone) {
    Backbone.Model.prototype.idAttribute = '_id';

    var UserModel = Backbone.Model.extend({
        defaults: {
            username : '',
            email    : '',
            phone    : ''
        }
    });
    return UserModel;
});