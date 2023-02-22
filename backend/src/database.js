import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDb = async() => {
    try {
        const db = await mongoose.connect(
            "mongodb+srv://dana:1234@cluster0.fn9p6zs.mongodb.net/reduxPost"
        );
        console.log(`Database Connected ${db.connection.name}`);
    } catch (error) {
        console.log(`Error in the function "connectDb": ${error.message}`);
    }
};