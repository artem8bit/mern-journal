import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

// Register
// https://mern-journal-app.onrender.com/api/auth/register
router.post("/register", register);

// Login
// https://mern-journal-app.onrender.com/api/auth/login
router.post("/login", login);

// Get Me

router.get("/me", checkAuth, getMe);

export default router;
