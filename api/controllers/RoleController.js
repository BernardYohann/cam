/**
 * RoleController
 *
 * @description :: Server-side logic for managing Roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require("passport");

module.exports = {

    getAllRoles: function (req, res) {
        Role.find().exec(function (err, getRoles) {
            return res.ok(getRoles)
        });
    },

    getRoleById: function (req, res) {
        var id = req.param('id');
        if (!id) return res.serverError({"state": "Missing id"});

        Role.findOne({id: id})
            .exec(function (err, role) {
                if (err) return res.serverError({"state": 'Error when trying to get the role', "error": err});
                return res.ok(role);
            })
    },

    updateRole: function (req, res) {
        var id = req.param('id');
        var canView = req.param('view');
        var canTurn = req.param('turn');
        var canSwitch = req.param('switch');
        var canManage = req.param('manage');

        if (!id) return res.serverError({"state": "Missing id"});
        Role.update(
            {id: id},
            {
                canView: canView,
                canTurn: canTurn,
                canSwitch: canSwitch,
                canManage: canManage
            })
            .exec(function (err, updatedRole) {
                if (err) return res.serverError({"state": 'Error when trying to update the role', "error": err});
                return res.ok(updatedRole);
            });
    },

    // addRole: function(req, res){

    // },
    // deleteRole: function(req, res){

    // }
};

