/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string'
        },
        canView: {
            type: 'boolean'
        },
        canTurn: {
            type: 'boolean'
        },
        canSwitch: {
            type: 'boolean'
        },
        canManage: {
            type: 'boolean'
        },

        toJson: function () {
            var obj = this.toObject();
            return obj;
        }
    }
};