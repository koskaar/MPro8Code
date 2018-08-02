import React, { Component } from 'react';
import Tapahtumalista from './Tapahtumalista';
import Tapahtumalomake from "./Tapahtumalomake";
import Kayttajakirjautuminen from './Kayttajakirjautuminen';
import { haeKayttaja, haeTapahtumaLista, haeKayttajaLista, luoEvent, poistaEvent, luoKayttaja, poistaKayttaja } from "../palvelu";
import Kayttajalomake from './Kayttajalomake';
import Kayttajalista from './Kayttajalista';

class Tapahtumakalenteri extends Component {

    state = { eventit: [], userit: [], msg: "Haetaan dataa", email: "", user_id: "", pwAlku: "", pwKayttaja: "", kirjautunut: false };
    componentDidMount() {
        this.haeTapahtumaListaJaPaivita();
        this.haeKayttajaListaJaPaivita();
    }

    haeTapahtumaListaJaPaivita = () => {
        haeTapahtumaLista(function (lista) {
            this.setState({ eventit: lista, msg: null });
        }.bind(this));
    }

    uusiTapahtuma = (uusitapahtuma) => {
        luoEvent(uusitapahtuma, function () {
            this.haeTapahtumaListaJaPaivita();
        }.bind(this));
    }

    poistaTapahtuma = (poistettavanId) => {
        poistaEvent(poistettavanId)
            .then(function (response) {
                // response.status==204?
                this.haeTapahtumaListaJaPaivita();
            }.bind(this));
    }

    haeKayttajaListaJaPaivita = () => {
        haeKayttajaLista(function (lista) {
            this.setState({ userit: lista, msg: null });
        }.bind(this));
    }

    uusiKayttaja = (uusikayttaja) => {
        luoKayttaja(uusikayttaja, function () {
            this.haeKayttajaListaJaPaivita();
        }.bind(this));
    }
    poistaKayttaja = (poistettavanId) => {
        poistaKayttaja(poistettavanId)
            .then(function (response) {
                // response.status==204?
                this.haeKayttajaListaJaPaivita();
            }.bind(this));
    }


    kirjaudu = (email, password) => {
        this.setState({ pwAlku: password })
        // haeKayttaja saa callback-funktion "function(kt)"
        // jonka avulla haeKayttaja voi palauttaa haetun
        // käyttäjän.
        haeKayttaja(email, password, function (kt) {
            this.setState({ email: kt.email, user_id: kt.user_id, pwKayttaja: kt.pw, kirjautunut: true })
            console.dir(this.state.email);
        }.bind(this));

    }
    kirjauduUlos = () => {
        this.setState({ kirjautunut: false });
    }

    render() {

        let varoitus;


        // Tarkastetaan, täsmäävätkö salasanat ja renderöidään
        // sen mukaisesti
        if (this.state.pwAlku !== this.state.pwKayttaja) {
            varoitus = <p>Salasanat eivät täsmää</p>
        }
        else if (this.state.pwAlku === this.state.pwKayttaja) {
            varoitus = <p></p>
        }

        console.log(this.state.kirjautunut);

        // Tarkastetaan, onko käyttäjä kirjautunut sisään vai ei
        // ja renderöidään sen mukaisesti 
        if (this.state.kirjautunut === false) {
            return (
                <div className="Tapahtumakalenteri">

                    <Tapahtumalista tapahtumat={this.state.eventit} onkoKirjautunut={this.state.kirjautunut} />
                    <Kayttajakirjautuminen kirjaudu={this.kirjaudu} />
                    {varoitus}
                    <Kayttajalomake lisaaKayttaja={this.uusiKayttaja} />
                    {/* <Kayttajalista kayttajat={this.state.userit} poisto={this.poistaKayttaja} /> */}
                </div>
            );
        }
        else {
            return (
                <div className="Tapahtumakalenteri">
                    <center>
                    <Tapahtumalomake lisaaTapahtuma={this.uusiTapahtuma} user_id={this.state.user_id} />
                    <Tapahtumalista tapahtumat={this.state.eventit} poisto={this.poistaTapahtuma} onkoKirjautunut={this.state.kirjautunut} />
                    <button onClick={() => this.kirjauduUlos()}>Kirjaudu ulos</button>
                    <Kayttajalomake lisaaKayttaja={this.uusiKayttaja} />
                    {/* <Kayttajalista kayttajat={this.state.userit} poisto={this.poistaKayttaja} /> */}
                    </center>
                </div>
            );
        }
    }
}

export default Tapahtumakalenteri;