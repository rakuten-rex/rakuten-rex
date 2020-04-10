const packageJson = require('../../../package.json');
const packageLockJson = require('../../../package-lock.json');

const { name, version } = packageJson;
const componentName = name.replace('@rakuten-rex/', '');
packageJson.version = '0.0.1';
packageJson.description = '{{description}}';
packageJson['rex-starter-kit'] = version;

packageLockJson.version = '0.0.1';

const template = `${JSON.stringify(packageJson, null, 2)}\n`.replace(
  new RegExp(componentName, 'g'),
  '{{dashCase name}}'
);

const templateLock = `${JSON.stringify(packageLockJson, null, 2)}\n`.replace(
  new RegExp(componentName, 'g'),
  '{{dashCase name}}'
);

module.exports = plop => {
  plop.setGenerator('package-json', {
    description: 'Update package.json with custom repository settings',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your package name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your package description?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../../package.json',
        template,
        force: true,
      },
      {
        type: 'add',
        path: '../../../package-lock.json',
        template: templateLock,
        force: true,
      },
    ],
  });
};
