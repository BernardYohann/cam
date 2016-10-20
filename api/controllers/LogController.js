/**
 * LogController
 *
 * @description :: Server-side logic for managing Logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	log: function(req, res){
        return res.ok({
            logs : Log.find({
                camera_id : req.param('camera_id')
            }).populate('user')
            .exec()
        })
    },

    
};


