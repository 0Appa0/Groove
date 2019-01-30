import React, { Component } from "react";

class Mainpage extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Hello You Sadistic World</h1>
      </div>
    );
  }
}
const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginleft: theme.spacing.unit * 3,
    marginright: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

export default withStyles (styles)(Mainpage_;
