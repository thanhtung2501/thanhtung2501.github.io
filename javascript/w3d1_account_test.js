window.onload = tester;
let a = new Account(Bank.nextNumber);

function tester() {

    describe("deposit", function () {
        it("deposit should be successful.", function () {
            a.deposit(100);
            assert.equal(a.getBalance(), 100);
        });
    });

    describe("withdraw", function () {
        it("withdraw should be successful.", function () {
            a.withdraw(10);
            assert.equal(a.getBalance(), 90);
        });
    });

    describe("addInterest", function () {
        it("addInterest for saving should be successful.", function () {
            console.log('*********** start addInterest ********');
            let saving = new SavingsAccount(Bank.nextNumber, 2.5);
            saving.deposit(100);
            saving.addInterest();
            console.log('********* addInterest ********')
            console.log(saving.toString());
            console.log('********* endOfMonth ********')
            console.log(saving.endOfMonth());
            console.log('*********** end addInterest ********');
        });
    });

    describe("withdraw of checking account", function () {
        it("withdraw amount negative", function () {
            console.log('*********** start withdraw negative amount ********');
            let checking = new CheckingAccount(Bank.nextNumber, 200);
            checking.deposit(100);
            console.log(checking.withdraw(-10));
            console.log('*********** end withdraw negative amount ********');
        });
    });

    describe("withdraw of checking account", function () {
        it("withdraw amount bigger than overdraf", function () {
            console.log('*********** start withdraw checking ********');
            let checking = new CheckingAccount(Bank.nextNumber, 200);
            checking.deposit(100);
            console.log(checking.withdraw(300));
            console.log('*********** end withdraw checking ********');
        });
    });

    describe("withdraw of checking account", function () {
        it("withdraw amount less than overdraf", function () {
            console.log('*********** start withdraw amount less than overdraf ********');
            let checking = new CheckingAccount(Bank.nextNumber, 200);
            checking.deposit(100);
            console.log(checking.toString());
            console.log(checking.withdraw(300));
            console.log('*********** end withdraw amount less than overdraf ********');
        });
    });

    describe("addAcount", function () {
        it("addAcount of bank", function () {
            let bank = new Bank();
            console.log('*********** start addAccount ********');
            console.log('Added a bank account: ' + bank.addAcount());
            console.log('Added a bank account: ' + bank.addAcount());
            console.log('Added a checking account: ' + bank.addCheckingAccount(100));
            console.log('Added a saving account: ' + bank.addSavingsAccount(5));
            console.log(bank.getAccounts());
            console.log('*********** end addAccount ********');
        });
    });

    describe("closeAccount", function () {
        it("addAcount of bank", function () {
            let bank = new Bank();
            let acc1 = bank.addAcount();
            let acc2 = bank.addSavingsAccount(5);
            let acc3 = bank.addCheckingAccount(100);

            console.log('*********** start closeAccount ********');
            console.log(bank.getAccounts());
            console.log('close acc: ' + bank.closeAccount(acc2.getNumber()));
            console.log(bank.getAccounts());
            console.log('*********** end closeAccount ********');
        });
    });

    describe("accountReport", function () {
        it("accountReport of bank", function () {
            let bank = new Bank();
            let acc1 = bank.addAcount();
            let acc2 = bank.addAcount();
            let acc3 = bank.addCheckingAccount(100);

            console.log('*********** start accountReport ********');
            console.log(bank.accountReport());
            console.log('*********** end accountReport ********');
        });
    });
    

    mocha.run();
}
