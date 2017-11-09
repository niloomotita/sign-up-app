import React, { Component } from 'react';
import './App.css';

class Users extends Component {
    render() {
         console.log('props', this.props)
      return (
        <div className="App">
          <div className="title">
            <h3> Name </h3>
            <h3> Email </h3>
            <h3> Phone Number</h3>
          </div>
            <ul className="people-list">
              {this.props.people.map((p)=>(
                <li key={p.id} className="list-item">
                 <div className="details">
                    <p>{p.name}</p>
                    <p>{p.email}</p>
                    <p>{p.phone}</p>
                    <button className="remove"></button>
                 </div>
                </li>
              ))}
            </ul>          
        </div>
      );
    }
  }
  
  export default Users;
  