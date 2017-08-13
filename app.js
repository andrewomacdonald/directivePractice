(function() {
    angular
        .module('basicAngularModule', ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            var applicationState = [
                {
                    name: 'hello',
                    url: '/customer1',
                    controller: 'MyAngularController',
                    controllerAs: 'myCtrl',
                    templateUrl: 'template/controllerTemplate.html'
                },
                {
                    name: 'goodbye',
                    url:'/customer2',
                    controller: 'AnotherAngularController',
                    controllerAs: 'urCtrl',
                    templateUrl: 'template/controllerTemplate.html'
                },
                {
                    name: 'otherwise',
                    url: '/',
                    template: '<h2>THIS IS THE OTHERWISE PAGE. CONGRATULATIONS.</h2>'
                }
            ];

            applicationState.forEach(function(state) {
                $stateProvider.state(state);
            });
        }]);

})();