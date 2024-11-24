// type annotation
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in arrays
let now: Date = new Date();
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

let user: { name: string; age: number; role: string } 
  = {
  name: 'John',
  age: 20,
  role: 'admin'
};

/*
  note:
  Type annotations for functions
  function annotation start (i: number) => void
  void: function does not return anything
  argument i: number
*/
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};



