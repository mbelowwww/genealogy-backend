const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String, // тип: String
        required: [true, "usernameRequired"],
        unique: true
    },
    password: {
        type: String, // тип String
        required: [true, "passwordRequired"]
    },
});

module.exports = mongoose.model('User',userSchema);