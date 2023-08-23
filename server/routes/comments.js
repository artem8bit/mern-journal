import { Router } from "express";
const router = new Router();
import { checkAuth } from "../utils/checkAuth.js";
import { createComment } from "../controllers/comments.js";

// Create Comment
// https://mern-journal-app.onrender.com/api/comments/:id
router.post("/:id", checkAuth, createComment);

export default router;
