import React, { Component } from "react";
import "./CSS/todo.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  lasthandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  passwordhandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`
    );
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
    });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Form</h1>
          <label>FirstName :</label>{" "}
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.firsthandler}
            placeholder="FirstName..."
          />
          <br />
          <label>Email :</label>{" "}
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.lasthandler}
            placeholder="your email..."
          />
          <br />
          <label>Password :</label>{" "}
          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordhandler}
            placeholder="Password..."
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
