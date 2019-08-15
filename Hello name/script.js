let input = document.getElementById("name");
let button = document.getElementById("button");

button.addEventListener("click", onButtonClick);

function onButtonClick() {
    if (input.value == '') {
        alert("Please enter name");
    } else {
        alert("Hello " + input.value);
    }
};