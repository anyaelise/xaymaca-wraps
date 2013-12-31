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

  })
.controller('MenuCtrl', function($scope) {
    $scope.menu =   [   { name: "Home", loc: "#/"},
                        { name: "Buy Body Wraps", loc: "http://wrapxaymaca.myitworks.com/shop/product/111/" },
                        { name: "Start Your Own Business", loc: "#/biz" },
                        { name: "About Me", loc: "#/about" },
                        { name: "Before & After", loc: "#/before" },
                        { name: "Contact", loc: "#/contact"}
                    ];
})
.controller('ChecklistCtrl', function($scope) {
    $scope.checklist =  [   { text: "Instant results" },
                            { text: "Versatile - can be used anywhere from the neck to the toes!" },
                            { text: "Tones, tightens and firms" },
                            { text: "Continuous results over 72 hours" },
                            { text: "Results last anywhere from 2 to 6 months" },
                            { text: "All-natural active ingredients" },
                            { text: "Convenient - done in the comfort of your home"}
                        ];
});