import { model, Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, `The Field "title" is requiered`],
    },
    description: {
        type: String,
        required: [true, `The Field "description" is requiered`],
    },
    imgUrl: {
        type: String,
        required: [true, `The Field "imgUrl" is requiered`],
    },
}, {
    timestamps: true,
});

export const postModel = model("post", postSchema);