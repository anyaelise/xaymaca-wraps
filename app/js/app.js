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
  $routeProvider.when('/biz', {templateUrl: 'partials/biz.html', controller: 'MainCtrl'});
  $routeProvider.when('/howto', {templateUrl: 'partials/howto.html', controller: 'MainCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'MainCtrl'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);


/****** jQuery stuff *******/
$(function() {
    $('li').click(function() {
        var children = $(this).children();
        children[0].click();
    });
});
