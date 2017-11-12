import React, { Component } from "react";
import "./App.css";
import serializeForm from "form-serialize";

class AddUser extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    this.props.onAddUser(values);
  };
  render() {
    return (
      <div className="add-user">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder=" name " required />
          <input
            type="email"
            name="email"
            placeholder=" E-mail address "
            required
          />
          <input
            type="tel"
            size="15"
            minLength="7"
            maxLength="10"
            name="phone"
            placeholder=" phone number "
            required
          />
          <button className="add" />
        </form>
      </div>
    );
  }
}

export default AddUser;
