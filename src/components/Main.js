import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import PhotoGrid from "./PhotoGrid";
import Single from "./Single";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reinstagram</Link>
        </h1>
        <Switch>
          <Route exact path="/" component={PhotoGrid} />
          <Route path={`/view/:postId`} component={Single} />
          <Route path="/error" render={() => <div>Error page</div>} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;
