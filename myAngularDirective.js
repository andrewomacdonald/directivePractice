(function() {
    'use strict';
    angular
        .module('basicAngularModule')
        .directive('myDirective', myDirective);

    function myDirective() {
        var directive = {
            restrict: 'AE',
            replace: 'true',
            scope: '=',
            templateUrl: 'template/directiveTemplate.html',
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            var colorFlag = true;

            scope.changeColor = function() {
                colorFlag = !colorFlag;
                if(colorFlag) {
                    element.css('font-family', 'Times New Roman');
                } else {
                    element.css('font-family', 'Helvetica Neue');
                }
            };
        }
    }
})();