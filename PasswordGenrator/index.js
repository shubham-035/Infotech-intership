let inputBox = document.querySelector(".input-box");
let rangeInput = document.querySelector("#rangeInput");
const upperCaseEl = document.querySelector("#upperCase");
let numberEl = document.querySelector("#number");
let symbolEl = document.querySelector("#symbol");
let buttonEl = document.querySelector(".button");
let rangeValue = document.querySelector("#rangeValue");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = "!@#$%^&*()/*-+?><|";

rangeInput.addEventListener("input", (e) => {
    rangeValue.textContent = e.target.value;
});

buttonEl.addEventListener("click", () => {
    let length = parseInt(rangeInput.value);
    let password = "";
    let characters = lowerCase; // Always include lowercase

    if (upperCaseEl.checked) {
        characters += upperCase;
    }

    if (numberEl.checked) {
        characters += number;
    }

    if (symbolEl.checked) {
        characters += symbol;
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    inputBox.value = password;
});
