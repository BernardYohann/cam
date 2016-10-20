/**
 * CameraController
 *
 * @description :: Server-side logic for managing Cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    ///CRUD methods

    // Récupérer une caméra à partir de son uid GET /camera/uid
    getCameraByUid: function (req, res) {
        var identifier = req.param('id');
        Camera.findOne({
            uid: identifier
        }).exec(function (err, getCamera) {
            if (err) return res.serverError({ "state": 'Error when trying to get a camera by id', "error": err });
            return res.ok(getCamera);
        });
    },

    // Créer une caméra avec un name et uid en parametre POST /camera/add
    addCamera : function (req, res) {  
        var name = req.param('name');
        var uid = req.param('uid');

        if (!name || !uid) return res.serverError({ "state": "Parameters error" }); 

        Camera.create({
            name: name,
            uid: uid,
            state: 0
        }).exec(function (err, cameraCreated) {
            if (err) return res.serverError({ "state": 'Error when trying add connected object on database', "error": err });
            return res.ok(cameraCreated);
        });
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

