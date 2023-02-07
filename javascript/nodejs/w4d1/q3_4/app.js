const express = require('express');
const path = require('path');
const session = require('express-session');
const Product = require('./model/Product');
const products = require('./model/inventory');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'style')));
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        products: products
    });
});

app.get('/product', (req, res) => {
    let index = parseInt(req.query.index);
    let productItem = products[index];
    let product = new Product(productItem.getName(), productItem.getPrice(), parseInt(productItem.getQuantity()));

    let productCart = [];

    if (req.session.products) {
        productCart = req.session.products
    }

    console.log(product);
    if (productCart.length === 0) {
        productCart.push(product);
    } else {
        for (let i = 0; i < productCart.length; i++) {
            let p = productCart[i];
            if (isExist(productCart, product)) {
                product.addQuantity(parseInt(product.getQuantity()));
                productCart[i] = product;
            } else {
                productCart.push(product);
            }
        }
    }

    req.session.products = productCart;

    res.render('cart', {
        products: productCart
    });
});

function isExist(productCart, product) {
    for (let i = 0; i < productCart.length; i++) {
        let p = productCart[i];
        if (p._name === product.getName()) {
            return true;
        }
    }

    return false;
}

app.get('/cart', (req, res) => {
    res.render('cart', {
        products: req.session.products
    })
});

app.listen(3000, () => {
    console.log('w4d1 q3_4 is running');
});