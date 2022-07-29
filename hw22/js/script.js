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

const API_PARTICIPANTS = `https://62e158fee8ad6b66d847eddd.mockapi.io/participants`,
    API_TASKS = `https://62e158fee8ad6b66d847eddd.mockapi.io/tasks`

const formSelect = document.querySelector(`#taskParticipants`),
    createTaskForm = document.querySelector(`#createTask`),
    formTaskTittle = document.querySelector(`#taskTitle`)

const renderParticipants = async () => {
    try {
        let participants = await controller(API_PARTICIPANTS);
        participants.forEach(element => {
            let option = document.createElement(`option`);
            option.value = element.id;
            option.innerHTML = element.name;
            if (element.task) option.disabled = `true`
            formSelect.append(option)
        });
    } catch (err) { console.log(err) }
}

createTaskForm.addEventListener(`submit`, async e => {
    e.preventDefault();

    try {
        let options = [...formSelect.selectedOptions]
        let participants = options.map(option => {
            return { name: option.innerHTML, id: option.value }
        })
        let result = {
            title: formTaskTittle.value,
            participants: participants,
            status: 0
        }

        let addPost = await controller(API_TASKS, `POST`, result)
        new ToDo(addPost).render()

        await Promise
            .all(
                addPost.participants.map(e => controller(API_PARTICIPANTS + `/${e.id}`, `PUT`, { task: true }))
            )

        options.forEach(option => option.disabled = true)
        createTaskForm.reset()
    } catch (x) { console.log(x) }
})

class Task {
    constructor(task) {
        Object.assign(this, task)
    }

    createItem() {
        let card = document.createElement(`div`);
        card.classList.add(`card`);
        card.setAttribute(`data-id`, this.id)
        card.innerHTML = `<h3>${this.title}</h3>
                          <p>Participants: ${this.participants.map(item => item.name).join(`, `)}</p>`
        return card
    }
}

class ToDo extends Task {
    constructor(task) {
        super(task)
    }

    render() {
        let card = super.createItem();
        let toDo = document.querySelector(`#ToDo`);
        let button = document.createElement(`button`);
        button.innerHTML = `Start Doing`;
        card.append(button)

        button.addEventListener(`click`, async e => {
            try {
                e.target.disabled = true
                let id = e.target.parentElement.getAttribute(`data-id`);

                let obj = await controller(API_TASKS + `/${id}`)
                obj.status++;
                let succesTaskPut = await controller(API_TASKS + `/${id}`, `PUT`, obj);
                new InProgress(succesTaskPut).render();
                e.target.parentElement.remove();

            } catch (x) { console.log(x) }
        })
        toDo.append(card)
    }
}

class InProgress extends Task {
    constructor(task) {
        super(task)
    }

    render() {
        let card = super.createItem();
        let toDo = document.querySelector(`#InProgress`);
        let button = document.createElement(`button`);
        button.innerHTML = `Need testing`;
        card.append(button)

        button.addEventListener(`click`, async e => {
            try {
                e.target.disabled = true

                let id = e.target.parentElement.getAttribute(`data-id`);

                let obj = await controller(API_TASKS + `/${id}`)
                obj.status++;
                let succesTaskPut = await controller(API_TASKS + `/${id}`, `PUT`, obj);
                new NeedTesting(succesTaskPut).render();
                e.target.parentElement.remove();

            } catch (x) { console.log(x) }
        })
        toDo.append(card)
    }
}

class NeedTesting extends Task {
    constructor(task) {
        super(task)
    }

    render() {
        let card = super.createItem();
        let toDo = document.querySelector(`#NeedTesting`);
        let button = document.createElement(`button`);
        button.innerHTML = `Start testing`;
        card.append(button)

        button.addEventListener(`click`, async e => {
            try {
                e.target.disabled = true
                let id = e.target.parentElement.getAttribute(`data-id`);

                let obj = await controller(API_TASKS + `/${id}`)
                obj.status++;
                let succesTaskPut = await controller(API_TASKS + `/${id}`, `PUT`, obj);
                new Testing(succesTaskPut).render();
                e.target.parentElement.remove();

            } catch (x) { console.log(x) }
        })
        toDo.append(card)
    }
}

class Testing extends Task {
    constructor(task) {
        super(task)
    }

    render() {
        let card = super.createItem();
        let toDo = document.querySelector(`#Testing`);
        let reopenButton = document.createElement(`button`);
        let doneButton = document.createElement(`button`);
        reopenButton.innerHTML = `Reopen`;
        doneButton.innerHTML = `Done`;

        card.append(reopenButton);
        card.append(doneButton);

        reopenButton.addEventListener(`click`, async e => {
            try {
                let id = e.target.parentElement.getAttribute(`data-id`);
                e.target.parentElement.querySelectorAll(`button`)
                    .forEach(button => button.disabled = true)

                let obj = await controller(API_TASKS + `/${id}`)
                obj.status++;
                let succesTaskPut = await controller(API_TASKS + `/${id}`, `PUT`, obj);
                new Reopened(succesTaskPut).render();
                e.target.parentElement.remove();

            } catch (x) { console.log(x) }
        })
        doneButton.addEventListener(`click`, async e => {
            try {
                let id = e.target.parentElement.getAttribute(`data-id`);
                e.target.parentElement.querySelectorAll(`button`)
                .forEach(button => button.disabled = true)


                let obj = await controller(API_TASKS + `/${id}`)
                obj.status += 2;
                let succesTaskPut = await controller(API_TASKS + `/${id}`, `PUT`, obj);
                new Done(succesTaskPut).render();
                e.target.parentElement.remove();

                let result = await Promise.all(
                    this.participants
                        .map(participant => controller(API_PARTICIPANTS + `/${participant.id}`, `PUT`, { task: false }))
                )
                result.forEach(elem => {
                    let option = document.querySelector(`option[value="${elem.id}"]`)

                    option.disabled = false
                })
            } catch (x) { console.log(x) }
        })
        toDo.append(card)
    }
}

class Reopened extends Task {
    constructor(task) {
        super(task)
    }

    render() {
        let card = super.createItem();
        let toDo = document.querySelector(`#Reopened`);
        let button = document.createElement(`button`);
        button.innerHTML = `Restart`;
        card.append(button)

        button.addEventListener(`click`, async e => {
            try {
                e.target.disabled = true
                let id = e.target.parentElement.getAttribute(`data-id`);

                let obj = await controller(API_TASKS + `/${id}`)
                obj.status = 0;
                let succesTaskPut = await controller(API_TASKS + `/${id}`, `PUT`, obj);
                new ToDo(succesTaskPut).render();
                e.target.parentElement.remove();

            } catch (x) { console.log(x) }
        })
        toDo.append(card)
    }
}

class Done extends Task {
    constructor(task) {
        super(task)
    }

    render() {
        let card = super.createItem();
        let toDo = document.querySelector(`#Done`);
        toDo.append(card)
    }
}



const renderTask = async () => {
    try {
        let tasks = await controller(API_TASKS);
        tasks.forEach(task => goTask(task))
    } catch (x) { console.log(x) }
}

const goTask = (task) => {
    switch (task.status) {
        case 0:
            new ToDo(task).render();
            break;
        case 1:
            new InProgress(task).render();
            break;
        case 2:
            new NeedTesting(task).render();
            break;
        case 3:
            new Testing(task).render();
            break;
        case 4:
            new Reopened(task).render();
            break;
        case 5:
            new Done(task).render()
    }
}

renderTask()
renderParticipants()