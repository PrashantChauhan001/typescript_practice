"use strict";
// string
let lName;
lName = "Prashant";
let newName = lName.toUpperCase();
console.log(newName);
// number
let num01;
num01 = 467;
// boolean
let bool01;
// array
let arr;
arr = [1, 4, 2, 43, 6, 45, 4, 645];
// any
let vari01;
// void
let vari02;
vari02 = undefined;
// enum
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
    Direction[Direction["DOWN"] = 3] = "DOWN";
    Direction[Direction["LEFT"] = 4] = "LEFT";
})(Direction || (Direction = {}));
// tuples
let tupple01;
// never
let var03;
// functions and it's various use
const func01 = (arg01, arg02, ...args) => {
    // some logic
};
const func02 = (arg01, arg02, ...args) => {
    // some logic
    return 4;
};
// arg3 is optional
const func03 = (arg01, arg02 = true, args3) => {
    // some logic
    return arg01 + (args3 ? 1 : 0) + (arg02 ? 1 : 0);
};
// generics
const getItems = (...arg01) => {
    return new Array(...arg01).join("");
};
const ans01 = getItems(1, 4, 4, 5, 5, 6);
const ans02 = getItems("ajskld", "dsfa", "asfsa", "gdgd");
const ans03 = getItems(true, false, null, undefined);
const ans04 = getItems([1], [647, false, { first: true }], [3883, [67]], [34, 43, "rere", true]);
console.log(ans01, ans02, ans03, ans04);
