
function sayMyName() {
    console.log("P");
    console.log("r");
    console.log("a");
    console.log("g");
    console.log("y");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
    // console.log("Pragyesh");  // This line will not be executed as it is after return statement, hence unreachable code
}

const result = addTwoNumbers(3, 5)
// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    // if (username === undefined) {
    if (!username) {
        console.log("Please provide a username")
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Pragyesh"))
console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Pragyesh",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));