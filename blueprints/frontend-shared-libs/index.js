'use strict';

module.exports = {
  name: 'frontend-shared-libs',
  
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/node-uuid/uuid.js');
  },
  
  afterInstall: function() {
    this.addBowerPackageToProject('node-uuid', '~1.4.3');
  }
};
