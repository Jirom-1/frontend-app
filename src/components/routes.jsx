import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Create from "./create";

const Routes = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  </main>
);

export default Routes;
