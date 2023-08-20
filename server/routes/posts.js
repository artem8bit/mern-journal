import { Router } from "express";

import { checkAuth } from "../utils/checkAuth.js";
import {
	createPost,
	getAll,
	getById,
	getMyPosts,
	removePost,
	updatePost,
	getPostComments
} from "../controllers/posts.js";

const router = new Router();

// Create Post
// http://localhost:3002/api/posts
router.post("/", checkAuth, createPost);

// Get All Post
// http://localhost:3002/api/posts
router.get("/", getAll);

// get post by id
// http://localhost:3002/api/posts:id
router.get("/:id", getById);

// update post
// http://localhost:3002/api/posts:id
router.put("/:id",checkAuth,updatePost);

// get my post
// http://localhost:3002/api/posts/user/me
router.get("/user/me", checkAuth, getMyPosts);

// remove post
// http://localhost:3002/api/posts/:id
router.delete("/:id", checkAuth, removePost);

// get post comments
// http://localhost:3002/api/comments/:id
router.get("/comments/:id", getPostComments);


export default router;
