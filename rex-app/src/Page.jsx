import React, { Suspense } from 'react';
import { Route, Switch as RouterSwitch, Link as RouterLink } from 'react-router-dom';

export default function Page(main, list) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterSwitch>
        {/* Main route */}
        <Route exact path={`/${main}/`}>
          <div>
            <h1>{main}</h1>
            <RouterLink to="/">Home</RouterLink>
            <ul>
              {
                list.map(({ name }) => {

                  return (
                    <li>
                      <RouterLink to={`/${main}/${name}`}>{name}</RouterLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </Route>
        {/* Components variations routes */}
        {
          list.map(({ name, Component }) => {

            return (
              <Route path={`/${main}/${name}`}>
                <h2>{name}</h2>
                <Component />
              </Route>
            )
          })
        }
      </RouterSwitch>
    </Suspense>
  );
}
