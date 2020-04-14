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
import Select from './Select';
import Stepper from './Stepper';
import Switch from './Switch';
import TextField from './TextField';
import Textarea from './Textarea';
import Track from './Track';

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
      <Select />
      <Stepper />
      <Switch />
      <TextField />
      <Textarea />
      <Track />
    </Router>
  );
}
