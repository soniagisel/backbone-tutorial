define(['Backbone'], function (Backbone) {
    Backbone.Model.prototype.idAttribute = '_id';

    var SignUpModel = Backbone.Model.extend({
        defaults: {
            username    : '',
            email       : '',
            phone       : '',
            password    : ''
        },
        urlRoot: 'http://localhost:3000/auth/signup'
    });
    return SignUpModel;
});