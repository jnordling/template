define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var pathname = window.location.pathname.replace(/\/[^/]+$/, '');
  var basePath = pathname + (pathname.substr(-1) !== '/' ? '/' : '') + 'app';

  var resources = {
    openFdaImage: basePath + '/images/l_openFDA.png',
    blueRasterImage: basePath + '/images/br_logo.jpeg',
    closeIcon: basePath + '/images/close.png',
    fullscreenIcon: basePath + '/images/fullscreen.svg',
    legendSymbols: {
      allRecalls: basePath + '/images/all_recalls.png',
      firmRecalls: basePath + '/images/firm_recalls.png',
      distributionPatterns: basePath + '/images/distribution_patterns.png'
    }
  };
  exports.resources = resources;
});
//# sourceMappingURL=resources.js.map