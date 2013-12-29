'use strict';


// Declare app level module which depends on controllers, directives, filters, and services
var xaymacaWraps = angular.module('xaymacaWraps', [
  'ngRoute',
  'xaymacaWraps.controllers',
  'xaymacaWraps.directives'
]);

xaymacaWraps.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/landing.html', controller: 'LandingController'});
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
