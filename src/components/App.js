import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to The DATABASE</p>
        <em>
          <small>
            <i>What would you like to do?</i>
          </small>
        </em>
        <span>
          <Link to="/create">
            <button type="button" className="btn btn-primary m-2">
              Create a new User
            </button>
          </Link>

          <Link to="/viewAll">
            <button type="button" className="btn btn-light m-2">
              View all users
            </button>
          </Link>

          <Link to="/update">
            <button type="button" className="btn btn-success m-2">
              Update a user
            </button>
          </Link>

          <Link to="/delete">
            <button type="button" className="btn btn-danger m-2">
              Delete a user
            </button>
          </Link>
        </span>
      </header>
    </div>
  );
}

export default App;

//ReactDOM.render(<App/>, document.getElementById("root"));
