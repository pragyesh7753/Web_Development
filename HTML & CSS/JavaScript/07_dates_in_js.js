// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2020, 0, 23)
// let myCreatedDate = new Date(2020, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));  // time in seconds

let newDate = new Date()
// console.log(newDate.getMonth());
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());

// console.log(`${newDate.getDay()} - ${newDate.getMonth()} - ${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('default', { weekday: "long" }));