'use strict';

/* Controllers */

angular.module('xaymacaWraps.controllers', [])
.controller('MainCtrl', function($scope) {
    $scope.buyURL = "http://wrapxaymaca.myitworks.com/shop/product/111/";
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
                        { name: "Before & After", loc: "#/before" },
                        { name: "Buy Body Wraps", loc: "#/buy" },
                        { name: "How To Wrap", loc: "#/howto" },
                        { name: "Start Your Own Business", loc: "#/biz" },
                        { name: "Contact", loc: "#/contact"}
                    ];
})
.controller('ChecklistCtrl', function($scope) {
    $scope.checklist =  [   { text: "Instant results" },
                            { text: "Versatile - can be used anywhere from neck to toes!" },
                            { text: "Tones, tightens and firms" },
                            { text: "Continuous results over 72 hours" },
                            { text: "Results last anywhere from 2 to 6 months" },
                            { text: "All-natural active ingredients" },
                            { text: "Convenient - done in the comfort of your home"}
                        ];
})
.controller('LoyalCtrl', function($scope) {
    $scope.checklist =  [   { text: 'Save up to 45% on all orders' },
                            { text: 'Earn Perk Points with every purchase to apply toward FREE product' },
                            { text: 'Access to FITworks! - a complete wellness community with recipes, weight loss tips, and more' },
                            { text: 'Convenient & flexible auto-shipment service' }
                        ];
});