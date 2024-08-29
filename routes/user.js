import express from "express";
import { handleUserSignUP } from "../controllers/user.js";

const router = express.Router();

router.post("/", handleUserSignUP);

export default router;
