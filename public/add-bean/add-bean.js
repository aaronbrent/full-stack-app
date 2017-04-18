var app = angular.module('coffeeApp');

app.controller("addCtrl", function ($scope, httpService) {
    //    $scope.test="it's connected"


    $scope.submitBean = function (data, newBean) {
        var flavorNotes = [];
        var labels = [];

        for (var i = 0; i < data.length; i++) {

            if (data[i] != 0) {
                flavorNotes.push(parseInt(data[i]));
                labels.push($scope.labels[i])
            }

        }
        console.log(flavorNotes);
        console.log(labels);
        newBean.flavorNotes = flavorNotes;
        newBean.labels = labels;

        if (flavorNotes.length < 3) {
            newBean.pieChart = true;
        } else {
            newBean.pieChart = false;
        }

        newBean.rank = 0;

        httpService.addBean(newBean).then(function (bean) {
            $scope.newBean = {}
            $scope.data = [0, 0, 0, 0, 0, 0, 0, 0, 0]


        });

        $scope.success = newBean.name;
    }




    $scope.data = [];


    $scope.labels = ["FLORAL", "FRUITTY", "SOUR", "LEAFY", "ROASTED", "SPICED", "NUTTY", "CHOCOLATE", "SWEET"];

});
