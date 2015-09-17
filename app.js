(function () {
    'use strict';

    var mod = angular.module('main', [
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
    
    var mod = angular.module("main");
    mod.controller("mainController", ["$scope", controller]);
    
    function controller($scope) {
        
        alert('hey we are in the controller');
        
        $scope.sendMail = function() {
            alert('send mail');
        };
        
    }
    
})();