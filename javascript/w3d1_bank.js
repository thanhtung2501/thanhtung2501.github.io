class Bank {
    static nextNumber = 1000;
    
    constructor() {
        this._accounts = [];
    }

    addAcount() {
        let acc = new Account(Bank.nextNumber);
        this._accounts.push(acc);
        Bank.nextNumber++;
        return acc;
    }

    getAccounts() {
        return this._accounts;
    }

    addSavingsAccount(interest) {
        let saving = new SavingsAccount(Bank.nextNumber, interest);
        this._accounts.push(saving);
        return saving;
    }

    addCheckingAccount(overdraft) {
        let checking = new CheckingAccount(Bank.nextNumber, overdraft);
        this._accounts.push(checking);
        return checking;
    }

    closeAccount(number) {
        for (let i = 0; i < this._accounts.length; i++) {
            let acc = this._accounts[i];
            if (acc.getNumber() === number) {
                this._accounts.splice(i, 1);
                return acc;
            }
        }
    }

    accountReport() {
        let report = '';
        for (let item of this._accounts) {
            report += item.toString() + '\n';
        }

        return report;
    }

    endOfMonth() {
        for (let acc of this._accounts) {
            acc.endOfMonth();
        }
    }

}