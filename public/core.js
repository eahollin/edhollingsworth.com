// public/core.js

var myBlog = angular.module("myBlog", []);

(function (app) {
    app.controller("mainController", function mainController() {
        var blog = this;

        // when landing on the page, get all blog posts and show them
        $http.get('/api/blog')
            .success(function (data) {
                blog.posts = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });


        blog.formData = {};

        // when submitting the add form, send the text to the node API
        blog.createPost = function () {
            $http.post('/api/blog', $scope.formData)
                .success(function (data) {
                    blog.formData = {}; // clear the form so our user is ready to enter another
                    blog.posts = data;
                    console.log(data);
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                });
        };

        // delete a post after checking it
        blog.deletePost = function (id) {
            $http.delete('/api/blog/' + id)
                .success(function (data) {
                    blog.posts = data;
                    console.log(data);
                })
                .error(function (data) {
                    console.log('Error: ' + data);
                })
        };
    });
})(myBlog);