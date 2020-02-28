var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'EdHollingsworth.com' });
});

/* GET dbtest page. */
router.get('/dbtest', function(req, res) {
    // use db stuff already initialized
    var mongoose = require('mongoose');
    var BlogPost = require('../db/schema/blogpost.js');
    mongoose.connect('mongodb://dbuser:password@localhost:27017/edweb', {useNewUrlParser: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    var posts = BlogPost.find({}, 'title body', function(err, recs) {
        if (err) return err.message;
        // should have our posts...
        message = "found them!";
    });
    res.render('dbtest', { title: 'Database Test', posts: posts});
});

module.exports = router;
