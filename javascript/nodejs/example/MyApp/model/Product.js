class Product {
    constructor(name, price, description) {
        this._name = name;
        this._price = price;
        this._description = description;
    }

    getName() {
        return this._name;
    }

    getPrice() {
        return this._price;
    }

    getDescription() {
        return this._description;
    }
}

module.exports = Product;