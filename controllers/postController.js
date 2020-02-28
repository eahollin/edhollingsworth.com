// use db stuff already initialized
var BlogPost = require('../db/schema/blogpost.js');

// Display list of all posts
exports.post_list = function(req, res, next) {
    //res.send('NOT IMPLEMENTED: Post list');

    BlogPost.find({}, 'title body', function(err, posts) {
        if (err) return next(err);
        // should have our posts...
        if (posts == null) console.log("returned array is null!");
        else console.log("found " + posts + "!");

        res.render('dbtest', { title: 'Database Test', posts: posts});
    });

};    
