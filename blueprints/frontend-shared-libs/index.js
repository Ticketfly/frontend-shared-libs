'use strict';

module.exports = {
  name: 'frontend-shared-libs',
    
  afterInstall: function() {
    this.addBowerPackageToProject('node-uuid', '~1.4.3');
  }
};
