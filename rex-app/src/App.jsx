/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterHome from './Home';
import RouterButton from './Button';

export default function App() {
  return (
    <Router>
      {/* Home Routing */}
      <RouterHome />
      {/* Components Routing */}
      <RouterButton />
    </Router>
  );
}
