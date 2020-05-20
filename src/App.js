import React, { Component } from "react";

class App extends Component {
  state = {
    name: "",
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
  };
  render() {
    return (
      <div className="App">
        Registration Form
        <form onSubmit={this.handleSubmit}>
          email <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
          <h2>my first form </h2>
        </form>
        {this.state.name}
      </div>
    );
  }
}

export default App;
