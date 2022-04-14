// User profile

function Separator(text) {
    if (text.includes(` `)) {
        indexSpace = text.indexOf(` `);

        firstTextPartOne = text[0].toUpperCase();
        firstTextPartTwo = text.slice(1, (indexSpace+1)).toLowerCase();

        secondTextPartOne = text[indexSpace+1].toUpperCase();
        secondTextPartTwo = text.slice((indexSpace+2)).toLowerCase();

        firstText = firstTextPartOne + firstTextPartTwo;
        secondText = secondTextPartOne + secondTextPartTwo;

        return firstText + secondText;
    }
    first = text[0].toUpperCase();
    second = text.slice(1).toLowerCase();
    return first + second;
}

UserName = prompt(`Please, enter your name`);
if (!UserName) {
    UserName = `Sergy`;
} else UserName = Separator(UserName.trim());

SurName = prompt(`Please, enter your surname`);
if (!SurName) {
    SurName = `Shpora`;
} else SurName = Separator(SurName.trim());

FullName = UserName + ` ` + SurName;

UserMail = prompt(`Please, enter your email adress`);
if (!UserMail) {
    UserMail = `email not defined`
} else {
    UserMail = UserMail.replaceAll(` `, ``).toLowerCase();
    if (!UserMail.includes(`@`)) {
        UserMail = `not valid email <span class="info-warn">${UserMail}</span> (symbol @ not exist)`;
    } else if (UserMail.startsWith(`@`)) {
        UserMail = `not valid email <span class="info-warn">${UserMail}</span> (symbol @ find in first place)`;
    } else if (UserMail.endsWith(`@`)) {
        UserMail = `not valid email <span class="info-warn">${UserMail}</span> (symbol @ find in last place)`;
    }
}

UserBirthYear = prompt(`Please enter your birthday year`);
if (!UserBirthYear) {
    UserBirthYear = 1997;
} else {
    UserBirthYear = parseInt(UserBirthYear.replaceAll(` `, ``));
    if (isNaN(UserBirthYear)) {
        UserBirthYear = 1997;
    }
}
UserAge = new Date().getFullYear() - UserBirthYear;

document.write(`

<section class="main">
<div class="container">
    <ul>
        <li>Full name: <span class="info">${FullName}</span></li>
        <li>Email: <span class="info">${UserMail}</span></li>
        <li>Age: <span class="info">${UserAge}</span></li>
    </ul>
</div>
</section>

`)
