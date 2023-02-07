const express = require('express');
const router = express.Router();
const products = require('../model/inventory');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { 
    title: 'Welcome to shopping cart',
    products: products
  });
});

router.get('/details', (req, res) => {
  let productName = req.query.name;
  console.log('productName: ' + productName);
  res.render('product_details', {
    product: products[0]
  });
});

router.post('/cart', (req, res) => {
  let cart = [];
  if (req.cookies.cart) {
    cart = req.cookies.cart;
    res.render('details', {
      cart: cart
    });
  } else {
    let product = req.body.product;
    cart.push(product);
    res.cookie('cart', cart);
  }

  res.redirect('/details?cart=' + cart);
});

module.exports = router;
