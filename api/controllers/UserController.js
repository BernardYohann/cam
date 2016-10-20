/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    dashboard: function (req,res)
    {
        console.log('ici');
        return res.ok(
            {
                // cameras: Camera.find({
                //     where: {
                //         user : req.user
                //     }
                // }),
                user: req.user
            }
        )
    },

    profile: function (req, res) {
        return res.ok({
            user: req.user
        });
    },

    logout: function (req, res) {
    //TODO deconnexion
        return res.ok({
            user: req.user
        });
    },

    getAllUser: function (req, res) {
        return res.send('');
    },

    getByIdUser: function (req, res) {
        return res.send('');
    },

    addUser: function (req, res) {
        return res.send('');
    },

    updateUser: function (req, res) {
        return res.send('');
    },

    deleteUser: function (req, res) {
        return res.send('');
    },
};