const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const isAuthorized = require('../auth/auth_middleware').isAuthorized;
const genKeyPair = require('../util/cryptography').genKeyPair

router.get('/', (req, res, next) => {
    res.status(200).send("api index");
})


router.get('/isAuthorized',isAuthorized);
// router.get('/dashboard', dashboard)
// router.get('/test', test)


// function dashboard(req, res, next) {
//
//
// // Generates the keypair
// //     genKeyPair();
//
//     res.status(200);
//     res.send("azed<s");
// }

// function test(req, res, next) {
//     const PUB_KEY = fs.readFileSync(path.resolve(__dirname, '../') + '/pub_key.pem', 'utf8');
//     const PRIV_KEY = fs.readFileSync(path.resolve(__dirname, '../') + '/priv_key.pem', 'utf8');
//
//     const payloadObj = {
//         sub: '1234567890',
//         name: 'John Doe',
//         admin: true,
//         iat: 1516239022
//     };
//
//     const signedJWT = jwt.sign(payloadObj, PRIV_KEY, {algorithm: 'RS256'});
//
//     console.log(signedJWT);
//     jwt.verify(signedJWT, PUB_KEY, {algorithms: ['RS256']}, (err, payload) => {
//         console.log(payload);
//     });
//     res.status(200);
//     res.send('test')
// }


module.exports = router;
