/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Button from './Button';
import Checkbox from './Checkbox';
import Grid from './Grid';
import Panel from './Panel';
import Password from './Password';
import RadioButton from './RadioButton';
import Track from './Track';
import Switch from './Switch';
import Stepper from './Stepper';

export default function App() {
  return (
    <Router>
      {/* Home Routing */}
      <Home />
      {/* Components Pages Routing */}
      <Button />
      <Checkbox />
      <Grid />
      <Panel />
      <Password />
      <RadioButton />
      <Track />
      <Switch />
      <Stepper />
    </Router>
  );
}
