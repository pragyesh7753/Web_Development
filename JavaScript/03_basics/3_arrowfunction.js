const user = {
    username: "pragyesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this); // window object  - empty object (global object)

// function chai() {
//     let username = "pragyesh"
//     console.log(this.username); // undefined
// }

// chai() 

// Arrow function
const chai = () => {
    let username = "pragyesh"
    console.log(this);
    console.log(this.username); // undefined
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // explicit return
// }
// const addTwo = (num1, num2) => num1 + num2  // implict return in arrow function
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => (num1 + num2)


console.log(addTwo(2, 3));

const myArray=[2,5,3,7,8]

