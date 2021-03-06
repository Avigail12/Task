const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model('Tasks', TaskSchema);