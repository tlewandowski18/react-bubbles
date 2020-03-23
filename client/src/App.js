import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute"
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/" className="link">Login</Link>
          <Link to="/bubbles" className="link">Protected Bubbles</Link>
        </div>
        <Switch>
          <Route exact path="/" render={props => <Login {...props} />} />
          <PrivateRoute path="/bubbles" component={BubblePage} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
