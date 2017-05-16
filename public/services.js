var app = angular.module('coffeeApp');

app.service("httpService", function ($http) {

    this.getCall = function () {
        var list = {};
        return $http.get('/bean/').then(function (response) {
            console.log(response.data);
            list = response.data;
            return list;

        });
    }
    
    this.findBean = function (searchBean) {
        var list = {};
        return $http.get('/bean/' + searchBean).then(function (response) {
            
            list = response.data;
            return list;

        });
    }

    this.addBean = function (newBean) {
        var post = {};
        return $http.post('/bean/', newBean)
            .then(function (response) {
                console.log(response.data);
                bean = response.data;
                return bean;
            });
    }

    this.deleteBean = function (bean) {
        var id = bean._id
        return $http.delete('/bean/' + id).then(function (response) {
            return "You have deleted the item with id " + id;
        })

    }


    this.editBean = function (bean) {
        return $http.put('/bean/' + bean._id, bean);
    }




});