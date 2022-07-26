const API = `https://61c9d37520ac1c0017ed8eac.mockapi.io/heroes`;
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

const renderComponent = (obj, value) => {
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

const getHero = async () => {
    try {
        heroes = await controller(API)
        heroes.forEach(element => renderComponent(element))
    } catch (x) { }
}

const removeHero = async (id) => {
    try {
        await controller(API + `/${id}`, `DELETE`)
        document.querySelector(`tr[data-id="${id}"]`).remove()
    } catch (x) { }
}

const setFavourite = async (id, set) => {
    try {
        let findHero = heroes.find(e => e.id === id)
        findHero.favourite = set
        controller(API + `/${id}`, `PUT`, findHero)
    } catch (x) { }
}

const addHero = async (obj) => {
    try {
        let succesHero = await controller(API, `POST`, obj);
        renderComponent(succesHero);
    } catch (x) { }
}

let form = document.querySelector(`#heroesForm`);
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

getHero()