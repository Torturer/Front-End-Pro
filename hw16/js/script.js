const menu = [
    {
        tab: 'Платежі',
        title: 'Ну де ще ви бачили безкоштовні перекази?',
        description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
        icon: 'payment',
        first: true
    },
    {
        tab: 'Виписка',
        title: 'Усі ваші витрати на кінчиках пальців',
        description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
        icon: 'extract',
        first: false

    },
    {
        tab: 'Налаштування картки',
        title: 'Забудьте все, що ви знали про банкінг',
        description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
        icon: 'settings',
        first: false

    }
];

const body = document.querySelector(`body`);

let tabLink = document.createElement(`div`);
tabLink.classList.add(`tab-panel`);

menu.forEach(obj => {
    let temp = document.createElement(`div`);
    obj.first ? temp.classList.add(`tab-link`, `active`, `fix`) : temp.classList.add(`tab-link`);
    temp.setAttribute(`data-tabKey`, obj.tab);
    temp.innerHTML = obj.tab;

    temp.addEventListener(`click`, e => {
        let tabsLink = document.querySelectorAll(`.tab-link`)
        let tabsInformation = document.querySelectorAll(`.tab-info`)

        tabsLink.forEach(a => {
            a.classList.remove(`fix`, `active`)
        })
        tabsInformation.forEach(tab => {
            if (tab.getAttribute(`data-tabKey`) === e.target.getAttribute(`data-tabKey`)) {
                tab.classList.add(`active`);
            } else { tab.classList.remove(`active`) }
        })

        e.target.classList.add(`fix`, `active`)
    })

    temp.addEventListener(`mouseover`, e => { !e.target.classList.contains(`fix`) && e.target.classList.add(`active`) })
    temp.addEventListener(`mouseout`, e => { !e.target.classList.contains(`fix`) && e.target.classList.remove(`active`) })

    tabLink.append(temp);
})
body.append(tabLink);

menu.forEach(obj => {
    let tabInfo = document.createElement(`div`);
    obj.first ? tabInfo.classList.add(`tab-info`, `active`) : tabInfo.classList.add(`tab-info`);
    tabInfo.setAttribute(`data-tabKey`, obj.tab);
    tabInfo.innerHTML = `<img src="img/phone-${obj.icon}.jpg" alt="${obj.title}">
                        <div class="tab-info-view">
                            <img src="img/${obj.icon}.png" alt="icon">
                            <div class="tittle">${obj.title}</div>
                            <div class="description">${obj.description}</div>
                        </div>`
    body.append(tabInfo);
})