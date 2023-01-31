class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        return this.deposit((this.getBalance() * this._interest) / 100);
    }

    toString() {
        return super.toString() + ' Interest: ' + this._interest;
    }

    endOfMonth() {
        this.addInterest();
        return this.toString()
    }
}