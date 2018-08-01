import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Tapahtumakalenteri from './komponentit/Tapahtumakalenteri';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Tapahtuma from './komponentit/Tapahtuma';
import Kayttajalista from './komponentit/Kayttajalista';
import Kayttajakirjautuminen from './komponentit/Kayttajakirjautuminen';

 class App extends Component {
   render() {
     return (
      <Router>
      <div>
          <Navigation />
          <div className="content">
          <Switch>
              <Route exact path="/" component={Tapahtumakalenteri} />
              <Route path="/login" component={Kayttajakirjautuminen} />
              {/* <Route path="/create" component={QuoteForm}/>
              <Route path="/details" component={QuoteDetails}/> */}
              {/* <Route component={NotFound}/> */}
          </Switch>
          </div>
      </div>
    </Router>
    );
  }

 }

 class Navigation extends Component {
  render() {
      return (
          <Navbar>
              <Navbar.Header>
                  <Navbar.Brand>
                      <Link to="/">Etusivu</Link>
                      <Link to="/login">Login</Link>
                      
                  </Navbar.Brand>
                  {/* <Navbar.Toggle /> */}
              </Navbar.Header>

          </Navbar>
      );
  }
}

 export default App;

