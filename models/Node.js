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
        type: Date
    },
    parents: {
        type: [String],
        index: true
    },
    children: {
        type: [String],
        index: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Node', nodeSchema);