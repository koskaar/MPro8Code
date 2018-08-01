import React, {Component} from 'react';
import Tapahtumalista from './Tapahtumalista';
import Tapahtumalomake from "./Tapahtumalomake";
import Kayttajakirjautuminen from './Kayttajakirjautuminen';
import {haeKayttaja, haeTapahtumaLista, haeKayttajaLista, luoEvent, poistaEvent, luoKayttaja, poistaKayttaja} from "../palvelu";
import Kayttajalomake from './Kayttajalomake';
import Kayttajalista from './Kayttajalista';

<<<<<<< HEAD
    
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
class Tapahtumakalenteri extends Component {
    
    state = {eventit: [], userit: [], msg: "Haetaan dataa"} 
    
=======

class Tapahtumakalenteri extends Component {

    state = {eventit: [], userit: [], passwordAlku: "",email:"", user_id:"", onKirjautunut: false, salasana: ""} 

    componentDidMount() {
        this.haeTapahtumaListaJaPaivita();
        this.haeKayttajaListaJaPaivita();
    }
>>>>>>> 73e8a9bab5ab9e596a83ac410e8ac1b0db1b6cb8
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
<<<<<<< HEAD

    
        componentDidMount() {
            this.haeTapahtumaListaJaPaivita();
            this.haeKayttajaListaJaPaivita();
        }
=======
    kirjaudu = (email, password) => {
        this.setState({passwordAlku: password})
        haeKayttaja(email, password, function(olio) {
            this.setState({email: olio.email, user_id: olio.user_id, onKirjautunut: true, salasana: olio.pw});
            console.log(this.state.user_id);
        }.bind(this));
    }

>>>>>>> 73e8a9bab5ab9e596a83ac410e8ac1b0db1b6cb8
    render() {

        // let varoitus;

        // if (this.state.passwordAlku !== this.state.salasana)
        // {
        //     <p>salasanat eivät täsmää</p>
        // }
        // else if (this.state.passwordAlku === "") {
        //   <p></p>
        // }
        
        

        return (
            <div>

                Email:{this.state.email}

                <div className="borderlegend">Tapahtumakalenteri</div>
                <div className="tapahtumakalenteri">
<<<<<<< HEAD
                     <Tapahtumalomake lisaaTapahtuma={this.uusiTapahtuma}/> 
                    <Tapahtumalista tapahtumat={this.state.eventit} poisto={this.poistaTapahtuma}/></div>
                    <Kayttajakirjautuminen/> 
                     <Kayttajalista kayttajat={this.state.userit} poisto={this.poistaKayttaja}/>
                    <Kayttajalomake lisaaKayttaja={this.uusiKayttaja}/> 
                
            </div>
=======

                    <Tapahtumalomake lisaaTapahtuma={this.uusiTapahtuma}/>
                    <Tapahtumalista tapahtumat={this.state.eventit} poisto={this.poistaTapahtuma}/></div>
                    <Kayttajakirjautuminen kirjaudu={this.kirjaudu}/>
                    {/* {varoitus} */}
                    <Kayttajalista kayttajat={this.state.userit} poisto={this.poistaKayttaja}/>
                    <Kayttajalomake lisaaKayttaja={this.uusiKayttaja}/>
                   
                    </div>
>>>>>>> 73e8a9bab5ab9e596a83ac410e8ac1b0db1b6cb8
            );
    }
}
export default Tapahtumakalenteri;