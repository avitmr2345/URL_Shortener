import express from "express";
import { handleUserLogin, handleUserSignUP } from "../controllers/user.js";

const router = express.Router();

router.post("/", handleUserSignUP);
router.post("/login", handleUserLogin);

export default router;
