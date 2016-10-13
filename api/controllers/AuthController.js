/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

function onPassportAuth(req, res, error, user, info) {
    if (error) return res.serverError(error);
    if (!user) return res.unauthorized(null, info);

    return res.ok(
        {
            token: SecurityService.createToken(user),
            user: user
        }
    )
}

module.exports = {
    signin: function (req, res) {
        passport.authenticate('local', onPassportAuth.bind(this, req, res))(req, res);

    },
    signup: function (req, res) {
        User.create(_.omit(req.allParams(), 'id'))
            .then(function (user) {
                return {
                    user: user,
                    token: SecurityService.createToken(user)
                }
            })
            .then(res.created)
            .catch(res.serverError);

    }
    ,
    getClient: function (req, res) {
        Client.findOne({
            email: 'tot@g.fr'
        }).exec(function (req, res) {

        })

    }
    // ,
    // getClientWithOrder: function (req, res) {
    //     Client.findOne({
    //         email: 'tot@g.fr'
    //     })
    //         .populate('orders'),
    //     .
    //     exec(function (req, res) {
    //
    //     })
    // },
    // getClientAdvanced: function (req, res) {
    //     var identifier = eq.param('identifier');
    //     Client.find({
    //         name: identifier
    //     }).exec();
    //
    //     Client.findOne({
    //         where: {
    //             name: identifier
    //         }
    //     }).exec();
    //
    //     Client.findOne({
    //         where: {
    //             name: identifier,
    //             ville: ville
    //         },
    //         limit: 20,
    //         sort: 'name ASC'
    //     }).exec();
    //
    //
    //     Client.find({
    //         where: {
    //             'contains': 'gmail.com'
    //         }
    //     }).exec();
    //
    //     Client.find({
    //         where: {
    //             '!': 'admin.gmail.com'
    //         }
    //     }).exec();
    // }
};

/*
module.exports = {

    getClient : function(req,res){
        Client.findOne({
            email : 'toto@gmail.com'
        }).exec(function (err, user){

        })
    },


    getClientWithOrder : function(req,res){
        Client.findOne({
            email : 'toto@gmail.com'
        })
        .populate('orders') //pour recuperer les associations liées à mon objet
        .exec(function(err, user){
            console.log(user.email)
            console.log(user.orders[0])
        })
    },

    getClientAdvanced : function(req, res){
        var identifier = req.param('identifier') //identifier est une chaine de caractere (issue d'un champ de mon formualire
        Client.find( {where : {name : 'identifier'}})
        .exec()

        Client.find({name:identifier})
    }
};
*/

