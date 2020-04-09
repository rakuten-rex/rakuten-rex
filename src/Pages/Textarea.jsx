import React from 'react';
import TextareaLabel from '@rakuten-rex/textarea/TextareaLabel';
import TextareaLabelHelper from '@rakuten-rex/textarea/TextareaLabelHelper';

export default function Index() {
  return (
    <>
      <h1>TextareaLabel</h1>
      <h2>Default</h2>
      <TextareaLabel
        placeholder="Placeholder"
        label="Label"
        id="age"
        htmlFor="age"
        labelId="labelId"
      />
      <h2>Hover State</h2>
      <TextareaLabel
        placeholder="Placeholder"
        label="Label"
        id="age"
        htmlFor="age"
        labelId="labelId"
        state="hover"
      />
      <h2>Focus And Active State</h2>
      <TextareaLabel
        placeholder="Placeholder"
        label="Label"
        id="age"
        htmlFor="age"
        labelId="labelId"
        state="active"
      />
      <h2>Disabled</h2>
      <TextareaLabel
        placeholder="無効"
        label="Label"
        id="age"
        htmlFor="age"
        labelId="labelId"
        disabled
      />
      <h2>Error State</h2>
      <TextareaLabel
        placeholder="Placeholder"
        label="Label"
        id="age"
        htmlFor="age"
        labelId="labelId"
        state="error"
      />
      <h2>Valid State</h2>
      <TextareaLabel
        placeholder="Placeholder"
        label="Label"
        id="age"
        htmlFor="age"
        labelId="labelId"
        state="valid"
      />
      <h2>With Default Value</h2>
      <TextareaLabel
        placeholder="Placeholder"
        label="Label"
        id="age"
        htmlFor="age"
        labelId="labelId"
        defaultValue="Default Value"
      />
      <h2>Theme</h2>
      <TextareaLabel
        style={{
          '--rex-textarea-border-color': '#CB0085',
          '--rex-textarea-placeholder-color': '#FF79D1',
          '--rex-textarea-theme-text': '#333',
          '--rex-label-ui-theme-text': '#CB0085',
          '--rex-textarea-hover-border-color': '#FF41BE',
          '--rex-textarea-hover-placeholder-color': '#FFACE3',
          '--rex-textarea-hover-theme-text': '#333',
          '--rex-label-ui-hover-theme-text': '#FF41BE',
          '--rex-textarea-active-border-color': '#8C0000',
          '--rex-textarea-active-placeholder-color': '#8C0000',
          '--rex-textarea-active-theme-text': '#333',
          '--rex-label-ui-active-theme-text': '#5A003C',
        }}
        placeholder="Default"
        label="Label"
        id="age_01"
        htmlFor="age"
        labelId="labelId_01"
      />
      <h1>TextareaLabelHelper</h1>
      <h2>Default</h2>
      <TextareaLabelHelper
        placeholder="Placeholder"
        label="Label"
        helper="Helper Text"
        id="age"
        htmlFor="age"
        labelId="labelId"
      />
      <h2>Disabled</h2>
      <TextareaLabelHelper
        placeholder="無効"
        label="Label"
        helper="Helper Text"
        id="age"
        htmlFor="age"
        labelId="labelId"
        disabled
      />
      <h2>Error State</h2>
      <TextareaLabelHelper
        placeholder="Placeholder"
        label="Label"
        helper="Helper Text"
        id="age"
        htmlFor="age"
        labelId="labelId"
        state="error"
      />
      <h2>Valid State</h2>
      <TextareaLabelHelper
        placeholder="Placeholder"
        label="Label"
        helper="Helper Text"
        id="age"
        htmlFor="age"
        labelId="labelId"
        state="valid"
      />
      <h2>Focus And Active State</h2>
      <TextareaLabelHelper
        placeholder="Placeholder"
        label="Label"
        helper="Helper Text"
        id="age"
        htmlFor="age"
        labelId="labelId"
        state="active"
      />
      <h2>Hover State</h2>
      <TextareaLabelHelper
        placeholder="Placeholder"
        label="Label"
        helper="Helper Text"
        id="age"
        htmlFor="age"
        labelId="labelId"
        state="hover"
      />
      <h2>With Default Value</h2>
      <TextareaLabelHelper
        placeholder="Placeholder"
        label="Label"
        helper="Helper Text"
        id="age"
        htmlFor="age"
        labelId="labelId"
        defaultValue="Default Value"
      />
      <h2>Theme</h2>
      <TextareaLabelHelper
        style={{
          '--rex-textarea-border-color': '#CB0085',
          '--rex-textarea-placeholder-color': '#FF79D1',
          '--rex-textarea-theme-text': '#333',
          '--rex-helper-ui-theme-text': '#606060',
          '--rex-label-ui-theme-text': '#CB0085',
          '--rex-textarea-hover-border-color': '#FF41BE',
          '--rex-textarea-hover-placeholder-color': '#FFACE3',
          '--rex-textarea-hover-theme-text': '#333',
          '--rex-label-ui-hover-theme-text': '#FF41BE',
          '--rex-helper-ui-hover-theme-text': '#606060',
          '--rex-textarea-active-border-color': '#8C0000',
          '--rex-textarea-active-placeholder-color': '#8C0000',
          '--rex-textarea-active-theme-text': '#333',
          '--rex-label-ui-active-theme-text': '#5A003C',
          '--rex-helper-ui-active-theme-text': '#606060',
        }}
        placeholder="Default"
        label="Label"
        helper="Helper Text"
        id="age_01"
        htmlFor="age"
        labelId="labelId_01"
      />
    </>
  );
}