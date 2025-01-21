// Singleton
// Object.create


const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Pragyesh",
    "full name": "Pragyesh Kumar Seth",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "pragyesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); // correct but it can not access "full name" property
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "pragyesh@chatgpt.com"
// Object.freeze(JsUser)  // this will make the object immutable
JsUser.email = "pragyesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());