/* eslint-disable import/no-extraneous-dependencies */
/**
 * ReX React Components Starter kit
 * Project entry points for webpack (automated version)
 */
const fs = require('fs');
const glob = require('glob');

// Entry points for React components
const componentList = glob.sync('./src/*/index.jsx');

const entry = componentList.reduce((obj, item) => {
  const name = item.replace('./src/', '').replace('/index.jsx', '');
  const path = `${name}/${name}`;
  const component = {};
  component[path] = `./src/${path}.jsx`;

  return Object.assign(obj, component);
}, {});

// Entry points for NPM distribution assets
const index = fs
  .readFileSync('src/index.jsx')
  .toString()
  .trim()
  .replace("export { default } from './", '')
  .replace("';", '');

const components = componentList.map(item =>
  item.replace('./src/', '').replace('/index.jsx', '')
);

const npmFiles = {
  index,
  components,
};

/**
 * Export to webpack.config.js
 * Example:
 *  const entry = {
 *     'MyComponent/MyComponent': './src/MyComponent/MyComponent.jsx',
 *   };
 *
 *  const npmFiles = {
 *    index: 'MyComponent',
 *    components: ['MyComponent'],
 *  };
 */
module.exports = {
  entry,
  npmFiles,
};
