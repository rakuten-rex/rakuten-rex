/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
import Forms from 'src/Forms';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Forms',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => <Forms />;

export const WithDynamicProps = () => {
  const sampleTitle = text('title', 'Dynamic Title');
  const sampleText = text('text', 'Dynamic Text');

  return (
    <Forms title={sampleTitle} text={sampleText}>
      <p>{sampleText}</p>
    </Forms>
  );
};

/**
 * Custom Theme support
 * */

function Theme() {
  const themeText = color('Text', 'crimson', 'Theme Colors');
  const themeTitleWeight = select(
    'Title Weight',
    {
      Weight300: 300,
      WeightNormal: 'normal',
      Weight500: 500,
      WeightBold: 'bold',
    },
    500,
    'Theme Props'
  );

  const customStyle = {
    '--rex-forms-theme-text': themeText,
    '--rex-forms-title-weight': themeTitleWeight,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, Forms),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();

  return <Forms style={customStyle} />;
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <Forms />
    </>
  );
};
