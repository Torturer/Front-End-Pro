const body = document.querySelector(`body`)
let square = document.createElement(`div`);

square.className = `block`;
body.append(square);

//////

setInterval(() => {
    square.style.background = randomRGB()
}, 500)

setInterval(() => {
    square.style.top = randomPX(window.innerHeight)
    square.style.left = randomPX(window.innerWidth)
    square.style.borderRadius = randomPX(150)
}, 1000)

const randomPX = (temp) => `${Math.floor(Math.random() * (temp-100))}px`

const randomRGB = () => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`