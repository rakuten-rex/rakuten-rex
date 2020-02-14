import React from 'react';
import TextFieldLabel from '@rakuten-rex/text-field/TextFieldLabel';

export default function Index() {
  return (
    <>
      <h1>TextField</h1>
      <h2>Default View</h2>
      <TextFieldLabel
        id="age_01"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
      />
      <h2>Focus And Active State</h2>
      <TextFieldLabel
        id="age_02"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        state="active"
      />
    </>
  );
}