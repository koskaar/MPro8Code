import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import "./Login.css";
import Kayttajalomake from './Kayttajalomake';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './Kayttajankirjautuminen.css'

export default class Kayttajakirjautuminen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.kirjaudu(this.state.email, this.state.password);
    this.setState({email:"", password:""})
    
  }

  render() {

    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit} style= {{padding: 13, background: 'rgba(255, 237, 233, 0.6)'}}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel style = {{fontFamily:'Lucida Console', padding:13}}>Sähköposti</ControlLabel>
            <FormControl className="hvr2"
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel style= {{fontFamily:'Lucida Console', padding:13, }}>Salasana</ControlLabel>
            <FormControl style={{marginLeft:19}} className="hvr2"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button style ={{fontFamily:'Lucida Console', fontSize:15, marginLeft:150, marginTop: 13}}
            block
            bsSize="large"
            type="submit"
            
          >
            Kirjaudu
          </Button>
          
          
        </form>
        
        <Router>
      <div style={{background: 'rgba(255, 237, 233, 0.6)'}}>
      <Link to="/Kayttajalomake" style={{ textDecoration: 'none',padding: 13, color: 'black', fontFamily:'Lucida Console', marginLeft: 12}}>Rekisteröidy tästä</Link>
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