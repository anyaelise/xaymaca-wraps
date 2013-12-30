'use strict';

/* Controllers */

angular.module('xaymacaWraps.controllers', [])
.controller('LandingCtrl', function($scope) {
    $scope.hello = "Hello World!";
})
.controller('SocialMediaCtrl', function($scope) {
    $scope.sites =  [   { name: "Facebook", icon: "img/facebook.png", loc: "http://www.facebook.com/WrapXaymaca" },
                        { name: "Instagram", icon: "img/instagram.png", loc: "http://www.instagram.com/WrapXaymaca"},
                        { name: "Twitter", icon: "img/twitter.png", loc: "http://www.twitter.com/WrapXaymaca"},
                        { name: "YouTube", icon: "img/youtube.png", loc: "http://www.youtube.com/WrapXaymaca" }
                    ];

  });