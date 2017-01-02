import React from "react";
import { Route, IndexRoute } from "react-router";

import Home from "./components/Home";
import App from "./containers/App";
import LoginPage from "./containers/LoginPage";

export default (
    <Route path="/" component={Home}>
        <IndexRoute component={LoginPage} />
        <Route path="/dashboard" onEnter={requireAuth} component={App}/>
    </Route>
)

function requireAuth(nextState, replace) {  
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}