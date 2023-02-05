class Product {
    constructor(name, price, quantity) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }

    getName() {
        return this._name;
    }

    getPrice() {
        return this._price;
    }

    getQuantity() {
        return this._quantity;
    }
}

module.exports = Product;