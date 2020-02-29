// use db stuff already initialized
var blogPostModel = require('../model/blog_post.js');

// Display list of all posts
exports.renderAllPosts = function(req, res, next) {
    blogPostModel.find({}, 'title author publish_date body tags', function(err, posts) {
        if (err) return next(err);
        // provide console feedback, then render the view...
        if (posts == null) console.log("Returned array is null!");
        else console.log("Found " + posts.length + " posts");

        res.render('blog', { title: 'A Fabulous Bootstrap Blog', posts: posts});
    });
};    
