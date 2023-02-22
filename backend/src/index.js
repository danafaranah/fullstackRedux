import cors from "@fastify/cors";
import formBody from "@fastify/formbody";
import Fastify from "fastify";
import { connectDb } from "./database.js";

const fastify = Fastify({
    logger: true,
});

import postRoutes from "./routes/post.routes.js";
fastify.register(postRoutes, { prefix: "/post" });

connectDb();
fastify.register(cors, { origin: "*" });
fastify.register(formBody);

const start = async() => {
    try {
        await fastify.listen({ port: 4000, host: "0.0.0.0" });
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();