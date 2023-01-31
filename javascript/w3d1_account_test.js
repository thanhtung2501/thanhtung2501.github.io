window.onload = tester;
let a = new Account(1001);

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

    // describe("BubbleSort", function () {
    //     it("BubbleSort algorithm on the Array object", function () {
    //         let bubbleSort = new BubbleSort([6, 4, 0, 3, -2, 1]);
            
    //         assert.deepEqual(bubbleSort.bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    //     });
    // });

    // describe("Create an object called Teacher derived from the Person class", function () {
    //     it("The function accepts an array of strings that specifies a list of banned words. The function returns the string after removing all the banned words.", function () {
    //         let aTeacher = new Teacher();
    //         aTeacher.initialize('Tom', 30);
    //         assert.equal(aTeacher.teach('WAP'), 'Tom is now teaching WAP');
    //     });
    // });

    mocha.run();
}
