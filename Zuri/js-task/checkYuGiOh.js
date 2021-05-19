// Array Creation

let checkYuGiOh = (num) => {
    if (num instanceof Object || Array.isArray(num)) {
        console.error(`invalid parameter: "${JSON.stringify(num)}"`);
    } else if (isNaN(Number(num))) {
        console.error(`invalid parameter: "${num}"`);
    } else {
        let arria = [];
        for (let i=1; i<=num; i++) {
        arria.push(i);
        }
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
        return newArray;
    }
}

console.log(checkYuGiOh(30)); // number
checkYuGiOh("10"); // string converted to a number
checkYuGiOh("thingy from the other side"); // string not converted to a number
checkYuGiOh([30, "rex"]); // array
checkYuGiOh({id: 34}); // object