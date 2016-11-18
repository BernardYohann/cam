/**
 * LogController
 *
 * @description :: Server-side logic for managing Logs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    //Récupère les 100 derniers logs toutes cameras confondues
    getAllLogs: function (req, res) {
        Log.find().limit(100).populate('camera').populate('user').exec(function (err, logs) {
            if (err) return res.serverError({"state": 'Error when trying to get the 100 last logs', "error": err});
            return res.ok(logs);
        });
    },

    //Récupère les 50 derniers logs d'une camera /GET log/camera/:id
    getLogByCameraId: function (req, res) {
        var camId = req.param('id');
        Log.find({
            camera: camId
        }).limit(50).populate('camera').populate('user')
            .exec(function (err, logs) {
                if (err) return res.serverError({"state": 'Error when trying to get the logs', "error": err});
                return res.ok(logs);
            });
    },

    //Récupère les 50 derniers logs d'un utilisateur /GET log/user/:id
    getLogByUserId: function (req, res) {
        var userId = req.param('id');
        Log.find({
            user: userId
        }).limit(50).populate('camera').populate('user')
            .exec(function (err, logs) {
                if (err) return res.serverError({"state": 'Error when trying to get the logs', "error": err});
                return res.ok(logs);
            });
    },


    //Créer un nouveau log /POST log/add
    addLog: function (req, res) {
        Log.create(_.omit(req.allParams(), 'id'))
            .exec(function (err, logCreated) {
                if (err) return res.serverError({"state": 'Error when creating new log', "error": err});
                return res.ok(logCreated);
            });
    },

};


