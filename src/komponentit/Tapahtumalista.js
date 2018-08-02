import React, { Component } from 'react';
import './Tapahtumalista.css'
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
            <div style={{fontFamily:'Lucida Console', padding:13, background: 'rgba(255, 237, 233, 0.6)'}}><center>


                <div>
                    {/* <Geolocated/> */}
                    <div onChange={this.setGender.bind(this)} style={{paddingTop:20, paddingBottom: 20}}>
                    
                            <input type="radio" value="name" name="gender"className="hvr6" /> Nimi
                            <input type="radio" value="category" name="gender"className="hvr6" /> Kategoria
                            <input type="radio" value="location" name="gender"className="hvr6"/> Sijainti
                     </div>


                    <input className="hvr6" type="text" placeholder= "Hae" value={this.state.search} style={{fontSize:15, fontFamily:'Lucida Console'}}
                        onChange={this.updateSearch.bind(this)} />
                </div>

                <div className="borderlegend" style={{fontSize:20, textShadow: '2px 2px #D3D3D3', color: '#131313', paddingTop: 15}} >▿TAPAHTUMAT▿</div>
            <ul className="tapahtumalista">
                {kaikki}
            </ul>

            </center></div>
        );
    }
}

export default Tapahtumalista;