const mongoose = require('mongoose');
const nodeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        index: true
    },
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
    children: { type: [String], index: true }
});

module.exports = mongoose.model('Node', nodeSchema);