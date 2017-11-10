import React, { Component } from 'react';
import './App.css';

class AddUser extends Component {
    render(){
        return(
        <div className="add-user">
            <input type="text" name=""  placeholder=" name "/>
            <input type="text" name=""  placeholder=" E-mail address "/>
            <input type="text" name=""  placeholder=" phone number "/>
            <button className="add"></button>
          </div>
        );
    }
}

export default AddUser;