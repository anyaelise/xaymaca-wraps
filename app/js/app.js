'use strict';


// Declare app level module which depends on controllers, directives, filters, and services
var xaymacaWraps = angular.module('xaymacaWraps', [
  'ngRoute',
  'xaymacaWraps.controllers'
]);

xaymacaWraps.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'LandingCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
