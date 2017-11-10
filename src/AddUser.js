import React, { Component } from 'react';
import './App.css';

class AddUser extends Component {
    render(){
        return(
        <div className="add-user">
            <form action="">
                <input type="text" name="name"  placeholder=" name "/>
                <input type="text" name="email"  placeholder=" E-mail address "/>
                <input type="text" name="phone"  placeholder=" phone number "/>
                <button className="add"></button>
            </form>    
          </div>
        );
    }
}

export default AddUser;