const baseurl = "http://localhost:51131/api/events";

function haeLista(callback) {
    fetch(baseurl)
        .then(function (response) {
            if (!response.ok) {
                const errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "Listanhaku"
                };
                throw errviesti;
            }
            return response.json()
        })
        .then(function (lista) {
            callback(lista);
        });
}

export function luoEvent(event, callback) {
    return fetch(baseurl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(event)
        })
        .then(function (response) {
            callback(response.status);
        });
}

function poistaEvent(id) {
    return fetch(baseurl+"/"+id, {
        method: 'DELETE',
    });
}

export {haeLista, poistaEvent}