/**
 * Camera.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  //members
  attributes: {
      uid: {
        type: 'string',
        unique: true,
        required: true
      },
      name: {
        type: 'string',
        unique: true,
        required: true
      },
      powerup: {
        type: 'boolean'
      },
      socket: {
        type: 'string'
      },
      owner: {
        type: 'User',
        via: User
      },

     //properties 
     turnLeft: function(value, next){
       //TODO
       return next();
     },
     turnRight: function(value, next){
       //TODO
       return next();
     },
     switchOn: function(value, next){
         //TODO updateCameraState(1);
     },
     switchOff: function(value, next){
         //TODO updateCameraState(0);
     } 
  }

};

