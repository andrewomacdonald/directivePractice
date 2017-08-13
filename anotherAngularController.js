(function () {
    'use strict';
    angular
        .module('basicAngularModule')
        .controller('AnotherAngularController', AnotherAngularController);

    function AnotherAngularController($scope, $http) {
        console.log('i am inside my other angular controller');
        var counter = 0;

        $scope.customer = {
            name: 'The Coolest Guy In The Universe',
            street: '123432154'
        };

        $scope.customers = [
            {
                name: 'duhhhhh',
                street: 'esfdshsdfh'
            },
            {
                name: 'doooooyyyy',
                street: 'durr  boulevard'
            }
        ];

        $scope.addCustomer = function() {
            counter++;

            $scope.customers.push({
                name: 'Old Guy' + counter,
                street: counter + ' beef jerky avenue'
            });
        };

        $scope.changeData = function() {
            counter++;
            $scope.customer = {
                name: 'Oldest Guy',
                street: counter + ' summer sausage avenue'
            };
        };
    }
})();