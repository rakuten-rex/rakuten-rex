import React from 'react';
import { Route, Switch as RouterSwitch, Link as RouterLink } from 'react-router-dom';

export default function Home() {
  const pages = [
    'Button',
    'Checkbox',
    'Grid',
    'Panel',
    'Password',
    'RadioButton',
    'Select',
    'Stepper',
    'Switch',
    'TextField',
    'Textarea',
    'Track',
  ];

  return (
    <RouterSwitch>
      <Route exact path="/">
        <div>
          <RouterLink to="/">Home</RouterLink>
          <h1>ReX Front-end Components Library <small>React Code Samples</small></h1>
          <h2>Forms</h2>
          <ul>
            {
              pages.map(pageName => {
                return (
                  <li key={`page-${pageName}`}>
                    <RouterLink to={`/${pageName}`}>{pageName}</RouterLink>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </Route>
    </RouterSwitch>
  )
}
