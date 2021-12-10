const mongoose = require('mongoose');
const Product = require('../models/product');

const verifyPayload = require('../util/jwt').verifyPayload

function getAll(req, res, next) {
    Product
        .find()
        .exec()
        .then(docs => {
            // console.log(docs);
            res.status(200);
            res.send(docs);
        })
        .catch(err => {
            res.status(400);
            res.send("could not get products");
        })
}

async function getProduct(req, res, next) {
    console.log(req.params.product_id);
    const product = await Product.findById(req.params.product_id);
    res.json(product);
}

function createProduct(req, res, next) {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    })
    product.save()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(400)
            res.json(err)
        })
}

module.exports = {
    getAll,
    getProduct,
    createProduct
}