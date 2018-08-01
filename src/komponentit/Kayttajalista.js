import React, {Component} from 'react';
import Kayttaja from './Kayttaja';
//import './Kayttajalista.css';

class Kayttajalista extends Component {
    render() {
        var kaikki = this.props.kayttajat
            .map(function(kayttaja) {
                return (<Kayttaja kayttaja={kayttaja} poista={this.props.poisto} key={kayttaja.user_id}/>);
            }.bind(this));
        return(
            <div><center>
                <div className="borderlegend">Kayttajalista</div></center>
            <ul className="kayttajalista">
                {kaikki}
            </ul>
            </div>
        );
    }
}

export default Kayttajalista;