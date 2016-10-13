/**
 * CameraController
 *
 * @description :: Server-side logic for managing Cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	
     //CRUD methods
     

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

