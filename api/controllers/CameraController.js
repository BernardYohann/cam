/**
 * CameraController
 *
 * @description :: Server-side logic for managing Cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
     //CRUD methods
    get: function (req, res) {
        var identifier = req.param('uid');
        Camera.find({
            uid: identifier
        }).exec();

    },

    getUserCameras: function (req, user) {
        Camera.find({
            owner: user.id
        })
        .exec();
    },

    add: function(){
        Camera.create();
    },

    delete: function(){
        Camera.delete();
    },


     //Actions methods
     turnLeft: function(value, next){
       //TODO
       return next();
     },
     turnRight: function(value, next){
       //TODO
       return next();
     },
     switchOn: function(value, next){
         Camera.update({switchOn: 1});
     },
     switchOff: function(value, next){
         Camera.update({switchOn: 0});
     }
};

