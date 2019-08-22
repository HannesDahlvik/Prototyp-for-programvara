let maxNumberToGuess = 20;
let numberToGuess = Math.round(Math.random() * maxNumberToGuess);
let number = document.getElementById("number");
let submitButton = document.getElementById("submit");
let result = document.getElementById("result");
let playAgain = document.getElementById("playAgain");
let startButton = document.getElementById("startButton");
let guesserName = document.getElementById("name");
let starter = document.getElementById("form");
let game = document.getElementById("game");
let tries = count = 1;

// Play

startButton.addEventListener('click', playGame);

function playGame(event) {
    event.preventDefault();

    form.style.display = 'none';
    game.style.display = 'flex';
}

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
        tries = count += 1;
    } else if (number.value < numberToGuess) {
        result.innerHTML = 'Your number is too low';
        tries = count += 1;
    } else {
        result.innerHTML = 'Good ' + guesserName.value + ' it took you ' + tries + ' tries to guess the correct number';
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
    form.style.display = 'flex';
    game.style.display = 'none';
    guesserName.value = '';
    number.disabled = false;
    submitButton.disabled = false;
    numberToGuess = Math.round(Math.random() * maxNumberToGuess);
    tries = count = 0;
}