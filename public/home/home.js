var app = angular.module('coffeeApp');

app.controller("homeCtrl", function($scope, httpService){
    $scope.test = "home connected";
    
    httpService.getCall().then(function(beans){
        
        $scope.beans = beans;
//        $scope.data = beans.flavorNotes;
        
    });
    
    

    
    $scope.labels = ["FLORAL", "FRUITTY", "SOUR", "LEAFY", "ROASTED", "SPICED", "NUTTY", "CHOCOLATE", "SWEET"];
});