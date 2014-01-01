'use strict';


// Declare app level module which depends on controllers, directives, filters, and services
var xaymacaWraps = angular.module('xaymacaWraps', [
  'ngRoute',
  'xaymacaWraps.controllers'
]);

xaymacaWraps.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'MainCtrl'});
  $routeProvider.when('/before', {templateUrl: 'partials/before.html', controller: 'MainCtrl'});
  $routeProvider.when('/buy', {templateUrl: 'partials/buy.html', controller: 'MainCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
