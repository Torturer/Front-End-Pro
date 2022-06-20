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
        if (Array.isArray(newCurrentItem)) {
        } else if (typeof newCurrentItem === `number`) {
            if (typeof seasonFunc === `function`) {
                sum += seasonFunc(newCurrentItem);
            } else {
                sum += newCurrentItem;
            }
        }
    }
    return sum
}

function copyArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newCurrentItem = arr[i];
        if (Array.isArray(newCurrentItem)) {
            newArr.push(getPrice(newCurrentItem));
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