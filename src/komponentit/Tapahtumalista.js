import React, {Component} from 'react';
import Tapahtuma from './Tapahtuma';
//import './Tapahtumalista.css';

class Tapahtumalista extends Component {
    constructor(){
        super();
        this.state={
            search:''
        }
    }
    updateSearch(e){
        this.setState({search:e.target.value});
    }
    render() {
        let filteredContacts=this.props.tapahtumat
        .filter(
            (tapahtuma)=>{
                return tapahtuma.category.toLowerCase().indexOf(this.state.search.toLowerCase())!==-1;
            }
        )
        ;
        var kaikki = filteredContacts
            .map(function(tapahtuma) {
                return (<Tapahtuma tapahtuma={tapahtuma} poista={this.props.poisto} key={tapahtuma.event_id}/>);
            }.bind(this));
        return(
            <div>

                <div><center>
                <input className="center" type="text" value={this.state.search}
                onChange={this.updateSearch.bind(this)}/>
                </center></div>
                <div className="borderlegend" >Tapahtumalista</div>
            <ul className="tapahtumalista">
                {kaikki}
            </ul>
            </div>
        );
    }
}

export default Tapahtumalista;