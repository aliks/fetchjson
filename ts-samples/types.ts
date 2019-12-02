let today = new Date();
//console.log(today);

const person = {
  age: 20
};

class Color {}
const red = new Color();

// build in types
const now: Date = new Date();

// Array
let colors: string[] = ["red", "green"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
// function description
// (i:number) - parameters and types function takes in
// => void - type function returns
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
