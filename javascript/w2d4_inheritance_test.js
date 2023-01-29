window.onload = tester;
function tester() {

    describe("filter string object", function () {
        it("The function accepts an array of strings that specifies a list of banned words. The function returns the string after removing all the banned words.", function () {
            let a = 'This house is not nice!';
            let b = new myFilter(a);
            assert.equal(b.filter('is', 'not'), 'This house nice!');
        });
    });

    describe("BubbleSort", function () {
        it("BubbleSort algorithm on the Array object", function () {
            let bubbleSort = new BubbleSort([6, 4, 0, 3, -2, 1]);
            
            assert.deepEqual(bubbleSort.bubbleSort(), [-2, 0, 1, 3, 4, 6]);
        });
    });

    describe("Create an object called Teacher derived from the Person class", function () {
        it("The function accepts an array of strings that specifies a list of banned words. The function returns the string after removing all the banned words.", function () {
            let aTeacher = new Teacher();
            aTeacher.initialize('Tom', 30);
            assert.equal(aTeacher.teach('WAP'), 'Tom is now teaching WAP');
        });
    });

    mocha.run();
}
