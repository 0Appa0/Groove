import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "../Components/Signup/Signup";

import Button from "@material-ui/core/Button";

const Welcome = () => (
  <div>
    <h1>Welcome</h1>
    <Button variant="contained" color="secondary">
      Goto HomePage
    </Button>
  </div>
);

const Routes = () => (
  <div>
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </div>
);

export default Routes;
