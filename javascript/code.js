function sum(...nums) {
    return nums.reduce((a, b) => a + b);
}

function multiply(...nums) {
    return nums.reduce((a, b) => a * b);
}

function reverse(str) {
    return str.split('').reduce((a, b) => b.concat(a));
}

function filterLongWords(wordArr, count) {
    return wordArr.filter(e => e.length > count);
}