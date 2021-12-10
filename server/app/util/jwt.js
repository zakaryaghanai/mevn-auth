const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

module.exports.signPayload = (payloadObj) => {
    const PRIV_KEY = fs.readFileSync(path.resolve(__dirname, '../') + '/priv_key.pem', 'utf8');
    // importing the private key

    const payloadObjString = payloadObj.toJSON();
    // const payloadObjString = JSON.stringify(payloadObj);
    return jwt.sign(payloadObjString, PRIV_KEY, {expiresIn: '30s', algorithm: 'RS256'});
}

module.exports.signPayload2 = (payloadObj) => {
    const PRIV_KEY = fs.readFileSync(path.resolve(__dirname, '../') + '/priv_key.pem', 'utf8');
    return jwt.sign(payloadObj, PRIV_KEY, {expiresIn: '30m', algorithm: 'RS256'});
}

module.exports.refreshToken = (payloadObj) => {
    const PRIV_KEY = fs.readFileSync(path.resolve(__dirname, '../') + '/priv_key.pem', 'utf8');
    return jwt.sign(payloadObj, PRIV_KEY, {algorithm: 'RS256'});
}

module.exports.verifyPayload = (signedJWT, callback) => {
    // importing the Public key
    const PUB_KEY = fs.readFileSync(path.resolve(__dirname, '../') + '/pub_key.pem', 'utf8');

    jwt.verify(signedJWT, PUB_KEY, { algorithms: ['RS256'] }, (err, payload) => {
        callback(err, payload);
    });
}