// Do database stuff here...
var mongoose = require('mongoose');

//Define BlogPost schema
var Schema = mongoose.Schema;
var BlogPostSchema = new Schema({
    title: String,
    body: String,
    tags: [String]
});

// compile and export the model
module.exports = mongoose.model('blog_posts', BlogPostSchema);
