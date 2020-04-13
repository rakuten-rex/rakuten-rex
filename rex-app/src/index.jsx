/* eslint-disable import/no-extraneous-dependencies */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { unregister } from './serviceWorker';
import App from './App';

unregister();

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
