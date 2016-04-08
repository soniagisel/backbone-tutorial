define(['Backbone'], function (Backbone) {
    Backbone.Model.prototype.idAttribute = '_id';

    var SignUpModel = Backbone.Model.extend({
        defaults: {
            username    : '',
            password    : ''
        },
        //urlRoot: 'http://localhost:3000/api/login'
    });
    return SignUpModel;
});