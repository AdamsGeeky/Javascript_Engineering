function add(num1, num2) {
    return console.log(`the addition is ${num1 + num2}`);
}

 
function sum() {
     let sum = 0;
     for (let i = 0; i < arguments.length; i++) {
         sum += arguments[i];
     }
     return console.log(`the sum is ${sum}`);
    }

// avagare
function avarage() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        return console.log(`the avarage is ${sum / arguments.length}`);
}}


// arguments object, which is a built-in JavaScript object that holds all the arguments passed to a function.
function subtract(num1, num2) {
    return console.log(`the difference is ${num1 - num2}`);
}

function multiply(num1, num2) {
    return console.log(`the product is ${num1 * num2}`);
}

export { add, subtract, multiply , sum, avarage};