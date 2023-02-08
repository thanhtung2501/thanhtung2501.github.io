const express = require('express');
const path = require('path');
const session = require('express-session');
const Product = require('./model/Product');
const products = require('./model/inventory');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'style')));
app.use(express.static(path.join(__dirname, 'views', 'js')));
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: true
}));

// if cart doesn't exist in session, create an object for cart
app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', {
        products: products
    });
});

// app.get('/product', (req, res) => {
//     let index = parseInt(req.query.index);
//     let productItem = products[index];
//     let product = new Product(productItem.getName(), productItem.getPrice(), parseInt(productItem.getQuantity()));
    
//     let productCart = [];

//     if (req.session.cart) {
//         productCart = req.session.cart
//     }

//     if (productCart.length === 0) {
//         productCart.push(product);
//     } else {
//         let isExist = false;
//         for (let i = 0; i < productCart.length; i++) {
//             let p = productCart[i];
//             if (p._name === product.getName()) {
//                 isExist = true;
//                 product.setQuantity(p._quantity);
//                 product.addQuantity();
//                 productCart[i] = product;
//                 break;
//             }
//         }

//         if (!isExist) {
//             productCart.push(product);
//         }
//     }

//     req.session.cart = productCart;

//     res.render('cart', {
//         products: productCart
//     });
// });

app.post('/addToCart', (req, res) => {
    const data = JSON.parse(req.body.data);
    let index = parseInt(data.index);
    let productItem = products[index];
    let product = new Product(productItem.getName(), productItem.getPrice(), parseInt(productItem.getQuantity()));
    
    let productCart = [];

    if (req.session.cart) {
        productCart = req.session.cart
    }

    if (productCart.length === 0) {
        productCart.push(product);
    } else {
        let isExist = false;
        for (let i = 0; i < productCart.length; i++) {
            let p = productCart[i];
            if (p._name === product.getName()) {
                isExist = true;
                product.setQuantity(p._quantity);
                product.addQuantity();
                productCart[i] = product;
                break;
            }
        }

        if (!isExist) {
            productCart.push(product);
        }
    }

    req.session.cart = productCart;

    res.redirect(303, '/');
});

app.get('/cart', (req, res) => {
    res.render('cart', {
        products: req.session.cart
    })
});

app.listen(3000, () => {
    console.log('w4d2 q3_4 is running');
});