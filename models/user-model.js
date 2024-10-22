import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,  // Correct capitalization
        required: true,
        trim: true,
    },
    email: {
        type: String,  // Correct capitalization
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,  // Correct capitalization
        required: true,
        trim: true,
    },
}, { timestamps: true });

// Check if model exists in mongoose.models before defining it
export default mongoose.models.User || mongoose.model("User", UserSchema);
