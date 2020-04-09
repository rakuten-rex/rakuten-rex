import React from 'react';
import Select from '@rakuten-rex/select';
import SelectHelper from '@rakuten-rex/select/SelectHelper';
import SelectLabel from '@rakuten-rex/select/SelectLabel';
import SelectLabelHelper from '@rakuten-rex/select/SelectLabelHelper';

export default function Index() {
  return (
    <>
      <h1>Select</h1>
      <h2>Single</h2>
      <Select id='age' placeholder='Placeholder' options={[{ "text": "Option 1", "value": "option_1" }, { "text": "Option 2", "value": "option_2" }, { "text": "Option 3", "value": "option_3" }]} />
      <h2>With Helper text</h2>
      <SelectHelper name='ageRange' id='ageB' helper='Helper Text' placeholder='Placeholder' options={[{ "text": "Option 1", "value": "option_1" }, { "text": "Option 2", "value": "option_2" }, { "text": "Option 3", "value": "option_3" }]} />
      <h2>With Label</h2>
      <SelectLabel id='ageC' label='Label' placeholder='Placeholder' options={[{ "text": "Option 1", "value": "option_1" }, { "text": "Option 2", "value": "option_2" }, { "text": "Option 3", "value": "option_3" }]} htmlFor='age' />
      <h2>With Label and Helper text</h2>
      <SelectLabelHelper id='ageD' label='LabelA' helper='Helper TextB' placeholder='Placeholder' options={[{ "text": "Option 1", "value": "option_1" }, { "text": "Option 2", "value": "option_2" }, { "text": "Option 3", "value": "option_3" }]} htmlFor='age' />
      <h2>Theme</h2>
      <Select placeholder='Placeholder' options={[{ "text": "Option 1", "value": "option_1" }, { "text": "Option 2", "value": "option_2" }, { "text": "Option 3", "value": "option_3" }]} style={{
        "--rex-select-theme-text": "crimson",
        "--rex-select-border-color": "#9c9c9c",
        "--rex-select-border-selected-color": "#0085C7",
        "--rex-select-placeholder-color": "crimson"
      }} />
      <SelectHelper helper='Helper Text' placeholder='Placeholder' options={[{ "text": "Option 1", "value": "option_1" }, { "text": "Option 2", "value": "option_2" }, { "text": "Option 3", "value": "option_3" }]} style={{
        "--rex-select-theme-text": "crimson",
        "--rex-select-border-color": "#9c9c9c",
        "--rex-select-border-selected-color": "#0085C7",
        "--rex-select-placeholder-color": "crimson",
        "--rex-helper-ui-theme-text": "#9C9C9C"
      }} />
      <SelectLabel id='ageD' label='Label' placeholder='Placeholder' options={[{ "text": "Option 1", "value": "option_1" }, { "text": "Option 2", "value": "option_2" }, { "text": "Option 3", "value": "option_3" }]} style={{
        "--rex-select-theme-text": "crimson",
        "--rex-select-border-color": "#9c9c9c",
        "--rex-select-border-selected-color": "#0085C7",
        "--rex-select-placeholder-color": "crimson",
        "--rex-label-ui-theme-text": "#9C9C9C"
      }} />
      <SelectLabelHelper id='ageE' label='Label' helper='Helper Text' placeholder='Placeholder' options={[{ "text": "Option 1", "value": "option_1" }, { "text": "Option 2", "value": "option_2" }, { "text": "Option 3", "value": "option_3" }]} style={{
        "--rex-select-theme-text": "crimson",
        "--rex-select-border-color": "#9c9c9c",
        "--rex-select-border-selected-color": "#0085C7",
        "--rex-select-placeholder-color": "crimson",
        "--rex-label-ui-theme-text": "#9C9C9C",
        "--rex-helper-ui-theme-text": "#9C9C9C"
      }} />
    </>
  );
}
