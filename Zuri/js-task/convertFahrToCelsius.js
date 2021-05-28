// Conversion
let temp = document.getElementById("temp");
let formTemp = document.getElementById("form-temp");
let res = document.getElementById("res");

let convertFahrToCelsius = (F) => {
    if(Array.isArray(F)) {
        res.innerText = `[${F}] is not a valid number but an array.`;
    } else if (F instanceof Object) {
        res.innerText  = `${JSON.stringify(F)} is not a valid number but an object.`;
    } else if (typeof F === "string" && isNaN(Number(F))) {
        res.innerText = `"${F}" is not a valid number but a string.`;
    } else {
        let C = (F-32) * 5/9;
        C = C.toFixed(4);
        res.innerText = `The value of ${F} degrees Fahrenheit in Celsius is ${C}.`;
    }
}

formTemp.addEventListener('submit', (e) => {
    e.preventDefault();
    convertFahrToCelsius(temp.value);
    console.log(typeof temp.value);
});
