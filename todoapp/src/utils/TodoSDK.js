import fetchJsonp from 'fetch-jsonp';


const APIEndPoint = 'http://localhost:5000/api'

// simple and general fetch data api function (* is the default)
const requestData = (requestType=``, url = ``, data = {}) => {

    return fetch(url, {
        method: requestType,              // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',                     // no-cors, cors, *same-origin
        cache: 'no-cache',                // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',       // include, same-origin, *omit
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        redirect: 'follow',               // manual, *follow, error
        referrer: 'no-referrer',          // no-referrer, *client
        body: JSON.stringify(data), 
    })
    .then(response => response.json())    // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
};

export async function getAllTodoPromise(){

    let response = await fetch(APIEndPoint)
    let data = await response.json()
    return data
}

export async function createTodoPromise(content){

    const data = {
        content : content,
        complete : false
    }

    return await requestData('POST', APIEndPoint, data)
}

export async function deleteTodoPromise(id){

    const data = {
        id : id
    }

    return await requestData('DELETE', APIEndPoint, data)
}

export async function completeTodoPromise(id){

    const data = {
        id : id,
        complete : true
    }

    return await requestData('PUT', APIEndPoint, data)
}

window.createTodoPromise = createTodoPromise;
window.getAllTodoPromise = getAllTodoPromise;
window.deleteTodoPromise = deleteTodoPromise;
window.completeTodoPromise = completeTodoPromise;