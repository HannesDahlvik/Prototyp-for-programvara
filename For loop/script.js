let number = document.getElementById("number");
let submit = document.getElementById("submit");
let paragraphs = document.getElementById("paragraphs");

let resetButton = document.getElementById("resetButton");

resetButton.addEventListener('click', reset);
submit.addEventListener('click', makeElements);

function reset() {
    while (paragraphs.hasChildNodes()) {
        paragraphs.removeChild(paragraphs.firstChild);
    }
    number.value = '';
}

function makeElements() {
    for (i = 0; i < number.value; i++) {
        var para = document.createElement("P");
        para.innerHTML = 'Hello world';
        paragraphs.appendChild(para);
    }
}