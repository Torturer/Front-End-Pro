const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes`;
const API_UNIVERSE = `https://61c9d37520ac1c0017ed8eac.mockapi.io/universes`;
let heroes;


const controller = async (url, method = `GET`, obj) => {

    let options = {
        method: method,
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    }

    if (obj) options.body = JSON.stringify(obj)

    const respons = await fetch(url, options);

    return respons.ok ? respons.json() : Promise.reject(respons.status);
}

const getUniverses = async () => {
    try {
        let universe = await controller(API_UNIVERSE);
        renderUniverses(universe)
    } catch { }
}


const getHeroes = async () => {
    try {
        heroes = await controller(API)
        heroes.forEach(element => renderComponent(element))
    } catch { }
}

const removeHero = async (id) => {
    try {
        await controller(API + `/${id}`, `DELETE`)
        document.querySelector(`tr[data-id="${id}"]`).remove()
    } catch { }
}

const setFavourite = async (id, set) => {
    try {
        let findHero = heroes.find(e => e.id === id)
        findHero.favourite = set
        controller(API + `/${id}`, `PUT`, findHero)
    } catch { }
}

const checkHero = async (obj) => {
    heroes = await controller(API);
    return heroes.find(x => x.name === obj.name) ? Promise.reject(`Такой персонаж уже существует`) : Promise.resolve()
}

const addHero = async (obj) => {
    try {
        await checkHero(obj);
        let succesHero = await controller(API, `POST`, obj);
        renderComponent(succesHero);
    } catch (err) { console.log(err) }
}

const renderComponent = (obj) => {
    let heroesTable = document.querySelector(`#heroesTable`),
        bodyTable = document.createElement(`tbody`),
        componentTable = document.createElement(`tr`)

    componentTable.setAttribute(`data-id`, obj.id)

    componentTable.innerHTML = `    <td>${obj.name}</td>
                                        <td>${obj.comics}</td>
                                        <td>
                                            <label class="heroFavouriteInput">
                                            Favourite: <input type="checkbox" data-id="${obj.id}" ${obj.favourite ? `checked` : ``}>
                                            </label>
                                        </td>
                                        <td><button data-id="${obj.id}">Delete</button></td>`

    bodyTable.append(componentTable)

    let button = componentTable.querySelector(`button`),
        inputCheckbox = componentTable.querySelector(`input[type="checkbox"]`)

    button.addEventListener(`click`, e => removeHero(e.target.dataset.id))
    inputCheckbox.addEventListener(`change`, e => setFavourite(e.target.dataset.id, e.target.checked))

    heroesTable.append(bodyTable)
}

const renderUniverses = (foo) => {
    let form = document.querySelector(`#heroesForm`),
        heroComics = document.querySelector(`select[data-name="heroComics"]`)

    foo.forEach( item => {
        let optionComics = document.createElement(`option`)
            
        optionComics.value = item.name
        optionComics.innerHTML = item.name
        heroComics.append(optionComics)
    } )

    form.addEventListener(`submit`, e => {
        e.preventDefault();

        let heroName = form.querySelector(`input[data-name="heroName"]`),
            heroComics = form.querySelector(`select[data-name="heroComics"]`),
            heroFavourite = form.querySelector(`input[data-name="heroFavourite"]`)

        let hero = {
            name: heroName.value,
            comics: heroComics.value,
            favourite: heroFavourite.checked
        }

        addHero(hero)
    })
}


getUniverses()
getHeroes()