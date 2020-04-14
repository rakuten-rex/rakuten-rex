import React from 'react';
import TextFieldLabel from '@rakuten-rex/text-field';

export default function MyComponent() {
  return (
    <TextFieldLabel 
      id='age' 
      name='firstname' 
      placeholder='Placeholder' 
      htmlFor='firstname' 
      label='Label' 
      labelId='labelId' 
    />
  );
}
