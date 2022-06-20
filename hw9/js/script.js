//#region HW9 Arguments
const products = [
    ['apple', 10],
    ['banana', 8],
    ['mango', 20],
    ['grape', 18]
]
//#endregion

//#region Home body
console.log(getPrice(products, summerValue));
console.log(getPrice(products, winterValue));
console.log(getPrice(products));
//#endregion

//#region Functions
function getPrice(arr, seasonFunc) {
    let newArr = copyArr(arr);
    let sum = 0;
    for (let i = 0; i < newArr.length; i++) {
        let newCurrentItem = newArr[i];
        for (let a = 0; a < newCurrentItem.length; a++) {
            if (newCurrentItem.indexOf(newCurrentItem[a]) === 1) { typeof seasonFunc === `function` ? sum += seasonFunc(newCurrentItem[a]) : sum += newCurrentItem[a]; }
        }
    }
    return sum
}

function copyArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newCurrentItem = arr[i];
        if (Array.isArray(newCurrentItem)) {
            newArr.push(copyArr(newCurrentItem));
        } else { newArr.push(newCurrentItem); }
    }
    return newArr
}

function summerValue(value) {
    return value * 0.8;
}

function winterValue(value) {
    return value * 2;
}
//#endregion