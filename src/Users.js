import React, { Component } from 'react';
import './App.css';

class Users extends Component {
    render() {
         console.log('props', this.props)
      return (
        <div className="App">
          <ul>
             {this.props.people.map((p)=>(
              <li key={p.id}>
                {p.name}
              </li>
             ))}
          </ul>
        </div>
      );
    }
  }
  
  export default Users;
  