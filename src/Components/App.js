import '../App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Showroom from './Showroom';
import Creator from './Creator';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/showroom">
          <Showroom/>
        </Route>
        <Route path="/creator">
          <Creator/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
