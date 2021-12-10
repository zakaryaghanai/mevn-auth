const router = require('express').Router();
const UserController = require('../controllers/userController');
const isAuthenticated = require('../auth/auth_middleware').isAuthenticated;
const isAuthorized = require('../auth/auth_middleware').isAuthorized;

router.get('/', UserController.index);
router.post('/login', UserController.login);


router.use('/user', isAuthorized);

router.get('/checkAuth', UserController.checkAuth);

router.get('/user/:username', UserController.profile);
router.post('/register', UserController.register);
router.get('/logginSuccess', UserController.logginSuccess);
router.get('/logginFaild', UserController.logginFaild);
router.get('/logout', (req, res, next) => {

    req.session.token = null;
    req.session.refreshToken = null;
    req.session.destroy(err => {
        res.clearCookie("sessionID");
        res.sendStatus(200);
    });
});



module.exports = router;



