// Do database stuff here...
var mongoose = require('mongoose');

//Define BlogPost schema
var Schema = mongoose.Schema;
var BlogPostSchema = new Schema({
    title: String,
    author: String,
    publish_date: String,
    body: String,
    tags: [String]
});

// compile and export the model
try {
    module.exports = mongoose.model('blog_post');
    console.log("model was already compiled");
} catch (e) {
    module.exports = mongoose.model('blog_post', BlogPostSchema);
    console.log("model was successfully compiled");
}

