//#region  HW10 arguments
var users = [
    ["john", "red", 5, ["ball", "book", "pen"]],
    ["becky", "blue", 10, ["tape", "backpack", "pen"]],
    ["susy", "red", 55, ["ball", "eraser", "pen"]],
    ["tyson", "green", 1, ["book", "pen"]],
];
//#endregion

//#region HW Body 
let score = 0;
let firstArr = [];
users
    .forEach(function (item) {
        firstArr.push(item[0] + `!`);
    })
let secondArr = users
    .map(function (item) {
        return item[0] + `?`
    })

let table = users
    .filter(item => { return item[1] === `red` })
    .map(user => {
        score += user[2]
        return `<tr>${user
            .map(item => `<td>${Array.isArray(item) ? item.join(`; `) : item}</td>`).join(``)}</tr>`
    }).join(``)


//#endregion

document.write(`
<table border="1">
<thead>
    <tr>
        <th>Name</th>
        <th>Comand</th>
        <th>Score</th>
        <th>Data</th>
    </tr>
</thead>
<tbody>
${table}
</tbody>
<tfoot>
    <tr>
        <td colspan="4">Total score: ${score}</td>
    </tr>
</tfoot>
</table> 
`)