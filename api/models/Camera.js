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
      switchOn: {
        type: 'boolean',
        //mettre à 0 par defaut
      },
      socket: {
        type: 'string'
      },
      owner: {
        model: 'user'
      },
      userCameraRoles: {
          collection: 'usercamerarole',
          via: 'camera'
      }
  }
};

