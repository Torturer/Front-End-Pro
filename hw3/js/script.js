bulkaImg = `🍔`;
potatoImg = `🍟`;
sauceImg = `🧂`;
price = 0;
orderPotato = 0;
orderSauce = 0;

// bulka 
bulka = prompt(`Please enter which bun you would like "hamburger" or "cheeseburger"`, `hamburger`);
while (!bulka || !bulka === `hamburger` || !bulka === `cheeseburger`) {
    bulka = prompt(`Please enter exactly either "hamburger" or "cheeseburger"`);
    if (bulka) {
        bulka = bulka.trim().toLowerCase();
    }
}
switch (bulka) {
    case `hamburger`:
        price += 10;
        break;
    case `cheeseburger`:
        price += 15;
        if (confirm(`Would you like double cheese?`)) {
            price += 5;
        }
}

// potato
if (confirm(`Would you like potato?`)) {
    potato = prompt(`Choose potato size: small/middle/big`);
    if (!potato) {
        potato = `small`;
    } else {
        potato = potato.trim().toLowerCase();
    }
    switch (potato) {
        case `middle`:
            price += 15;
            break;
        case `big`:
            price += 20;
            break;
        default:
            price += 10
    }
    orderPotato = 1;
}

// sauce
if (confirm(`Would you like sauce?`)) {
    price += 10;
    sauce = prompt(`Choose sauce: ketchup/mayonnaise`);
    !sauce ? sauce = `ketchup` : sauce = sauce.trim().toLowerCase();
    orderSauce = 1;
}

//html code
html = `<h2>Your order:</h2>
<ul>
    <li>Bulka ${bulkaImg}: ${bulka} </li>`;
if (orderPotato > 0) {
    html = html + `
    <li>Potato ${potatoImg}: ${potato} </li>
    `
}
if (orderSauce > 0) {
    html = html + `
    <li>Sauce ${sauceImg}: ${sauce} </li>
    `
}
html = html + `
</ul>

<p>Price: $${price} </p>
`;

document.write(html);





