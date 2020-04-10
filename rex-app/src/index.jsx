/* eslint-disable import/no-extraneous-dependencies */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
