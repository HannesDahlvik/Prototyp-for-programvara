let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let answer = document.getElementById("answer");

let addition = document.getElementById("addition");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");

let select = document.getElementById("select");

let calculate = document.getElementById("calculate");

calculate.addEventListener('click', calcFunction);

function calcFunction() {
    if (select.value === 'addition') {
        answer.value = parseFloat(num1.value) + parseFloat(num2.value);
    } else if (select.value === 'subtract') {
        answer.value = parseFloat(num1.value) - parseFloat(num2.value);
    } else if (select.value === 'multiply') {
        answer.value = parseFloat(num1.value) * parseFloat(num2.value);
    } else if (select.value === 'division') {
        answer.value = parseFloat(num1.value) / parseFloat(num2.value);
    }
}