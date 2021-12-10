require('dotenv').config();

const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
const signPayload = require('../util/jwt').signPayload


const {check_password} = require('../util/bcrypt_util')

module.exports = (passport) => {
    const authenticateUser = (email, password, done) => {
        User.findOne({email: email})
            .then(user => {
                if (!user) {
                    return done(null, false, {err_code: -1, message: 'user with email not found'})
                }
                check_password(password, user.password, (match) => {
                    if (match) {
                        return done(null, user);
                    } else {
                        return done(null, false, {err_code: -2, message: 'incorrect password'})
                    }
                })
            })
    };
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUser));

    // serializeUser
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    // deserializeUser
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(null, user);
        })
    });
}