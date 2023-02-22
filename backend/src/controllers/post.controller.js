import { response } from "../helpers/Response.js";
import { postModel } from "../models/post.model.js";

const postCtrl = {};

postCtrl.getPosts = async(req, reply) => {
    try {
        const posts = await postModel.find();
        response(reply, 200, true, posts, "Posts List");
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

postCtrl.getPostById = async(req, reply) => {
    try {
        const { id } = req.params;

        const post = await postModel.findById(id);

        if (!post) {
            return response(reply, 404, false, "", "Post Not Found");
        }
        response(reply, 200, true, post, "Post Founded");
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

postCtrl.addPost = async(req, reply) => {
    try {
        const { title, description, imgUrl } = req.body;

        const newPost = new postModel({
            title,
            description,
            imgUrl,
        });

        await newPost.save();
        response(reply, 201, true, newPost, "Posts Created");
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

postCtrl.deletePost = async(req, reply) => {
    try {
        const { id } = req.params;

        const post = await postModel.findById(id);

        if (!post) {
            return response(reply, 404, false, "", "Post Not Found");
        }

        await post.deleteOne();
        response(reply, 200, true, "", "Posts Deleted");
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

postCtrl.updatePost = async(req, reply) => {
    try {
        const { id } = req.params;
        const post = await postModel.findById(id);
        if (!post) {
            return response(reply, 404, false, "", "Post Not Found");
        }
        await post.updateOne(req.body);
        response(reply, 200, true, "", "Posts Updated");
    } catch (error) {
        response(reply, 500, false, "", error.message);
    }
};

export default postCtrl;