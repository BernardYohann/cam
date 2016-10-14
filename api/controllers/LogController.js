/**
 * LogController
 *
 * @description :: Server-side logic for managing Logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getLogs: function(req, res){
        return res.ok({
            logs : Log.find({
                camera_id : req.param('camera_id')
            }).populate('user')
            .exec()
        })
    },

     addLog: function(req, res){
        Log.create(_.omit(req.allParams(), 'id'))
            .then(function (log) {
                return {
                    log: log
                }
            })
            .then(res.created)
            .catch(res.serverError);
    }

};


