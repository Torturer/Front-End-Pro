sports = [
    ['skier', '⛷'],
    ['snowboarder', '🏂'],
    ['apple', '🍎'],
    ['hockey', '🏒'],
    ['ice skate', '⛸'],
    ['swimmer', '🏊'],
    ['surfer', '🏄‍'],
    ['watermelon', '🍉'],
    ['lemon', '🍋'],
    ['rowboat', '🚣'],
    ['bicyclist', '🚴‍']
];

summer_sports = sports.slice(5);
winter_sports = sports.slice(0, 5);
fruits = summer_sports.splice(2, 2).concat(winter_sports.splice(2, 1));

summer_sports.unshift(`*** Summer Sports ***`);
winter_sports.unshift(`*** Winter Sports ***`);
fruits.unshift(`*** Fruits ***`);

summer_sports.push(``);
winter_sports.push(``);
fruits.push(``)

global = winter_sports.concat(summer_sports, fruits);

for (i = 0; i < global.length; i++) {
    console.log(typeof global[i] === `string` ? global[i] : global[i].join(`: `))
}

//#region Версия альтернативная .. с костылями, но выглядит интересно :) .

// matrix = [[`*** Winter Sports ***`, 0, 1, 3, 4], [`*** Summer Sports ***`, 5, 6, 9, 10], [`*** Fruits ***`, 2, 7, 8]];
// for (a = 0; a < matrix.length; a++) {
//     for (b = 0; b < matrix[a].length; b++) {
//         console.log(typeof matrix[a][b] == `string` ? matrix[a][b] : sports[matrix[a][b]].join(`: `))
//     }
//     console.log(``);
// }

//#endregion