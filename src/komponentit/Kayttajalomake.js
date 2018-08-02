import React, {Component} from 'react';

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
                <form className="kayttajalisays" onSubmit={this.laheta} style={{padding:13, fontFamily: 'Century Gothic'}}>
                    <table>
                        <tbody>
                    <tr><td>Etunimi: </td><td><input value={this.state.name} onChange={this.etunimiMuuttunut}/></td></tr>
                    <tr><td>Sukunimi: </td><td><input value={this.state.category} onChange={this.sukunimiMuuttunut}/></td></tr>
                    <tr><td>Email: </td><td><input value={this.state.time} onChange={this.emailMuuttunut}/></td></tr>
                    <tr><td>Salasana: </td><td><input value={this.state.location} type="password" onChange={this.pwMuuttunut}/></td></tr>
                    <tr><td></td><td><input type="submit" defaultValue="Rekisteröi käyttäjä" style={{fontFamily:'Century Gothic'}}/></td></tr>
                        </tbody>
                    </table>
                </form>
            </div>);
    }
}