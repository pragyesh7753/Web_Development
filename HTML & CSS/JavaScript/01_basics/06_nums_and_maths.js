const score = 400;
// console.log(score);

const balance = new Number(100)  // this explicitly creates a number object
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-100));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.min(4, 3, 5, 6, 7, 8, 9));
// console.log(Math.max(4, 3, 5, 6, 7, 8, 9));

console.log(Math.random());  // random number between 0 and 1
console.log((Math.random() * 10) + 1);  // random number between 0 and 9
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10
const max = 20
console.log(Math.random() * (max - min + 1))   // random number between 10 and 20
