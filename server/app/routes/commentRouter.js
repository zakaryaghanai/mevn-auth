const router = require('express').Router();
const productController = require('../controllers/productController')
const isAuthorized = require('../auth/auth_middleware').isAuthorized;

router.route('/')
    .all()
    .get()
    .post()


// 5f514cd49dc50b16c8b0c0b4
module.exports = router;