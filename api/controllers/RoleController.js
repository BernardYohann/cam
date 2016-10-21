/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require("passport");

module.exports = {
	
	getAllRoles: function(req, res){
		Role.find().exec(function(err, getRoles){
			return res.ok(getRoles)
		});
	},

	addRole: function(req, res){

	},

	updateRole: function(req, res){

	},

	deleteRole: function(req, res){

	}
};

