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

    setQuantity(quantity) {
        this._quantity = quantity;
    }

    addQuantity() {
        this._quantity += 1;
        // return this._quantity + quantity;
    }

    calPrice() {
        return this._price * this._quantity;
    }

    getTotal() {
        return this.calPrice();
    }
}

module.exports = Product;