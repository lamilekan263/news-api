require('dotenv').config();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: 6,
    }
});


userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function (incomingPassword) {
    return bcrypt.compare(incomingPassword, this.password);
};

userSchema.methods.createJWT = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {

    });
};
module.exports = mongoose.model('User', userSchema);