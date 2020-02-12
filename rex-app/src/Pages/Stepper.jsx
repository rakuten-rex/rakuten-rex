import React from 'react';
import Stepper from '@rakuten-rex/stepper';

export default function Index() {
  return (
    <>
      <h1>Stepper</h1>
      <h2>Default</h2>
      <Stepper minusLabel='minus button' plusLabel='plus button' />
      <h2>Disabled</h2>
      <Stepper minusLabel='minus button' plusLabel='plus button' disabled={true} />
      <h2>Theme</h2>
      <div style={{ "marginBottom": "1rem" }}>
        <Stepper minusLabel='minus button' plusLabel='plus button' style={{
          "--rex-stepper-theme": "crimson",
          "--rex-stepper-number-text": "#333333",
          "--rex-stepper-background": "#ffffff",
          "--rex-stepper-icon-default": "#B6B6B6",
          "--rex-stepper-icon-hover": "#ffffff",
          "--rex-stepper-icon-disabled": "#B6B6B6",
          "--rex-stepper-disabled-background": "#ffffff"
        }} />
      </div>
      <div>
        <Stepper minusLabel='minus button' plusLabel='plus button' style={{
          "--rex-stepper-theme": "crimson",
          "--rex-stepper-number-text": "#333333",
          "--rex-stepper-background": "#ffffff",
          "--rex-stepper-icon-default": "#B6B6B6",
          "--rex-stepper-icon-hover": "#ffffff",
          "--rex-stepper-icon-disabled": "#B6B6B6",
          "--rex-stepper-disabled-background": "#ffffff"
        }} disabled={true} />
      </div>
    </>
  );
}
