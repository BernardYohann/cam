/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require("passport");

module.exports = {
	var identifier = eq.param('id');

	getRole: function(req, res){
		role.findOne({
			where {
				name: id
			}
		}).exec();
	},
	getAllRole: function(req, res){
		role.find({
			where {
				name: id
			}
		}).exec();
	}
};

