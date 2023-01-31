class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }

    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    toString() {
        return "Account " + this._number + ": Overdraft " + this._overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._overdraft) {
            throw Error("Insufficient funds");
        }
        this._overdraft -= amount;
    }

    endOfMonth() {
        if (this._balance < 0) {
            return "Warning,low balance"
        }
        return this.toString();
    }
}