(function () {
    'use strict';

    var mod = angular.module('main', [
        // 'ui.router'  // Be aware that ui-router will break the inline hrefs in our parallex theme
    ]);

})();
(function () {

    angular.module('app',
        [
        'main'
        ]
    );

})();
(function() {
    
    
    angular.module('main').config(["$stateProvider", routes]);

    var moduleBaseUrl = '/';
    var moduleViewsDir = moduleBaseUrl + "views/";

//    function routes($stateProvider) {

//        $stateProvider.state('tech-info', {
//            url: '/tech-info',
//            templateUrl: moduleViewsDir + "tech-info.html",
//            controller: function($scope) {
//                $scope.options = {
//                    title: "Angular Info"
//                };
//            }
//        });
//    }
    
})();
(function() {
    
    var mod = angular.module("main");
    mod.controller("mainController", ["$scope", "$http", controller]);
    
    function controller($scope, $http) {
        
        $scope.contact = {};
        
        $scope.sendMail = function() {
            var url = "http://aspevia-webapi.azurewebsites.net/api/Forms";
            $http.post(url, $scope.contact).then(function(response) {
            });
        };
        
    }
    
})();