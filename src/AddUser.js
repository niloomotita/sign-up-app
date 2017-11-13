import React, { Component } from "react";
import "./App.css";
import serializeForm from "form-serialize";

class AddUser extends Component {
  state = {
    name: "",
    email:"",
    phone:"",
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    if (this.props.onAddUser) 
        this.props.onAddUser(values);
        this.setState(state => ({
            name: "",
            email:"",
            phone:"",
          }));

  };
  updateName = (name) => {
    this.setState({ name: name.trim() })
  }
  updateEmail = (email) => {
    this.setState({ email: email.trim() })
  }
  updatePhone = (phone) => {
    this.setState({ phone: phone.trim() })
  }
  render() {
    return (
      <div className="add-user">
        <form ref="userform" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder=" name "
            required
            value={this.state.name}
            onChange={(event) => this.updateName(event.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder=" E-mail address "
            required
            value={this.state.email}
            onChange={(event) => this.updateEmail(event.target.value)}
          />
          <input
            type="tel"
            size="15"
            minLength="7"
            maxLength="10"
            name="phone"
            placeholder=" phone number "
            required
            value={this.state.phone}
            onChange={(event) => this.updatePhone(event.target.value)}
          />
          <button className="add"  />
        </form>
      </div>
    );
  }
}

export default AddUser;
