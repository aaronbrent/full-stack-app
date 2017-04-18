var app = angular.module('coffeeApp');

app.controller("findCtrl", function ($scope, httpService) {
//    $scope.test = "bean finder connected";
    $scope.data = [];
    $scope.submitBean = function (data, searchBean) {
        
        var flavorNotes = [];
        var labels = [];
        var searchLabel = [];

        for (var i = 0; i < data.length; i++) {

            if (data[i] != 0) {
                flavorNotes.push(parseInt(data[i]));
                labels.push($scope.labels[i])
                
            }

        }
        
        var largest = 0;
        for (var j = 0; j < flavorNotes.length; j++){
           
            if (flavorNotes[j]>largest){
                largest = flavorNotes[j];
            }
        }
        var index = flavorNotes.indexOf(largest)
        
        var indexLabel = labels.slice(index, index+1);
        var strLabel = indexLabel.join('');
        if (indexLabel.length > 0){
            searchLabel = ["&labels="];    
        }
        
        searchLabel.push(strLabel);
        var appendLabel = searchLabel.join('');
        
        
        console.log(appendLabel)
        
        var queryString = ['?'];
        for (var key in searchBean){
            queryString.push (key + "=" + searchBean[key])
            queryString.push("&")
            
        }
        
        queryString.pop();
        queryString.push(appendLabel)
        var query = queryString.join('')
        console.log(query)
        
        httpService.findBean(query).then(function (beans) {
                console.log(beans)
                $scope.results = beans

        });
    }
    $scope.labels = ["FLORAL", "FRUITTY", "SOUR", "LEAFY", "ROASTED", "SPICED", "NUTTY", "CHOCOLATE", "SWEET"];
});
