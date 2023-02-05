const Product = require('../model/Product');

let products = [];
const ProductController = {
    addToCart(req, res, next) {
        let p1 = new Product('Posche', 100000, 1);
        let p2 = new Product('Audi', 60000, 5);
        let p3 = new Product('BMW', 50000, 10);

        products.push(p1);
        products.push(p2);
        products.push(p3);

        return products;
    }
};

module.exports = ProductController;