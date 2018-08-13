import React, { Component } from 'react';


class Tapahtuma extends Component {
    poista = () => {
        this.props.poista(this.props.tapahtuma.event_id);
    }

    render() {

        let nappula;
        console.log(this.props.onkoKirjautunut);
        if (this.props.onkoKirjautunut) {
            nappula = <button type="button" onClick={this.poista}style={{fontFamily:'Lucida Console', fontSize:15, marginTop: 8}} className="hvr5">Poista</button>
        }
        else {
            nappula = "";
        }
        return (


            <div className="Tapahtuma" style={{fontFamily:'Lucida Console', padding:13, background: 'rgba(255, 237, 233, 0.6)'}}><center>
                <div className="borderlegend">TAPAHTUMA</div>
                <p className="tnimi"><b>Tapahtuman nimi:</b> {this.props.tapahtuma.name}</p>
                <p className="taika"><b>Ajankohta:</b> {this.props.tapahtuma.time}</p>
                <p className="tkategoria"><b>Kategoria:</b> {this.props.tapahtuma.category}</p>
                <p className="tsijainti"><b>Sijainti:</b> {this.props.tapahtuma.location}</p>
                <p className="thinta"><b>Hinta:</b> {this.props.tapahtuma.price}</p>
                <p className="tgps"><b>GPS:</b> {this.props.tapahtuma.gps}</p>
                <p className="tgps"><b>id:</b> {this.props.tapahtuma.user_id}</p>
                <p>
                    {nappula}
                </p>
                <p className="onkoKirjautunut">{this.props.onkoKirjautunut}</p>
            </center>
            </div>


        );
    }
}

export default Tapahtuma;