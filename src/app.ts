// type inference;

let value = "test";
let fnValue = Math.random();

// own functions with type definition

function exampleFn(input:string){
return input.length;
};

exampleFn("test_value");

// union type

let unionVariable: string | number = 'string';

function unionFn( input: string | number){
    // narrowing
    if(typeof input === "string"){
        return input.length;
    }
   return input * 4;
}

unionFn("value");
unionFn(5);