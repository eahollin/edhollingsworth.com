// use db stuff already initialized
var blog_posts = require('../db/schema/blogpost.js');

// Display list of all posts
exports.post_list = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: Post list');

    blog_posts.find({}, 'title body', function(err, posts) {
        if (err) return next(err);
        // should have our posts...
        if (posts == null) console.log("returned array is null!");
        else console.log("found " + posts.length + " posts!");

        res.render('dbtest', { title: 'Database Test', posts: posts});
    });

};    
