/* eslint-disable no-self-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
const prettier = require('prettier');
const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');

function getUniqueCssProps(props) {
  const propsList = props
    .trim()
    .replace('_PROPS_', '')
    .split(';');
  const propsUnique = [];
  const propsOuput = [];
  const propsSorted = [];
  const objProps = {};

  for (let x = 0; x < propsList.length; x++) {
    const propWithValue = propsList[x].trim();
    // eslint-disable-next-line prefer-const
    let [prop, value, dataUrl] = propWithValue.split(':');

    // check if data url
    if (typeof dataUrl !== 'undefined') {
      const dataUrlValue = propsList[x + 1];
      value = `${value}:${dataUrl};${dataUrlValue}`;
      x++;
    }

    if (typeof prop !== 'undefined' && typeof value !== 'undefined') {
      const keyProp = prop.trim();
      const valueProp = value.trim();

      if (keyProp !== '') {
        propsUnique[prop] = valueProp;
      }
    }
  }

  for (const keyUnique in propsUnique) {
    objProps[keyUnique] = propsUnique[keyUnique];
  }

  Object.keys(objProps)
    .sort((a, b) => a.localeCompare(b))
    .forEach(key => {
      propsSorted[key] = objProps[key];
    });

  for (const cssProp in propsSorted) {
    propsOuput.push(`${cssProp}: ${propsSorted[cssProp]}`);
  }

  return propsOuput;
}

function getSelectorAndProps(list) {
  const objectList = [];

  for (let i = 0; i < list.length; i++) {
    const item = list[i].trim();
    const nextItem = list[i + 1];

    if (item.includes('_SELECTOR_')) {
      objectList[i] = item;
    }

    if (item.includes('_SELECTOR_') && nextItem.includes('_PROPS_')) {
      objectList[i + 1] = `${getUniqueCssProps(nextItem).join(
        ';'
      )}_ENDSELECTOR_`;
    }

    if (item === '_PROPS_') {
      objectList[i] = '_ENDSELECTOR_';
    }
  }

  return objectList;
}

function removeDuplicatedCSSProps(cssStyle) {
  const selectorList = cssStyle
    .replace(/{/g, '_SELECTOR_{')
    .replace(/}/g, '_PROPS_}')
    .split(/[{}]/);

  const cssList = getSelectorAndProps(selectorList);
  const cssFixed = cssList
    .join('')
    .replace(/_SELECTOR_/g, '{')
    .replace(/_ENDSELECTOR_/g, '}');

  return cssFixed;
}

function getCssFileList(assets) {
  const cssFileList = [];

  for (const key in assets) {
    if (key.includes('.css') && !key.includes('static.css')) {
      cssFileList.push({
        name: key,
        content: assets[key]._value,
        isMinified: key.includes('.min.css'),
      });
    }
  }

  return cssFileList;
}

// Convert CSS to JSON and auto-removal of duplicated keys
function convertCssToJson(content, isMinified = false) {
  let comment = '';
  let cssOnly = content;

  if (content.includes('/*!')) {
    const commentLimit = content.indexOf('*/');
    comment = content.slice(0, commentLimit + 2);
    cssOnly = content.slice(commentLimit + 2);
  }

  const discardOverriddenProps = removeDuplicatedCSSProps(cssOnly);
  const cleanedCSS = `${comment}${discardOverriddenProps}`;

  if (!isMinified) {
    return prettier.format(cleanedCSS, { parser: 'css' });
  }

  return cleanedCSS;
}

class DiscardOverriddenCssPropsPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap(
      { name: 'DiscardOverriddenCssPropsPlugin' },
      compilation => {
        const { assets } = compilation;
        const cssFileList = getCssFileList(assets);

        cssFileList.forEach(({ name, content, isMinified }) => {
          const cleanedCSS = convertCssToJson(content, isMinified);

          compilation.assets[name] = {
            source() {
              return cleanedCSS;
            },
            size() {
              return cleanedCSS.length;
            },
          };

          if (isMinified) {
            const { css } = postcss([cssvariables()]).process(cleanedCSS);
            const cssStaticFilename = name.replace(
              '.production.min',
              '.static'
            );
            const cssContent = css.replace('.production.min', '.static');

            // Insert this list into the webpack build as a new file asset:
            compilation.assets[cssStaticFilename] = {
              source: () => {
                return cssContent;
              },
              size: () => {
                return cssContent.length;
              },
            };
          }
        });

        return compilation;
      }
    );
  }
}

module.exports = DiscardOverriddenCssPropsPlugin;
