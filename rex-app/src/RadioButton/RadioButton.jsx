import React from 'react';
import RadioGroup from '@rakuten-rex/radio-button';

export default function MyComponent() {
  return (
    <RadioGroup
      options={[
        { "id": "fastestAnimal1", "name": "fastest", "value": "BrownHare", "label": "BrownHare", "checked": false, "disabled": false, "required": false },
        { "id": "fastestAnimal2", "name": "fastest", "value": "Wildebeest", "label": "Wildebeest", "checked": false, "disabled": false, "required": false }, 
        { "id": "fastestAnimal3", "name": "fastest", "value": "Cheetah", "label": "Cheetah", "checked": false, "disabled": false, "required": false }, 
        { "id": "fastestAnimal4", "name": "fastest", "value": "Pronghorn", "label": "Pronghorn", "checked": false, "disabled": false }
      ]}
    />
  );
}
