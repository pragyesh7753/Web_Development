// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed right after it is created

function chai() {
    console.log("DB CONNECTED")
}   // normal function
// chai()

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`)
})(); // IIFE 

((name) => {
    // unnamed IIFE
    console.log(`DB CONNNECTED TWO ${name}`);
})('pragyesh')

// if you want to define more than one IIFE, you have to explicitly terminate the previous IIFE with a semicolon

