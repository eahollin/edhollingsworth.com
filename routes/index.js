var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'EdHollingsworth.com' });
});

/* GET dbtest page. */
var post_controller = require('../controllers/postController');

router.get('/dbtest', post_controller.post_list); 

/*function(req, res) {
    // use db stuff already initialized
    var mongoose = require('mongoose');
    var BlogPost = require('../db/schema/blogpost.js');
    
    mongoose.connect('mongodb://dbuser:password@localhost:27017/edweb', {useNewUrlParser: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    var post = BlogPost.findOne({}, 'title body', function(err, rec) {
        if (err) return err.message;
        // should have our posts...
        console.log("found " + rec.title + "!");
        return recs;
    });
    res.render('dbtest', { title: 'Database Test', posts: post.title});
});*/

module.exports = router;
