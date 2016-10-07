/**
 * Created by nexon on 06/10/16.
 *
 *
 * Passport configuration
 */


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

var EXPIRES_IN = '2d';
var SECRET = "ksoihenopitrqkpdijaqdkjgdjskudgdjsospztehc";
var ALGO = "HS256";


/**
 *  Config for local strategy
 */
var LOCAL_STRATEGY_CONFIG = {
    usernameField: 'email',
    passwordField: 'password'
};

var JWT_STRATEGY_CONFIG = {
    secretOrKey: SECRET,
    issuer: '',
    audience: '',
    jwtFromRequest: ExtractJwt.fromAuthHeader()
};


function onLocalStrategyAuth(email, password, next) {
    User.find({email: email})
        .exec(function (error, user) {
            if (error) return next(error, false, {});
            if (!user) return next(null, false, {
                code: 'E_USER_NOT_FOUND',
                message: 'email or password is wrong'
            });

            if (SecurityService.comparePassword(password, user)) {
                return next(null, user, {
                    code: 'E_USER_PASSWORD_MISMATH',
                    message: 'email or password is wrong'
                });
            }

        });
    return next(null, user, {});
}

function onJwtStrategyAuth(payload, next) {
    var user = payload.user;
    return next(null, user, {});

}


passport.use(new LocalStrategy(LOCAL_STRATEGY_CONFIG, onLocalStrategyAuth));

passport.use(new JwtStrategy(JWT_STRATEGY_CONFIG, onJwtStrategyAuth));

module.exports.jwtSettings = {
    expiresIn: EXPIRES_IN,
    algo: ALGO,
    secret: SECRET
};

/**
 *  Config for jwt strategy
 */
