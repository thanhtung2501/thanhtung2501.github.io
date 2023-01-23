let testString = "abc 123";
let testArray = ["Tom","Harry","John","Alex","Mohamed"];
window.onload = tester;
function tester(){

    describe("sumArray", function(){
        it("take arrays and return sum of their values", function(){
            assert.equal(sum(3,5,7,5,3), 23);
        });
    });
    describe("multiplyArray", function(){
        it("takes arrays and returns the multiply of their values", function(){
            assert.equal(multiply(7,5,3), 105);
        });
    });
    describe("reverseString", function(){
        it("takes string and computes the reversal of a string ", function(){
            assert.equal(reverse(testString), "321 cba");
        });
    });

    describe("filterLongWords", function(){
        it("takes an array of words and an integer i and returns the array of words that are longer than i ", function(){
            assert.deepEqual(filterLongWords(testArray,5),["Mohamed"]);
        });
    });
    mocha.run();
}
