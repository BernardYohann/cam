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
        return res.ok(Camera.find({
            uid: identifier
        }).exec());

    },

    getUserCameras: function (req, res) {
        return res.ok(Camera.find({
            owner: req.param('user')
        })
        .exec());
    },

    add: function(req, res){
        return res.ok(Camera.create({
            uid: '1',
            name: 'test'
        }));
    },

    delete: function(req, res){
        return res.ok(Camera.delete());
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

