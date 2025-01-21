// Primite Data Types/ Value Data Types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a loosely (dynamically) typed language, so we there is no necessity to define the data type of a variable.

const score = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId) // false;

const bigNumber = 6149987676596549699429876174n

// Non-Primitive Data Types/ Reference Data Types

// Array, Objects, Function

const heros = ['shaktiman', "naagraj", "doga"]
let myObj = {
    name: 'pragyesh',
    age: 22
}

// const myFunction = function () {
//     console.log("Hello World");
// }

// console.log(typeof outsideTemp);  // object
// console.log(typeof myFunction);  // function
// console.log(typeof myObj);  // object
// console.log(typeof heros);  // object
// console.log(typeof bigNumber);  // bigint
// console.log(typeof id);  // symbol
// console.log(typeof score);  // number
// console.log(typeof scoreValue);  // number
// console.log(typeof isLogged);  // boolean
// console.log(typeof userEmail);  // undefined
// console.log(typeof null);  // object




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap

// Stack: It is a special region of the computer's memory that stores temporary variables created by each function. It is a LIFO data structure. It is used to store local variables and function call.

// Heap: It is a region of the computer's memory that is not managed automatically for you, and is not as tightly managed by the CPU. It is a large and mostly unstructured region of memory (it is not a LIFO data structure), and is used to store objects (reference data types), functions, closures, etc.

// Stack(Primitive Data Types) and Heap(Non-Primitive Data Types)

let myYotubename = "hiteshchaudharydotcom"

let anothername = myYotubename
anothername = "chaiaurcode"

console.log(myYotubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "pks@google.com"
console.log(userOne.email);
console.log(userTwo.email);