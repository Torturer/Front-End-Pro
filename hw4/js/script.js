// debugger;
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
    debugger;
    do {
        text = prompt(`Choose type of transformation for type text: uppercase || lowercase || capitalize`, `capitalize`)
    } while (!text && !text.includes(`uppercase`) && !text.includes(`lowercase`) && !text.includes(`capitalize`))
    switch (text) {
        case `uppercase`:
            object.toUpperCase();
            break;
        case `lowercase`:
            object.toLowerCase();
            break;
        case `capitalize`:
            object = object[0].toUpperCase() + object.slice(1).toLowerCase();
    }
    return object;
}