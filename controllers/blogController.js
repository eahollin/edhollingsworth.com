// use db stuff already initialized
var blog_posts = require('../model/blog_posts.js');

// Display list of all posts
exports.post_list = function(req, res, next) {
    blog_posts.find({}, 'title body', function(err, posts) {
        if (err) return next(err);
        // provide console feedback, then render the view...
        if (posts == null) console.log("returned array is null!");
        else console.log("found " + posts.length + " posts!");

        res.render('blog', { title: 'Database Test', posts: posts});
    });
};    
