let maxNumberToGues = 20;
let numberToGuess = Math.round(Math.random() * maxNumberToGues);
let number = document.getElementById("number");
let submitButton = document.getElementById("submit");
let result = document.getElementById("result");
let playAgain = document.getElementById("playAgain");
let tries = count = '';

submitButton.addEventListener('click', randomizer)

// Randomizer

function randomizer(event) {
    event.preventDefault();

    if (number.value == '') {
        result.innerHTML = 'Insert a number';
    } else if (number.value > 20) {
        result.innerHTML = 'Insert a number lower than 20';
    } else if (number.value < 0) {
        result.innerHTML = 'Insert a number higher than 0';
    } else if (number.value > numberToGuess) {
        result.innerHTML = 'Your number is too high';
    } else if (number.value < numberToGuess) {
        result.innerHTML = 'Your number is too low';
    } else {
        result.innerHTML = 'Correct! It took you ' + tries + ' tries';
        number.disabled = true;
        submitButton.disabled = true;
        playAgain.style.display = "inline-block";
    }
}

// Play again

playAgain.addEventListener('click', reset);

function reset() {
    number.value = '';
    result.innerHTML = '';
    playAgain.style.display = 'none';
    number.disabled = false;
    submitButton.disabled = false;
    numberToGuess = Math.round(Math.random() * maxNumberToGues);
}

console.log(tries);