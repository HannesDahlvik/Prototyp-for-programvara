let pizzaPrice = document.getElementById("pizzaPrice");
let pizzaMaker = document.getElementById("pizzaMaker");

// Prices

let price = 0;

let mediumSize = document.getElementById("medium");
let largeSize = document.getElementById("large");

let pepperoni = document.getElementById("pepperoni");
let onions = document.getElementById("onions");
let pineapple = document.getElementById("pineapple");
let kebab = document.getElementById("kebab");
let extraCheese = document.getElementById("extra-cheese");
let tunaFish = document.getElementById("tuna-fish");

pizzaMaker.addEventListener('change', priceCalc);

function priceCalc() {
    price = 0;

    if (mediumSize.checked === true) {
        price += 6.99;
    }

    if (largeSize.checked === true) {
        price += 8.99;
    }

    if (pepperoni.checked === true) {
        price += 1.5;
    }

    if (onions.checked === true) {
        price += 2;
    }

    if (pineapple.checked === true) {
        price += 2;
    }

    if (kebab.checked === true) {
        price += 3;
    }

    if (extraCheese.checked === true) {
        price += 1;
    }

    if (tunaFish.checked === true) {
        price += 1.5;
    }

    price = Math.round(price * 100) / 100;
    pizzaPrice.innerHTML = ("Pizza price: " + price + '€');
}

pizzaPrice.innerHTML = ("Pizza price: " + price + '€');