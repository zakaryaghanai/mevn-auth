module.exports.isAuthenticated = (req, res, next) => {
    if (!req.isAuthenticated()) return res.sendStatus(403);
    return next();
}

module.exports.isAuthorized = (req, res, next) => {
    var accessToken = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!accessToken) return res.sendStatus(401);
    require('../util/jwt').verifyPayload(accessToken, (err, payload) => {
        if (err) {
            //console.log("token is no more valide !!");
            return res.sendStatus(401);
        }
        return next();
    });
}

