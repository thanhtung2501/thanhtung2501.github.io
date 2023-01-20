function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected: " + expected + " - found: " + found;
    }
}

function myFunctionTestArr(expected, found) {
    if (JSON.stringify(expected) === JSON.stringify(found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED. Expected: " + expected + " - found: " + found;
    }
}

/* 1. max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}
console.log("Expected output of max(20,10) is " + max(20, 10) + " " + myFunctionTest(20, max(20, 10)));

/* 2. max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is " + maxOfThree(5, 4, 44) + " " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is " + maxOfThree(55, 4, 44) + " " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is " + maxOfThree(55, 4, 44) + " " + myFunctionTest(4, maxOfThree(55, 4, 44)));

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(a) {
    const vowelArr = ['a', 'e', 'i', 'o', 'u'];
    return vowelArr.includes(a.toLowerCase());
}
console.log("Expected output of isVowel('a') is " + isVowel('a') + " " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('E') is " + isVowel('E') + " " + myFunctionTest(true, isVowel('E')));
console.log("Expected output of isVowel('d') is " + isVowel('d') + " " + myFunctionTest(false, isVowel('d')));

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
function sum(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}
console.log("Expected output of sum([1, 2, 3, 4]) is " + sum([1, 2, 3, 4]) + " " + myFunctionTest(10, sum([1, 2, 3, 4])));

function multiply(arr) {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result *= arr[i];
    }

    return result;
}
console.log("Expected output of multiply([1, 2, 3, 4]) is " + multiply([1, 2, 3, 4]) + " " + myFunctionTest(24, multiply([1, 2, 3, 4])));

// 5. Define a function reverse() that computes the reversal of a string.
function reverse(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}
console.log("Expected output of reverse('jag testar') is " + reverse('jag testar') + " " + myFunctionTest('ratset gaj', reverse('jag testar')));

// 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(wordArr) {
    let result = '';
    let wordCount = 0;
    for (let i = 0; i < wordArr.length; i++) {
        if (wordCount < wordArr[i].length) {
            wordCount = wordArr[i].length;
            result = wordArr[i];
        }
    }

    return result;
}
console.log("Expected output of findLongestWord(['a', 'abc', 'as']) is " + findLongestWord(['a', 'abc', 'as']) + " " + myFunctionTest('abc', findLongestWord(['a', 'abc', 'as'])));

// 7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(wordArr, num) {
    let result = [];
    for (let i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > num) {
            result.push(wordArr[i]);
        }
    }

    return result;
}
console.log("Expected output of filterLongWords(['a', 'abc', 'as', 'ddd'], 2) is " + filterLongWords(['a', 'abc', 'as', 'ddd'], 2) + " " + myFunctionTestArr(['abc', 'ddd'], filterLongWords(['a', 'abc', 'as', 'ddd'], 2)));

// 8. Modify the jsfiddle on the map/filter/reduce slide
const a = [1, 3, 5, 3, 3];
const b = a.map(elem => elem * 10);
const c = a.filter(elem => elem === 3)
const d = a.reduce((product, elem) => product * elem);
console.log("Expected output of array [1, 3, 5, 3, 3] multiply each element by 10 is [10, 30, 50, 30, 30]  " + myFunctionTestArr([10, 30, 50, 30, 30], b));
console.log("Expected output of array [1, 3, 5, 3, 3] return array with all elements equal to 3 is [3, 3, 3]  " + myFunctionTestArr([3, 3, 3], c));
console.log("Expected output of array [1, 3, 5, 3, 3] return the product of all elements is 135  " + myFunctionTest(135, d));