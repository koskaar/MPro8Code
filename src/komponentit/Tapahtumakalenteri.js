import React, {Component} from 'react';
import Tapahtumalista from './Tapahtumalista';
import Tapahtumalomake from "./Tapahtumalomake";
import Kayttajakirjautuminen from './Kayttajakirjautuminen';
import {haeTapahtumaLista, haeKayttajaLista, luoEvent, poistaEvent, luoKayttaja, poistaKayttaja} from "../palvelu";
import Kayttajalomake from './Kayttajalomake';
import Kayttajalista from './Kayttajalista';


class Tapahtumakalenteri extends Component {
    // state = {eventit: [], msg: "Haetaan dataa"} Toiminnallisuus ennen kayttajan lisäystä
    // componentDidMount() {
    //     this.haeListaJaPaivita();
    // }
    // haeListaJaPaivita = () => {
    //     haeLista(function (lista) {
    //         this.setState({eventit: lista, msg: null});
    //     }.bind(this));
    // }
    // uusiTapahtuma = (uusitapahtuma) => {
    //     luoEvent(uusitapahtuma, function () {
    //         this.haeListaJaPaivita();
    //     }.bind(this));
    // }
    // poistaTapahtuma = (poistettavanId) => {
    //     poistaEvent(poistettavanId)
    //         .then(function (response) {
    //             // response.status==204?
    //             this.haeListaJaPaivita();
    //         }.bind(this));
    // }
    state = {eventit: [], userit: [], msg: "Haetaan dataa"} 
    componentDidMount() {
        this.haeTapahtumaListaJaPaivita();
        this.haeKayttajaListaJaPaivita();
    }
    haeTapahtumaListaJaPaivita = () => {
        haeTapahtumaLista(function (lista) {
            this.setState({eventit: lista, msg: null});
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
            this.setState({userit: lista, msg: null});
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


    render() {
        return (
            <div>
                
                <div className="borderlegend">Tapahtumakalenteri</div>
                <div className="tapahtumakalenteri">
                    <Tapahtumalomake lisaaTapahtuma={this.uusiTapahtuma}/>
                    <Tapahtumalista tapahtumat={this.state.eventit} poisto={this.poistaTapahtuma}/></div>
                    <Kayttajakirjautuminen/>
                    <Kayttajalista kayttajat={this.state.userit} poisto={this.poistaKayttaja}/>
                    <Kayttajalomake lisaaKayttaja={this.uusiKayttaja}/>
                   
                    </div>
            );
    }
}

export default Tapahtumakalenteri;