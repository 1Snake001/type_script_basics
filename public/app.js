"use strict";
// type inference;
let value = "test";
let fnValue = Math.random();
// own functions with type definition
function exampleFn(input) {
    return input.length;
}
;
exampleFn("test_value");
