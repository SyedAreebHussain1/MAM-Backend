const mongoose = require('mongoose');
const { Schema } = mongoose;

const getTodoSchema = new Schema({
    todo: { type: String },
});

const getTodoModel = mongoose.model('getTodoSchema', getTodoSchema);

module.exports = getTodoModel;