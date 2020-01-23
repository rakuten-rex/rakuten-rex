import React from 'react';
import Checkbox from '@rakuten-rex/checkbox';
import CheckboxGroup from '@rakuten-rex/checkbox/CheckboxGroup';

export default function Index() {
  return (
    <>
      <h1>Checkbox</h1>
      <h2>Single</h2>
      <Checkbox id='pet-dog' label='dog' name='pet' value='dog' />
      <Checkbox id='choice-dog' label='dog' name='pet' value='dog' disabled={true} />
      <h2>Inline Group</h2>
      <CheckboxGroup options={[{ "id": "dog-1", "name": "pet-1", "value": "dog-1", "label": "Dog-1", "checked": false, "disabled": false, "required": false }, { "id": "dog-2", "name": "pet-2", "value": "dog-2", "label": "Dog-2", "checked": false, "disabled": false, "required": false }, { "id": "dog-3", "name": "pet-3", "value": "dog-3", "label": "Dog-3", "checked": false, "disabled": false, "required": false }, { "id": "dog-4", "name": "pet-4", "value": "dog-4", "label": "Dog-4", "checked": false, "disabled": false, "required": false }, { "id": "dog-5", "name": "pet-5", "value": "dog-5", "label": "Dog-5", "checked": false, "disabled": false, "required": false }]} isBlock={false} />
      <h2>Block Group</h2>
      <CheckboxGroup options={[{ "id": "cat-1", "name": "pet-1", "value": "cat-1", "label": "Cat-1", "checked": false, "disabled": false, "required": false }, { "id": "cat-2", "name": "pet-2", "value": "cat-2", "label": "Cat-2", "checked": false, "disabled": false, "required": false }, { "id": "cat-3", "name": "pet-3", "value": "cat-3", "label": "Cat-3", "checked": false, "disabled": false, "required": false }, { "id": "cat-4", "name": "pet-4", "value": "cat-4", "label": "Cat-4", "checked": false, "disabled": false, "required": false }, { "id": "cat-5", "name": "pet-5", "value": "cat-5", "label": "Cat-5", "checked": false, "disabled": false, "required": false }]} isBlock={true} />
      <h2>Theme</h2>
      <CheckboxGroup options={[{ "id": "choice1", "name": "pet", "value": "dog", "label": "Dog", "checked": false, "disabled": false, "required": false }, { "id": "choice2", "name": "pet", "value": "fish", "label": "Fish", "checked": false, "disabled": false, "required": false }, { "id": "choice3", "name": "pet", "value": "cat", "label": "Cat", "checked": true, "disabled": false, "required": false }, { "id": "choice4", "name": "pet", "value": "llama", "label": "Llama", "checked": false, "disabled": false, "required": false }, { "id": "choice5", "name": "pet", "value": "iguana", "label": "Iguana", "checked": false, "disabled": true, "required": false }]} style={{
        "--rex-checkbox-theme": "#bf0000",
        "--rex-checkbox-label": "#333333",
        "--rex-checkbox-disabled-label": "#d1d1d1",
        "--rex-checkbox-disabled-border": "#d1d1d1",
        "--rex-checkbox-border-color": "#9c9c9c",
        "--rex-checkbox-margin-top": ".5rem",
        "--rex-checkbox-margin-right": "3rem",
        "--rex-checkbox-margin-bottom": ".5rem",
        "--rex-checkbox-margin-left": "0rem"
      }} />
    </>
  );
}
