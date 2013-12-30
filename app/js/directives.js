'use strict';

/* Directives */


angular.module('xaymacaWraps.directives', [])
  .directive('socialMediaLinks', 
      function(){
        return {
            restrict: 'EA',
            replace: 'true',
            transclude: 'true',
            templateUrl: 'partials/social-media-icons.html'                  
        }
  });
