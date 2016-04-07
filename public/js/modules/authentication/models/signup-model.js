define(['Backbone'], function (Backbone) {
    Backbone.Model.prototype.idAttribute = '_id';

    var LogInModel = Backbone.Model.extend({
        defaults: {
            email       : '',
            password    : '',
            username    : ''
        },
        //urlRoot: 'http://localhost:3000/api/login'
    });
    return LogInModel;
});