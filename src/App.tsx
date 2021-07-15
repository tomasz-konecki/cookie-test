import { useEffect } from "react";
import classes from "./App.module.scss";
import useUserinfo from "./hooks/useUserinfo";
import { useCookies } from "react-cookie";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home/Home";
import Applications from "./pages/applications/Applications";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <div className={classes.container}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/applications" component={Applications} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
