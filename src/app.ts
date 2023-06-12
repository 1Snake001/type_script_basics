// type inference;

let value = "test";
let fnValue = Math.random();

// own functions with type definition

function exampleFn(input: string) {
  return input.length;
}

exampleFn("test_value");

// union type

let unionVariable: string | number = "string";

function unionFn(input: string | number) {
  // narrowing
  if (typeof input === "string") {
    return input.length;
  }
  return input * 4;
}

unionFn("value");
unionFn(5);

// literal type

let literalValue: 1 | 43 | 3.4 | 42;

// Type alias

type Numbers = 1 | 43 | 3.4 | 42;

let literalNumber: Numbers = 43;

function literalFn(input: Numbers): Numbers {
  return 1;
}

type Status = "Started" | "In progress" | "Complited";

let progress: Status;

progress = "Started";
progress = "In progress";
progress = "Complited";

// array

let numbers: Array<number> = [];
let numerArr: number[] = [];

numbers.push(4);

// tuple
let person: [string, number] = ["Kiss József", 52];

// type Person = [string, number];
type Person = [name: string, age: number];

let firstPerson: Person = ["Lakatos Géza", 43];

let [personName, pesonAge] = firstPerson;

// Oject
type Album = {
  userId: number;
  id: number;
  title: string;
  photos? :Array<Photo>;
};

interface Album2 {
  userId: number;
  id: number;
  title: string;
}

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

let album: Album = {
  userId: 1,
  id: 1,
  title: "step-by-step",
};
