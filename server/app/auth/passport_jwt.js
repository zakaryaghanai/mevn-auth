const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

// passport jwt
exports.passportJwtStrategy = () => {
    passport.use(
        'jwt',
        new JwtStrategy(
            {
                secretOrKey: 'secret',
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
            },
            async ({ _id }, done) => {
                try {
                    const user = await User.findById(_id);
                    if (!user) done(null, false)
                    done(null, user)
                } catch (err) {
                    done(err, false)
                }
            }
        )
    )
}