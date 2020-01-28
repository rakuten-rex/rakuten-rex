'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../Main.production.min.css');
} else {
  module.exports = require('../Main.development.css');
}
