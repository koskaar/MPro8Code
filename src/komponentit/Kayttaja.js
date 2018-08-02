import React, {Component} from 'react';

class Kayttaja extends Component {
    poista = () => {
        this.props.poista(this.props.kayttaja.user_id);
    }

    render() {
        return (
            
                <div className="kayttajat"><center>
<<<<<<< HEAD
                    <div className="borderlegend">Käyttäjät</div>
=======
>>>>>>> a00ea413918356816d4d97657d3c6f765dd2577f
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