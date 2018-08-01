import React, {Component} from 'react';
import Tapahtumalista from './Tapahtumalista';
import Tapahtumalomake from "./Tapahtumalomake";
import Kayttajakirjautuminen from './Kayttajakirjautuminen';
import {haeLista, luoEvent, poistaEvent} from "../palvelu";

// let data =
//     [
//         {
//             "name": "AcademyAfterWork", 
//             "time": "", 
//             "category": "Virkistäytyminen", 
//             "location": "Keilaranta 6, Espoo", 
//             "price": "maksuton", 
//             "gps": "",
//             "id": 1,

//         },
//         {
//             "id": 2,
//             "name": "AcademyAfterAfterWork", 
//             "time": "", 
//             "category": "nollaus", 
//             "location": "Keilaranta 6, Espoo", 
//             "price": "maksuton", 
//             "gps": "",
            
//         },
//         {
//             "id": 3,
//             "name": "AcademyJooga", 
//             "time": "",
//             "category": "Liikunta", 
//             "location": "Keilaranta 6, Espoo", 
//             "price": "maksuton",
//              "gps": ""
//         },
//         {
//             "id": 4,
//             "name": "AcademyMindfulness", "time": "", 
//             "category": "Virkistäytyminen", 
//             "location": "Keilaranta 6, Espoo", 
//             "price": "maksuton", 
//             "gps": ""
//         },
//         {
//             "id": 5,
//             "name": "AcademyTT", 
//             "time": "", 
//             "category": "Verkostoituminen", 
//             "location": "Keilaranta 6, Espoo",
//              "price": "maksuton",
//               "gps": ""
//         }
//     ];

class Tapahtumakalenteri extends Component {
    state = {eventit: [], msg: "Haetaan dataa"}
    componentDidMount() {
        this.haeListaJaPaivita();
    }
    haeListaJaPaivita = () => {
        haeLista(function (lista) {
            this.setState({eventit: lista, msg: null});
        }.bind(this));
    }
    uusiTapahtuma = (uusitapahtuma) => {
        luoEvent(uusitapahtuma, function () {
            this.haeListaJaPaivita();
        }.bind(this));
    }
    poistaTapahtuma = (poistettavanId) => {
        poistaEvent(poistettavanId)
            .then(function (response) {
                // response.status==204?
                this.haeListaJaPaivita();
            }.bind(this));
    }


    // constructor(props) {
    //     super(props);
    //     // seuraava id hallinnoidaan täällä
    //     var maxid = 1;
    //     for (var i; i < data.length; ++i) {
    //         if (data[i].id > maxid) maxid = data[i].id
    //     }
    //     this.state = {seuraavaid: maxid + 1, eventit: data};
    // }

    

    // uusiTapahtuma = (uusisanonta) => {
    //     uusisanonta.id = this.state.seuraavaid;
    //     this.state.eventit.push(uusisanonta);
    //     this.setState({seuraavaaid: this.state.seuraavaid + 1});
    // }
    // poistaTapahtuma = (poistettavanId) => {
    //     // Etsitään ensin poistettavan sanonnan indeksi
    //     var ind = this.state.eventit.findIndex((q) => q.id === poistettavanId);
    //     // poistetaan indeksillä
    //     this.state.eventit.splice(ind, 1);
    //     this.setState(this.state);
    // }

    render() {
        return (
            <div>
                <div className="borderlegend">Tapahtumakalenteri</div>
                <div className="tapahtumakalenteri">
                    <Tapahtumalomake lisaaTapahtuma={this.uusiTapahtuma}/>
                    <Tapahtumalista tapahtumat={this.state.eventit} poisto={this.poistaTapahtuma}/></div>
                    <Kayttajakirjautuminen/>
                    </div>
            );
    }
}

export default Tapahtumakalenteri;