import React, { Component } from 'react';
import './App.css';
import Users from './Users.js'




class App extends Component {
  state={
    people :[
      {name:'Hana Mardel', id:'hana22', email:'hana.fruit@gamil.com', phone:'0987896'},
      {name:'Mana Kordel', id:'mana12', email:'mana.fruit@gamil.com', phone:'0887896'},
      {name:'Nina Shala', id:'nina22', email:'nina.fruit@gamil.com', phone:'0128789'},
      {name:'Paul Nolman', id:'pa34', email:'paul.fruit@gamil.com', phone:'09867096'},
      {name:'Leila Amrol', id:'leila2', email:'leila.fruit@gamil.com', phone:'0547896'},
      {name:'Harry Patrol', id:'har22', email:'harry.fruit@gamil.com', phone:'07647896'},
      {name:'Sana Medmed', id:'Sana', email:'sana.fruit@gamil.com', phone:'0927896'},
      {name:'Medad Abi', id:'meda', email:'meda.fruit@gamil.com', phone:'07787896'},
      {name:'Shana Sabzi', id:'Shana', email:'shana.fruit@gamil.com', phone:'09865896'},
      {name:'Omid Bala', id:'omid', email:'omid.fruit@gamil.com', phone:'0985496'},
      {name:'Omin Tala', id:'omin', email:'omin.fruit@gamil.com', phone:'08347896'},
      {name:'Nemo Seafull', id:'nemo', email:'nemo.fruit@gamil.com', phone:'0987336'},
      {name:'Nimu Coral', id:'nimu', email:'nimu.fruit@gamil.com', phone:'09340896'},
      {name:'Kana Morghi', id:'kana22', email:'kana.fruit@gamil.com', phone:'0717896'},
      {name:'Ghazal Monro', id:'ghazal', email:'ghazal.fruit@gamil.com', phone:'087207896'},
      {name:'Maral Pearson', id:'mral', email:'maral.fruit@gamil.com', phone:'0345896'},
      {name:'Baran Maldini', id:'baran', email:'baran.fruit@gamil.com', phone:'0797896'},
      {name:'Chris Berguman', id:'chris', email:'chris.fruit@gamil.com', phone:'0983336'},
      {name:'Heiman Halonen', id:'heiman', email:'heiman.fruit@gamil.com', phone:'0987988765'},
      {name:'Marta Bread', id:'marta', email:'marta.fruit@gamil.com', phone:'09878000'},
    
    ]
  }
  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>List of Participants</h1>
        </header>
        <div className="container">
          <Users people ={this.state.people}/>
        </div>
      </div>
    );
  }
}

export default App;
