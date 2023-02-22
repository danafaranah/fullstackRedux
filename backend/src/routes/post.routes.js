import postCtrl from "../controllers/post.controller.js";
import { postValid } from "../validations/post.validation.js";

const route = (fastify, opts, done) => {
    fastify.get("/", postCtrl.getPosts);
    fastify.get("/:id", postCtrl.getPostById);
    fastify.post("/", { schema: postValid }, postCtrl.addPost);
    fastify.delete("/:id", postCtrl.deletePost);
    fastify.put("/:id", postCtrl.updatePost);

    done();
};

export default route;