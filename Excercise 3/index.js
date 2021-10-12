"use strict";

const randomNumber = Math.floor(Math.random() * 100) + 1
console.log('Random Number', randomNumber)

function checkGuess() {
    let myGuess = guess.value
    if (myGuess === randomNumber) {
        feedback.textContent = "You got it right!"
    } else if (myGuess > randomNumber) {
        feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
    } else if (myGuess < randomNumber) {
        feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
    }
}
submitGuess.addEventListener('click', checkGuess)