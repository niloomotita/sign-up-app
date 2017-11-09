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
            <h3> Remove / Edit</h3>
          </div>
            <ul className="people-list">
              {this.props.people.map((p)=>(
                <li key={p.id} className="list-item">
                 <div className="details">
                    <p>{p.name}</p>
                    <p>{p.email}</p>
                    <p>{p.phone}</p>
                    <div className="remove-edit">
                    <button className="remove"></button>
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
  