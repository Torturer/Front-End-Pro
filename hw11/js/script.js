//#region Functions
String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
}

Array.prototype.renderList = function () {
    return this.map(item => {
        if (typeof item === `object`) {
            let timeArr = [`<li>`];
            for (key in item) {
                timeArr.push(`${key.capitalize()}: ${item[key]}. `);
            }
            timeArr.push(`</li>`);
            return timeArr.join(``);
        }
        return `<li>${item}</li>`
    }).join(``);
}
//#endregion

const flowers = ['🪴', '🌷', '🌾', '🌺'];
const animals = [
    {
        name: 'dog',
        icon: '🐶'
    },
    {
        name: 'cat',
        icon: '🐱'
    },
    {
        name: 'hamster',
        icon: '🐹'
    },
    {
        name: 'rabbit',
        icon: '🐰'
    }
];

document.write(`
<ul>
    ${flowers.renderList()}
</ul><bk>
<ul>
    ${animals.renderList()}
</ul>`)

