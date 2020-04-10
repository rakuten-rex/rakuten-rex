import React from 'react';
import { Route, Switch as RouterSwitch, Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <RouterSwitch>
      <Route exact path="/">
        <div>
          <h1>Home</h1>
          <h2>Forms</h2>
          <ul>
            <li>
              <RouterLink to="/Button">Button</RouterLink>
            </li>
            <li>
              <RouterLink to="/Checkbox">Checkbox</RouterLink>
            </li>
            <li>
              <RouterLink to="/RadioButton">RadioButton</RouterLink>
            </li>
            <li>
              <RouterLink to="/Track">Track</RouterLink>
            </li>
            <li>
              <RouterLink to="/Switch">Switch</RouterLink>
            </li>
            <li>
              <RouterLink to="/Stepper">Stepper</RouterLink>
            </li>
            <li>
              <RouterLink to="/Select">Select</RouterLink>
            </li>
            <li>
              <RouterLink to="/Paper">Paper</RouterLink>
            </li>
            <li>
              <RouterLink to="/Textarea">Textarea</RouterLink>
            </li>
            <li>
              <RouterLink to="/TextField">TextField</RouterLink>
            </li>
            <li>
              <RouterLink to="/Grid">Grid</RouterLink>
            </li>
            <li>
              <RouterLink to="/Password">Password</RouterLink>
            </li>
          </ul>
        </div>
      </Route>
    </RouterSwitch>
  )
}
