
const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    todo: { type: String },
});

const todoModel = mongoose.model('todo', todoSchema);

// Export the model
module.exports = todoModel;