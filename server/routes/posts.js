import { Router } from "express";

import { checkAuth } from "../utils/checkAuth.js";
import {
	createPost,
	getAll,
	getById,
	getMyPosts,
	removePost,
	updatePost,
	getPostComments,
} from "../controllers/posts.js";

const router = new Router();

// Create Post
// https://mern-journal-app.onrender.com/api/posts
router.post("/", checkAuth, createPost);

// Get All Post
// https://mern-journal-app.onrender.com/api/posts
router.get("/", getAll);

// get post by id
// https://mern-journal-app.onrender.com/api/posts:id
router.get("/:id", getById);

// update post
// https://mern-journal-app.onrender.com/api/posts:id
router.put("/:id", checkAuth, updatePost);

// get my post
// https://mern-journal-app.onrender.com/api/posts/user/me
router.get("/user/me", checkAuth, getMyPosts);

// remove post
// https://mern-journal-app.onrender.com/api/posts/:id
router.delete("/:id", checkAuth, removePost);

// get post comments
// https://mern-journal-app.onrender.com/api/comments/:id
router.get("/comments/:id", getPostComments);

export default router;
