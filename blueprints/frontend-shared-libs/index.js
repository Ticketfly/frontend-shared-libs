'use strict';

module.exports = {
  name: 'frontend-shared-libs',
    
  beforeInstall: function() {
    return this.addBowerPackageToProject('node-uuid', '~1.4.3');
  }
};
