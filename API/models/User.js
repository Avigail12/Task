const mongoose = require('mongoose');

const Userschema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', Userschema);