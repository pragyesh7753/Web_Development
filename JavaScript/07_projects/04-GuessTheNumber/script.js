let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number")
    } else if (guess < 1) {
        alert("Please enter a number greater than 1")
    } else if (guess > 100) {
        alert("Please enter a number less than 100")
    } else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over! Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number in ${numGuess}!`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage("Number is too Low! Try Again!")

    } else if (guess > randomNumber) {
        displayMessage("Number is too High! Try Again!")

    }
}

function displayGuess(guess) {  // cleaup method
    userInput.value = ""
    guessSlot.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h3>${message}</h3>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)
        playGame = true
    })
}