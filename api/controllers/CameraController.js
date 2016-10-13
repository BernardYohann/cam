/**
 * CameraController
 *
 * @description :: Server-side logic for managing Cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	
     //CRUD methods
    getCamera: function (req, res) {
        var identifier = req.param('uid');
        Camera.find({
            uid: identifier
        }).exec();

    },

    getUserCameras: function (req, res) {
        Camera.find({
          where owner
        }).exec();
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
         //TODO updateCameraState(camedraId, 1);
     },
     switchOff: function(value, next){
         //TODO updateCameraState(cameraId, 0);
     }
};

