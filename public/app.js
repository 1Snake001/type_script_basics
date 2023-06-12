"use strict";
// type inference;
let value = "test";
let fnValue = Math.random();
// own functions with type definition
function exampleFn(input) {
    return input.length;
}
exampleFn("test_value");
// union type
let unionVariable = "string";
function unionFn(input) {
    // narrowing
    if (typeof input === "string") {
        return input.length;
    }
    return input * 4;
}
unionFn("value");
unionFn(5);
// literal type
let literalValue;
let literalNumber = 43;
function literalFn(input) {
    return 1;
}
;
let progress;
progress = "Started";
progress = "In progress";
progress = "Complited";
// array
let numbers = [];
let numerArr = [];
numbers.push(4);
