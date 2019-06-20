import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App";

import * as serviceWorker from "./serviceWorker";
import Create from "./components/create";
import Delete from "./components/delete";
//import Update from "./update";
import viewAll from "./components/viewAll";
import newUpdateUser from "./components/newupdateuser";

class Index extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact strict component={App} />
        <Route
          path="/create"
          exact
          strict
          render={() => {
            return <Create />;
          }}
        />
        <Route path="/delete" exact strict component={Delete} />
       
        <Route path="/viewall" exact strict component={viewAll} />
        <Route
          path="/update/updateuser"
          exact
          strict
          component={newUpdateUser}
        />
      </Router>
    );
  }
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
