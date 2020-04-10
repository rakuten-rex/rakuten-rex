module.exports = plop => {
  plop.setGenerator('rex-component', {
    description: 'Create a ReX React Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'confirm',
        name: 'isDefaultExport',
        message: 'Is main component? (default: No)',
        default: false,
      },
    ],
    actions(data) {
      const { isDefaultExport } = data;

      const actionsList = [
        {
          type: 'add',
          path: '../../../src/{{pascalCase name}}/index.jsx',
          templateFile: 'index.jsx.hbs',
          force: true,
        },
        {
          type: 'add',
          path: '../../../src/{{pascalCase name}}/{{pascalCase name}}.jsx',
          templateFile: 'MyComponent.jsx.hbs',
          force: true,
        },
        {
          type: 'add',
          path: '../../../src/{{pascalCase name}}/{{pascalCase name}}.scss',
          templateFile: 'MyComponent.scss.hbs',
          force: true,
        },
        {
          type: 'add',
          path:
            '../../../src/{{pascalCase name}}/_{{pascalCase name}}.mixin.scss',
          templateFile: '_MyComponent.mixin.scss.hbs',
          force: true,
        },
        {
          type: 'add',
          path:
            '../../../src/{{pascalCase name}}/{{pascalCase name}}.stories.jsx',
          templateFile: 'MyComponent.stories.jsx.hbs',
          force: true,
        },
        {
          type: 'add',
          path: '../../../src/{{pascalCase name}}/_core.mixin.scss',
          templateFile: '_core.mixin.scss',
          force: true,
        },
      ];

      if (isDefaultExport) {
        actionsList.push({
          type: 'add',
          path: '../../../src/index.jsx',
          template: "export { default } from './{{pascalCase name}}';\n",
          force: true,
        });
      }

      return actionsList;
    },
  });
};
