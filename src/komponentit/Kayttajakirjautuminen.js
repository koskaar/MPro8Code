import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../cssKomponentit/Kirjautuminen.css';

export default class Kayttajakirjautuminen extends Component {
  constructor(props) {
    super(props);

    this.state = {email: "", password: ""};
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
    this.props.kirjaudu(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="Kayttajakirjautuminen">
      <center>
        <p>KIRJAUDU SISÄÄN</p>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel className="Kayttajatunnus">Käyttäjätunnus</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          <p></p>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel className="Salasana">Salasana</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <p></p>
          <Button className="KirjauduNappula"
            bsSize="large"
            type="submit"
          >
            Kirjaudu
          </Button>
        </form>
        </center>
      </div>
    );
  }
}