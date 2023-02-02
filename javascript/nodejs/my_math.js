'use strict';

const MyMath = {
    add: (x, y) => {
        return x + y;
    },

    subtract: (x, y) => {
        return x - y;
    },

    multiply: (x, y) => {
        return x * y;
    },

    divide: (x, y) => {
        if (y === 0) {
            return NaN;
        }

        return x / y;
    },

    pi: 3.14
}

module.exports = MyMath;