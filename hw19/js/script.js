
let result = [];

const getFiles = (url, cb) => {
    let xhr = new XMLHttpRequest();

    xhr.open(`GET`, url);
    xhr.send();

    xhr.addEventListener(`readystatechange`, () => {
        if (xhr.readyState === 4 && xhr.status === 200) { 
            let x = JSON.parse(xhr.response);
            x.children.forEach(element => {
                result.push(element)
            });
            cb ? cb(x) : console.log(result); 
        }
    })
}

const dataGet = () => getFiles(`files/data2.json`)

getFiles(`files/data.json`, dataGet);

