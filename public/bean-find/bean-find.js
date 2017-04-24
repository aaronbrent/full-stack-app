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
        
        console.log(flavorNotes)
        console.log(labels)
        
        var largest = 0;
        for (var j = 0; j < flavorNotes.length; j++){
           
            if (flavorNotes[j]>largest){
                largest = flavorNotes[j];
            }
        }
        var index = flavorNotes.indexOf(largest)
        
        var indexLabel = labels.slice(index, index+1);
        console.log(indexLabel)
        var strLabel = indexLabel.join('');
        if (indexLabel.length > 0){
            searchLabel = ["labels="];    
        }
        
        searchLabel.push(strLabel);
        var appendLabel = searchLabel.join('');
        
        
        console.log(appendLabel)
        
        var queryString = ['?'];
        for (var key in searchBean){
            queryString.push (key + "=" + searchBean[key])
            queryString.push("&")
            
        }
        
//        queryString.pop();
        queryString.push(appendLabel)
        var query = queryString.join('')
        console.log(query)
        
        httpService.findBean(query).then(function (beans) {
                console.log(beans)
                if (beans.length < 1){
                   $scope.alert = true; 
                }else{
                    $scope.alert = false;
                }
                $scope.results = beans
                console.log(beans.length)
                
                

        });
        
        
    }
    $scope.labels = ["Floral", "Fruity", "Sour", "Leafy", "Roasted", "Spiced", "Nutty", "Chocolate", "Sweet"];

    
     $scope.labelColors = [ '#E3CCFF', '#FFE8E1', '#FBFFE7', '#DDFFD8', '#AB8E7B', '#FF9485', '#FFD995', '#4A261C', '#D4FFFF']
    
//    
         
         
     $scope.colors =  [
        {
        backgroundColor: "rgba(88, 243, 207, 0.2)",
        borderColor: "rgba(88, 243, 207, 0.2)",
        pointBackgroundColor: "rgba(88, 243, 207, 0.2)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "rgba(159,204,0,0.8)",
        pointHoverBorderColor: "rgba(159,204,0,1)"
        }
    ]
    
    $scope.options = {
        scale: {
            ticks: {
                beginAtZero: true,
                max: 10

            }
        }
    }
});
