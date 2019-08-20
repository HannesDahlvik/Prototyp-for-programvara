let myButton = document.getElementById("button");
let myText = "Hello World";

myButton.addEventListener('click', onButtonClick);

function onButtonClick() {
    alert(myText);
}