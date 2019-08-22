let form = document.getElementById("form");
let name = document.getElementById("name");
let age = document.getElementById("age");
let result = document.getElementById("result");

form.addEventListener('submit', adultOrNot);

function adultOrNot(event) {
    event.preventDefault();

    if (age.value <= 18) {
        result.innerHTML = ("Hello " + name.value + " you are not an adult");
    } else {
        result.innerHTML = ("Hello " + name.value + " you are an adult");
    }
}