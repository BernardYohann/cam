/**
 * UserCameraRoleController
 *
 * @description :: Server-side logic for managing Usercameraroles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    // Récupérer les utilisateurs qui ont les droits sur une caméra et leurs roles GET /camera/:id/users
    getCameraUsers: function (req, res) {
        var camera = req.param('cameraid');
        UserCameraRole.find({
            where: {
                camera : camera
            }
        }).populate('user').populate('camera')
        .exec(function (err, getCameraUsers){
            if (err) return res.serverError({ "state": 'Error when trying to get users for this camera', "error": err });
            return res.ok(getCameraUsers);
        });
    },

    //Récupérer les caméras sur lequel un utilisateur à les droits GET /cameras
    getUserCameras: function (req, res) {
        var user = req.param('userid');
        UserCameraRole.find({
            where: {
                user: user
            }
        }).populate('camera').populate('user')
        .exec(function (err, getUserCameras){
            if (err) return res.serverError({ "state": 'Error when trying to get cameras for this user', "error": err });
            return res.ok(getUserCameras);
        });
    },

    //Créer un userCameraRole POST /usercamerarole/add
    addUserCameraRole: function (req, res) {  
        var userId = req.param('user');
        var cameraId = req.param('camera');
        var roleId = req.param('role');

        if (!userId || !cameraId || !roleId) return res.serverError({ "state": "Parameters error" }); 

        UserCameraRole.create({
            user: userId,
            camera: cameraId,
            role: roleId
        }).exec(function (err, userCameraRoleCreated) {
            if (err) return res.serverError({ "state": 'Error when trying add a new user camera role', "error": err });
            return res.ok(userCameraRoleCreated);
        });
    },

    //Supprime un UserCameraRole   POST /usercamerarole/delete
    deleteUserCameraRole: function(req, res){
        var id = req.param('id')

        if (!id ) return res.serverError({ "state": "Missing id" }); 
        UserCameraRole.destroy(id = id).exec(function (err, ucrDestroyed) {
            if (err) return res.serverError({ "state": 'Error when trying to delete this UserCameraRole on database', "error": err });
            return res.ok();
        });

    },

    //Update un UserCameraRole POST /usercamerarole/update
    updateUserCameraRole: function(req, res){
        var id = req.param('id');
        var newUser = req.param('user');
        var newCamera = req.param('camera');
        var newRole = req.param('role');

        if (!id ) return res.serverError({ "state": "Missing id" }); 
        UserCameraRole.update(
            {id: id}, 
            {
                user: newUser,
                camera: newCamera,
                role: newRole
            })
        .exec(function (err, updatedUcr) {
            if (err) return res.serverError({ "state": 'Error when trying to update the UserCameraRole', "error": err });
            return res.ok(updatedUcr);
        });
    },

};

