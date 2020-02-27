import React from 'react';
import PasswordLabel from '@rakuten-rex/password/PasswordLabel';
import PasswordHelper from '@rakuten-rex/password/PasswordHelper';
import PasswordLabelHelper from '@rakuten-rex/password/PasswordLabelHelper';

export default function Index() {
  return (
    <>
      <h1>Password</h1>
      <h2>Default(With Label)</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-01"
        label="Label"
        labelId="label-id"
        name="Password"
      />
      <h2>With Helper text</h2>
      <PasswordHelper
        placeholder="Password"
        htmlFor="password-02"
        helper="Helper"
        name="Password"
      />
      <h2>With Label and Helper text</h2>
      <PasswordLabelHelper
        placeholder="Password"
        htmlFor="password-03"
        label="Label"
        labelId="label-id"
        helper="Helper Text"
        name="Password"
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
      <h2>Active</h2>
      <PasswordLabel
        placeholder="Password"
        htmlFor="password-05"
        label="Label"
        labelId="label-id"
        name="Password"
        state="active"
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
          '--rex-password-theme-text': 'rgba(245,166,35,1)',
          '--rex-password-theme-border': 'rgba(245,166,35,1)',
          '--rex-password-theme-placeholder': 'rgba(245,166,35,1)',
          '--rex-password-theme-hover-text': 'rgba(74,144,226,1)',
          '--rex-password-theme-hover-border': 'rgba(74,144,226,1)',
          '--rex-password-theme-hover-placeholder': 'rgba(74,144,226,1)',
          '--rex-password-theme-active-text': 'rgba(139,87,42,1)',
          '--rex-password-theme-active-border': 'rgba(139,87,42,1)',
          '--rex-password-theme-active-placeholder': 'rgba(139,87,42,1)',
          '--rex-password-theme-disabled-border': 'rgba(80,227,194,1)',
          '--rex-password-theme-disabled-placeholder': 'rgba(80,227,194,1)',
          '--rex-password-theme-disabled-text': 'rgba(80,227,194,1)',
          '--rex-password-theme-icon': 'rgba(245,166,35,1)',
          '--rex-password-theme-hover-icon': 'rgba(74,144,226,1)',
          '--rex-password-theme-active-icon': 'rgba(139,87,42,1)',
          '--rex-password-label-theme-text': 'rgba(245,166,35,1)',
          '--rex-password-label-theme-hover-text': 'rgba(74,144,226,1)',
          '--rex-password-label-theme-active-text': 'rgba(139,87,42,1)',
          '--rex-password-label-theme-disabled-text': 'rgba(80,227,194,1)',
        }}
      />
    </>
  );
}