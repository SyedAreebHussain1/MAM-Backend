// const mongoose = require('mongoose');

// const { Schema } = mongoose;
// const authScheme = new Schema({
//     email: { type: String },
//     password: { type: String }
// })
// const authModel = mongoose.model('authData', authScheme);

// module.exports = authModel;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const authScheme = new Schema({
    email: { type: String },
    password: { type: String }
});

// Create a model using the schema
const authModel = mongoose.model('authData', authScheme);

// Export the model
module.exports = authModel;