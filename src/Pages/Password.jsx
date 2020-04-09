import React from 'react';
import PasswordLabel from '@rakuten-rex/password/PasswordLabel';
import PasswordHelper from '@rakuten-rex/password/PasswordHelper';
import PasswordLabelHelper from '@rakuten-rex/password/PasswordLabelHelper';

export default function Index() {
  return (
    <>
      <h1>Password</h1>
      <h2>Default</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-01"
        label="Label"
        labelId="label-id"
        name="Password"
      />
      <h2>Hover State</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-01"
        label="Label"
        labelId="label-id"
        name="Password"
        state="hover"
      />
      <h2>Focus And Active State</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-05"
        label="Label"
        labelId="label-id"
        name="Password"
        state="active"
      />
      <h2>Disabled</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-04"
        label="Label"
        labelId="label-id"
        name="Password"
        disabled
      />
      <h2>Error State</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-04"
        label="Label"
        labelId="label-id"
        name="Password"
        state="error"
      />
      <h2>Valid State</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-04"
        label="Label"
        labelId="label-id"
        name="Password"
        state="valid"
      />
      <h2>Required State</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-04"
        label="Label"
        labelId="label-id"
        name="Password"
        required
      />
      <h2>Show Password</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-06"
        label="Label"
        labelId="label-id"
        name="Password"
        showPassword
      />
      <h2>Theme</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-07"
        label="Label"
        labelId="label-id"
        name="Password"
        style={{
          '--rex-text-field-theme-text': 'rgba(245,166,35,1)',
          '--rex-text-field-theme-border': 'rgba(245,166,35,1)',
          '--rex-text-field-theme-placeholder': 'rgba(245,166,35,1)',
          '--rex-text-field-theme-hover-text': 'rgba(74,144,226,1)',
          '--rex-text-field-theme-hover-border': 'rgba(74,144,226,1)',
          '--rex-text-field-theme-hover-placeholder': 'rgba(74,144,226,1)',
          '--rex-text-field-theme-active-text': 'rgba(139,87,42,1)',
          '--rex-text-field-theme-active-border': 'rgba(3, 3, 3, 3)',
          '--rex-text-field-theme-active-placeholder': 'rgba(139,87,42,1)',
          '--rex-text-field-theme-disabled-border': 'rgba(80,227,194,1)',
          '--rex-text-field-theme-disabled-placeholder': 'rgba(80,227,194,1)',
          '--rex-text-field-theme-disabled-text': 'rgba(80,227,194,1)',
          '--rex-text-field-theme-icon': 'rgba(245,166,35,1)',
          '--rex-text-field-theme-hover-icon': 'rgba(74,144,226,1)',
          '--rex-text-field-theme-active-icon': 'rgba(139,87,42,1)',
          '--rex-text-field-label-theme-text': 'rgba(245,166,35,1)',
          '--rex-text-field-label-theme-hover-text': 'rgba(74,144,226,1)',
          '--rex-text-field-label-theme-active-text': 'rgba(139,87,42,1)',
          '--rex-text-field-label-theme-disabled-text': 'rgba(80,227,194,1)',
        }}
      />
    </>
  );
}