import '../App.css';
import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Showroom from './Showroom';
import Creator from './Creator';

function App() {

  const [rapture, setRapture] = useState(true)

  function handleRaptureToggle(){
    setRapture(!rapture)
  }

  return (
    <div className={rapture?'raptureBackground':'columbiaBackground'}>
      <NavBar
      handleRaptureToggle={handleRaptureToggle}
      />
      <Switch>
        <Route exact path="/">
          <Home
          rapture={rapture}
          />
        </Route>
        <Route path="/showroom">
          <Showroom
          rapture={rapture}
          />
        </Route>
        <Route path="/creator">
          <Creator
          rapture={rapture}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
