// Conversion

let convertFahrToCelsius = (F) => {
    if(Array.isArray(F)) {
        return console.error(`[${F}] is not a valid number but an array.`);
    } else if (F instanceof Object) {
        console.error(`${JSON.stringify(F)} is not a valid number but an object.`);
    } else if (typeof F === "string" && isNaN(Number(F))) {
        return console.error(`${F} is not a valid number but a string.`);
    } else {
        let C = (F-32) * 5/9;
        C = C.toFixed(4);
        console.log(`The value of ${F} degrees Fahrenheit in Celsius is ${C}.`);
    }
}

let k = "57";
let m = "28k"
let n = [3, 5, 90];
let p = {id: "34"}
convertFahrToCelsius(k);
convertFahrToCelsius(m);
convertFahrToCelsius(n);
convertFahrToCelsius(p);
