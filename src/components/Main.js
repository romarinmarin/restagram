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
          <Link to="/view/fefz">View</Link>
        </h1>

        <Switch>
          <Route exact path="/" render={() => <PhotoGrid {...this.props} />} />
          <Route
            path={`/view/:postId`}
            render={({ match }) => <Single {...this.props} match={match} />}
          />
          <Route path="/error" render={() => <div>Error page</div>} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;
