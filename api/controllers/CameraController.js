/**
 * CameraController
 *
 * @description :: Server-side logic for managing Cameras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    ///CRUD methods

    // Récupérer une caméra à partir de son uid GET /camera/uid
    getCameraById: function (req, res) {
        var identifier = req.param('id');
        Camera.findOne({
            id: identifier
        })
        .populate('owner').exec(function (err, camera) {
            if (err) return res.serverError({ "state": 'Error when trying to get a camera by id', "error": err });
            var ids = []
            ids[0] = camera.id
            Camera.subscribe(req, ids);
            return res.ok(camera);
        });
    },

    // Créer une caméra avec un name et uid en parametre POST /camera/add
    addCamera : function (req, res) {  
        var name = req.param('name');
        var uid = req.param('uid');
        var userid = req.param('userid');

        if (!name || !uid) return res.serverError({ "state": "Parameters error" }); 

        Camera.create({
            name: name,
            uid: uid,
            switchOn: false,
            owner: userid
        }).exec(function (err, cameraCreated) {
            if (err) return res.serverError({ "state": 'Error when trying add new camera', "error": err });
            if(res.ok(cameraCreated))
            {
                UserCameraRole.create({
                    user: userid,
                    camera: cameraCreated.id,
                    role: 1 //role admin
                }).exec(function (err, userCameraRoleCreated) {
                    if (err) return res.serverError({ "state": 'Error when trying add a new user camera role', "error": err });
                });
            }
            return cameraCreated;
        });
    },

    //Supprime une camera   /DELETE /camera/delete/:id
    deleteCamera : function(req, res){
        var id = req.param('id')

        if (!id ) return res.serverError({ "state": "Missing id" }); 
            Camera.destroy(id = id)
            .exec(function (err, cameraDestroyed) {
                if (err) return res.serverError({ "state": 'Error when trying to delete this camera on database', "error": err });
                if(res.ok(cameraDestroyed)){
                    UserCameraRole.destroy(camera = id).exec(function (err, userCameraRoleDestroyed) {
                    if (err) return res.serverError({ "state": 'Error when trying destroy user camera role', "error": err });
                });
            }
            return cameraDestroyed;
        });
    },

    //Update une camera /PUT /camera/update/:id
    updateCameraInfos: function(req, res){
        var id = req.param('id');
        var newName = req.param('name');

        if (!id ) return res.serverError({ "state": "Missing id" }); 
        Camera.update(
            {id: id}, 
            {
                name: newName
            })
        .exec(function (err, updatedCamera) {
            if (err) return res.serverError({ "state": 'Error when trying to update the camera', "error": err });
            return res.ok(updatedCamera);
        });
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
     switchOn: function(req, res){
         var id = req.param('id');
         if (!id ) return res.serverError({ "state": "Missing id" }); 
         Camera.update(
             {id: id},
             {switchOn: 1})
        .exec(function (err, updatedCamera) {
            if (err) return res.serverError({ "state": 'Error when trying to switch on the camera', "error": err });
            Camera.publishUpdate(id,  updatedCamera);
            return res.ok(updatedCamera);
        });
     },
     switchOff: function(req, res){
         var id = req.param('id');
         if (!id ) return res.serverError({ "state": "Missing id" }); 
         Camera.update(
             {id: id}, 
             {switchOn: 0})
        .exec(function (err, updatedCamera) {
            if (err) return res.serverError({ "state": 'Error when trying to switch off the camera', "error": err });
            Camera.publishUpdate(id,  updatedCamera);
            return res.ok(updatedCamera);
        });
     }

     //
};

