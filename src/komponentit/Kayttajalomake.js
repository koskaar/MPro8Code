import React, {Component} from 'react';
import './Kayttajalomake.css';

export default class Kayttajalomake extends Component {

    state = {first_name: '', last_name: '', email: '', pw: ''}

    etunimiMuuttunut = (e) => {
        this.setState({first_name: e.target.value});
    }
    sukunimiMuuttunut = (e) => {
        this.setState({last_name: e.target.value});
    }

    salasanaMuuttunut = (e) => {
        this.setState({pw: e.target.value});
    }
    
    emailMuuttunut = (e) => {
        this.setState({email: e.target.value});
    }
    
    pwMuuttunut = (e) => {
        this.setState({pw: e.target.value});
    }

    laheta = (e) => {
        e.preventDefault();
        this.props.lisaaKayttaja(this.state);
        this.setState({first_name: '', password: '', last_name: '', email: '', pw: ''});
    }

    render() {
        return (
            <div>
                {/* <div className="borderlegend" style={{padding:13}}>Käyttäjän lisäys</div> */}
                <form className="kayttajalisays" onSubmit={this.laheta} style={{padding:13, fontFamily:'Lucida Console', marginLeft:10}}>
                    <table>
                        <tbody>
                    <tr><td>Etunimi: </td><td><input value={this.state.name} onChange={this.etunimiMuuttunut}className="hvr3"/></td></tr>
                    <tr><td>Sukunimi: </td><td><input value={this.state.category} onChange={this.sukunimiMuuttunut}className="hvr3"/></td></tr>
                    <tr><td>Email: </td><td><input value={this.state.time} onChange={this.emailMuuttunut}className="hvr3"/></td></tr>
                    <tr><td>Salasana: </td><td><input value={this.state.location} type="password" onChange={this.pwMuuttunut}className="hvr3"/></td></tr>
                    <tr><td></td><td><input type="submit" defaultValue="Rekisteröi" style={{fontFamily:'Lucida Console', fontSize:15, marginTop: 8, marginLeft: 20}} className="btn"/></td></tr>
                        </tbody>
                    </table>
                </form>
            </div>);
    }
}