const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['user', "admin"]
    },
    password: {
        type: String,
        required: true,
    }
});


const User = mongoose.model('User', userSchema);
module.exports = User;