const body = document.querySelector(`body`);
const square = document.createElement(`div`);

square.style.width = `100px`;
square.style.height = `100px`;
square.style.backgroundColor = `black`;
square.style.position = `relative`;
square.style.top = `150px`;
square.style.left = `150px`;
square.style.transition = `0.05s`


const tempPX = (obj, value) => {
    return parseInt(obj) + value + `px`
}

const KEY_CODE = {
    38: () => { parseInt(square.style.top) > 10 ? square.style.top = tempPX(square.style.top, -10) : square.style.top = tempPX(square.style.top, 20) },
    40: () => { parseInt(square.style.top) < window.innerHeight-120 ? square.style.top = tempPX(square.style.top, 10) : square.style.top = tempPX(square.style.top, -20) },
    37: () => { parseInt(square.style.left) > 10 ? square.style.left = tempPX(square.style.left, -10) : square.style.left = tempPX(square.style.left, 20) },
    39: () => { parseInt(square.style.left) < window.innerWidth-120 ? square.style.left = tempPX(square.style.left, 10) : square.style.left = tempPX(square.style.left, -20) }
}

document.addEventListener(`keydown`, e => { KEY_CODE[`${e.keyCode}`] && KEY_CODE[`${e.keyCode}`]() })

body.append(square)