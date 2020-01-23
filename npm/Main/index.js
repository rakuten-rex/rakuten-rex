'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./Main.production.min.css');
  module.exports = require('./Main.production.min.js');
} else {
  require('./Main.development.css');
  module.exports = require('./Main.development.js');
}
