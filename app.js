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
    mod.controller("mainController", ["$scope", "$http", controller]);
    
    function controller($scope, $http) {
        
        $scope.contact = {};
        
        $scope.sendMail = function() {
            alert('send mail');
            var url = "http://aspevia-webapi.azurewebsites.net/api/Forms";
            $http.post(url, $scope.contact).then(function(response) {
                alert(response.data);
            });
        };
        
    }
    
})();