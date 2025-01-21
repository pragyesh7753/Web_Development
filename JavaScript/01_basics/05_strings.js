const name = "pragyesh"
const repoCount = 50

// console.log(name + repoCount + "Value");   // this syntax is not recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // String interpolation and method is recommended

const gameName = new String("pragyesh-ji")
// console.log(gameName[0]);
// console.log(gameName.__proto__);  // String object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("y"));

const newString = gameName.slice(0, 5);   //negative values are not allowed
// console.log(newString);

const anotherString = gameName.slice(-7, 5);
// console.log(anotherString);

const newStringOne = "      pragyesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pks.com/pragyesh%20seth"

console.log(url.replace('%20', '-'));

console.log(url.includes('pragyesh'));

console.log(gameName.split(''));  // split the string into array
console.log(gameName.split('-'));  