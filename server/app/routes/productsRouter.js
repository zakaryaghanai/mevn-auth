const router = require('express').Router();
const productController = require('../controllers/productController')
const isAuthenticated = require('../auth/auth_middleware').isAuthenticated;
const isAuthorized = require('../auth/auth_middleware').isAuthorized;

router.get('/', productController.getAll);
router.post('/', isAuthorized, productController.createProduct);

router.route('/:product_id')
    .all()
    .get(productController.getProduct)
    .delete()


module.exports = router;