let result = document.querySelector("#results");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let heightVal = parseInt(height.value);
    let weightVal = parseInt(weight.value);

    if (isNaN(heightVal) || heightVal <= 0) {
        result.innerHTML = "Invalid height";
    } else if (isNaN(weightVal) || weightVal <= 0) {
        result.innerHTML = "Invalid weight";
    } else {
        let bmi = weightVal / ((heightVal / 100) ** 2); // Convert height from cm to meters
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
    }
});
