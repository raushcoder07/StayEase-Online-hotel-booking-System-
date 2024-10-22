import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/OYO";

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected...");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
