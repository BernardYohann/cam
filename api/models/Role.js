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
  	view: {
  		type: 'boolean'
  	},
  	turn: {
  		type: 'boolean'
  	},
  	switch: {
  		type: 'boolean'
  	},
  	manage: {
  		type: 'boolean'
  	},
    user: {
      model: 'user'
    },
  	toJson: function(){
  		var obj = this.toObject();
  		return obj;
  	}
  }
};