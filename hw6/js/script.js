hero = ['Ivan'];
native = ['York', 'Of'];
destination = ['Poltava', 'In'];


rainbow = hero.concat(native, destination).reverse();
rainbow.splice(0, 2, `Richard`)
rainbow.splice(3, 6, `Gave`, `Battle`)
rainbow.push(`In`, `Vain`);

document.write(`
<section class="main">
<div class="container">
`)

for(i = 0; i < rainbow.length; i++) {
    document.write(`
        <div class="box">
            <div class="box-bullet" style="background-color: ${RandomRGB()}"></div>
            <div class="box-text">${rainbow[i]}</div>
        </div>
`)
}

document.write(`
</div>
</section>
`)

//#region Functions

function RandomRGB() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

//#endregion