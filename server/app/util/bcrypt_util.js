const bcrypt = require('bcryptjs');

function hash_password(password, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            callback(err, hash);
        })
    })
}

function check_password(password1, password2, callback) {
    bcrypt.compare(password1, password2, (err, match) => {
        callback(match);
    })
}

module.exports = {
    hash_password,
    check_password
}