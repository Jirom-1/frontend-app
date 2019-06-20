import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class newUpdateUser extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: ""
  };

  change = e => {
    console.log(this.props.location.state.id);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email
    };

    // const userStr = JSON.stringify(user);

    axios
      .put(
        "http://caplonsgprd-3.securegateway.appdomain.cloud:15842/users/" +
          this.props.location.state.id,
        user
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          username: "",
          password: "",
          name: "",
          email: ""
        });
      })
      .catch(response => {
        console.log(response.data);
      });
  };

  render() {
    return (
      <div
        id="form-wrapper"
        style={{
          maxWidth: "500px",
          margin: "auto"
        }}
      >
        <form
          className="form-conttrol"
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <label>
            <i>Please enter the new details of the user</i>
          </label>
          <div
            className="input-group mb-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Username
              </span>
            </div>
            <input
              name="username"
              width="100"
              className="form-control"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={this.state.username}
              onChange={e => this.change(e)}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Password
              </span>
            </div>
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.change(e)}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Name
              </span>
            </div>
            <input
              className="form-control"
              name="name"
              value={this.state.name}
              onChange={e => this.change(e)}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
            </div>
            <input
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={e => this.change(e)}
            />
          </div>

          <div className="text-right">
            <button
              className="btn btn-primary m-2"
              onClick={e => this.onSubmit(e)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default newUpdateUser;
