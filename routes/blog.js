var express = require('express');
var router = express.Router();

/* Blog single-page Angular interface */
router.get('/', function(req, res) {
  res.render('blog', { title: 'A Fabulous Angular and Bootstrap Blog' });
});

/* Define our blog API here */
var blog_controller = require('../controllers/blogController');
router.get('/api/blog', blog_controller.renderAllPosts);
router.post('/api/blog', blog_controller.createNewPost);
//router.delete

module.exports = router;
