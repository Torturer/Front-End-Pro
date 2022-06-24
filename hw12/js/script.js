String.prototype.capitalize = function () {
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
}

function Constructor(seasonObj, typeObj) {
    this.seasonKoef = seasonObj;
    this.type = typeObj;
    this.__proto__ = Product;
}

function makePrototype(arr, objectProto) {
    return arr.map(item => {
        item.__proto__ = objectProto;
        return item;
    })
}

function renderList(arr) {
    return arr.map(item => {
        return `<li>${item.getInfo()}</li>`
    }).join(``)
}

//#region HW arguments
const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];
//#endregion

let Product = {
    getPrice: function () {
        return this.season ? this.price * this.seasonKoef : this.price
    },
    getInfo: function () {
        return `Product: ${this.icon} ${this.name}. Type: ${this.type}. Price: $${this.getPrice()}.`
    }
};

let Vegetable = new Constructor(1.3, `Vegetable`);
let Fruit = new Constructor(2, `Fruit`);

let newArrVegatebels = makePrototype(vegetables, Vegetable);
let newArrFruit = makePrototype(fruits, Fruit);

document.write(`
<ul>
${renderList(newArrFruit)}
</ul>
<ul>
${renderList(newArrVegatebels)}
</ul>
`)