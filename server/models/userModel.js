//import modules
import mongoose from "mongoose";

// Create user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password.']
    },
}, {
    timestamps: true
});

// Create user model
const User = mongoose.model('User', userSchema);

// Export module
export default User;