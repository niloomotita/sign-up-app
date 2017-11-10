import React, { Component } from 'react';
import './App.css';

class Users extends Component {
    render() {

      return (
        <div className="App">
          <div className="title">
            <h3> Name </h3>
            <h3> E-mail </h3>
            <h3> Phone Number</h3>
            <h3> Remove / Edit</h3>
          </div>
            <ul className="people-list">
              {this.props.participants.map((p)=>(
                <li key={p.name} className="list-item">
                 <div className="details">
                    <p>{p.name}</p>
                    <p>{p.email}</p>
                    <p>{p.phone}</p>
                    <div className="remove-edit">
                    <button className="remove" onClick={()=>this.props.onRemove(p)}></button>
                    <button className="edit"></button>
                    </div>
                 </div>
                </li>
              ))}
            </ul>          
        </div>
      );
    }
  }
  
  export default Users;
  