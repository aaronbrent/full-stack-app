var app = angular.module('coffeeApp', ['ngRoute', 'chart.js']);

app.config(["$routeProvider", "ChartJsProvider", function ($routeProvider, ChartJsProvider) {
    
    ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
    
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeCtrl"
        })
        .when("/bean-find", {
            templateUrl: "bean-find/bean-find.html",
            controller: "findCtrl"
        })
        .when("/add-bean", {
            templateUrl: "add-bean/add-bean.html",
            controller: "addCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);