let pizzaPrice = document.getElementById("pizzaPrice");
let pizzaMaker = document.getElementById("pizzaMaker");

// Prices

let price = 0;

let mediumSize = document.getElementById("medium");
let largeSize = document.getElementById("large");

let pepperoniPrice = document.getElementById("pepperoni");
let OnionsPrice = document.getElementById("onions");
let pineapplePrice = document.getElementById("pineapple");
let kebabPrice = document.getElementById("kebab");
let extraCheesePrice = document.getElementById("extra-cheese");

pizzaMaker.addEventListener('change', priceCalc);

function priceCalc() {
    price = 0;

    if (mediumSize.checked === true) {
        price += 7.99;
    }

    if (largeSize.checked === true) {
        price += 9.99;
    }

    if (pepperoniPrice.checked === true) {
        price += 1.5;
    }

    if (OnionsPrice.checked === true) {
        price += 2;
    }

    if (pineapplePrice.checked === true) {
        price += 2;
    }

    if (kebabPrice.checked === true) {
        price += 3;
    }

    if (extraCheesePrice.checked === true) {
        price += 1;
    }

    price = Math.round(price * 100) / 100;
    pizzaPrice.innerHTML = ("Pizza price: " + price + '€');
}

pizzaPrice.innerHTML = ("Pizza price: " + price + '€');