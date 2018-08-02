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
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    })
=======
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(event)
        })
>>>>>>> a00ea413918356816d4d97657d3c6f765dd2577f
        .then(function (response) {
            callback(response.status);
        });
}

function poistaEvent(id) {
<<<<<<< HEAD
    return fetch(baseurl + "?id=" + id, {
=======
    return fetch(baseurl+"?id="+id, {
>>>>>>> a00ea413918356816d4d97657d3c6f765dd2577f
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
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event)
    })
=======
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(event)
        })
>>>>>>> a00ea413918356816d4d97657d3c6f765dd2577f
        .then(function (response) {
            callback(response.status);
        });
}

function poistaKayttaja(id) {
<<<<<<< HEAD
    return fetch(baseurlUser + "?id=" + id, {
        method: 'DELETE',
    });
}

function haeKayttaja(email, password, cb) {
    console.dir(arguments);
    return fetch(baseurlUser+"?email=" +email, {
=======
    return fetch(baseurlUser+"?id="+id, {
        method: 'DELETE',
    });
}
function haeKayttaja(email, password, callback) {
    return fetch(baseurlUser+"?maili=" +email, {
>>>>>>> a00ea413918356816d4d97657d3c6f765dd2577f
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
        if(olio.pw === password){
            console.log("Täsmää!");
<<<<<<< HEAD
            cb(olio);
        }
        else {
            console.log("Ei täsmää");
        }    
    });
    
}

export { haeTapahtumaLista, haeKayttajaLista, poistaEvent, poistaKayttaja, haeKayttaja }
=======
            callback(olio);
        }
        else {
            console.log("Ei täsmää");
            
        } 

    });
}


export {haeKayttaja, haeTapahtumaLista, haeKayttajaLista, poistaEvent, poistaKayttaja}
>>>>>>> a00ea413918356816d4d97657d3c6f765dd2577f
