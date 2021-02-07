import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Layout from "./Layout/Layout";
import { authOperations } from "../redux/auth";
import Loader from "./Loader/Loader";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import routes from "../routes";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                )
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
