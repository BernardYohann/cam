/**
 * Log.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
        camera : {
            model : 'camera'
        },
        user : {
            model : 'user'
        },
        event : {
            type : 'string'
        },
        toJson: function(){
            var obj = this.toObject();
            return obj;
         }
    }
};

