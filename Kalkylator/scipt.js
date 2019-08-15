// Numbers
let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let answer = document.getElementById("answer");

// MDAS
let addition = document.getElementById("addition");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");


addition.addEventListener("click", additionFunction);
subtract.addEventListener("click", subtractFunction);
multiply.addEventListener("click", multiplyFunction);
division.addEventListener("click", divisionFunction);

function additionFunction() {
    answer.value = parseFloat(num1.value) + parseFloat(num2.value)
};

function subtractFunction() {
    answer.value = parseFloat(num1.value) - parseFloat(num2.value)
};

function multiplyFunction() {
    answer.value = parseFloat(num1.value) * parseFloat(num2.value)
};

function divisionFunction() {
    answer.value = parseFloat(num1.value) / parseFloat(num2.value)
};