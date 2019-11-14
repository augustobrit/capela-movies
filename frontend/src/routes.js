import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sessions from "./pages/sessions";
//import Theaters from "./pages/theaters";
//import Theater from "./pages/theater";
import Session from "./pages/session";
//<Route path="/theaters" component={Theaters}></Route>
//<Route path="/theaters/:id" component={Theater}></Route>
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Sessions}></Route>
      <Route path="/sessions/:id" component={Session}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
