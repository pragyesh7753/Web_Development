const userEmail = "p@pks.ai"

if (userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email");
}

// falsy values in JavaScript-
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values in JavaScript-
// true, 1, -1, BigInt 1n, " ", [], {}, function(){}, "0", 'false', " "

// if (userEmail.length === 0) {
//     console.log("Array is empty")
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")

}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10  // used for some special cases like if multiple values are coming from different sources and we want to pick the first non-falsy value
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary Operator-
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")