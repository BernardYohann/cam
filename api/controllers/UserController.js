/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    dashboard: function (req,res)
    {
        return res.ok(
            {
                cameras: Camera.find({where: {user : req.user}}),
                user: req.user
            }
        )
    },
    profile : function(req, res){
        return res.ok({
            user: req.user
        });
    },
    logout : function(req, res){
        return res.ok({
            user: req.user
        });
    }
};

