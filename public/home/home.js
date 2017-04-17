var app = angular.module('coffeeApp');

app.controller("homeCtrl", function($scope, httpService){
    $scope.test = "home connected";
    
    httpService.getCall().then(function(beans){
        
        $scope.beans = beans;
//        $scope.data = beans.flavorNotes;
        
    });
    
    $scope.colors =  [
        {
        backgroundColor: "rgba(243, 237, 220, 0.5)",
        borderColor: "rgba(243, 237, 220, 0.5)",
        pointBackgroundColor: "rgba(243, 237, 220, 0.5)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "rgba(159,204,0,0.8)",
        pointHoverBorderColor: "rgba(159,204,0,1)"
        }
    ]
    
    $scope.options = {
    scale: {
        ticks: {
            beginAtZero: true,
            userCallback: function (value, index, values) {
                
                return value;
            }
        }
    }
    }
});