var app = angular.module('coffeeApp');

app.controller("addCtrl", function($scope, httpService){
//    $scope.test="it's connected"
    
    $scope.submitBean = function (data, newBean){
        var flavorNotes = [];
        
        for (var i = 0; i < data.length; i++){
                
                flavorNotes.push(parseInt(data[i]));
                
            }
        newBean.flavorNotes = flavorNotes;
        
        console.log(newBean);  
        
        httpService.addBean(newBean).then(function(bean){
            $scope.newBean = {}
            $scope.data = [0,0,0,0,0,0,0,0,0]
            
            
        });
        
        $scope.success = "You've successfully added " + newBean.name;
        }
         
 
    

    $scope.data = [];

    
    $scope.labels = ["FLORAL", "FRUITTY", "SOUR", "LEAFY", "ROASTED", "SPICED", "NUTTY", "CHOCOLATE", "SWEET"];
  
});