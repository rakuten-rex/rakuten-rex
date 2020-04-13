import React from 'react';
import { Route, Switch as RouterSwitch, Link as RouterLink } from 'react-router-dom';

export default function Home() {
  const pages = [
    'Button',
    'Checkbox',
    'Grid',
    'Paper',
    'Password',
    'RadioButton',
    'Select',
    'Switch',
    'TextField',
    'Textarea',
    'Track',
  ];

  return (
    <RouterSwitch>
      <Route exact path="/">
        <div>
          <h1>Home</h1>
          <h2>Forms</h2>
          <ul>
            {
              pages.map(pageName => {
                return (
                  <li>
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
