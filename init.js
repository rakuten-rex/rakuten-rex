/* eslint-disable no-console */
const fs = require('fs');
const readline = require('readline');
const packageInfo = require('./package.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`
===========================================
Welcome to ReX React UI Component generator
===========================================
`);

rl.question('\nPackage name (ex: text): ', packageName => {
  rl.question('Component name (ex: Text): ', componentName => {
    if (packageName.trim().length > 0 && componentName.trim().length > 0) {
      console.log(
        `\n\nThe new component will update this files and contents: \n`
      );
      console.log(`./package.json: \n
        {
          name: "@rakuten-rex/${packageName}"
          ...
        }
      `);

      console.log(`./src/components: \n
        MyComponent.jsx -> ${componentName}.jsx
        MyComponent.scss -> ${componentName}.scss
      `);

      console.log(`./src/index.jsx: \n
        export { default } from './components/${componentName}';
      `);

      console.log(`./src/without-core.jsx: \n
        export { default } from './components/${componentName}';
      `);

      console.log(`./src/without-fonts.jsx: \n
        export { default } from './components/${componentName}';
      `);

      console.log(`./stories/index.jsx: \n
        const stories = ReXStories('MyComponent'); -> const stories = ReXStories('${componentName}');
        ...
      `);

      rl.question('Are you sure you want to proceed? (y/n) ', answer => {
        if (answer === 'y') {
          console.log(`Initial setup started... \n`);
          // eslint-disable-next-line no-use-before-define
          init(packageName, componentName, packageInfo);
        } else {
          console.log(`Nothing done, see you! \n`);
        }

        rl.close();
      });
    } else {
      console.log(
        `Make sure the package name and component name are not empty and try again.`
      );
      rl.close();
    }
  });
});

// Functions and helpers
function setFileContent(componentFilename, pattern, text) {
  const original = fs.readFileSync(componentFilename, 'utf8');

  const componenContent = original.replace(new RegExp(pattern, 'g'), text);

  fs.writeFileSync(componentFilename, componenContent);
}

function setIndexContent(packageName, componentName) {
  const filename = `src/index.jsx`;
  console.log(`- Updating content of ${filename}`);
  setFileContent(filename, 'MyComponent', componentName);
  console.log(`Done`);
}

function setWithoutCoreContent(packageName, componentName) {
  const filename = `src/without-core.jsx`;
  console.log(`- Updating content of ${filename}`);
  setFileContent(filename, 'MyComponent', componentName);
  console.log(`Done`);
}

function setWithoutFontsContent(packageName, componentName) {
  const filename = `src/without-fonts.jsx`;
  console.log(`- Updating content of ${filename}`);
  setFileContent(filename, 'MyComponent', componentName);
  console.log(`Done`);
}

function setJsxContent(packageName, componentName) {
  const filename = `src/components/${componentName}.jsx`;
  console.log(`- Updating content of ${filename}`);
  setFileContent(filename, 'MyComponent', componentName);
  setFileContent(filename, 'my-component', packageName);
  console.log(`Done`);
}

function setScssContent(packageName, componentName) {
  const filename = `src/components/${componentName}.scss`;
  console.log(`- Updating content of ${filename}`);
  setFileContent(filename, 'my-component', packageName);
  console.log(`Done`);
}

function setStoriesContent(packageName, componentName) {
  const filename = `stories/index.jsx`;
  console.log(`- Updating content of ${filename}`);
  setFileContent(filename, 'MyComponent', componentName);
  setFileContent(filename, 'react-component-starter-kit', packageName);
  console.log(`Done`);
}

function setJsxFilename(componentName) {
  console.log(
    `- Changing src/components/MyComponent.jsx to src/components/${componentName}.jsx`
  );
  fs.renameSync(
    'src/components/MyComponent.jsx',
    `src/components/${componentName}.jsx`
  );
  console.log(`Done`);
}

function setScssFilename(componentName) {
  console.log(
    `- Changing src/components/MyComponent.scss to src/components/${componentName}.scss`
  );
  fs.renameSync(
    'src/components/MyComponent.scss',
    `src/components/${componentName}.scss`
  );
  console.log(`Done`);
}

function setPackageJson(packageName, componentName, packageJSON) {
  console.log('- Updating package.json information');
  const startedKitName = 'react-component-starter-kit';
  const starterKitScope = `rakuten-rex/${startedKitName}`;
  const file = './package.json';
  const scopePackageName = `rakuten-rex/${packageName}`;
  const packageData = packageJSON;
  packageData.name = `@${scopePackageName}`;
  packageData.version = '0.0.1';
  packageData.repository.url = packageData.repository.url.replace(
    starterKitScope,
    scopePackageName
  );
  packageData.author = packageData.author.replace(
    starterKitScope,
    scopePackageName
  );
  packageData.bugs.url = packageData.bugs.url.replace(
    starterKitScope,
    scopePackageName
  );
  packageData.homepage = packageData.homepage.replace(
    startedKitName,
    packageName
  );

  const fileContent = JSON.stringify(packageData, null, 2);

  fs.writeFileSync(file, fileContent);

  console.log('Done');
}

function removeNodeModules() {
  console.log('- Removing node_modules');

  const deleteFolderRecursive = path => {
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach(file => {
        const curPath = `${path}/${file}`;
        if (fs.lstatSync(curPath).isDirectory()) {
          deleteFolderRecursive(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
  };

  deleteFolderRecursive('./node_modules');
  console.log('Done');
}

// INIT Process to set component name and content
function init(packageName, componentName, packageJSON) {
  removeNodeModules();

  // Set files
  setPackageJson(packageName, componentName, packageJSON);
  setJsxFilename(componentName);
  setScssFilename(componentName);

  // Set content
  setJsxContent(packageName, componentName);
  setScssContent(packageName, componentName);
  setStoriesContent(packageName, componentName);
  setIndexContent(packageName, componentName);
  setWithoutCoreContent(packageName, componentName);
  setWithoutFontsContent(packageName, componentName);

  console.log(`
===========================================
Setup finished.
===========================================

Running NPM install and Storybook, please wait.

  `);
}
