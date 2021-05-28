// Array Creation

let result = document.getElementById("result");
let myForm = document.getElementById("myForm");
let inputText = document.getElementById("inputText");

let checkYuGiOh = (num) => {
    if (num instanceof Object || Array.isArray(num)) {
        result.innerText = `invalid parameter: "${JSON.stringify(num)}"`;
    } else if (isNaN(Number(num))) {
        result.innerText = `invalid parameter: "${num}"`;
    } else {
        let arria = [];
        for (let i=1; i<=num; i++) {
            arria.push(i);
        }
        console.log(arria);
        let newArray = arria.map(arr => {
            if(arr % 2 === 0 && arr % 3 === 0 && arr % 5 === 0) {
                return "yu-gi-oh";
            } else if (arr % 2 === 0 && arr % 3 === 0) {
                return "yu-gi";
            } else if (arr % 2 === 0 && arr % 5 === 0) {
                return "yu-oh";
            } else if (arr % 3 === 0 &&  arr % 5 === 0) {
                return "gi-oh";
            } else if (arr % 5 === 0) {
                return "oh";
            } else if (arr % 3 === 0) {
                return "gi";
            } else if (arr % 2 === 0) {
                return "yu";
            }
            return arr;
        })
        result.innerText = `[${newArray}]`;
        console.log(newArray);
    }
}



myForm.onsubmit = (e) => {
    e.preventDefault();
    console.log("submission attempted");
    checkYuGiOh(inputText.value);
}