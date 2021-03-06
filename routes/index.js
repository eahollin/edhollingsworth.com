var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'EdHollingsworth.com' });
});

/* GET bio page. */
router.get('/bio', function(req, res) {
    res.render('bio', { title: 'Bio' });
});

/* GET blog page. */
var blog_controller = require('../controllers/blogController');
router.get('/blog', blog_controller.renderAllPosts);

module.exports = router;
