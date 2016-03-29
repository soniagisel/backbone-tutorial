define(['Backbone'], function (Backbone) {

    Backbone.Model.prototype.idAttribute = '_id';

    //Backbone Model
    var BlogModel = Backbone.Model.extend({
        defaults : {
            author : '',
            title  : '',
            url    : ''
        }
    });
    
    return BlogModel;
});
