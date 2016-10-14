/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require("passport");

module.exports = {

	getRole: function(req, res){
		var identifier = eq.param('id');
		role.findOne({
			where: {
				name: id
			}
		}).exec();
	},
	getAllRole: function(req, res){
		var identifier = eq.param('id');
		role.find({
			where: {
				name: id
			}
		}).exec();
	}
	
};

