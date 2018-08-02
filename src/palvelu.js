const baseurl = "http://localhost:51131/api/events";
const baseurlUser = "http://localhost:51131/api/users"

function haeTapahtumaLista(callback) {
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    })

        .then(function (response) {
            callback(response.status);
        });
}

function poistaEvent(id) {
    return fetch(baseurl + "?id=" + id, {
        method: 'DELETE',
    });
}

function haeKayttajaLista(callback) {
    fetch(baseurlUser)
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

export function luoKayttaja(event, callback) {
    return fetch(baseurlUser, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    })
        .then(function (response) {
            callback(response.status);
        });
}

function poistaKayttaja(id) {
    return fetch(baseurlUser + "?id=" + id, {
        method: 'DELETE',
    });
}

function haeKayttaja(email, password, cb) {
    console.dir(arguments);
    return fetch(baseurlUser + "?email=" + email, {
        method: 'GET',
    })
        .then(function (response) {
            if (!response.ok) {
                const errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "Käyttäjän haku"
                };
                throw errviesti;
            }
            return response.json()
        })
        .then(function (olio) {
            if (olio.pw === password) {
                console.log("Täsmää!");
                cb(olio);
            }
            else {
                console.log("Ei täsmää");
            }
        });

}

export { haeTapahtumaLista, haeKayttajaLista, poistaEvent, poistaKayttaja, haeKayttaja }

