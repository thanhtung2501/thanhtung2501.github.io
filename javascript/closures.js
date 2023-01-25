/**
 * Modify this code to make a revealing module that returns an object with two methods. The
returned object should have a add() method and a reset() method. Where the add method
adds 1 to the counter, and the reset method set it back to zero.
 */
const count = (function() {
    let value = 0;
    
    function add() {
        value += 1;
        return value;
    }

    function reset() {
        value = 0;
        return value;
    }

    return {
        add: add,
        reset: reset
    }
})();

console.log('First value: ' + count.add());
console.log('Second value: ' + count.add());
console.log('After reset: ' + count.reset());

/**
 * The add() function in question 1 always adds 1 to the counter each time it is called. Write a
make_adder(inc) function whose return value is an add function with increment value of
inc instead of 1
 */
const make_adder = (function(inc){
    let value = 0;
    function add() {
        value += inc;
        return value;
    }

    return add;
});
const add2 = make_adder(2);
const add5 = make_adder(5);
console.log(add2());
console.log(add2());
console.log(add5());
console.log(add5());

/**
 * Using the Revealing Module Pattern, write a JavaScript definition of a Module that creates an
Employee Object with the following fields and methods:
Private field: name
Private field: age
Private field: salary
Private method: getName()
Private method: getAge()
Private method: getSalary()
Public method: setName()
Public method: setAge()
Public method: setSalary()
Public method: increaseSalary(percentage) // uses private getSalary()
Public method: incrementAge() // uses private getAge()
 */
const Employee = (() => {
    let name;
    let age;
    let salary;

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    function getSalary() {
        return salary;
    }

    const setName = (newName) => {
        name = newName;
    };

    function setAge(newAge) {
        age = newAge;
    }

    function setSalary(newSalary) {
        salary = newSalary;
    }

    function increaseSalary(percentage) {
        return getSalary() + getSalary() * percentage;
    }

    function incrementAge() {
        return getAge() + 1;
    }

    return {
        setName: setName,
        setAge: setAge,
        setSalary: setSalary,
        getName: getName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge
    };
});
const e1 = Employee();
e1.setAge(20);
e1.setName('Tony');
e1.setSalary(10000);
console.log(e1.getName());
console.log('e1.increaseSalary(0.1): ' + e1.increaseSalary(0.1));
console.log('e1.incrementAge(): ' + e1.incrementAge());


/**
 * Write a few JavaScript instruction to make a Module extension to the module made in the
previous question. Very important – you are not allowed to modify any of the code to facilitate
the extension. Your extension should add a public address field and public methods
setAddress(address) and getAddress()
 */
Employee.extension = function() {
    let address;

    const getAddress = () => {
        return address;
    };

    const setAddress = (newAddress) => {
        address = newAddress;
    };

    return {
        getAddress: getAddress,
        setAddress: setAddress
    };
};
const e2 = Employee.extension();
e2.setAddress('805 N 10th');
console.log('Address: ' + e2.getAddress());