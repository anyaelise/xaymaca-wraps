'use strict';

/* Directives */


angular.module('xaymacaWraps.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
