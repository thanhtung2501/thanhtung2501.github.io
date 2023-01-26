x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    console.log(x);
    console.log(a);
    var f = function (a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b);
    var x = 10;
}
c(8, 9, 10);
console.log(b);
console.log(x);

var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
}
bar();