"use strict";
console.log('hello world');
let age = 21;
console.log(age);
const add = (a, b) => {
    if (a < 5)
        return "cannot add this";
    return a += b;
};
console.log(add(10, 8));
