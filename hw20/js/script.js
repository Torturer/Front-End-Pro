let userData = {
    'USD': 1000,
    'EUR': 900,
    'UAH': 15000,
    'BIF': 20000,
    'AOA': 100
},
    bankData = {
        'USD': {
            max: 3000,
            min: 100,
            img: '💵'
        },
        'EUR': {
            max: 1000,
            min: 50,
            img: '💶'
        },
        'UAH': {
            max: 0,
            min: 0,
            img: '💴'
        },
        'GBP': {
            max: 10000,
            min: 100,
            img: '💷'
        }
    }

let myPromise = new Promise((resolve, reject) => { confirm(`Посмотреть баланс карты?`) ? resolve(userData) : reject({ userData: userData, bankData: bankData }) })
myPromise
    .then(
        (userData) => {
            let valuteArrName = []
            let valute;

            for (let key in userData) { valuteArrName.push(key) }
            do {
                valute = prompt(`Введите название валюты из доступных на вашей карте: ${valuteArrName.join(`, `)}`)
            } while (!valute || valuteArrName.indexOf(valute) < 0)
            console.log(`Baш баланс на карточке: ${userData[valute]}${valute}`)
        },

        (obj) => {
            let userData = obj.userData,
                bankData = obj.bankData,
                valuteArrName = [],
                valute,
                value

            for (let key in userData) {
                if (bankData[key] && bankData[key].max > 0) valuteArrName.push(key)
            }

            do {
                valute = prompt(`Введите название валюты которая доступна к снятию: ${valuteArrName.join(`, `)}`)
            } while (!valute || valuteArrName.indexOf(valute) < 0)

            do {
                value = prompt(`Введите сумму которую вы хотите снять. Не менее ${bankData[valute].min} ${valute} и не больее чем ${bankData[valute].max} ${valute}`)
            } while (!value);
            if (value > bankData[valute].max || value > userData[valute]) return Promise.reject(`Недопустимая сумма снятия. Максимальная сумма снятия ${bankData[valute].max}${valute}`)
            if (value < bankData[valute].min) return Promise.reject(`Недопустимая сумма снятия. Минимальная сумма снятия ${bankData[valute].min}${valute}`)
            console.log(`Вы успешно сняли ${value}${valute} ${bankData[valute].img}`)
        }
    )

    .catch(error => console.log(error))
    .finally(() => console.log(`Всего доброго`))
