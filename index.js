/* jshint node: true */
'use strict';

module.exports = {
  name: 'frontend-shared-libs',
  
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/node-uuid/uuid.js');
  }
};
