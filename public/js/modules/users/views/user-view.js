define(['Backbone','userModel', 'text!usersListTmpl'],
    function (Backbone, UserModel, usersListTmpl) {

    //Backbone View for one user
        var UserView = Backbone.View.extend({
            model: new UserModel(),
            //as we have no definition for $el, Backbone will take tagName as the default $el
            tagName: 'tr',
            events: {
                'click .delete-button' : 'delete'
            },
            initialize : function(user) {
                this.model = user;
                this.template = _.template(usersListTmpl);
            },
            delete: function() {
                if (confirm('ELIMINAR USUARIO?')) {
                    console.log('edit user');
                }
    
                this.model.destroy({
                    success: function(response) {
                        console.log('Successfully DELETED user with _id: ' + response.toJSON()._id);
                    },
                    error: function() {
                        console.log('Failed to DELETE user.');
                    }
                });
            },
            render : function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

    return UserView;
});