import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Create extends Component {
  state = {
    username: "",
    password: "",
    ID: "",
    name: "",
    email: "",
    usernameError: "",
    passwordError: "",
    nameError: "",
    emailError: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let usernameError = "";
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Invalid email address";
    }

    if (!this.state.username) {
      usernameError = "Username mustn't be empty";
    }

    if (!this.state.name) {
      nameError = "Name mustn't be empty";
    }

    if (this.state.username < 8) {
      passwordError = "Password must not be less than 8 characters";
    }

    if (emailError || usernameError || passwordError || nameError) {
      this.setState({ emailError, usernameError, nameError, passwordError });
      return false;
    }
    return true;
  };

  onSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      const user = {
	id : this.state.ID,
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email
      };

      // const userStr = JSON.stringify(user);

      axios
        .post(
          "http://localhost:8086/all/",
          user
        )
        .then(response => {
          console.log(response.data);
          this.setState({
            ID:"",
            username: "",
            password: "",
            name: "",
            email: "",
            usernameError: "",
            nameError: "",
            passwordError: "",
            emailError: ""
          });
        })
        .catch(response => {
          console.log(response.data);
        });
    }
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
        <form className="form-group">
          <div
            className="input-group mb-3 form-group"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                ID
              </span>
            </div>
            <input
              className="form-control"
              name="ID"
              value={this.state.ID}
              onChange={e => this.change(e)}
            />
          </div>


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

          
          <small>
            <i>
              <label htmlFor="username" className="form-group mb-3 text-danger">
                {this.state.usernameError}
              </label>
            </i>
          </small>

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
          <small>
            <i>
              <label htmlFor="password" className="form-group mb-3 text-danger">
                {this.state.passwordError}
              </label>
            </i>
          </small>

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
          <small>
            <i>
              <label htmlFor="name" className="form-group mb-3 text-danger">
                {this.state.nameError}
              </label>
            </i>
          </small>

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
          <small>
            <i>
              <label htmlFor="email" className="form-group mb-3 text-danger ">
                {this.state.emailError}
              </label>
            </i>
          </small>

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

export default Create;
