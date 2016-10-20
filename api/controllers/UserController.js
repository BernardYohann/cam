/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

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