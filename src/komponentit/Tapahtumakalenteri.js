import React, {Component} from 'react';
import Tapahtumalista from './Tapahtumalista';
import Tapahtumalomake from "./Tapahtumalomake";
// import Kayttajakirjautuminen from './Kayttajakirjautuminen';
import {haeKayttaja, haeTapahtumaLista, haeKayttajaLista, luoEvent, poistaEvent, luoKayttaja, poistaKayttaja} from "../palvelu";
// import Kayttajalomake from './Kayttajalomake';
// import Kayttajalista from './Kayttajalista';


class Tapahtumakalenteri extends Component {

    state = {eventit: [], userit: [], passwordAlku: "",email:"", user_id:"", onKirjautunut: false, salasana: ""} 

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

    kirjaudu = (email, password) => {
        this.setState({passwordAlku: password})
        haeKayttaja(email, password, function(olio) {
            this.setState({email: olio.email, user_id: olio.user_id, onKirjautunut: true, salasana: olio.pw});
            console.log(this.state.user_id);
        }.bind(this));
    }


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


                <div className="tapahtumakalenteri">


                    <Tapahtumalomake lisaaTapahtuma={this.uusiTapahtuma}/>
                    <Tapahtumalista tapahtumat={this.state.eventit} poisto={this.poistaTapahtuma}/></div>
                    {/* <Kayttajakirjautuminen kirjaudu={this.kirjaudu}/>
                    {/* {varoitus} */}
                    {/* <Kayttajalista kayttajat={this.state.userit} poisto={this.poistaKayttaja}/>
                    <Kayttajalomake lisaaKayttaja={this.uusiKayttaja}/> */} */}
                   
                    </div>

            );
    }
}
export default Tapahtumakalenteri;