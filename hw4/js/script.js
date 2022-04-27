if (confirm(`Tell me three most important words 💚`)) {
    wordOne = ValidWork(Processor(1));
    wordTwo = ValidWork(Processor(2));
    wordThree = ValidWork(Processor(3));
    console.log(`${wordOne}` + ` ${wordTwo}` + ` ${wordThree}!`)
}

//functions 
function Processor(index) {
    do {
        text = prompt(`Enter word #${index}`);
    } while (!text || text.replace(/[^0-9]/g, '').length !== 0)
    return text.trim();
}

function ValidWork(object) {
    // debugger;
    do {
        type = prompt(`Choose type of transformation for type text: uppercase - 1 || lowercase - 2 || capitalize - 3`, `3`)
    } while (!type || type.length > 1 || !Test(type))
    switch (type) {
        case `1`:
            object.toUpperCase();
            break;
        case `2`:
            object.toLowerCase();
            break;
        case `3`:
            object = object[0].toUpperCase() + object.slice(1).toLowerCase();
    }
    return object;
}

function Test (number) {
    if(number.includes(`1`) || number.includes(`2`) || number.includes(`3`)) return true;
    else return false;
}