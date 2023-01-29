/**
 * Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
 */
function myFilter(str) {
    this.str = str;
}
myFilter.prototype.filter = function (...s) {
    let result = this.str.split(' ');
    for (let i = 0; i < s.length; i++) {
        let strRep = s[i];
        result = result.filter(item => item !== strRep);

    }
    return result.reduce((a, b) => a + ' ' + b);
}

let a = 'This house is not nice!';
let b = new myFilter(a);
console.log(b.filter('is', 'not'));

/**
 * Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]
 */
function BubbleSort(arr) {
    this.arr = arr;
}
BubbleSort.prototype.bubbleSort = function () {
    for (let i = 0; i < this.arr.length; i++) {
        for (let j = 0; j < this.arr.length - i - 1; j++) {
            if (this.arr[j] > this.arr[j + 1]) {
                let tmp = this.arr[j];
                this.arr[j] = this.arr[j + 1];
                this.arr[j + 1] = tmp;
            }
        }
    }
    return this.arr;
}
let bubbleSort = new BubbleSort([6, 4, 0, 3, -2, 1]);
console.log(bubbleSort.bubbleSort());

/**
 * Exercise 3:
The last exercise for today comes from: https://www.learn-js.org/en/Inheritance
Create an object called Teacher derived from the Person class, and implement a method called teach
which receives a string called subject, and returns:
[teacher's name] is now teaching [subject]
 */
let Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}

let Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    return this.name + ' is now teaching ' + subject;
}
let aTeacher = new Teacher();
aTeacher.initialize('Tom', 30);
aTeacher.teach('WAP');