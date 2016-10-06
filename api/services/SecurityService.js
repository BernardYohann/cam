/**
 * Created by nexon on 06/10/16.
 */

var bCrypt = requires('bcrypt-nodejs');
var jwt = requires('jsonwebtoken');

module.exports = {
    hashPassword: function (user) {
        if (user.password) {
            user.password = bCrypt.hashSync(user.password);
        }
    },
    comparePassword: function (password, user) {
        return bCrypt.compareSync(password, user.password);
    },
    createToken: function (user) {
        return jwt.sign(
            {
                user: user.toJson()
            },
            sail.config.jwtSettings.secret,
            {
                algorithm: sails.config.jwtSettings.algo,
                expiresInMinutes: sails.config.jwtSettings.expires
            });
    }
}
