/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
import MyComponent from 'src/MyComponent';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'My Component',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => <MyComponent />;

export const WithLink = () => (
  <MyComponent>
    <a href="/" target="_blank">
      Link
    </a>
  </MyComponent>
);

export const WithCustomClassname = () => (
  <MyComponent className="rex-my-component elevation" />
);

export const WithClickEvent = () => {
  const onClickSample = action('clicked');

  return <MyComponent onClick={onClickSample} />;
};

export const WithDynamicProps = () => {
  const sampleTitle = text('title', 'Dynamic Title');
  const sampleText = text('text', 'Dynamic Text');

  return <MyComponent title={sampleTitle} text={sampleText} />;
};

/**
 * Custom Theme support
 * */

function Theme() {
  const themeText = color('Text', 'crimson', 'Theme Colors');
  const themeLink = color('Link', '#CC0070', 'Theme Colors');
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
    '--rex-my-component-theme-text': themeText,
    '--rex-my-component-theme-link': themeLink,
    '--rex-my-component-title-weight': themeTitleWeight,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, MyComponent),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();

  return (
    <MyComponent style={customStyle}>
      <a href="/" target="_blank">
        Link
      </a>
    </MyComponent>
  );
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <MyComponent>
        <a href="/" target="_blank">
          Link
        </a>
      </MyComponent>
    </>
  );
};
