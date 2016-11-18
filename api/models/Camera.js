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
            required: true
        },
        switchOn: {
            type: 'boolean'
        },
        socket: {
            type: 'string'
        },
        owner: {
            model: 'user',
            required: true
        },
        userCameraRoles: {
            collection: 'usercamerarole',
            via: 'camera'
        }
    }
};

