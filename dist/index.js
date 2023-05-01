"use strict";
const car = {
    type: 'toyota',
    millage: 21
};
car.millage = 27;
const names = {};
names.jake = 69;
names.rupa = 90;
console.log(names);
var dir;
(function (dir) {
    dir[dir["north"] = 0] = "north";
    dir[dir["south"] = 1] = "south";
    dir[dir["east"] = 2] = "east";
    dir[dir["west"] = 3] = "west";
})(dir || (dir = {}));
console.log(dir);
var pami;
(function (pami) {
    pami["north"] = "hello";
    pami["east"] = "lelo";
    pami["south"] = "lelo";
    pami["west"] = "lelo";
})(pami || (pami = {}));
;
;
const here = {
    type: 56,
    name: 'abhishek',
    age: 21
};
console.log(here);
const run = (x) => {
    console.log(x);
};
run(4);
function make0() {
    return 'hello world';
}
;
const make = (a, b, c) => {
    return a + b + (c || 0);
};
const boom = (x = 69) => {
    return x;
};
const func = (x) => {
    return x;
};
const func2 = (a) => {
    return a;
};
