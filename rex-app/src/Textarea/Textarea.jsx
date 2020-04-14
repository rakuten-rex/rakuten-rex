import React from 'react';
import TextareaLabel from '@rakuten-rex/textarea';

export default function MyComponent() {
  return (
    <TextareaLabel 
      placeholder='Placeholder' 
      label='Label' 
      id='age' 
      htmlFor='age' 
      labelId='labelId' 
    />
  );
}
