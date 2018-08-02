import React, { Component } from 'react';

import Tapahtuma from './Tapahtuma';
import Geolocated from './radiobutton';

var nimet = 'name';
class Tapahtumalista extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    
    setGender(event) {
        nimet=event.target.value
        console.log(event.target.value);
      }
    updateSearch(e) {
        this.setState({ search: e.target.value });
    }
    render() {
        if ('name'==nimet){
            let filteredContacts = this.props.tapahtumat
            .filter(
                (tapahtuma) => {
                    return tapahtuma.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            )
            ;
            var kaikki = filteredContacts
            .map(function (tapahtuma) {
                return (<Tapahtuma tapahtuma={tapahtuma} poista={this.props.poisto} key={tapahtuma.event_id} onkoKirjautunut={this.props.onkoKirjautunut} />);
            }.bind(this));
        }
        else if ('category'==nimet){
            let filteredContacts = this.props.tapahtumat
            .filter(
                (tapahtuma) => {
                    return tapahtuma.category.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            )
            ;
            var kaikki = filteredContacts
            .map(function (tapahtuma) {
                return (<Tapahtuma tapahtuma={tapahtuma} poista={this.props.poisto} key={tapahtuma.event_id} onkoKirjautunut={this.props.onkoKirjautunut} />);
            }.bind(this));
        }
        else if('location'==nimet){
            let filteredContacts = this.props.tapahtumat
            .filter(
                (tapahtuma) => {
                    return tapahtuma.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            )
            ;
            var kaikki = filteredContacts
            .map(function (tapahtuma) {
                return (<Tapahtuma tapahtuma={tapahtuma} poista={this.props.poisto} key={tapahtuma.event_id} onkoKirjautunut={this.props.onkoKirjautunut} />);
            }.bind(this));
        }
        
        
        return (
            <div>

                <div><center>
                    <Geolocated/>
                    <div onChange={this.setGender.bind(this)}>
                            <input type="radio" value="name" name="gender"/> Nimi
                            <input type="radio" value="category" name="gender"/> Kategoria
                            <input type="radio" value="location" name="gender"/> Sijainti
                     </div>
                    <input className="center" type="text" value={this.state.search}
                        onChange={this.updateSearch.bind(this)} />
                </center></div>
                <div className="borderlegend" >Tapahtumalista</div>
                <ul className="tapahtumalista">
                    {kaikki}
                </ul>
            </div>
        );
    }
}

export default Tapahtumalista;