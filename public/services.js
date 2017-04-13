var app = angular.module('coffeeApp');

app.service("httpService", function ($http) {

    this.getCall = function () {
        var list = {};
        return $http.get('http://localhost:8000/bean/').then(function (response) {
            console.log(response.data);
            list = response.data;
            return list;

        });
    }

    this.createPost = function (newPost) {
        var post = {};
        return $http.post('http://localhost:8000/bean/', newPost)
            .then(function (response) {
                console.log(response.data);
                post = response.data;
                return post;
            });
    }

    this.deletePost = function (bean) {
        var id = bean._id
        return $http.delete('http://localhost:8000/bean/' + id).then(function (response) {
            return "You have deleted the item with id " + id;
        })

    }


    this.editPost = function (bean) {
        return $http.put('http://localhost:8000/bean/' + issue._id, issue);
    }




});