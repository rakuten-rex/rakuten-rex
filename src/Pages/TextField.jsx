import React from 'react';
import TextFieldLabel from '@rakuten-rex/text-field/TextFieldLabel';

export default function Index() {
  return (
    <>
      <h1>TextField</h1>
      <h2>Default</h2>
      <TextFieldLabel
        id="age_01"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
      />
      <h2>Hover</h2>
      <TextFieldLabel
        id="age_02"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        state="hover"
      />
      <h2>Focus And Active State</h2>
      <TextFieldLabel
        id="age_03"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        state="active"
      />
      <h2>Disabled</h2>
      <TextFieldLabel
        id="age_04"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        disabled
      />
      <h2>Error State</h2>
      <TextFieldLabel
        id="age_05"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        state="error"
      />
      <h2>Valid State</h2>
      <TextFieldLabel
        id="age_06"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        state="valid"
      />
      <h2>Required State</h2>
      <TextFieldLabel
        id="age_07"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        required
      />
      <h2>With Default Value</h2>
      <TextFieldLabel
        id="age_08"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        value="Default Value"
      />
      <h2>Theme</h2>
      <TextFieldLabel
        style={{
          '--rex-text-field-theme-text': '#A2006A',
          '--rex-text-field-theme-border': '#CB0085',
          '--rex-text-field-theme-placeholder': '#EF0AA1',
          '--rex-text-field-theme-hover-text': '#830056',
          '--rex-text-field-theme-hover-border': '#A2006A',
          '--rex-text-field-theme-hover-placeholder': '#CB0085',
          '--rex-text-field-theme-active-text': '#686868',
          '--rex-text-field-theme-active-border': '#830056',
          '--rex-text-field-theme-active-placeholder': '#A2006A',
          '--rex-text-field-theme-disabled-border': '#686868',
          '--rex-text-field-theme-disabled-placeholder': '#828282',
          '--rex-text-field-theme-disabled-text': '#4D4D4D',
          '--rex-text-field-theme-error-text': '#7D00BE',
          '--rex-text-field-theme-error-border': '#9B00EC',
          '--rex-text-field-theme-error-placeholder': '#B62AFF',
          '--rex-text-field-theme-error-icon-color': '#9B00EC',
          '--rex-text-field-theme-valid-text': '#006A9E',
          '--rex-text-field-theme-valid-border': '#0085C7',
          '--rex-text-field-theme-valid-placeholder': '#00A0F0',
          '--rex-text-field-theme-valid-icon-color': '#006A9E',
          '--rex-text-field-label-theme-text': '#CB0085',
          '--rex-text-field-label-theme-disabled-text': '#686868',
          '--rex-text-field-label-theme-hover-text': '#A2006A',
          '--rex-text-field-label-theme-active-text': '#830056',
          '--rex-text-field-label-theme-error-text': '#9B00EC',
          '--rex-text-field-label-theme-valid-text': '#0085C7',
        }}
        id="age_09"
        name="firstname"
        placeholder="Placeholder"
        htmlFor="firstname"
        label="Label"
        labelId="labelId"
        value="Default Value"
      />
    </>
  );
}