import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Checkbox from './Pages/Checkbox';
import RadioButton from './Pages/RadioButton';

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
      </ul>
    </div>
  );
}
