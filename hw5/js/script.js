arr = [];

arr.length = FixeSizeArray(EnterNumber(`Pleas enter size array`, 2, 10))
minRandomNumber = FixeRandomNumber(EnterNumber(`Please enter minimal number`, -10, 10));
maxRandomNumber = FixeRandomNumber(EnterNumber(`Please enter maximal number`, minRandomNumber, 50));

for(i=0, sum = 0; i < arr.length; i++){
    arr[i] = Math.floor(Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber);
    sum+= arr[i]
}

console.log (arr);
console.log (sum);

//#region Functions 

function EnterNumber(text, min, max) {
    do {
        variable = +prompt(text + ` "${min}" - "${max}"`)
    } while (!variable || typeof variable != `number` || variable < min || variable > max)
    return variable;
}

function FixeSizeArray(number) {
    if (number < 0) number = Math.abs(number); // никогда не сработает при проверке в строке номер 5, но по условию тз написал)
    if (!Number.isInteger(number)) number = Math.round(number, 0);
    return number;
}

function FixeRandomNumber(number) {
    if (!Number.isInteger(number)) return Math.round(number);
    return number;
}

//#endregion
