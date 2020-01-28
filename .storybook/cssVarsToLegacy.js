import postcss from 'postcss';
import cssvariables from 'postcss-css-variables';

export default function cssVarsToLegacy(customStyle, Component) {
  const styleProps = Object.entries(customStyle)
    .map(([key, value]) => `${key}: ${value}`)
    .join(';');

  const customStyleHTML = `{${styleProps}}`;
  const classNameList = Component.defaultProps.className.trim().split(' ');
  const staticCssStyles = Array.from(document.querySelectorAll('.rex-styles-storybook'))
    .map(styleTag => {
      const { innerText } = styleTag;
      const isCurrentStyle = classNameList.find(element => innerText.includes(element));
      
      if (typeof isCurrentStyle !== 'undefined') {
        const { css } = postcss([cssvariables()]).process(
          `${innerText}${customStyleHTML}`
        );

        return css;
      }

      return '';
    })
    .join('');

  return staticCssStyles;
}
