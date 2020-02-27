var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'EdHollingsworth.com' });
});

/* GET dbtest page. */
router.get('/dbtest', function(req, res) {
    // Do database stuff here...
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/local', {useNewUrlParser: true});
    var db = mongoose.connection;

    var message = "Fail";
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        message = "Success!";
    });



    res.render('dbtest', { title: 'Database Test', message: message});
});

module.exports = router;
