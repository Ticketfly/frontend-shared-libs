'use strict';

module.exports = {
  name: 'frontend-shared-libs',
  
  normalizeEntityName: function() {  },
    
  beforeInstall: function() {
    return this.addBowerPackageToProject('node-uuid', '~1.4.3');
  }
};
