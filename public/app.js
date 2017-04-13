var app = angular.module('coffeeApp', ['ngRoute']);

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "homeCtrl"
        })
        
        .otherwise({
            redirectTo: "/home"
        });
}]);