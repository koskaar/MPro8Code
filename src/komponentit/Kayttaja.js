import React, {Component} from 'react';

class Kayttaja extends Component {
    poista = () => {
        this.props.poista(this.props.kayttaja.user_id);
    }

    render() {
        return (
            
                <div className="kayttajat"><center>
                    <p className="etunimi">{this.props.kayttaja.first_name}</p>
                    <p className="sukunimi">{this.props.kayttaja.last_name}</p>
                    <p className="email">{this.props.kayttaja.email}</p>
                    <p>
                        <button type="button" onClick={this.poista}>Poista</button>
                    </p>
                    </center>
                </div>
            
        );
    }
}

export default Kayttaja;