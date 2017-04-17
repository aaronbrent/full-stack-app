var app = angular.module('coffeeApp');

app.directive('criteriaSelector', function () {
    return {
        restrict: 'AE',
//        scope: {
//            'newBean': '=',
//            'data': '='
//        },
        templateUrl: 'directives/criteria.html'
    };
});