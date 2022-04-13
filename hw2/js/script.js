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

        // console.log(`first text part one ${firstTextPartOne}`)
        // console.log(`first text part two ${firstTextPartTwo}`)
        // console.log(`second text part one ${secondTextPartOne}`)
        // console.log(`second text part two ${secondTextPartTwo}`)

        return result = firstText + secondText;
    }
    first = text[0].toUpperCase();
    second = text.slice(1).toLowerCase();
    return result = first + second;
}

UserName = prompt(`Please, enter your name`);

if ((UserName == ``) || (UserName == null)) {
    UserName = `Sergy`;
} else UserName = Separator(UserName.trim());

SurName = prompt(`Please, enter your surname`);

if ((SurName == ``) || (SurName == null)) {
    SurName = `Shpora`;
} else SurName = Separator(SurName.trim());

FullName = UserName + ` ` + SurName;

UserMail = prompt(`Please, enter your email adress`);

if ((UserMail == ``) || (UserMail == null)) {
    UserMail = `email not defined`
} else {
    UserMail = UserMail.replaceAll(` `, ``).toLowerCase();
    if (!UserMail.includes(`@`)) {
        UserMail = `not valid email <span class="info-warn">${UserMail}</span> (symbol @ not exist)`;
    } else if (UserMail.startsWith(`@`)) {
        UserMail = `not valid email <span class="info-warn">${UserMail}</span> (symbol @ find in first place)`;
    } else if (UserMail.endsWith(`@`)) {
        UserMail = `not valid email <span class="info-warn">${email}</span> (symbol @ find in last place)`;
    }
}

UserBirthYear = prompt(`Please enter your birthday year`);
if ((UserBirthYear == ``) || (UserBirthYear == null)) {
    UserBirthYear = 1997;
} else {
    UserBirthYear = parseInt(UserBirthYear.replaceAll(` `, ``));
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
