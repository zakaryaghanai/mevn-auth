var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = Schema({
        email: {type: String, required: true}, // if unique : true => mongoose.set('useCreateIndex', true);
        firstname: {type: String, required: true},
        lastname: {type: String, required: true},
        password: {type: String, required: true},
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at',}
    });


module.exports = mongoose.model('User', userSchema);