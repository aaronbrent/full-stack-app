var app = angular.module('coffeeApp');

app.controller("findCtrl", function($scope, httpService){
    $scope.test = "bean finder connected";
    
    httpService.getCall().then(function(beans){
        
        $scope.beans = beans;
        console.log($scope.beans[0].name);
    });
});