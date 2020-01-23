/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
import Main from 'src/Main';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Main',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => <Main />;

export const WithDynamicProps = () => {
  const sampleTitle = text('title', 'Dynamic Title');
  const sampleText = text('text', 'Dynamic Text');

  return (
    <Main title={sampleTitle} text={sampleText}>
      <p>{sampleText}</p>
    </Main>
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
    '--rex-main-theme-text': themeText,
    '--rex-main-title-weight': themeTitleWeight,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, Main),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();

  return <Main style={customStyle} />;
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <Main />
    </>
  );
};
