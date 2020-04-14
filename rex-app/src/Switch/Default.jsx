import React from 'react';
import SwitchToggle from '@rakuten-rex/switch';

export default function MyComponent() {
  return (
    <SwitchToggle 
      id='switch1' 
      label='Label Text' 
      name='pet' 
      value='dog' 
    />
  );
}
