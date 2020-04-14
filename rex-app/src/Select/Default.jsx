import React from 'react';
import SelectLabel from '@rakuten-rex/select';

export default function MyComponent() {
  return (
    <SelectLabel
      id='age' 
      label='Label' 
      placeholder='Placeholder' 
      options={[
        {"text": "Option 1" , "value" : "option_1" }, 
        {"text": "Option 2" , "value" : "option_2" }, 
        {"text": "Option 3" , "value" : "option_3" }
      ]} 
      htmlFor='age' 
    />
  );
}
