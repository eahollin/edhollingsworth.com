// public/core.js

var myBlog = angular.module("myBlog", []);

(function (app) {
    app.controller("mainController", ['$scope', '$http', function mainController($scope, $http) {
	// initialize the form data
	$scope.formData = {};

        // when landing on the page, get all blog posts and show them
        $http.get('/blog/api/posts').then(
            function success(results) {
                $scope.posts = results.data;
                console.log(results.data);
            },
            function error(results) {
                console.log('Error: ' + results);
            });

        // when submitting the add form, send the text to the node API
        $scope.createPost = function () {
            $http.post('/blog/api/posts', $scope.formData).then(
                function success(results) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.posts = results.data;
                    console.log(results.data);
                },
                function error(results) {
                    console.log('Error: ' + results);
                });
        };

        // delete a post after checking it
        $scope.deletePost = function (id) {
            $http.delete('/blog/api/posts/' + id).then(
                function success(results) {
                    $scope.posts = results.data;
                    console.log(results.data);
                },
                function error(results) {
                    console.log('Error: ' + results);
                });
        };
    }]);
})(myBlog);
