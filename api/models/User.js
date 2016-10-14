/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */



module.exports = {
    attributes: {
        username: {
            type: 'string'
        },
        firstname:{
            type: 'string'
        },
        lastname:{
            type: 'string'
        },
        email: {
            type: 'email',
            unique: true,
            required: true
        },
        password: {
            type: 'string'
        },
        userCameraRoles: {
            collection: 'usercamerarole',
            via: 'user'
        },
        toJson: function(){
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },
    beforeUpdate: function(value, next){
        if(!SecurityService.comparePassword(value, this))
            SecurityService.hashPassword(value);
        return next();
    },
    beforeCreate: function(value, next){
        SecurityService.hashPassword(value);
        return next();
    }
};

