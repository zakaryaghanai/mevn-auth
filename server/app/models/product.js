var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var productSchema = Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
    price: {type: mongoose.Schema.Types.String, required: true},
    user: {type: mongoose.Schema.Types.ObjectID, required: true, ref: "User"},
    comments: [{type: mongoose.Schema.Types.ObjectID, ref: "Comment"}]
})
//

module.exports = mongoose.model('Product', productSchema);