import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Kayttajalomake from './Kayttajalomake';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { haeKayttaja, poistaKayttaja } from "../palvelu";


export default class Kayttajakirjautuminen extends Component {
  constructor(props) {
    super(props);


    this.state = { email: "", password: "", user_id: "", pwAlku: "", pwKayttaja: "", kirjautunut: false };
  }

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 0;



  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.kirjaa(this.state.email, this.state.password);
    
  }

  kirjaa = (email, password) => {
    this.setState({ pwAlku: password });
    // haeKayttaja saa callback-funktion "function(kt)"
    // jonka avulla haeKayttaja voi palauttaa haetun
    // käyttäjän.
    haeKayttaja(email, password, function (kt) {
        this.setState({ email: kt.email, user_id: kt.user_id, pwKayttaja: kt.pw, kirjautunut: true })
        console.dir(this.state.email);
        this.setState({ email: '', password: '' });
    }.bind(this));

}

  render() {

    return (



      
      <div className="Login">
        <form onSubmit={this.handleSubmit} style={{ padding: 13 }}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel style={{ fontFamily: 'Century Gothic', padding: 13 }}>Sähköposti</ControlLabel>

            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />

          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel style={{ fontFamily: 'Century Gothic', padding: 13, }}>Salasana</ControlLabel>

            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>

          <Button style={{ fontFamily: 'Century Gothic', fontSize: 15, marginLeft: 96 }}
            block
            bsSize="large"
            type="submit">
            Kirjaudu
            </Button>


        </form>

        <Router>
          <div>
            <Link to="/Kayttajalomake" style={{ textDecoration: 'none', paddingLeft: 13, color: 'black', fontFamily: 'Century Gothic' }}>Rekisteröidy tästä</Link>
            <div className="move">
              <Switch>
                <Route exact path="/Kayttajalomake" component={Kayttajalomake} />
              </Switch>
            </div>
          </div>
        </Router>

      </div>
    );
  }
}
