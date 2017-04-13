var app = angular.module('coffeeApp');

app.controller("homeCtrl", function($scope, httpService){
    $scope.test = "home connected";
    
    httpService.getCall().then(function(beans){
        
        $scope.beans = beans;
        console.log($scope.beans[0].name);
    });
});