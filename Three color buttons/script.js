let redButton = document.getElementById("red");
let greenButton = document.getElementById("green");
let blueButton = document.getElementById("blue");

redButton.addEventListener('click', redAlert);
greenButton.addEventListener('click', greenAlert);
blueButton.addEventListener('click', blueAlert);

function redAlert() {
    document.body.style.background = "#ff0000";
    alert("You pressed the Red button");
}

function greenAlert() {
    document.body.style.background = "#00ff00";
    alert("You pressed the Green button");
}

function blueAlert() {
    document.body.style.background = "#0000ff";
    alert("You pressed the Blue button");
}