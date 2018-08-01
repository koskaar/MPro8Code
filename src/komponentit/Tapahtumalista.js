import React, {Component} from 'react';
import Tapahtuma from './Tapahtuma';
//import './Tapahtumalista.css';

class Tapahtumalista extends Component {
    render() {
        var kaikki = this.props.tapahtumat
            .map(function(tapahtuma) {
                return (<Tapahtuma tapahtuma={tapahtuma} poista={this.props.poisto} key={tapahtuma.event_id}/>);
            }.bind(this));
        return(
            <div>
                <div className="borderlegend">Tapahtumalista</div>
            <ul className="tapahtumalista">
                {kaikki}
            </ul>
            </div>
        );
    }
}

export default Tapahtumalista;