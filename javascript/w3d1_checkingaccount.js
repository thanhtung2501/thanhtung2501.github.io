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
        return super.toString() + ", Overdraft: " + this._overdraft;
    }

    withdraw(amount) {
        let total = this.getBalance + this.getOverdraft();
        if (amount > total) {
            throw Error("Insufficient funds");
        }
        super.withdraw(amount);
    }

    endOfMonth() {
        if (this.getBalance() < 0) {
            return "Warning,low balance";
        }
        return this.toString();
    }
}