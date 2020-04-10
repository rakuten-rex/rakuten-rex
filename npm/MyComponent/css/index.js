'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../MyComponent.production.min.css');
} else {
  module.exports = require('../MyComponent.development.css');
}
