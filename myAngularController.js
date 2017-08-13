(function () {
    'use strict';
    angular
        .module('basicAngularModule')
        .controller('MyAngularController', MyAngularController);

    function MyAngularController($scope) {
        console.log('i am inside my angular controller');
        var counter = 0;

        $scope.customer = {
            name: 'Steve',
            street: '123 Steve St'
        };

        $scope.customers = [
            {
                name: 'Bob',
                street: '456 Bob st'
            },
            {
                name: 'tronald dump',
                street: 'the toilet'
            }
        ];

        $scope.addCustomer = function() {
            counter++;

            $scope.customers.push({
                name: 'New Guy' + counter,
                street: counter + ' new guy avenue'
            });
        };

        $scope.changeData = function() {
            counter++;
            $scope.customer = {
                name: 'Guy Who Wears Shades At Night',
                street: counter + ' shades Avenue'
            };
        };
    }
})();