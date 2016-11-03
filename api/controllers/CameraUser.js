module.exports = {
    // Récupérer les caméras d'un propriétaire à partir de son id GET /camera/owner/id
    getCamerasByOwnerId: function (req, res) {
        var id = req.param('id');
        Camera.find({
            where: {
                owner :  id
            }
        }).exec(function (err, cameras) {
            if(cameras.length > 0){
                ids = [];
                for(i=0; i < cameras.length; i++)
                    ids.push(cameras[i].id);

                UserCameraRole.find({
                    where: {
                        camera: ids
                    }
                }).populate('user').populate('role')
                    .exec(function (err, userCameraRole){
                        if (err) return res.serverError({ "state": 'Error when trying to get users and roles of owner camera ', "error": err });
                        return res.ok(userCameraRole);
                    });
            }

            if (err ) return res.serverError({ "state": 'Error when trying to get owner camera by id', "error": err });
// return res.ok('nothing to show');
        });
    },

}