/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {

    getAllUsers: function (req, res) {
        User.find().exec(function (err, users) {
            if (err) return res.serverError({ "state": 'Error when trying to get the users', "error": err });
            return res.ok(users);
        });
    },

    getUserById: function (req, res) {
        var id = req.param('id');
        if (!id ) return res.serverError({ "state": "Missing id" }); 

        User.findOne({
            id: id
        }).exec(function (err, user) {
            if (err) return res.serverError({ "state": 'Error when trying to get a user by id', "error": err });
            return res.ok(user);
        });
    },

//TODO voir pourquoi ça ne fonctionne pas
    updateUser: function (req, res) {
        var id = req.param('id');
        var firstname = req.param('firstname');
        var lastname = req.param('lastname');
        var email = req.param('email');
        var password = req.param('password');

        if (!id ) return res.serverError({ "state": "Missing id" }); 
        User.update(
            {id: id}, 
            {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            })
        .exec(function (err, updatedUser) {
            if (err) return res.serverError({ "state": 'Error when trying to update the user', "error": err });
            return res.ok(updatedUser);
        });
    },

    deleteUser: function (req, res) {
        var id = req.param('id')
        if (!id ) return res.serverError({ "state": "Missing id" }); 

        User.destroy(id = id).exec(function (err, userDestroyed) {
            if (err) return res.serverError({ "state": 'Error when trying to delete this user', "error": err });
            return res.ok();
        });
    },

    // addUser: function (req, res) {
    //     return res.send('');
    // },
};