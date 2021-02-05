const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    username: {
        type: String,
        required: [true, "usernameRequired"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "passwordRequired"]
    }
}, {timestamps: true});

module.exports = mongoose.model('User',userSchema);