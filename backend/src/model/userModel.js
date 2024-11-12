const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Optional: Enforce unique email addresses
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user' // Optional: Set a default role
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Export the model directly
module.exports = mongoose.model('User', userSchema);
