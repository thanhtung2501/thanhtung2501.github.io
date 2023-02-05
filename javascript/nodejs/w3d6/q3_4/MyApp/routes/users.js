const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController');

/* GET users listing. */
router.post('/addToCart', function(req, res, next) {
  let products = ProductController.addToCart();
  res.render('shoppingcart', {
    products: products
  });
});

module.exports = router;
