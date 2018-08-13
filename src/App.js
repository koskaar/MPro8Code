import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Tapahtumakalenteri from './komponentit/Tapahtumakalenteri';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Tapahtuma from './komponentit/Tapahtuma';
import Kayttajalista from './komponentit/Kayttajalista';
import Kayttajakirjautuminen from './komponentit/Kayttajakirjautuminen';
import { haeKayttaja, haeTapahtumaLista, haeKayttajaLista, luoEvent, poistaEvent, luoKayttaja, poistaKayttaja } from "./palvelu";
import Kayttajalomake from './komponentit/Kayttajalomake';

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
                            <Route path="/register" component={Kayttajalomake} />
                            {/* testaan tätä forkkausta ja githubin ominaisuuksi /  paskaa viljami hjhjkhikhjkhjkh <Route path="/create" component={QuoteForm}/>
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
            <Navbar ><center>
                <Navbar.Header className="navi" style={{ paddingTop: 20, paddingBottom: 20 }}>
                    <Navbar.Brand>

                        <span><Link to="/" style={{ textDecoration: 'none', padding: 20, color: 'black', fontFamily: 'Lucida Console', fontSize: 25, textShadow: '2px 2px #D3D3D3' }}>ETUSIVU</Link></span>
                        <span><Link to="/login" style={{ textDecoration: 'none', padding: 20, color: 'black', fontFamily: 'Lucida Console', fontSize: 25, textShadow: '2px 2px #D3D3D3' }}>KIRJAUDU</Link></span>
                        <span><Link to="/register" style={{ textDecoration: 'none', padding: 20, color: 'black', fontFamily: 'Lucida Console', fontSize: 25, textShadow: '2px 2px #D3D3D3' }}>REKISTERÖIDY</Link></span>

                    </Navbar.Brand>
                    {/* <Navbar.Toggle /> */}
                </Navbar.Header>

            </center></Navbar>
        );
    }
}

export default App;


