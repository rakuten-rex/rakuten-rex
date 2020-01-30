import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Checkbox from './Pages/Checkbox';
import RadioButton from './Pages/RadioButton';
import Track from './Pages/Track';
import SwitchToggle from './Pages/Switch';
import Stepper from './Pages/Stepper';

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/components/Checkbox">
          <Checkbox />
        </Route>
        <Route path="/components/RadioButton">
          <RadioButton />
        </Route>
        <Route path="/components/Track">
          <Track />
        </Route>
        <Route path="/components/Switch">
          <SwitchToggle />
        </Route>
        <Route path="/components/Stepper">
          <Stepper />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/components/Checkbox">Checkbox</Link>
        </li>
        <li>
          <Link to="/components/RadioButton">RadioButton</Link>
        </li>
        <li>
          <Link to="/components/Track">Track</Link>
        </li>
        <li>
          <Link to="/components/Switch">Switch</Link>
        </li>
        <li>
          <Link to="/components/Stepper">Stepper</Link>
        </li>
      </ul>
    </div>
  );
}
