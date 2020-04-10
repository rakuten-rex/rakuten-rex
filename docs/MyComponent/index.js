'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./MyComponent.production.min.css');
  module.exports = require('./MyComponent.production.min.js');
} else {
  require('./MyComponent.development.css');
  module.exports = require('./MyComponent.development.js');
}
