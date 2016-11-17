/**
 * UserCameraRoleController
 *
 * @description :: Server-side logic for managing Usercameraroles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
    //Voir ce que se passe si on a plusieurs roles pour un meme user et camera
    getRole: function(req, res){
        var ucrid = req.param('id');
        UserCameraRole.findOne({
            where: {
                id : ucrid
            }
        }).populate('user').populate('role')
        .exec(function (err, getRole){
            if (err) return res.serverError({ "state": 'Error when trying to get role for this camera and user', "error": err });
            UserCameraRole.subscribe(req, ucrid);
            return res.ok(getRole);
        });
    },

    // Récupérer les utilisateurs qui ont les droits sur une caméra et leurs roles GET /camera/:id/users
    getCameraUsers: function (req, res) {
        var camera = req.param('cameraid');
        UserCameraRole.find({
            where: {
                camera : camera
            }
        }).populate('user').populate('role')
        .exec(function (err, getCameraUsers){
            if (err) return res.serverError({ "state": 'Error when trying to get users for this camera', "error": err });

            var ids = [];
            var key, count = 0;
            for(key in getCameraUsers) {
                if(getCameraUsers.hasOwnProperty(key)) {
                    ids[count] = getCameraUsers[count].id;
                    count++;
                }
            }
            UserCameraRole.subscribe(req, ids);

            return res.ok(getCameraUsers);
        });
    },

    //Récupérer les caméras sur lequel un utilisateur à les droits GET /usercamerarole/userid/cameras
    getUserCameras: function (req, res) {
        var user = req.param('userid');
        UserCameraRole.find({
            where: {
                user: user
            }
        }).populate('camera').populate('user')
        .exec(function (err, getUserCameras){
            if (err) return res.serverError({ "state": 'Error when trying to get cameras for this user', "error": err });

            var ids = [];
            var key, count = 0;
            for(key in getUserCameras) {
                if(getUserCameras.hasOwnProperty(key)) {
                    ids[count] = getUserCameras[count].camera.id;
                    count++;
                }
            }
            Camera.subscribe(req, ids);
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
        var newRole = req.param('role');

        if (!id ) return res.serverError({ "state": "Missing id" }); 
        UserCameraRole.update(
            {id: id}, 
            {
                role: newRole
            })
        .exec(function (err, updatedUcr) {
            if (err) return res.serverError({ "state": 'Error when trying to update the UserCameraRole', "error": err });
            UserCameraRole.findOne({
                where: {
                    id : id
                }
            }).populate('user').populate('role')
            .exec(function (err, getUpdatedRole){
                if (err) return res.serverError({ "state": 'Error when trying to get role for this camera and user', "error": err });
                UserCameraRole.publishUpdate(id, getUpdatedRole);
            return res.ok(getUpdatedRole);
            });
        });
    },

};

