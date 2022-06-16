//#region HW arguments

animals = [
    ['🐭', 'mouse', 'Jerry'],
    ['🐹', 'hamster', 'Biscuit'],
    ['🐰', 'rabbit', 'Bugs'],
    ['🦊', 'fox', 'Mrs. Fox'],
    ['🐻', 'bear', 'Paddington']
];

food = [
    ['🍎', 'apple', 10],
    ['🍐', 'pear', 12],
    ['🍊', 'tangerine', 15],
    ['🍋', 'lemon', 5],
    ['🍌', 'banana', 7]
];

universes = [
    ['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
    ['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

//#endregion

document.write(`
    ${arrTransform(animals, `Animals`)}
    ${arrTransform(food, `Food`)}
    ${arrTransform(universes, `Universes`)}
`)

//#region Function

function arrTransform(arr, name) {
    let newArr = [];
    newArr.push(`<table>
    <caption>${name} info</caption>
    <tbody>
    <tr>`);
    for (i = 0; i < arr.length; i++) {
        newArr.push(`
        <tr>`);
        if (Array.isArray(arr[i])) {
            let copyArr = arr[i]
            for (a = 0; a < copyArr.length; a++) {
                newArr.push(`<td>
                ${Array.isArray(copyArr[a]) ? copyArr[a].join(`; `) : copyArr[a]}
                </td>`)
            }
            newArr.push(`
            </tr>`);
        }
    }
    newArr.push(`</tr></tbody>
    </table>
    `)
    return newArr.join(``);
}

//#endregion