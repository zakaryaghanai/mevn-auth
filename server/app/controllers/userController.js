const User = require('../models/user');
const passport = require('passport');

const { hash_password } = require('../util/bcrypt_util');

function index(req, res, next) {
    res.send('index users');
}

function login(req, res, next) {
    passport.authenticate('local',
        {
            successRedirect: '/api/users/logginSuccess',
            failureRedirect: '/api/users/logginFaild',
        }
        // ,(err, data, message) => {
        //     if (data) {
        //         const token = data;
        //         req.session.token = token;
        //         res.setHeader('authorization', token );
        //         res.status(200);
        //         res.json({success : 1});
        //     } else {
        //         res.status(200);
        //         res.json({
        //             err,
        //             data,
        //             error_messages: message,
        //         });
        //     }
        // }
    )(req, res, next);
}

function profile(req, res, next) {
    // console.log('welcome ' + req.params.username);
    res.json(`welcome`);
}

function register(req, res, next) {
    const {email, firstname, lastname, password, password_confirm} = req.body;

    if (password !== password_confirm) {
        res.json({success: -2, message: 'password must be equal'});
    }
    // check if user already exists
    User.findOne({email: email})
        .then((user) => {
            if (user) {
                res.json({success: -1, message: 'email is already taken !'});
            } else {
                // create new User
                const newUser = new User({email, firstname, lastname, password})
                hash_password(newUser.password, (err, hash) => {
                    // Set Password to Hashed
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            res.json({success: 1, message: "succesfuly Registred"})
                        })
                        .catch(err => {
                            res.send(err)
                        })
                })
            }
        })

}

function logginSuccess(req, res, next) {
    let payload = req.session.passport.user;
    let accessToken = require('../util/jwt').signPayload2(payload);
    req.session.token = accessToken;
    req.session.refreshToken = require('../util/jwt').refreshToken(payload);
    res.set({"Authorization": accessToken});
    res.json({success: 1, message: 'Loggin Success'});
}

function logginFaild(req, res, next) {
    res.json({success: 0, message: 'Loggin Faild'});
}

function checkAuth(req, res, next) {
    console.log('check auth');
    if(req.session.passport !== undefined) {
        res.status(200);
        return res.json({ is_auth: true });
    }else {
        res.status(200);
        return res.json({ is_auth: false });
    }

}
module.exports = {
    index,
    login,
    profile,
    register,
    logginSuccess,
    logginFaild,
    checkAuth
}