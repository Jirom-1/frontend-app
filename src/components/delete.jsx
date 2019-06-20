import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class Delete extends Component {
  state = {
    id: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const id = this.state.id;

    axios
      .delete(
        "http://localhost:8086/all/" + id
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          id: ""
        });
      })
      .catch(response => {
        console.log(response);
        this.setState({
          id: ""
        });
      });
  };

  render() {
    return (
      <div>
        <div
          className="form-group"
          style={{
            maxWidth: "500px",
            margin: "auto"
          }}
        >
          <i>
            <label>Please enter the ID of the user you'd like to delete</label>
          </i>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                ID
              </span>
            </div>

            <input
              name="id"
              width="100"
              className="form-control"
              aria-label="id"
              aria-describedby="basic-addon1"
              value={this.state.id}
              onChange={e => this.change(e)}
            />
          </div>

          <div className="text-right">
            <button
              onClick={e => this.handleSubmit(e)}
              type="button"
              className="btn btn-primary m-2"
              style={{ justifyContent: "right" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Delete;
