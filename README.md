# ReX React UI Component: react-component-starter-kit

This project is part of ReX Design System and it can be used to create UI Components compatible with:

React, HTML/CSS and Vue.js  

# How to install

<img src="project-scripts/webpack/markdown/logos/npm.svg?sanitize=true" height="16" />

```
npm install @rakuten-rex/react-component-starter-kit@3.4.8 --save
```

<img src="project-scripts/webpack/markdown/logos/yarn.svg?sanitize=true" height="16" />

```
yarn add @rakuten-rex/react-component-starter-kit@3.4.8
```

# Getting started

## Storybook Live examples

For a complete guide of properties for React and HTML classes please visit our Storybook page:  

[<img src="project-scripts/webpack/markdown/logos/storybook.svg?sanitize=true" height="16" />](https://rakuten-rex.github.io/react-component-starter-kit/)   

https://rakuten-rex.github.io/react-component-starter-kit/   


**Storybook features**
- [x] Stories by component types
- [x] HTML raw output
- [x] JSX output
- [x] Stories source code
- [x] Knobs with multiple options

## ZeroHeight Documentation

For a complete Documentation including all ReX Design System Components, Live HTML/React examples and Demos please visit:

[<img src="project-scripts/webpack/markdown/logos/zh_logo.svg?sanitize=true" height="16" />](https://rakuten-rex.github.io/)   

https://rakuten-rex.github.io/   


# How to integrate ReX in your project
## A) JavaScript modules

### <img src="project-scripts/webpack/markdown/logos/react.svg?sanitize=true" height="16" /> React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

`my-component.jsx`

```jsx
import MyComponent from '@rakuten-rex/react-component-starter-kit';

function MyCustomComponent() {
  return (
    <MyComponent />
  );
}
```


[Click here](https://rakuten-rex.github.io/react-component-starter-kit/) to see all working examples in Storybook.


### <img src="project-scripts/webpack/markdown/logos/css-3.svg?sanitize=true" height="16" /> CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

#### Using CSS Variables (Modern Websites and WebApps)

Example: 

`my-component.jsx`

```jsx
import '@rakuten-rex/react-component-starter-kit/MyComponent/css';

function MyCustomComponent() {
  return (
    <div class="rex-my-component" role="presentation">
      <img src="static/media/Image.jpg" alt="Basic example" style="width:100%" />
      <h3>Hello World</h3>
      <p>This is a basic example for ReX React Components Starter Kit</p>
    </div>
  );
}
```

#### Using Static CSS (Legacy Websites)

Example: 

`my-component.jsx`

```jsx
import '@rakuten-rex/react-component-starter-kit/MyComponent/css/static';

function MyCustomComponent() {
  return (
    <div class="rex-my-component" role="presentation">
      <img src="static/media/Image.jpg" alt="Basic example" style="width:100%" />
      <h3>Hello World</h3>
      <p>This is a basic example for ReX React Components Starter Kit</p>
    </div>
  );
}
```

[Click here](https://rakuten-rex.github.io/react-component-starter-kit/) to see all working examples in Storybook.


### <img src="project-scripts/webpack/markdown/logos/sass.svg?sanitize=true" height="16" /> Sass mixins

For your own customization of styles (React, Vue, Angular, etc.) or Static HTML.

Example: 

`my-styles.scss`

```scss
@import '~@rakuten-rex/react-component-starter-kit/MyComponent/sass/styles.mixin';

.my-component-with-rex-styles {
  @include rex-my-component();
}
```

### <img src="project-scripts/webpack/markdown/logos/vue.svg?sanitize=true" height="16" /> Vue.js

A basic implementation based on HTML structure and import CSS styles into your component.

Example: 

`my-component.vue`

```vue
<template>
    <div class="rex-my-component" role="presentation">
      <img src="static/media/Image.jpg" alt="Basic example" style="width:100%" />
      <h3>Hello World</h3>
      <p>This is a basic example for ReX React Components Starter Kit</p>
    </div>
</template>
<script>
export default {
  name: 'MyComponent',
}
</script>
<style scoped>
@import "~@rakuten-rex/react-component-starter-kit/MyComponent/css";
</style>
```


## B) Static HTML

Copy-paste the stylesheet `<link>` into your `<head>` tag to load our CSS styles.

### Using CSS Variables (Modern Websites and WebApps)
**Production mode URL** (recommended for Static HTML projects):  
```
https://unpkg.com/@rakuten-rex/react-component-starter-kit@3.4.8/MyComponent/MyComponent.production.min.css
```


Development mode URL (for local testing):  

```
https://unpkg.com/@rakuten-rex/react-component-starter-kit@3.4.8/MyComponent/MyComponent.development.css
```


### Using Static CSS (Legacy Websites)

```
https://unpkg.com/@rakuten-rex/react-component-starter-kit@3.4.8/MyComponent/MyComponent.static.css
```

### <img src="project-scripts/webpack/markdown/logos/html-5.svg?sanitize=true" height="16" /> Single component integration
Add it from unpkg.com CDN (NPM) into your HTML template or HTML static page.

Example: 

`my-page.html`

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Page</title>
    <!-- ReX react-component-starter-kit -->
    <link href="https://unpkg.com/@rakuten-rex/react-component-starter-kit@3.4.8/MyComponent/MyComponent.production.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="rex-my-component" role="presentation">
      <img src="static/media/Image.jpg" alt="Basic example" style="width:100%" />
      <h3>Hello World</h3>
      <p>This is a basic example for ReX React Components Starter Kit</p>
    </div>
  </body>
</html>
```

## Documentation, source code and distribution

|| Site  | URL |
|-------------| ------------- | ------------- |
|<img src="project-scripts/webpack/markdown/logos/github-icon.svg?sanitize=true" height="16" />| Github (Source Code) | https://github.com/rakuten-rex |
|<img src="project-scripts/webpack/markdown/logos/npm.svg?sanitize=true" height="16" />| NPM (Package distribution)  | https://www.npmjs.com/org/rakuten-rex  |
|<img src="project-scripts/webpack/markdown/logos/zh_logo.svg?sanitize=true" height="16" />| ZeroHeight (Documentation)  | https://zeroheight.com/390c074f3 |

## Project Stack

| Front-end |
|-------------|
| <img src="project-scripts/webpack/markdown/logos/html-5.svg?sanitize=true" height="16" /> HTML5 <img src="project-scripts/webpack/markdown/logos/css-3.svg?sanitize=true" height="16" /> CSS3 & Sass  <img src="project-scripts/webpack/markdown/logos/javascript.svg?sanitize=true" height="16" /> JavaScript ES6 <img src="project-scripts/webpack/markdown/logos/react.svg?sanitize=true" height="16" /> React |

| Tools |
|-------------|
| <img src="project-scripts/webpack/markdown/logos/webpack.svg?sanitize=true" height="16" /> webpack <img src="project-scripts/webpack/markdown/logos/storybook-icon.svg?sanitize=true" height="16" /> Storybook <img src="project-scripts/webpack/markdown/logos/babel.svg?sanitize=true" height="16" /> Babel <img src="project-scripts/webpack/markdown/logos/eslint.svg?sanitize=true" height="16" /> ESLint <img src="project-scripts/webpack/markdown/logos/prettier.svg?sanitize=true" height="16" /> Prettier |

## Features

| Styles features |  JavaScript features |
|-------------|-------------|
| Theme support via CSS variables |  React components splitted by type |
| Static CSS styles available for HTML/VueJS/AngularJS | Universal Module Definition support |
| Sass mixins for custom builds |
| Reset CSS styles already bundled by HTML tags |
| Removed duplicated CSS props |
| CSS classes prefix `rex-` |

## Browser Support

| PC | Mobile 
|-------------|-------------|
| <img src="project-scripts/webpack/markdown/browsers/chrome.svg?sanitize=true" height="14" /> Chrome 49+ | <img src="project-scripts/webpack/markdown/browsers/apple.svg?sanitize=true" height="14" /> iOS 9+ (Safari 9.3+, Chrome 78+) |
| <img src="project-scripts/webpack/markdown/browsers/safari.svg?sanitize=true" height="14" /> Safari 9.1+ | <img src="project-scripts/webpack/markdown/browsers/android-icon.svg?sanitize=true" height="14" /> Android 6+ (Chrome 78+, Android Browser 76+) |
| <img src="project-scripts/webpack/markdown/browsers/firefox.svg?sanitize=true" height="14" /> Firefox 31+ | |
| <img src="project-scripts/webpack/markdown/browsers/microsoft-edge.svg?sanitize=true" height="14" /> MS Edge 15+ | |
| <img src="project-scripts/webpack/markdown/browsers/internetexplorer.svg?sanitize=true" height="14" /> IE 11+ | |



# Development environment
## How to initialize the project for a new repository

```
npm run setup
```

## How to add a new ReX Component to the project

```
npm run generate:rex-component
```

## How to start the project

The development environment is based on Storybook, for more info visit https://storybook.js.org/ .   

```
npm start
```

## How to build

The build task will generate a NPM package ready to be published and also a static version of Storybook, one folder for NPM `./npm/@rakuten-rex/react-component-starter-kit` and other one for Github pages `./docs`.   

```
npm run build
```

## How to check build version

By using Node http-server, you can check the static version of Storybook with production settings and builds.

```
npm run serve
```

## How to publish to NPM
### Build the project

```
npm run build
```

### Publish to NPM

Build the project first and then publish it to NPM.  

```
npm run publish:component
```

Once the process finish, take a look to the NPM site:   

https://www.npmjs.com/package/@rakuten-rex/react-component-starter-kit


# Javascript and React related documents

Take a look to this nice documentation pages to be more familiar with React and modern Javascript:

## Official site
https://reactjs.org/docs/getting-started.html   

## Google Web Fundamentals (the whole site is a must to read)
https://developers.google.com/web/fundamentals/

## Webpack as magic bundler
https://webpack.js.org/

## Composing Software series (how to understand Funcional Programming)
https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea   

## Common React patterns
https://reactpatterns.com   

## Understanding Storybook with nice images
https://blog.hichroma.com/the-delightful-storybook-workflow-b322b76fd07   

## Some guidelines for clean code
https://americanexpress.io/clean-code-dirty-code/

