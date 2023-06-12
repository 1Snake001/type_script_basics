// type inference;

let value = "test";
let fnValue = Math.random();

// own functions with type definition

function exampleFn(input:string){
return input.length;
};

exampleFn("test_value");

// union type

let unionVariable: string | number = 'test2';