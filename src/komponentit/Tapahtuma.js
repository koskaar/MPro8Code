import React, {Component} from 'react';

class Tapahtuma extends Component {
    poista = () => {
        this.props.poista(this.props.tapahtuma.event_id);
    }

    render() {
        return (
            
                <div className="tapahtuma"><center>

                    <p className="tnimi">{this.props.tapahtuma.name}</p>
                    <p className="taika">{this.props.tapahtuma.time}</p>
                    <p className="tkategoria">{this.props.tapahtuma.category}</p>
                    <p className="tsijainti">{this.props.tapahtuma.location}</p>
                    <p className="thinta">{this.props.tapahtuma.price}</p>
                    <p className="tgps">{this.props.tapahtuma.gps}</p>
                    <p>
                        <button type="button" onClick={this.poista}style={{fontFamily:'Lucida Console', fontSize:15, marginTop: 8}}>Poista</button>
                    </p>
                    </center>
                </div>
            
        );
    }
}

export default Tapahtuma;