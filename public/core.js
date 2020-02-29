// public/core.js

var myBlog = angular.module("myBlog", []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all blog posts and show them
    $http.get('/api/blog')
        .success(function(data) {
            $scope.posts = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        }) ;

    // when submitting the add form, send the text to the node API
    $scope.createPost = function() {
        $http.post('/api/blog', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.posts = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a post after checking it
    $scope.deletePost = function(id) {
        $http.delete('/api/blog/' + id)
            .success(function(data) {
                $scope.posts = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            })
    };
}