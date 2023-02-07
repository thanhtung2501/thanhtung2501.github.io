const express = require('express');
const path = require('path');
const session = require('express-session');
const Product = require('./model/Product');
const products = require('./model/inventory');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'style')));
app.use(session({
    secret: 'my secret'
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        products: products
    });
});

app.post('/addToCart', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;

    let product = new Product(name, parseInt(price), parseInt(quantity));

    let productCart = [];

    if (req.session.products) {
        productCart = req.session.products
    }

    for (let i = 0; i < productCart.length; i++) {
        let p = productCart[i];
        if (p.getName() === product.getName()) {
            product.setQuantity(product.addQuantity(parseInt(quantity)));
        }
    }
    console.log(product);
    productCart.push(product);

    console.log(productCart);

    req.session.products = productCart;

    res.redirect('/cart');
});

app.get('/cart', (req, res) => {
    res.render('cart', {
        products: req.session.products
    })
});

app.listen(3000, () => {
    console.log('w4d1 q3_4 is running');
});