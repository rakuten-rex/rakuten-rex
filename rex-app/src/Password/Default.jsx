import React from 'react';
import PasswordLabel from '@rakuten-rex/password';

export default function MyComponent() {
  return (
    <PasswordLabel 
      placeholder='Password' 
      htmlFor='password' 
      label='Label' 
      labelId='labelId' 
      name='Password' 
    />
  );
}
