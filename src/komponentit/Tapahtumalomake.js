import React, {Component} from 'react';
export default class Tapahtumalomake extends Component {
    constructor(){
        super()
        this.state = {name: '', time: '', category: '', location: '', price: '', gps: '' , user_id:''}
}

    nimiMuuttunut = (e) => {
        this.setState({name: e.target.value});
    }
    kategoriaMuuttunut = (e) => {
        this.setState({category: e.target.value});
    }

    sijaintiMuuttunut = (e) => {
        this.setState({location: e.target.value});
    }
    
    aikaMuuttunut = (e) => {
        this.setState({time: e.target.value});
    }
    
    hintaMuuttunut = (e) => {
        this.setState({price: e.target.value});
    }
    
    gpsMuuttunut = (e) => {
        this.setState({gps: e.target.value});
    }

    laheta = (e) => {
        e.preventDefault();
        let a = {name: this.state.name, time:this.state.time, category: this.state.category, location: this.state.location, price: this.state.price, gps: this.state.gps , user_id:this.props.user_id};
        this.props.lisaaTapahtuma(a);
        this.setState({name: '', time: '', category: '', location: '', price: '', gps: ''});
    }

    render() {
        return (
            <div>
                <div className="borderlegend">Tapahtumalomake</div>
                <form className="tapahtumalomake" onSubmit={this.laheta}>
                    <table>
                        <tbody>
                    <tr><td>Nimi: </td><td><input value={this.state.name} onChange={this.nimiMuuttunut}/></td></tr>
                    <tr><td>Kategoria: </td><td><input value={this.state.category} onChange={this.kategoriaMuuttunut}/></td></tr>
                    <tr><td>Aika: </td><td><input value={this.state.time} onChange={this.aikaMuuttunut}/></td></tr>
                    <tr><td>Sijainti: </td><td><input value={this.state.location} onChange={this.sijaintiMuuttunut}/></td></tr>
                    <tr><td>Hinta: </td><td><input value={this.state.price} onChange={this.hintaMuuttunut}/></td></tr>
                    <tr><td>Koordinaatit: </td><td><input value={this.state.gps} onChange={this.gpsMuuttunut}/></td></tr>
                    <tr><td></td><td><input type="submit" defaultValue="Lisää"/></td></tr>
                        </tbody>
                    </table>
                </form>
            </div>);
    }
}