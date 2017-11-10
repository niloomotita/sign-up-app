import React, { Component } from 'react';
import './App.css';
import serializeForm from 'form-serialize';

class AddUser extends Component {
    handleSubmit =(e)=>{
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        this.props.onAddUser(values)
    }
    render(){
        return(
        <div className="add-user">
            <form onSubmit={this.handleSubmit}>
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