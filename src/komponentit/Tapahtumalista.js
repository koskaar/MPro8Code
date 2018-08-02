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
                <div className="borderlegend" style={{fontFamily:'Lucida Console', textShadow: '2px 2px #D3D3D3', padding:13, background: 'rgba(255, 237, 233, 0.6)', fontSize: 20}}>▿TAPAHTUMAT▿</div>
            <ul className="tapahtumalista">
                {kaikki}
            </ul>
            </div>
        );
    }
}

export default Tapahtumalista;