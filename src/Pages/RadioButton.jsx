import React from 'react';
import Radio from '@rakuten-rex/radio-button/Radio';
import RadioGroup from '@rakuten-rex/radio-button/RadioGroup';

export default function Index() {
  return (
    <>
      <h1>Radio</h1>
      <h2>Single (uncontrolled)</h2>
      <Radio id='pet-dog' label='dog' name='peta' value='dog' />
      <Radio id='pet-cat' label='cat' name='petb' value='cat' checked={true} />
      <Radio id='choice-dog' label='dog' name='petc' value='dog' disabled={true} />
      <h2>Inline Group</h2>
      <RadioGroup options={[{ "id": "dogs-1", "name": "dogs-1", "value": "dog-1", "label": "Dog-1", "checked": null, "disabled": false, "required": false }, { "id": "dogs-2", "name": "dogs-2", "value": "dog-2", "label": "Dog-2", "checked": null, "disabled": false, "required": false }, { "id": "dogs-3", "name": "dogs-3", "value": "dog-3", "label": "Dog-3", "checked": null, "disabled": false, "required": false }, { "id": "dogs-4", "name": "dogs-4", "value": "dog-4", "label": "Dog-4", "checked": null, "disabled": false, "required": false }, { "id": "dogs-5", "name": "dogs-5", "value": "dog-5", "label": "Dog-5", "checked": null, "disabled": false, "required": false }]} isBlock={false} />
      <h2>Block Group</h2>
      <RadioGroup options={[{ "id": "cat-1", "name": "cats-1", "value": "cat-1", "label": "Cat-1", "checked": null, "disabled": false, "required": false }, { "id": "cat-2", "name": "cats-2", "value": "cat-2", "label": "Cat-2", "checked": null, "disabled": false, "required": false }, { "id": "cat-3", "name": "cats-3", "value": "cat-3", "label": "Cat-3", "checked": null, "disabled": false, "required": false }, { "id": "cat-4", "name": "cats-4", "value": "cat-4", "label": "Cat-4", "checked": null, "disabled": false, "required": false }, { "id": "cat-5", "name": "cats-5", "value": "cat-5", "label": "Cat-5", "checked": null, "disabled": false, "required": false }]} isBlock={true} />
      <h2>Theme</h2>
      <RadioGroup options={[{ "id": "choice1", "name": "pet", "value": "dog", "label": "Dog", "checked": false, "disabled": false, "required": false }, { "id": "choice2", "name": "pet", "value": "fish", "label": "Fish", "checked": false, "disabled": false, "required": false }, { "id": "choice3", "name": "pet", "value": "cat", "label": "Cat", "checked": true, "disabled": false, "required": false }, { "id": "choice4", "name": "pet", "value": "rabbit", "label": "Rabbit", "checked": false, "disabled": false, "required": false }, { "id": "choice5", "name": "pet", "value": "iguana", "label": "Iguana", "checked": false, "disabled": true, "required": false }]} style={{
        "--rex-radio-theme": "#bf0000",
        "--rex-radio-label": "#333333",
        "--rex-radio-border-color": "#9c9c9c",
        "--rex-radio-disabled-text": "#d1d1d1",
        "--rex-radio-disabled-border": "#d1d1d1",
        "--rex-radio-margin-top": ".5rem",
        "--rex-radio-margin-right": "3rem",
        "--rex-radio-margin-bottom": ".5rem",
        "--rex-radio-margin-left": "0rem"
      }} />
    </>
  );
}
