const form = document.querySelector("form")
// this usecase value will give you empty value
// const height = parseInt(document.querySelector("#height").value)


form.addEventListener("submit", function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const bmiRes = document.querySelector("#bmiRes")

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // show the result
        results.innerHTML = `<span>${bmi}</span>`
        if (results.textContent < 18.6) {
            bmiRes.innerHTML = `<span>You are underweight as your BMI is ${bmi}</span>`
        } else if (results.textContent >= 18.6 && bmi < 24.9) {
            bmiRes.innerHTML = `<span>You are healthy as your BMI is ${bmi}</span>`
        } else {
            bmiRes.innerHTML = `<span>You are overweight as your BMI is ${bmi}</span>`
        }
    }

})