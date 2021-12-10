var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    content: {type: String, required: true},
    product: {type: Schema.Types.ObjectID, ref: "Product"},
    user: {type: Schema.Types.ObjectID, ref: "User"}
})

module.exports = mongoose.model('Comment', CommentSchema);
